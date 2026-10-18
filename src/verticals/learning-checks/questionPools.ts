import type { Question } from "../../shared/question";
import questions from "./questions.json" with { type: "json" };

const questionPools: Readonly<Record<string, readonly Question[]>> = questions;

for (const pool of Object.values(questionPools)) {
  for (const question of pool) {
    for (const option of question.options) Object.freeze(option);
    Object.freeze(question.options);
    Object.freeze(question);
  }
  Object.freeze(pool);
}
Object.freeze(questionPools);

export const availableLearningCheckTopicIds: readonly string[] = Object.freeze(
  Object.keys(questionPools),
);

export function questionsForTopic(
  topicId: string,
): readonly Question[] | undefined {
  return Object.hasOwn(questionPools, topicId)
    ? questionPools[topicId]
    : undefined;
}
