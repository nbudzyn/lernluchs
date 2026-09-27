import type { TopicCollection, TopicValidation } from "./topicContract";
import { validateQuestionPool } from "./validateQuestionPool";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const editorialStatuses = new Set([
  "active",
  "watching",
  "archived",
  "replaced",
]);
const foundationIds = new Set([
  "human-ai-responsibility",
  "problem-understanding-and-change-boundaries",
  "agents-md",
  "ears-requirements",
  "research-plan-tasks",
  "spec-driven-development-openspec",
]);

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

export function validateTopics(candidate: TopicCollection): TopicValidation {
  const seenIds = new Set<string>();
  const errors: string[] = [];

  for (const item of candidate.items) {
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate item ID: ${item.id}`);
    }
    seenIds.add(item.id);

    if (
      !hasText(item.title) ||
      !hasText(item.content.problem) ||
      !hasText(item.content.coreConcept) ||
      !hasText(item.content.javaWebUse) ||
      !hasText(item.content.boundary)
    ) {
      errors.push(`Incomplete topic: ${item.id}`);
    }

    if (
      !datePattern.test(item.editorial.publishedAt) ||
      !datePattern.test(item.editorial.reviewedAt) ||
      !datePattern.test(item.editorial.reviewDueAt) ||
      !editorialStatuses.has(item.editorial.status)
    ) {
      errors.push(`Invalid editorial metadata for item: ${item.id}`);
    }

    if (!item.sources.some((source) => source.origin === "primary")) {
      errors.push(`Missing primary source for item: ${item.id}`);
    }
    if (item.sources.length > 10) {
      errors.push(`Too many sources for item: ${item.id}`);
    }

    for (const source of item.sources) {
      if (
        !hasText(source.title) ||
        !source.url.startsWith("https://") ||
        !hasText(source.type) ||
        !["primary", "secondary"].includes(source.origin) ||
        !["de", "en"].includes(source.language) ||
        !datePattern.test(source.checkedAt)
      ) {
        errors.push(`Invalid source for item: ${item.id}`);
      }
    }

    if (foundationIds.has(item.id)) {
      if (!item.questions)
        errors.push(`Missing question pool for item: ${item.id}`);
      else errors.push(...validateQuestionPool(item, item.questions));
    }
  }

  return { valid: errors.length === 0, errors };
}
