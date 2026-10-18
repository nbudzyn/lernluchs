import { describe, expect, it } from "vitest";

import { hasPassed } from "../../../src/verticals/learning-checks/checkLogic";
import type { Answer } from "../../../src/verticals/learning-checks/checkLogic";
import { questionsForTopic } from "../../../src/verticals/learning-checks/questionPools";

describe("hasPassed", () => {
  const questions = questionsForTopic("human-ai-responsibility")!;
  const correct: Answer[] = questions.slice(0, 6).map((question) => ({
    question,
    optionId: question.options.find((option) => option.correct)!.id,
  }));

  it("requires exactly five answers even when all given answers are correct", () => {
    for (const count of [0, 1, 4, 5, 6])
      expect
        .soft(hasPassed(correct.slice(0, count)), `${count} answers`)
        .toBe(count === 5);
  });

  it("rejects a wrong or unknown option in every answer position", () => {
    for (let index = 0; index < 5; index += 1) {
      const question = questions[index];
      for (const optionId of [
        question.options.find((option) => !option.correct)!.id,
        "unknown-option",
      ]) {
        const answers = correct.slice(0, 5);
        answers[index] = { question, optionId };
        expect
          .soft(hasPassed(answers), `answer ${index}: ${optionId}`)
          .toBe(false);
      }
    }
  });
});
