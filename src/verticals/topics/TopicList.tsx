import { useState } from "react";
import { LearningPathPicker } from "./LearningPathPicker";
import type { TopicFilters } from "./useTopicFilters";
import type { SupplementaryView } from "./useTopicNavigation";

const listViewPreferenceKey = "lernluchs.topic-list-view.v1";

function initialEverydayAnchorView() {
  try {
    return localStorage.getItem(listViewPreferenceKey) !== "topics";
  } catch {
    return true;
  }
}

export function TopicList({
  model,
  selectedId,
  onSelectTopic,
  openSupplementaryView,
  learnedTopicIds,
  availableLearningCheckTopicIds,
  onStartLearningCheck,
}: {
  model: TopicFilters;
  selectedId: string | null;
  onSelectTopic: (id: string) => void;
  openSupplementaryView: (view: SupplementaryView) => void;
  learnedTopicIds: readonly string[];
  availableLearningCheckTopicIds: readonly string[];
  onStartLearningCheck?: (id: string, title: string) => void;
}) {
  const {
    items,
    paths,
    filter,
    quickFilter,
    pathPickerOpen,
    setPathPickerOpen,
    filterControlsRef,
    pathPickerTriggerRef,
    closePathPicker,
    pathFilterActive,
    visibleItems,
    sortedPaths,
    rowRefs,
    buttonRefs,
    pathsFor,
    toggleFilter,
    selectPath,
    changeQuickFilter,
    clearFilter,
  } = model;
  const checkIds = new Set(availableLearningCheckTopicIds);
  const [showEverydayAnchors, setShowEverydayAnchors] = useState(
    initialEverydayAnchorView,
  );
  const [viewPreferenceNotSaved, setViewPreferenceNotSaved] = useState(false);
  function changeListView(everydayAnchors: boolean) {
    setShowEverydayAnchors(everydayAnchors);
    try {
      localStorage.setItem(
        listViewPreferenceKey,
        everydayAnchors ? "everydayAnchors" : "topics",
      );
      setViewPreferenceNotSaved(false);
    } catch {
      setViewPreferenceNotSaved(true);
    }
  }

  return (
    <div className="topic-browser-list">
      <div className="topic-list-header">
        <div>
          <h2>Themen</h2>
          {!pathFilterActive && (
            <p className="topic-list-count">
              {quickFilter && `${visibleItems.length} / `}
              {items.length} Themen
            </p>
          )}
        </div>
        <div className="topic-list-info-actions">
          <button
            aria-label="Impressum öffnen"
            className="topic-info-button"
            type="button"
            title="Impressum öffnen"
            onClick={() => openSupplementaryView("imprint")}
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v6M12 7h.01" />
            </svg>
          </button>
          <button
            aria-label="Hilfe öffnen"
            className="topic-info-button"
            type="button"
            title="Hilfe öffnen"
            onClick={() => openSupplementaryView("help")}
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.9.8-1.8 1.3-1.8 2.8M12 17h.01" />
            </svg>
          </button>
        </div>
      </div>
      <div className="topic-list-view" role="group" aria-label="Listenansicht">
        <button
          type="button"
          aria-pressed={!showEverydayAnchors}
          onClick={() => changeListView(false)}
        >
          Themen
        </button>
        <button
          type="button"
          aria-pressed={showEverydayAnchors}
          onClick={() => changeListView(true)}
        >
          Kommt mir bekannt vor
        </button>
      </div>
      {viewPreferenceNotSaved && (
        <p role="status">
          Diese Ansicht gilt für diesen Besuch. Dein Browser konnte die Auswahl
          nicht speichern.
        </p>
      )}
      <div
        className="topic-quick-filter"
        ref={filterControlsRef}
        onKeyDown={(event) => {
          if (event.key === "Escape" && pathPickerOpen) {
            event.preventDefault();
            closePathPicker(true);
          }
        }}
      >
        <div className="topic-filter-labels">
          <label htmlFor="topic-quick-filter">Schnellfilter</label>
          {paths.length > 0 && (
            <button
              type="button"
              className="learning-path-picker-trigger"
              ref={pathPickerTriggerRef}
              aria-expanded={pathPickerOpen}
              aria-controls="learning-path-picker"
              onClick={() => {
                if (pathPickerOpen) closePathPicker(true);
                else setPathPickerOpen(true);
              }}
            >
              Lernpfade{" "}
              <span aria-hidden="true">{pathPickerOpen ? "▴" : "▾"}</span>
            </button>
          )}
        </div>
        <input
          id="topic-quick-filter"
          type="text"
          value={quickFilter}
          onChange={(event) => changeQuickFilter(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape" && quickFilter && !pathPickerOpen) {
              event.preventDefault();
              changeQuickFilter("");
            }
          }}
        />
        {quickFilter && !pathFilterActive && (
          <button type="button" onClick={clearFilter}>
            Filter aufheben
          </button>
        )}
        {pathPickerOpen && <LearningPathPicker model={model} />}
      </div>
      {pathFilterActive && (
        <section className="path-filter-summary" aria-label="Aktive Lernpfade">
          <div className="path-filter-heading">
            <div>
              <p className="path-filter-label">Gefiltert nach</p>
              <p className="path-filter-count">
                {visibleItems.length} / {items.length} Themen
              </p>
            </div>
            <button type="button" onClick={clearFilter}>
              Filter aufheben
            </button>
          </div>
          <div className="path-filter-options">
            {sortedPaths.map((path) => (
              <button
                key={path.id}
                aria-pressed={filter?.kind === "path" && filter.id === path.id}
                className="path-name-button"
                onClick={() => selectPath(path.id)}
                type="button"
              >
                {path.name}
              </button>
            ))}
          </div>
        </section>
      )}
      <nav aria-label="Themen">
        {visibleItems.length === 0 && (
          <p role="status">Keine Themen gefunden.</p>
        )}
        <ul className="topic-list">
          {visibleItems.map((item) => (
            <li
              key={item.id}
              ref={(node) => {
                if (node) rowRefs.current.set(item.id, node);
                else rowRefs.current.delete(item.id);
              }}
            >
              <div className="topic-actions">
                {pathsFor(item.id).length > 0 && (
                  <button
                    aria-label={`Lernpfade von ${item.title} filtern`}
                    aria-pressed={
                      filter?.kind === "topic" && filter.id === item.id
                    }
                    className="path-filter-button"
                    type="button"
                    title={`Lernpfade von ${item.title} filtern`}
                    onClick={() => toggleFilter(item.id)}
                  >
                    {/* Lucide route; ISC-Lizenz: public/licenses/lucide-route.txt */}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="19" r="3" />
                      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                      <circle cx="18" cy="5" r="3" />
                    </svg>
                  </button>
                )}
                <button
                  ref={(node) => {
                    if (node) buttonRefs.current.set(item.id, node);
                    else buttonRefs.current.delete(item.id);
                  }}
                  className={
                    showEverydayAnchors
                      ? "topic-select-button topic-everyday-anchor-button"
                      : "topic-select-button"
                  }
                  aria-pressed={item.id === selectedId}
                  onClick={() => {
                    onSelectTopic(item.id);
                  }}
                  type="button"
                >
                  {showEverydayAnchors ? item.everydayAnchor : item.title}
                </button>
                {checkIds.has(item.id) && learnedTopicIds.includes(item.id) && (
                  <span
                    className="learned-checkmark"
                    role="img"
                    aria-label="Gelernt"
                  >
                    ✓
                  </span>
                )}
                {checkIds.has(item.id) && onStartLearningCheck && (
                  <button
                    aria-label={`Lerncheck starten: ${item.title}`}
                    className="learning-check-start-button"
                    type="button"
                    title={`Lerncheck starten: ${item.title}`}
                    onClick={() => {
                      onStartLearningCheck(item.id, item.title);
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 28 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 7a5 5 0 1 1 8.6 3.5c-1.4 1.3-3.2 2.3-3.2 4" />
                      <circle cx="9.4" cy="19" r="1" />
                      <path d="m18 7 6 5-6 5z" />
                    </svg>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
