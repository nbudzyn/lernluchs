# IntelliJ beim Speichern mit Prettier formatieren

## Ziel und Grenzen

IntelliJ IDEA formatiert die von `npm run format:check` erfassten Dateien beim
Speichern mit dem im Projekt festgeschriebenen Prettier. Auch „Reformat Code“
verwendet diesen Formatter. Die bestehende Formatierungsvorgabe bleibt erhalten.
Die Einrichtung ist projektbezogen und ohne absolute Benutzerpfade teilbar.
Es werden keine Abhängigkeiten, fachlichen Inhalte oder Tests der App geändert.
Betroffene Vertikalen: keine.

Geltende Vorgaben: [Änderungs-Workflow](../README.md),
[dauerhafte Regeln](../../governance/durable-rules.md) und
[Qualitätsstrategie](../../quality/verification-strategy.md).

## Entscheidungen, Quellen und Risiken

- `.idea/prettier.xml` aktiviert automatische Paketauflösung und Prettier beim
  Speichern. Das Dateimuster entspricht der Formatprüfung, einschließlich MJS,
  CJS, JSON und Workflow-YAML. `.prettierignore` bleibt maßgeblich.
- Eine projektlokale `.prettierrc.json` hält die bereits verwendeten
  Prettier-Standardwerte fest. `.editorconfig` richtet Einrückung und Zeilenenden
  der IDE für diese Dateien daran aus. Exakte Ausgabe entsteht durch Prettier.
- Die bereits lokal aktivierten konkurrierenden Speicheraktionen (IDE-Formatter,
  Importoptimierung und Code-Cleanup) werden in der ignorierten
  `.idea/workspace.xml` deaktiviert; diese persönliche Datei wird nicht geteilt.
- Eine geöffnete IDE kann Einstellungen im Speicher halten. Nach erneutem Öffnen
  des Projekts ist deshalb ein tatsächlicher Speichervorgang manuell zu prüfen.
- Für das Speichern wird ausschließlich die Prettier-Aktion verwendet. Die
  zusätzliche IDE-Aktion „Reformat code → Changed lines“ aktiviert einen
  separaten Bereichsformatter und ist für dieses Projekt zu deaktivieren.
  Auch bei Bearbeitung einzelner Zeilen bleibt die gesamte gespeicherte Datei
  durch Prettier auf die Formatprüfung abgestimmt. Ein erneuter Konfigurationscheck
  prüft die Abwesenheit dieser zusätzlichen Speicheraktion. Die Verzögerung
  kann erst durch einen tatsächlichen Speicherablauf abschließend geprüft werden.
