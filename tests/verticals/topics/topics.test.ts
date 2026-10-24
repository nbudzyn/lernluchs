import { describe, expect, it } from "vitest";
import { topics } from "../../../src/verticals/topics/topics";

import { validateTopics } from "../../../src/verticals/topics/validateTopics";

// Bewusste redaktionelle Abnahme: exakte Prüfdaten nur an dieser Stelle.
const expectedEditorialDatesByTopic: Record<string, readonly [string, string]> =
  {
    "human-ai-responsibility": ["2026-10-09", "2027-01-09"],
    "problem-understanding-and-change-boundaries": ["2026-10-20", "2027-01-20"],
    "domain-language-and-complexity": ["2026-10-09", "2027-01-09"],
    "design-and-legacy-specification": ["2026-10-20", "2027-01-20"],
    "standards-and-constraint-rationale": ["2026-10-09", "2027-01-09"],
    "llm-fallibility-and-counterchecks": ["2026-09-27", "2027-03-27"],
    "project-documentation-and-checklists": ["2026-09-27", "2027-03-27"],
    "open-knowledge-format": ["2026-09-27", "2026-12-27"],
    "agents-md": ["2026-10-09", "2027-01-09"],
    "ears-requirements": ["2026-09-26", "2027-03-20"],
    "research-plan-tasks": ["2026-10-21", "2026-12-20"],
    "context-selection-and-reset": ["2026-10-20", "2027-01-20"],
    "java-ai-applications": ["2026-10-24", "2027-01-24"],
    "task-based-model-routing": ["2026-10-09", "2027-01-09"],
    "ai-content-provenance-and-disclosure": ["2026-10-09", "2027-01-09"],
    "web-security-baseline": ["2026-09-27", "2026-12-27"],
    "coding-agent-context-and-trust-boundaries": ["2026-09-27", "2027-03-27"],
    "protect-secrets-and-sensitive-data-with-ai": ["2026-09-27", "2027-03-27"],
    "local-model-stack-evaluation": ["2026-09-27", "2026-12-27"],
    "coding-agent-interface-selection": ["2026-10-20", "2027-01-20"],
    "spec-driven-development-openspec": ["2026-10-08", "2026-12-20"],
    "agent-skills-and-commands": ["2026-10-21", "2027-01-20"],
    "codegraphs-for-large-repos": ["2026-10-07", "2027-01-07"],
    "ui-design-system-workflow": ["2026-09-27", "2026-12-27"],
    "module-boundaries-and-public-interfaces": ["2026-09-27", "2027-03-27"],
    "tdd-for-domain-behavior": ["2026-09-27", "2027-03-27"],
    "archunit-for-java-architecture": ["2026-10-09", "2027-01-09"],
    "automation-value-and-gates": ["2026-09-27", "2026-12-27"],
    "parallel-agent-task-boundaries": ["2026-10-20", "2027-01-20"],
    "git-worktrees-for-isolated-changes": ["2026-09-27", "2027-03-27"],
    "versioned-library-docs-with-context7": ["2026-09-27", "2026-12-27"],
    "token-efficiency-tools": ["2026-10-20", "2027-01-20"],
    "agent-context-handoffs": ["2026-10-09", "2027-01-09"],
    "agent-tool-and-mcp-permissions": ["2026-09-28", "2026-12-27"],
    "agent-protocol-integration": ["2026-10-20", "2027-01-20"],
    "deterministic-agent-verification-gates": ["2026-10-20", "2027-01-20"],
    "agent-evals-and-traces": ["2026-10-20", "2027-01-20"],
    "refactorings-and-migrations-with-openrewrite": [
      "2026-10-07",
      "2026-12-27",
    ],
    "playwright-for-web-flows": ["2026-09-27", "2027-03-27"],
    "web-xss-and-safe-dom": ["2026-09-27", "2027-03-27"],
    "technical-documentation-generation": ["2026-10-07", "2027-03-27"],
    "dependency-security-assessment": ["2026-09-27", "2027-03-27"],
    "review-and-accept-ai-generated-changes": ["2026-10-20", "2027-01-20"],
    "compare-parallel-and-serial-agent-work": ["2026-09-27", "2026-12-27"],
    "bug-triage-and-pr-automation": ["2026-09-27", "2026-12-27"],
    "coding-harness-design": ["2026-10-20", "2027-01-20"],
    "model-and-api-lifecycle": ["2026-10-09", "2027-01-09"],
    "focused-git-commits": ["2026-09-27", "2027-03-27"],
  };

