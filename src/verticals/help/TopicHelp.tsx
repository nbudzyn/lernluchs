import "./TopicHelp.css";

export function TopicHelp() {
  return (
    <section aria-label="Hilfe zu Themen" className="topic-help-content">
      <h2>Hilfe</h2>
      <ul>
        <li>Klick auf ein Thema öffnet das Thema</li>
        <li>
          „Kommt mir bekannt vor“ zeigt Situationen aus deinem Alltag als
          Randnotiz beim Thema
        </li>
        <li>
          Über der Liste wechselst du zwischen Themen und „Kommt mir bekannt
          vor“
        </li>
        <li>
          Mit „Lernpfade“ am Schnellfilter wählst du einen oder mehrere
          Lernpfade aus
        </li>
        <li>
          „Suche mit KI“ findet passende Themen zu deiner Frage – lokal auf
          deinem Gerät
        </li>
        <li>
          {/* Lucide route; ISC-Lizenz: public/licenses/lucide-route.txt */}
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="6" cy="19" r="3" />
            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
            <circle cx="18" cy="5" r="3" />
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
          <span>startet einen Lerncheck</span>
        </li>
        <li>
          <span className="help-learned-icon" aria-hidden="true">
            ✓
          </span>{" "}
          <span>Thema gelernt</span>
        </li>
      </ul>
    </section>
  );
}
