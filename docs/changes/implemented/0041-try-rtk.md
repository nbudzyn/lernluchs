## RTK ausprobieren
RTK zunächst gezielt für Testläufe und Git-Ausgaben ausprobieren. Dabei prüfen, ob Fehlerdetails und Exitcodes zuverlässig erhalten bleiben, und vergleichen der Ausgabegröße.

Für Codex CLI dokumentiert RTK eine automatische Integration. Ob diese in unserer konkreten Desktop-/PowerShell-Konfiguration greift, müssten wir gesondert prüfen; ein Versuch mit expliziten rtk-Aufrufen wäre deshalb der passende Einstieg. Integrationsdokumentation

Kleiner Praxistest - globale Einrichtung noch nicht.

## Ziel, Grenzen und Entscheidungen

- Explizite Aufrufe einer portablen Windows-Version im temporären Verzeichnis;
  keine globale Installation, PATH-Änderung oder automatische Integration.
- Vergleich erfolgreicher und absichtlich fehlschlagender Vitest- und Git-Aufrufe:
  Exitcodes, erhaltene Fehlerdetails, UTF-8-Ausgabegröße und Laufzeit.
- Keine Änderungen an App, Abhängigkeiten, Prüfskripten oder fachlichen Vertikalen.
- Rohdaten und künstliche Fehlerfälle ausschließlich temporär außerhalb von Git;
  Telemetrie deaktivieren. In dieser Spec nur zusammengefasste Nachweise festhalten.
