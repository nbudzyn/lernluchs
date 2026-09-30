import { describe, expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import type { TopicSource } from "../../../src/verticals/topics/topicContract";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

function validateSources(sources: unknown[]) {
  return validateTopics({
    version: "test",
    items: [{ ...topics.items[0], sources: sources as TopicSource[] }],
  });
}

describe("video source contract", () => {
  const video = {
    ...topics.items[0].sources[0],
    type: "learning-video",
    url: "https://www.youtube.com/watch?v=example1234",
    mediaType: "video",
    duration: "96:14",
    learningSegment: { start: "10:00", end: "52:36" },
  };

  it("accepts twenty sources and rejects twenty-one", () => {
    const sources = Array.from({ length: 20 }, (_, index) => ({
      ...topics.items[0].sources[0],
      url: `https://example.test/${index}`,
    }));
    expect(validateSources(sources).valid).toBe(true);
    expect(validateSources([...sources, video]).errors).toContain(
      `Too many sources for item: ${topics.items[0].id}`,
    );
  });

  it("accepts video with a duration and bounded segment, regardless of origin", () => {
    expect(validateSources([video]).valid).toBe(true);
    expect(
      validateSources([
        topics.items[0].sources[0],
        { ...video, origin: "secondary" },
      ]).valid,
    ).toBe(true);
  });

  it.each([
    { duration: undefined },
    { duration: "25 minutes" },
    { duration: "0:00" },
    { learningSegment: { start: "52:36", end: "10:00" } },
    { learningSegment: { start: "10:00", end: "97:00" } },
    { learningSegment: { start: "10:60", end: "52:36" } },
    { learningSegment: { start: "10:00", end: "10:00" } },
    { mediaType: "text" },
    { mediaType: "audio" },
    { type: "unknown" },
  ])("rejects malformed video metadata: %j", (change) => {
    expect(validateSources([{ ...video, ...change }]).valid).toBe(false);
  });

  it("rejects duplicate video links within a topic, including start-time variants", () => {
    const source = {
      ...video,
      url: "https://www.youtube.com/watch?v=example1234",
    };
    expect(
      validateSources([source, { ...source, url: `${source.url}&t=600s` }])
        .valid,
    ).toBe(false);
  });
});
