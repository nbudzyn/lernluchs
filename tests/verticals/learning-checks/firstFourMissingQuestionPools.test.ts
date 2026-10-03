import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

const newTopicIds = [
  "context-selection-and-reset",
  "codegraphs-for-large-repos",
  "token-efficiency-tools",
  "coding-agent-interface-selection",
];

describe("the first four topics without learning checks", () => {
  it("retains these four check IDs in the catalog", () => {
    expect(
      newTopicIds.every((id) => availableLearningCheckTopicIds.includes(id)),
    ).toBe(true);
  });

  it.each(newTopicIds)(
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
