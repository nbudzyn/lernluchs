# Architektur und Leitplanken

## Aktueller Aufbau

Lernluchs ist eine clientseitige React-/TypeScript-Anwendung. Vite erzeugt
statische Dateien für GitHub Pages. Ein versionierter, öffentlicher Katalog
liefert Lernkarten, Quellen und redaktionelle Metadaten. Die App zeigt diese
Inhalte in einer Liste an. Vitest prüft Verhalten und Katalog; dependency-cruiser
prüft Importgrenzen und Zyklen.

## Dauerhafte Leitplanken

Öffentliche Inhalte und persönlicher Zustand bleiben getrennt. Der Katalog
ist nur lesbar und wird nicht durch Benutzereingaben verändert. Die App
enthält keinen KI-Schlüssel und ruft kein KI-Modell auf. Fachliche Vertikalen
haben kleine öffentliche Verträge und verbergen interne Daten und Hilfen.

Noch nicht umgesetzte Datenflüsse, Speicherverfahren, Offline-Funktionen und
Browseranforderungen stehen in den jeweiligen [Stories](../product/story-backlog.md).
Nach ihrer Umsetzung werden die wesentlichen Architekturentscheidungen hier
knapp ergänzt.
