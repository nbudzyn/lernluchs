# Design: Running Skeleton

## Vertikale Verträge

Der Inhaltskatalog liefert versionierte, validierte Themen und Fragen. Der
Lernfortschritt speichert nur lokale Werte unter dauerhaften Themen-IDs. Das
Kompetenzprofil leitet seinen Zustand aus beiden Eingaben ab. Lernchecks
erzeugen einen Fortschrittsvorschlag, den der Benutzer bestätigt oder ändert.
Die Landkarte liest diese Daten und delegiert jede Änderung an ihre
zuständige Vertikale.

## Inhaltsumfang

Der erste Pfad enthält sechs Themen: Mensch/KI-Verantwortung,
Problemverständnis und Änderungsgrenzen, `AGENTS.md`, EARS,
Research/Plan/Tasks sowie Spec-Driven Development mit OpenSpec.

Jedes Thema erhält kurze deutsche Lernkarten, etablierte englische Fachbegriffe,
Primärquellen, Aktualitätsmetadaten und einen kuratierten Fragenpool. Eine
Wiederholung nutzt einen anderen Fragensatz. Alle ausgewählten Antworten müssen
korrekt sein.

## Lokaler und öffentlicher Zustand

Der öffentliche Build enthält nur Anwendung und Inhaltskatalog. IndexedDB
enthält Fortschritt und keine Zugangsdaten. Die PWA cached ihre Kerninhalte
nach dem ersten Laden. Externe Quellen werden ausschließlich auf bewusste
Interaktion geöffnet.

## Qualitätsrisiken

- Service-Worker-Updates dürfen nicht einen alten und neuen Inhaltsstand
  vermischen.
- Änderungen am Katalog dürfen gespeicherten Fortschritt nicht zerstören.
- Fachliche Aussagen und Fragen werden vor Aufnahme unabhängig gegen Quellen
  geprüft.
- Eine defekte Grafik erhält eine Listenansicht als Fallback.
