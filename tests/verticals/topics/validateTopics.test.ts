import { describe, expect, it } from "vitest";

import type {
  Topic,
  TopicSource,
} from "../../../src/verticals/topics/topicContract";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

it("requires parseable HTTPS source URLs", () => {
  for (const [url, valid] of [
    ["https://example.test/source?query=1#section", true],
    ["https://", false],
    ["https://exa mple.test", false],
    ["https://[invalid", false],
    ["http://example.test/source", false],
  ] as const) {
    const topic = completeTopic("source-url");
    const result = validateTopics({
      version: "1",
      items: [{ ...topic, sources: [{ ...topic.sources[0], url }] }],
    });
    expect.soft(result, url).toEqual({
      valid,
      errors: valid ? [] : ["Invalid source for item: source-url"],
    });
  }
});

it("rejects missing, empty and non-text everyday anchors with the topic ID", () => {
  for (const everydayAnchor of [undefined, "", "   ", 42]) {
    const item = {
      ...completeTopic("anchor"),
      id: `invalid-anchor-${String(everydayAnchor)}`,
      everydayAnchor,
    } as unknown as Topic;
    expect
      .soft(validateTopics({ version: "1", items: [item] }), item.id)
      .toEqual({
        valid: false,
        errors: [`Incomplete topic: ${item.id}`],
      });
  }
});

function completeTopic(id: string): Topic {
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

describe("topic validation", () => {
  it("requires nonempty unique learning path IDs", () => {
    const item = completeTopic("present");
    const result = validateTopics({
      version: "1",
      items: [item],
      paths: [
        { id: "same", name: "Erster", topicIds: [item.id] },
        { id: "same", name: "Zweiter", topicIds: [item.id] },
        { id: " ", name: "Leer", topicIds: [item.id] },
      ],
    });
    expect(result).toEqual({
      valid: false,
      errors: [
        "Invalid learning path ID: Zweiter",
        "Invalid learning path ID: Leer",
      ],
    });
  });

  it("rejects empty learning paths and topic IDs without a matching topic", () => {
    const result = validateTopics({
      version: "1",
      items: [completeTopic("present")],
      paths: [
        { id: "fixture-1", name: "Leer", topicIds: [] },
        { id: "fixture-2", name: "Unbekannt", topicIds: ["missing"] },
      ],
    });
    expect(result.errors).toContain("Empty learning path: Leer");
    expect(result.errors).toContain(
      "Unknown topic ID in learning path Unbekannt: missing",
    );
  });

  it("requires a primary source and supported source language and origin", () => {
    const item = completeTopic("source-rules");
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
    const item = completeTopic("media-rules");
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

  it("rejects duplicate content IDs", () => {
    expect(
      validateTopics({
        version: "1",
        items: [completeTopic("duplicate"), completeTopic("duplicate")],
      }),
    ).toEqual({ valid: false, errors: ["Duplicate item ID: duplicate"] });
  });

  it("rejects a topic without an editorial source", () => {
    expect(
      validateTopics({
        version: "1",
        items: [{ ...completeTopic("missing-source"), sources: [] }],
      }),
    ).toEqual({
      valid: false,
      errors: ["Missing primary source for item: missing-source"],
    });
  });
});

function validateSources(sources: unknown[]) {
  return validateTopics({
    version: "test",
    items: [{ ...completeTopic("video"), sources: sources as TopicSource[] }],
  });
}

describe("video source contract", () => {
  const video = {
    ...completeTopic("video").sources[0],
    type: "learning-video",
    url: "https://www.youtube.com/watch?v=example1234",
    mediaType: "video",
    duration: "96:14",
    learningSegment: { start: "10:00", end: "52:36" },
  };

  it("accepts twenty sources and rejects twenty-one", () => {
    const sources = Array.from({ length: 20 }, (_, index) => ({
      ...completeTopic("video").sources[0],
      url: `https://example.test/${index}`,
    }));
    expect(validateSources(sources).valid).toBe(true);
    expect(validateSources([...sources, video]).errors).toContain(
      "Too many sources for item: video",
    );
  });

  it("accepts video with a duration and bounded segment, regardless of origin", () => {
    expect(validateSources([video]).valid).toBe(true);
    expect(
      validateSources([
        completeTopic("video").sources[0],
        { ...video, origin: "secondary" },
      ]).valid,
    ).toBe(true);
  });

  it("rejects malformed video metadata", () => {
    for (const change of [
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
    ]) {
      expect
        .soft(
          validateSources([{ ...video, ...change }]).errors,
          JSON.stringify(change),
        )
        .toContain("Invalid source for item: video");
    }
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
