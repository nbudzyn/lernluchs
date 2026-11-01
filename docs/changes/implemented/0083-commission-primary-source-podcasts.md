## Weitere NotebookLM-Podcasts aus den Primärquellen erzeugen, bis das kostenfreie Google-Budget erschöpft ist
- Weitere NotebookLM-Podcasts aus den Primärquellen beauftragen, bis das kostenfreie Google-Budget erschöpft ist
- Wo es noch keine Primärquellen-NotebookLM-Podcasts gibt.
  - Vorrangig Themen, die mit der Integration von KI in Java-Anwendung sowie mit der Modernisierung von Altanwendungen zu tun haben
- Vorgaben sollten klar sein (Guardrails?)

Nur beauftragen, nicht downloaden.
- Wir haben bereits noch andere ausstehende Podcasts, die downzuloaden zu integrieren sind - machen wir dann später alles in einem Schwung.


## Ziel, Umfang und Entscheidungen

Nur zusätzliche Erzeugungsaufträge für vorhandene Themen erteilen; keine Audios herunterladen, keine Links integrieren und keine App-, Inhalts- oder Skriptänderung. Bestehende Aufträge und Notebooks vor Neuanlage auf Duplikate prüfen. Die ausdrückliche Story-Ausnahme verschiebt Übernahme und Integration bereits fertiger Audios auf später. Die Beauftragung umfasst ausdrücklich auch alle aktuell kostenlos angebotenen späteren Erzeugungsaufträge; ein Ende der unmittelbaren Erzeugungsmöglichkeit beendet die Story nicht.

Vorrang: Java-KI-Integration, Legacy-Modernisierung, anschließend passende Guardrails. Alle textuellen Primärquellen des jeweiligen Themas importieren und Import/Quellenauswahl nachweisen. Neue Notebooks tragen exakt den Thementitel mit „ - Primärquellen“. Detaillierte Analyse auf Deutsch, Länge Standard, Wunschdauer 35 Minuten, Zielgruppe Senior Java/Web-Entwickler, Stichtag 01.11.2026, Betrachtungszeitraum 01.05.–01.11.2026. Quellengebundene Aussagen, Grenzen und Gegenpositionen im Prompt verlangen.

Betroffene fachliche Vertikalen: keine Codeänderungen; nur vorhandene Themen als Auftragsgrundlage. Auf Folgeauftrag den dauerhaften NotebookLM-Ablauf präzisiert: Auftragsumfang, beide kostenlosen Erzeugungswege, eindeutiges Stoppkriterium, Fortsetzung eines Sammelauftrags und gezielte Behandlung geänderter Oberflächen. Keine neuen Abhängigkeiten. Lokale Zuordnung, Kontoinformationen und Betriebsdiagnosen bleiben außerhalb von Git. Keine kostenpflichtigen Erweiterungen. Nach bestätigtem Auftrag keine automatische Fertigstellungsabfrage.

## Risiken und Abnahme

Duplikate anhand vorhandener Notebooks und lokaler Zuordnung vermeiden. Fehlende wesentliche Quellen führen zur Zurückstellung des Themas. Unklaren Erzeugungsstart nicht wiederholen. Nur sichtbar bestätigte Starts als beauftragt zählen. Öffentliche Nachweise enthalten ausschließlich fachliche Ergebnisse.

Abnahme: zusätzliche Aufträge mit passenden Primärquellen und Erzeugungseinstellungen nachvollziehbar; Download/Integration bleiben späterer Arbeit vorbehalten. Abschluss erst nach manueller Abnahme und gesonderter Commit-Freigabe.

## Umsetzung und Nachweise

Aktivierung und Bestandsabgleich erfolgt. Für Java-KI sind bereits Primärquellen-Notebooks vorhanden; kein weiteres angelegt. Sechs zusätzliche Erzeugungsaufträge wurden in der NotebookLM-Oberfläche bestätigt:

