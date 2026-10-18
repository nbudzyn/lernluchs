import { useLayoutEffect, useState } from "react";

export const narrowViewportQuery = "(max-width: 799px)";

export function isNarrowViewport() {
  return !!window.matchMedia?.(narrowViewportQuery).matches;
}

export function useNarrowViewport() {
  const [narrow, setNarrow] = useState(isNarrowViewport);
  useLayoutEffect(() => {
    const media = window.matchMedia?.(narrowViewportQuery);
    const update = () => setNarrow(!!media?.matches);
    media?.addEventListener("change", update);
    update();
    return () => media?.removeEventListener("change", update);
  }, []);
  return narrow;
}
