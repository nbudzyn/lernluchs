import { useLayoutEffect, useRef } from "react";
import type { TopicFilters } from "./useTopicFilters";

export function LearningPathPicker({ model }: { model: TopicFilters }) {
  const {
    paths,
    items,
    activePaths,
    pathItems,
    orderedPaths,
    resetPathFilter,
    closePathPicker,
    toggleSelectedPath,
  } = model;
  const pathPickerRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const fitPicker = () => {
      const picker = pathPickerRef.current;
      if (!picker) return;
      const available =
        window.innerHeight - picker.getBoundingClientRect().top - 12;
      picker.style.maxHeight = `${Math.max(96, Math.min(544, available))}px`;
    };
    fitPicker();
    window.addEventListener("resize", fitPicker);
    window.addEventListener("scroll", fitPicker, { passive: true });
    return () => {
      window.removeEventListener("resize", fitPicker);
      window.removeEventListener("scroll", fitPicker);
    };
  }, [activePaths, pathItems]);

  return (
    <section
      className="learning-path-picker"
      id="learning-path-picker"
      ref={pathPickerRef}
    >
      <div className="learning-path-picker-header">
        <div className="learning-path-picker-heading">
          <h3>Lernpfade</h3>
          <div className="learning-path-picker-actions">
            <button type="button" onClick={resetPathFilter}>
              Zurücksetzen
            </button>
            <button type="button" onClick={() => closePathPicker(true)}>
              Schließen
            </button>
          </div>
        </div>
        <p className="learning-path-picker-count" aria-live="polite">
          {activePaths.length} / {paths.length} Lernpfade (
          {pathItems.length === items.length
            ? "alle Themen"
            : `${pathItems.length} / ${items.length} Themen`}
          )
        </p>
      </div>
      <fieldset aria-label="Lernpfade auswählen">
        {orderedPaths.map((path) => (
          <label key={path.id}>
            <input
              type="checkbox"
              checked={activePaths.includes(path)}
              onChange={() => toggleSelectedPath(path.id)}
            />
            <span>{path.name}</span>
          </label>
        ))}
      </fieldset>
    </section>
  );
}
