# Themenliste und Thema nebeneinander (breite Ansicht)

Bei ausreichend breiter Ansicht stehen Themenliste und gewähltes Thema nebeneinander.

- "Ausreichend breite Ansicht" = bei einem üblichen PC- oder Tablet-Browserfenster, jedoch üblicherweise nicht auf dem Handy
    - Relevant ist die Breite, nicht der Device-Typ!
- Vor der ersten Themenwahl zeigt die rechte Desktop-Fläche eine knappe Einführung zu den vorhandenen Symbolen und Filtermöglichkeiten:
  Lernpfade zum Thema filtern, einen Pfad auswählen oder den Filter aufheben, Fragen starten und den Gelernt-Status erkennen. Kurze
  Halbsätze, ohne „du“, „Sie“ oder unpersönliches „man“.
    - Keine Hilfesymbol (siehe unten) in diesem Fall!

Auf dem Handy öffnet sich das Thema in einer eigenen Ansicht.

- Dort ist die oben beschriebene Hilfe-Seite über ein Hilfesymbol erreichbar (neue Seite, danach Rückkehr zu Themenliste).
    - Das Hilfesysmbol entspricht den üblichen Anforderungen an eigene Icons
- Bei jedem Rückweg zur Liste, auch nach einem Lerncheck, bleibt sie so erhalten, wie sie verlassen wurde, insbesondere mit Filterung und
  Scrollposition.

Geklärt für die Umsetzung:

- Die mobile Hilfe ist auf kleinen Bildschirmen immer auf dem Themenlisten-Screen erreichbar, nicht in einer geöffneten Themenansicht.
- Die mobile Hilfe ist eine eigene Ansicht mit Rückweg zur Themenliste. Von ihr aus kann kein Lerncheck gestartet werden.
- Ein Lerncheck startet ausschließlich aus der Themenliste, auch wenn rechts in der breiten Ansicht ein anderes Thema oder die Hilfe steht.
- Nach dem Lerncheck erscheint bei breiter Ansicht exakt der Zustand zu dessen Beginn: links Liste mit derselben Filterung und Scrollposition; rechts dasselbe
  Thema oder die Hilfe. Auf kleinen Bildschirmen erscheint die Liste mit exakt ihrer damaligen Filterung und Scrollposition.
- Nach der manuellen Sichtung werden die Hilfe-Texte konkretisiert: Filtersymbol „filtert nach allen Lernpfaden mit diesem Thema“,
  „Lernpfad-Filterung unter der Themenliste“, „Klick auf einen Lernpfad filtert auf diesen einen Lernpfad“, Fragensymbol „startet einen
  Test“ und grüner Haken „Test bestanden“. Bei genau einem gefilterten Pfad verwendet die Zusammenfassung „Lernpfad“ im Singular.

Kein Scrollen links-rechts

Der Inhalt steht im Vordergrund. Bedienelemente und statische Texte sollen wenig Platz verschwenden

Barrierefrei!

Vertikale: Themen

## Ziel und Nicht-Ziele

Die Themen-Vertikale zeigt auf breiten Viewports Liste und Detail nebeneinander, auf schmalen Viewports je eine Ansicht. Die Einführung erklärt
die vorhandenen Symbole und die Pfadfilterung. Auswahl, Filter, Scrollposition und rechte Ansicht überstehen einen Lerncheck.

Keine neue Lernlogik, keine neuen Inhaltsquellen und kein allgemeines Redesign der vier Screens.

## Entscheidungen und Risiken

- Verantwortlich sind die Vertikale Themen, die eigenständige Vertikale Hilfe und die Komposition in `src/app`. Die gerichtete
  Vertikalabhängigkeit wird in der separaten Spec `0032-help-vertical-dependency.md` begründet und geprüft.
- Die Breite bestimmt das Layout. Der konkrete Umschaltpunkt wird mit Browser-Tests für Desktop, Tablet und Smartphone geprüft.
- Die Liste bleibt während des Lernchecks im React-Baum, damit Auswahl und Filter erhalten bleiben. Sichtbarkeit und Scrollposition werden
  im Browser geprüft, ebenso Tastaturbedienung und fehlender horizontaler Überlauf.
- Ein Filterwechsel, der das rechts geöffnete Thema ausblendet, schließt die Detailansicht wie bisher.
- Keine neuen Abhängigkeiten.

## Prüffähige Abnahme

- Auf breitem Viewport stehen Themenliste und rechte Einführung beziehungsweise gewähltes Thema nebeneinander. Die Einführung erscheint vor
  der ersten Wahl ohne Hilfesymbol.
- Auf schmalem Viewport öffnet ein Thema eine eigene Ansicht mit Rückweg zur unveränderten Liste. Die Hilfe ist nur in der Liste erreichbar,
  erscheint als eigene Ansicht und führt zur Liste zurück.
