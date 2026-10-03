# Thema löschen: "Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen"

Es gibt ein Thema "Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen". Lösch dieses Thema. Lösche auch die Fragen zu diesem
Thema und Quellen zu diesem Thema. Entferne das Thema aus den Lernpfaden.

Falls ein User das Thema bereits gelernt hat (oder noch nicht gelernt hat - egal) soll die Anwendung nicht abstürzen, sondern das Thema
einfach ignorieren.

## Ziel, Grenzen und Entscheidungen

- Betroffene Vertikalen: Themen und Lernchecks; App-Integrationstests bei Bedarf.
- Das Thema mit ID `code-navigation-with-symbols-and-references`, seine sechs Quellen, sein Fragenpool und sämtliche Lernpfad-Zuordnungen entfallen vollständig.
- Vorhandene lokale Lernstandseinträge bleiben unverändert. Unbekannte IDs werden wie bisher ignoriert; andere gelernte Themen bleiben sichtbar und nutzbar.
- Keine Änderungen am Speicherformat, keine Abhängigkeiten, keine Zusammenführung anderer Datenbestände.
- Quellenprüfung: reine Entfernung vorhandener Inhalte, keine neuen fachlichen Aussagen oder extern zu prüfenden Quellen.

## Vorgaben

- [Änderungs-Workflow](../README.md)
- [Dauerhafte Vorgaben](../../governance/durable-rules.md)
- [Vertikalen und Grenzen](../../architecture/verticals-and-boundaries.md)
- [Qualitätsstrategie](../../quality/verification-strategy.md)
- [Produktstand](../../product/vision-and-scope.md)

## Risiken und Abnahme

- Veraltete Mengen- und Reihenfolgeerwartungen in bestehenden Tests müssen dem verbleibenden Bestand entsprechen.
- Katalog und alle Lernpfade enthalten ausschließlich die 45 verbleibenden Themen; für das entfernte Thema gibt es keine Fragen und keine Quellen mehr.
- App- und Browsertests prüfen sowohl fehlenden als auch vorhandenen Lernstand für die entfernte ID sowie den Erhalt eines anderen gelernten Themas über Reload und die Nutzbarkeit eines verbleibenden Lernchecks.
- Lokaler Browserablauf: mit alter gelernter ID laden, Themenliste und verbleibenden Lerncheck öffnen, abbrechen und neu laden.
- Vor dem Commit: vollständig grüne Pflichtsuite, lokaler Browsernachweis und ausdrücklich bestätigte manuelle Prüfung durch den Entwickler.

## Umsetzung und Nachweise

### Entfernung und Umgang mit bestehendem Lernstand

- RED: `npm test -- --run tests/app/removedTopic.test.tsx` scheiterte mit drei fachlichen Fehlern: Die entfernte ID war noch im Katalog enthalten und das Thema blieb mit und ohne gespeicherten Lernstand sichtbar.
- GREEN: Themenblock mit sechs Quellen, 25 Fragen mit ihren exklusiven Quellenkonstanten und beide Lernpfad-Zuordnungen entfernt. Regressionstests bestehen; bestehende Erwartungen an Anzahl und Reihenfolge wurden angepasst.
- REFACTOR: Bestehende Datendateien und öffentliche Verträge bleiben erhalten. Der vorhandene Umgang mit unbekannten Lernstand-IDs genügt; zusätzliche Speicher- oder Filterlogik ist nicht erforderlich.
- `npm run check`: grün; 30 Testdateien mit 187 Tests, Inhaltsvalidierung mit 38 Tests, Architekturprüfung einschließlich vier Vertikalzählungstests, Format, Lint, Typen, Lizenzen und Produktionsbuild erfolgreich. Unit-/Komponentensuite: 6,84 s; Build: 141 ms.
- `npm audit --audit-level=high`: grün, keine bekannten Schwachstellen.
- Lokaler Browsercheck im Codex In-app Browser: 45 Themen, entferntes Thema fehlt; bestehende Gelernt-Markierungen sichtbar, verbleibender Lerncheck gestartet und abgebrochen, Themenliste nach Reload weiter nutzbar. Die Varianten der entfernten ID im gespeicherten Lernstand werden zusätzlich automatisiert auf Desktop und Mobilgeräten geprüft.
- Produktstand auf 45 Themen aktualisiert und das Verhalten bei veraltetem Lernstand dokumentiert.

- `npm run test:e2e -- --reporter=dot`: grün, 96 Chromium-E2E-Tests auf Desktop und Mobilgeräten in 22,6 s. Die vier neuen Browserfälle prüfen die entfernte ID mit und ohne gespeichertes Bestehen, den Erhalt eines anderen gelernten Themas über Reload und einen verbleibenden Lerncheck.
- `git diff --check`: grün. Prüfung des Arbeitsbaums mit der vorhandenen Vertikalzählung: ausschließlich `learning-checks` und `topics` betroffen.

Manuelle Abnahme durch den Entwickler erfolgt; Umsetzung und Prüfung bestätigt.
Die Spec ist zur Archivierung freigegeben. Für diese reine Archivierung wurden keine App-Prüfungen erneut ausgeführt.
