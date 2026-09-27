# E2E-Tests nach Verantwortung organisieren

## Ziel und Umfang

Die drei vorhandenen Browser-Testdateien erhalten dieselbe Eigentümerstruktur wie die anderen Tests:

- `e2e/verticals/topics/topic-path-filter.spec.ts` prüft das Filterverhalten der Themenliste.
- `e2e/verticals/learning-progress/learning-progress.spec.ts` prüft den dauerhaft gespeicherten Lernstand.
- `e2e/app/foundation-questions.spec.ts` prüft den übergreifenden Ablauf von Themenliste und Lerncheck.

`e2e/shared/` ist für später gemeinsam genutzte Testhilfen vorgesehen; derzeit ist dort keine Datei nötig. Testverhalten und Anwendung
bleiben unverändert. Es wird keine Abhängigkeit ergänzt.

Eine verpflichtende Prüfung zählt für jeden neuen Commit die geänderten Verzeichnisse unter `src/verticals/`, `tests/verticals/` und
`e2e/verticals/`. Bei mehr als zwei verschiedenen Vertikalen schlägt sie fehl. Änderungen unter `app` und `shared` zählen nicht als
Vertikale. Die Prüfung läuft in CI für die Commits eines Pull Requests beziehungsweise Pushs auf `main` und blockiert bei einem Push auch
den Pages-Build. Eine Architekturausnahme verlangt weiterhin eine eigene Spec und Architekturtests; für diese Änderung wird keine Ausnahme
benötigt.

Betroffene Vertikalen: Themen und Lernfortschritt. Die E2E-Datei unter `app` prüft den bestehenden Ablauf zwischen Themen und Lernchecks.

## Risiken und Abnahme

- **Unklare Zuordnung:** Die drei Dateien liegen an den genannten Orten; neue E2E-Specs auf oberster Ebene werden durch einen
  Architekturtest zurückgewiesen. Der Test dokumentiert die zulässigen Ordner `verticals`, `app` und `shared`.
- **Zu schwache Commitprüfung:** Tests für den Zähler decken dieselbe Vertikale in verschiedenen Wurzeln, zwei und drei Vertikalen,
  Umbenennungen sowie `app`/`shared` ab. Merge-Commits werden nicht als eigene fachliche Änderungen gezählt.
- **CI-Verfügbarkeit:** Die Checkouts enthalten die nötige Git-Historie. Die Prüfung erhält eine klare Basis- und Ziel-Revision und ist
  ein verpflichtender CI- und Pages-Push-Schritt.
- **Lauffähigkeit:** TypeScript, Architektur- und vollständige Browser-Suite laufen nach der Verschiebung grün.

## Umsetzung und Nachweise

| Schritt | Nachweis | Stand |
| --- | --- | --- |
| RED: E2E-Struktur | `npx vitest run tests/architecture/e2e-ownership.test.ts` scheiterte fachlich korrekt: Die drei `.spec.ts`-Dateien lagen direkt unter `e2e/`. | Erbracht |
| GREEN: E2E-Struktur | Dateien nach `e2e/app/`, `e2e/verticals/topics/` und `e2e/verticals/learning-progress/` verschoben und relative Imports angepasst. Architekturtest und `npm run test:e2e` grün (30 Tests). | Erbracht |
| REFACTOR: E2E-Struktur | Der Architekturtest prüft den ganzen E2E-Baum auf die erlaubten Eigentümerordner; Browser-Suite erneut grün. | Erbracht |
| RED: Commitgrenze | Drei Node-Tests scheiterten mit leerem Ergebnis: Weder vertikalübergreifende Dateipfade noch eine dritte Vertikale oder Umbenennungen wurden gezählt. | Erbracht |
| GREEN: Commitgrenze | Git-basierter Zähler implementiert; Unit-Tests und ein Integrationstest mit temporärem Repository grün. Zwei Vertikalen plus `app` bestehen, drei Vertikalen im selben Commit scheitern. CI und Pages-Push prüfen den Commitbereich mit vollständiger Git-Historie. | Erbracht |
| REFACTOR: Commitgrenze | Testdatei vom Vitest-Suchmuster getrennt, damit der Node-Test nur einmal in der Architekturprüfung läuft. `npm run check:vertical-scope -- HEAD~1 HEAD` und Workflow-Prüfungen grün. | Erbracht |
| Pflichtsuite | `npm run check` grün: Format, Lint, Typen, 58 Vitest-Tests, Inhalt, Architektur samt vier Node-Tests, Lizenzen und Build. `npm run test:e2e` grün: 30 Desktop- und Mobiltests. `npm audit --audit-level=high`: 0 Schwachstellen. CI- und Pages-Workflow-Prüfungen grün. | Erbracht |
| Lokale Browserabnahme | Playwright startete lokal Chromium mit Desktop- und Mobilansicht unter `http://127.0.0.1:4173/`; Themenfilter, Fragenablauf und Lernfortschritt liefen nach der Verschiebung in allen 30 Browser-Tests grün. | Erbracht |
| Manuelle Nutzerprüfung | Der Nutzer hat die Änderung selbst geprüft und das Ergebnis ausdrücklich bestätigt; der Commit ist freigegeben. | Erbracht |
