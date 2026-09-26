import { useState } from "react";

import { catalog } from "./catalog";

export function CatalogBrowser() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = catalog.items.find((item) => item.id === selectedId);
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
        { label: "Veröffentlicht", value: selectedItem.editorial.publishedAt, isDate: true },
        { label: "Fachlich geprüft", value: selectedItem.editorial.reviewedAt, isDate: true },
        { label: "Wiedervorlage", value: selectedItem.editorial.reviewDueAt, isDate: true },
        { label: "Inhaltsversion", value: selectedItem.editorial.contentVersion, isDate: false },
        { label: "Status", value: selectedItem.editorial.status, isDate: false },
      ]
    : [];

  return (
    <>
      <nav aria-label="Lernthemen">
        <ul>
          {catalog.items.map((item) => (
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
            <ul>
              {selectedItem.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noreferrer" target="_blank">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      )}
    </>
  );
}
