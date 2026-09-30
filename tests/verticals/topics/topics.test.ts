import { describe, expect, it } from "vitest";

import { validateTopics } from "../../../src/verticals/topics/validateTopics";
import type { Topic } from "../../../src/verticals/topics/topicContract";
import { topics } from "../../../src/verticals/topics/topics";
const expandedTopicIds = [
  "domain-language-and-complexity",
  "project-documentation-and-checklists",
  "open-knowledge-format",
  "goal-discovery-and-stop-criteria",
  "design-and-legacy-specification",
  "standards-and-constraint-rationale",
  "llm-fallibility-and-counterchecks",
  "context-selection-and-reset",
  "codebase-memory-for-large-repos",
  "token-efficiency-tools",
  "coding-agent-interface-selection",
  "agent-skills-and-commands",
  "spec-framework-selection",
  "automation-value-and-gates",
  "web-security-baseline",
  "ui-design-system-workflow",
  "technical-documentation-generation",
  "bug-triage-and-pr-automation",
  "local-model-stack-evaluation",
  "coding-harness-design",
];

function completeItem(id: string): Topic {
  return {
    id,
    title: "Testthema",
    content: {
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
      status: "active",
    },
    sources: [
      {
        title: "Quelle",
        url: "https://example.test/source",
        type: "official-guide",
        mediaType: "text",
        origin: "primary",
        language: "en",
        checkedAt: "2026-09-20",
      },
    ],
  };
}

