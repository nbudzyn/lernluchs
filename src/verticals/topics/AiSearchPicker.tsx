import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export function AiSearchPicker({
  draft,
  onDraftChange,
  trigger,
  onApply,
}: {
  draft: string;
  onDraftChange: (draft: string) => void;
  trigger: RefObject<HTMLButtonElement | null>;
  onApply: (query: string, restoreFocus?: boolean) => void;
}) {
  const picker = useRef<HTMLElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    input.current?.focus({ preventScroll: true });
  }, []);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !picker.current?.contains(event.target) &&
        !trigger.current?.contains(event.target)
      )
        onApply(draft, false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [draft, onApply, trigger]);
  return (
    <section
      role="dialog"
      aria-labelledby="ai-search-heading"
      className="learning-path-picker ai-search-picker"
      id="ai-search-picker"
      ref={picker}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          onApply(draft);
        }
      }}
    >
      <div className="learning-path-picker-heading">
        <h3 id="ai-search-heading">Suche mit KI</h3>
        <div className="learning-path-picker-actions">
          <button
            type="button"
            onClick={() => {
              onDraftChange("");
              input.current?.focus();
            }}
          >
            Zurücksetzen
          </button>
          <button type="button" onClick={() => onApply(draft)}>
            Schließen
          </button>
        </div>
      </div>
      <label htmlFor="ai-search-query">Deine Frage oder Stichwörter</label>
      <textarea
        id="ai-search-query"
        ref={input}
        value={draft}
        maxLength={2000}
        rows={5}
        aria-describedby="ai-search-keys ai-search-local"
        onChange={(event) => onDraftChange(event.target.value)}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" &&
            !event.shiftKey &&
            !event.nativeEvent.isComposing
          ) {
            event.preventDefault();
            onApply(event.currentTarget.value);
          }
        }}
      />
      <p id="ai-search-keys" className="ai-search-hint">
        Enter übernimmt · Umschalt+Enter für eine neue Zeile
      </p>
      <p id="ai-search-local" className="ai-search-hint">
        Die Suche läuft auf deinem Gerät. Beim ersten Mal werden etwa 310 MB
        Modelldaten geladen. Das kann etwas dauern.
      </p>
    </section>
  );
}
