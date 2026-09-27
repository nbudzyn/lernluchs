# Kuratierte Quellen für alle Themen ergänzen (außer Grundlagen-Pfad)

Alle Themen erhalten kuratierte Quellen. Die sechs Themen des Grundlagen-Pfads
bleiben ausgenommen, auch wenn sie in weiteren Lernpfaden vorkommen. Alle anderen
bestehenden Themen gehören dazu, einschließlich des Git-Themas ohne Lernpfad.

Bereits vorhandene Quellen werden je betroffenem Thema anhand der Originalseiten
fachlich geprüft. Fehlende Aspekte erhalten passende Quellen; eine bestehende
Quelle wird nur mit dokumentiertem Grund ersetzt. Falls die Prüfung eine Lücke
oder einen Widerspruch im kurzen Thementext zeigt, wird er gezielt korrigiert.
Die fachlichen Schwerpunkte bleiben getrennt; Textkorrekturen erzeugen möglichst
keine Überschneidung mit anderen Themen.

Es gelten die [Regeln zur Quellenauswahl](../content/source-selection.md).

Außerdem erhalten alle für die Vertikale „Themen“ relevanten Glossarbegriffe
genau eine englische Entsprechung: Fragenpool, Themen, Thema, Lernpfad,
Primärquelle und Sekundärquelle. Betroffene englische Bezeichner werden innerhalb
der Vertikale vereinheitlicht, ohne Fachlogik zu ändern.

Dokumentation nach Umsetzung: Vermerken, dass jedes (auch neue) Thema kuratierte Quellen erhält
gemäß [Regeln zur Quellenauswahl](../content/source-selection.md).

Vertikalen: Themen

## Ziel und Nicht-Ziele

- Für alle zehn bestehenden Themen außerhalb des Grundlagen-Pfads sind die
  Quellen fachlich passend und in der Anwendung sichtbar. Die sechs
  Grundlagenthemen bleiben unverändert.
- Die sechs genannten Glossarbegriffe erhalten jeweils eine englische
  Entsprechung. Bezeichner innerhalb der Vertikale werden daran ausgerichtet.
- Neue Themen, Fragenpools und eine Änderung der Fachlogik gehören nicht dazu.
- Maßgeblich sind die [Regeln zur Quellenauswahl](../../content/source-selection.md).

## Risiken und Abnahme

- **Fachliche Belege:** Für jedes betroffene Thema die vorhandenen und neuen
  Quellen auf den Originalseiten prüfen. Prüftag, gestützte Aspekte,
  Unsicherheiten, bewusste Auslassungen und Gründe für Ersetzungen in dieser
  Spec dokumentieren. Fehlende Aspekte werden belegt; pro Thema bleibt
  mindestens eine Primärquelle und höchstens zehn Quellen.
- **Themengrenzen:** Nur quellenbedingt nötige Textkorrekturen vornehmen und
  die Abgrenzung zu anderen Themen fachlich prüfen. Die Grundlagenthemen
  einschließlich ihrer gemeinsam genutzten Pfadzuordnungen bleiben unverändert.
- **Glossar und Code:** Für jeden der sechs Begriffe genau eine englische
  Entsprechung festlegen und betroffene englische Bezeichner der Themen-Vertikale
  ohne Verhaltensänderung vereinheitlichen.
- **Sichtbarer Nutzen:** Im lokalen Browser Quellen der betroffenen Themen
  öffnen und Herkunftsgruppe, Titel, Sprache sowie Reihenfolge prüfen. Den
  Ablauf mit Browser und Ergebnis hier festhalten.
- **Prüfungen:** Inhaltliche Validierung, betroffene Tests und die vollständige
  Pflichtsuite nach der Implementierung grün ausführen. Vor dem Commit muss der
  Nutzer die Änderung selbst manuell getestet und ausdrücklich bestätigt haben.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Quellen und Inhalte | Offen; vor der Implementierung fachlich aussagekräftige fehlschlagende Tests ausführen und den Grund hier festhalten. |
| GREEN: Quellen und Inhalte | Offen; kleinste Änderung und grüne Prüfungen hier festhalten. |
| RED: Glossar und Bezeichner | Offen; vor der Änderung einen passenden fehlschlagenden Test ausführen und den Grund hier festhalten. |
| GREEN: Glossar und Bezeichner | Offen; grüne Prüfungen hier festhalten. |
| REFACTOR | Offen; nur bei weiterhin grüner Testsuite, danach Pflichtsuite erneut ausführen. |
| Quellenprüfung | Offen; geprüfte Quellen je Thema mit Prüftag, Aspekten, Unsicherheiten, Auslassungen und Ersetzungsgründen dokumentieren. |
| Browserabnahme | Offen; Browser, Ablauf und Ergebnis dokumentieren. |
| Manuelle Prüfung durch den Nutzer | Offen; ausdrückliche positive Bestätigung vor dem Commit dokumentieren. |
