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

  it("preserves questions, answers, sources and IDs apart from the agreed wording", async () => {
    const pools = Object.fromEntries(
      availableLearningCheckTopicIds.map((id) => [id, questionsForTopic(id)]),
    );
    expect(availableLearningCheckTopicIds).toHaveLength(45);
    expect(await fingerprint(pools)).toBe(
      "aec2624ff64a466dec5bd0a6d72679ed8344b7e045dadae7b31074c3c6edd5ff",
    );
  });

  it("preserves the original path names and topic memberships after reordering", async () => {
    // Neben der Umordnung ist nur der Legacy-Einstieg im Modernisierungspfad neu.
    const additions = new Set([
      "agent-evals-and-traces",
      "model-and-api-lifecycle",
      "agent-protocol-integration",
      "java-ai-applications",
    ]);
    expect(learningPaths).toHaveLength(14);
    const originalPaths = learningPaths.slice(0, 13).map((path) => ({
      ...path,
      topicIds: path.topicIds
        .filter(
          (id) =>
            !additions.has(id) &&
            !(
              path.name ===
                "Java-/Web-Code technisch analysieren und modernisieren" &&
              id === "design-and-legacy-specification"
            ),
        )
        .sort(),
    }));
    expect(await fingerprint(originalPaths)).toBe(
      "3d16604776c2a7a22664d831c87b56af3f6d691d682db68b97e52bbef5996ffb",
    );
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