| Thema | Textuelle Primärquellen | Nachweis |
| --- | --- | --- |
| `refactorings-and-migrations-with-openrewrite` | 2 | Vollständiger Import und Auswahl; Erzeugungsstart bestätigt. |
| `design-and-legacy-specification` | 2 | Vollständiger Import und Auswahl; Erzeugungsstart bestätigt. |
| `codegraphs-for-large-repos` | 3 | Vollständiger Import und Auswahl; Erzeugungsauftrag bestätigt. |
| `coding-agent-context-and-trust-boundaries` | 2 | Vollständiger Import und Auswahl; Erzeugungsauftrag bestätigt. |
| `archunit-for-java-architecture` | 1 | Vollständiger Import und Auswahl; Erzeugungsauftrag bestätigt. |
| `module-boundaries-and-public-interfaces` | 3 | Vollständiger Import und Auswahl; Erzeugungsstart bestätigt. |

Alle Aufträge: detaillierte Analyse, Deutsch, Standardlänge, Wunschdauer 35 Minuten; Zielgruppe, Stichtag, Betrachtungszeitraum und Quellenbindung gemäß Umfang. Notebook-Linkfreigaben ohne Kopierberechtigung gespeichert und erneut geprüft. Keine Audios heruntergeladen oder integriert. Browser nach Beauftragung geschlossen; keine automatische Fertigstellungsabfrage. Operative Beauftragung abgeschlossen; betriebliche Angaben, Begrenzungsnachweise und Zuordnungen bleiben ausschließlich lokal.

Dokumentationsprüfung einschließlich der präzisierten Ablaufvorgaben mit Node 24 über den npm-JavaScript-Einstieg und Silent-Runner: `npm run --silent test:docs`, 1 bestanden, 18,57 s, Exitcode 0. Whitespace-Prüfung grün. Manuelle Abnahme sowie Commit- und Integrationsfreigabe erfolgt.

RED/GREEN und Code-Subagentenreview sind bei dieser operativen Beauftragung ohne Produkt-, Test- oder Skriptänderungen nicht anwendbar. Keine App-Änderung; keine App-E2E erforderlich.

Quellenprüfung am 01.11.2026: OpenRewrite-Quickstart und Migrationsrezept aus den vorhandenen Themen-URLs erreichbar. Das Rezept wird beim Import im aktuellen Code-Genome-Katalog angezeigt und enthält die Spring-Boot-3.5-Migrationsschritte; Prompt unterscheidet Rezepte, Werkzeuge und Lizenzgrenzen. Thoughtworks-Fallstudie „From Black Box to Blueprint“ auf martinfowler.com und Charity Majors „AI demands more engineering discipline“ erreichbar; Fallstudie und persönliche Positionen im Prompt ausdrücklich eingegrenzt. Vorhandene Quellen-URLs bleiben unverändert. Notebook-Linkfreigaben ohne Kopierberechtigung gespeichert und erneut geprüft.

Fokussierte Quellenprüfung durch einen Subagenten: Codebase Memory MCP, IntelliJ MCP Server und der auf Air Context weitergeleitete JetBrains-Context-Link sind erreichbar. Die Quellen unterscheiden lokalen Strukturgraph, IDE-Werkzeuge und cloudbasierte semantische Suche. Der Codegraph-Prompt nennt Air Context, Indexalter, dynamische Grenzen und den belegten Datenfluss; keine unbelegten Übertragungsannahmen und keine unabhängigen Wirksamkeitsbehauptungen aus Herstellerbenchmarks. Die bestehende Themenformulierung wird mit dieser reinen Beauftragungs-Story nicht geändert. Vor einer späteren Audiointegration Inhalt und Aktualität erneut prüfen.

Weitere Quellenprüfung durch denselben Subagenten am 01.11.2026: OWASP LLM01 und GitHub Copilot Risks and Mitigations tragen den Podcast zu Vertrauensgrenzen; Prompt Injection, technische Rechtebegrenzung und menschliche Freigaben sind keine vollständige Schutzgarantie. Der ArchUnit User Guide trägt Bytecode-, Abhängigkeits-, Zyklus- und Einfrierregeln; grüne Architekturregeln beweisen keine fachlich sinnvolle Architektur. Die drei vorhandenen Java-/TypeScript-Modulquellen sind erreichbar und vollständig importiert; der Modul-Prompt unterscheidet Sprachmodule und fachliche Grenzen sowie Einstiegsindex und Detailbelege. Keine Quellenmetadaten oder Laufzeitinhalte geändert.
