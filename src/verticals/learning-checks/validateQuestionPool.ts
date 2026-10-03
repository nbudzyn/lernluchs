import type { Question } from "../../shared/question";

type SourceOwner = { id: string; sources: { url: string }[] };

export function validateQuestionPool(
  item: SourceOwner,
  questions: Question[],
): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  if (questions.length < 25) errors.push(`${item.id}: fewer than 25 questions`);

  for (const question of questions) {
    if (!question.id.trim() || seen.has(question.id))
      errors.push(
        `${item.id}: invalid or duplicate question ID ${question.id}`,
      );
    seen.add(question.id);
    if (!question.prompt.trim()) errors.push(`${question.id}: missing prompt`);
    if (question.options.length < 3 || question.options.length > 5)
      errors.push(`${question.id}: expected three to five options`);
    if (question.options.filter((option) => option.correct).length !== 1)
      errors.push(`${question.id}: expected exactly one correct option`);

    const optionIds = new Set<string>();
    for (const option of question.options) {
      if (!option.id.trim() || optionIds.has(option.id))
        errors.push(`${question.id}: duplicate or empty option ID`);
      optionIds.add(option.id);
      if (!option.text.trim() || !option.explanation.trim())
        errors.push(`${question.id}/${option.id}: missing text or explanation`);
      if (
        !item.sources.some(
          (source) =>
            option.sourceUrl === source.url ||
            option.sourceUrl.startsWith(`${source.url}#`),
        )
      ) {
        errors.push(
          `${question.id}/${option.id}: source is not attached to topic`,
        );
      }
    }
  }
  return errors;
}