it("keeps the agreed review and revisit dates for all published topics", () => {
  expect(topics.items.map(({ id }) => id).sort()).toEqual(
    Object.keys(expectedEditorialDatesByTopic).sort(),
  );
  for (const topic of topics.items) {
    expect
      .soft([topic.editorial.reviewedAt, topic.editorial.reviewDueAt], topic.id)
      .toEqual(expectedEditorialDatesByTopic[topic.id]);
  }
});

// Redaktionelle Abnahme: konkrete neue Praktiken mit Originalbelegen;
// vorhandene Quellen behalten ihren eigenen bisherigen Prüftag.
const practitionerUpdates = [
  [
    "agent-protocol-integration",
    "Sitzungsmeldungen",
    "https://github.com/agentclientprotocol/agent-client-protocol/blob/main/CHANGELOG.md",
  ],
  [
    "problem-understanding-and-change-boundaries",
    "zurückspiegeln",
    "https://blog.fsck.com/2026/10/09/what-a-year/",
  ],
  [
    "parallel-agent-task-boundaries",
    "Abhängigkeitsgraph",
    "https://github.com/mattpocock/skills/releases/tag/v1.3.1",
  ],
  [
    "agent-skills-and-commands",
    "resolving-merge-conflicts",
    "https://github.com/mattpocock/skills/releases/tag/v1.3.1",
  ],
  [
    "token-efficiency-tools",
    "Code Mode",
    "https://lucumr.pocoo.org/2026/10/6/codemode/",
  ],
  [
    "coding-harness-design",
    "Unterbrechung",
    "https://mariozechner.at/posts/2026-05-30-shitty-robot/",
  ],
  [
    "coding-harness-design",
    "je Worktree",
    "https://openai.com/index/harness-engineering/",
  ],
  [
    "review-and-accept-ai-generated-changes",
    "Mergezahl",
    "https://www.anthropic.com/research/redesigning-source-control",
  ],
  [
    "coding-agent-interface-selection",
    "Spracheingabe",
    "https://simonwillison.net/2026/Oct/9/built-using-my-voice/",
  ],
  [
    "review-and-accept-ai-generated-changes",
    "Nachweispaket",
    "https://addyosmani.com/blog/agentic-code-review/",
  ],
  [
    "context-selection-and-reset",
    "bewusste Verdichtung",
    "https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy",
  ],
  [
    "design-and-legacy-specification",
    "Capture/Replay",
    "https://charity.wtf/p/ai-demands-more-engineering-discipline",
  ],
  [
    "agent-evals-and-traces",
    "Fehleranalyse",
    "https://hamel.dev/blog/posts/evals-faq/index.html",
  ],
  [
    "deterministic-agent-verification-gates",
    "Nix",
    "https://ghuntley.com/agency/",
  ],
] as const;

it("publishes practitioner-led workflow updates with dated primary evidence", () => {
  const violations: string[] = [];
  for (const [id, concept, url] of practitionerUpdates) {
    const topic = topics.items.find((item) => item.id === id);
    if (!topic) {
      violations.push(`${id}: Thema fehlt`);
      continue;
    }
    if (!Object.values(topic.content).join(" ").includes(concept))
      violations.push(`${id}: ${concept} fehlt`);
    if (
      !topic.sources.some(
        (source) =>
          source.url === url &&
          source.origin === "primary" &&
          source.checkedAt === "2026-10-20",
      )
    )
      violations.push(`${id}: geprüfter Originalbeleg fehlt`);
  }
  expect(violations).toEqual([]);
});

