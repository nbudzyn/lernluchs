import type { Catalog, CatalogValidation } from "./catalogContract";

export function validateCatalog(candidate: Catalog): CatalogValidation {
  const seenIds = new Set<string>();
  const errors: string[] = [];

  for (const item of candidate.items) {
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate item ID: ${item.id}`);
    }
    seenIds.add(item.id);
  }

  return { valid: errors.length === 0, errors };
}
