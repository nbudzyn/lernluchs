# Nächsten Lernpfad einweben

## Ziel und Umfang

Der Inhaltskatalog wird um diesen Lernpfad erweitert:

1. Problem verstehen und Änderungsgrenzen setzen - vorhanden
2. EARS: Anforderungen präzise formulieren - vorhanden
3. Modulgrenzen und öffentliche Schnittstellen gestalten - neu
4. Fachverhalten mit TDD absichern - neu
5. Java-Architekturregeln mit ArchUnit prüfen - neu
6. Webabläufe mit Playwright prüfen - neu
7. Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen - neu
8. Abhängigkeiten und Sicherheitslücken risikobasiert bewerten - neu

Der Lernpfad als solcher wird noch nicht als Objekt in der Software repräsentiert und erscheint nicht als eigener Abschnitt in der
Oberfläche.

Die sechs neuen Lerninhalte werden als Lernkarten mit Quellen und Aktualitätsmetadaten ausformuliert, fachlich geprüft und strukturell an
die vorhandenen Inhalte angeglichen. Fragenpools gehören nicht zu dieser Story.

Alle zwölf Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Sie werden über beide Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge der sechs vorhandenen Inhalte bleibt erhalten; die
neuen Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der acht Inhalte des neuen Lernpfads
bleibt erhalten.

Vertikale: Inhaltskatalog

## Risiken und Abnahme

- **Geplante Reihenfolge der IDs:** `human-ai-responsibility`, `problem-understanding-and-change-boundaries`, `agents-md`, `ears-requirements`, `module-boundaries-and-public-interfaces`, `research-plan-tasks`, `spec-driven-development-openspec`, `tdd-for-domain-behavior`, `archunit-for-java-architecture`, `playwright-for-web-flows`, `web-xss-and-safe-dom`, `dependency-security-assessment`.
- **Reihenfolge und Vollständigkeit:** Vor der Implementierung die erwartete Reihenfolge aller zwölf IDs festhalten; ein Test prüft Anzahl,
  Eindeutigkeit und beide relativen Reihenfolgen.
- **Fachliche Fehler oder veraltete Aussagen:** Jede neue Lernkarte nach der [redaktionellen Richtlinie](../../content/editorial-policy.md) mit
  Quellen, Aktualitätsmetadaten und dokumentierter fachlicher Prüfung abnehmen.
- **Ungewollte Erweiterung:** Im Browser eine gemeinsame, ungruppierte Liste prüfen; kein eigener Lernpfad-Abschnitt und keine Fragenpools.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Inhalte | `npm run validate:content` schlug fehl: Die erwarteten sechs neuen IDs fehlten. |
| GREEN: Inhalte | Sechs Karten mit Quellen und Metadaten ergänzt; `npm run validate:content` grün. |
| RED: Ansicht | Der Komponententest schlug fehl: Navigation hieß noch „Grundlagen-Themen“. |
| GREEN: Ansicht | Navigation heißt „Lernthemen“; zwölf Themen erscheinen in einer Liste. |
| REFACTOR | Bestehenden Katalogtest auf Erhalt der sechs alten Inhalte zugeschnitten; neue Metadaten und Reihenfolge geprüft. Tests unter `tests/app` und `tests/verticals/catalog` eingeordnet und Imports sowie `validate:content` angepasst. `npm run check` danach grün: 8 Tests, Inhalts- und Architekturprüfung, Build. |
| Abnahme | Im Codex In-app-Browser unter `http://127.0.0.1:5173/` die gemeinsame Liste mit zwölf Themen und nach Auswahl die neuen Playwright- und XSS-Karten mit Inhalt, Metadaten und Quellen geprüft. `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit. |

Fachliche Prüfung am 26.09.2026 anhand der in den Karten verlinkten Primärquellen: Dev.java, Martin Fowler, ArchUnit, Playwright, OWASP, OpenSSF und GitHub Docs. Die Karten beschreiben bewusst keine versionsabhängigen Befehle oder vollständigen Sicherheitsgarantien; solche Aussagen müssten gesondert geprüft werden.