describe("public content topics", () => {
  it.each([
    [
      "agent-skills-and-commands",
      "https://developers.openai.com/plugins/build/skills",
    ],
    [
      "spec-framework-selection",
      "https://openspec.dev/docs/schemas/spec-driven",
    ],
    [
      "automation-value-and-gates",
      "https://developers.openai.com/api/docs/guides/agents/guardrails-approvals",
    ],
    [
      "web-security-baseline",
      "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
    ],
    [
      "web-security-baseline",
      "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/",
    ],
    [
      "web-security-baseline",
      "https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/",
    ],
    [
      "web-security-baseline",
      "https://top10.owasp.org/2025/A05_2025-Injection/",
    ],
  ])("links the focused source for %s", (topicId, sourceUrl) => {
    const topic = topics.items.find((item) => item.id === topicId);
    expect(topic?.sources.some((source) => source.url === sourceUrl)).toBe(
      true,
    );
  });

  it("links the context-management source used by the new learning check", () => {
    const item = topics.items.find(
      (candidate) => candidate.id === "context-selection-and-reset",
    );
    expect(
      item?.sources.some(
        (source) =>
          source.url ===
          "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
      ),
    ).toBe(true);
  });

  it("rejects empty learning paths and topic IDs without a matching topic", () => {
    const result = validateTopics({
      version: "1",
      items: [completeItem("present")],
      paths: [
        { name: "Leer", topicIds: [] },
        { name: "Unbekannt", topicIds: ["missing"] },
      ],
    });
    expect(result.errors).toContain("Empty learning path: Leer");
    expect(result.errors).toContain(
      "Unknown topic ID in learning path Unbekannt: missing",
    );
  });

  it("includes the phase-separation source for Research, Plan and Tasks", () => {
    const item = topics.items.find(
      (candidate) => candidate.id === "research-plan-tasks",
    );
    expect(
      item?.sources.some(
        (source) =>
          source.url ===
          "https://docs.github.com/en/copilot/tutorials/optimize-ai-usage",
      ),
    ).toBe(true);
  });
  it("requires a primary source, at most twenty sources, and a supported language", () => {
    const item = completeItem("source-rules");
    expect(
      validateTopics({
        version: "1",
        items: [
          { ...item, sources: [{ ...item.sources[0], origin: "secondary" }] },
        ],
      }).valid,
    ).toBe(false);
    expect(
      validateTopics({
        version: "1",
        items: [
          {
            ...item,
            sources: Array.from({ length: 21 }, (_, index) => ({
              ...item.sources[0],
              url: `https://example.test/${index}`,
            })),
          },
        ],
      }).valid,
    ).toBe(false);
    expect(
      validateTopics({
        version: "1",
        items: [
          {
            ...item,
            sources: [{ ...item.sources[0], language: "fr" as "en" }],
          },
        ],
      }).valid,
    ).toBe(false);
    expect(
      validateTopics({
        version: "1",
        items: [
          {
            ...item,
            sources: [
              item.sources[0],
              { ...item.sources[0], origin: "other" as "secondary" },
            ],
          },
        ],
      }).valid,
    ).toBe(false);
  });
  it("accepts audio with optional duration and rejects invalid media metadata", () => {
    const item = completeItem("media-rules");
    const source = item.sources[0];
    const validAudio = {
      ...source,
      mediaType: "audio" as const,
      duration: "1:37:13",
    };
    expect(
      validateTopics({
        version: "1",
        items: [{ ...item, sources: [validAudio] }],
      }).valid,
    ).toBe(true);
    expect(
      validateTopics({
        version: "1",
        items: [
          {
            ...item,
            sources: [{ ...validAudio, duration: undefined }],
          },
        ],
      }).valid,
    ).toBe(true);
    for (const invalidSource of [
      { ...source, mediaType: "unknown" },
      { ...source, mediaType: "text", duration: "25:00" },
      { ...source, mediaType: "audio", duration: "25 minutes" },
    ]) {
      expect(
        validateTopics({
          version: "1",
          items: [
            {
              ...item,
              sources: [invalidSource as unknown as Topic["sources"][number]],
            },
          ],
        }).valid,
      ).toBe(false);
    }
  });
  it("marks existing written sources as text", () => {
    expect(
      topics.items.every((item) =>
        item.sources
          .filter((source) => source.mediaType !== "video")
          .every(
            (source) =>
              source.mediaType ===
              (source.url.startsWith("https://notebook.google.com/")
                ? "audio"
                : "text"),
          ),
      ),
    ).toBe(true);
    expect(
      topics.items
        .flatMap((item) => item.sources)
        .filter((source) => source.mediaType === "text").length,
    ).toBeGreaterThan(11);
  });
  it("adds each podcast once and associates the domain-language example with its topic", () => {
    const audioSources = topics.items.flatMap((item) =>
      item.sources
        .filter((source) => source.mediaType === "audio")
        .map((source) => ({ topicId: item.id, source })),
    );
    expect(audioSources).toHaveLength(11);
    expect(new Set(audioSources.map(({ source }) => source.url)).size).toBe(11);
    expect(
      audioSources.find(({ source }) =>
        source.url.includes("f3673123-fc05-4a90-bc8c-fd368f7415d1"),
      ),
    ).toMatchObject({
      topicId: "domain-language-and-complexity",
      source: {
        title: sourceTitle("domain-language-and-complexity", 1),
        origin: "secondary",
        mediaType: "audio",
        duration: "23:57",
      },
    });
  });
  it("curates current sources for every topic outside the foundation path", () => {
    const foundationIds = new Set(topics.paths?.[0].topicIds);
    const expandedIds = new Set(expandedTopicIds);
    const otherTopics = topics.items.filter(
      (item) => !foundationIds.has(item.id) && !expandedIds.has(item.id),
    );
    expect(otherTopics).toHaveLength(20);
    expect(otherTopics.map((item) => item.id)).toContain("focused-git-commits");
    for (const item of otherTopics) {
      const expectedReviewDate =
        item.id === "agent-tool-and-mcp-permissions"
          ? "2026-09-28"
          : "2026-09-27";
      expect(item.editorial.reviewedAt).toBe(expectedReviewDate);
      expect(
        item.sources
          .filter((source) => source.mediaType === "text")
          .every((source) => source.checkedAt === expectedReviewDate),
      ).toBe(true);
    }
    const sourcesFor = (id: string) =>
      topics.items
        .find((item) => item.id === id)
        ?.sources.map((source) => source.url);
    expect(sourcesFor("coding-agent-context-and-trust-boundaries")).toContain(
      "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations",
    );
    expect(sourcesFor("module-boundaries-and-public-interfaces")).toContain(
      "https://www.typescriptlang.org/docs/handbook/2/modules.html",
    );
    expect(sourcesFor("playwright-for-web-flows")).toContain(
      "https://playwright.dev/docs/locators",
    );
  });
  it("contains six complete, editorially checked foundation topics", () => {
    const foundationIds = [
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "ears-requirements",
      "research-plan-tasks",
      "spec-driven-development-openspec",
    ];
    expect(
      topics.items
        .map((item) => item.id)
        .filter((id) => foundationIds.includes(id)),
    ).toEqual(foundationIds);

    for (const item of topics.items.filter((item) =>
      foundationIds.includes(item.id),
    )) {
      expect(item).toMatchObject({
        title: expect.any(String),
        content: {
          language: "de",
          problem: expect.any(String),
          coreConcept: expect.any(String),
          javaWebUse: expect.any(String),
          boundary: expect.any(String),
        },
        editorial: {
          publishedAt: "2026-09-20",
          reviewedAt: "2026-09-26",
          reviewDueAt: expect.stringMatching(/^202[67]-\d{2}-\d{2}$/),
          status: "active",
        },
      });
      expect(item.sources.length).toBeGreaterThan(0);
      expect(item.sources[0]).toMatchObject({
        title: expect.any(String),
        url: expect.stringMatching(/^https:\/\//),
        origin: "primary",
        language: expect.stringMatching(/^(de|en)$/),
      });
    }

    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
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
    expect(
      topics.items.map((item) => item.id).filter((id) => newIds.includes(id)),
    ).toEqual(newIds);
    for (const item of topics.items.filter((item) =>
      newIds.includes(item.id),
    )) {
      expect(item.content.problem.trim()).not.toBe("");
      expect(item.content.coreConcept.trim()).not.toBe("");
      expect(item.content.javaWebUse.trim()).not.toBe("");
      expect(item.content.boundary.trim()).not.toBe("");
      expect(item.sources.length).toBeGreaterThan(0);
      expect(item.editorial.publishedAt).toBe("2026-09-26");
      expect(item.editorial.reviewedAt).toBe("2026-09-27");
      expect(item.editorial.reviewDueAt).toBe("2027-03-27");
      expect(
        item.sources
          .filter((source) => source.mediaType === "text")
          .every((source) => source.checkedAt === "2026-09-27"),
      ).toBe(true);
    }
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("preserves the agreed order of the original twenty-six topics", () => {
    const newIds = [
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "review-and-accept-ai-generated-changes",
    ];
    const ids = topics.items.map((item) => item.id);

    const expandedIds = new Set(expandedTopicIds);
    expect(ids.filter((id) => !expandedIds.has(id))).toEqual([
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "agents-md",
      "ears-requirements",
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "research-plan-tasks",
      "spec-driven-development-openspec",
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
      "code-navigation-with-symbols-and-references",
      "versioned-library-docs-with-context7",
      "specialized-subagents-and-ownership",
      "agent-context-handoffs",
      "agent-tool-and-mcp-permissions",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "deterministic-agent-verification-gates",
      "java-spring-migrations-with-openrewrite",
      "playwright-for-web-flows",
      "web-xss-and-safe-dom",
      "dependency-security-assessment",
      "review-and-accept-ai-generated-changes",
      "compare-parallel-and-serial-agent-work",
      "focused-git-commits",
    ]);
    expect(new Set(ids).size).toBe(ids.length);
    expect(
      topics.items.every((item) => !("contentVersion" in item.editorial)),
    ).toBe(true);
    for (const item of topics.items.filter((item) =>
      newIds.includes(item.id),
    )) {
      expect(item.title.trim()).not.toBe("");
      expect(item.content.problem.trim()).not.toBe("");
      expect(item.content.coreConcept.trim()).not.toBe("");
      expect(item.content.javaWebUse.trim()).not.toBe("");
      expect(item.content.boundary.trim()).not.toBe("");
      expect(item.editorial).toMatchObject({
        publishedAt: "2026-09-26",
        reviewedAt: "2026-09-27",
        reviewDueAt: "2027-03-27",
        status: "active",
      });
      expect(item.sources.length).toBeGreaterThan(0);
      expect(
        item.sources
          .filter((source) => source.mediaType === "text")
          .every((source) => source.checkedAt === "2026-09-27"),
      ).toBe(true);
    }
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("preserves the existing learning paths and assigns the Git topic to a new path", () => {
    expect(topics.paths?.slice(0, 3)).toEqual([
      {
        name: pathName(0),
        topicIds: [
          "human-ai-responsibility",
          "problem-understanding-and-change-boundaries",
          "agents-md",
          "ears-requirements",
          "research-plan-tasks",
          "spec-driven-development-openspec",
        ],
      },
      {
        name: pathName(1),
        topicIds: [
          "problem-understanding-and-change-boundaries",
          "ears-requirements",
          "module-boundaries-and-public-interfaces",
          "tdd-for-domain-behavior",
          "archunit-for-java-architecture",
          "playwright-for-web-flows",
          "web-xss-and-safe-dom",
          "dependency-security-assessment",
        ],
      },
      {
        name: pathName(2),
        topicIds: [
          "human-ai-responsibility",
          "problem-understanding-and-change-boundaries",
          "agents-md",
          "coding-agent-context-and-trust-boundaries",
          "protect-secrets-and-sensitive-data-with-ai",
          "research-plan-tasks",
          "tdd-for-domain-behavior",
          "review-and-accept-ai-generated-changes",
        ],
      },
    ]);
    expect(
      topics.paths
        ?.slice(0, 5)
        .every((path) => !path.topicIds.includes("focused-git-commits")),
    ).toBe(true);
    expect(
      topics.paths
        ?.slice(5)
        .some((path) => path.topicIds.includes("focused-git-commits")),
    ).toBe(true);
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("rejects duplicate content IDs", () => {
    expect(
      validateTopics({
        version: "1",
        items: [completeItem("duplicate"), completeItem("duplicate")],
      }),
    ).toEqual({ valid: false, errors: ["Duplicate item ID: duplicate"] });
  });

  it("rejects a topic without an editorial source", () => {
    expect(
      validateTopics({
        version: "1",
        items: [{ ...completeItem("missing-source"), sources: [] }],
      }),
    ).toEqual({
      valid: false,
      errors: ["Missing primary source for item: missing-source"],
    });
  });
});

function sourceTitle(id: string, index: number) {
  return topics.items.find((item) => item.id === id)!.sources[index].title;
}
function pathName(index: number) {
  return topics.paths![index].name;
}
