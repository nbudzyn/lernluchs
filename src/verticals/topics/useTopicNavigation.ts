import { useLayoutEffect, useRef, useState } from "react";
import { useBrowserBack } from "./useBrowserBack";
import { isNarrowViewport, useNarrowViewport } from "./useNarrowViewport";

export type SupplementaryView = "help" | "imprint";
export type TopicView = "list" | "topic" | SupplementaryView;

export type LearningCheckNavigation =
  { status: "closed" } | { status: "open"; onExit: () => void };

export function useTopicNavigation(learningCheck: LearningCheckNavigation) {
  const isLearningCheckOpen = learningCheck.status === "open";
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [view, setView] = useState<TopicView>("list");
  const narrow = useNarrowViewport();
  const listScrollY = useRef(0);
  const checkScrollY = useRef(0);
  const checkOpen = useRef(false);
  useLayoutEffect(() => {
    if (isLearningCheckOpen && !checkOpen.current)
      checkScrollY.current = window.scrollY;
    checkOpen.current = isLearningCheckOpen;
  }, [isLearningCheckOpen]);
  useLayoutEffect(() => {
    // A wide selection remains the detail view after narrowing again.
    // Back can arrive before the media-query change has rendered. Read the
    // current width so a stale wide state cannot reopen the narrow detail.
    if (!isNarrowViewport() && selectedId && view === "list") setView("topic");
  }, [narrow, selectedId, view]);

  function rememberListPosition() {
    listScrollY.current = window.scrollY;
  }
  function openView(next: Exclude<TopicView, "list">) {
    if (isNarrowViewport()) {
      rememberListPosition();
      window.scrollTo(0, 0);
    }
    setView(next);
  }
  function selectTopic(id: string) {
    setSelectedId(id);
    openView("topic");
  }
  function openSupplementaryView(next: SupplementaryView) {
    setSelectedId(null);
    openView(next);
  }
  function excludeSelection() {
    setSelectedId(null);
    setView("list");
  }
  function returnToList() {
    setView("list");
    if (isNarrowViewport())
      requestAnimationFrame(() => window.scrollTo(0, listScrollY.current));
  }
  useBrowserBack(
    view !== "list",
    () => {
      returnToList();
      if (learningCheck.status === "open") {
        learningCheck.onExit();
        if (!isNarrowViewport()) {
          requestAnimationFrame(() => window.scrollTo(0, checkScrollY.current));
        }
      }
    },
    isLearningCheckOpen,
  );
  return {
    selectedId,
    view,
    selectTopic,
    openSupplementaryView,
    excludeSelection,
    returnToList,
    rememberListPosition,
  };
}
