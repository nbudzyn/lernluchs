import { expect, it } from "vitest";
import { readSemanticIndex } from "../../../src/verticals/topics/semanticIndex";
import { searchDescriptions } from "../../../src/verticals/topics/searchDescriptions";
import manifest from "../../../src/verticals/topics/semanticModel.json";

it("rejects an incomplete, stale or incompatible index before exposing results", () => {
  const entries = Object.entries(searchDescriptions).map(([id, text]) => ({
    id,
    text: `passage: ${text}`,
    vector: [1, 0],
  }));
  const valid = { revision: manifest.revision, entries };
  expect(readSemanticIndex(valid)).toEqual(entries);
  const first = entries[0];
  for (const invalid of [
    null,
    { ...valid, revision: "old" },
    { ...valid, entries: entries.slice(1) },
    { ...valid, entries: [first, ...entries] },
    {
      ...valid,
      entries: [{ ...first, text: "outdated" }, ...entries.slice(1)],
    },
    {
      ...valid,
      entries: [{ ...first, vector: [NaN, 0] }, ...entries.slice(1)],
    },
    { ...valid, entries: [{ ...first, vector: [1] }, ...entries.slice(1)] },
  ])
    expect(() => readSemanticIndex(invalid)).toThrow();
});
