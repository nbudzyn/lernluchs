# Qualitäts- und Verifikationsstrategie

## Derzeit ausgeführte CI-Prüfungen

Die CI installiert für Pull Requests und Pushes auf `main` die festgeschriebenen npm-Abhängigkeiten und prüft:

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

Bei Push auf `main` baut der GitHub-Pages-Workflow mit `npm run check`, prüft den
Pages-Basispfad und lädt nur `dist/` hoch. `npm run check` umfasst Punkte 1 bis 8.
Der Pages-Build prüft bei Push auf `main` vor dem Hochladen auch die Commitgrenze.
Browser-E2E und Audit laufen separat und sind keine Voraussetzung für den Pages-Deploy-Job.

## Prüfumfang und Nachweise

- Prüfe während der Umsetzung die betroffenen Bereiche. Führe die vollständige
  Pflichtsuite nach der letzten produktrelevanten Änderung und vor dem Commit aus.
  Produktrelevant: Code, Tests, Laufzeitinhalte, App-Konfiguration, Abhängigkeiten
  und Prüfskripte. Pflichtumfang: [CI-Prüfungen](#derzeit-ausgeführte-ci-prüfungen).
- Wiederhole bestandene Prüfungen nur bei relevanter Änderung oder unklarem Stand.
  Grüne Nachweise gelten auch für den Commit, solange der geprüfte Stand eindeutig
  und für die Prüfung unverändert ist. Reine Spec-Nachweise und deren Archivierung
  entwerten sie nicht.
- Prüfe reine Dokumentations- oder IDE-Änderungen passend zum Inhalt, ohne
  App-E2E-Tests. Reine Dokumentationsänderungen erfordern keine manuelle Browserprüfung.
- Prüfe bei produktrelevanten Änderungen den geänderten Ablauf spätestens
  unmittelbar vor dem Commit lokal im Browser. Lege vorher einen für die Story
  aussagekräftigen Ablauf fest; Desktop- und Mobiltests prüfen die übrige Breite.
  Halte Browser, Ablauf und Ergebnis in der Spec fest.
- Automatisierte Prüfungen ersetzen nicht die ausdrückliche manuelle
  Commit-Freigabe gemäß [AGENTS.md](../../AGENTS.md#nicht-verhandelbar).

## Testorganisation

Bündle Unit-Tests für `X.ts` in `X.test.ts`, Komponententests für `X.tsx` in
`X.test.tsx` und E2E-Tests je Nutzerablauf oder Funktion (etwa `learning-check.spec.ts`).
Prüfe dieselbe Anforderung mit verschiedenen Daten in einem Test über alle
betreffenden Datensätze. Unterschiedliche Anforderungen behalten eigene Tests.
Fehler nennen Datenkennungen und verletzte Regeln. Prüfe unabhängige Datensätze
auch nach Fehlern weiter, etwa mit Vitest-Soft-Assertions oder E2E-Fehlersammlung.
Prüfe vor neuen Tests in RED zuerst, ob ein bestehender Test erweiterbar oder verallgemeinerbar ist.
Neue Tests nur für bisher nicht abgedeckte, eigenständige Anforderungen anlegen.

## Lokale Testaufrufe und Ausgabe

**Jeder Unit-/Komponenten- und E2E-Einmallauf verwendet verbindlich die
Silent-Runner aus [AGENTS.md](../../AGENTS.md#prüfaufwand-begrenzen).**
Sie rufen `scripts/test-runner.mjs` auf.
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
Dateifilter wählen Testdateinamen, Namensfilter sind native reguläre Ausdrücke.
Runner-Reporter und Einmallauf nicht überschreiben. `npm test` bleibt für
ausdrücklich gewünschte interaktive Vitest-Watch-Sitzungen verfügbar.

Erfolg: eine Zeile mit Anzahl, Laufzeit und Exitcode. Übersprungene Tests separat
zählen; bei ausschließlich übersprungenen Tests `SKIP` melden. Flaky E2E-Läufe
melden `WARN` mit Diagnose, auch nach erfolgreichen nativen Playwright-Retries.
Der Runner wiederholt keine Tests. Fehler behalten Diagnose, Soll/Ist, Stack,
Quellstellen und Artefaktpfade. Nur erkannte Erfolgs-Fortschrittszeilen und
Farbsteuerzeichen entfernen; unbekannte Ausgaben nicht abschneiden.

Native Exitcodes erhalten. Bei Exitcode 0 und fehlendem, ungültigem, leerem oder
widersprüchlichem Bericht meldet der Runner Exitcode 2. Prozessfehler bleiben
Fehler, auch bei bestandenen Einzeltests.

Jeder Lauf speichert Rohtext, stdout/stderr, JSON-Bericht und Größenmessung in einem
neuen Betriebssystem-Temp-Verzeichnis. Fehler nennen den Rohprotokollpfad.
`--log-dir ABSOLUTER_PFAD` kann für Messungen ein neues Verzeichnis außerhalb des
Repositorys festlegen. Protokolle nicht einchecken oder an externe Dienste senden.
Fehlerausgabe nicht nochmals kürzen. Lies bei Bedarf vorhandene Protokolle;
Tests nicht allein zur Wiederherstellung von Details erneut ausführen.

### Lange Browserläufe diagnostizieren

Der Runner meldet das Ergebnis erst nach Prozessende. Eine stille Konsole
belegt keinen Stillstand. Bündle Statusabfragen mit sinnvollen Warteabständen.
Prüfe bei ungewöhnlich langer Laufzeit früh das Temp-Protokoll des laufenden
Prozesses. Testanzahl und letzte Aktualisierung unterscheiden laufende Tests
von einem hängenden Prozessabschluss.

Ermittle zunächst lokal nur Kennzahlen. Gib eine kompakte Zeile aus: erwartete,
abgeschlossene und fehlgeschlagene Tests, letzte Aktualisierung und vorhandener
Abschlussbericht. Zähle Reporter-Statusmarker; „failed“ in Testtiteln ist kein Fehler.
Keine erfolgreichen Testzeilen, vollständigen Protokolle oder unveränderten
Zwischenstände ausgeben. Lies Details nur zur konkreten offenen Frage.
Überlasse Fehlerdetails dem Runner-Abschluss. Fehlt er dauerhaft, gib nur
betroffene Fehlerblöcke vollständig aus. Bereits erhaltene Details nicht erneut ausgeben.

Fehlt nach abgeschlossenen Testfällen der Bericht, prüfe gezielt Kindprozesse
und Testserver. Beende einen festhängenden Testserver nur bei eindeutiger Zuordnung
zum eigenen Lauf und bestätigtem Ende der Testfälle. Lass danach den ursprünglichen
Runner abschließen. Sein Bericht und Exitcode bestimmen den Prüfstatus;
erfolgreiche Einzelzeilen sind kein vollständiger grüner Nachweis. Wiederhole
Tests nicht allein wegen eines hängenden Prozessabschlusses.

## Änderungsnachweis

Spec-Aufbau, TDD und Abschluss regelt der [Änderungs-Workflow](../changes/README.md).
