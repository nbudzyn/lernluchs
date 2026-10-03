# Qualitäts- und Verifikationsstrategie

## Derzeit ausgeführte CI-Prüfungen

Die CI für Pull Requests und Pushes auf `main` installiert die festgeschriebenen npm-Abhängigkeiten und führt aus:

1. Formatprüfung mit Prettier für Code, Tests und Konfiguration einschließlich YAML-Workflows; Markdown ist ausgenommen.
2. Type-Aware-Lint mit Oxlint und TypeScript 7; Warnungen lassen das Gate scheitern.
3. TypeScript-Typprüfung.
4. Unit- und Komponententests mit Vitest.
5. Themenvalidierung für eindeutige IDs, vollständige Themen, redaktionelle Metadaten und HTTPS-Quellen sowie Validierung der Fragenpools für jeden vorhandenen Fragenpool mit mindestens 25 Fragen, genau einer richtigen Antwort, Erklärungen und Bezug zu den Quellen des Themas.
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

## Lokale Testaufrufe und Ausgabe

Unit-Tests für dieselbe Implementierungsdatei `X.ts` stehen gemeinsam in
`X.test.ts`, Komponententests für `X.tsx` in `X.test.tsx`. E2E-Tests werden nach
Nutzerablauf oder Funktion gebündelt (zum Beispiel `learning-check.spec.ts`).
Prüfungen derselben Anforderung mit verschiedenen Daten werden zu einem Test
über alle betreffenden Datensätze zusammengeführt; unterschiedliche Anforderungen
bleiben eigene Tests. Datenkennungen und verletzte Regeln müssen aus Fehlern
ersichtlich sein. Unabhängige Datensätze werden auch bei Fehlern weiter geprüft
(zum Beispiel mit Vitest-Soft-Assertions oder E2E-Schritten mit Fehlersammlung).
Vor dem Anlegen eines neuen Tests in der RED-Phase bestehende Tests auf passende
Erweiterung oder Verallgemeinerung prüfen. Ein neuer Test ist nur für eine bisher
nicht abgedeckte, eigenständige Anforderung nötig.

Unit-/Komponenten- und E2E-Einmalläufe verwenden `scripts/test-runner.mjs`.
`npm run --silent` unterdrückt zusätzlich die npm-Aufrufbanner. Der Runner
benötigt weder RTK noch zusätzliche Abhängigkeiten und startet den installierten
Testprozess genau einmal. `npm run check` verwendet ihn ebenfalls; die
Runner-Selbsttests gehören zur Pflichtsuite.

| Auswahl | Unit / Komponenten | E2E |
| --- | --- | --- |
| Alle Tests des Typs | `npm run --silent test:unit` | `npm run --silent test:e2e` |
| Alle Tests einer Vertikale | `npm run --silent test:unit -- --vertical topics` | `npm run --silent test:e2e -- --vertical topics` |
| Eine Datei | `npm run --silent test:unit -- tests/verticals/topics/topics.test.ts` | `npm run --silent test:e2e -- e2e/verticals/topics/quick-filter.spec.ts` |
| Ein Testname in einer Datei | `npm run --silent test:unit -- tests/verticals/topics/topics.test.ts -t "provides audio sources"` | `npm run --silent test:e2e -- e2e/verticals/topics/quick-filter.spec.ts --grep "filters immediately" --project=desktop-chromium` |

Weitere native Filter, etwa `--project` bei Playwright, werden weitergereicht.
Dateifilter beziehen sich wie gewohnt auf die Testdateinamen; Namensfilter sind
die nativen regulären Ausdrücke. Die Runner-Reporter und der Einmallauf dürfen
nicht überschrieben werden. `npm test` bleibt für ausdrücklich gewünschte
interaktive Vitest-Watch-Sitzungen verfügbar.

Ein normaler Erfolg liefert eine Zeile mit Anzahl, Laufzeit und Exitcode.
Übersprungene Tests werden gesondert gezählt; ausschließlich übersprungene Tests
erhalten `SKIP`. Flaky E2E-Läufe erhalten `WARN` samt Diagnose, auch wenn native
Playwright-Retries schließlich erfolgreich waren. Der Runner selbst wiederholt
keine Tests. Fehler behalten Diagnose, Soll/Ist, Stack, Quellstellen und
Artefaktpfade; nur erkannte Erfolgs-Fortschrittszeilen und Farbsteuerzeichen
werden entfernt. Unbekannte Ausgaben werden nicht abgeschnitten.

Native Exitcodes bleiben erhalten. Bei Exitcode 0 mit fehlendem, ungültigem,
leerem oder widersprüchlichem Bericht scheitert der Runner mit Exitcode 2.
Prozessfehler bleiben auch dann Fehler, wenn einzelne Tests bestanden haben.

Rohtext, stdout/stderr, JSON-Bericht und Größenmessung werden während desselben
Laufs in einem neuen Verzeichnis im Betriebssystem-Temp-Verzeichnis gespeichert.
Bei Fehlern erscheint dessen Rohprotokollpfad. Für eine Messung kann
`--log-dir ABSOLUTER_PFAD` ein noch nicht vorhandenes Verzeichnis außerhalb des
Repositorys festlegen. Kein Protokoll einchecken oder an externe Dienste senden.
Fehlerausgabe nicht nochmals kürzen; bei Bedarf das vorhandene Protokoll lesen,
statt Tests allein zur Wiederherstellung von Details neu auszuführen.

## Änderungsnachweis

Jede fachliche Änderung erhält nach dem [Änderungs-Workflow](../changes/README.md) eine eigene Spec mit RED-, GREEN- und
REFACTOR-Nachweis. Vor einem Commit wird die geänderte Anwendung lokal im Browser geprüft; Browser, Ablauf und Ergebnis stehen in der
Spec. Commits erfolgen nur bei grüner aktuell verpflichtender Suite.
