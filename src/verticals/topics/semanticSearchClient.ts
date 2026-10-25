/// <reference types="vite/client" />
import SemanticWorker from "./semanticSearch.worker?worker";

export type SearchPhase = "loading" | "searching";
export type SemanticSearchClient = {
  search: (
    query: string,
    phase: (value: SearchPhase) => void,
    signal: AbortSignal,
  ) => Promise<string[]>;
  dispose: () => void;
};

export function createSemanticSearchClient(
  makeWorker: () => Worker = () => new SemanticWorker(),
): SemanticSearchClient {
  let worker: Worker | undefined;
  let idleTimer: ReturnType<typeof setTimeout> | undefined;
  const dispose = () => {
    clearTimeout(idleTimer);
    worker?.terminate();
    worker = undefined;
  };
  return {
    dispose,
    search(query, onPhase, signal) {
      return new Promise((resolve, reject) => {
        if (signal.aborted) {
          reject(new Error("Search cancelled"));
          return;
        }
        clearTimeout(idleTimer);
        try {
          worker ??= makeWorker();
        } catch {
          reject(new Error("Local inference unavailable"));
          return;
        }
        let timer: ReturnType<typeof setTimeout>;
        let settled = false;
        const finish = (ids?: string[]) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          signal.removeEventListener("abort", abort);
          if (ids) {
            idleTimer = setTimeout(dispose, 120_000);
            resolve(ids);
          } else {
            dispose();
            reject(new Error("Local inference unavailable"));
          }
        };
        const abort = () => finish();
        signal.addEventListener("abort", abort, { once: true });
        timer = setTimeout(() => finish(), 180_000);
        worker.onmessage = (event: MessageEvent) => {
          if (settled) return;
          const message = event.data;
          if (message.type === "phase") {
            onPhase(message.phase);
            if (message.phase === "searching") {
              clearTimeout(timer);
              timer = setTimeout(() => finish(), 20_000);
            }
          } else if (
            message.type === "result" &&
            Array.isArray(message.ids) &&
            message.ids.every((id: unknown) => typeof id === "string")
          ) {
            finish(message.ids);
          } else finish();
        };
        worker.onerror = (event) => {
          event.preventDefault();
          finish();
        };
        worker.onmessageerror = () => finish();
        worker.postMessage({ query });
      });
    },
  };
}
