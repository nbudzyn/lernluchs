# Running Skeleton der KI-Lernlandkarte

## Ziel und Umfang

Der vorläufige Projektname ist **Lernluchs**. Eine öffentliche, datensparsame, offline-fähige PWA soll den Grundlagenpfad als frei navigierbare Landkarte mit Listenfallback zeigen. Lernende lesen kurze Karten, absolvieren Auswahl-Lernchecks und bestätigen lokalen Fortschritt. Betroffen sind Inhaltskatalog, Lernfortschritt, Kompetenzprofil, Lernchecks, Landkarte sowie PWA/Zuverlässigkeit. Die breite Berührung ist eine ausdrückliche Architekturausnahme für den ersten Durchstich und benötigt Architekturtests; spätere fachliche Commits bleiben auf höchstens zwei Vertikalen begrenzt.

Login, Synchronisation, Lernziele, Benachrichtigungen, freie Antworten, KI-Zugang in der App, In-App-Redaktion und Schreiben nach Git gehören nicht dazu.

## Entscheidungen und Risiken

- Der Inhaltskatalog liefert versionierte, validierte Themen und Fragen. Lernfortschritt speichert nur lokale Werte unter dauerhaften Themen-IDs. Das Kompetenzprofil leitet daraus seine Anzeige ab; Lernchecks erzeugen einen änderbaren Fortschrittsvorschlag. Die Landkarte liest diese Daten und delegiert Änderungen an die zuständige Vertikale.
- Der Grundlagenpfad umfasst Mensch/KI-Verantwortung, Problemverständnis und Änderungsgrenzen, `AGENTS.md`, EARS, Research/Plan/Tasks und Spec-Driven Development mit OpenSpec. Lernkarten brauchen Primärquellen und Aktualitätsmetadaten; Fragen werden unabhängig fachlich geprüft.
- IndexedDB speichert Fortschritt ohne Zugangsdaten. Der öffentliche Build enthält nur App und Katalog; externe Quellen öffnen sich nur nach bewusster Aktion. Der Offline-Cache darf Inhaltsversionen bei Updates nicht mischen. Bei defekter Grafik bleibt die Liste nutzbar; Katalogänderungen dürfen bestätigten Fortschritt nicht löschen.

## Geplante Umsetzung und Nachweise

Pro Teil-Feature werden unmittelbar vor der Implementierung ein fachlich begründeter RED-Test, die GREEN-Prüfung und ein REFACTOR bei grüner Suite in dieser Datei dokumentiert.

Tooling, Grundlagenkarten, Kataloganzeige und öffentlicher Releasepfad sind als eigene abgeschlossene Änderungen `0001` bis `0004` dokumentiert. Für diesen Durchstich bleiben insbesondere Fragen, Lernchecks, Fortschritt, Landkarte und Offline-Nutzung zu prüfen.

1. Quellengebundene Fragen je Lerninhalt prüfen.
2. Lokalen Fortschritt samt Persistenz über Reload und Trennung vom öffentlichen Katalog prüfen.
3. Lerncheck ohne Zeitdruck mit Bestehen, Nichtbestehen, Erklärung, anderem Fragensatz und änderbarem Fortschrittsvorschlag prüfen; nur vollständig korrekte Antworten bestehen.
4. Landkarte, freie Auswahl, Querverbindungen und Listenfallback prüfen.
5. Installation, Erstladen, Offline-Nutzung und kontrollierte Updates im Browser prüfen.
6. Gesamte Pflichtsuite und Kernabläufe auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf einem aktuellen iPhone prüfen.

## Abnahme

Die Anwendung ist über GitHub Pages erreichbar und installierbar; Karte und Listenfallback zeigen den Grundlagenpfad. Lernkarten und Lernchecks sind quellengebunden. Nach Nichtbestehen erscheinen Lösung, Begründung und Quelle; Wiederholung nutzt andere Fragen. Bestätigter Fortschritt übersteht einen Reload. Kernabläufe funktionieren nach dem Erstladen offline. Architektur-, Typ-, Inhalts-, Unit-, Komponenten-, Browser-E2E-, Abhängigkeits- und PWA-Prüfungen sind grün.
