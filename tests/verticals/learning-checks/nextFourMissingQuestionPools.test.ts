import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { nextFourMissingQuestions } from "../../../src/verticals/learning-checks/nextFourMissingQuestions";
import { topics } from "../../../src/verticals/topics/topics";

const nextFourTopicIds = [
  "agent-skills-and-commands",
  "spec-framework-selection",
  "automation-value-and-gates",
  "web-security-baseline",
];

describe("the next four topics without learning checks", () => {
  it.each(nextFourTopicIds)("validates the review draft for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id);
    const draft = nextFourMissingQuestions[id];
    expect(draft).toHaveLength(25);
    expect(validateQuestionPool(topic!, draft)).toEqual([]);
    expect(new Set(draft.map((question) => question.prompt)).size).toBe(25);
    expect(
      draft.flatMap((question) =>
        question.options
          .filter((option) => !option.correct)
          .filter((option) =>
            /\b(nur|immer|nie|ausschließlich)\b/i.test(option.text),
          )
          .map((option) => option.id),
      ),
    ).toEqual([]);
  });

  it("adds exactly these four learning checks to the existing catalog", () => {
    expect(
      nextFourTopicIds.every((id) =>
        availableLearningCheckTopicIds.includes(id),
      ),
    ).toBe(true);
  });

  it.each(nextFourTopicIds)(
    "has at least 25 valid, distinct questions for %s",
    (id) => {
      const topic = topics.items.find((item) => item.id === id);
      const questions = questionsForTopic(id);
      expect(topic).toBeDefined();
      expect(questions?.length).toBeGreaterThanOrEqual(25);
      expect(validateQuestionPool(topic!, questions!)).toEqual([]);
      expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
        questions!.length,
      );
    },
  );
});
