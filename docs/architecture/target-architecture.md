# Architektur und Leitplanken

## Aktueller Aufbau

Lernluchs läuft clientseitig mit React/TypeScript. Vite erzeugt statische Dateien für GitHub Pages.
Versionierte, öffentliche Themen enthalten Quellen und redaktionelle Metadaten und erscheinen als Liste.
Die App verbindet Themen über ihren öffentlichen Einstiegspunkt mit Lernchecks. `learning-checks` besitzt quellengeprüfte Fragenpools
und übergibt sie per Themen-ID an die App; `topics` enthält keine Fragen. Frageauswahl, Antworten und Ergebnis bleiben im React-Zustand.
Vitest prüft Verhalten und Themen, dependency-cruiser Importgrenzen und Zyklen. Chromium-E2E-Tests prüfen sichtbare Abläufe auf Desktop
und Smartphone. E2E-Dateien gehören der prüfenden Vertikale, übergreifende Abläufe `app`; gemeinsame Testhilfen liegen unter `e2e/shared/`.
`help` besitzt die Einführung zu Themen-Symbolen und Lernpfad-Filterung. Einzige gerichtete Abhängigkeit: `topics → help`.
`topics` importiert `help/index.ts`; `help` importiert weder `topics` noch andere App-Vertikalen oder `shared`.
Die Themenansicht positioniert die Hilfe auf breiten und schmalen Viewports. Unit- und E2E-Tests gehören der Hilfe-Vertikale.

## Dauerhafte Leitplanken

Maßgeblich sind [Produkt und Datenschutz](../governance/durable-rules.md#produkt-und-datenschutz)
und die [Architekturregeln](../governance/durable-rules.md#architektur-und-änderungen).
Die konkreten Zuständigkeiten und Verträge stehen in [Vertikalen und Grenzen](verticals-and-boundaries.md).

Geplante Datenflüsse, Speicherverfahren, Offline-Funktionen und Browseranforderungen stehen in den
[Stories](../product/story-backlog.md). Ergänze hier nach Umsetzung die wesentlichen Architekturentscheidungen knapp.
