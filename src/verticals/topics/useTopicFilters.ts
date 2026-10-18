import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LearningPath, LearningPathId, Topic } from "./topicContract";
import {
  pathsForTopic,
  sortLearningPaths,
  transitionFilter,
  type PathFilter,
} from "./topicFilters";
import { useTopicScroll } from "./useTopicScroll";

export function useTopicFilters(
  items: readonly Topic[],
  paths: readonly LearningPath[],
  selectedId: string | null,
  excludeSelection: () => void,
) {
  const [filter, setFilter] = useState<PathFilter>(null);
  const [quickFilter, setQuickFilter] = useState("");
  const [pathPickerOpen, setPathPickerOpen] = useState(false);
  const filterControlsRef = useRef<HTMLDivElement>(null);
  const pathPickerTriggerRef = useRef<HTMLButtonElement>(null);
  const orderedPaths = useMemo(
    () => sortLearningPaths(items, paths),
    [items, paths],
  );
  const model = transitionFilter(items, paths, filter, quickFilter, selectedId);
  const scroll = useTopicScroll(filter, model.visibleItems);
  const closePathPicker = useCallback(
    (restoreFocus: boolean) => {
      setPathPickerOpen(false);
      setFilter((current) =>
        current?.kind === "paths" && current.ids.length === paths.length
          ? null
          : current,
      );
      if (restoreFocus)
        pathPickerTriggerRef.current?.focus({ preventScroll: true });
    },
    [paths.length],
  );
  useEffect(() => {
    if (!pathPickerOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !filterControlsRef.current?.contains(event.target)
      )
        closePathPicker(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [pathPickerOpen, closePathPicker]);
  function applyFilter(next: PathFilter, query = quickFilter) {
    const nextState = transitionFilter(items, paths, next, query, selectedId);
    if (nextState.returnToList) excludeSelection();
    setFilter(nextState.filter);
    setQuickFilter(query);
  }
  function toggleFilter(id: string) {
    scroll.preservePosition(id);
    applyFilter(
      filter?.kind === "topic" && filter.id === id
        ? null
        : { kind: "topic", id },
    );
  }
  function selectPath(id: LearningPathId) {
    if (filter?.kind === "path" && filter.id === id) return;
    scroll.revealTopics();
    applyFilter({ kind: "path", id });
  }
  function toggleSelectedPath(id: LearningPathId) {
    const ids = model.activePaths.map((path) => path.id);
    const next = ids.includes(id)
      ? ids.filter((current) => current !== id)
      : [...ids, id];
    scroll.cancelScroll();
    applyFilter(next.length ? { kind: "paths", ids: next } : null);
  }
  function resetPathFilter() {
    scroll.cancelScroll();
    applyFilter(null);
  }
  function clearFilter() {
    const firstId = model.visibleItems[0]?.id;
    if (firstId) scroll.focusTopic(firstId);
    scroll.cancelScroll();
    applyFilter(null, "");
  }
  return {
    ...model,
    ...scroll,
    items,
    paths,
    orderedPaths,
    sortedPaths: orderedPaths.filter((path) =>
      model.activePaths.includes(path),
    ),
    pathsFor: (id: string) => pathsForTopic(paths, id),
    quickFilter,
    pathPickerOpen,
    filterControlsRef,
    pathPickerTriggerRef,
    closePathPicker,
    setPathPickerOpen,
    toggleFilter,
    selectPath,
    toggleSelectedPath,
    resetPathFilter,
    clearFilter,
    changeQuickFilter: (value: string) => applyFilter(filter, value),
  };
}

export type TopicFilters = ReturnType<typeof useTopicFilters>;
