import { describe, expect, it } from "vitest";
import type { Topic } from "../../../src/verticals/topics/topicContract";
import { topics } from "../../../src/verticals/topics/topics";

import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const refreshedTopicIds = new Set([
  "coding-harness-design",
  "codegraphs-for-large-repos",
  "spec-driven-development-openspec",
  "coding-agent-interface-selection",
  "agent-skills-and-commands",
  "review-and-accept-ai-generated-changes",
  "deterministic-agent-verification-gates",
  "agent-protocol-integration",
  "java-ai-applications",
  "refactorings-and-migrations-with-openrewrite",
  "technical-documentation-generation",
]);

const expandedTopicIds = [
  "agent-evals-and-traces",
  "model-and-api-lifecycle",
  "agent-protocol-integration",
  "java-ai-applications",
  "domain-language-and-complexity",
  "project-documentation-and-checklists",
  "open-knowledge-format",
  "problem-understanding-and-change-boundaries",
  "design-and-legacy-specification",
  "standards-and-constraint-rationale",
  "llm-fallibility-and-counterchecks",
  "context-selection-and-reset",
  "codegraphs-for-large-repos",
  "token-efficiency-tools",
  "coding-agent-interface-selection",
  "agent-skills-and-commands",
  "spec-driven-development-openspec",
  "automation-value-and-gates",
  "web-security-baseline",
  "ui-design-system-workflow",
  "technical-documentation-generation",
  "bug-triage-and-pr-automation",
  "local-model-stack-evaluation",
  "coding-harness-design",
];

it("publishes current development topics with distinct concepts and sources", () => {
  for (const [id, title, anchorTerm] of [
    [
      "problem-understanding-and-change-boundaries",
      "Problem, Ziel und Änderungsumfang klären",
      "genug",
    ],
    [
      "spec-driven-development-openspec",
      "Spec-Driven Development mit OpenSpec, Spec Kit und Kiro",
      "Chat",
    ],
    [
      "parallel-agent-task-boundaries",
      "Subagents mit klaren Aufgaben und Zuständigkeiten einsetzen",
      "verantwortet",
    ],
    [
      "agent-skills-and-commands",
      "Agent Skills für wiederkehrende Entwicklungsabläufe",
      "Skill",
    ],
    [
      "versioned-library-docs-with-context7",
      "Context7 für versionsbezogene Bibliotheksdokumentation",
      "Bibliotheksversion",
    ],
    [
      "local-model-stack-evaluation",
      "Lokale KI-Stacks mit Qwen, Hermes und Bionic",
      "lokal",
    ],
    [
      "token-efficiency-tools",
      "Tokenverbrauch mit RTK, Headroom, Caveman und Ponytail reduzieren",
      "Tokens",
    ],
  ]) {
    const topic = topics.items.find((item) => item.id === id);
    expect.soft(topic?.title, id).toBe(title);
    expect.soft(topic?.everydayAnchor, id).toContain(anchorTerm);
  }
  for (const topic of topics.items.filter((item) =>
    [
      "problem-understanding-and-change-boundaries",
      "spec-driven-development-openspec",
      "parallel-agent-task-boundaries",
    ].includes(item.id),
  )) {
    const secondary = topic.sources.filter(
      (source) => source.origin === "secondary",
    );
    const firstOther = secondary.findIndex(
      (source) => source.mediaType !== "audio",
    );
    if (firstOther >= 0) {
      expect
        .soft(
          secondary
            .slice(firstOther)
            .every((source) => source.mediaType !== "audio"),
          topic.id + ": Podcasts zuerst",
        )
        .toBe(true);
    }
  }
  const invalidAnchors = topics.items
    .filter((topic) => {
      const anchor = topic.everydayAnchor;
      return typeof anchor !== "string" || !anchor.trim().endsWith(".");
    })
    .map((topic) => topic.id);
  expect.soft(invalidAnchors, "Nicht vollständige Alltagsanker").toEqual([]);

  expect
    .soft(
      topics.items.find(
        (item) => item.id === "protect-secrets-and-sensitive-data-with-ai",
      )?.everydayAnchor,
    )
    .toBe("Der Agent pusht meinen API-Key auf GitHub.");

  expect
    .soft(
      topics.items.find((item) => item.id === "agent-evals-and-traces")
        ?.everydayAnchor,
    )
    .toBe(
      "Bei derselben Aufgabe liefert mein Agent mal gute Ergebnisse und mal Murks.",
    );
  // Bewusste redaktionelle Bindung: diese Beispiele müssen agentisches Coding adressieren.
  for (const [id, field, required] of [
    ["spec-driven-development-openspec", "problem", "geprüften Umsetzung"],
    ["agent-evals-and-traces", "javaWebUse", "Spring-Endpunkt"],
    ["refactorings-and-migrations-with-openrewrite", "problem", "Coding-Agent"],
    ["technical-documentation-generation", "problem", "Coding-Agent"],
  ] as const) {
    const topic = topics.items.find((item) => item.id === id)!;
    expect.soft(topic.content[field], id).toContain(required);
  }
  // Redaktionelle Abnahme: Die vereinbarten neuen Aspekte je Thema absichern.
  for (const [id, concepts] of [
    [
      "agent-evals-and-traces",
      ["Traces", "Toolabläufe", "LLM-Judge", "Regressionen"],
    ],
    ["coding-harness-design", ["Wiederaufnahme", "Abbruch", "Budget"]],
    [
      "codegraphs-for-large-repos",
      ["Codegraph", "semantische Suche", "Codeabschnitte"],
    ],
    ["spec-driven-development-openspec", ["converge", "fehlende Anforderung"]],
    [
      "coding-agent-interface-selection",
      ["Junie", "Cloud", "Modellverarbeitung"],
    ],
    ["agent-skills-and-commands", ["Agent Skills", "bedarfsgerecht", "Evals"]],
    [
      "review-and-accept-ai-generated-changes",
      ["zweite", "Review-Agent", "Review-Aufwand"],
    ],
    ["deterministic-agent-verification-gates", ["Evals", "Bewertungsmaßstäbe"]],
    [
      "agent-protocol-integration",
      ["MCP", "A2A", "ACP", "2026-07-28", "2025-11-25"],
    ],
    ["model-and-api-lifecycle", ["Abkündigungen", "Regression", "Rückfall"]],
    [
      "java-ai-applications",
      [
        "Spring AI",
        "LangChain4j",
        "Quarkus",
        "SDK",
        "2.0.1",
        "2.1.0-M1",
        "angekündigt",
      ],
    ],
  ] as const) {
    const topic = topics.items.find((item) => item.id === id);
    expect.soft(topic, id).toBeDefined();
    if (!topic) continue;
    const text = Object.values(topic.content).join(" ");
    expect
      .soft(
        concepts.filter((concept) => !text.includes(concept)),
        id,
      )
      .toEqual([]);
    expect.soft(topic.editorial, id).toMatchObject({
      reviewedAt:
        id === "spec-driven-development-openspec"
          ? "2026-10-08"
          : id === "model-and-api-lifecycle"
            ? "2026-10-03"
            : "2026-10-07",
      status: "active",
    });
    expect
      .soft(
        topic.sources.some((source) => source.origin === "primary"),
        id,
      )
      .toBe(true);
    expect
      .soft(
        topic.sources.every(
          (source) => source.checkedAt <= topic.editorial.reviewedAt,
        ),
        id,
      )
      .toBe(true);
    if (id === "agent-evals-and-traces") {
      expect
        .soft(
          topic.sources.map((source) => source.url),
          id,
        )
        .toContain(
          "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents",
        );
      expect.soft(topic.editorial, id).toMatchObject({
        publishedAt: "2026-10-07",
        reviewDueAt: "2027-01-07",
      });
      expect
        .soft(
          topic.sources.some((source) => source.origin === "secondary"),
          id,
        )
        .toBe(true);
      expect
        .soft(
          topic.sources.map((source) => source.url),
          id,
        )
        .toContain(
          "https://www.testmuai.com/blog/build-trustworthy-ai-agents/",
        );
    }
  }
});

