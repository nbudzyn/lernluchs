import { useCallback, useEffect, useRef, useState } from "react";
import { createSemanticSearchClient } from "./semanticSearchClient";
import type { SearchPhase, SemanticSearchClient } from "./semanticSearchClient";

type SemanticFilterState =
  | { status: "idle"; query: "" }
  | { status: "loading"; query: string; phase: SearchPhase }
  | { status: "ready"; query: string; ids: string[] }
  | { status: "error"; query: string };

export function useSemanticFilter(createClient = createSemanticSearchClient) {
  const client = useRef<SemanticSearchClient | null>(null);
  const request = useRef<AbortController | null>(null);
  const [state, setState] = useState<SemanticFilterState>({
    status: "idle",
    query: "",
  });
  const clear = useCallback(() => {
    request.current?.abort();
    request.current = null;
    client.current?.dispose();
    setState({ status: "idle", query: "" });
  }, []);
  const apply = useCallback(
    (value: string) => {
      const query = value.trim();
      if (!query) {
        clear();
        return;
      }
      request.current?.abort();
      const current = new AbortController();
      request.current = current;
      setState({ status: "loading", query, phase: "loading" });
      client.current ??= createClient();
      void client.current
        .search(
          query,
          (phase) => {
            if (request.current === current)
              setState({ status: "loading", query, phase });
          },
          current.signal,
        )
        .then((ids) => {
          if (request.current === current)
            setState({ status: "ready", query, ids });
        })
        .catch(() => {
          if (request.current === current) setState({ status: "error", query });
        });
    },
    [clear, createClient],
  );
  useEffect(
    () => () => {
      request.current?.abort();
      client.current?.dispose();
    },
    [],
  );
  return { state, apply, clear };
}
