module.exports = {
  forbidden: [
    {
      name: "no-circular-dependencies",
      severity: "error",
      from: {},
      to: { circular: true },
    },
    {
      name: "verticals-stay-independent",
      severity: "error",
      from: { path: "^src/verticals/([^/]+)/" },
      to: { pathNot: "^(?:src/verticals/$1/|src/shared/|node_modules/)" },
    },
    {
      name: "shared-is-foundational",
      severity: "error",
      from: { path: "^src/shared/" },
      to: { pathNot: "^(?:src/shared/|node_modules/)" },
    },
    {
      name: "source-does-not-import-tests-or-tooling",
      severity: "error",
      from: { path: "^src/" },
      to: { pathNot: "^(?:src/|node_modules/)" },
    },
    {
      name: "app-uses-public-vertical-entrypoints",
      severity: "error",
      from: { path: "^(?:src/app/|tests/app/|e2e/app/)" },
      to: { path: "^src/verticals/[^/]+/(?!(?:index|data)\\.ts$)" },
    },
    {
      name: "vertical-tests-stay-with-their-owner",
      severity: "error",
      from: { path: "^(?:tests|e2e)/verticals/([^/]+)/" },
      to: {
        dependencyTypesNot: ["core"],
        pathNot:
          "^(?:(?:src|tests|e2e)/verticals/$1/|src/shared/|(?:tests|e2e)/shared/|docs/|node_modules/)",
      },
    },
    {
      name: "shared-test-helpers-stay-independent",
      severity: "error",
      from: { path: "^(?:tests|e2e)/shared/" },
      to: {
        dependencyTypesNot: ["core"],
        pathNot: "^(?:src/shared/|(?:tests|e2e)/shared/|node_modules/)",
      },
    },
    {
      name: "architecture-tests-do-not-import-domain-data",
      severity: "error",
      from: { path: "^tests/architecture/" },
      to: { path: "^src/" },
    },
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    parser: "swc",
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "browser", "default"],
    },
  },
};
