import type { LearningPath, LearningPathId, Topic } from "./topicContract";
import { topicSections } from "./topicSections";

export type PathFilter =
  | { kind: "topic"; id: string }
  | { kind: "path"; id: LearningPathId }
  | { kind: "paths"; ids: readonly LearningPathId[] }
  | null;

export function matchesQuickFilter(item: Topic, query: string) {
  return [
    item.title,
    item.everydayAnchor,
    ...topicSections.map(({ key }) => item.content[key]),
  ].some((text) => text.toLowerCase().includes(query.toLowerCase()));
}

export function sortLearningPaths(
  items: readonly Topic[],
  paths: readonly LearningPath[],
) {
  const itemIndex = new Map(items.map((item, index) => [item.id, index]));
  return [...paths].sort((first, second) => {
    for (
      let index = 0;
      index < Math.min(first.topicIds.length, second.topicIds.length);
      index += 1
    ) {
      const a = itemIndex.get(first.topicIds[index]) ?? Infinity;
      const b = itemIndex.get(second.topicIds[index]) ?? Infinity;
      if (a !== b) return a - b;
    }
    return first.topicIds.length - second.topicIds.length;
  });
}

export function pathsForTopic(paths: readonly LearningPath[], id: string) {
  return paths.filter((path) => path.topicIds.includes(id));
}

export function resolvePathFilter(
  filter: PathFilter,
  paths: readonly LearningPath[],
) {
  if (!filter) return [];
  if (filter.kind === "topic") return pathsForTopic(paths, filter.id);
  const byId = new Map(paths.map((path) => [path.id, path]));
  if (filter.kind === "path") {
    const path = byId.get(filter.id);
    return path ? [path] : [];
  }
  return paths.filter((path) => filter.ids.includes(path.id));
}

export function transitionFilter(
  items: readonly Topic[],
  paths: readonly LearningPath[],
  filter: PathFilter,
  query: string,
  selectedId: string | null,
) {
  const activePaths = resolvePathFilter(filter, paths);
  const pathFilterActive =
    activePaths.length > 0 &&
    !(filter?.kind === "paths" && activePaths.length === paths.length);
  const activeIds = new Set(activePaths.flatMap((path) => path.topicIds));
  const pathItems = items.filter(
    (item) => !pathFilterActive || activeIds.has(item.id),
  );
  const visibleItems = pathItems.filter((item) =>
    matchesQuickFilter(item, query),
  );
  const nextSelectedId = visibleItems.some((item) => item.id === selectedId)
    ? selectedId
    : null;
  return {
    filter,
    activePaths,
    pathFilterActive,
    pathItems,
    visibleItems,
    selectedId: nextSelectedId,
    returnToList: selectedId !== null && nextSelectedId === null,
  };
}
