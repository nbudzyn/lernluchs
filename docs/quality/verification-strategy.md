# Qualitäts- und Verifikationsstrategie

## Derzeit ausgeführte CI-Prüfungen

Die CI für Pull Requests und Pushes auf `main` installiert die festgeschriebenen npm-Abhängigkeiten und führt aus:

1. Formatprüfung mit Prettier für Code, Tests und Konfiguration einschließlich YAML-Workflows; Markdown ist ausgenommen.
2. Type-Aware-Lint mit Oxlint und TypeScript 7; Warnungen lassen das Gate scheitern.
3. TypeScript-Typprüfung.
4. Unit- und Komponententests mit Vitest.
5. Themenvalidierung für eindeutige IDs, vollständige Themen, redaktionelle Metadaten und HTTPS-Quellen sowie Lerncheck-Katalogvalidierung für jeden vorhandenen Fragenpool mit mindestens 25 Fragen, genau einer richtigen Antwort, Erklärungen und Bezug zu den Quellen des Themas.
6. Architekturprüfung mit dependency-cruiser, Tests der öffentlichen Vertikal-Einstiegspunkte und der E2E-Ablage sowie Tests der
   Vertikalzählung.
7. Lizenzprüfung der festgeschriebenen Abhängigkeiten. Unbekannte, GPL-, AGPL-, SSPL- und nicht quelloffene Lizenzen scheitern; LGPL und MPL brauchen eine dokumentierte Einzelfallfreigabe.
8. Produktionsbuild mit Prüfung der erzeugten Dateien.
9. Chromium-E2E-Tests für Fragenablauf, Ergebnis, Abbruch und Quellenlink-Ausfall, je zur Hälfte mit Desktop- und Smartphone-Viewport.
10. `npm audit --audit-level=high` für bekannte Schwachstellen.
11. Prüfung jedes neuen Commits auf höchstens zwei geänderte Vertikalen. Dazu zählen Dateien unter `src/verticals/`, `tests/verticals/`
    und `e2e/verticals/`; `app` und `shared` zählen nicht als Vertikalen. Umbenennungen zählen alten und neuen Eigentümer.

Der GitHub-Pages-Workflow baut bei einem Push auf `main` die statische App mit `npm run check`, prüft den Pages-Basispfad und lädt nur
`dist/` hoch. `npm run check` umfasst die Punkte 1 bis 8. Bei einem Push auf
`main` prüft auch der Pages-Build die Commitgrenze vor dem Hochladen. Browser-E2E
und Audit laufen im separaten CI-Workflow und sind keine Voraussetzung für den
Pages-Deploy-Job.

## Änderungsnachweis

Jede fachliche Änderung erhält nach dem [Änderungs-Workflow](../changes/README.md) eine eigene Spec mit RED-, GREEN- und
REFACTOR-Nachweis. Vor einem Commit wird die geänderte Anwendung lokal im Browser geprüft; Browser, Ablauf und Ergebnis stehen in der
Spec. Commits erfolgen nur bei grüner aktuell verpflichtender Suite.
