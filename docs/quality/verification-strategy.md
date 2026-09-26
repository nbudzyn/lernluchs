# Qualitäts- und Verifikationsstrategie

## Derzeit ausgeführte CI-Prüfungen

Die CI für Pull Requests und Pushes auf `main` installiert die festgeschriebenen npm-Abhängigkeiten und führt aus:

1. TypeScript-Typprüfung.
2. Unit- und Komponententests mit Vitest.
3. Katalogvalidierung für eindeutige IDs, vollständige Lernkarten, redaktionelle Metadaten und strukturierte HTTPS-Quellen.
4. Architekturprüfung mit dependency-cruiser auf Importgrenzen und Zyklen.
5. Produktionsbuild mit Prüfung der erzeugten Dateien.
6. `npm audit --audit-level=high` für bekannte Schwachstellen.

Der GitHub-Pages-Workflow baut bei einem Push auf `main` die statische App mit `npm run check`, prüft den Pages-Basispfad und lädt nur
`dist/` hoch. `npm run check` umfasst die Punkte 1 bis 5; das Audit läuft derzeit im separaten CI-Workflow und ist keine Voraussetzung
für den Pages-Deploy-Job.

## Änderungsnachweis

Jede fachliche Änderung erhält nach dem [Änderungs-Workflow](../changes/README.md) eine eigene Spec mit RED-, GREEN- und
REFACTOR-Nachweis. Vor einem Commit wird die geänderte Anwendung lokal im Browser geprüft; Browser, Ablauf und Ergebnis stehen in der
Spec. Commits erfolgen nur bei grüner aktuell verpflichtender Suite.
