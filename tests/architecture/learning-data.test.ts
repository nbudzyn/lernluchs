// @vitest-environment node
/// <reference types="vite/client" />
import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../src/verticals/learning-checks/questionPools";
import { learningPaths } from "../../src/verticals/topics/learningPaths";

async function fingerprint(value: unknown) {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(JSON.stringify(value)),
  );
  return Array.from(new Uint8Array(hash), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

describe("learning data organization", () => {
  it("groups learning-check tests by implementation and browser workflow", () => {
    const unitFiles = Object.keys(
      import.meta.glob("../verticals/learning-checks/*.{test.ts,test.tsx}"),
    ).map((path) => path.split("/").at(-1)!);
    expect(unitFiles.sort()).toEqual([
      "LearningCheck.test.tsx",
      "questionPools.test.ts",
      "validateQuestionPool.test.ts",
      "validateQuestionPools.test.ts",
    ]);
    const browserFiles = Object.keys(
      import.meta.glob("../../e2e/verticals/learning-checks/*.spec.ts"),
    ).map((path) => path.split("/").at(-1)!);
    expect(browserFiles).toEqual(["learning-check.spec.ts"]);
  });

  it("preserves unchanged questions, answers, sources and IDs after merging and deduplication", async () => {
    const questions = availableLearningCheckTopicIds
      .flatMap((id) => questionsForTopic(id)!)
      .sort((a, b) => a.id.localeCompare(b.id));
    expect(availableLearningCheckTopicIds).toHaveLength(42);
    expect(await fingerprint(questions)).toBe(
      "a0fb39192cd37da1e476380da29b9b97210f20cc7e5d274bb03017bb60fbe5e1",
    );
  });
  it("preserves all path names and merged memberships", async () => {
    expect(learningPaths).toHaveLength(14);
    expect(
      await fingerprint(
        learningPaths.map((path) => ({
          ...path,
          topicIds: [...path.topicIds].sort(),
        })),
      ),
    ).toBe("4cb98c2f718ebbd53fed95945855e41c27df16b6142b5ce9d58c314381753d42");
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
