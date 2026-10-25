# Dauerhafte Vorgaben

Verbindliche Produkt-, Datenschutz-, Architektur- und Abhängigkeitsregeln.
Änderungen erfordern eine ausdrücklich dokumentierte Architekturentscheidung.
Handlungsschranken: [AGENTS.md](../../AGENTS.md); Pflichtlektüre je Aufgabe: [Index](../INDEX.md).

## Produkt und Datenschutz

- Öffentliche, statische App auf GitHub Pages; kein Login und keine serverseitige Benutzerverwaltung.
- Persönlicher Zustand bleibt bis zu einer eigens spezifizierten, nutzergesteuerten Synchronisation auf dem jeweiligen Gerät, außerhalb von Git.
- Konto-, Tarif-, Budget-, Kontingent- und Rücksetzangaben externer Dienste, Anmeldedaten, Browserprofile, private Zuordnungen und Fehlermeldungen bleiben lokal außerhalb von Git. Öffentliche Arbeitsnachweise enthalten nur fachliche Ergebnisse und offene Aufgaben, keine Rückschlüsse auf diese Angaben.
- Keine Analytics, Tracker, Analyse-/Marketing-Cookies, Telemetrie, externen Fonts oder extern nachgeladenen Laufzeit-Skripte.
- Externe Quellen und Videos öffnen sich nur nach bewusster Nutzeraktion.
- Öffentliche Inhalte und persönlicher Zustand bleiben getrennt. Themen sind nur lesbar; Benutzereingaben ändern sie nicht.
- Die App enthält keinen KI-Schlüssel. Ausschließlich die Themensuche darf ein
  lokal im Browser laufendes Embeddingmodell aufrufen; Eingaben bleiben auf dem
  Gerät. Modell und Laufzeitdateien werden von derselben Website ausgeliefert,
  keine Cloudinferenz oder externen Laufzeit-Skripte. Das Modell erzeugt keine
  Antworten und kann keine Funktionen auslösen.

## Architektur und Änderungen

- Fachlogik bleibt in Vertikalen mit eigenen Daten und eigener Anzeige. Vertikalgrenze und frühzeitige Rückfrage: [AGENTS.md](../../AGENTS.md#nicht-verhandelbar).
- `src/app` komponiert nur, ohne fachliche Anzeige- oder Datenlogik. App importiert Vertikalen nur über `index.ts` (UI) und optional `data.ts` (UI-freie Daten/Validierung); App darf Shared nutzen.
- Vertikalen importieren nur eigene Module, Shared und externe Bibliotheken, auch bei Typimporten. Shared importiert innerhalb der Anwendung nur Shared.
- Vertikalen verbergen interne Daten und Implementierungsdetails. Schmale Props, Callbacks und JSX-Eingaben gehören zur konsumierenden Vertikale; App verbindet die öffentlichen Verträge explizit.
- Produktcode erlaubt statische Imports und dynamische Imports mit festem Pfad. Berechnete Modulpfade, CommonJS-Verbindungen, `eval`/`Function` und automatische Modulregistrierung per Dateisuche sind ausgeschlossen. `import.meta.env` bleibt für explizite Umgebungskonfiguration erlaubt.
- Typabhängigkeiten in Produktcode und Tests verwenden statische `import type`-Deklarationen, keine Inline-Typimporte wie `type T = import("…").T`. Die statische Prüfung ist eine Entwicklungsleitplanke, keine Sicherheitsgrenze gegen absichtliche Verschleierung.
- Farben, Schriftrollen und Grundstile gelten gemeinsam. Layout und Komponentenstile bleiben lokal; Vertikal-CSS referenziert keine fremden Vertikal-Klassen. Übergebene Inhalte werden durch eigene Container positioniert.
- Architekturausnahmen benötigen eine eigene Spec, Begründung und zusätzliche automatisierte Architekturtests.
- Öffentliche, stabile Verträge bleiben klein. Gemeinsamer Code enthält nur Datentypen, IDs und Validierung, keine fachliche Abkürzung.
- Ungültige Zustände sollen nicht ausdrückbar sein.

## TDD und Spec-Driven Development

Maßgeblich: [TDD und Spec-Nachweise](../changes/README.md#tdd-und-spec-nachweise),
[Prüfumfang](../quality/verification-strategy.md#prüfumfang-und-nachweise) und
[Testorganisation](../quality/verification-strategy.md#testorganisation).

## Abhängigkeiten und Sicherheit

- Minimale, etablierte, aktiv gepflegte Open-Source-Abhängigkeiten; ungewöhnliche Bibliotheken vermeiden.
- Neue Bibliotheken in der Spec begründen: Nutzen, Wartung, Lizenz, Datenschutz und Sicherheitslage.
- Sicherheits- und reguläre Abhängigkeitsupdates in separate, getestete Commits; kein automatischer Merge.
- Eigener Code: Apache-2.0.
