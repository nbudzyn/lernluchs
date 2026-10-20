// @vitest-environment node
/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

describe("learning data organization", () => {
  it("groups learning-check tests by implementation and browser workflow", () => {
    const unitFiles = Object.keys(
      import.meta.glob("../verticals/learning-checks/*.{test.ts,test.tsx}"),
    ).map((path) => path.split("/").at(-1)!);
    expect(unitFiles.sort()).toEqual([
      "LearningCheck.test.tsx",
      "checkLogic.test.ts",
      "questionPools.test.ts",
      "useLearningCheck.test.ts",
      "validateQuestionPool.test.ts",
      "validateQuestionPools.test.ts",
    ]);
    const browserFiles = Object.keys(
      import.meta.glob("../../e2e/app/learning-check.spec.ts"),
    ).map((path) => path.split("/").at(-1)!);
    expect(browserFiles).toEqual(["learning-check.spec.ts"]);
  });

  it("maintains all questions in one neutral question data file", () => {
    const files = Object.keys(
      import.meta.glob("../../src/verticals/learning-checks/*.{ts,json}"),
    ).map((path) => path.split("/").at(-1)!);
    expect(
      files.filter((name) => /questions\.(?:ts|json)$/i.test(name)),
    ).toEqual(["questions.json"]);
  });

  it("names learning-data tests by subject rather than delivery order", () => {
    const files = Object.keys(
      import.meta.glob([
        "../verticals/learning-checks/*.{ts,tsx}",
        "../verticals/topics/*.{ts,tsx}",
        "../../e2e/verticals/learning-checks/*.ts",
        "../../e2e/verticals/topics/*.ts",
      ]),
    ).map((path) => path.split("/").at(-1)!);
    expect(
      files.filter((name) =>
        /(?:^|-)(?:first|new|next|remaining|second|final)(?:-|\.)/i.test(
          name.replace(/([a-z])([A-Z])/g, "$1-$2"),
        ),
      ),
    ).toEqual([]);
  });
});
