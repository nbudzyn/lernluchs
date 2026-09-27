/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

const e2eSpecs = import.meta.glob("../../e2e/**/*.spec.ts", {
  query: "?raw",
  import: "default",
  eager: true,
});
const verticalEntrypoints = import.meta.glob("../../src/verticals/*/index.ts", {
  query: "?raw",
  import: "default",
  eager: true,
});

describe("E2E ownership", () => {
  it("places browser specs below app, shared or a named vertical", () => {
    const knownVerticals = new Set(
      Object.keys(verticalEntrypoints).map((path) => path.split("/").at(-2)),
    );
    const misplaced = Object.keys(e2eSpecs).filter((path) => {
      const owner = path.match(
        /^\.\.\/\.\.\/e2e\/(?:(?:app|shared)\/|verticals\/([^/]+)\/)[^/]+\.spec\.ts$/,
      );
      return !owner || (owner[1] && !knownVerticals.has(owner[1]));
    });
    expect(misplaced).toEqual([]);
  });
});
