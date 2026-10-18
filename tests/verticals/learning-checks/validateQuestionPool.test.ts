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
  function pool() {
    return Array.from({ length: 25 }, (_, index) => question(`q-${index}`));
  }

  it("accepts a complete pool including source fragments", () => {
    expect(validateQuestionPool(item, pool())).toEqual([]);
  });

  it("requires at least 25 questions", () => {
    expect(validateQuestionPool(item, pool().slice(1))).toEqual([
      "agents-md: fewer than 25 questions",
    ]);
  });

  it("requires nonempty unique question IDs", () => {
    for (const id of ["", " ", "q-1"]) {
      const questions = pool();
      questions[0].id = id;
      expect
        .soft(validateQuestionPool(item, questions), `ID: ${id}`)
        .toEqual([`agents-md: invalid or duplicate question ID ${id}`]);
    }
  });

  it("requires a nonempty question prompt", () => {
    const questions = pool();
    questions[0].prompt = " ";
    expect(validateQuestionPool(item, questions)).toEqual([
      "q-0: missing prompt",
    ]);
  });

  it("requires three to five options", () => {
    for (const count of [2, 3, 4, 5, 6]) {
      const questions = pool();
      questions[0].options = Array.from({ length: count }, (_, index) => ({
        ...question("unused").options[index === 0 ? 0 : 1],
        id: `option-${index}`,
      }));
      expect
        .soft(validateQuestionPool(item, questions), `${count} options`)
        .toEqual(
          count >= 3 && count <= 5
            ? []
            : ["q-0: expected three to five options"],
        );
    }
  });

  it("requires exactly one correct option", () => {
    for (const count of [0, 2]) {
      const questions = pool();
      questions[0].options.forEach((option, index) => {
        option.correct = index < count;
      });
      expect
        .soft(validateQuestionPool(item, questions), `${count} correct`)
        .toEqual(["q-0: expected exactly one correct option"]);
    }
  });

  it("requires nonempty unique option IDs", () => {
    for (const id of ["", " ", "b"]) {
      const questions = pool();
      questions[0].options[0].id = id;
      expect
        .soft(validateQuestionPool(item, questions), `option ID: ${id}`)
        .toEqual(["q-0: duplicate or empty option ID"]);
    }
  });

  it("requires option text and explanation independently", () => {
    for (const field of ["text", "explanation"] as const) {
      const questions = pool();
      questions[0].options[0][field] = " ";
      expect
        .soft(validateQuestionPool(item, questions), field)
        .toEqual(["q-0/a: missing text or explanation"]);
    }
  });

  it("accepts the topic source and its fragments but rejects other URLs", () => {
    for (const url of [
      "https://agents.md/",
      "https://agents.md/#why",
      "https://other.example/",
      "https://agents.md/other",
      "https://agents.md/?other",
    ]) {
      const questions = pool();
      questions[0].options[0].sourceUrl = url;
      expect
        .soft(validateQuestionPool(item, questions), url)
        .toEqual(
          url === "https://agents.md/" || url === "https://agents.md/#why"
            ? []
            : ["q-0/a: source is not attached to topic"],
        );
    }
  });

  it("collects independent errors across questions", () => {
    const complete = Array.from({ length: 25 }, (_, index) =>
      question(`q-${index}`),
    );
    complete[0].prompt = "";
    complete[1].options[0].text = "";
    expect(validateQuestionPool(item, complete)).toEqual([
      "q-0: missing prompt",
      "q-1/a: missing text or explanation",
    ]);
  });
});
