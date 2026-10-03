# Tests mit knapper Erfolgsausgabe ausführen

## Auftrag und Abnahme

Ein eigener Runner ruft Unit-/Komponenten- und E2E-Tests auf. Bei Erfolg erscheint
eine knappe Meldung mit Anzahl, Laufzeit und Exitcode; Fehler behalten ihre
vollständigen relevanten Details. Einzelne Dateien, einzelne Testnamen, sämtliche
Tests einer Vertikale und sämtliche Tests eines Typs sind auswählbar.
Die verbindlichen Vorgaben erklären die Aufrufe.

Für beide Testarten werden Erfolg, ein einfacher Fehler und ein schwieriger
Fehler manuell durch tatsächliche Testläufe geprüft. Eine Ergebnistabelle nennt
Ausgabegrößen, erhaltene Informationen und die Anzahl notwendiger Läufe.

## Entscheidungen, Grenzen und Risiken

- Ein gemeinsamer Node-Runner ohne neue Abhängigkeiten; ausschließlich die bereits
  installierten lokalen Vitest-/Playwright-Binärdateien, keine Shell oder Downloads.
- Strukturierte JSON-Berichte liefern die Statistik. Parallel wird die normale
  menschlich lesbare Ausgabe lokal aufgezeichnet. Bekannte Erfolgszeilen werden
  entfernt; unbekannte Fehlerausgaben bleiben vollständig sichtbar.
- Rohprotokolle und künstliche Fehlerfälle liegen außerhalb des Repositorys.
  Der Runner startet Tests genau einmal und führt keine eigene Wiederholung aus.
- Testfehler, Import-/Setupfehler, unhandled Errors, fehlende oder ungültige
  Berichte sowie übersprungene und flaky Tests dürfen nicht als vollständig
  bestandener Lauf erscheinen. Native Playwright-Retries bleiben sichtbar.
- Exitcodes werden unverändert weitergegeben. Ein erfolgreicher Testprozess mit
  unbrauchbarem Bericht führt zu einem Runnerfehler, statt einen Erfolg zu erfinden.
- Die manuelle Messung vergleicht die Ausgabe aus demselben Prozess vor und nach
  Kürzung. Bytes sind eine belegbare Annäherung an Ausgabetokens; eine Aussage zum
  gesamten Modellverbrauch wird daraus nicht abgeleitet.
- Keine App- oder Inhaltsänderungen, keine fachliche Vertikale betroffen.

## Vorgaben

- [Änderungs-Workflow](../README.md)
- [Dauerhafte Vorgaben](../../governance/durable-rules.md)
- [Qualitätsstrategie](../../quality/verification-strategy.md)

## Prüfplan

- RED → GREEN → REFACTOR für Argumentauswahl, Berichtauswertung, Fehlerausgabe
  und unveränderte Exitcodes; aussagekräftige Node-Tests für den Runner.
- Manuelle Vitest-Fälle: erfolgreicher Komponentenlauf, Soll-/Ist-Abweichung,
  unhandled Rejection nach einem bestandenen Test.
- Manuelle Playwright-Fälle: erfolgreicher Browserlauf, Locator-/Textabweichung,
  Importfehler vor der Testausführung.
- Auswahl einzelner Tests sowie Vertikal- und Gesamtläufe verifizieren.
- Nach der letzten Änderung vollständige Pflichtsuite, E2E und Audit.
- Manuelle Bestätigung durch den Entwickler bleibt vor Commit und Archivierung
  erforderlich.

## Umsetzung und Nachweise

- Gemeinsamer Runner `scripts/test-runner.mjs`; npm-Aliase `test:unit` und
  `test:e2e`, Inhaltsvalidierung und CI verwenden ihn. `test:runner` gehört zur
  Pflichtsuite. Auswahl per Datei, nativem Namensfilter und `--vertical`.