- Ein Lerncheck startet aus der Liste. Nach Abbruch oder Ergebnis erscheinen auf breiten Viewports dieselbe Filterung, Scrollposition und
  rechte Ansicht; auf schmalen Viewports dieselbe Liste mit Filterung und Scrollposition.
- Bedienelemente sind per Tastatur nutzbar, verständlich benannt und verursachen keinen horizontalen Überlauf.
- In der Themendetailansicht steht der Abschnitt „Quellen“ vor „Redaktionelle Metadaten“.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Breite und schmale Ansicht mit Hilfe | `npm test -- --run tests/verticals/topics/TopicBrowser.test.tsx tests/app/App.test.tsx` rot: Vor der Wahl fehlt die Hilfe-Region. | Responsive Listen- und Detailansicht, Einführung und mobile Hilfeseite ergänzt; gezielte Komponententests grün (20/20). | Darstellung in einer Themen-Komponente gebündelt; bestehende Browser-Tests auf den neuen mobilen Rückweg angepasst. |
| Rückkehr nach Lerncheck | Derselbe Lauf rot: Das zuvor rechts gewählte Thema fehlt nach Abbruch; `TopicBrowser` wurde ausgehängt. | Themenbrowser während des Lernchecks inert im Baum gehalten; Test prüft unabhängiges rechtes Thema und Filter nach Abbruch. Browser-Tests prüfen Filterung, Scrollposition und rechte Ansicht nach Abbruch sowie die Hilfe nach einem abgeschlossenen Lerncheck. | Fokus kehrt zum auslösenden Listenknopf zurück; Tests und Code formatiert. |
| Hilfe-Wortlaut und Filter-Einzahl | `npm test -- --run tests/verticals/topics/TopicBrowser.test.tsx` rot: Die fünf gewünschten Hilfetexte fehlten und bei genau einem Pfad stand „Lernpfaden“. | Symbole und gewünschte Texte in der Hilfe ergänzt; die Zusammenfassung verwendet bei einem Pfad „Lernpfad“. Gezielte Tests grün (17/17). | SVG-Symbole bleiben ohne zusätzlichen Screenreader-Text; die Bedeutung steht unmittelbar daneben. Code formatiert. |
| Quellen vor redaktionellen Metadaten | `npm test -- --run tests/verticals/help/TopicHelp.test.tsx tests/verticals/topics/TopicBrowser.test.tsx` rot: Die letzten beiden Abschnittsüberschriften stehen in umgekehrter Reihenfolge. | Beide Abschnitte getauscht; gezielte Tests grün (18/18), vollständige E2E-Suite grün (80/80). | Inhalt und Binnenstruktur der Abschnitte beibehalten; Unit- und Browser-Test prüfen die Reihenfolge. Code formatiert. |

Pflichtsuite nach der letzten Code- und Teständerung: `npm run check` grün (149 Unit-/Komponententests, 38 Inhaltsprüfungen,
Architektur- und Lizenzprüfung, Build); `npm run test:e2e -- --reporter=dot` grün (76 Browser-Tests auf Desktop und Mobil);
`npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit.

Lokaler Browsernachweis: Codex In-app-Browser unter `http://127.0.0.1:5173/` mit schmaler Ansicht. Hilfe aus der Liste geöffnet und
zurückgekehrt, Thema als eigene Ansicht geöffnet und zur Liste zurückgekehrt, Lerncheck per Tastatur aus der Liste gestartet und abgebrochen;
danach erschien wieder die Liste. Der breite Ablauf und die exakte Filter- und Scrollrückkehr wurden zusätzlich im lokalen Chromium-E2E-Test
geprüft. Nach der Textkorrektur wurde die mobile Hilfe erneut lokal geöffnet; alle fünf gewünschten Formulierungen und die Symbole waren
sichtbar. `npm run check`, 76 Browser-Tests und `npm audit --audit-level=high` danach grün.

Der Nutzer meldete nach eigener Sichtung konkrete Textkorrekturen und gab die übrige Änderung frei. Die Korrekturen wurden umgesetzt.
Die anschließende Auslagerung der Hilfe und ihre erneute Abnahme stehen in der Spec `0032-help-vertical-dependency.md`. Die aktuelle
Gesamtprüfung nach der Auslagerung ist grün: 151 Unit-/Komponententests, 80 Browser-Tests und Build.

Nach der letzten Ergänzung der Hilfe und dem Abschnittstausch erneut grün: `npm run check` (151 Unit-/Komponententests, Inhalts-,
Architektur- und Lizenzprüfung, Build) und `npm run test:e2e -- --reporter=dot` (80 Browser-Tests).

Unmittelbar vor dem Commit im lokalen Codex In-app-Browser unter `http://127.0.0.1:5173/` geprüft: Mobiles Thema aus der Liste geöffnet;
„Quellen“ steht vor „Redaktionelle Metadaten“. Eigene manuelle Prüfung und positive Bestätigung durch den Nutzer: erfolgt.
