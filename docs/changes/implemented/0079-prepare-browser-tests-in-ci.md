## Browsergestützte Unit-Tests in CI zuverlässig vorbereiten

## Ziel und Umfang

Die isolierten NotebookLM-Oberflächentests starten in CI und im Pages-Build mit dem zur festgeschriebenen Playwright-Version gehörenden Chromium. Browser und Systemabhängigkeiten stehen vor dem ersten browsergestützten Unit-Lauf bereit. Ein langsamer Browserstart erhält ein begrenztes, passendes Hook-Zeitbudget.

Betroffen sind beide GitHub-Workflows, der Browserstart in `tests/tooling/notebooklm-podcasts.test.mjs` und eine Regression unter `tests/quality/`. Keine Produktänderung, keine fachliche Vertikale und keine neue Abhängigkeit. Die echte NotebookLM-Automatisierung samt lokalem Google-Chrome-Profil bleibt unverändert.

## Befund, Entscheidungen und Grenzen

- CI meldet einen vorzeitig abgebrochenen Browserstart-Hook; die sieben Oberflächentests beginnen dadurch nicht. Keine fehlgeschlagene fachliche Assertion. Die genaue Ursache der Startverzögerung lässt sich aus dem gelieferten Ausschnitt nicht feststellen.
- Der Unit-Test startet bislang systemweites Chrome; CI installiert Playwright-Chromium erst nach den Unit-Tests, der Pages-Build gar nicht. Die Vorbereitung passt damit nicht zur bereits vorhandenen Browserabhängigkeit der Unit-Suite.
- Tests auf Playwrights standardmäßiges Headless-Chromium umstellen und dessen Installation samt Linux-Abhängigkeiten in beiden Workflows vor die jeweilige Unit-/Check-Stufe setzen. Pro Workflow genau eine Installation; bestehende Audit- und Prüfgates erhalten.
- Der Browserstart bleibt auf 30 Sekunden begrenzt; ausschließlich sein `beforeAll` erhält 45 Sekunden für Start und Hook-Verwaltung. Keine globale Timeout-Erhöhung, kein Überspringen und keine Wiederholungen zur Fehlerkaschierung.
- Primärquellen geprüft: [Playwright CI](https://playwright.dev/docs/ci) verlangt Browser-/Systemvorbereitung vor den Tests; [Browserauswahl](https://playwright.dev/docs/browsers) unterscheidet versioniertes Standard-Chromium und systemweite Markenbrowser. [Vitest hookTimeout](https://vitest.dev/config/hooktimeout) nennt zehn Sekunden Standard im Node-Modus. Linux-CI lässt sich auf diesem Windows-Arbeitsplatz nicht vollständig reproduzieren; lokale Prüfungen und Workflow-Regressionsnachweis getrennt dokumentieren.

## Abnahme

- Beide Workflows installieren Chromium genau einmal vor dem ersten browsergestützten Gate.
- Regression prüft den tatsächlichen Schritt-Ablauf von CI und Pages und schlägt vor der Korrektur nachvollziehbar fehl. Die Konfigurationsprüfung liegt außerhalb des Dokumentationstestbereichs.
- Alle sieben bestehenden Oberflächentests laufen mit Playwright-Chromium; alle fachlichen Assertions bleiben erhalten. Browserstart ist weiter begrenzt.
- Nach dem letzten GREEN genau ein fokussiertes Subagentenreview, danach vollständige Pflichtsuite einschließlich Pages-Workflow-/Basispfadprüfung und lokaler App-Nachweis. Archivierte Specs unverändert lassen.
- Nutzerabnahme und ausdrückliche Commit-/Veröffentlichungsfreigabe bleiben vor Veröffentlichung erforderlich.

## Umsetzung und Nachweise

- Sauberer zugeordneter Worktree, eigener veröffentlichter Story-Branch, Schreibbesitz, fehlende aktive Spec und Gleichstand mit `origin/main` geprüft. CI-Ausschnitt mit den tatsächlichen Workflows und dem Start-Hook abgeglichen. Rohprotokolle bleiben außerhalb von Git.
- RED: neue datengetriebene Workflow-Regressionsprüfung vor der Implementierung mit Silent-Runner ausgeführt: 0 bestanden, 2 fehlgeschlagen, 1,72 Sekunden, Exitcode 1. In CI lag die Browserinstallation hinter dem Unit-Gate; Pages hatte keine entsprechende Installation.
- GREEN: Installation in CI vor das Unit-Gate verschoben und in Pages vor `npm run check` ergänzt. Isolierten Testbrowser auf Standard-Chromium mit 30 Sekunden Startlimit umgestellt; nur der Start-Hook erhält 45 Sekunden. Keine Assertions, Testfälle oder produktiven NotebookLM-Browseroptionen entfernt oder abgeschwächt.
- Gezielter Silent-Lauf für Workflow-Regressionsprüfung und vollständige NotebookLM-Testdatei: 16 bestanden, 3,31 Sekunden, Exitcode 0. Alle sieben bestehenden Oberflächentests liefen mit Playwright-Chromium. Format der geänderten Tests/Workflows vereinheitlicht. Qualitätsstrategie um die bereits für Unit erforderliche Browservorbereitung ergänzt.
- Genau ein fokussiertes Subagentenreview nach dem letzten GREEN durchgeführt: beide Workflows, geänderter Start-Hook, neue Konfigurationsregression, Qualitätsstrategie und aktive Spec gegen den geprüften Basisstand. Ausschließlich lesend, keine Tests durch den Reviewer. Ergebnis: keine belegbaren Findings, Fowler-Smells oder Regelverletzungen; Installationsreihenfolge, begrenzte Zeitbudgets und unveränderte Assertions bestätigt. Keine Korrekturen oder Ablehnungen nötig, keine zweite Runde. Tatsächlicher Linux-CI-Nachweis bleibt vom lokalen Nachweis getrennt.
- Gesamter Arbeitsbaum einschließlich neuer Dateien auf Vertikalgrenze geprüft: keine fachliche Vertikale betroffen, Exitcode 0. Produktcode, produktive Automatisierung, Abhängigkeiten und globale Laufzeitkonfiguration unverändert.
- Abschließende Prüfungen nach Review unter vorhandener Node-Laufzeit 24.19.0: Audit (4,81 Sekunden), Format (3,47), Lint (1,89), Typprüfung (0,78) und Runner-Selbsttests (0,36) erfolgreich, jeweils Exitcode 0. Vollständige Unit-/Komponentensuite: 200 bestanden, 58,31 Sekunden, Exitcode 0; sämtliche NotebookLM-Oberflächenfälle ausgeführt. Inhaltsvalidierung: 35 bestanden, 2,53 Sekunden, Exitcode 0. Architektur (2,67 Sekunden), Lizenzen (0,25), Build einschließlich Artefaktprüfung (1,36), Pages-Workflow-Prüfung (0,31) und Pages-Build mit Basispfad (0,85) erfolgreich, jeweils Exitcode 0.
- Lokaler App-Browsernachweis nach Review: ChatGPT-In-App-Browser unter `http://127.0.0.1:5473/`; vorhandene Themen-/Podcast-Anzeige mit tatsächlichen Titeln, `[DE]`, Laufzeiten 23:00 / 25:28 / 23:44 und den passenden Audio-Artefaktlinks bestätigt. Keine UI- oder Produktänderung.
- Abschließender vollständiger Silent-E2E-Lauf unter Node 24.19.0 auf eigenem Port 4473: 82 Tests auf Desktop- und Smartphone-Chromium bestanden, 62,13 Sekunden, Exitcode 0. Vollständige lokale Pflichtsuite einschließlich Pages-Prüfungen grün; `git diff --check` ohne Befund.
- Lokaler Abschluss erreicht: versionierte Browserwahl, Vorbereitung vor browsergestützten Gates und begrenzter Start-Hook mit Regression abgesichert. Nutzerabnahme sowie ausdrückliche Commit- und Veröffentlichungsfreigabe erfolgt. Remote-Gleichstand und unveränderten geprüften Arbeitsstand vor Archivierung bestätigt; ausschließlich Spec-Nachweise ergänzt. Der tatsächliche Linux-CI-Nachweis ist erst nach Veröffentlichung möglich und wird getrennt vom lokalen Nachweis beurteilt. Keine Tests ausgelassen oder zur Fehlerkaschierung wiederholt, keine globale Timeout-Erhöhung. Spec zur Archivierung abgeschlossen; veröffentlichte Archiv-Specs unverändert. Entwickler-Worktree und dessen lokales `main` bleiben unverändert.
