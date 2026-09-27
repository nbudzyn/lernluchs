import { useLayoutEffect, useRef, useState } from "react";

import type { Question } from "../../shared/question";
import { topics } from "./topics";
import type { LearningPath, Topic, TopicSource } from "./topicContract";
import "./TopicBrowser.css";

type PathFilter =
  { kind: "topic"; id: string } | { kind: "path"; index: number } | null;

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
            <a href={source.url} rel="noreferrer" target="_blank">
              {source.title}
              {source.language === "de" ? " [DE]" : ""}
            </a>
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
  onStartQuestions,
}: {
  items?: Topic[];
  paths?: LearningPath[];
  learnedTopicIds?: string[];
  onStartQuestions?: (id: string, title: string, questions: Question[]) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<PathFilter>(null);
  const rowRefs = useRef(new Map<string, HTMLLIElement>());
  const anchor = useRef<{ id: string; x: number; y: number } | null>(null);
  const scrollToPath = useRef(false);
  const itemIndex = new Map(items.map((item, index) => [item.id, index]));
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
  const visibleItems = activePaths.length
    ? items.filter((item) => activeIds.has(item.id))
    : items;
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
    }
    setFilter(nextFilter);
  }

  function selectPath(index: number) {
    if (filter?.kind === "path" && filter.index === index) return;
    anchor.current = null;
    scrollToPath.current = true;
    if (selectedId && !paths[index].topicIds.includes(selectedId)) {
      setSelectedId(null);
    }
    setFilter({ kind: "path", index });
  }
  const selectedItem = items.find((item) => item.id === selectedId);
  const cardSections = selectedItem
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
          value: selectedItem.editorial.status,
          isDate: false,
        },
      ]
    : [];

  return (
    <>
      <nav aria-label="Lernthemen">
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
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  {item.title}
                </button>
                {item.questions && learnedTopicIds.includes(item.id) && (
                  <span
                    className="learned-checkmark"
                    role="img"
                    aria-label="Gelernt"
                  >
                    ✓
                  </span>
                )}
                {item.questions && onStartQuestions && (
                  <button
                    aria-label={`Fragen starten: ${item.title}`}
                    className="quiz-start-button"
                    type="button"
                    title={`Fragen starten: ${item.title}`}
                    onClick={() =>
                      onStartQuestions(item.id, item.title, item.questions!)
                    }
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

      {activePaths.length > 0 && (
        <p className="path-filter-summary">
          Themen gefiltert nach Lernpfaden:{" "}
          {sortedPaths.map((path, index) => (
            <span key={paths.indexOf(path)}>
              {index > 0 ? ", " : null}
              <button
                aria-pressed={
                  filter?.kind === "path" && paths[filter.index] === path
                }
                className="path-name-button"
                onClick={() => selectPath(paths.indexOf(path))}
                type="button"
              >
                {path.name}
              </button>
            </span>
          ))}
        </p>
      )}

      {selectedItem && (
        <article aria-labelledby="topic-title">
          <h2 id="topic-title">{selectedItem.title}</h2>

          {cardSections.map(([heading, text]) => (
            <section key={heading}>
              <h3>{heading}</h3>
              <p>{text}</p>
            </section>
          ))}

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
        </article>
      )}
    </>
  );
}
