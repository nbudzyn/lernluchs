## Visuelles Redesign

Analysiere zunächst die bestehende Anwendung vollständig, insbesondere alle Screens: Themenliste, Hilfe, Themendetailansicht, Frage und
Lerncheck-Ergebnis.

Die Anwendung funktioniert, und die derzeitigen Nutzerabläufe sollen grundsätzlich erhalten bleiben.

Die bestehende visuelle Gestaltung ist dagegen NICHT erhaltenswert. Betrachte sie ausschließlich als funktionalen Prototyp.

ZIEL

Redesigne die gesamte Anwendung visuell von Grund auf.

Sie soll wie eine sorgfältig von einem sehr guten Product-Design-Team gestaltete, moderne Web-Anwendung wirken – nicht wie ein generisches
AI-generiertes React-Dashboard. Sie soll Professionalität und Stabilität vermitteln.

WICHTIG

Behalte bei:

- bestehende Funktionen
- fachliche Inhalte
- grundlegende Nutzerabläufe
- vorhandene Daten und Datenflüsse

Darfst du verändern:

- Layout
- visuelle Hierarchie
- Typografie
- Farben
- Spacing
- Größen
- Navigationdarstellung
- Anordnung innerhalb eines Screens
- Buttons und Controls
- Icons
- Oberflächen
- Borders
- States
- Component Styling
- bestehende React-Komponentenstruktur, wenn ein Refactoring für ein konsistentes UI sinnvoll ist

Vermeide insbesondere typische AI-UI-Muster:

- Card-in-Card-in-Card
- übermäßig große Border-Radii
- unnötige Gradients
- Glassmorphism
- riesige Hero-artige Überschriften in einer Arbeitsoberfläche
- übermäßigen Einsatz von Pills/Badges
- dekorative Elemente ohne Funktion
- unnötige Animationen
- riesige Abstände und dadurch geringe Informationsdichte
- überall Schatten
- eine eigene visuelle Behandlung für jedes einzelne Element

DESIGNPRINZIPIEN

Die Anwendung soll:

- hochwertig
- ruhig
- präzise
- modern
- konsistent
- angenehm zu benutzen
- visuell eigenständig wirken.

"Modern" bedeutet dabei NICHT futuristisch oder dekorativ.

Gute Typografie, Proportionen, Weißraum, Hierarchie und Konsistenz sind wichtiger als Effekte.

Die Anwendung soll für schmale Bildschirme (mobile Geräte) wie für breite Bildschirme (Desktop, Tablet) sehr gut zu benutzen sein. Texte
sollen gut lesbar sein. Die Anwendung soll einen Dark Mode besitzen, automatisch gesteuert durch den Browser / das Betriebssystem. Die
Anwendung soll barriefrei sein.

VOR DER IMPLEMENTIERUNG

1. Untersuche ALLE Screens - sowohl für schmale wie auch wie breite Bildschirme
2. Identifiziere die vorhandenen UI-Patterns und Komponenten.
3. Trenne funktionale Anforderungen von zufälligen Eigenschaften des aktuellen Designs.
4. Entwickle daraus EINE konsistente visuelle Designsprache für die gesamte Anwendung.
5. Definiere die wichtigsten Design-Tokens und Komponenten.
6. Prüfe deinen Entwurf kritisch auf typische "AI Slop"-Muster.

Danach implementiere das Redesign über ALLE Screens.

Wichtig:
Optimiere nicht einfach das vorhandene CSS. Die Anwendung darf deutlich anders aussehen.

Behandle das bestehende UI als funktionierenden Prototyp, der jetzt sein eigentliches Product Design bekommt.

Geklärt für die Umsetzung: Das Redesign erfolgt etappenweise. Zuerst entstehen zwei Desktop-/Mobilentwürfe; nach Sichtung aller bestehenden
Ansichten wird die Themenansicht mit Liste, Filterung, Hilfe und Detail als Referenzscreen vollständig gestaltet und dem Entwickler zur
manuellen Prüfung gezeigt. Erst nach dessen Feedback und Freigabe wird dieselbe Designsprache auf Lerncheck-Frage und -Ergebnis übertragen.
Der Entwickler wählte Entwurf A „Redaktionell“: warme neutrale Flächen, Lesetypografie und Petrol als zurückhaltender Akzent. Die Entwürfe
sind schematisch; sie begründen keine neuen Funktionen. Bestehende Inhalte, Datenflüsse und Abläufe bleiben erhalten. Die visuelle
Ausarbeitung wird an Desktop und Mobil sowie in Light und Dark Mode geprüft.

## Ziel und Nicht-Ziele

