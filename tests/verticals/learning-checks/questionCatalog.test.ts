import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks";
import { validateQuestionCatalog } from "../../../src/verticals/learning-checks/validateQuestionCatalog";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

describe("learning-check question catalog", () => {
  it("owns the existing eighteen and five new pools by stable topic ID", () => {
    expect(availableLearningCheckTopicIds).toHaveLength(23);
    expect(questionsForTopic("human-ai-responsibility")).toHaveLength(25);
    expect(questionsForTopic("focused-git-commits")).toHaveLength(25);
    expect(questionsForTopic("unknown-topic")).toBeUndefined();
  });

  it("validates every pool against its topic sources", () => {
    expect(validateQuestionCatalog(topics.items)).toEqual([]);
  });

  it.each([
    "module-boundaries-and-public-interfaces",
    "tdd-for-domain-behavior",
    "archunit-for-java-architecture",
    "playwright-for-web-flows",
    "web-xss-and-safe-dom",
    "dependency-security-assessment",
  ])("preserves the second-path pool for %s", (id) => {
    expect(questionsForTopic(id)).toHaveLength(25);
  });

  it.each([
    "open-knowledge-format",
    "goal-discovery-and-stop-criteria",
    "design-and-legacy-specification",
    "standards-and-constraint-rationale",
    "llm-fallibility-and-counterchecks",
  ])("offers a sourced new pool for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id)!;
    const questions = questionsForTopic(id);
    expect(questions).toHaveLength(25);
    expect(validateQuestionPool(topic, questions!)).toEqual([]);
    expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
      25,
    );
  });

  it.each([
    "domain-language-and-complexity",
    "project-documentation-and-checklists",
  ])("offers a sourced pool for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id)!;
    const questions = questionsForTopic(id);
    expect(questions).toHaveLength(25);
    expect(validateQuestionPool(topic, questions!)).toEqual([]);
    expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
      25,
    );
  });
});