- Vorgaben in AGENTS.md, dauerhaften Regeln und Qualitätsstrategie ergänzt.
- Pro Lauf genau ein gestarteter Testprozess. Rohtext wird fortlaufend außerhalb
  von Git gespeichert; strukturierter Bericht und native Exitcodes entscheiden
  über den Status. Fehlende/widersprüchliche Berichte bei Exitcode 0 scheitern
  mit Exitcode 2. Flaky-, Skip-, Setup- und unhandled-Fehler bleiben erkennbar.
- RED: Runner-Selbsttests scheiterten zunächst am fehlenden Runner (Exitcode 1).
  GREEN: zehn Selbsttests bestanden. Ein zusätzlicher RED-Test zeigte, dass
  farbige Erfolgszeilen zunächst erhalten blieben (zehn bestanden, einer
  fehlgeschlagen, Exitcode 1). GREEN/REFACTOR: elf Selbsttests bestanden nach
  Entfernen der Farbsteuerzeichen; unvertraute und lange Fehler bleiben vollständig.

### Sechs tatsächliche manuelle Probeläufe

Isolierte Vitest-/React-/Testing-Library-Fälle und echte Chromium-Läufe nutzen
temporäre Fixtures außerhalb von Git. Die erste Runde bestätigte die erwarteten
Exitcodes und Fehlerdetails. Nach der Farbkorrektur und fortlaufenden
Logaufzeichnung wurde jeder Fall genau einmal wiederholt. Beide Runden starten
je Fall genau einen Testprozess; keine Wiederholung zur Wiederherstellung von
Fehlerdetails. Eine zunächst zu strenge Prüferwartung beim Importfehler wurde
berichtigt: Playwright nennt dort die Datei ohne Zeilennummer.

Die Tabelle zeigt die endgültige Runde. Vergleichsbasis ist die normale
Testausgabe desselben Prozesses ohne Farbsteuerzeichen und ohne die zusätzliche
JSON-Dateipfad-Meldung. Die Runner-Ausgabe enthält Zusammenfassung und bei
Fehlern den Rohprotokollpfad. Dadurch zählt selbst erzeugter Reporteraufwand
nicht als Ersparnis. Bytes sind eine Näherung für Ausgabetokens, keine Messung
der Gesamttokens des Chats.

| Fall | Exitcode | Normale Ausgabe → Runner (Bytes) | Änderung | Erhaltene Informationen | Tatsächliche Läufe |
| --- | --- | --- | --- | --- | --- |
| Unit / Komponenten: GUT | 0 | 308 → 55 | 82,1 % weniger | Zwei bestandene Tests, Zeit, Exitcode | 2 |
| Unit / Komponenten: einfacher Fehler | 1 | 966 → 1.063 | 10,0 % mehr | Soll/Ist, Assertion, Konsolenkontext, Datei/Zeile | 2 |
| Unit / Komponenten: tricky, unhandled Rejection nach bestandener Assertion | 1 | 1.434 → 1.478 | 3,1 % mehr | Unhandled Rejection, Stack, Herkunft, letzter Test; trotz bestandener Assertion FAIL | 2 |
| E2E: GUT | 0 | 271 → 42 | 84,5 % weniger | Ein bestandener Browser-Test, Zeit, Exitcode | 2 |
| E2E: einfacher Fehler | 1 | 2.325 → 2.489 | 7,1 % mehr | Locator, Soll/Ist, Timeout, Call log, Quellstelle, Error-Context-Pfad, Konsolenkontext | 2 |
| E2E: tricky, Importfehler vor Teststart | 1 | 476 → 728 | 52,9 % mehr | Fehlendes Modul, importierende Datei, keine ausgeführten Tests, native Zusatzdiagnose | 2 |

