import { describe, expect, it } from "vitest";

import { validateCatalog } from "../../../src/verticals/catalog/validateCatalog";
import type { CatalogItem } from "../../../src/verticals/catalog/catalogContract";
import { catalog } from "../../../src/verticals/catalog/catalog";

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
    const foundationIds = [
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "ears-requirements",
      "research-plan-tasks",
      "spec-driven-development-openspec",
    ];
    expect(catalog.items.map((item) => item.id).filter((id) => foundationIds.includes(id))).toEqual(foundationIds);

    for (const item of catalog.items.filter((item) => foundationIds.includes(item.id))) {
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

  it("preserves the six sourced cards from the second learning path in order", () => {
    const newIds = [
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "playwright-for-web-flows",
      "web-xss-and-safe-dom",
      "dependency-security-assessment",
    ];
    expect(catalog.items.map((item) => item.id).filter((id) => newIds.includes(id))).toEqual(newIds);
    for (const item of catalog.items.filter((item) => newIds.includes(item.id))) {
      expect(item.learningCard.problem.trim()).not.toBe("");
      expect(item.learningCard.coreConcept.trim()).not.toBe("");
      expect(item.learningCard.javaWebUse.trim()).not.toBe("");
      expect(item.learningCard.boundary.trim()).not.toBe("");
      expect(item.sources.length).toBeGreaterThan(0);
      expect(item.editorial.publishedAt).toBe("2026-09-26");
      expect(item.editorial.reviewedAt).toBe("2026-09-26");
      expect(item.editorial.reviewDueAt).toBe("2027-03-26");
      expect(item.sources.every((source) => source.checkedAt === "2026-09-26")).toBe(true);
    }
    expect(validateCatalog(catalog)).toEqual({ valid: true, errors: [] });
  });

  it("weaves three coding-agent cards into the fifteen-topic catalog", () => {
    const newIds = [
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "review-and-accept-ai-generated-changes",
    ];
    const ids = catalog.items.map((item) => item.id);

    expect(ids).toEqual([
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "ears-requirements",
      "module-boundaries-and-public-interfaces",
      "research-plan-tasks",
      "spec-driven-development-openspec",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "playwright-for-web-flows",
      "web-xss-and-safe-dom",
      "dependency-security-assessment",
      "review-and-accept-ai-generated-changes",
    ]);
    expect(new Set(ids).size).toBe(15);
    for (const item of catalog.items.filter((item) => newIds.includes(item.id))) {
      expect(item.title.trim()).not.toBe("");
      expect(item.learningCard.problem.trim()).not.toBe("");
      expect(item.learningCard.coreConcept.trim()).not.toBe("");
      expect(item.learningCard.javaWebUse.trim()).not.toBe("");
      expect(item.learningCard.boundary.trim()).not.toBe("");
      expect(item.editorial).toMatchObject({
        publishedAt: "2026-09-26",
        reviewedAt: "2026-09-26",
        reviewDueAt: "2027-03-26",
        contentVersion: "1",
        status: "active",
      });
      expect(item.sources.length).toBeGreaterThan(0);
      expect(item.sources.every((source) => source.checkedAt === "2026-09-26")).toBe(true);
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
