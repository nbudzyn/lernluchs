import { useLayoutEffect, useRef, useState } from "react";

import { TopicHelp } from "../help";
import { topics } from "./topics";
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
  { kind: "topic"; id: string } | { kind: "path"; index: number } | null;

function matchesQuickFilter(item: Topic, query: string) {
  return [
    item.title,
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
}: {
  items?: Topic[];
  paths?: LearningPath[];
  learnedTopicIds?: string[];
  availableLearningCheckTopicIds?: string[];
  onStartLearningCheck?: (id: string, title: string) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<PathFilter>(null);
  const [quickFilter, setQuickFilter] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "topic" | "help">(
    "list",
  );
  const listScrollY = useRef(0);
  const rowRefs = useRef(new Map<string, HTMLLIElement>());
  const anchor = useRef<{ id: string; x: number; y: number } | null>(null);
  const scrollToPath = useRef(false);
  const itemIndex = new Map(items.map((item, index) => [item.id, index]));
  const checkIds = new Set(availableLearningCheckTopicIds);
  const pathsFor = (id: string) =>
    paths.filter((path) => path.topicIds.includes(id));
  const activePaths = filter
    ? filter.kind === "topic"
      ? pathsFor(filter.id)
      : paths[filter.index]
        ? [paths[filter.index]]
        : []
    : [];
  const activeIds = new Set(activePaths.flatMap((path) => path.topicIds));
  const visibleItems = items.filter(
    (item) =>
      (!activePaths.length || activeIds.has(item.id)) &&
      matchesQuickFilter(item, quickFilter),
  );
  const sortedPaths = [...activePaths].sort((first, second) => {
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
    anchor.current = null;
    scrollToPath.current = false;
    setFilter(null);
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
  function openMobileView(view: "topic" | "help") {
    if (window.matchMedia?.("(max-width: 799px)").matches) {
      listScrollY.current = window.scrollY;
      window.scrollTo(0, 0);
    }
    setMobileView(view);
  }

  function returnToList() {
    setMobileView("list");
    if (window.matchMedia?.("(max-width: 799px)").matches) {
      requestAnimationFrame(() => window.scrollTo(0, listScrollY.current));
    }
  }
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
            {!filter && (
              <p className="topic-list-count">
                {quickFilter && `${visibleItems.length} / `}
                {items.length} Themen
              </p>
            )}
          </div>
          {mobileView === "list" && (
            <button
              aria-label="Hilfe öffnen"
              className="topic-help-button"
              type="button"
              title="Hilfe öffnen"
              onClick={() => openMobileView("help")}
            >
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.9.8-1.8 1.3-1.8 2.8M12 17h.01" />
              </svg>
            </button>
          )}
        </div>
        <div className="topic-quick-filter">
          <label htmlFor="topic-quick-filter">Schnellfilter</label>
          <input
            id="topic-quick-filter"
            type="text"
            value={quickFilter}
            onChange={(event) => changeQuickFilter(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape" && quickFilter) {
                event.preventDefault();
                changeQuickFilter("");
              }
            }}
          />
          {quickFilter && activePaths.length === 0 && (
            <button type="button" onClick={clearFilter}>
              Filter aufheben
            </button>
          )}
        </div>
        {activePaths.length > 0 && (
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
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 4h14M5 9h10M8 14h4M10 14v3" />
                      </svg>
                    </button>
                  )}
                  <button
                    aria-pressed={item.id === selectedId}
                    onClick={() => {
                      setSelectedId(item.id);
                      openMobileView("topic");
                    }}
                    type="button"
                  >
                    {item.title}
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
                      onClick={() => onStartLearningCheck(item.id, item.title)}
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
        {(mobileView === "help" || !selectedItem) && (
          <>
            {mobileView === "help" && (
              <button
                className="topic-back-button"
                type="button"
                onClick={returnToList}
              >
                Zur Themenliste
              </button>
            )}
            <TopicHelp />
          </>
        )}

        {selectedItem && mobileView !== "help" && (
          <article aria-labelledby="topic-title">
            <button
              className="topic-back-button"
              type="button"
              onClick={returnToList}
            >
              Zur Themenliste
            </button>
            <h2 id="topic-title">{selectedItem.title}</h2>

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
