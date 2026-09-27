import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "./questionCatalog";
import { validateQuestionPool } from "./validateQuestionPool";

type SourceOwner = { id: string; sources: { url: string }[] };

export function validateQuestionCatalog(topics: SourceOwner[]): string[] {
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