it("sources tool-specific token guidance and the supplementary video", () => {
  const tokenTopic = topics.items.find(
    (item) => item.id === "token-efficiency-tools",
  )!;
  for (const url of [
    "https://github.com/headroomlabs-ai/headroom",
    "https://github.com/DietrichGebert/ponytail",
  ])
    expect
      .soft(
        tokenTopic.sources.map((source) => source.url),
        url,
      )
      .toContain(url);
  expect.soft(tokenTopic.content.coreConcept).toContain("unnötigen Code");
  expect
    .soft(
      tokenTopic.sources.find(
        (source) =>
          source.url === "https://www.youtube.com/watch?v=vq70qWphRfk",
      ),
    )
    .toMatchObject({
      mediaType: "video",
      origin: "secondary",
      duration: "6:57",
      checkedAt: "2026-10-03",
    });
});

it("uses the current sandbox-security source for agent tool permissions", () => {
  const topic = topics.items.find(
    (item) => item.id === "agent-tool-and-mcp-permissions",
  );
  expect(topic?.sources.map((source) => source.url)).toContain(
    "https://developers.openai.com/api/docs/guides/agents-api/environments/security",
  );
  expect(topic?.sources.map((source) => source.url)).not.toContain(
    "https://developers.openai.com/api/docs/guides/agent-builder-safety",
  );
});

