/// <reference types="vite/client" />
import SemanticWorker from "./semanticSearch.worker?worker";
import { semanticSearchError } from "./semanticSearchError";

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
        } catch (error) {
          reject(new Error(`Worker starten: ${semanticSearchError(error)}`));
          return;
        }
        let timer: ReturnType<typeof setTimeout>;
        let settled = false;
        let phase: SearchPhase = "loading";
        const finish = (ids?: string[], error?: string) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          signal.removeEventListener("abort", abort);
          if (ids) {
            idleTimer = setTimeout(dispose, 120_000);
            resolve(ids);
          } else {
            dispose();
            reject(new Error(error ?? "Worker-Antwort: Ungültige Nachricht"));
          }
        };
        const abort = () => finish(undefined, "Suche abgebrochen");
        signal.addEventListener("abort", abort, { once: true });
        timer = setTimeout(
          () =>
            finish(
              undefined,
              "KI-Modell laden: Zeitlimit von 180 Sekunden überschritten",
            ),
          180_000,
        );
        worker.onmessage = (event: MessageEvent) => {
          if (settled) return;
          const message = event.data;
          if (
            message?.type === "phase" &&
            (message.phase === "loading" || message.phase === "searching")
          ) {
            phase = message.phase;
            onPhase(message.phase);
            if (message.phase === "searching") {
              clearTimeout(timer);
              timer = setTimeout(
                () =>
                  finish(
                    undefined,
                    "Themensuche berechnen: Zeitlimit von 20 Sekunden überschritten",
                  ),
                20_000,
              );
            }
          } else if (
            message?.type === "result" &&
            Array.isArray(message.ids) &&
            message.ids.every((id: unknown) => typeof id === "string")
          ) {
            finish(message.ids);
          } else if (
            message?.type === "error" &&
            typeof message.message === "string"
          ) {
            const step =
              phase === "loading" ? "KI-Modell laden" : "Themensuche berechnen";
            finish(undefined, `${step}: ${message.message}`);
          } else finish();
        };
        worker.onerror = (event) => {
          event.preventDefault();
          const location = event.filename
            ? ` (${event.filename}:${event.lineno}:${event.colno})`
            : "";
          finish(
            undefined,
            `Worker ausführen: ${event.message || "Abbruch ohne weitere Browserangaben"}${location}`,
          );
        };
        worker.onmessageerror = () =>
          finish(
            undefined,
            "Worker-Nachricht lesen: Nachricht konnte nicht verarbeitet werden",
          );
        try {
          worker.postMessage({ query });
        } catch (error) {
          finish(
            undefined,
            `Worker-Nachricht senden: ${semanticSearchError(error)}`,
          );
        }
      });
    },
  };
}
