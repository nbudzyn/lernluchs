import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks";
import { firstFourRemainingQuestions } from "../../../src/verticals/learning-checks/firstFourRemainingQuestions";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

const newTopicIds = [
  "ui-design-system-workflow",
  "technical-documentation-generation",
  "bug-triage-and-pr-automation",
  "local-model-stack-evaluation",
];

describe("the next four topics in list order without questions", () => {
  it.each(newTopicIds)("validates the review draft for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id)!;
    const draft = firstFourRemainingQuestions[id];
    expect(draft).toHaveLength(25);
    expect(validateQuestionPool(topic, draft)).toEqual([]);
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

  it("offers exactly four additional learning checks", () => {
    expect(
      newTopicIds.every((id) => availableLearningCheckTopicIds.includes(id)),
    ).toBe(true);
  });

  it.each(newTopicIds)(
    "provides 25 distinct sourced questions for %s",
    (id) => {
      const topic = topics.items.find((item) => item.id === id);
      const questions = questionsForTopic(id);
      expect(topic).toBeDefined();
      expect(questions?.length).toBeGreaterThanOrEqual(25);
      expect(validateQuestionPool(topic!, questions!)).toEqual([]);
      expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
        questions!.length,
      );
      expect(
        questions!.flatMap((question) =>
          question.options
            .filter((option) => !option.correct)
            .filter((option) =>
              /\b(nur|immer|nie|ausschließlich)\b/i.test(option.text),
            )
            .map((option) => option.id),
        ),
      ).toEqual([]);
    },
  );
});
