# Proposal: Statisches PWA-Fundament

## Problem und Nutzen

Das öffentliche Repository braucht einen kleinen, verifizierbaren Startpunkt,
bevor Inhalte oder Lernfunktionen hinzukommen. Ohne einen statischen Build,
einen sichtbaren Einstieg, stabile Importgrenzen und CI würden spätere
Vertikalen auf ungesicherten Annahmen aufbauen.

## Ziel

Diese Änderung liefert ein unter Apache-2.0 lizenziertes React-, TypeScript-
und Vite-Projekt für eine statisch auslieferbare PWA-Hülle. Es enthält eine
minimale Vertikalstruktur, einen absichtlich leeren aber validierbaren
Inhaltskatalogvertrag sowie lokale und CI-Prüfungen für Typen, Tests, Build,
Importgrenzen und Inhalt.

## Betroffene Vertikalen

- PWA und Zuverlässigkeit: statischer Build, dokumentierte PWA-Hülle und CI.
- Gemeinsamer Kern: ausschließlich Katalogvertrag und dessen Validierung.

Dies ist eine kleine Architekturgrundlage, keine fachliche Lernfunktion. Die
anderen Vertikalen werden nur als durch Architekturregeln geschützte künftige
Namensräume vorbereitet und enthalten keine Implementierung.

## Nicht-Ziele

- Keine Landkarte, Grafik oder Listenansicht.
- Keine Lernkarten, Fragen, Quellen, Lernchecks oder Lernfortschritte.
- Kein Login, keine Synchronisation, Lernziele oder KI-Anbindung.
- Keine Analytics, Tracker, Telemetrie, externen Fonts, Cookies oder externen
  Laufzeit-CDNs.
- Kein Offline-Cache, Service Worker oder Installationsablauf; das folgt erst
  in der ausdrücklich dafür vorgesehenen PWA-Story.

## Akzeptanz

Die ausführbaren Nachweise stehen in [acceptance.md](acceptance.md). Jeder
Teil-Schritt dokumentiert seinen RED-, GREEN- und REFACTOR-Nachweis in
[tasks.md](tasks.md).
