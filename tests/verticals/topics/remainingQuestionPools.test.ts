import { describe, expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import { validateQuestionPool } from "../../../src/verticals/topics/validateQuestionPool";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const ids = [
  "coding-agent-context-and-trust-boundaries",
  "protect-secrets-and-sensitive-data-with-ai",
  "review-and-accept-ai-generated-changes",
  "focused-git-commits",
];

describe("remaining topic question pools", () => {
  it.each(ids)("has 25 sourced and distinct questions for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id);
    expect(topic).toBeDefined();
    expect(topic?.questions?.length).toBeGreaterThanOrEqual(25);
    expect(validateQuestionPool(topic!, topic!.questions!)).toEqual([]);
    expect(
      new Set(topic!.questions!.map((question) => question.prompt)).size,
    ).toBe(topic!.questions!.length);
  });

  it.each(ids)("rejects a missing pool for %s", (id) => {
    const candidate = {
      ...topics,
      items: topics.items.map((item) =>
        item.id === id ? { ...item, questions: undefined } : item,
      ),
    };
    expect(validateTopics(candidate).errors).toContain(
      `Missing question pool for item: ${id}`,
    );
  });

  it("makes every current topic available for a learning check", () => {
    expect(topics.items).toHaveLength(16);
    expect(topics.items.every((item) => item.questions?.length === 25)).toBe(
      true,
    );
    const newQuestions = topics.items
      .filter((item) => ids.includes(item.id))
      .flatMap((item) => item.questions ?? []);
    const existingIds = new Set(
      topics.items
        .filter((item) => !ids.includes(item.id))
        .flatMap((item) => item.questions ?? [])
        .map((question) => question.id),
    );
    expect(new Set(newQuestions.map((question) => question.id)).size).toBe(
      newQuestions.length,
    );
    expect(
      newQuestions.every((question) => !existingIds.has(question.id)),
    ).toBe(true);
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });
});
