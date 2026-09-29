module.exports = {
  forbidden: [
    {
      name: "no-circular-dependencies",
      comment: "Zyklen machen die Grenzen und Initialisierung unklar.",
      severity: "error",
      from: {},
      to: { circular: true },
    },
    {
      name: "verticals-do-not-import-app",
      comment:
        "Vertikalen bleiben unabhängig von der Präsentationskomposition.",
      severity: "error",
      from: { path: "^src/verticals/" },
      to: { path: "^src/app/" },
    },
    {
      name: "shared-is-foundational",
      comment:
        "Der gemeinsame Kern importiert weder Präsentation noch Fachvertikalen.",
      severity: "error",
      from: { path: "^src/shared/" },
      to: { path: "^src/(app|verticals)/" },
    },
    {
      name: "app-uses-public-vertical-entrypoints",
      comment: "Die App importiert nur öffentliche Vertikal-Einstiegspunkte.",
      severity: "error",
      from: { path: "^src/app/" },
      to: {
        path: "^src/verticals/(topics|help|learning-checks|learning-progress)/(?!index\\.ts$)",
      },
    },
    {
      name: "topics-import-only-public-help",
      comment:
        "Themen dürfen nur den öffentlichen Hilfe-Einstiegspunkt importieren.",
      severity: "error",
      from: { path: "^src/verticals/topics/" },
      to: { path: "^src/verticals/(?!topics/|help/index\\.ts$)" },
    },
    {
      name: "help-is-self-contained",
      comment:
        "Die Hilfe hängt von keiner anderen App-Vertikale und keinem Shared-Modul ab.",
      severity: "error",
      from: { path: "^src/verticals/help/" },
      to: { path: "^src/(shared/|verticals/(?!help/))" },
    },
    ...[
      "learning-progress",
      "competency-profile",
      "learning-checks",
      "map",
      "pwa-reliability",
    ].map((vertical) => ({
      name: `${vertical}-does-not-import-other-verticals`,
      comment:
        "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
      severity: "error",
      from: { path: `^src/verticals/${vertical}/` },
      to: { path: `^src/verticals/(?!${vertical}/)` },
    })),
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsConfig: { fileName: "tsconfig.json" },
  },
};
