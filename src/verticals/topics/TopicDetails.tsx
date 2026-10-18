import type { EditorialStatus, Topic, TopicSource } from "./topicContract";
import { topicSections } from "./topicSections";

const editorialStatusLabels: Record<EditorialStatus, string> = {
  active: "Aktiv",
  watching: "Unter Beobachtung",
  archived: "Archiviert",
  replaced: "Ersetzt",
};

function SourceGroup({
  title,
  sources,
}: {
  title: string;
  sources: readonly TopicSource[];
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

export function TopicDetails({
  selectedItem,
  returnToList,
}: {
  selectedItem: Topic;
  returnToList: () => void;
}) {
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
        <p className="topic-everyday-anchor-label">Kommt mir bekannt vor</p>
        <p className="topic-everyday-anchor-text">
          {selectedItem.everydayAnchor}
        </p>
      </div>

      {topicSections.map(({ key, heading }) => (
        <section key={heading}>
          <h3>{heading}</h3>
          <p>{selectedItem.content[key]}</p>
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
  );
}
