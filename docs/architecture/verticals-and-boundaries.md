# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. Die bestehenden
Importregeln werden mit dependency-cruiser als Buildfehler geprüft.

## Bestehende Vertikale: Themen

Die Vertikale Themen verantwortet den versionierten, öffentlich lesbaren Bestand
aus Themen, Quellen und Aktualitätsmetadaten sowie dessen Anzeige. Sie enthält
weder Fragen noch persönlichen Zustand. Die Themenliste erhält die IDs der
verfügbaren Lernchecks und der gelernten Themen über ihre öffentliche
Komponentenschnittstelle. Ihr öffentlicher Einstiegspunkt exportiert die
Themenliste.

## Bestehende Vertikale: Lernchecks

Die Vertikale Lernchecks besitzt die quellengebundenen Fragenpools und deren
Validierung. Ihr öffentlicher Einstiegspunkt bietet verfügbare Themen-IDs und
eine Fragenabfrage nach dauerhafter Themen-ID. Der Lerncheck wählt fünf
verschiedene Fragen, mischt die Optionen und verwaltet Antworten und Ergebnis
flüchtig. Nach fünf richtigen Antworten meldet er das Bestehen über einen kleinen
Speichervertrag an den Lernfortschritt und zeigt dessen Erfolg oder Fehlschlag.
Die Vertikale importiert keine internen Daten der Themen-Vertikale; die
Katalogvalidierung erhält Themen-IDs und Quellen als schmale Eingabe.

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
Einstiegspunkte, indem es IDs verfügbarer Checks an die Themenliste gibt und beim
Start Fragen anhand der gewählten ID abfragt. Die App hält den aktuellen
Lerncheck, ohne Fragenlogik zu übernehmen. Weitere Vertikalen werden im
[Story-Backlog](../product/story-backlog.md) geplant.
