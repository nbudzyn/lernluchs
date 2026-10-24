# Qualitäts- und Verifikationsstrategie

## Derzeit ausgeführte CI-Prüfungen

CI für Pull Requests und Pushes auf `main`: `npm ci`, unmittelbar danach
`npm audit --audit-level=high`; bei Auditfehler endet der Job vor den weiteren Prüfungen.

Die Unit-Suite enthält isolierte NotebookLM-Oberflächentests mit Playwrights
Chromium. CI und Pages installieren Browser und Systemabhängigkeiten vor dem
ersten Unit-/Check-Lauf mit `npx playwright install --with-deps chromium`.
Lokal muss der passende Browser bereits installiert sein; bei Bedarf
`npx playwright install chromium` vor dem Unit-Lauf ausführen.

1. Prettier für Code, Tests und Konfiguration einschließlich YAML; Markdown ist ausgenommen.
2. Type-Aware-Oxlint; Warnungen lassen das Gate scheitern.
3. TypeScript-Typprüfung.
4. Unit-/Komponententests mit Vitest und Runner-Selbsttests.
5. Themenvalidierung: eindeutige IDs, vollständige Inhalte/Metadaten und HTTPS-Quellen. Vorhandene Fragenpools: mindestens 25 Fragen, genau eine richtige Antwort, Erklärungen und Bindung an Themenquellen.
6. dependency-cruiser, Prüfung statischer Modulverbindungen und Tests öffentlicher Einstiegspunkte, E2E-Ablage und Vertikalzählung.
7. Lizenzprüfung: unbekannte, GPL-, AGPL-, SSPL- und nicht quelloffene Lizenzen scheitern; LGPL/MPL brauchen dokumentierte Einzelfallfreigabe.
8. Produktionsbuild mit Prüfung der erzeugten Dateien.
9. Chromium-E2E auf Desktop und Smartphone, unter anderem Fragenablauf, Ergebnis, Abbruch und Quellenlink-Ausfall.
10. Prüfung jedes neuen Commits: höchstens zwei fachliche Vertikalen unter `src/verticals/`, `tests/verticals/`, `e2e/verticals/`; App/Shared zählen nicht. Umbenennungen zählen alten und neuen Eigentümer.

`npm run check` umfasst Punkte 1–8; Audit, Browser-E2E und Commitgrenze separat prüfen.
Der Pages-Workflow baut mit `npm run check`, prüft den Pages-Basispfad und lädt nur
`dist/` hoch. Bei Push auf `main` prüft er zusätzlich die Commitgrenze.
Audit und Browser-E2E sind keine Voraussetzung des Pages-Deploy-Jobs.

## Prüfumfang und Nachweise

