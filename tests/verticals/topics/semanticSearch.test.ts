import { describe, expect, it } from "vitest";
import {
  matchingTopicIds,
  meanPool,
  searchSemanticTopics,
} from "../../../src/verticals/topics/semanticSearch";

describe("semantic topic selection without a model", () => {
  const entries = [
    { id: "first", vector: [2, 0] },
    { id: "unrelated", vector: [-1, 0] },
    { id: "second", vector: [0.8, 0.6] },
    { id: "first", vector: [1, 0] },
  ];

  it("includes every sufficiently related topic once, in catalog order", () => {
    expect(matchingTopicIds([3, 0], entries, 0.75)).toEqual([
      "first",
      "second",
    ]);
    expect(matchingTopicIds([3, 0], entries, 0.9)).toEqual(["first"]);
    expect(matchingTopicIds([0, -1], entries, 0.75)).toEqual([]);
  });

  it("rejects corrupted or incompatible embeddings instead of producing results", () => {
    for (const vector of [[NaN, 0], [Infinity, 1], [1], [], [0, 0]]) {
      expect(() => matchingTopicIds(vector, entries, 0.5)).toThrow();
    }
    expect(() =>
      matchingTopicIds([1, 0], [{ id: "bad", vector: [1] }], 0.5),
    ).toThrow();
  });

  it("pools token vectors with the attention mask and normalizes the sentence", () => {
    expect(meanPool([2, 0, 0, 2, 100, 100], [1, 1, 0], 2)).toEqual([
      expect.closeTo(Math.SQRT1_2),
      expect.closeTo(Math.SQRT1_2),
    ]);
  });

  it("keeps every qualifying topic even when another topic scores much higher", async () => {
    const corpus = [
      {
        id: "general",
        vector: [0.99, Math.sqrt(1 - 0.99 ** 2)],
        title: "Allgemeine Java-Werkzeuge",
        text: "Allgemeine Werkzeuge für Java.",
      },
      {
        id: "migration",
        vector: [0.82, Math.sqrt(1 - 0.82 ** 2)],
        title: "Migrationen wiederholbar durchführen",
        text: "Altanwendungen wiederholbar migrieren.",
      },
    ];
    const result = await searchSemanticTopics(
      "Migration",
      corpus,
      () => Promise.resolve([1, 0]),
      0.8,
    );
    expect(result).toEqual(["general", "migration"]);
    expect(
      await searchSemanticTopics(
        "Migration",
        corpus,
        () => Promise.resolve([-1, 0]),
        0.8,
      ),
    ).toEqual([]);
  });

  it("uses the whole request once, without including topics from isolated fragments", async () => {
    const corpus = [
      { id: "whole-request", text: "", vector: [1, 0] },
      { id: "fragment-only", text: "", vector: [0, 1] },
    ];
    for (const query of [
      "Was ist besser, Ponytail oder MCP?",
      "Ponytail und MCP",
      "RTK versus Headroom",
      "Wie kann ich eine Behauptung unabhängig widerlegen oder bestätigen?",
      "Meine Frage\nmit Kontext",
    ]) {
      const seen: string[] = [];
      const result = await searchSemanticTopics(query, corpus, (text) => {
        seen.push(text);
        return Promise.resolve(text === `query: ${query}` ? [1, 0] : [0, 1]);
      });
      expect.soft(result, query).toEqual(["whole-request"]);
      expect.soft(seen, query).toEqual([`query: ${query}`]);
    }
  });

  it("contextualizes a single keyword without inventing a new subject", async () => {
    const seen: string[] = [];
    await searchSemanticTopics("MCP", [], (text) => {
      seen.push(text);
      return Promise.resolve([1, 0]);
    });
    expect(seen).toEqual(["query: Ich suche Informationen zum Thema MCP."]);
  });
});
