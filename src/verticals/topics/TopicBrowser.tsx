import { useState } from "react";

import type { Question } from "../../shared/question";
import { topics } from "./topics";
import type { Topic, TopicSource } from "./topicContract";
import "./TopicBrowser.css";

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
  onStartQuestions,
}: {
  items?: Topic[];
  onStartQuestions?: (id: string, title: string, questions: Question[]) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = items.find((item) => item.id === selectedId);
  const cardSections = selectedItem
    ? [
        ["Problem", selectedItem.content.problem],
        ["Kernkonzept", selectedItem.content.coreConcept],
        ["Java-/Web-Einsatz", selectedItem.content.javaWebUse],
        ["Wichtige Grenze", selectedItem.content.boundary],
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
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div className="topic-actions">
                <button
                  aria-pressed={item.id === selectedId}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  {item.title}
                </button>
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