- Primärquellen, geprüft am 03.10.2026:
  [JetBrains Prettier-Dokumentation](https://www.jetbrains.com/help/idea/prettier.html)
  zu Paketauflösung, Dateimustern und Speicheraktion sowie
  [Prettier-Konfiguration](https://prettier.io/docs/configuration) und
  [Optionen](https://prettier.io/docs/options) zu gemeinsamen Regeln.
  [JetBrains Speicheraktionen](https://www.jetbrains.com/help/idea/saving-and-reverting-changes.html)
  unterscheiden „Reformat code“ mit Bereichsauswahl von „Run Prettier“.
  XML-Komponente, Speicherdatei und Optionsnamen wurden zusätzlich am
  installierten Prettier-Plugin von IntelliJ IDEA 2026.2 geprüft.

## Abnahme

- Projektbezogenes Prettier läuft beim Speichern und bei „Reformat Code“.
- Dateimuster deckt die CI-Formatprüfung ab; Markdown, generierte Dateien und
  `package-lock.json` werden dadurch nicht zusätzlich formatiert.
- Prettier erzeugt mit der neuen Konfiguration dieselbe Ausgabe wie zuvor.
- Die übrige Pflichtsuite wird nach der Konfigurationsänderung ausgeführt.
- Nutzer prüft nach erneutem Öffnen des Projekts eine absichtlich falsch
  formatierte TypeScript-Datei durch Speichern und anschließende Formatprüfung.
  Bis zur ausdrücklich bestätigten manuellen Prüfung erfolgt kein Commit.

## RED → GREEN → REFACTOR und Nachweise

- **RED:** Der gezielte Konfigurationscheck vor der Einrichtung endete mit
  Exitcode 1, weil `.idea/prettier.xml` und damit die projektbezogene
  Prettier-Speicheraktion fehlten. Prettier fand zuvor keine Konfiguration.
- **GREEN:** Derselbe Check bestätigt `runOnSave=true` und automatische
  Paketauflösung. Die konkurrierenden lokalen Speicheraktionen sind deaktiviert.
  Der ursprüngliche Abgleich mit Node-Globs ergab dieselben 105 Dateien,
  prüfte jedoch nicht die abweichende IntelliJ-Glob-Syntax. Der korrigierte
  Nachweis mit dem IntelliJ-Parser steht unten. Ein Ausgabe-Vergleich über alle
  105 Dateien bestätigt, dass die
  neue Konfiguration die bisherigen Prettier-Standardwerte beibehält. Ein
  absichtlich unformatierter TypeScript-Beispieltext wird formatiert und besteht
  anschließend `prettier.check`.
- **REFACTOR:** Keine zusätzliche Umstrukturierung nötig. Die Regeln stehen
  zentral in `.prettierrc.json`; der IDE-Code-Stil wird daraus abgeleitet.
- **Pflichtprüfungen:** 186 Unit-/Komponententests, 38 Inhaltsvalidierungen,
  92 Chromium-E2E-Tests (Desktop und Mobil), Lint, Typprüfung, Architekturprüfung
  einschließlich vier Vertikalzählungstests, Lizenzprüfung und Produktionsbuild
  bestanden. Audit: keine Schwachstellen. `git diff --check` bestanden.
  `npm run check` bleibt wegen der bereits vorher bestehenden
  Formatabweichungen in zwölf vom Nutzer geänderten Dateien unvollständig grün.
  Diese Dateien wurden durch die IDE-Einrichtung nicht umformatiert.
- **Manuelle Abnahme:** Erfolgt; Umsetzung und Prüfung durch den Entwickler
  bestätigt. Die Spec ist zur Archivierung freigegeben.

Ein Browserablauf der App prüft diese reine IDE-Einrichtung nicht; der passende
manuelle Ablauf ist die Speicheraktion in IntelliJ.

### Ergänzende Prüfung der Speicheraktionen

- **RED:** Der gezielte Konfigurationscheck bestätigt, dass die zusätzliche
  IDE-Speicheraktion wieder aktiviert war, und schlägt deshalb fehl.
- **GREEN:** Nach Deaktivierung besteht derselbe Check; die separate
  Prettier-Speicheraktion bleibt aktiv. Die Einstellung zur Bereichsauswahl
  bleibt erhalten, wird beim Speichern aber nicht mehr verwendet.
- **REFACTOR:** Keine weitere Konfiguration nötig. Die Anleitung hebt hervor,
  dass allein „Run Prettier“ beim Speichern aktiv sein soll.
- **Gezielte Verifikation:** Lokales Prettier formatiert drei betroffene
  TypeScript-Dateien im Speicher in 173, 11 und 56 ms. Alle drei Ausgaben
  bestehen anschließend `prettier.check`. Die Messung umfasst den Formatter,
  nicht den IntelliJ-Speicherablauf oder die Startzeit des IDE-Sprachdienstes.
- Es wurden ausschließlich die ignorierte lokale IDE-Speicheraktion und die
  Anleitung angepasst. Die App-Prüfungen oben sind die Nachweise der vorigen
  Einrichtung; die manuelle Abnahme ist inzwischen erfolgt.

### Korrektur des IntelliJ-Dateimusters

- **RED:** Der installierte IntelliJ-Parser
  `com.intellij.openapi.util.GlobUtilKt.getPathMatcher` lehnt das ursprüngliche
  Muster wegen verschachtelter Alternativgruppen ab. Ein erfolgreicher
  Node-Glob-Abgleich genügt für die IDE-Syntax nicht.
- **Entscheidung:** TS, TSX und Root-Dateiendungen werden als einzelne
  Alternativen in einer flachen Gruppe aufgeführt. Dasselbe lesbare Muster
  steht in `.idea/prettier.xml`, `.editorconfig` und der Anleitung.
- **GREEN:** Derselbe Prüfaufruf mit dem installierten IntelliJ-Parser akzeptiert
  das flache Muster, erfasst alle 105 CI-Dateien (auch direkt unter `src`) und
  schließt negative Beispiele aus `docs`, `.idea`, `dist` und unpassende
  Dateiendungen aus. Prettier erzeugt für alle 105 Dateien unveränderte Ausgabe.
- **REFACTOR:** Die flache Liste bleibt zur Kompatibilität mit beiden Parsern
  ausgeschrieben; keine zusätzlichen Werkzeuge oder Abhängigkeiten.
- **Erneute Pflichtprüfungen:** 186 Unit-/Komponententests, 38 Inhaltsvalidierungen,
  92 E2E-Tests, Lint, Typprüfung, Architektur und vier Vertikalzählungstests,
  Lizenzprüfung und Build bestanden. Audit ohne Schwachstellen;
  `git diff --check` bestanden. Die Formatprüfung meldet weiterhin die zwölf
  schon vorhandenen Abweichungen; die Pflichtsuite ist deshalb nicht vollständig
  grün. Kein Commit.
- Die manuelle Abnahme der tatsächlichen Übernahme im Einstellungsdialog und
  der Speicheraktion ist erfolgt.

## Abschluss

Umsetzung und Prüfung sind durch den Entwickler bestätigt; Archivierung erfolgt.
Die oben dokumentierten Formatabweichungen beschreiben den damaligen Prüfstand.
Für diese reine Archivierung wurden keine App-Prüfungen erneut ausgeführt.
