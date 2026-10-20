# Vertikalen und Grenzen

Vertikalen begrenzen fachliche Verantwortung und Änderungen. dependency-cruiser
meldet Verletzungen bestehender Importregeln als Buildfehler.

## Bestehende Vertikale: Themen

Die Vertikale Themen verantwortet den versionierten, öffentlich lesbaren Bestand aus Themen,
Quellen und Aktualitätsmetadaten sowie dessen Anzeige, ohne Fragen oder persönlichen
Lernstand. Die Anzeige besitzt die lokale Listenpräferenz (`lernluchs.topic-list-view.v1`):
beim ersten Besuch Alltagsanker, danach Wiederherstellung der ausdrücklichen Auswahl.
Die Präferenz bleibt vom Lernstand getrennt und ausschließlich im Browser gespeichert.
Auch der Lernpfade-Filter gehört zu Themen: `lernluchs.learning-path-filter.v1`
speichert die gewählten Pfadnamen unabhängig vom Lernstand und der Listenansicht.
Unbekannte Namen werden ignoriert; ohne gültige Auswahl bleibt die Liste ungefiltert.
Keine Auswahl und ausdrücklich alle gewählten Pfade bleiben unterscheidbar. Die Themenliste erhält die IDs der
verfügbaren Lernchecks und der gelernten Themen über ihre öffentliche
Komponentenschnittstelle. Ihr öffentlicher Einstiegspunkt exportiert die
Themenliste und topicReferences: eine unveränderliche Ansicht aus IDs, Titeln und
Quellen-URLs für die Verbindung zu Lernchecks und die übergreifende Inhaltsprüfung.
Der UI-freie öffentliche Einstiegspunkt data.ts bietet dieselben Themenreferenzen
für Node-basierte Prüfungen ohne CSS-/React-Abhängigkeit.
Die Themenliste erhält Hilfe/Impressum über supplementaryViews als JSX-Eingaben. Sie verantwortet auch den Browser-Rückweg aus schmalen Themen- und
Hilfe- und Impressumansichten. Für Lernchecks erhält sie von `app` den expliziten Vertrag
`learningCheck: { status: "closed" } | { status: "open"; onExit: () => void }`;
ohne Angabe ist der Check geschlossen. Der Browser-Rückweg zeigt bei offenem Check
bei jeder Breite die Liste und beendet ihn über `onExit`. Einzelne Fragen erzeugen keine eigenen
Verlaufseinträge. Der Vorwärtsbutton behält sein natives Verhalten.

## Bestehende Vertikale: Hilfe

Die Vertikale Hilfe besitzt die knappe Einführung zu Symbolen, Alltagsankern, Listenumschaltung, Schnellfilter und Lernpfad-Filterung.
Ihr öffentlicher Einstiegspunkt exportiert `TopicHelp` als präsentierende Komponente ohne Themen-Daten oder Rückrufvertrag.
App bindet Hilfe über index.ts ein und übergibt sie als JSX an Themen.
Themen steuert die rechte oder mobile Ansicht und den Rückweg zur Liste, ohne
Hilfe zu importieren. Hilfe-Tests liegen unter tests/verticals/help/ und e2e/verticals/help/.

## Bestehende Vertikale: Impressum

Die Vertikale Impressum (`imprint`) besitzt die abgestimmten Autor- und Projekthinweise und deren Präsentation.
Ihr öffentlicher Einstiegspunkt exportiert Imprint ohne Themen-Daten oder Rückrufvertrag.
App übergibt die Komponente als JSX an Themen. Positionierung, Ansichtswechsel,
Scrollwiederherstellung und Rückweg liegen bei Themen. Inhaltstests bleiben unter
Impressum, gemeinsame Navigationsabläufe unter e2e/app/.

## Bestehende Vertikale: Lernchecks

Die Vertikale Lernchecks besitzt quellengebundene Fragenpools und ihre Validierung. Der öffentliche
Einstiegspunkt bietet verfügbare Themen-IDs, eine Fragenabfrage nach dauerhafter
Themen-ID und die Validierung von Fragenpools gegen übergebene Themen-Quellen.
Diese Daten-/Validierungsverträge sind zusätzlich über data.ts ohne UI-Abhängigkeit
für Node-basierte Prüfungen verfügbar. Der Check wählt fünf verschiedene Fragen, mischt Optionen und verwaltet
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
internen Dateien der Vertikalen. Öffentlich sind index.ts für UI und optional
data.ts für UI-freie Daten/Validierung. `src/app` verbindet die öffentlichen
Einstiegspunkte, indem es IDs verfügbarer Checks an die Themenliste gibt und beim
Start Fragen anhand der gewählten ID abfragt. Die App hält den aktuellen
Lerncheck, ohne Fragenlogik zu übernehmen. Weitere Vertikalen werden im
[Story-Backlog](../product/story-backlog.md) geplant.