- Während der Umsetzung gezielt prüfen. Vollständige Pflichtsuite nach letzter produktrelevanter Änderung und vor Commit: [CI-Umfang](#derzeit-ausgeführte-ci-prüfungen). Produktrelevant sind Code, Tests, Laufzeitinhalte, App-Konfiguration, Abhängigkeiten und Prüfskripte.
- Nach letztem GREEN genau ein [Subagentenreview](code-review.md); Reviewer führt keine Tests aus. Vorschläge vor abschließenden Prüfungen und Nutzerfreigabe bearbeiten; keine zweite Runde. Reine Dokumentations-Stories benötigen kein Subagentenreview.
- Grüne Nachweise nur bei relevanter Änderung oder unklarem Stand wiederholen. Sie gelten bis zum Commit bei eindeutigem, für die Prüfung unverändertem Stand; reine Spec-Nachweise und Archivierung entwerten sie nicht.
- Geänderte Testeingaben entwerten die betroffenen grünen Nachweise auch bei unverändertem Testcode. Dazu gehören importierte Dokumentation, Fixtures und geprüfte Konfiguration; ein Vergleich nur von Produkt- und Testdateien genügt dann nicht.
- Reine Dokumentations-/IDE-Änderungen inhaltlich passend prüfen, ohne App-E2E. Reine Dokumentationsänderungen benötigen keine Browserprüfung; der Nutzer bestätigt stattdessen die manuelle Dokumentenabnahme.
- Produktrelevante Änderungen spätestens unmittelbar vor Commit lokal im Browser prüfen. Aussagekräftigen Storyablauf vorher festlegen; Desktop-/Mobiltests decken die übrige Breite ab. Browser, Ablauf und Ergebnis in der Spec festhalten. Keine zusätzliche Dokumentenabnahme als Regelschritt für Produktstories.
- Positive manuelle Nutzerabnahme und ausdrückliche Commit-Freigabe gemäß [AGENTS.md](../../AGENTS.md#nicht-verhandelbar) bleiben erforderlich; automatisierte Prüfungen ersetzen sie nicht.

## Dokumentationstests

Bei Dokumentationsänderungen `npm run --silent test:docs` ausführen; weitere
inhaltliche Prüfungen richten sich nach den betroffenen Dokumenten.
Für die Gültigkeit bereits erbrachter Nachweise gilt
[Prüfumfang und Nachweise](#prüfumfang-und-nachweise).
Der Aufruf nutzt den vorhandenen Silent-Runner und wählt `tests/documentation/`.
Diese Tests bleiben auch im vollständigen Unit-Lauf und damit in CI enthalten.

Hier liegen ausschließlich Tests mit Repository-Dokumentation als Prüfgegenstand,
derzeit der Glossartest. Tests von Code, Laufzeitinhalten, Konfiguration oder
Skriptverhalten bleiben bei ihren bisherigen Besitzern, auch wenn sie Rohtext
oder Markdown-Dateinamen verwenden. Der Testbereich ist keine fachliche Vertikale.

## Testorganisation

Unit-Tests für `X.ts` in `X.test.ts`, Komponententests für `X.tsx` in `X.test.tsx`;
E2E je Nutzerablauf/Funktion, etwa `learning-check.spec.ts`.
Vertikaltests importieren eigene Interna, Shared und gemeinsame Testhilfen,
keine andere Vertikale oder App. Fachliche Integrationstests gehören nach
`tests/app` bzw. `e2e/app` und nutzen nur öffentliche Einstiegspunkte
(`index.ts`, für UI-freie Daten/Validierung `data.ts`).
Typabhängigkeiten verwenden statische `import type`-Deklarationen, keine Inline-Typimporte.

`tests/architecture` prüft Strukturregeln und Negativbeispiele; fachliche
Datenregressionen bleiben beim Besitzer. Gemeinsame Testhilfen importieren keine
Vertikalen. Glob-Dateisuche ist für Architekturprüfungen erlaubt.

Dieselbe Anforderung über alle betreffenden Datensätze in einem Test prüfen;
verschiedene Anforderungen behalten eigene Tests. Fehler nennen Datenkennung und
verletzte Regel. Unabhängige Datensätze auch nach Fehlern weiterprüfen, etwa mit
Vitest-Soft-Assertions oder E2E-Fehlersammlung.
Vor neuen RED-Tests prüfen, ob bestehende Tests erweiterbar/verallgemeinerbar sind;
neue Tests nur für bisher nicht abgedeckte eigenständige Anforderungen.

## Lokale Testaufrufe und Ausgabe

**Jeder Unit-/Komponenten- und E2E-Einmallauf verwendet die Silent-Runner aus
[AGENTS.md](../../AGENTS.md#prüfaufwand-begrenzen).** Sie starten den installierten
Testprozess über `scripts/test-runner.mjs` genau einmal; `--silent` entfernt npm-Banner.
Auch `npm run check` nutzt den Runner; dessen Selbsttests gehören zur Pflichtsuite.

| Auswahl | Unit / Komponenten | E2E |
| --- | --- | --- |
| Alle | `npm run --silent test:unit` | `npm run --silent test:e2e` |
| Vertikale | `npm run --silent test:unit -- --vertical topics` | `npm run --silent test:e2e -- --vertical topics` |
| Datei | `npm run --silent test:unit -- tests/verticals/topics/topics.test.ts` | `npm run --silent test:e2e -- e2e/verticals/topics/quick-filter.spec.ts` |
| Testname in Datei | `npm run --silent test:unit -- tests/verticals/topics/topics.test.ts -t "provides audio sources"` | `npm run --silent test:e2e -- e2e/verticals/topics/quick-filter.spec.ts --grep "filters immediately" --project=desktop-chromium` |

Gezielte Aufrufe für alle bestehenden Vertikalen:

| Vertikale | Unit / Komponenten | Vorhandene E2E-Abläufe |
| --- | --- | --- |
| Themen | `npm run --silent test:unit -- --vertical topics` | `npm run --silent test:e2e -- --vertical topics` |
| Hilfe | `npm run --silent test:unit -- --vertical help` | `npm run --silent test:e2e -- --vertical help` |
| Impressum | `npm run --silent test:unit -- --vertical imprint` | `npm run --silent test:e2e -- --vertical imprint` |
| Lernchecks | `npm run --silent test:unit -- --vertical learning-checks` | `npm run --silent test:e2e -- e2e/app/learning-check.spec.ts` |
| Lernstand | `npm run --silent test:unit -- --vertical learning-state` | `npm run --silent test:e2e -- e2e/app/learning-state.spec.ts` |

Lerncheck- und Lernstand-E2E prüfen die App-Komposition und bleiben unter
`e2e/app/`; dafür existieren keine eigenen E2E-Vertikalverzeichnisse.
Weitere übergreifende App-Abläufe bei entsprechendem Änderungsumfang ergänzen.
Für Dokumentation separat `npm run --silent test:docs` verwenden.

Native Filter werden weitergereicht: Dateifilter wählen Dateinamen, Namensfilter
sind reguläre Ausdrücke. Reporter und Einmallauf nicht überschreiben.
`npm test` bleibt für ausdrücklich gewünschte interaktive Watch-Sitzungen.

- Erfolg: eine Zeile mit Anzahl, Laufzeit und Exitcode; übersprungene Tests separat, ausschließlich übersprungen als `SKIP`.
- Flaky E2E: `WARN` mit Diagnose, auch nach erfolgreichen nativen Playwright-Retries. Der Runner selbst wiederholt keine Tests.
- Fehler: Diagnose, Soll/Ist, Stack, Quellstellen und Artefaktpfade vollständig erhalten. Nur erkannte Erfolgs-Fortschrittszeilen und Farbsteuerzeichen entfernen; unbekannte Ausgaben nicht abschneiden.
- Native Exitcodes erhalten. Bei Exitcode 0 ohne gültigen, nichtleeren, widerspruchsfreien Bericht: Exitcode 2. Prozessfehler bleiben Fehler trotz bestandener Einzeltests.

Jeder Lauf speichert Rohtext, stdout/stderr, JSON-Bericht und Größenmessung in
einem neuen Betriebssystem-Temp-Verzeichnis; Fehler nennen den Pfad.
`--log-dir ABSOLUTER_PFAD` erlaubt ein neues Messverzeichnis außerhalb des Repositorys.
Protokolle bleiben lokal, außerhalb von Git und externen Diensten.
Fehlerausgabe nicht nochmals kürzen; vorhandene Protokolle lesen, Tests nicht nur zum Wiederherstellen von Details wiederholen.

### Lange Browserläufe diagnostizieren

Der Runner meldet erst nach Prozessende; stille Ausgabe belegt keinen Stillstand.
Statusabfragen bündeln und mit Abstand ausführen. Bei ungewöhnlicher Dauer früh
das Temp-Protokoll prüfen: Testanzahl und Aktualisierung zeigen Fortschritt oder hängenden Abschluss.

Nur eine kompakte Zeile mit erwarteten, abgeschlossenen, fehlgeschlagenen Tests,
letzter Aktualisierung und vorhandenem Abschlussbericht ausgeben.
Reporter-Statusmarker zählen; „failed“ im Testtitel ist kein Fehler.
Keine Erfolgszeilen, Vollprotokolle oder unveränderten Zwischenstände ausgeben.
Details nur zur offenen Frage lesen; vollständige Fehlerdetails dem Runner-Abschluss
überlassen. Fehlt er dauerhaft, nur betroffene Fehlerblöcke vollständig ausgeben,
bereits erhaltene Details nicht wiederholen.

Nach abgeschlossenen Fällen ohne Bericht Kindprozesse/Testserver prüfen.
Festhängenden Server nur bei eindeutiger Zuordnung zum eigenen Lauf und bestätigtem
Ende der Testfälle beenden; dann ursprünglichen Runner abschließen lassen.
Nur sein Bericht und Exitcode belegen den Prüfstatus, keine Einzelzeilen.
Tests nicht allein wegen hängenden Prozessabschlusses wiederholen.

## Änderungsnachweis

Spec, TDD und Abschluss: [Änderungs-Workflow](../changes/README.md).