function completeItem(id: string): Topic {
  return {
    id,
    title: "Testthema",
    everydayAnchor: "Mein Agent hat sich verrannt.",
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
      "spec-driven-development-openspec",
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
  it("marks written sources as text independently of audio and video providers", () => {
    expect(
      topics.items.every((item) =>
        item.sources
          .filter((source) => !["audio", "video"].includes(source.mediaType))
          .every((source) => source.mediaType === "text"),
      ),
    ).toBe(true);
    expect(
      topics.items
        .flatMap((item) => item.sources)
        .filter((source) => source.mediaType === "text").length,
    ).toBeGreaterThan(0);
  });
  it("provides audio sources with titles and HTTPS links for their topics", () => {
    const audioSources = topics.items.flatMap((item) =>
      item.sources
        .filter((source) => source.mediaType === "audio")
        .map((source) => ({ topicId: item.id, source })),
    );
    expect(audioSources.length).toBeGreaterThan(0);
    for (const { topicId, source } of audioSources) {
      expect(topics.items.some((topic) => topic.id === topicId)).toBe(true);
      expect(source.title.trim()).not.toBe("");
      expect(new URL(source.url).protocol).toBe("https:");
    }
  });
  it("curates current sources for every topic outside the foundation path", () => {
    const foundationIds = new Set(topics.paths?.[0].topicIds);
    const expandedIds = new Set(expandedTopicIds);
    const otherTopics = topics.items.filter(
      (item) => !foundationIds.has(item.id) && !expandedIds.has(item.id),
    );
    expect(otherTopics).toHaveLength(18);
    expect(otherTopics.map((item) => item.id)).toContain("focused-git-commits");
    for (const item of otherTopics) {
      const expectedReviewDate =
        item.id === "parallel-agent-task-boundaries"
          ? "2026-10-08"
          : refreshedTopicIds.has(item.id)
            ? "2026-10-07"
            : item.id === "agent-tool-and-mcp-permissions"
              ? "2026-09-28"
              : "2026-09-27";
      expect(item.editorial.reviewedAt).toBe(expectedReviewDate);
      expect(
        item.sources
          .filter((source) => source.mediaType === "text")
          .every(
            (source) =>
              source.checkedAt >= "2026-09-27" &&
              source.checkedAt <= expectedReviewDate,
          ),
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
          reviewedAt: [
            "problem-understanding-and-change-boundaries",
            "spec-driven-development-openspec",
            "parallel-agent-task-boundaries",
          ].includes(item.id)
            ? "2026-10-08"
            : "2026-09-26",
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

  it("preserves the six sourced topics from the second learning path in order", () => {
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
          .every(
            (source) =>
              source.checkedAt >= "2026-09-27" &&
              source.checkedAt <= item.editorial.reviewedAt,
          ),
      ).toBe(true);
    }
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("uses the agreed problem-first order of all forty-six topics", () => {
    const newIds = [
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "review-and-accept-ai-generated-changes",
    ];
    const ids = topics.items.map((item) => item.id);

    expect(ids).toEqual([
      "human-ai-responsibility",
      "problem-understanding-and-change-boundaries",
      "domain-language-and-complexity",
      "design-and-legacy-specification",
      "standards-and-constraint-rationale",
      "llm-fallibility-and-counterchecks",
      "project-documentation-and-checklists",
      "open-knowledge-format",
      "agents-md",
      "ears-requirements",
      "research-plan-tasks",
      "context-selection-and-reset",
      "java-ai-applications",
      "web-security-baseline",
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
      "local-model-stack-evaluation",
      "coding-agent-interface-selection",
      "spec-driven-development-openspec",
      "agent-skills-and-commands",
      "codegraphs-for-large-repos",
      "ui-design-system-workflow",
      "module-boundaries-and-public-interfaces",
      "tdd-for-domain-behavior",
      "archunit-for-java-architecture",
      "automation-value-and-gates",
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
      "versioned-library-docs-with-context7",
      "token-efficiency-tools",
      "agent-context-handoffs",
      "agent-tool-and-mcp-permissions",
      "agent-protocol-integration",
      "deterministic-agent-verification-gates",
      "agent-evals-and-traces",
      "refactorings-and-migrations-with-openrewrite",
      "playwright-for-web-flows",
      "web-xss-and-safe-dom",
      "technical-documentation-generation",
      "dependency-security-assessment",
      "review-and-accept-ai-generated-changes",
      "compare-parallel-and-serial-agent-work",
      "bug-triage-and-pr-automation",
      "coding-harness-design",
      "model-and-api-lifecycle",
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
        reviewedAt: refreshedTopicIds.has(item.id)
          ? "2026-10-07"
          : "2026-09-27",
        reviewDueAt: refreshedTopicIds.has(item.id)
          ? "2027-01-07"
          : "2027-03-27",
        status: "active",
      });
      expect(item.sources.length).toBeGreaterThan(0);
      expect(
        item.sources
          .filter((source) => source.mediaType === "text")
          .every(
            (source) =>
              source.checkedAt >= "2026-09-27" &&
              source.checkedAt <= item.editorial.reviewedAt,
          ),
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
          "research-plan-tasks",
          "coding-agent-context-and-trust-boundaries",
          "protect-secrets-and-sensitive-data-with-ai",
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

function pathName(index: number) {
  return topics.paths![index].name;
}
