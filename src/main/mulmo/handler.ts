import {
  images,
  audio,
  movie,
  captions,
  initializeContext,
  updateNpmRoot,
  readTemplatePrompt,
  getAvailableTemplates,
  audioFilePath,
  movieFilePath,
  addSessionProgressCallback,
  removeSessionProgressCallback,
  getBeatAudioPath,
  imagePreprocessAgent,
  MulmoPresentationStyleMethods,
} from "mulmocast";
import type { MulmoStudioContext } from "mulmocast";
import type { TransactionLog } from "graphai";
import { getProjectPath, SCRIPT_FILE_NAME } from "../project_manager";
import path from "path";
import fs from "fs";

updateNpmRoot(path.resolve(__dirname, "../../node_modules/mulmocast"));

const getContext = async (projectId: string): Promise<MulmoStudioContext | null> => {
  const projectPath = getProjectPath(projectId);
  const argv = {
    v: true,
    b: projectPath,
    o: path.join(projectPath, "output"),
    file: SCRIPT_FILE_NAME,
  };
  return await initializeContext(argv);
};

export const mulmoActionRunner = async (projectId: string, actionName: string, webContents) => {
  try {
    const context = await getContext(projectId);
    const graphAICallbacks = [
      (log: TransactionLog) => {
        if (webContents) {
          webContents.send("progress-update", {
            projectId,
            type: "graphai",
            data: log,
          });
        }
      },
    ];
    const mulmoCallback = (data) => {
      if (webContents) {
        webContents.send("progress-update", {
          projectId,
          type: "mulmo",
          data,
        });
      }
    };
    addSessionProgressCallback(mulmoCallback);
    // await runTranslateIfNeeded(context, argv);
    if (actionName === "audio") {
      await audio(context, graphAICallbacks);
    }
    if (actionName === "image") {
      await images(context, graphAICallbacks);
    }
    if (actionName === "movie") {
      await audio(context, graphAICallbacks);
      await images(context, graphAICallbacks);
      if (context.caption) {
        await captions(context);
      }
      await movie(context);
    }
    if (actionName === "pdf") {
      await images(context, graphAICallbacks);
      // await pdf(context, argv.pdf_mode, argv.pdf_size);
    }
    removeSessionProgressCallback(mulmoCallback);

    return {
      result: true,
    };
  } catch (error) {
    webContents.send("progress-update", {
      projectId,
      type: "error",
      data: error,
    });
    return {
      result: false,
      error,
    };
  }
};
const mediaFilePath = async (projectId: string, actionName: string) => {
  const context = await getContext(projectId);
  if (actionName === "audio") {
    return audioFilePath(context);
  }
  if (actionName === "movie") {
    return movieFilePath(context);
  }
  throw Error("no download file");
};
const mulmoDownload = async (projectId: string, actionName: string) => {
  const path = await mediaFilePath(projectId, actionName);
  const buffer = fs.readFileSync(path);
  return buffer.buffer;
};

export const mulmoReadTemplatePrompt = (templateName: string) => {
  return readTemplatePrompt(templateName);
};

export const mulmoAudioFiles = async (projectId: string) => {
  try {
    const context = await getContext(projectId);
    return context.studio.script.beats
      .map((beat) => {
        try {
          const { text } = beat; // TODO: multiLingual
          return getBeatAudioPath(text, context, beat);
        } catch (e) {
          console.log(e);
          return "";
        }
      })
      .map((fileName) => {
        if (fs.existsSync && fs.existsSync(fileName)) {
          const buffer = fs.readFileSync(fileName);
          return buffer.buffer;
          // return fileName;
        }
        return;
      });
  } catch (error) {
    console.log(error);
  }
};

const beatImage = (context, imageAgentInfo) => {
  return async (beat, index) => {
    try {
      const res = await imagePreprocessAgent({ context, beat, index, imageAgentInfo, imageRefs: {} });
      if (res.imagePath && fs.existsSync(res.imagePath)) {
        const buffer = fs.readFileSync(res.imagePath);
        res.imageData = buffer.buffer;
      }
      // console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      return "";
    }
  };
};

export const mulmoImageFiles = async (projectId: string) => {
  try {
    const context = await getContext(projectId);
    const imageAgentInfo = MulmoPresentationStyleMethods.getImageAgentInfo(context.presentationStyle);
    return Promise.all(context.studio.script.beats.map(beatImage(context, imageAgentInfo)));
  } catch (error) {
    console.log(error);
  }
};
export const mulmoImageFile = async (projectId: string, index: number) => {
  try {
    const context = await getContext(projectId);
    const imageAgentInfo = MulmoPresentationStyleMethods.getImageAgentInfo(context.presentationStyle);
    const beat = context.studio.script.beats[index];
    return await beatImage(context, imageAgentInfo)(beat, index);
  } catch (error) {
    console.log(error);
  }
};

export const mulmoHandler = async (method, webContents, ...args) => {
  try {
    switch (method) {
      case "readTemplatePrompt":
        return mulmoReadTemplatePrompt(args[0]);
      case "getAvailableTemplates":
        return getAvailableTemplates();
      case "mulmoActionRunner":
        return await mulmoActionRunner(args[0], args[1], webContents);
      case "downloadFile":
        return await mulmoDownload(args[0], args[1]);
      case "mediaFilePath":
        return await mediaFilePath(args[0], args[1]);
      case "mulmoAudioFiles":
        return await mulmoAudioFiles(args[0]);
      case "mulmoImageFiles":
        return await mulmoImageFiles(args[0]);
      case "mulmoImageFile":
        return await mulmoImageFile(args[0], args[1]);
      default:
        throw new Error(`Unknown method: ${method}`);
    }
  } catch (error) {
    return { error };
  }
};
