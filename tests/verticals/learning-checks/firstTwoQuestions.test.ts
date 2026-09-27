import { expect, it } from "vitest";

import {
  domainLanguageQuestions,
  projectDocumentationQuestions,
} from "../../../src/verticals/learning-checks/firstTwoQuestions";
import { validateQuestionPool } from "../../../src/verticals/learning-checks/validateQuestionPool";
import { topics } from "../../../src/verticals/topics/topics";

it.each([
  ["domain-language-and-complexity", domainLanguageQuestions],
  ["project-documentation-and-checklists", projectDocumentationQuestions],
] as const)("has 25 distinct sourced questions for %s", (id, questions) => {
  const topic = topics.items.find((item) => item.id === id)!;
  expect(questions).toHaveLength(25);
  expect(validateQuestionPool(topic, questions)).toEqual([]);
  expect(new Set(questions.map((question) => question.prompt)).size).toBe(25);
});
