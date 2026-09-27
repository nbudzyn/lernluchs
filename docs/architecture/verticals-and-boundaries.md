# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. Die bestehenden
Importregeln werden mit dependency-cruiser als Buildfehler geprüft.

## Bestehende Vertikale: Themen

Die Vertikale Themen verantwortet den versionierten, öffentlich lesbaren Bestand
aus Themen, Quellen und Aktualitätsmetadaten sowie dessen Anzeige. Sie
enthält auch die geprüften Fragen der sechs Grundlagenthemen, aber keinen
persönlichen Zustand und hängt von keiner anderen Vertikale ab. Ihr
öffentlicher Einstiegspunkt exportiert die Themenliste und den Thementyp.

## Bestehende Vertikale: Lernchecks

Der Lerncheck erhält die Fragen des gewählten Themas über seinen öffentlichen
Einstiegspunkt. Er wählt fünf verschiedene Fragen, mischt die Optionen und
verwaltet Antworten und Ergebnis flüchtig. Die Vertikale importiert keine
Katalogdaten. `src/app` verbindet die beiden Einstiegspunkte und hält nur die
aktuell gewählte Thema, ohne fachliche Logik zu übernehmen.

## Übergreifende Grenzen

Eine Vertikale verantwortet ihre Daten und Anzeige. Andere Vertikalen greifen
nur über kleine, ausdrücklich entworfene öffentliche Verträge darauf zu.
Gemeinsamer Code enthält lediglich stabile IDs, Datenschemata, Validierung
und kleine technische Hilfen, keine Geschäfts- oder Präsentationslogik.

Ein Architekturtest und dependency-cruiser verhindern direkte App-Importe aus
internen Dateien der beiden Vertikalen. Weitere Vertikalen werden im
[Story-Backlog](../product/story-backlog.md) geplant.
