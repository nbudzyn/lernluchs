# Design: Öffentlicher Grundlagenkatalog im Browser

## Darstellung und Interaktion

`src/app` bleibt die reine Komposition. Die Katalog-Vertikale unter
`src/verticals/catalog` liest ihren statischen Katalog und verwaltet lokal,
welches Thema ausgewählt ist. Sie rendert eine semantische
`nav`-Liste mit sechs `button`-Elementen. Nach Auswahl wird eine einzelne
Lernkarte als `article` mit Überschriften, beschreibenden Texten, Metadaten
als `dl` und Quellen als Liste dargestellt.

Die Auswahl lässt sich vollständig über die Tabulatortaste und Enter bzw.
Leertaste bedienen. Der gewählte Button trägt `aria-pressed`; die vollständige
Karte wird nur für eine bewusste Auswahl gerendert. Damit bleibt die
Übersichtsseite kurz und die Karte eindeutig.

Quellen sind normale HTTPS-Links mit `target="_blank"` und
`rel="noreferrer"`. Die Komponente führt weder beim Rendern noch bei einer
Themenauswahl Netzwerkcode aus; der Browser öffnet die Zieladresse nur, wenn
der Nutzer den Link aktiviert. Der Kataloginhalt wird unverändert angezeigt.

## Grenzen und Verträge

Die Katalog-Vertikale enthält ihren Vertrag, ihre Validierung, ihre Daten und
ihre Anzeige selbst. Sie besitzt keinen persönlichen Zustand, keine
Schreiboperation und keine Seiteneffekte. `App` importiert nur die
Präsentationskomponente. Die dependency-cruiser-Regel für `catalog` verhindert
weiterhin direkte Importe zu anderen Vertikalen. Falls später eine andere
Vertikale Katalogdaten benötigt, erhält sie einen kleinen, bewusst entworfenen
öffentlichen Einstiegspunkt statt eines Imports interner Module.

## Teststrategie

`tests/catalog.test.ts` prüft Datenvertrag und Validierung unabhängig von
React. `tests/catalogBrowser.test.tsx` prüft später die sechs sichtbaren
Auswahlmöglichkeiten, die vollständige Karte nach Auswahl, die sichtbaren
Metadaten und die Quellenaktion. Der Komponententest fragt nach Rollen und
Beschriftungen statt nach Implementierungsdetails. Ein lokaler Browserlauf
prüft den vollständigen Tastaturablauf und dass ein Quellenlink erst auf
Aktivierung ein neues Ziel hat.

## Datenschutz, Sicherheit und Abhängigkeiten

Es werden keine Abhängigkeiten hinzugefügt. Die Darstellung verwendet nur
React und den vorhandenen Katalog. Es gibt keine Telemetrie, Cookies,
externen Schriften, extern nachgeladenen Ressourcen oder PWA-/Offline-Code.
`noreferrer` verhindert, dass beim bewussten Öffnen einer Quelle der
Referrer übertragen wird.

## Risiken und Alternativen

Quellen können extern später nicht erreichbar sein; die Karte selbst bleibt
lesbar, weil sie keine Quelle einbettet oder vorab lädt. Eine URL-Vorschau
oder ein eingebettetes Dokument wäre eine externe Laufzeitressource und wird
nicht verwendet. Eine grafische Karte wurde ausgeschlossen, weil der
geschäftliche Nutzen hier die verlässlich zugängliche Inhaltslektüre ist.
