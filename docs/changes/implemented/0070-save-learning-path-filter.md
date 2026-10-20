## Lernpfade-Filter speichern
Der Lernpfade-Filter soll gespeichert werden.
- Speichern bei jeder Änderung
- Speichern in derselben Technologie wie die gelernt-Häkchen bei den Themen
  - Die beiden Dinge sollen sich nicht beeinflussen
- Nicht gefiltert und "alle ausgewählt" ist ein Unterschied.
- Ist nichts gespeichert, gilt das als "nicht gefiltert"
- Sollte der Filter einen Lernpfad enthalten, der nicht (mehr) existiert, wird der Lernpfad nicht berücksichtigt.
  - Enthält der Filter ausschließlich Lernpfade, die nicht (mehr) existieren, gilt der Filter als "nicht gefiltert"

## Ziel und Abgrenzung

Die Lernpfadauswahl bleibt über Neuladen und spätere Besuche erhalten.
Vertikale: `topics`; keine neue Abhängigkeit, keine Inhaltsänderung und keine Synchronisation.
Schnellfilter, geöffnetes Thema und Ansichten bleiben flüchtig.

## Entscheidungen, Risiken und Abnahme

- Eigener versionierter localStorage-Eintrag `lernluchs.learning-path-filter.v1`, getrennt von Lernstand und Listenansicht.
- Gespeichert werden ausdrücklich gewählte Pfadnamen, keine Arraypositionen. Die bestehenden Namen sind die Katalogkennung; Umbenennen zählt als Entfernen und Neuanlegen. Eine spätere Umstellung auf dauerhafte IDs benötigt eine Migration.
- Auch Themenicon und Einzelpfad-Auswahl speichern ihre resultierende Pfadmenge. Der Themenbezug selbst bleibt flüchtig.
- Jede Auswahländerung und jedes Zurücksetzen wird gespeichert. Lesen allein schreibt nichts.
- Keine Auswahl und alle ausgewählten Pfade bleiben unterscheidbar, auch nach Schließen und Neuladen. Die bisherige Darstellung aller Themen bei voller Auswahl bleibt erhalten.
- Unbekannte Pfade ignorieren; ausschließlich unbekannte, fehlende oder beschädigte Daten ergeben keine Filterung. Fehler beim Speicherzugriff dürfen die Bedienung nicht verhindern; fehlgeschlagenes Speichern wird sichtbar gemeldet.
- Lernstand und Listenpräferenz dürfen weder beim Laden noch beim Speichern geändert werden.
- Browserabnahme: Pfade auswählen, neu laden, Auswahl prüfen; alle auswählen und neu laden; zurücksetzen und neu laden. Desktop/Mobil durch E2E abdecken.

## Umsetzung und Nachweise

- RED: Gezielter Komponentenlauf: 4 erwartete Fehler (fehlende Schreibvorgänge/Wiederherstellung/Fehlermeldung und verlorene volle Auswahl), 37 übersprungen, Exitcode 1; 29,33 s.
- GREEN: Komponentendatei vollständig grün: 41 Tests, Exitcode 0; 8,41 s. Betroffene E2E-Datei: 16 Tests (Desktop/Mobil), Exitcode 0; 15,09 s.
- Genau ein fokussiertes Subagentenreview gegen Basis `8cc11bc`: Diff, neues Speichermodul, Spec, Tests und Dokumentation anhand des Reviewvertrags und Fowler-Prüfrasters gelesen. Keine belegbaren Funde oder Empfehlungen; keine Korrekturen erforderlich. Reviewer führte keine Tests aus.
- Pflichtcheck entdeckte eine nicht unterstützte Testing-Library-Option im neuen Test; entfernt. Abschließender `npm run check` grün: Format, Lint, Typprüfung, Runner-Selbsttests, 174 Unit-/Komponententests (57,02 s), Inhaltsvalidierung 28 Tests (2,05 s), Architektur, Lizenzen und Produktionsbuild; Exitcode 0.
- `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0.
- Lokaler Browsernachweis: Chrome unter `http://127.0.0.1:5273/`, eigener isolierter Kontext. Zwei Pfade gewählt → Neuladen → zwei Häkchen und passende Themenmenge; alle 14 gewählt → Neuladen → alle 14 Häkchen, alle 48 Themen; Zurücksetzen → Neuladen → 0 Häkchen, alle 48 Themen. Ergebnis korrekt. Keine persönlichen Browserdaten verwendet.
- Erster vollständiger E2E-Lauf: 80 bestanden, 2 Fehler, Exitcode 1; 64,38 s. Ursache: unabhängige Katalogfälle erwarteten implizit einen Filterreset durch erneuten Seitenaufruf. Fallvorbereitung setzt nun ausschließlich den Filtereintrag vor jedem Seitenaufruf zurück. Produktverhalten unverändert; keine zweite Reviewrunde gemäß Reviewvertrag.
- Vollständige Pflichtsuite nach der letzten Testkorrektur: `npm run check` erneut grün wie oben; vollständige E2E-Suite 82 bestanden (61,02 s), Exitcode 0. Audit bleibt gültig, Abhängigkeiten unverändert. `git diff --check` grün; Änderungen ausschließlich in der fachlichen Vertikale `topics` sowie Dokumentation.
- Manueller Nutzertest erfolgreich bestätigt. Freigabe für Commit und lokale Fast-forward-Integration in `main` erfolgt.
