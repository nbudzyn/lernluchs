import type { Question } from "../../shared/question";
import questions from "./questions.json" with { type: "json" };

const questionPools: Record<string, Question[]> = questions;

export const availableLearningCheckTopicIds = Object.keys(questionPools);

export function questionsForTopic(topicId: string): Question[] | undefined {
  return questionPools[topicId];
}
