import { useState } from "react";

import { catalog } from "./catalog";
import type { CatalogItem, CatalogSource } from "./catalogContract";

function SourceGroup({
  title,
  sources,
}: {
  title: string;
  sources: CatalogSource[];
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

export function CatalogBrowser({
  items = catalog.items,
}: {
  items?: CatalogItem[];
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = items.find((item) => item.id === selectedId);
  const cardSections = selectedItem
    ? [
        ["Problem", selectedItem.learningCard.problem],
        ["Kernkonzept", selectedItem.learningCard.coreConcept],
        ["Java-/Web-Einsatz", selectedItem.learningCard.javaWebUse],
        ["Wichtige Grenze", selectedItem.learningCard.boundary],
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
              <button
                aria-pressed={item.id === selectedId}
                onClick={() => setSelectedId(item.id)}
                type="button"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {selectedItem && (
        <article aria-labelledby="learning-card-title">
          <h2 id="learning-card-title">{selectedItem.title}</h2>

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
