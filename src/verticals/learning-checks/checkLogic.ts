import type { Question } from "../../shared/question";

export const QUESTIONS_PER_CHECK = 5;

export type Answer = { question: Question; optionId: string };

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

export function chooseQuestions(
  questions: readonly Question[],
  random: () => number,
): Question[] {
  return shuffle(questions, random)
    .slice(0, QUESTIONS_PER_CHECK)
    .map((question) => ({
      ...question,
      options: shuffle(question.options, random),
    }));
}

export function hasPassed(answers: readonly Answer[]): boolean {
  return (
    answers.length === QUESTIONS_PER_CHECK &&
    answers.every(
      ({ question, optionId }) =>
        question.options.find((option) => option.id === optionId)?.correct,
    )
  );
}
