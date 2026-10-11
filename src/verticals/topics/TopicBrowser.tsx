import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { TopicHelp } from "../help";
import { Imprint } from "../imprint";
import { topics } from "./topics";
import { useBrowserBack } from "./useBrowserBack";
import type {
  EditorialStatus,
  LearningPath,
  Topic,
  TopicSource,
} from "./topicContract";
import "./TopicBrowser.css";

const editorialStatusLabels: Record<EditorialStatus, string> = {
  active: "Aktiv",
  watching: "Unter Beobachtung",
  archived: "Archiviert",
  replaced: "Ersetzt",
};

type PathFilter =
  | { kind: "topic"; id: string }
  | { kind: "path"; index: number }
  | { kind: "paths"; indices: number[] }
  | null;

const listViewPreferenceKey = "lernluchs.topic-list-view.v1";

function initialEverydayAnchorView() {
  try {
    return localStorage.getItem(listViewPreferenceKey) !== "topics";
  } catch {
    return true;
  }
}

function matchesQuickFilter(item: Topic, query: string) {
  return [
    item.title,
    item.everydayAnchor,
    item.content.problem,
    item.content.coreConcept,
    item.content.javaWebUse,
    item.content.boundary,
  ].some((text) => text.toLowerCase().includes(query.toLowerCase()));
}

