# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. Die bestehenden
Importregeln werden mit dependency-cruiser als Buildfehler geprüft.

## Bestehende Vertikale: Themen

Die Vertikale Themen verantwortet den versionierten, öffentlich lesbaren Bestand
aus Themen, Quellen und Aktualitätsmetadaten sowie dessen Anzeige. Sie
enthält auch die geprüften Fragen der sechs Grundlagenthemen, aber keinen
persönlichen Zustand. Die Themenliste erhält die gelernten Themen-IDs über ihre
öffentliche Komponentenschnittstelle und zeigt nur für Themen mit Lerncheck
einen Haken. Ihr öffentlicher Einstiegspunkt exportiert die Themenliste und den
Thementyp.

## Bestehende Vertikale: Lernchecks

Der Lerncheck erhält die Fragen und die dauerhafte ID des gewählten Themas über
seinen öffentlichen Einstiegspunkt. Er wählt fünf verschiedene Fragen, mischt
die Optionen und verwaltet Antworten und Ergebnis flüchtig. Nach fünf richtigen
Antworten meldet er das Bestehen über einen kleinen Speichervertrag an den
Lernfortschritt und zeigt dessen Erfolg oder Fehlschlag. Die Vertikale
importiert keine Katalogdaten.

## Bestehende Vertikale: Lernfortschritt

Die Vertikale Lernfortschritt besitzt den persönlichen, lokal gespeicherten
Lernstand. Sie speichert gelernte Themen unter dauerhaften IDs in einem eigenen
versionierten `localStorage`-Eintrag und stellt der App gelernte IDs, das
Speichern eines Bestehens und Hinweise auf beschädigte Daten bereit. Ungültige
Lernstandsdaten werden nur in diesem Eintrag zurückgesetzt; andere lokale Daten
bleiben erhalten. Eine fehlgeschlagene Speicherung erzeugt keinen neuen
gespeicherten Bestehensstand.

## Übergreifende Grenzen

Eine Vertikale verantwortet ihre Daten und Anzeige. Andere Vertikalen greifen
nur über kleine, ausdrücklich entworfene öffentliche Verträge darauf zu.
Gemeinsamer Code enthält lediglich stabile IDs, Datenschemata, Validierung
und kleine technische Hilfen, keine Geschäfts- oder Präsentationslogik.

Ein Architekturtest und dependency-cruiser verhindern direkte App-Importe aus
internen Dateien der drei Vertikalen. `src/app` verbindet die öffentlichen
Einstiegspunkte und hält nur das aktuell gewählte Thema, ohne fachliche Logik zu
übernehmen. Weitere Vertikalen werden im [Story-Backlog](../product/story-backlog.md)
geplant.
