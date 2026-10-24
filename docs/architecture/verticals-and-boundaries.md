# Vertikalen und Grenzen

Fachliche Verantwortung bleibt beim Besitzer; dependency-cruiser meldet
Importregelverletzungen als Buildfehler.

## Bestehende Vertikale: Themen

Themen besitzt öffentliche versionierte Themen, Quellen, Aktualitätsmetadaten
und deren Anzeige, keine Fragen oder persönlichen Lernstände.
Lokale Präferenzen bleiben vom Lernstand getrennt:
- `lernluchs.topic-list-view.v1`: zuerst Alltagsanker, danach ausdrückliche Auswahl wiederherstellen.
- `lernluchs.learning-path-filter.v1`: gewählte Pfadnamen; unbekannte ignorieren, ohne gültige Auswahl ungefiltert. Keine Auswahl und bewusste Vollauswahl unterscheiden.

Öffentlicher `index.ts` exportiert Themenliste und unveränderliche `topicReferences`
(IDs, Titel, Quellen-URLs) zur Check-Verbindung und Inhaltsprüfung.
`data.ts` bietet dieselben Referenzen ohne CSS-/React-Abhängigkeit.
Verfügbare Check-IDs und gelernte Themen-IDs kommen über die Komponentenschnittstelle.

Hilfe/Impressum kommen als `supplementaryViews`-JSX. Themen steuert deren Ansicht
und Browser-Rückweg aus schmalen Themen-/Hilfe-/Impressumansichten.
Für Checks liefert App explizit
`learningCheck: { status: "closed" } | { status: "open"; onExit: () => void }`;
fehlend bedeutet geschlossen. Bei offenem Check zeigt Browser-Zurück in jeder
Breite die Liste und ruft `onExit` auf. Einzelne Fragen erzeugen keine
Verlaufseinträge, Browser-Vorwärts bleibt nativ.

## Bestehende Vertikale: Hilfe

Hilfe besitzt die Einführung zu Symbolen, Alltagsankern, Listenumschaltung,
Schnellfilter und Pfadfilter. Öffentlich: präsentierendes `TopicHelp` ohne
Themen-Daten/Rückrufvertrag. App importiert über `index.ts` und übergibt JSX an Themen;
Themen steuert Ansicht/Rückweg, ohne Hilfe zu importieren.
Tests: `tests/verticals/help/`, `e2e/verticals/help/`.

## Bestehende Vertikale: Impressum

`imprint` besitzt abgestimmte Autor-/Projekthinweise und Präsentation.
Öffentlich: `Imprint` ohne Themen-Daten/Rückrufvertrag; App übergibt JSX an Themen.
Positionierung, Ansichtswechsel, Scrollwiederherstellung und Rückweg liegen bei Themen.
Inhaltstests beim Impressum, gemeinsame Navigation unter `e2e/app/`.

## Bestehende Vertikale: Lernchecks

Lernchecks besitzt quellengebundene Fragenpools/Validierung. Öffentliche Verträge:
verfügbare Themen-IDs, Fragenabfrage je dauerhafter Themen-ID und Poolvalidierung
gegen übergebene Themen-Quellen; zusätzlich UI-frei über `data.ts` für Node-Prüfungen.
Keine internen Themen-Daten importieren; IDs/Quellen sind schmale Eingaben.

Ein Check wählt fünf verschiedene Fragen, mischt Optionen und hält Antworten/Ergebnis
flüchtig. Fünf richtige Antworten melden Bestehen über einen kleinen Speichervertrag
an Lernstand; Speichererfolg oder -fehler wird angezeigt.

## Bestehende Vertikale: Lernstand

`learning-state` besitzt gelernte Themen-IDs in einem eigenen versionierten
`localStorage`-Eintrag. App erhält gelernte IDs, Speicherfunktion für Bestehen und
Hinweise auf beschädigte Daten. Ungültige Daten nur im eigenen Eintrag zurücksetzen;
andere lokale Daten erhalten. Fehlgeschlagene Speicherung erzeugt keinen neuen gespeicherten Bestehensstand.

## Übergreifende Grenzen

[Architekturregeln](../governance/durable-rules.md#architektur-und-änderungen)
bestimmen öffentliche Verträge und gemeinsamen Code. Architekturtest und
dependency-cruiser verhindern App-Importe aus Vertikal-Interna.
Öffentlich: `index.ts` für UI, optional `data.ts` für UI-freie Daten/Validierung.
App gibt verfügbare Check-IDs an die Liste, fragt beim Start Fragen nach gewählter
ID ab und hält den aktuellen Check, ohne Fragenlogik zu übernehmen.
Weitere Vertikalen werden im [Backlog](../product/story-backlog.md) geplant.
