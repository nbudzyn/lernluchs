/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

const appFiles = import.meta.glob("../../src/app/**/*.{ts,tsx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const legacyVerticalFiles = import.meta.glob(
  "../../src/verticals/catalog/**/*",
);
const sourceFiles = import.meta.glob("../../src/**/*.{ts,tsx}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

describe("public vertical entrypoints", () => {
  it("uses the agreed vertical and source names instead of their synonyms", () => {
    expect(Object.keys(legacyVerticalFiles)).toEqual([]);
    const entrypoints = Object.keys(sourceFiles)
      .filter((path) => /verticals\/[^/]+\/index\.ts$/.test(path))
      .map((path) => path.split("/").at(-2)!)
      .sort((first, second) => first.localeCompare(second));
    expect
      .soft(entrypoints)
      .toEqual(["help", "learning-checks", "learning-state", "topics"]);
    const violations = Object.entries(sourceFiles).flatMap(
      ([path, contents]) => {
        const currentContract = contents.replaceAll(
          "lernluchs.learning-progress.v1",
          "legacy-storage-key",
        );
        const synonyms = new Set(
          currentContract.match(
            /TopicCollection|QuestionOption|[Cc]atalog|[Cc]ardSections|[Ll]earningProgress|learning-progress|Lernfortschritt|Lernthemen|\bprogress\b/g,
          ),
        );
        return [...synonyms].map((synonym) => `${path}: ${synonym}`);
      },
    );
    expect(violations).toEqual([]);
  });
  it("keeps app imports out of vertical internals", () => {
    const violations = Object.entries(appFiles).flatMap(([path, contents]) => {
      return [...contents.matchAll(/from\s+["']([^"']+)["']/g)]
        .map((match) => match[1])
        .filter((specifier) =>
          /verticals\/(topics|help|learning-checks|learning-state)\//.test(
            specifier,
          ),
        )
        .map((specifier) => `${path}: ${specifier}`);
    });
    expect(violations).toEqual([]);
  });
});
