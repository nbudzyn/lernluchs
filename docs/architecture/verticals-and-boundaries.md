# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. Die bestehenden
Importregeln werden mit dependency-cruiser als Buildfehler geprüft.

## Bestehende Vertikale: Inhaltskatalog

Der Inhaltskatalog verantwortet den versionierten, öffentlich lesbaren Bestand
aus Lernkarten, Quellen und Aktualitätsmetadaten sowie dessen Anzeige. Er
enthält keinen persönlichen Zustand und hängt von keiner anderen Vertikale ab.
`src/app` setzt die Anzeige zusammen, ohne fachliche Kataloglogik zu übernehmen.

## Übergreifende Grenzen

Eine Vertikale verantwortet ihre Daten und Anzeige. Andere Vertikalen greifen
nur über kleine, ausdrücklich entworfene öffentliche Verträge darauf zu.
Gemeinsamer Code enthält lediglich stabile IDs, Datenschemata, Validierung
und kleine technische Hilfen, keine Geschäfts- oder Präsentationslogik.

Weitere Vertikalen und ein statischer Nachweis ihrer öffentlichen Einstiegspunkte
werden zusammen mit nutzbaren Funktionen im [Story-Backlog](../product/story-backlog.md)
geplant. Erst nach ihrer Umsetzung werden Verantwortung und erlaubte
Abhängigkeitsrichtungen hier ergänzt.
