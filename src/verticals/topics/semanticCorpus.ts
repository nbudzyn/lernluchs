import { topics } from "./topics";
import { searchDescriptions } from "./searchDescriptions";

// One neutral paragraph per topic, using the same format as the wording trial.
export const semanticCorpus = topics.items.map((topic) => {
  const description = searchDescriptions[topic.id];
  if (!description) throw new Error(`Missing semantic passage: ${topic.id}`);
  return { id: topic.id, title: topic.title, text: `passage: ${description}` };
});
