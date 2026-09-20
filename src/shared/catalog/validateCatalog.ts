import type { Catalog, CatalogValidation } from "./catalogContract";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const editorialStatuses = new Set(["active", "watching", "archived", "replaced"]);

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

export function validateCatalog(candidate: Catalog): CatalogValidation {
  const seenIds = new Set<string>();
  const errors: string[] = [];

  for (const item of candidate.items) {
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate item ID: ${item.id}`);
    }
    seenIds.add(item.id);

    if (
      !hasText(item.title) ||
      !hasText(item.learningCard.problem) ||
      !hasText(item.learningCard.coreConcept) ||
      !hasText(item.learningCard.javaWebUse) ||
      !hasText(item.learningCard.boundary)
    ) {
      errors.push(`Incomplete learning card for item: ${item.id}`);
    }

    if (
      !datePattern.test(item.editorial.publishedAt) ||
      !datePattern.test(item.editorial.reviewedAt) ||
      !datePattern.test(item.editorial.reviewDueAt) ||
      !hasText(item.editorial.contentVersion) ||
      !editorialStatuses.has(item.editorial.status)
    ) {
      errors.push(`Invalid editorial metadata for item: ${item.id}`);
    }

    if (item.sources.length === 0) {
      errors.push(`Missing source for item: ${item.id}`);
    }

    for (const source of item.sources) {
      if (
        !hasText(source.title) ||
        !source.url.startsWith("https://") ||
        !hasText(source.type) ||
        !hasText(source.language) ||
        !datePattern.test(source.checkedAt)
      ) {
        errors.push(`Invalid source for item: ${item.id}`);
      }
    }
  }

  return { valid: errors.length === 0, errors };
}
