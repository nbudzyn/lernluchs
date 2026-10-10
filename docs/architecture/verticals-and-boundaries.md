# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. dependency-cruiser
meldet Verletzungen bestehender Importregeln als Buildfehler.

## Bestehende Vertikale: Themen

Die Vertikale Themen verantwortet den versionierten, öffentlich lesbaren Bestand aus Themen,
Quellen und Aktualitätsmetadaten sowie dessen Anzeige, ohne Fragen oder persönlichen
Lernstand. Die Anzeige besitzt die lokale Listenpräferenz (`lernluchs.topic-list-view.v1`):
beim ersten Besuch Alltagsanker, danach Wiederherstellung der ausdrücklichen Auswahl.
Die Präferenz bleibt vom Lernstand getrennt und ausschließlich im Browser gespeichert. Die Themenliste erhält die IDs der
verfügbaren Lernchecks und der gelernten Themen über ihre öffentliche
Komponentenschnittstelle. Ihr öffentlicher Einstiegspunkt exportiert die
Themenliste. Sie verantwortet auch den Browser-Rückweg aus schmalen Themen- und
Hilfeansichten. Für einen aktiven Lerncheck erhält sie von `app` einen optionalen
Abbruchrückruf; der Browser-Rückweg zeigt dann bei jeder Breite die Liste und
beendet den Check über diesen Rückruf. Einzelne Fragen erzeugen keine eigenen
Verlaufseinträge. Der Vorwärtsbutton behält sein natives Verhalten.

## Bestehende Vertikale: Hilfe

Die Vertikale Hilfe besitzt die knappe Einführung zu Symbolen, Alltagsankern, Listenumschaltung, Schnellfilter und Lernpfad-Filterung.
Ihr öffentlicher Einstiegspunkt exportiert `TopicHelp` als präsentierende Komponente ohne Themen-Daten oder Rückrufvertrag.
Hilfe importiert weder andere Vertikalen noch `shared` oder `app`. Nur Themen hängt von Hilfe ab, importiert ausschließlich `help/index.ts`
und steuert die rechte oder mobile Hilfeansicht sowie den Rückweg zur Liste. dependency-cruiser und ein Architekturtest sichern diese
gerichtete Ausnahme ab. Hilfe-Tests liegen unter `tests/verticals/help/` und `e2e/verticals/help/`.

## Bestehende Vertikale: Lernchecks

Die Vertikale Lernchecks besitzt quellengebundene Fragenpools und ihre Validierung. Der öffentliche
Einstiegspunkt bietet verfügbare Themen-IDs und eine Fragenabfrage nach dauerhafter
Themen-ID. Der Check wählt fünf verschiedene Fragen, mischt Optionen und verwaltet
Antworten und Ergebnis flüchtig. Nach fünf richtigen Antworten meldet er das Bestehen
über einen kleinen Speichervertrag an Lernstand und zeigt dessen Erfolg oder Fehlschlag.
Lernchecks importiert keine internen Themen-Daten. Die Poolvalidierung erhält
Themen-IDs und Quellen als schmale Eingabe.

## Bestehende Vertikale: Lernstand

Die Vertikale Lernstand (`learning-state`) besitzt den persönlichen, lokal gespeicherten Lernstand:
gelernte Themen mit dauerhaften IDs in einem eigenen, versionierten `localStorage`-Eintrag.
Die App erhält gelernte IDs, eine Funktion zum Speichern eines Bestehens und Hinweise
auf beschädigte Daten. Ungültige Lernstandsdaten nur in diesem Eintrag zurücksetzen;
andere lokale Daten erhalten. Fehlgeschlagene Speicherung erzeugt keinen neuen
gespeicherten Bestehensstand.

## Übergreifende Grenzen

Die [Architekturregeln](../governance/durable-rules.md#architektur-und-änderungen)
bestimmen die öffentlichen Verträge und den zulässigen gemeinsamen Code.

Ein Architekturtest und dependency-cruiser verhindern direkte App-Importe aus
internen Dateien der Vertikalen. `src/app` verbindet die öffentlichen
Einstiegspunkte, indem es IDs verfügbarer Checks an die Themenliste gibt und beim
Start Fragen anhand der gewählten ID abfragt. Die App hält den aktuellen
Lerncheck, ohne Fragenlogik zu übernehmen. Weitere Vertikalen werden im
[Story-Backlog](../product/story-backlog.md) geplant.
