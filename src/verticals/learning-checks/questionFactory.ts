import type { Question } from "../../shared/question";

type Answer = [text: string, explanation: string];

export function q(
  id: string,
  sourceUrl: string,
  prompt: string,
  correct: Answer,
  distractorA: Answer,
  distractorB: Answer,
): Question {
  return {
    id,
    prompt,
    options: [correct, distractorA, distractorB].map(
      ([text, explanation], index) => ({
        id: `${id}-${index + 1}`,
        text,
        correct: index === 0,
        explanation,
        sourceUrl,
      }),
    ),
  };
}
