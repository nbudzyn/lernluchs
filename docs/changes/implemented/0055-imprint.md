## Impressum
Mach ein kleines "Impressum", in dem allerdings nur "N. Budzyn" als Autor steht, keine weiteren persönlichen Daten. - Sonst generell wie rechtlich in der EU vorgesehen.

- Auf jeden Fall ein kleiner Hinweis "Inhalte mithilfe von KI erstellt" (o.Ä.).
- Auch ein Hinweis, dass keine Verantwortung für verlinkte Inhalte übernommen wird

Einstieg in das Impressum als ein separater Button (selbst generieren oder Symbol aus einem Zeichensatz, NICHT AUS DEM INTERNET LADEN!) links neben dem Fragezeichen-Symbol für die Hilfe.

Anzeige genau wie die Hilfe. Vor allem auch mit identischer Logik für schmale / breite Bildschirme und identischer Back-Button-Logik.
- Wenn du vollständig separaten Code baust, dann Tests entsprechend duplizieren.
- Wo du Code wiederverwendest / generalisierst, dort entsprechend die Tests jeweils nur einmal.

NEUE VERTIKALE für das Impressum, getrennt von Hilfe und Themen!

Das Impressum soll die Professionalität der Anwendung erhalten, sich in die grafische Designsprache der Anwendung harmonisch einfügen und nach Möglichkeit keine neuen Designelemente oder Design-Strukturen einbauen.
Hinterher unbedingt HILFE und IMPRESSUM vergleich und grafische Konsistenz herstellen.

Vorher dreistufige Abstimmung mit dem Entwickler:
- Refinement / offene Fragen
- Vorschlag für Texte / fachliche Inhalte des Impressums
- Vorschlag für das Design inkl. Vergleich mit dem Design der Hilfe

### Abgestimmtes Refinement

- Drei Abstimmungen abgeschlossen: Umfang, Texte und Design.
- Autor bleibt ausschließlich „N. Budzyn“.
- Die Ansicht zeigt den persönlichen Lernzweck, den freigegebenen KI-Hinweis und den freigegebenen Hinweis zu externen Links.
- Die Projektbezeichnung lautet „Studienprojekt zur persönlichen Fortbildung.“
- Ein selbst gezeichnetes i im Kreis steht unmittelbar links neben der Hilfe. Kreis, Größe und Strichgestaltung entsprechen dem Fragezeichen-Symbol. Buttons, Überschrift, Textzeilen und Trennlinien folgen der Hilfe.
- Gemeinsame Ansichts-, Scroll- und Browser-Rückweglogik liegt in Themen; das Impressum besitzt seine Inhalte und Präsentation getrennt.
- Betroffen sind nur `topics` und die neue Vertikale `imprint`. Keine neuen Abhängigkeiten.

## Ziel und Nicht-Ziele

Das abgestimmte Impressum ist im Browser als eigenständige Ansicht erreichbar. Inhalt und Darstellung folgen dem freigegebenen Text- und Designvorschlag. Keine zusätzlichen persönlichen Angaben, neue Bibliotheken oder Änderungen an Lerninhalten und Lernstand.

## Vertikalen und Architekturentscheidung

`imprint/index.ts` exportiert eine präsentierende Komponente `Imprint` ohne Themen-Daten oder Rückrufvertrag. Impressum importiert weder andere Vertikalen noch Shared oder App. Themen importiert ausschließlich den öffentlichen Impressum-Einstiegspunkt und besitzt wie bei Hilfe Ansicht, Positionierung, Scrollposition und Rückweg.

Die gerichtete Verbindung `topics → imprint` folgt der bestehenden Komposition `topics → help`: Beide ergänzenden Ansichten erscheinen im Themenbrowser. Eine zweite Navigationsimplementierung oder gemeinsame fachliche Präsentation in Shared ist dadurch unnötig. dependency-cruiser und ein verallgemeinerter Architekturtest sichern beide Grenzen. Hilfe wird nicht geändert. Pro Commit sind nur Themen und Impressum betroffen.

## Risiken und Abnahme

