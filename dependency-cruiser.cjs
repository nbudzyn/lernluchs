module.exports = {
  forbidden: [
    {
      name: "no-circular-dependencies",
      comment: "Zyklen machen die Grenzen und Initialisierung unklar.",
      severity: "error",
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: "verticals-do-not-import-app",
      comment:
        "Vertikalen bleiben unabhängig von der Präsentationskomposition.",
      severity: "error",
      from: {
        path: "^src/verticals/",
      },
      to: {
        path: "^src/app/",
      },
    },
    {
      name: "shared-is-foundational",
      comment:
        "Der gemeinsame Kern importiert weder Präsentation noch Fachvertikalen.",
      severity: "error",
      from: {
        path: "^src/shared/",
      },
      to: {
        path: "^src/(app|verticals)/",
      },
    },
    {
      name: "app-uses-public-vertical-entrypoints",
      comment: "Die App importiert nur öffentliche Vertikal-Einstiegspunkte.",
      severity: "error",
      from: {
        path: "^src/app/",
      },
      to: {
        path: "^src/verticals/[^/]+/(?!index\\.ts$)",
      },
    },
    {
      name: "topics-import-only-public-supplementary-views",
      comment:
        "Themen dürfen nur öffentliche Hilfe- und Impressum-Einstiegspunkte importieren.",
      severity: "error",
      from: {
        path: "^src/verticals/topics/",
      },
      to: {
        path: "^src/verticals/(?!topics/|(?:help|imprint)/index\\.ts$)",
      },
    },
    {
      name: "imprint-is-self-contained",
      comment:
        "Das Impressum hängt von keiner anderen App-Vertikale und keinem Shared-Modul ab.",
      severity: "error",
      from: {
        path: "^src/verticals/imprint/",
      },
      to: {
        path: "^src/(shared/|verticals/(?!imprint/))",
      },
    },
    {
      name: "help-is-self-contained",
      comment:
        "Die Hilfe hängt von keiner anderen App-Vertikale und keinem Shared-Modul ab.",
      severity: "error",
      from: {
        path: "^src/verticals/help/",
      },
      to: {
        path: "^src/(shared/|verticals/(?!help/))",
      },
    },
    {
      name: "learning-state-does-not-import-other-verticals",
      comment:
        "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
      severity: "error",
      from: {
        path: "^src/verticals/learning-state/",
      },
      to: {
        path: "^src/verticals/(?!learning-state/)",
      },
    },
    {
      name: "competency-profile-does-not-import-other-verticals",
      comment:
        "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
      severity: "error",
      from: {
        path: "^src/verticals/competency-profile/",
      },
      to: {
        path: "^src/verticals/(?!competency-profile/)",
      },
    },
    {
      name: "learning-checks-does-not-import-other-verticals",
      comment:
        "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
      severity: "error",
      from: {
        path: "^src/verticals/learning-checks/",
      },
      to: {
        path: "^src/verticals/(?!learning-checks/)",
      },
    },
    {
      name: "topic-map-does-not-import-other-verticals",
      comment:
        "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
      severity: "error",
      from: {
        path: "^src/verticals/topic-map/",
      },
      to: {
        path: "^src/verticals/(?!topic-map/)",
      },
    },
    {
      name: "pwa-reliability-does-not-import-other-verticals",
      comment:
        "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
      severity: "error",
      from: {
        path: "^src/verticals/pwa-reliability/",
      },
      to: {
        path: "^src/verticals/(?!pwa-reliability/)",
      },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
    },
    parser: "swc",
  },
};
