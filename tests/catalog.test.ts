import { describe, expect, it } from "vitest";

import { validateCatalog } from "../src/verticals/catalog/validateCatalog";
import type { CatalogItem } from "../src/verticals/catalog/catalogContract";
import { catalog } from "../src/verticals/catalog/catalog";

function completeItem(id: string): CatalogItem {
  return {
    id,
    title: "Testthema",
    learningCard: {
      language: "de",
      problem: "Problem",
      coreConcept: "Kernkonzept",
      javaWebUse: "Einsatz",
      boundary: "Grenze",
    },
    editorial: {
      publishedAt: "2026-09-20",
      reviewedAt: "2026-09-20",
      reviewDueAt: "2027-03-20",
      contentVersion: "1",
      status: "active",
    },
    sources: [
      {
        title: "Quelle",
        url: "https://example.test/source",
        type: "official-guide",
        language: "en",
        checkedAt: "2026-09-20",
      },
    ],
  };
}

describe("public content catalog", () => {
  it("contains six complete, editorially checked foundation topics", () => {
    expect(catalog.items.map((item) => item.id)).toEqual([
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "ears-requirements",
      "research-plan-tasks",
      "spec-driven-development-openspec",
    ]);

    for (const item of catalog.items) {
      expect(item).toMatchObject({
        title: expect.any(String),
        learningCard: {
          language: "de",
          problem: expect.any(String),
          coreConcept: expect.any(String),
          javaWebUse: expect.any(String),
          boundary: expect.any(String),
        },
        editorial: {
          publishedAt: "2026-09-20",
          reviewedAt: "2026-09-20",
          reviewDueAt: expect.stringMatching(/^202[67]-\d{2}-\d{2}$/),
          contentVersion: "1",
          status: "active",
        },
        sources: [
          expect.objectContaining({
            title: expect.any(String),
            url: expect.stringMatching(/^https:\/\//),
            type: expect.any(String),
            language: expect.any(String),
          }),
        ],
      });
    }

    expect(validateCatalog(catalog)).toEqual({ valid: true, errors: [] });
  });

  it("rejects duplicate content IDs", () => {
    expect(
      validateCatalog({
        version: "1",
        items: [completeItem("duplicate"), completeItem("duplicate")],
      }),
    ).toEqual({ valid: false, errors: ["Duplicate item ID: duplicate"] });
  });

  it("rejects a topic without an editorial source", () => {
    expect(
      validateCatalog({
        version: "1",
        items: [
          { ...completeItem("missing-source"), sources: [] },
        ],
      }),
    ).toEqual({
      valid: false,
      errors: ["Missing source for item: missing-source"],
    });
  });
});
