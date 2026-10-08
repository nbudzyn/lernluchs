/// <reference types="vite/client" />
import topicSource from "../../../src/verticals/topics/topics.ts?raw";
import learningPathSource from "../../../src/verticals/topics/learningPaths.ts?raw";
import { describe, expect, it } from "vitest";
import { topics } from "../../../src/verticals/topics/topics";

describe("central topic editing", () => {
  it("keeps all topic data and order in one file without assembly helpers", () => {
    const source = topicSource;
    expect(source).not.toMatch(
      /newLearningTopics|expandedLearningTopics|notebookPodcasts|learningVideos|additionsAfter/,
    );
    expect(source).not.toMatch(/\bfunction\b|\.flatMap\(|\.filter\(|\.map\(/);
    expect(source.match(/\bid:/g)).toHaveLength(topics.items.length);
  });

  it("stores learning paths separately with valid unique references in list order", () => {
    const source = learningPathSource;
    expect(source).toContain("topicIds:");
    expect(source).not.toMatch(/\bfunction\b|\.map\(/);
    expect(topics.paths).toHaveLength(14);
    const ids = topics.items.map((item) => item.id);
    expect(new Set(ids).size).toBe(46);
    for (const removed of [
      "goal-discovery-and-stop-criteria",
      "spec-framework-selection",
      "specialized-subagents-and-ownership",
    ]) {
      expect(ids, removed).not.toContain(removed);
    }
    const expectedSources: Record<string, string[]> = {
      "problem-understanding-and-change-boundaries": [
        "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results",
        "https://notebook.google.com/notebook/6e538076-e980-4471-a351-01d34903567f/artifact/0a86fe92-0c28-46d5-b30e-10349a67802a",
        "https://notebooklm.link.google/h0fbMDINkgRw",
        "https://openai.com/business/guides-and-resources/how-openai-uses-codex/",
        "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
        "https://www.gov.uk/service-manual/agile-delivery/writing-user-stories",
        "https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits",
        "youtube:KP0U3I-f9-Y",
        "youtube:MvRbBamMZm0",
        "youtube:TaMLUf3gISo",
        "youtube:VNCwMVAo2tg",
        "youtube:q26147zlcMU",
        "youtube:uj3PlPDAlHU",
      ],
      "spec-driven-development-openspec": [
        "https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md",
        "https://github.com/github/spec-kit/blob/main/docs/history.md",
        "https://github.com/github/spec-kit/blob/main/docs/index.md",
        "https://github.com/github/spec-kit/blob/main/newsletters/2026-June.md",
        "https://kiro.dev/docs/getting-started/first-project/",
        "https://kiro.dev/docs/specs/",
        "https://notebook.google.com/notebook/b660f74e-9aa5-422a-bfca-f4b5935c11c0/artifact/fe6aa068-4945-4013-a02f-52cc1db8b771",
        "https://notebooklm.link.google/wZfxiPXJMLxP",
        "https://openspec.dev/",
        "https://openspec.dev/docs/quickstart",
        "https://openspec.dev/docs/schemas/spec-driven",
        "https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/",
        "youtube:P4EwAIflyq8",
        "youtube:YHPMs252Opc",
        "youtube:fsVX9OfkFi0",
        "youtube:qQZENQkraT4",
        "youtube:raPTOBUpc3M",
        "youtube:z6MWGIa-bos",
      ],
      "parallel-agent-task-boundaries": [
        "https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents",
        "https://notebooklm.link.google/NeZfLXrQGdPo",
        "https://notebooklm.link.google/g3MMPfneFmKb",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
        "https://www.anthropic.com/engineering/multi-agent-research-system",
        "youtube:0g_ApRmfOjs",
        "youtube:7_F2rGhK0iE",
        "youtube:8ex-HOTYOmM",
        "youtube:ALXRvWs4wTg",
        "youtube:Ag6Ly61Mc3E",
        "youtube:J5KTpq7hVn4",
        "youtube:N3Yo43uZotE",
        "youtube:sWH0T4Zez6I",
      ],
    };
    for (const [id, identities] of Object.entries(expectedSources)) {
      const topic = topics.items.find((item) => item.id === id)!;
      const actual = topic.sources
        .map((source) => {
          const url = new URL(source.url);
          return source.mediaType === "video" &&
            url.hostname === "www.youtube.com"
            ? "youtube:" + url.searchParams.get("v")
            : source.url;
        })
        .sort();
      expect(actual, id + ": vereinigte Quellen").toEqual(identities);
    }
    for (const path of topics.paths ?? []) {
      expect(new Set(path.topicIds).size).toBe(path.topicIds.length);
      expect(ids.filter((id) => path.topicIds.includes(id))).toEqual(
        path.topicIds,
      );
    }
  });
});