Alle erwarteten Diagnose-Markierungen sind vorhanden. Zusätzlich wurde der
gesamte Diagnoseblock ab der ersten Fehlermeldung mit dem normalisierten
Rohprotokoll verglichen: in allen vier Fehlerfällen vollständig erhalten.
Fixture-Zähler bestätigen insgesamt sechs Unit-Dateiausführungen und vier
Browser-Testausführungen über beide Runden; die zwei Importfehler stoppen vor
dem Teststart. Die Selbsttests prüfen außerdem flaky E2E-Berichte, reine
Skip-Läufe, ungültige Berichte, unveränderte Prozessfehler, sichere Filter und
unbekannte Fehlerausgaben mit mehr als 120.000 Zeichen.

### Auswahl, Gesamtläufe und Pflichtsuite

| Prüfung | Ergebnis | Läufe / Wiederholungsgrund |
| --- | --- | --- |
| Unit-Datei plus `-t "provides audio sources"` | 1 bestanden, 20 übersprungen; Exitcode 0 | 1 gezielter Auswahlnachweis |
| Unit `--vertical topics` | 83 bestanden; Exitcode 0 | 1 gezielter Auswahlnachweis |
| E2E-Datei plus `--grep "filters immediately" --project=desktop-chromium` | 1 bestanden; Exitcode 0 | 1 gezielter Auswahlnachweis |
| E2E `--vertical topics` | 30 bestanden; Exitcode 0 | 1 gezielter Auswahlnachweis |
| Alle Unit-/Komponententests | 191 bestanden; Exitcode 0; 4.003 → 57 Bytes (98,6 % weniger) | 2 im Rahmen der Pflichtsuite; zweiter Lauf nach CI-Umstellung |
| Inhaltsvalidierung | 38 bestanden; Exitcode 0; 781 → 56 Bytes (92,8 % weniger) | Bestandteil beider Pflichtsuite-Läufe |
| Alle E2E-Tests | 96 bestanden; 15,82 s; Exitcode 0; 15.445 → 44 Bytes (99,7 % weniger) | 1; nachher nur CI-Aufruf und Dokumentation geändert |
| Audit | 0 Schwachstellen; Exitcode 0 | 1 |

Die Auswahlprüfungen überlappen absichtlich mit den Gesamtläufen; damit werden
die geforderten Aufrufarten tatsächlich ausgeführt. Der Runner startet dafür
keine zusätzlichen Wiederholungen. Die vollständige Pflichtsuite besteht aus
Format, Lint, Typen, elf Runner-Selbsttests, 191 Unit-/Komponententests,
38 Inhaltsprüfungen, Architektur einschließlich vier Scope-Selbsttests,
Lizenzen und Produktionsbuild. Beide vollständigen Pflichtsuite-Läufe grün:
23,80 s vor und 16,82 s nach der CI-Umstellung, jeweils Exitcode 0.
Der abschließende Lauf umfasst auch die Formatprüfung des geänderten CI-Workflows.
Die Diff-Prüfung der geänderten Vorgaben, npm-Aufrufe und CI-Datei meldet keine
Whitespace-Fehler (Exitcode 0). Die Änderung der CI-Aufrufe betrifft weder den
bereits geprüften Runner noch die Anwendung; E2E und Audit wurden danach nicht
erneut ausgeführt.

Die beiden großen Gesamtläufe sparen zusammen rund 99,5 % Testausgabe.
Bei kurzen Fehlern kann die Ausgabe wegen Zusammenfassung und Logpfad wachsen;
eine pauschale Ersparnis für Fehler oder den gesamten Chat wird nicht behauptet.
Keine neue Abhängigkeit, keine Änderung an App oder Inhalten. Manuelle Prüfung
und ausdrückliche Freigabe durch den Entwickler erfolgt. Der zuletzt gemeinsam
mit der Testzusammenführung geprüfte Stand ist vollständig grün: 131 Unit-/
Komponententests, 30 Inhaltsprüfungen und 64 E2E-Fälle; Runner-Selbsttests und
alle weiteren Pflichtprüfungen bestanden. Audit ohne bekannte Schwachstellen.
Browserablauf unmittelbar vor dem Commit erneut erfolgreich geprüft; der
Nachweis steht in der Spec zur Zusammenführung der Lerndaten.
