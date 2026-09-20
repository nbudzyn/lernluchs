# Proposal: Redaktionell geprüfter Grundlagen-Inhaltskatalog

## Problem und Nutzen

Der bestehende öffentliche Katalogvertrag ist absichtlich leer. Bevor eine
spätere Oberfläche Lernkarten anzeigen kann, braucht sie sechs kleine,
deutschsprachige und fachlich nachvollziehbare Grundlageninhalte mit stabilen
IDs, Quellen und Aktualitätsmetadaten.

## Ziel

Diese Änderung füllt ausschließlich den öffentlichen Inhaltskatalog mit sechs
redaktionell geprüften Themen: Mensch/KI-Verantwortung,
Problemverständnis und Änderungsgrenzen, `AGENTS.md`, EARS, Research/Plan/Tasks
und Spec-Driven Development mit OpenSpec. Der Katalog bleibt eine Build-
enthaltene, nur lesbare Datenquelle und wird automatisiert validiert.

## Betroffene Vertikalen

- Inhaltskatalog
- Gemeinsamer Kern: Erweiterung des stabilen Katalogschemas und seiner
  Validierung

## Nicht-Ziele

- Keine Landkarte, Grafik, Listenansicht oder sonstige Inhaltsdarstellung.
- Keine Lernchecks, Fragen, Antworten oder Fortschrittsdaten.
- Kein Login, keine KI-Anbindung, keine Telemetrie und kein externes
  Nachladen.
- Keine PWA-, Service-Worker- oder Offline-Funktion.
- Keine neuen Abhängigkeiten.

## Akzeptanz

Die ausführbaren und manuellen Nachweise stehen in [acceptance.md](acceptance.md).
