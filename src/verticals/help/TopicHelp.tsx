import "./TopicHelp.css";

export function TopicHelp() {
  return (
    <section aria-label="Hilfe zu Themen" className="topic-help-content">
      <h2>Hilfe</h2>
      <ul>
        <li>Klick auf ein Thema öffnet das Thema</li>
        <li>
          <svg aria-hidden="true" viewBox="0 0 20 20">
            <path d="M3 4h14M5 9h10M8 14h4M10 14v3" />
          </svg>{" "}
          <span>filtert nach allen Lernpfaden mit diesem Thema</span>
        </li>
        <li>Aktive Lernpfade stehen über der Themenliste</li>
        <li>Klick auf einen Lernpfad filtert auf diesen einen Lernpfad</li>
        <li>
          <svg aria-hidden="true" viewBox="0 0 28 24">
            <path d="M4 7a5 5 0 1 1 8.6 3.5c-1.4 1.3-3.2 2.3-3.2 4" />
            <circle cx="9.4" cy="19" r="1" />
            <path d="m18 7 6 5-6 5z" />
          </svg>{" "}
          <span>startet einen Test</span>
        </li>
        <li>
          <span className="help-passed-icon" aria-hidden="true">
            ✓
          </span>{" "}
          <span>Test bestanden</span>
        </li>
      </ul>
    </section>
  );
}
