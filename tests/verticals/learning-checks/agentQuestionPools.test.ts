import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

const topicIds = [
  "specialized-subagents-and-ownership",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
  "deterministic-agent-verification-gates",
];

describe("four agent learning checks", () => {
  it("uses the current sandbox-security source for tool permissions", () => {
    const topic = topics.items.find(
      (item) => item.id === "agent-tool-and-mcp-permissions",
    );
    expect(topic?.sources.map((source) => source.url)).toContain(
      "https://developers.openai.com/api/docs/guides/agents-api/environments/security",
    );
    expect(topic?.sources.map((source) => source.url)).not.toContain(
      "https://developers.openai.com/api/docs/guides/agent-builder-safety",
    );
  });

  it.each(topicIds)("provides a valid and distinct pool for %s", (id) => {
    const topic = topics.items.find((item) => item.id === id);
    const questions = questionsForTopic(id);
    expect(topic).toBeDefined();
    expect(questions).toHaveLength(25);
    expect(validateQuestionPool(topic!, questions!)).toEqual([]);
    expect(new Set(questions!.map((question) => question.prompt)).size).toBe(
      25,
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
  });

  it.each([
    [
      "specialized-subagents-and-ownership",
      "subagent-ownership-19",
      /Simulationen/,
    ],
    ["specialized-subagents-and-ownership", "subagent-ownership-23", /Skills/],
    ["agent-context-handoffs", "agent-handoff-22", /Werkzeugnamen/],
    [
      "deterministic-agent-verification-gates",
      "agent-verification-04",
      /schreibberechtigte/,
    ],
  ])(
    "covers the reviewed distinct concept in %s / %s",
    (topicId, questionId, concept) => {
      const question = questionsForTopic(topicId)?.find(
        (item) => item.id === questionId,
      );
      expect(question).toBeDefined();
      expect(question!.options.find((option) => option.correct)?.text).toMatch(
        concept,
      );
    },
  );

  it("provides checks for every published topic", () => {
    expect(availableLearningCheckTopicIds).toHaveLength(45);
    expect(
      topics.items
        .filter((topic) => !availableLearningCheckTopicIds.includes(topic.id))
        .map((topic) => topic.id),
    ).toEqual([]);
  });
});
