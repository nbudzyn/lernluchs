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
      comment: "Vertikalen bleiben unabhängig von der Präsentationskomposition.",
      severity: "error",
      from: { path: "^src/verticals/" },
      to: { path: "^src/app/" },
    },
    {
      name: "shared-is-foundational",
      comment: "Der gemeinsame Kern importiert weder Präsentation noch Fachvertikalen.",
      severity: "error",
      from: { path: "^src/shared/" },
      to: { path: "^src/(app|verticals)/" },
    },
    ...[
      "catalog",
      "learning-progress",
      "competency-profile",
      "learning-checks",
      "map",
      "pwa-reliability",
    ].map((vertical) => ({
      name: `${vertical}-does-not-import-other-verticals`,
      comment: "Fachvertikalen kommunizieren nur über bewusst entworfene gemeinsame Verträge.",
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
