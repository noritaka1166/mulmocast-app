export const mulmoSample = {
  "$mulmocast": {
    "version": "1.0"
  },
  "title": "Media Test",
  "references": [
    {
      "url": "https://www.mulmocast.com",
      "title": "Mulmocast",
      "type": "article"
    }
  ],
  "speechParams": {
    "speakers": {
      "Presenter": {
        "voiceId": "shimmer",
        "displayName": {
          "en": "Presenter"
        }
      }
    }
  },
  "beats": [
    {
      "speaker": "Presenter",
      "text": "This is a local image.",
      "image": {
        "type": "image",
        "source": {
          "kind": "path",
          "path": "../../assets/images/mulmocast_credit.png"
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "",
      "duration": 0.5,
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "No Audio",
          "bullets": ["0.5 seconds"]
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a remote image.",
      "image": {
        "type": "image",
        "source": {
          "kind": "url",
          "url": "https://raw.githubusercontent.com/receptron/mulmocast-cli/refs/heads/main/assets/images/mulmocast_credit.png"
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "",
      "duration": 2,
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "No Audio",
          "bullets": ["2 seconds"]
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a local movie with audio.",
      "image": {
        "type": "movie",
        "source": {
          "kind": "url",
          "url": "https://github.com/receptron/mulmocast-media/raw/refs/heads/main/test/pingpong.mov"
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "",
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "Local Audio Test",
          "bullets": ["Something"]
        }
      },
      "audio": {
        "type": "audio",
        "source": {
          "kind": "path",
          "path": "../../assets/audio/local_voice.mp3"
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a bulleted list in text slide format.",
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "Human Evolution",
          "bullets": [
            "Early Primates",
            "Hominids and Hominins",
            "Australopithecus",
            "Genus Homo Emerges",
            "Homo erectus and Migration",
            "Neanderthals and Other Archaic Humans",
            "Homo sapiens"
          ]
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a table in markdown format.",
      "image": {
        "type": "markdown",
        "markdown": [
          "# Markdown Table Example",
          "### Table",
          "| Item              | In Stock | Price |",
          "| :---------------- | :------: | ----: |",
          "| Python Hat        |   True   | 23.99 |",
          "| SQL Hat           |   True   | 23.99 |",
          "| Codecademy Tee    |  False   | 19.99 |",
          "| Codecademy Hoodie |  False   | 42.99 |",
          "### Paragraph",
          "This is a paragraph."
        ]
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a chart in chart format.",
      "image": {
        "type": "chart",
        "title": "Sales and Profits (from Jan to June)",
        "chartData": {
          "type": "bar",
          "data": {
            "labels": ["January", "February", "March", "April", "May", "June"],
            "datasets": [
              {
                "label": "Revenue ($1000s)",
                "data": [120, 135, 180, 155, 170, 190],
                "backgroundColor": "rgba(54, 162, 235, 0.5)",
                "borderColor": "rgba(54, 162, 235, 1)",
                "borderWidth": 1
              },
              {
                "label": "Profit ($1000s)",
                "data": [45, 52, 68, 53, 61, 73],
                "backgroundColor": "rgba(75, 192, 192, 0.5)",
                "borderColor": "rgba(75, 192, 192, 1)",
                "borderWidth": 1
              }
            ]
          },
          "options": {
            "responsive": true,
            "animation": false
          }
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a diagram in mermaid format.",
      "image": {
        "type": "mermaid",
        "title": "Business Process Flow",
        "code": {
          "kind": "text",
          "text": "graph LR\n    A[Market Research] --> B[Product Planning]\n    B --> C[Development]\n    C --> D[Testing]\n    D --> E[Manufacturing]\n    E --> F[Marketing]\n    F --> G[Sales]\n    G --> H[Customer Support]\n    H --> A"
        }
      }
    },
    {
      "speaker": "Presenter",
      "text": "This is a tailwind html format.",
      "image": {
        "type": "html_tailwind",
        "html": [
          "<main class=\"flex-grow\">",
          "  <!-- Hero Section -->",
          "  <section class=\"bg-blue-600 text-white py-20\">",
          "    <div class=\"container mx-auto px-6 text-center\">",
          "      <h1 class=\"text-4xl md:text-5xl font-bold mb-4\">Welcome to Mulmocast</h1>",
          "      <p class=\"text-lg md:text-xl mb-8\">A modern web experience powered by Tailwind CSS</p>",
          "      <a href=\"#features\" class=\"bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition\">",
          "        Learn More",
          "      </a>",
          "    </div>",
          "  </section>",
          "",
          "  <!-- Features Section -->",
          "  <section id=\"features\" class=\"py-16 bg-gray-100\">",
          "    <div class=\"container mx-auto px-6\">",
          "      <div class=\"grid grid-cols-1 md:grid-cols-3 gap-8 text-center\">",
          "        <div>",
          "          <div class=\"text-blue-600 text-4xl mb-2\">⚡</div>",
          "          <h3 class=\"text-xl font-semibold mb-2\">Fast</h3>",
          "          <p class=\"text-gray-600\">Built with performance in mind using modern tools.</p>",
          "        </div>",
          "        <div>",
          "          <div class=\"text-blue-600 text-4xl mb-2\">🎨</div>",
          "          <h3 class=\"text-xl font-semibold mb-2\">Beautiful</h3>",
          "          <p class=\"text-gray-600\">Styled with Tailwind CSS for clean, responsive design.</p>",
          "        </div>",
          "        <div>",
          "          <div class=\"text-blue-600 text-4xl mb-2\">🚀</div>",
          "          <h3 class=\"text-xl font-semibold mb-2\">Launch Ready</h3>",
          "          <p class=\"text-gray-600\">Easy to deploy and extend for your next big idea.</p>",
          "        </div>",
          "      </div>",
          "    </div>",
          "  </section>",
          "</main>",
          "",
          "<!-- Footer -->",
          "<footer class=\"bg-white text-gray-500 text-center py-6 border-t\">",
          "  2025 Mulmocast.",
          "</footer>"
        ]
      }
    }
  ]
};
