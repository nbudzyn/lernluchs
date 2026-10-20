import type { LearningPath } from "./topicContract";

export type PathFilter =
  | { kind: "topic"; id: string }
  | { kind: "path"; index: number }
  | { kind: "paths"; indices: number[] }
  | null;

const storageKey = "lernluchs.learning-path-filter.v1";

export function pathsForFilter(
  filter: PathFilter,
  paths: LearningPath[],
): LearningPath[] {
  if (!filter) return [];
  switch (filter.kind) {
    case "topic":
      return paths.filter((path) => path.topicIds.includes(filter.id));
    case "paths":
      return paths.filter((_, index) => filter.indices.includes(index));
    case "path":
      return paths[filter.index] ? [paths[filter.index]] : [];
  }
}

export function readPathFilter(paths: LearningPath[]): PathFilter {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === null) return null;
    const parsed: unknown = JSON.parse(stored);
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("version" in parsed) ||
      parsed.version !== 1 ||
      !("pathNames" in parsed) ||
      !Array.isArray(parsed.pathNames) ||
      !parsed.pathNames.every((name: unknown) => typeof name === "string")
    )
      return null;
    const names = new Set(parsed.pathNames);
    const indices = paths.flatMap((path, index) =>
      names.has(path.name) ? [index] : [],
    );
    return indices.length ? { kind: "paths", indices } : null;
  } catch {
    return null;
  }
}

export function savePathFilter(
  filter: PathFilter,
  paths: LearningPath[],
): boolean {
  try {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        version: 1,
        pathNames: pathsForFilter(filter, paths).map((path) => path.name),
      }),
    );
    return true;
  } catch {
    return false;
  }
}
