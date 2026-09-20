# Vertikalen und Grenzen

## Zweck

Vertikalen machen KI-Aufträge und Änderungen klein genug, damit klar ist, was
geändert werden darf und was geschützt bleibt. Importregeln werden mit
dependency-cruiser als Buildfehler geprüft.

## Vertikalen

### Inhaltskatalog

Verantwortet Themen, Begriffe, Abhängigkeiten, Lernkarten, Quellen, Videos,
Aktualitätsfelder und Archivierung. Er ist versioniert und öffentlich lesbar.
Er darf keinen persönlichen Fortschritt lesen oder schreiben.

### Lernfortschritt

Verantwortet lokalen Status, bestätigte Kompetenzen, Ergebnisse, Notizen und
spätere lokale Fehlermeldungen. Er kennt dauerhafte Themen-IDs, aber verändert
keinen Inhalt.

### Kompetenzprofil

Leitet sichtbar und nachvollziehbar Kompetenzen aus Inhaltskatalog und
Lernfortschritt ab. Es speichert keine fachliche Wahrheit und verändert weder
Katalog noch Fortschritt direkt.

### Lernchecks und spätere Lernziele

Verantwortet Auswahlfragen, Auswertung, Lösungserklärungen und später
verschiebbare Lernziele. Lernziele sind ausdrücklich nicht Teil von Version 0.

### Landkarte

Verantwortet die grafische, frei navigierbare Darstellung von Themen und
Querverbindungen. Sie liest Daten und delegiert Zustandsänderungen an die dafür
zuständige Vertikale; sie schreibt keinen Fortschritt direkt.

### PWA und Zuverlässigkeit

Verantwortet Offline-Cache, Updates, Fehlertoleranz, Backup-/Export-Funktionen
und Browser-Integration. Sie enthält keine fachliche Lernlogik.

## Gemeinsamer Kern

Der gemeinsame Kern enthält nur stabile IDs, Datenschemata, Validierung und
kleine technische Hilfen. Er enthält keine Geschäfts- oder Präsentationslogik.

## Geplanter statischer Nachweis für Data Hiding

Eine spätere Architektur-Änderung ergänzt einen statischen Test, der
Vertikalgrenzen nicht nur als Importverbot, sondern auch als öffentliche
Schnittstellen prüft: Vertikalen dürfen von außerhalb ausschließlich über
einen kleinen, benannten Einstiegspunkt importiert werden. Direkte Importe
interner Daten, Komponenten oder Hilfen einer anderen Vertikale müssen als
Buildfehler scheitern. Die genaue Benennung und Struktur dieser Einstiegspunkte
werden erst zusammen mit diesem Test und einer eigenen Spec festgelegt.

## Erlaubte Richtungen

Präsentationsvertikalen dürfen lesend auf Inhaltskatalog und Lernfortschritt
zugreifen. Der Inhaltskatalog hängt von keiner anderen Vertikale ab. Der
Lernfortschritt darf lediglich gemeinsame IDs und Verträge kennen. Ein
Querverweis, der diese Richtung verletzt, wird nicht als bequemer Import,
sondern als bewusst zu entwerfender Vertrag behandelt.