- Quellenprüfung am 03.10.2026: [RTK](https://github.com/rtk-ai/rtk)
  und [Konfiguration](https://github.com/rtk-ai/rtk/blob/develop/docs/guide/getting-started/configuration.md).
  Die dokumentierte Codex-CLI-Anbindung verwendet explizite Aufrufe über
  Agent-Anweisungen; automatische Umschreibung im Desktop ist nicht nachgewiesen.
- Portable RTK-Binärdatei: Werkzeug für den Versuch, keine neue Projektabhängigkeit.
  Apache-2.0; offizielles Release mit Prüfsummenabgleich verwenden.

## Vorgaben

- [Änderungs-Workflow](../README.md)
- [Dauerhafte Vorgaben](../../governance/durable-rules.md)
- [Qualitätsstrategie](../../quality/verification-strategy.md)

## Risiken und Abnahme

- Kürzung darf Exitcodes nicht verdecken. Fehlerdetails anhand einer temporären,
  reproduzierbaren Fehlermeldung überprüfen; fehlende Details ausdrücklich benennen.
- Ausgabegrößen für identische Befehle vergleichen. Bytewerte sind keine gemessenen
  Modell-Tokenzahlen; kleine Git-Ausgaben können durch RTK auch größer werden.
- Windows-Auflösung von npm/npx sowie lokale Tracking-/Recall-Dateien berücksichtigen.
- Dieser Dokumentations- und Werkzeugversuch löst keine App-E2E-Tests aus.
- Manuelle Prüfung und ausdrückliche Bestätigung vor Archivierung und Commit.

## Umsetzung und Nachweise

### Portable Bereitstellung

- RED: Der gezielte Verfügbarkeitscheck für die portable Binärdatei scheitert
  vor dem Download mit Exitcode 1.
- GREEN: Offizielles Windows-x64-Release RTK 0.51.0 bereitgestellt; SHA-256 des
  ZIPs entspricht dem Digest des offiziellen Release-Assets:
  `1623e9b45d28b15122d69e7314776e1123a804224885ce07e7182fb40080f05c`.
  Versionsaufruf und derselbe Verfügbarkeitscheck bestehen mit Exitcode 0.
- REFACTOR: Keine Installation oder Projektkonfiguration nötig. Explizite
  temporäre Pfade genügen; Binärdatei und Versuchsskripte bleiben außerhalb von Git.
- `RTK_TELEMETRY_DISABLED=1`, `RTK_DB_PATH` und `RTK_RECALL_DB` isolieren
  Telemetrie, Tracking und Wiederherstellung für die Messaufrufe. Ein optionaler
  Hook-Hinweis wird mit `RTK_SUPPRESS_HOOK_WARNING=1` ausgeblendet.

### Ausgabe und Exitcodes

Sechs Vergleichspaare mit identischen Testfällen beziehungsweise Git-Argumenten;
UTF-8-Bytes einschließlich Standardfehler. Vitest 5.0.1, PowerShell unter Windows,
RTK 0.51.0. Die Zeitwerte sind einzelne Beobachtungen, kein Leistungsbenchmark.

| Aufruf | Exitcode direkt / RTK | Bytes direkt / RTK | Reduktion | Laufzeit direkt / RTK |
| --- | --- | --- | --- | --- |
| `git status` | 0 / 0 | 803 / 366 | 54,4 % | 53 / 150 ms |
| `git diff --stat -- src/verticals/topics/topics.ts` | 0 / 0 | 252 / 129 | 48,8 % | 52 / 92 ms |
| `git diff --exit-code -- src/verticals/topics/topics.ts` | 1 / 1 | 5000 / 5000 | 0 % | 50 / 94 ms |
| `git show` mit künstlich unbekannter Revision | 128 / 128 | 56 / 56 | 0 % | 46 / 85 ms |
| Vitest: vorhandene öffentliche Einstiegspunkte, 2 Tests | 0 / 0 | 211 / 179 | 15,2 % | 1191 / 1271 ms |
| Vitest: temporär 1 bestandener und 1 absichtlich fehlschlagender Test | 1 / 1 | 1152 / 177 | 84,6 % | 586 / 552 ms |

Der automatische Vergleich der sechs erwarteten Exitcodes besteht: 6 Paare,
keine Abweichung, Exitcode 0; gesamter Vergleichslauf rund 4,4 s.
Die Vitest-Vergleiche verwenden direkt `node node_modules/vitest/vitest.mjs run`
und dieselben Argumente über `rtk test node node_modules/vitest/vitest.mjs run`.
Kein npm-Skript, Test oder Produktcode wurde dafür geändert.

### Fehlerdetails vollständig wiederherstellen

- RED: Ein gezielter Check der kompakten Fehlerausgabe scheitert mit Exitcode 1.
  Alle sieben verlangten Merkmale fehlen: Fehlermeldung, Sollwert, Istwert,
  konkrete Fundstelle, Testname sowie Anzahl fehlgeschlagener und bestandener Tests.
- GREEN: Den von RTK ausgegebenen Wiederherstellungsverweis mit
  `rtk recall <hash> --full` auflösen. Derselbe Check findet danach alle sieben
  Merkmale und besteht mit Exitcode 0. Die ursprüngliche Fehlermeldung samt
  Soll-/Ist-Diff und Codeausschnitt ist wieder verfügbar.
- REFACTOR: Fehler niemals anhand der Kurzfassung diagnostizieren. Vor dem
  Recall den Exitcode des Testlaufs sichern; der erfolgreiche Recall liefert
  selbst 0 und darf den Test-Exitcode 1 nicht ersetzen.
- Die Rohprotokolle und künstlichen Fehlerdetails bleiben im temporären
  Verzeichnis. In Git werden ausschließlich diese zusammengefassten Nachweise
  geführt. Die behauptete Ersparnis von 84,6 % gilt nur für die unvollständige
  Kurzfassung; für die Fehlerdiagnose muss die vollständige Ausgabe hinzugezählt
  werden. Recall wurde zusätzlich ausgeführt, ohne den Test erneut zu starten.

### Grenze des spezialisierten Vitest-Aufrufs

`rtk vitest run tests/architecture/public-entrypoints.test.ts` liefert Exitcode 0,
aber sein Parser kann die Ausgabe hier nicht auswerten. Vitest schreibt den
JSON-Report in `.vitest/json/output.json`; die Terminalausgabe enthält keine
Testanzahl. Der erzeugte Report wurde ins temporäre Verzeichnis verschoben.
Der spezialisierte Aufruf ist für diesen Projektstand deshalb nicht geeignet.
Die zwei Tests bestehen über den oben verglichenen allgemeinen Test-Aufruf.

## Ergebnis und Abnahme

- Für explizite Git-Status- und Diff-Statistik-Aufrufe ist RTK im Versuch nützlich.
  Bei bereits knappen Testzusammenfassungen ist der Zusatznutzen klein.
- Für fehlschlagende Tests ist RTK nur zusammen mit vollständigem Recall und
  gesichertem ursprünglichem Exitcode mit den Projektregeln vereinbar.
- Keine globale Einrichtung empfohlen oder vorgenommen; automatische
  Desktop-/PowerShell-Integration bleibt ungeprüft und außerhalb dieser Story.
- Keine produktrelevanten Änderungen. Die gezielten Werkzeugprüfungen sind
  bestanden; die vollständige App-Pflichtsuite und Browser-E2E wurden für diesen
  Dokumentationsversuch nicht ausgeführt.
- Manuelle Prüfung und ausdrückliche Freigabe durch den Entwickler erfolgt.
  Der Versuch ist abgeschlossen; für Testaufrufe gilt inzwischen der eigene
  kompakte Runner gemäß Qualitätsstrategie.
