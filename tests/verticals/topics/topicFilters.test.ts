import { expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import {
  resolvePathFilter,
  sortLearningPaths,
  transitionFilter,
} from "../../../src/verticals/topics/topicFilters";

it("resolves stable path IDs after reordering and preserves prefix ordering without mutation", () => {
  const items = topics.items.slice(0, 3);
  const paths = [
    { id: "long", name: "Lang", topicIds: [items[0].id, items[2].id] },
    { id: "short", name: "Kurz", topicIds: [items[0].id] },
    { id: "early", name: "Früh", topicIds: [items[0].id, items[1].id] },
  ];
  expect(sortLearningPaths(items, paths).map((path) => path.id)).toEqual([
    "short",
    "early",
    "long",
  ]);
  expect(paths.map((path) => path.id)).toEqual(["long", "short", "early"]);
  expect(
    resolvePathFilter({ kind: "path", id: "long" }, [...paths].reverse()),
  ).toEqual([paths[0]]);
});

it("retains selection for all/no paths, closes excluded topics and intersects literal search", () => {
  const items = topics.items.slice(0, 2);
  const paths = items.map((item) => ({
    id: item.id,
    name: item.title,
    topicIds: [item.id],
  }));
  for (const filter of [
    null,
    { kind: "paths", ids: paths.map((path) => path.id) },
  ] as const) {
    expect
      .soft(transitionFilter(items, paths, filter, "", items[0].id).selectedId)
      .toBe(items[0].id);
  }
  expect(
    transitionFilter(
      items,
      paths,
      { kind: "path", id: paths[1].id },
      "",
      items[0].id,
    ).selectedId,
  ).toBeNull();
  expect(
    transitionFilter(items, paths, null, "kein Treffer 987", items[0].id)
      .selectedId,
  ).toBeNull();
  expect(
    transitionFilter(
      items,
      paths,
      { kind: "topic", id: items[0].id },
      "",
      items[0].id,
    ).visibleItems,
  ).toEqual([items[0]]);
});
