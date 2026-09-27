import { describe, expect, it } from "vitest";

import { questionsForTopic } from "../../../src/verticals/learning-checks";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

const ids = [
  "coding-agent-context-and-trust-boundaries",
  "protect-secrets-and-sensitive-data-with-ai",
  "review-and-accept-ai-generated-changes",
  "focused-git-commits",
];

describe("remaining existing question pools", () => {
  it.each(ids)("has 25 sourced and distinct questions for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id);
    const questions = questionsForTopic(id);
    expect(topic).toBeDefined();
    expect(questions?.length).toBeGreaterThanOrEqual(25);
    expect(validateQuestionPool(topic!, questions!)).toEqual([]);
    expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
      questions!.length,
    );
  });
});
