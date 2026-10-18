import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "./questionPools";
import { validateQuestionPool } from "./validateQuestionPool";

import type { SourceOwner } from "./sourceOwner";

export function validateQuestionPools(
  topics: readonly SourceOwner[],
): string[] {
  const errors: string[] = [];
  const topicsById = new Map(topics.map((topic) => [topic.id, topic]));

  for (const topicId of availableLearningCheckTopicIds) {
    const topic = topicsById.get(topicId);
    if (!topic) {
      errors.push(`Missing topic for question pool: ${topicId}`);
      continue;
    }
    const questions = questionsForTopic(topicId)!;
    errors.push(...validateQuestionPool(topic, questions));
  }

  return errors;
}
