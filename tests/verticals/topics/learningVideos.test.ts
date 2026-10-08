import { describe, expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const withoutGermanVideo = [
  "ears-requirements",
  "standards-and-constraint-rationale",
  "codegraphs-for-large-repos",
  "token-efficiency-tools",
  "spec-driven-development-openspec",
  "agent-context-handoffs",
  "refactorings-and-migrations-with-openrewrite",
  "compare-parallel-and-serial-agent-work",
  "bug-triage-and-pr-automation",
];

describe("agreed learning video selection", () => {
  it("provides four videos per topic, or three English videos for the documented gaps", () => {
    // Historische Videoauswahl bewahren; Ergänzungen werden separat geprüft.
    const originalTopics = topics.items.filter(
      (topic) => topic.editorial.publishedAt < "2026-10-03",
    );
    expect(originalTopics).toHaveLength(42);
    for (const topic of originalTopics) {
      const videos = topic.sources.filter(
        (source) =>
          source.mediaType === "video" && source.checkedAt === "2026-09-30",
      );
      const merged = [
        "problem-understanding-and-change-boundaries",
        "spec-driven-development-openspec",
        "parallel-agent-task-boundaries",
      ].includes(topic.id);
      const gap = withoutGermanVideo.includes(topic.id) && !merged;
      expect(videos, topic.id).toHaveLength(
        merged
          ? (
              {
                "problem-understanding-and-change-boundaries": 6,
                "spec-driven-development-openspec": 6,
                "parallel-agent-task-boundaries": 8,
              } as Record<string, number>
            )[topic.id]
          : gap
            ? 3
            : 4,
      );
      expect(
        videos.some((source) => source.language === "de"),
        topic.id,
      ).toBe(!gap);
      expect(
        new Set(
          videos.map((source) => new URL(source.url).searchParams.get("v")),
        ).size,
      ).toBe(videos.length);
      expect(
        videos.every(
          (source) => source.duration && source.checkedAt === "2026-09-30",
        ),
      ).toBe(true);
    }
    expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
  });

  it("keeps the four agreed first-topic videos with their durations and languages", () => {
    expect(
      topics.items[0].sources
        .filter((source) => source.mediaType === "video")
        .map((source) => [
          new URL(source.url).searchParams.get("v"),
          source.duration,
          source.language,
        ]),
    ).toEqual([
      ["cmEJ-5zYKHA", "7:27", "en"],
      ["sNHZjpXlZl8", "19:43", "de"],
      ["aGwYtUzMQUk", "6:10", "en"],
      ["muLPOvIEtaw", "3:44", "en"],
    ]);
  });

  it("keeps full running time and recommended sections separate", () => {
    const mcp = topics.items.find(
      (topic) => topic.id === "agent-tool-and-mcp-permissions",
    );
    expect(
      mcp?.sources.find((source) => source.url.includes("n9OiWOeyU-E")),
    ).toMatchObject({
      mediaType: "video",
      duration: "96:14",
      learningSegment: { start: "10:00", end: "52:36" },
    });
  });
});
