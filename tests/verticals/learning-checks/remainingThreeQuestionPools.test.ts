import { describe, expect, it } from "vitest";

import { questionsForTopic } from "../../../src/verticals/learning-checks";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

const remainingTopicIds = [
  "java-spring-migrations-with-openrewrite",
  "compare-parallel-and-serial-agent-work",
  "coding-harness-design",
];

describe("the final three learning-check pools", () => {
  it.each(remainingTopicIds)(
    "offers 25 valid, distinct questions for %s",
    (id) => {
      const topic = topics.items.find((item) => item.id === id);
      const questions = questionsForTopic(id);
      expect(topic).toBeDefined();
      expect(questions).toHaveLength(25);
      expect(validateQuestionPool(topic!, questions!)).toEqual([]);
      expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
        25,
      );
    },
  );
});