const expandedTopicIds = [
  "task-based-model-routing",
  "ai-content-provenance-and-disclosure",
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
  // Redaktionelle Abnahme: neue Lösungen und die freigegebenen Ergänzungen.
  for (const [id, concepts] of [
    ["task-based-model-routing", ["Routing", "Jev", "Clef", "Rückfall"]],
    [
      "ai-content-provenance-and-disclosure",
      ["C2PA", "Wasserzeichen", "EU AI Act", "Anbieter", "Betreiber"],
    ],
    ["human-ai-responsibility", ["EU AI Act", "Einsatzzweck"]],
    ["agent-skills-and-commands", ["gelegentlich", "Projektregeln"]],
    [
      "standards-and-constraint-rationale",
      ["projektspezifische", "automatisiert", "vertikale", "Modulgrenze"],
    ],
    [
      "archunit-for-java-architecture",
      ["vertikale", "Bestellung", "öffentliche", "Zyklen"],
    ],
    [
      "coding-harness-design",
      [
        "Loop Engineering",
        "Graph Engineering",
        "Fortschritt",
        "Zustand",
        "Memory",
        "Orchestrierung",
      ],
    ],
    ["deterministic-agent-verification-gates", ["Hooks", "modellbasierte"]],
    ["agent-evals-and-traces", ["Testdatenkontamination", "Regelumgehung"]],
    ["coding-agent-interface-selection", ["Dots"]],
    ["domain-language-and-complexity", ["Wiederverwendung"]],
    ["review-and-accept-ai-generated-changes", ["Projektkonventionen"]],
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
  }
  for (const id of [
    "problem-understanding-and-change-boundaries",
    "standards-and-constraint-rationale",
    "archunit-for-java-architecture",
  ]) {
    const topic = topics.items.find((item) => item.id === id)!;
    expect
      .soft(Object.values(topic.content).join(" "), id)
      .not.toMatch(/Schicht/);
  }
  for (const id of [
    "task-based-model-routing",
    "ai-content-provenance-and-disclosure",
  ]) {
    const topic = topics.items.find((item) => item.id === id);
    if (!topic) continue;
    expect
      .soft(
        topic.sources.some((source) => source.origin === "primary"),
        id,
      )
      .toBe(true);
    expect
      .soft(
        topic.sources.some((source) => source.origin === "secondary"),
        id,
      )
      .toBe(true);
    expect.soft(topic.title, id).not.toMatch(/prüfen|verstehen/i);
    expect.soft(topic.everydayAnchor, id).not.toMatch(/prüfen|verstehen/i);
    expect
      .soft(
        topic.sources.every(
          (source) => source.checkedAt <= topic.editorial.reviewedAt,
        ),
        id,
      )
      .toBe(true);
  }
  const context = topics.items.find(
    (item) => item.id === "context-selection-and-reset",
  )!;
  expect
    .soft(
      context.sources.find(
        (source) =>
          source.url ===
          "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5",
      ),
    )
    .toMatchObject({
      origin: "primary",
      mediaType: "text",
      checkedAt: "2026-10-09",
    });
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
        "2.0.2",
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
      expect
        .soft(
          topics.items.some((topic) => topic.id === topicId),
          topicId + ": " + source.url + ": Themenreferenz",
        )
        .toBe(true);
      expect
        .soft(
          source.title.trim(),
          topicId + ": " + source.url + ": Quellentitel",
        )
        .not.toBe("");
      expect
        .soft(
          URL.canParse(source.url) ? new URL(source.url).protocol : null,
          topicId + ": " + source.url + ": HTTPS-Quelle",
        )
        .toBe("https:");
    }
  });
  it("places the new primary-source podcast first and retains the earlier audio", () => {
    for (const [id, duration, oldUrl] of [
      [
        "agent-skills-and-commands",
        "22:33",
        "https://notebooklm.link.google/3r54pMvsIYVd",
      ],
      [
        "research-plan-tasks",
        "20:03",
        "https://notebook.google.com/notebook/e8f2213d-6d4e-4a47-a523-fd9163a6a96e/artifact/afab811e-4bd2-4fb2-96fc-59406ac984be",
      ],
    ]) {
      const topic = topics.items.find((item) => item.id === id);
      const [newest, ...earlier] =
        topic?.sources.filter((source) => source.origin === "secondary") ?? [];

      expect.soft(newest).toMatchObject({
        type: "audio-summary",
        mediaType: "audio",
        origin: "secondary",
        language: "de",
        checkedAt: "2026-10-21",
        duration,
      });
      expect.soft(newest?.duration).toMatch(/^(?:\d+:)?\d{1,2}:[0-5]\d$/);
      expect.soft(earlier.map((source) => source.url)).toContain(oldUrl);
    }
  });
  it("offers architecture and Spring implementation podcasts before the earlier Java audio", () => {
    const topic = topics.items.find(
      (item) => item.id === "java-ai-applications",
    );
    const secondary =
      topic?.sources.filter((source) => source.origin === "secondary") ?? [];
    const audio = secondary.filter((source) => source.mediaType === "audio");
    expect.soft(audio).toHaveLength(3);
    expect
      .soft(secondary[2]?.url)
      .toBe("https://notebooklm.link.google/u0T0goRCcnks");
    // Redaktionelle Abnahme der Zweiteilung; die inhaltliche Abgrenzung wird
    // zusätzlich am erzeugten Audio/Transkript geprüft, nicht durch Netzaufrufe.
    for (const [index, title] of [
      /Architektur|Konzepte/i,
      /Spring AI/i,
    ].entries()) {
      const source = secondary[index];
      expect.soft(source, `Java-KI-Podcast ${index + 1}`).toMatchObject({
        title: expect.stringMatching(title),
        type: "audio-summary",
        mediaType: "audio",
        origin: "secondary",
        language: "de",
        checkedAt: "2026-10-24",
        duration: expect.stringMatching(/^(?:\d+:)?\d{1,2}:[0-5]\d$/),
      });
    }
    expect.soft(new Set(audio.map((source) => source.url)).size).toBe(3);
  });
  it("includes an independent research and planning practice as a textual primary source", () => {
    const topic = topics.items.find(
      (item) => item.id === "research-plan-tasks",
    );
    expect(topic?.sources).toContainEqual(
      expect.objectContaining({
        url: "https://boristane.com/blog/how-i-use-claude-code/",
        origin: "primary",
        mediaType: "text",
        checkedAt: "2026-10-21",
      }),
    );
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
      const expectedReviewDate = expectedEditorialDatesByTopic[item.id]![0];
      expect
        .soft(
          item.sources
            .filter((source) => source.mediaType === "text")
            .every(
              (source) =>
                source.checkedAt >= "2026-09-27" &&
                source.checkedAt <= expectedReviewDate,
            ),
          item.id + ": Quellenprüfdatum",
        )
        .toBe(true);
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
      expect.soft(item, item.id + ": Inhaltsvertrag").toMatchObject({
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
          status: "active",
        },
      });
      expect
        .soft(item.sources.length, item.id + ": Quellen vorhanden")
        .toBeGreaterThan(0);
      expect.soft(item.sources[0], item.id + ": Primärquelle").toMatchObject({
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
      expect
        .soft(item.content.problem.trim(), item.id + ": Problem vorhanden")
        .not.toBe("");
      expect
        .soft(
          item.content.coreConcept.trim(),
          item.id + ": Kernkonzept vorhanden",
        )
        .not.toBe("");
      expect
        .soft(item.content.javaWebUse.trim(), item.id + ": Anwendung vorhanden")
        .not.toBe("");
      expect
        .soft(item.content.boundary.trim(), item.id + ": Grenze vorhanden")
        .not.toBe("");
      expect
        .soft(item.sources.length, item.id + ": Quellen vorhanden")
        .toBeGreaterThan(0);
      expect
        .soft(item.editorial.publishedAt, item.id + ": Veröffentlichungsdatum")
        .toBe("2026-09-26");
      expect
        .soft(
          item.sources
            .filter((source) => source.mediaType === "text")
            .every(
              (source) =>
                source.checkedAt >= "2026-09-27" &&
                source.checkedAt <= item.editorial.reviewedAt,
            ),
          item.id + ": Quellenprüfdatum",
        )
        .toBe(true);
    }
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("uses the agreed problem-first order of all published topics", () => {
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
      "task-based-model-routing",
      "ai-content-provenance-and-disclosure",
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
      expect
        .soft(item.title.trim(), item.id + ": Titel vorhanden")
        .not.toBe("");
      expect
        .soft(item.content.problem.trim(), item.id + ": Problem vorhanden")
        .not.toBe("");
      expect
        .soft(
          item.content.coreConcept.trim(),
          item.id + ": Kernkonzept vorhanden",
        )
        .not.toBe("");
      expect
        .soft(item.content.javaWebUse.trim(), item.id + ": Anwendung vorhanden")
        .not.toBe("");
      expect
        .soft(item.content.boundary.trim(), item.id + ": Grenze vorhanden")
        .not.toBe("");
      expect
        .soft(item.editorial, item.id + ": Redaktionelle Metadaten")
        .toMatchObject({
          publishedAt: "2026-09-26",
          status: "active",
        });
      expect
        .soft(item.sources.length, item.id + ": Quellen vorhanden")
        .toBeGreaterThan(0);
      expect
        .soft(
          item.sources
            .filter((source) => source.mediaType === "text")
            .every(
              (source) =>
                source.checkedAt >= "2026-09-27" &&
                source.checkedAt <= item.editorial.reviewedAt,
            ),
          item.id + ": Quellenprüfdatum",
        )
        .toBe(true);
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
});

function pathName(index: number) {
  return topics.paths![index].name;
}

it("removes obsolete topic path references", () => {
  expect(topics.paths?.flatMap((path) => path.topicIds)).not.toContain(
    "code-navigation-with-symbols-and-references",
  );
});
