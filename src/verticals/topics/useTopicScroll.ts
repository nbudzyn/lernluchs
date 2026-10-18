import { useLayoutEffect, useRef } from "react";
import type { PathFilter } from "./topicFilters";
import type { Topic } from "./topicContract";

type ScrollRequest =
  | { kind: "none" }
  | { kind: "preserve"; id: string; x: number; y: number }
  | { kind: "reveal" };

export function useTopicScroll(
  filter: PathFilter,
  visibleItems: readonly Topic[],
) {
  const rowRefs = useRef(new Map<string, HTMLLIElement>());
  const buttonRefs = useRef(new Map<string, HTMLButtonElement>());
  const request = useRef<ScrollRequest>({ kind: "none" });
  function focusTopic(id: string) {
    buttonRefs.current.get(id)?.focus({ preventScroll: true });
  }
  function preservePosition(id: string) {
    const rect = rowRefs.current.get(id)?.getBoundingClientRect();
    request.current = rect
      ? { kind: "preserve", id, x: rect.left, y: rect.top }
      : { kind: "none" };
  }
  useLayoutEffect(() => {
    const pending = request.current;
    request.current = { kind: "none" };
    if (pending.kind === "reveal") {
      const firstId = visibleItems[0]?.id;
      const lastId = visibleItems.at(-1)?.id;
      const first = firstId && rowRefs.current.get(firstId);
      const last = lastId && rowRefs.current.get(lastId);
      if (first && last) {
        const firstRect = first.getBoundingClientRect();
        const lastRect = last.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const tooTall = lastRect.bottom - firstRect.top > viewportHeight;
        const top =
          tooTall || firstRect.top < 0
            ? firstRect.top
            : Math.max(0, lastRect.bottom - viewportHeight);
        if (top)
          window.scrollBy({
            top,
            behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        if (firstId) focusTopic(firstId);
      }
    } else if (pending.kind === "preserve") {
      const row = rowRefs.current.get(pending.id);
      if (!row) return;
      const rect = row.getBoundingClientRect();
      const left = rect.left - pending.x;
      const top = rect.top - pending.y;
      if (left || top) window.scrollBy({ left, top, behavior: "instant" });
    }
    // Scroll requests belong to a committed path transition, not every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return {
    rowRefs,
    buttonRefs,
    focusTopic,
    preservePosition,
    revealTopics: () => {
      request.current = { kind: "reveal" };
    },
    cancelScroll: () => {
      request.current = { kind: "none" };
    },
  };
}