Die bestehende Anwendung erhält eine zusammenhängende, ruhige und eigenständige visuelle Sprache. Der erste Umsetzungsschritt gestaltet
Themenliste, Hilfe und Themendetail als Referenzscreen; weitere Screens folgen erst nach manueller Sichtung und ausdrücklicher Designfreigabe.
Bestehende Funktionen, fachliche Texte, Inhalte, Daten und Datenflüsse bleiben erhalten. Suche, neue Filtermechanismen und Lernpfad-Einstiege
gehören zu einer späteren Story. Keine neue Abhängigkeit.

## Vertikalen und Grenzen

Referenzscreen: Themen und Hilfe, dazu App-Komposition bei Bedarf. Spätere Lerncheck-Screens werden als eigenes Teil-Feature in der Vertikale
Lernchecks umgesetzt. Pro fachlichem Commit höchstens zwei Vertikalen; die vollständige Story kann deshalb mehrere abgenommene Schritte
und Commits benötigen. Die gerichtete Abhängigkeit Themen → Hilfe bleibt bestehen. Es gibt keine Änderung fachlicher Inhalte.

## Entscheidungen und Risiken

- Richtung A „Redaktionell“: warme neutrale Flächen, gut lesbare Typografie, Petrol als zurückhaltender Akzent. Keine externen Fonts.
- Die Designsprache definiert gemeinsame Tokens für Farbe, Typografie, Abstände, Flächen, Trennlinien, Fokus und Status; Dark Mode folgt
  `prefers-color-scheme`, reduzierte Bewegung `prefers-reduced-motion`.
- Der erste Referenzscreen bewahrt Desktop-Split-View und mobile Einzelansichten samt Filterung, Scrollrückkehr, Hilfe und Lerncheck-Einstieg.
- Risiko: Visuelle Änderungen können Fokus, Kontrast, Touch-Zielgrößen, Überlauf oder die vorhandenen Rückwege beeinträchtigen. Gezielt
  durch Komponenten- und Browser-Tests sowie manuelle Sichtung prüfen.
- Risiko: Der vollständige Redesign-Wunsch umfasst mehr als zwei Vertikalen. Umsetzung und Abnahme bleiben nach Vertikalen getrennt;
  eine spätere Freigabe des Referenzscreens bestimmt die Übertragung auf Lernchecks.
- Rückmeldung zur ersten manuellen Sichtung: Die Kopfzeile enthält „Lernluchs KI“ und „Themen“, der Browser-Tab „Lernluchs KI“. Die Themenzahl zeigt bei aktivem
  Filter sichtbare und gesamte Themen (`n / gesamt Themen`), sonst nur die Gesamtzahl. Die aktiven Lernpfade stehen oberhalb der Liste,
  können beliebig viele Einträge ohne Abschneiden umbrechen und erhalten einen sichtbaren Rückweg zu allen Themen. Für einen späteren
  Freitextfilter bleibt zwischen Kopf und Themenliste Raum; die Suche selbst gehört weiterhin nicht zu dieser Story. Die Hilfe erklärt
  die neue Position. Ihr Titel heißt „Hilfe“ statt „Orientierung“; die doppelte kleine Überschrift „Lernthemen“ entfällt.
- Typografische Nachkorrektur: Zwischen „Lernluchs KI“ und „Themen“ steht in der sichtbaren Kopfzeile ein Halbgeviertstrich (–) als Gedankenstrich.

## Prüffähige Abnahme

- Themenliste, Hilfe und Themendetail wirken auf Desktop und Mobil als eine konsistente Oberfläche; Texte sind gut lesbar und der Inhalt
  steht im Vordergrund. Keine dekorativen Kartenstapel, Gradients, übergroßen Rundungen oder unnötigen Animationen.
- Automatischer Light/Dark Mode, sichtbarer Tastaturfokus, ausreichender Kontrast und große mobile Bedienziele sind geprüft.
- Bestehende Themenauswahl, Filterung, Lerncheck-Einstieg, Quellenlinks und Rückwege funktionieren weiter; kein horizontaler Überlauf.
- Ein Desktop- und ein mobiler Browserablauf prüfen Darstellung und Erhalt der Zustände. Der Entwickler prüft den Referenzscreen selbst
  und gibt die Designsprache frei, bevor die Lerncheck-Screens geändert werden.
