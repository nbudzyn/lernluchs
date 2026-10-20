import { describe, expect, it } from "vitest";
import {
  availableLearningCheckTopicIds,
  questionsForTopic,
  validateQuestionPool,
  validateQuestionPools,
} from "../../src/verticals/learning-checks/data";
import { topicReferences } from "../../src/verticals/topics/data";
describe("published topics and question pools", () => {
  it("owns the published pools by stable ID and leaves new topics without pools", () => {
    expect(availableLearningCheckTopicIds).toHaveLength(42);
    const topicsWithoutPool = [
      "task-based-model-routing",
      "ai-content-provenance-and-disclosure",
      "agent-evals-and-traces",
      "model-and-api-lifecycle",
      "agent-protocol-integration",
      "java-ai-applications",
    ];
    expect([...availableLearningCheckTopicIds].sort()).toEqual(
      topicReferences
        .map((topic) => topic.id)
        .filter((id) => !topicsWithoutPool.includes(id))
        .sort(),
    );
    for (const id of topicsWithoutPool) {
      expect(
        topicReferences.some((topic) => topic.id === id),
        id,
      ).toBe(true);
      expect(questionsForTopic(id), id).toBeUndefined();
    }
    for (const id of [
      "unknown-topic",
      "toString",
      "constructor",
      "__proto__",
    ]) {
      expect.soft(questionsForTopic(id), id).toBeUndefined();
    }
  });

  it("provides 25 valid, distinct and sourced questions in every published pool", () => {
    for (const topic of topicReferences.filter((item) =>
      availableLearningCheckTopicIds.includes(item.id),
    )) {
      const questions = questionsForTopic(topic.id);
      expect.soft(questions, `${topic.id}: missing pool`).toBeDefined();
      if (!questions) continue;
      const mergedSizes: Record<string, number> = {
        "problem-understanding-and-change-boundaries": 50,
        "spec-driven-development-openspec": 41,
        "parallel-agent-task-boundaries": 42,
      };
      expect
        .soft(questions, `${topic.id}: pool size`)
        .toHaveLength(mergedSizes[topic.id] ?? 25);
      expect
        .soft(validateQuestionPool(topic, questions), `${topic.id}: validation`)
        .toEqual([]);
      const seen = new Set<string>();
      for (const question of questions) {
        expect
          .soft(
            seen.has(question.prompt),
            `${topic.id}/${question.id}: duplicate prompt`,
          )
          .toBe(false);
        seen.add(question.prompt);
      }
    }
  });

  it("provides workspace pools in published topic order", () => {
    const positions = [
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
      "versioned-library-docs-with-context7",
    ].map((id) => topicReferences.findIndex((topic) => topic.id === id));
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
    expect(positions[0]).toBeGreaterThanOrEqual(0);
  });
  it("validates every pool against its published topic sources", () => {
    expect(validateQuestionPools(topicReferences)).toEqual([]);
  });
});
