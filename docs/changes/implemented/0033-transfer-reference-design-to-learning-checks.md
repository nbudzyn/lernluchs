## Übertragung des Referenzscreens auf Fragen und Lerncheck-Auswertung -> visuell einheitliche Anwendung

Bitte übertrage die bereits etablierte Designsprache der Anwendung auf die beiden noch nicht redesigneten Screens: Frage und
Learncheck-Auswertung.

WICHTIG:
Das ist keine neue Designaufgabe. Die visuelle Richtung ist bereits festgelegt und in den redesigneten Screens im aktuellen Repository
implementiert: In der Themenliste, den Themendetails und der Hilfeseite.

Betrachte diese bestehenden Screens als verbindliche Referenz für:

- Typografie
- Farben
- Spacing und Proportionen
- Layoutprinzipien
- Navigation
- Buttons und Controls
- Formulare
- Oberflächen und Container
- Borders, Radien und Schatten
- Icons
- Hover-, Focus-, Selected-, Disabled- und sonstige Zustände
- Informationsdichte und visuelle Hierarchie
- Dark-Mode-Handling

ZIEL

Die beiden verbleibenden Screens sollen anschließend eindeutig zur selben Anwendung gehören.

Erfinde für sie keine neue Designsprache und interpretiere das Design nicht erneut. Leite die Gestaltung aus den bereits redesigneten
Screens und den dort vorhandenen Komponenten, Styles und Design-Tokens ab.

VOR DER IMPLEMENTIERUNG

1. Starte die Anwendung und untersuche die bereits redesigneten Screens visuell.
2. Untersuche zusätzlich deren Implementierung und identifiziere die etablierten Design-Tokens, wiederverwendbaren Komponenten und
   Layout-Patterns.
3. Untersuche die beiden noch alten Screens und ihre Funktionen - in der Lerncheck-Auswertung insbesondere die Darstellung von richtig und
   falsch beantworteten Fragen und die Glückwunsch-Anzeigen.
4. Ordne deren UI-Elemente soweit sinnvoll den bereits etablierten Patterns und Komponenten zu.
5. Bewahre die bestehenden Funktionen, fachlichen Inhalte, Datenflüsse und Nutzerabläufe.

IMPLEMENTIERUNG

Übertrage anschließend das bestehende Design auf die beiden verbleibenden Screens.

Verwenden Farben (bisher "grün" und "rot" als Signalfarben) aus der gewählten Farbpalette oder ergänze die Farbpalette stilgemäß.

Bevor du neue Komponenten oder neue Styling-Patterns einführst, prüfe, ob eine bereits vorhandene Lösung wiederverwendet oder sinnvoll
erweitert werden kann.

- Das gilt insbesondere für den Glückwunsch!

Falls einer der beiden Screens etwas benötigt, für das es noch kein Pattern gibt, entwickle eine Lösung, die sich möglichst
selbstverständlich aus der bestehenden Designsprache ableitet. Verändere nicht das gesamte Designsystem nur wegen eines lokalen Sonderfalls.

Du darfst die React-Komponentenstruktur refactoren, wenn dies Wiederverwendung und Konsistenz verbessert. Vermeide jedoch unnötige
Refactorings außerhalb des Redesigns.

QUALITÄTSPRÜFUNG

Wenn beide Screens umgesetzt sind:

- starte bzw. öffne die Anwendung erneut
- prüfe alle Screens visuell
- vergleiche insbesondere die beiden neuen Screens mit den bereits redesigneten Referenz-Screens
- suche nach Inkonsistenzen bei Typografie, Spacing, Controls, Größen, Farben, States und Layout
- prüfe auf typische generische/AI-generierte UI-Muster
- korrigiere gefundene Inkonsistenzen selbstständig

Prüfe außerdem, dass durch das Redesign keine bestehenden Funktionen oder Nutzerabläufe beschädigt wurden.

Wichtig:
Nicht nach erfolgreichem Build aufhören. Das visuelle Ergebnis in der laufenden Anwendung ist Teil der Definition of Done.

Geklärt im Refinement: Die 50 vorhandenen, zufällig gewählten Glückwunsch-Texte bleiben unverändert erhalten und werden in der bestehenden Designsprache dargestellt.

## Ziel und Nicht-Ziele

Frage und Auswertung übernehmen die bereits umgesetzte redaktionelle Gestaltung aus Themenliste, Themendetail und Hilfe. Inhalt, Zufallsauswahl, fünf Fragen, Bestehensregel, Speicherverhalten, Quellenlinks und Rückwege bleiben erhalten. Keine neuen Funktionen oder Abhängigkeiten.

