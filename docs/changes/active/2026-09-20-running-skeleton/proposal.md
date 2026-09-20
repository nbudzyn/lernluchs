# Proposal: Running Skeleton der KI-Lernlandkarte

## Projektidentität

Der vorläufige sichtbare Projektname ist **Lernluchs**; das spätere öffentliche
GitHub-Repository heißt `lernluchs`. Diese Entscheidung gilt für diesen
Durchstich und wird nicht in dauerhafte Architekturvorgaben aufgenommen.

## Problem und Nutzen

Die bestehende KI-Tool-Landkarte ist umfangreich, aber noch keine interaktive,
mobile Lernumgebung. Der erste Durchstich soll eine dauerhaft tragfähige
Architektur mit einer kleinen, tatsächlich nutzbaren Lernschleife beweisen.

## Ziel

Eine öffentliche, datensparsame und offline-fähige PWA stellt einen
Grundlagenpfad als Landkarte bereit. Benutzer können kurze Lernkarten lesen,
Auswahl-Lernchecks absolvieren und ihren Fortschritt lokal bestätigen.

## Betroffene Vertikalen

- Inhaltskatalog
- Lernfortschritt
- Kompetenzprofil
- Lernchecks
- Landkarte
- PWA und Zuverlässigkeit

Diese breite Berührung ist eine ausdrückliche architektonische Ausnahme: Sie
etabliert die zuerst fehlenden Verträge und wird durch Architekturtests
abgesichert. Nachfolgende Features bleiben auf höchstens zwei Vertikalen pro
Commit beschränkt.

## Nicht-Ziele

Login, Synchronisation, Lernziele, Benachrichtigungen, freie Antworten,
KI-Zugriff, In-App-Redaktion, Schreiben nach Git und die vollständige
Landkarte gehören nicht zu dieser Änderung.

## Akzeptanz

Die überprüfbaren Kriterien stehen in [acceptance.md](acceptance.md).
