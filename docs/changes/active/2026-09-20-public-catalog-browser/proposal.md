# Proposal: Öffentlicher Grundlagenkatalog im Browser

## Problem und Nutzen

Die sechs fachlich geprüften Grundlagen-Themen liegen bisher nur als
Build-Daten vor. Besucherinnen und Besucher können sie auf der Startseite
weder entdecken noch als Lernkarte lesen.

## Ziel

Die Startseite zeigt alle sechs Themen als textuelle, zugängliche Übersicht.
Nach einer bewussten Auswahl ist genau eine vollständige Lernkarte mit ihren
redaktionellen Metadaten und Quellen sichtbar. Quellen werden erst durch eine
bewusste Aktivierung eines Links geöffnet.

## Betroffene Vertikalen

- Katalog: ergänzt als vollständige Vertikale seine bestehende öffentliche
  Datenhaltung um die lesende Anzeige; Inhalte und Quellen bleiben unverändert.

`src/app` bleibt reine Komposition. Die vorhandene Architekturprüfung schützt
die Katalog-Vertikale weiter. Es gibt keine neue Abhängigkeit.

## Nicht-Ziele

- Keine Landkarte, Grafik, Canvas- oder Diagrammoberfläche.
- Keine Lernchecks, Lernfortschritt, Login oder KI-Anbindung.
- Keine PWA-/Offline-Funktion, Telemetrie oder externe Laufzeitressourcen.
- Keine Inhalts- oder Quellenänderung und keine neue Paketabhängigkeit.

## Akzeptanz

Die prüfbaren Kriterien stehen in [acceptance.md](acceptance.md). RED-,
GREEN- und REFACTOR-Nachweise werden unmittelbar in [tasks.md](tasks.md)
festgehalten.
