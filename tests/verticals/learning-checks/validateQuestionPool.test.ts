import { describe, expect, it } from "vitest";

import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import type { Question } from "../../../src/shared/question";

const item = {
  id: "agents-md",
  sources: [{ url: "https://agents.md/" }],
};

function question(id: string): Question {
  return {
    id,
    prompt: `Was gilt für ${id}?`,
    options: [
      {
        id: "a",
        text: "A",
        correct: true,
        explanation: "Belegt",
        sourceUrl: "https://agents.md/#why",
      },
      {
        id: "b",
        text: "B",
        correct: false,
        explanation: "Nicht belegt",
        sourceUrl: "https://agents.md/#why",
      },
      {
        id: "c",
        text: "C",
        correct: false,
        explanation: "Andere Aussage",
        sourceUrl: "https://agents.md/#why",
      },
    ],
  };
}

describe("question pool validation", () => {
  it("requires 25 unique complete questions for a topic", () => {
    const complete = Array.from({ length: 25 }, (_, index) =>
      question(`q-${index}`),
    );
    expect(validateQuestionPool(item, complete)).toEqual([]);
    expect(validateQuestionPool(item, complete.slice(1))).not.toEqual([]);
    expect(
      validateQuestionPool(item, [...complete.slice(1), complete[1]]),
    ).not.toEqual([]);
  });

  it("requires one correct answer, three to five explained options and matching sources", () => {
    const complete = Array.from({ length: 25 }, (_, index) =>
      question(`q-${index}`),
    );
    const invalid = question("invalid");
    invalid.options[0].correct = false;
    invalid.options[1].explanation = "";
    invalid.options[2].sourceUrl = "https://other.example/";
    expect(
      validateQuestionPool(item, [...complete.slice(1), invalid]),
    ).not.toEqual([]);
  });
});