- Nach Übertragung sind auch Lerncheck-Frage und -Ergebnis in beiden Modi und Viewports konsistent und bedienbar.
- Die Kopfzeile zeigt „Lernluchs KI – Themen“, der Browser-Tab „Lernluchs KI“. Bei Filterung steht beispielsweise `10 / 46 Themen`, ungefiltert `46 Themen`.
  Die aktive Pfadauswahl und „Filter aufheben“ stehen vor der Liste und lassen sich ohne horizontales Scrollen mit beliebig vielen
  Pfadnamen darstellen. Die Hilfe benennt die Position richtig und trägt den Titel „Hilfe“.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Referenzscreen Themen/Hilfe | Neuer Playwright-Test `editorial topic design adapts to color scheme and mobile touch` zunächst rot: `.topic-stage` hatte einen transparenten Hintergrund; mobile Hilfe- und Themenknöpfe erreichten die geforderten 44 px nicht. | Redaktionelle Flächen, Typografie, Farben, Trennlinien, Fokus und mobile Bedienziele umgesetzt; gezielter Browser-Test grün. | Fragenknopf an die Höhe der Themenzeile angepasst, nachdem die bestehende Ausrichtungsprüfung fehlschlug; Auswahl als durchgängige Zeile statt einzelner Farbfläche dargestellt. Danach volle Suite grün. |
| Rückmeldung zum Referenzscreen | Zuerst neun gezielte Unit-/Komponententests rot für Benennung, Hilfe, Themenzahl und Filterposition; gezielter Browser-Test rot für `10 / 46 Themen`. | Exakte Kopfzeile und Tab-Titel, Zählung, Filterzusammenfassung über der Liste und Hilfetext umgesetzt. Tests für Rücksetzen und zwölf lange Lernpfadnamen ergänzt; alle gezielten Prüfungen grün. | Doppelte kleine Überschrift entfernt, „Orientierung“ zu „Hilfe“ gekürzt und Filtertext zu „Gefiltert nach“ verdichtet. Nach der Korrektur einer TypeScript-Assertion volle Pflichtsuite grün. |
| Typografische Nachkorrektur | App-Test erwartete `Lernluchs KI – Themen` und schlug gegen den kurzen Bindestrich fehl (1 von 3 Tests). | Halbgeviertstrich in der sichtbaren Kopfzeile umgesetzt; 153 Unit-/Komponententests und 84 Browser-Tests grün. | Lerncheck-Einstiegstest prüft den Ablauf unabhängig von der typografischen Form der App-Überschrift; der App-Test prüft den exakten Text. |
| Lerncheck-Frage/Ergebnis nach Designfreigabe | Die Umsetzung wird in der eigenen Spec [Übertragung des Referenzscreens auf Lernchecks](0033-transfer-reference-design-to-learning-checks.md) nachgewiesen. | Siehe verlinkte Spec. | Siehe verlinkte Spec. |

Pflichtsuite nach der letzten Code- und Teständerung: `npm run check` grün (153 Unit-/Komponententests, 38 Inhaltsprüfungen,
Architektur- und Lizenzprüfung, Produktionsbuild); `npm run test:e2e -- --reporter=line` grün (84 Tests in Desktop- und
Mobil-Chromium); `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit.

Lokaler Browsernachweis: Codex In-app-Browser unter `http://127.0.0.1:5174/` mit schmaler Ansicht. Themenliste im Dark Mode
angezeigt, Lernpfadfilter am ersten Thema aktiviert (10 Themen sichtbar), Thema geöffnet und Textabschnitte sowie Rückweg geprüft.
Zusätzlich Desktop-Split-View und mobile Liste/Detail im Light Mode sowie mobile Liste im Dark Mode visuell geprüft.
Die automatische Light-/Dark-Umschaltung und fehlender horizontaler Überlauf sind im neuen Browser-Test abgesichert.
Nach der Rückmeldung im lokalen Browser erneut geprüft: Tab-Titel `Lernluchs KI`, Kopfzeile `Lernluchs KI - Themen`,
ungefiltert `46 Themen`; nach Pfadfilter `10 / 46 Themen` in „Aktive Lernpfade“ oberhalb der Liste. „Filter aufheben“
stellt `46 Themen` und die vollständige Liste wieder her. Der mobile Browser-Test mit drei langen Pfadnamen prüft
den Umbruch ohne horizontalen Überlauf; ein Komponententest prüft zwölf Pfade.
Nach der Nachfrage zum Gedankenstrich zeigt die Kopfzeile `Lernluchs KI – Themen`. Der Entwickler hat den Referenzscreen
ansonsten manuell geprüft und ausdrücklich freigegeben; Commits sind erlaubt. Die Übertragung der Designsprache auf Lerncheck-Frage
und -Ergebnis ist in der verlinkten eigenen Spec nachgewiesen. Die manuelle Prüfung und ausdrückliche positive Bestätigung sind erfolgt.