- Einstieg per lokal erstelltem i im Kreis links neben Hilfe; Kreis und Symbolgestaltung entsprechen der Hilfe. Beide Buttons sind zugänglich benannt, per Tastatur nutzbar und mindestens 44 × 44 Pixel groß.
- Ansicht enthält ausschließlich den freigegebenen Autor und die abgestimmten Texte.
- Breite Ansicht rechts neben der Liste, schmale Ansicht statt der Liste; gleiche Schwelle von 800 Pixeln wie Hilfe.
- Wechsel von Thema zu Hilfe oder Impressum entfernt die Themenauswahl und erhält Listenansicht, Schnellfilter und Lernpfade.
- „Zur Themenliste“, Browser-Zurück, Scrollwiederherstellung und Größenwechsel verwenden dieselbe Logik wie Hilfe.
- Hilfe bleibt die anfängliche breite Ansicht. Wechsel zwischen Hilfe und Impressum erzeugt keinen zusätzlichen Rückweg.
- Im lokalen Browser Hilfe und Impressum auf breitem und schmalem Bildschirm grafisch vergleichen: Typografie, Textzeilen, Trennlinien, Breite und Buttons.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Einstieg und Grenze | Gezielt verallgemeinerte Komponenten- und Architekturtests: 3 erwartete Fehler, 37 übersprungen; Exitcode 1, 22,94 s. Button „Impressum öffnen“, Vertikale und öffentlicher Themen-Import fehlten. |
| GREEN: Einstieg und Grenze | 3 gezielte Tests bestanden, 37 übersprungen; Exitcode 0, 2,69 s. Gemeinsame Themen-Navigation öffnet Hilfe und Impressum über getrennte öffentliche Einstiegspunkte. |
| RED: Texte | Impressum-Komponententest fand keine der vier abgestimmten Textzeilen; 1 erwarteter Fehler, Exitcode 1, 1,44 s. |
| GREEN: Texte | Alle vier freigegebenen Textzeilen ergänzt; 47 betroffene Komponenten- und Architekturtests bestanden, Exitcode 0, 6,90 s. |
| RED: Bezeichnung und Symbol | Angepasste bestehende Komponententests: 2 erwartete Fehler, 36 übersprungen; Exitcode 1, 21,99 s. Bezeichnung war noch „Privates Lernprojekt“ und dem Impressum-Symbol fehlte der Kreis der Hilfe. |
| GREEN: Bezeichnung und Symbol | „Studienprojekt zur persönlichen Fortbildung.“ und selbst gezeichnetes i im Kreis ergänzt. Beide Symbole nutzen denselben Kreis und dieselben bestehenden SVG-Stile. 2 gezielte Tests bestanden, 36 übersprungen; Exitcode 0, 2,62 s. Weitere Refaktorierung für diese Text- und Symboländerung nicht erforderlich. |
| REFACTOR | Gemeinsame ergänzende Ansichten über denselben Öffnungsrückruf und ein gemeinsames Auswahlprädikat gesteuert. Bestehende Komponenten-, responsive E2E- und Browser-Rückwegtests prüfen Hilfe und Impressum als Datensätze desselben Ablaufs. Separater Impressumtest prüft die Texte; Browservergleich prüft dieselben Stilmerkmale für beide Ansichten in Hell/Dunkel und auf schmalem/breitem Bildschirm. |
| Pflichtsuite | Nach letzter Text- und Symboländerung `npm run check`: erfolgreich, Exitcode 0, 45,62 s; Format, Type-Aware-Lint, Typprüfung, Runner-Selbsttests, 136 Unit-/Komponententests (19,78 s), 32 Inhaltsprüfungen (3,92 s), Architektur- und Vertikalzählungstests, Lizenzprüfung und geprüfter Produktionsbuild grün. `npm run --silent test:e2e`: 84 Tests bestanden, Exitcode 0, 66,97 s. `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0, 20,67 s. Arbeitsbaum betrifft zwei fachliche Vertikalen: Themen und Impressum. |
| Lokaler Browservergleich | Codex In-app-Browser unter `http://127.0.0.1:4173/`: Hilfe und Impressum nach Text- und Symboländerung bei 1280 × 800 und 390 × 800 im dunklen Farbschema geöffnet und grafisch verglichen. „Studienprojekt“ erscheint; i und Fragezeichen haben identische Kreise, Größe und Strichgestaltung. Überschrift, Textzeilen, Trennlinien und Positionierung konsistent. Mobil Rückkehr per „Zur Themenliste“ geprüft; vorheriger GUI-Nachweis für Browser-Zurück bleibt bei unveränderter Navigation gültig und die erneute vollständige E2E-Suite bestätigt ihn. Screenshots außerhalb des Repositorys aktualisiert; Viewport-Vorgabe zurückgesetzt und Impressum zur eigenen manuellen Prüfung geöffnet gelassen. Automatisierter Stilvergleich zusätzlich für Hell/Dunkel auf beiden Breiten grün. |
| Manuelle Prüfung durch Entwickler | Erfolgt; ausdrückliche Commit-Freigabe erfolgt. |

Pflichtsuite, lokaler Browservergleich und manuelle Freigabe sind abgeschlossen. Die Spec wird mit der fachlichen Änderung archiviert und committet.
