import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks";
import { newFourQuestions } from "../../../src/verticals/learning-checks/newFourQuestions";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

const newTopicIds = [
  "parallel-agent-task-boundaries",
  "git-worktrees-for-isolated-changes",
  "code-navigation-with-symbols-and-references",
  "versioned-library-docs-with-context7",
];

describe("the next four topics without learning checks", () => {
  it.each(newTopicIds)("draft questions validate against %s", (id) => {
    const topic = topics.items.find((item) => item.id === id);
    const questions = newFourQuestions[id];
    expect(topic).toBeDefined();
    expect(questions).toHaveLength(25);
    expect(validateQuestionPool(topic!, questions)).toEqual([]);
    expect(new Set(questions.map((question) => question.prompt)).size).toBe(25);
  });

  it("provides pools for the first four previously missing topics in list order", () => {
    const positions = newTopicIds.map((id) =>
      topics.items.findIndex((topic) => topic.id === id),
    );
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
    expect(positions[0]).toBeGreaterThanOrEqual(0);
    expect(
      topics.items
        .slice(0, positions[3] + 1)
        .every((topic) => availableLearningCheckTopicIds.includes(topic.id)),
    ).toBe(true);
  });

  it.each(newTopicIds)("has 25 distinct sourced questions for %s", (id) => {
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
