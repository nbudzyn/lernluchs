# Architektur und Leitplanken

## Aktueller Aufbau

Lernluchs ist eine clientseitige React-/TypeScript-Anwendung. Vite erzeugt statische Dateien für GitHub Pages. Ein versionierter,
öffentlicher Katalog liefert Themen, Quellen und redaktionelle Metadaten. Die App zeigt diese Inhalte in einer Liste an. Die App verbindet
die Vertikale Themen über ihren öffentlichen Einstiegspunkt mit der Lerncheck-Vertikale. `learning-checks` besitzt die quellengeprüften
Fragenpools und gibt sie über Themen-IDs an die App; `topics` enthält keine Fragen. Der Lerncheck hält Frageauswahl, Antworten und Ergebnis nur im React-Zustand. Vitest prüft Verhalten und Katalog,
dependency-cruiser die Importgrenzen und Zyklen. Chromium-E2E-Tests prüfen den sichtbaren Ablauf auf Desktop und Smartphone. E2E-Dateien
gehören der prüfenden Vertikale oder bei vertikalübergreifenden Abläufen `app`; gemeinsame Testhilfen liegen unter `e2e/shared/`.
Die eigenständige Vertikale `help` besitzt die Einführung zu den Themen-Symbolen und zur Lernpfad-Filterung. Die einzige gerichtete
Abhängigkeit lautet `topics → help`: `topics` importiert `help/index.ts`, während `help` weder `topics` noch andere App-Vertikalen oder
`shared` importiert. Die Themenansicht bestimmt die Position der Hilfe auf breiten und
schmalen Viewports. Unit- und E2E-Tests der Hilfe liegen unter ihrer eigenen Vertikale.

## Dauerhafte Leitplanken

Öffentliche Inhalte und persönlicher Zustand bleiben getrennt. Der Katalog ist nur lesbar und wird nicht durch Benutzereingaben verändert.
Die App enthält keinen KI-Schlüssel und ruft kein KI-Modell auf. Fachliche Vertikalen haben kleine öffentliche Verträge und verbergen
interne Daten und Hilfen.

Ungültige Zustände sollen nicht ausdrückbar sein.

Noch nicht umgesetzte Datenflüsse, Speicherverfahren, Offline-Funktionen und Browseranforderungen stehen in den
jeweiligen [Stories](../product/story-backlog.md). Nach ihrer Umsetzung werden die wesentlichen Architekturentscheidungen hier knapp
ergänzt.
