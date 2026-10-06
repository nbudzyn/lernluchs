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
    expect(new Set(ids).size).toBe(49);
    for (const path of topics.paths ?? []) {
      expect(new Set(path.topicIds).size).toBe(path.topicIds.length);
      expect(ids.filter((id) => path.topicIds.includes(id))).toEqual(
        path.topicIds,
      );
    }
  });
});
