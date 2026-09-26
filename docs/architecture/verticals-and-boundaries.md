# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. Die bestehenden
Importregeln werden mit dependency-cruiser als Buildfehler geprüft.

## Bestehende Vertikale: Inhaltskatalog

Der Inhaltskatalog verantwortet den versionierten, öffentlich lesbaren Bestand
aus Lernkarten, Quellen und Aktualitätsmetadaten sowie dessen Anzeige. Er
enthält auch die geprüften Fragen der sechs Grundlagenkarten, aber keinen
persönlichen Zustand und hängt von keiner anderen Vertikale ab. Sein
öffentlicher Einstiegspunkt exportiert die Themenliste und den Kartentyp.

## Bestehende Vertikale: Lernchecks

Der Lerncheck erhält die Fragen der gewählten Karte über seinen öffentlichen
Einstiegspunkt. Er wählt fünf verschiedene Fragen, mischt die Optionen und
verwaltet Antworten und Ergebnis flüchtig. Die Vertikale importiert keine
Katalogdaten. `src/app` verbindet die beiden Einstiegspunkte und hält nur die
aktuell gewählte Karte, ohne fachliche Logik zu übernehmen.

## Übergreifende Grenzen

Eine Vertikale verantwortet ihre Daten und Anzeige. Andere Vertikalen greifen
nur über kleine, ausdrücklich entworfene öffentliche Verträge darauf zu.
Gemeinsamer Code enthält lediglich stabile IDs, Datenschemata, Validierung
und kleine technische Hilfen, keine Geschäfts- oder Präsentationslogik.

Ein Architekturtest und dependency-cruiser verhindern direkte App-Importe aus
internen Dateien der beiden Vertikalen. Weitere Vertikalen werden im
[Story-Backlog](../product/story-backlog.md) geplant.
