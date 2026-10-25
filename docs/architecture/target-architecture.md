# Architektur und Leitplanken

## Aktueller Aufbau

Clientseitiges React/TypeScript; Vite erzeugt statische Dateien für GitHub Pages.
`topics` besitzt öffentliche Themen, Quellen, Metadaten und die Themenansicht,
`learning-checks` Fragenpools/Validierung und flüchtige Check-Antworten,
`learning-state` den lokalen Lernstand. `help` und `imprint` besitzen ihre Inhalte.

App komponiert über öffentliche `index.ts`-Einstiegspunkte; `data.ts` stellt
UI-freie Daten/Validierung für Node-Prüfungen bereit. Vertikalen importieren
einander nicht, Shared keine Vertikale/App. Hilfe/Impressum werden als JSX
an Themen übergeben; Themen verantwortet Positionierung und gemeinsamen Rückweg.
Props, Callbacks und kleine Datenansichten bilden die Verträge.

Vitest prüft Verhalten/Inhalte; dependency-cruiser mit SWC Importgrenzen und
Zyklen einschließlich Typimporten. Eine SWC-Syntaxprüfung erkennt unzulässige
Modulverbindungen im Produktcode. Chromium-E2E deckt Desktop/Smartphone ab.
Vertikaltests gehören zum Besitzer, fachliche Integration nach App und nur an
öffentliche Einstiegspunkte; Architekturtests prüfen Regeln. E2E-Hilfen liegen
unter `e2e/shared/`. Gemeinsame Farben/Grundstile ergänzen lokale Komponentenstile;
übergebene Inhalte werden ohne fremde CSS-Klassen im eigenen Container positioniert.

## Lokale Themensuche

`topics` besitzt die semantische Filterung einschließlich Editor, flüchtigem
Suchzustand und Web Worker. Ein gepinntes E5-Embeddingmodell berechnet lokal mit
CPU/WASM einen Vektor für die vollständige Eingabe. Vorbereitete Themenvektoren
gehören zu sachlichen deutschen Suchabsätzen; die Ergebnisliste behält ihre
Katalogreihenfolge. Modell, Tokenizer und Runtime liegen als beim Build geprüfte
statische Dateien auf derselben Website. Öffentliche Modellartefakte dürfen
gecacht werden, Suchtexte und Ergebnisse werden nicht gespeichert oder übertragen.
Die Suche erzeugt keine Antworten und erhält keine Werkzeuge. Der Worker wird
bei Abbruch, Fehler, Zeitüberschreitung oder längerer Inaktivität freigegeben.
Modell-, Tokenizer-, Runtime- oder Pooling-Wechsel benötigen eine neue versionierte
Assetadresse sowie passende Qualitätsprüfungen. Die
[Such-Spec](../changes/implemented/0080-local-ai-search.md) dokumentiert die
Auswahlregel und die akzeptierten Grenzen der Trefferqualität.

## Dauerhafte Leitplanken

Verbindlich: [Produkt/Datenschutz](../governance/durable-rules.md#produkt-und-datenschutz)
und [Architekturregeln](../governance/durable-rules.md#architektur-und-änderungen).
Zuständigkeiten/Verträge: [Vertikalen und Grenzen](verticals-and-boundaries.md).
Geplante Datenflüsse, Speicherung, Offline- und Browserfunktionen: [Backlog](../product/story-backlog.md).
Hier nur umgesetzte wesentliche Architekturentscheidungen ergänzen.