function SourceGroup({
  title,
  sources,
}: {
  title: string;
  sources: TopicSource[];
}) {
  if (sources.length === 0) return null;

  return (
    <section>
      <h4>{title}</h4>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            {source.mediaType === "audio" && (
              <svg
                aria-label="Audio"
                className="source-audio-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 1-2Zm16 0h-3v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-1-2Z" />
              </svg>
            )}
            {source.mediaType === "video" && (
              <svg
                aria-label="Video"
                className="source-video-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="4" width="18" height="16" rx="1" />
                <path d="M7 4v16M17 4v16M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4" />
              </svg>
            )}
            <a href={source.url} rel="noreferrer" target="_blank">
              {source.title}
              {source.language === "de" ? " [DE]" : ""}
            </a>
            {source.mediaType !== "text" && source.duration && (
              <> {source.duration}</>
            )}
            {source.mediaType === "video" && source.learningSegment && (
              <>
                {" "}
                · Lernabschnitt: {source.learningSegment.start}–
                {source.learningSegment.end}
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TopicBrowser({
  items = topics.items,
  paths = topics.paths ?? [],
  learnedTopicIds = [],
  availableLearningCheckTopicIds = [],
  onStartLearningCheck,
  onExitLearningCheck,
}: {
  items?: Topic[];
  paths?: LearningPath[];
  learnedTopicIds?: string[];
  availableLearningCheckTopicIds?: string[];
  onStartLearningCheck?: (id: string, title: string) => void;
  onExitLearningCheck?: () => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<PathFilter>(null);
  const [quickFilter, setQuickFilter] = useState("");
  const [pathPickerOpen, setPathPickerOpen] = useState(false);
  const filterControlsRef = useRef<HTMLDivElement>(null);
  const pathPickerTriggerRef = useRef<HTMLButtonElement>(null);
  const pathPickerRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (!pathPickerOpen) return;
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
  }, [pathPickerOpen, filter, quickFilter]);
  const closePathPicker = useCallback(
    (restoreFocus: boolean) => {
      setPathPickerOpen(false);
      setFilter((current) =>
        current?.kind === "paths" && current.indices.length === paths.length
          ? null
          : current,
      );
      if (restoreFocus) {
        pathPickerTriggerRef.current?.focus({ preventScroll: true });
      }
    },
    [paths.length],
  );
  useEffect(() => {
    if (!pathPickerOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !filterControlsRef.current?.contains(event.target)
      ) {
        closePathPicker(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [pathPickerOpen, closePathPicker]);
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
  const [mobileView, setMobileView] = useState<
    "list" | "topic" | "help" | "imprint"
  >("list");
  const listScrollY = useRef(0);
  const checkScrollY = useRef(0);
  const checkOpen = useRef(false);
  useLayoutEffect(() => {
    if (onExitLearningCheck && !checkOpen.current) {
      checkScrollY.current = window.scrollY;
    }
    checkOpen.current = onExitLearningCheck !== undefined;
  }, [onExitLearningCheck]);
  const rowRefs = useRef(new Map<string, HTMLLIElement>());
  const anchor = useRef<{ id: string; x: number; y: number } | null>(null);
  const scrollToPath = useRef(false);
  // Lexikografisch nach der vollständigen Themenfolge; kürzere Präfixe zuerst.
  // Einmal pro Katalogbestand, gemeinsam für Auswahl und Zusammenfassung.
  const orderedPaths = useMemo(() => {
    const itemIndex = new Map(items.map((item, index) => [item.id, index]));
    return [...paths].sort((first, second) => {
      for (
        let index = 0;
        index < Math.min(first.topicIds.length, second.topicIds.length);
        index += 1
      ) {
        const a = itemIndex.get(first.topicIds[index]) ?? Infinity;
        const b = itemIndex.get(second.topicIds[index]) ?? Infinity;
        if (a !== b) return a - b;
      }
      return first.topicIds.length - second.topicIds.length;
    });
  }, [items, paths]);
  const checkIds = new Set(availableLearningCheckTopicIds);
  const pathsFor = (id: string) =>
    paths.filter((path) => path.topicIds.includes(id));
  const activePaths = filter
    ? filter.kind === "topic"
      ? pathsFor(filter.id)
      : filter.kind === "paths"
        ? paths.filter((_, index) => filter.indices.includes(index))
        : paths[filter.index]
          ? [paths[filter.index]]
          : []
    : [];
  const pathFilterActive =
    activePaths.length > 0 &&
    !(filter?.kind === "paths" && activePaths.length === paths.length);
  const activeIds = new Set(activePaths.flatMap((path) => path.topicIds));
  const pathItems = items.filter(
    (item) => !pathFilterActive || activeIds.has(item.id),
  );
  const visibleItems = pathItems.filter((item) =>
    matchesQuickFilter(item, quickFilter),
  );
  const sortedPaths = orderedPaths.filter((path) => activePaths.includes(path));
  useLayoutEffect(() => {
    if (scrollToPath.current) {
      scrollToPath.current = false;
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
        if (top) {
          window.scrollBy({
            top,
            behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        }
        first
          .querySelector<HTMLButtonElement>(
            ".topic-actions > button:not(.path-filter-button)",
          )
          ?.focus({ preventScroll: true });
      }
      return;
    }
    const previous = anchor.current;
    anchor.current = null;
    if (!previous) return;
    const row = rowRefs.current.get(previous.id);
    if (!row) return;
    const rect = row.getBoundingClientRect();
    const left = rect.left - previous.x;
    const top = rect.top - previous.y;
    if (left || top) window.scrollBy({ left, top, behavior: "instant" });
  }, [filter]);

  function toggleFilter(id: string) {
    const rect = rowRefs.current.get(id)?.getBoundingClientRect();
    if (rect) anchor.current = { id, x: rect.left, y: rect.top };
    const nextFilter: PathFilter =
      filter?.kind === "topic" && filter.id === id
        ? null
        : { kind: "topic", id };
    if (
      selectedId &&
      nextFilter &&
      !pathsFor(id).some((path) => path.topicIds.includes(selectedId))
    ) {
      setSelectedId(null);
      setMobileView("list");
    }
    setFilter(nextFilter);
  }

  function selectPath(index: number) {
    if (filter?.kind === "path" && filter.index === index) return;
    anchor.current = null;
    scrollToPath.current = true;
    if (selectedId && !paths[index].topicIds.includes(selectedId)) {
      setSelectedId(null);
      setMobileView("list");
    }
    setFilter({ kind: "path", index });
  }

  function toggleSelectedPath(index: number) {
    const indices = activePaths.map((path) => paths.indexOf(path));
    const next = indices.includes(index)
      ? indices.filter((current) => current !== index)
      : [...indices, index];
    anchor.current = null;
    scrollToPath.current = false;
    if (
      selectedId &&
      next.length > 0 &&
      next.length < paths.length &&
      !next.some((current) => paths[current].topicIds.includes(selectedId))
    ) {
      setSelectedId(null);
      setMobileView("list");
    }
    setFilter(next.length ? { kind: "paths", indices: next } : null);
  }

  function resetPathFilter() {
    anchor.current = null;
    scrollToPath.current = false;
    setFilter(null);
  }

  function clearFilter() {
    const firstVisibleId = visibleItems[0]?.id;
    if (firstVisibleId) {
      rowRefs.current
        .get(firstVisibleId)
        ?.querySelector<HTMLButtonElement>(
          ".topic-actions > button:not(.path-filter-button)",
        )
        ?.focus({ preventScroll: true });
    }
    resetPathFilter();
    setQuickFilter("");
  }

  function changeQuickFilter(value: string) {
    setQuickFilter(value);
    const selected = items.find((item) => item.id === selectedId);
    if (selected && !matchesQuickFilter(selected, value)) {
      setSelectedId(null);
      setMobileView("list");
    }
  }
  const selectedItem = items.find((item) => item.id === selectedId);
  const supplementaryView = mobileView === "help" || mobileView === "imprint";
  useLayoutEffect(() => {
    const narrow = window.matchMedia?.("(max-width: 799px)");
    if (!narrow || !selectedItem || mobileView !== "list") return;

    function showWideSelection(event?: MediaQueryListEvent) {
      if (!(event?.matches ?? narrow?.matches)) {
        // The selected topic is visible again on the right. Retain that detail
        // view and its Back entry when the window is subsequently narrowed.
        setMobileView("topic");
      }
    }

    narrow.addEventListener("change", showWideSelection);
    showWideSelection();
    return () => narrow.removeEventListener("change", showWideSelection);
  }, [selectedItem, mobileView]);

  function openMobileView(view: "topic" | "help" | "imprint") {
    if (window.matchMedia?.("(max-width: 799px)").matches) {
      listScrollY.current = window.scrollY;
      window.scrollTo(0, 0);
    }
    setMobileView(view);
  }

  function openSupplementaryView(view: "help" | "imprint") {
    setSelectedId(null);
    openMobileView(view);
  }

  function returnToList() {
    setMobileView("list");
    if (window.matchMedia?.("(max-width: 799px)").matches) {
      requestAnimationFrame(() => window.scrollTo(0, listScrollY.current));
    }
  }
  useBrowserBack(
    mobileView !== "list",
    () => {
      returnToList();
      onExitLearningCheck?.();
      if (
        onExitLearningCheck &&
        !window.matchMedia?.("(max-width: 799px)").matches
      ) {
        // Native history restores its older position after popstate.
        requestAnimationFrame(() => window.scrollTo(0, checkScrollY.current));
      }
    },
    onExitLearningCheck !== undefined,
  );
  const topicSections = selectedItem
    ? [
        ["Problem", selectedItem.content.problem],
        ["Kernkonzept", selectedItem.content.coreConcept],
        [
          "Anwendung in der Java- und Webentwicklung",
          selectedItem.content.javaWebUse,
        ],
        ["Grenzen des Konzepts", selectedItem.content.boundary],
      ]
    : [];
  const editorialEntries = selectedItem
    ? [
        {
          label: "Veröffentlicht",
          value: selectedItem.editorial.publishedAt,
          isDate: true,
        },
        {
          label: "Fachlich geprüft",
          value: selectedItem.editorial.reviewedAt,
          isDate: true,
        },
        {
          label: "Wiedervorlage",
          value: selectedItem.editorial.reviewDueAt,
          isDate: true,
        },
        {
          label: "Status",
          value: editorialStatusLabels[selectedItem.editorial.status],
          isDate: false,
        },
      ]
    : [];

  return (
    <div className="topic-browser" data-mobile-view={mobileView}>
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
        <div
          className="topic-list-view"
          role="group"
          aria-label="Listenansicht"
        >
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
            Diese Ansicht gilt für diesen Besuch. Dein Browser konnte die
            Auswahl nicht speichern.
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
          {pathPickerOpen && (
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
                  <label key={paths.indexOf(path)}>
                    <input
                      type="checkbox"
                      checked={activePaths.includes(path)}
                      onChange={() => toggleSelectedPath(paths.indexOf(path))}
                    />
                    <span>{path.name}</span>
                  </label>
                ))}
              </fieldset>
            </section>
          )}
        </div>
        {pathFilterActive && (
          <section
            className="path-filter-summary"
            aria-label="Aktive Lernpfade"
          >
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
                  key={paths.indexOf(path)}
                  aria-pressed={
                    filter?.kind === "path" && paths[filter.index] === path
                  }
                  className="path-name-button"
                  onClick={() => selectPath(paths.indexOf(path))}
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
                    className={
                      showEverydayAnchors
                        ? "topic-everyday-anchor-button"
                        : undefined
                    }
                    aria-pressed={item.id === selectedId}
                    onClick={() => {
                      setSelectedId(item.id);
                      openMobileView("topic");
                    }}
                    type="button"
                  >
                    {showEverydayAnchors ? item.everydayAnchor : item.title}
                  </button>
                  {checkIds.has(item.id) &&
                    learnedTopicIds.includes(item.id) && (
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
                        listScrollY.current = window.scrollY;
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

      <div className="topic-browser-detail">
        {(supplementaryView || !selectedItem) && (
          <>
            {supplementaryView && (
              <button
                className="topic-back-button"
                type="button"
                onClick={returnToList}
              >
                Zur Themenliste
              </button>
            )}
            {mobileView === "imprint" ? <Imprint /> : <TopicHelp />}
          </>
        )}

        {selectedItem && !supplementaryView && (
          <article aria-labelledby="topic-title">
            <button
              className="topic-back-button"
              type="button"
              onClick={returnToList}
            >
              Zur Themenliste
            </button>
            <h2 id="topic-title">{selectedItem.title}</h2>

            <div
              className="topic-everyday-anchor"
              role="note"
              aria-label="Kommt mir bekannt vor"
            >
              <p className="topic-everyday-anchor-label">
                Kommt mir bekannt vor
              </p>
              <p className="topic-everyday-anchor-text">
                {selectedItem.everydayAnchor}
              </p>
            </div>

            {topicSections.map(([heading, text]) => (
              <section key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
              </section>
            ))}

            <section>
              <h3>Quellen</h3>
              <SourceGroup
                title="Primärquellen"
                sources={selectedItem.sources.filter(
                  (source) => source.origin === "primary",
                )}
              />
              <SourceGroup
                title="Sekundärquellen"
                sources={selectedItem.sources.filter(
                  (source) => source.origin === "secondary",
                )}
              />
            </section>

            <section>
              <h3>Redaktionelle Metadaten</h3>
              <dl>
                {editorialEntries.map((entry) => (
                  <div key={entry.label}>
                    <dt>{entry.label}</dt>
                    <dd>
                      {entry.isDate ? (
                        <time dateTime={entry.value}>{entry.value}</time>
                      ) : (
                        entry.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </article>
        )}
      </div>
    </div>
  );
}
