import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { MulmoProgressLog } from "../../types";
import type { SessionType, BeatSessionType, SessionProgressEvent } from "mulmocast";

type SessionStateEntry = Record<SessionType, boolean>;
type BeatSessionStateEntry = Record<BeatSessionType, Record<number, boolean>>;
type SessionState = Record<string, { beat: BeatSessionStateEntry; artifact: SessionStateEntry }>;

export const useMulmoEventStore = defineStore("mulmoEvent", () => {
  const mulmoEvent = ref<Record<string, SessionProgressEvent>>({});
  const sessionState = ref<SessionState>({});

  const mulmoLogCallback = (log: MulmoProgressLog<SessionProgressEvent>) => {
    const { projectId, data } = log;
    const { kind, sessionType, inSession } = data;
    mulmoEvent.value[projectId] = data;

    if (!sessionState.value[projectId]) {
      sessionState.value[projectId] = {
        artifact: {
          audio: false,
          image: false,
          video: false,
          multiLingual: false,
          caption: false,
          pdf: false,
        },
        beat: {
          audio: {},
          image: {},
          multiLingual: {},
          caption: {},
          movie: {},
          html: {},
          imageReference: {},
        },
      };
    }

    if (kind === "session") {
      sessionState.value[projectId]["artifact"][sessionType] = inSession;
    }
    if (kind === "beat") {
      sessionState.value[projectId]["beat"][sessionType][data.index] = inSession;
    }
  };

  const isArtifactGenerating = computed(() => {
    return Object.keys(sessionState.value).reduce((tmp: Record<string, boolean>, projectId) => {
      tmp[projectId] = Object.values(sessionState.value[projectId]["artifact"]).some((state) => state);
      return tmp;
    }, {});
  });

  const isBeatGenerating = computed(() => {
    return Object.keys(sessionState.value).reduce((tmp: Record<string, boolean>, projectId) => {
      tmp[projectId] = Object.values(sessionState.value[projectId]["beat"]).some((sessionState) => {
        return Object.values(sessionState).some((value) => value);
      }, {});
      return tmp;
    }, {});
  });

  return {
    mulmoEvent,
    mulmoLogCallback,
    sessionState,
    isArtifactGenerating,
    isBeatGenerating,
  };
});
