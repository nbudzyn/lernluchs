# Redaktionell geprüfter Grundlagen-Inhaltskatalog

## Ziel und Umfang

Der zuvor leere, öffentliche Katalog erhielt sechs deutsche Lernkarten mit dauerhaften IDs, Quellen und Aktualitätsmetadaten. Betroffen waren Inhaltskatalog und Katalogschema/Validierung im gemeinsamen Kern. Anzeige, Fragen, Fortschritt, Offline-Funktion und neue Abhängigkeiten gehörten nicht dazu.

Die Inhalte standen in dieser Reihenfolge: `human-ai-responsibility`, `problem-understanding-and-change-boundaries`, `agents-md`, `ears-requirements`, `research-plan-tasks`, `spec-driven-development-openspec`.

Jede Karte enthält Problem, Kernkonzept, Java-/Web-Einsatz und Grenze. Die eigene Validierung prüft IDs, Pflichtfelder, Status, Daten und mindestens eine strukturierte HTTPS-Quelle. Der Katalog bleibt statisch und enthält keine persönlichen Daten oder Netzwerkanfragen.

## Risiken und Abnahme

- Quellen können sich ändern. Aussagen wurden am 20.09.2026 gegen NIST AI RMF, AGENTS.md, die IEEE-Veröffentlichung zu EARS, eine offizielle OpenAI-Handreichung und das OpenSpec-Repository geprüft; die Tool-Landkarte war nur Rechercheausgangspunkt. Wiedervorlage: 20.12.2026 für Werkzeugthemen, 20.03.2027 für übrige Themen.
- GitHub Spec Kit wurde als Alternative zu OpenSpec nicht vertieft. Eine Schema-Bibliothek war für den kleinen Vertrag nicht nötig.
- Abnahme: sechs vollständige, eindeutige und quellengebundene Karten; gültige Metadaten und grüne Inhalts-, Test-, Architektur- und Build-Prüfung. Die Browseranzeige gehörte nicht zu dieser Änderung.

## Umsetzung und Nachweise

| Teil-Feature | Phase | Nachweis |
| --- | --- | --- |
| Vertrag und Karten | RED | `npm run validate:content` scheiterte: Katalog leer, Karte ohne Quelle akzeptiert. |
| Vertrag und Karten | GREEN | Schema, Validierung und sechs geprüfte Karten ergänzt; 3 Inhaltstests grün. |
| Vertrag und Karten | REFACTOR | Aktive Metadaten über `activeEditorial(reviewDueAt)` erzeugt; Tests erneut grün. |

`npm run check` war grün (4 Unit-/Komponententests, 3 Inhaltstests, Architekturprüfung, Build); `npm audit --audit-level=high` meldete 0 Schwachstellen. Der Codex In-app-Browser zeigte unter `http://127.0.0.1:5173/` weiterhin die vorhandene Architekturhülle ohne Inhaltsansicht oder externe Laufzeitressourcen. Die Darstellung war Gegenstand einer späteren Änderung.