## Vertikalen und Grenzen

Einzige fachlich betroffene Vertikale: Lernchecks. Die App-Komposition darf für die Einbettung und gemeinsame Designtokens angepasst werden. Themen, Hilfe und Lernfortschritt bleiben fachlich unverändert.

## Entscheidungen und Risiken

- Die vorhandenen App-Tokens für Flächen, Text, Linien, Akzent und Fokus gelten auch im Lerncheck. Erfolgs- und Fehlzustände erhalten daraus abgeleitete, in Light und Dark Mode lesbare Signalfarben; Text benennt den Zustand zusätzlich.
- Die Glückwunsch-Texte bleiben unverändert. Der Glückwunsch nutzt die bestehende ruhige Flächen- und Trennliniengestaltung statt des bisherigen gelben Dekors.
- Lange Fragen, Antworten und Quellen können auf schmalen Bildschirmen überlaufen. Die Auswertung muss auch mit fünf Fragen und gemischten richtigen/falschen Antworten lesbar bleiben.
- Fokus, Bedienziele, Kontrast und Rückweg können durch CSS-Änderungen beeinträchtigt werden; Komponenten- und Browserprüfungen decken diese Zustände ab.

## Prüffähige Abnahme

- Frage und Auswertung teilen sichtbar Typografie, Farben, Abstände, Trennlinien, Bedienelemente und Light/Dark Mode mit den Referenzansichten.
- Antwortoptionen sind auf Desktop und Mobil klar getrennt, per Tastatur bedienbar und haben sichtbaren Fokus. Kein horizontaler Überlauf bei langen Texten.
- Die Auswertung zeigt weiterhin fünf richtige Antworten mit Erklärungen und Quellen sowie bei Fehlern die gewählten falschen Antworten. Erfolg, Nichtbestehen und Speicherfehler sind ohne Farberkennung verständlich.
- Glückwunsch und Rückweg sind konsistent gestaltet. Alle bestehenden Abläufe und Datenflüsse bleiben funktionsfähig.
- Browserprüfung umfasst Desktop und Mobil sowie Light und Dark Mode und den Vergleich mit Themen, Detail und Hilfe.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Frage und Auswertung | Neuer Browser-Test `question and result inherit the editorial surfaces and remain usable` zunächst auf Desktop rot: Lerncheck-Hintergrund war `rgb(255, 255, 255)` statt Referenzfläche `rgb(248, 247, 242)`. | Gemeinsame App-Tokens, Kopfzeile, Frage, Antwortoptionen, Auswertung und Glückwunsch umgesetzt. Gezielte Browser-Tests auf Desktop und Mobil grün; fünf Antworten, richtiger und falscher Erklärungstext, Quellen, Fokus, Bedienziele, Dark Mode, Rückweg und Überlauf geprüft. | Ungenutzte Fehlerton-Flächentokens entfernt. Tastatur-Fokusprüfung nach Mausstart auf tatsächliche Tab-Navigation korrigiert; danach volle Pflichtsuite grün. |

Pflichtsuite nach der letzten Code-/Teständerung: `npm run check` grün (153 Unit-/Komponententests, 38 Inhaltsprüfungen, Format, Lint, Typen, Architektur, Lizenzen, Build); `npm run test:e2e -- --reporter=line` grün (88 Desktop-/Mobil-Tests); `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit.

Lokaler Browsernachweis: Codex In-app-Browser unter `http://127.0.0.1:5175/`, schmale Ansicht im Dark Mode. Themenliste, Hilfe und Themendetail als Referenz visuell mit Lerncheck-Frage und gemischter Auswertung verglichen; fünf Antworten durchlaufen, richtige und falsch gewählte Antworten mit Erklärungen und Quellen sowie Rückweg zur Liste geprüft. Flächen, Typografie, Abstände, Trennlinien und Links wirken konsistent; kein sichtbarer horizontaler Überlauf. Unmittelbar vor dem Commit denselben Lerncheck erneut geöffnet, fünf Antworten per Tastatur gegeben, gemischte Auswertung mit fünf Erklärungen und Quellen geprüft und zur Themenliste zurückgekehrt. Automatisierte Browser-Tests prüfen Desktop und Mobil, helle und dunkle Farbpalette sowie den bestandenen Lauf. Eigene manuelle Prüfung des Entwicklers und ausdrückliche positive Bestätigung sind erfolgt.
