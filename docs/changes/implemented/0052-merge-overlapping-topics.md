## Sich überschneidende Themen nach Prüfung zusammenlegen
Prüfe, welche Themen sich deutlich überschneiden und gibt eine tabellarische Übersicht.
Stimme mit dem Entwickler ab, welche Themen zusammengelegt werden sollen.
Beim Zusammenlegen:
- Themen-Titel und -Anker zusammenlegen
- Probleme, Beschreibung und Grenzen zusammenlegen, dabei keine Informationen wegfallen lassen
- Alle Fragen der Fragenpools zusammenfügen, so dass sich am Ende die doppelte Menge von Fragen ergibt (klare Duplikate entfernen); sollte eine Maximalgrenze für die Fragen überschritten sein, dann Grenze erhöhen.
- Alle Quellen zusammenfügen und sortieren: Podcasts ganz oben bei den Sekundärquellen. Sollte eine Grenze überschritten sein, Grenze erhöhen

Bei einigen Themen (die für sich stehen oder zusammengelegt werden) steht sehr im Vordergrund, dass eine Technologie zu prüfen / abzuwägen sei oder erst nach genauer Abwägung einzusetzen.
- Im Titel soll die Technologie im Vordergrund stehen, nicht der Prüfbedarf
- So auf im Anker
- Das Problem kann gern weiter eingeschränkt werden, so dass klar wird in welche Kontext die Lösung sinnvoll ist
- Die Beschreibung soll die Prüfung weiterhin erwähnen (solange sie nicht schon im Problem genannt ist). Trotzdem soll der eigentliche Inhalt klar werden und wie er das Problem (bestenfalls) löst.


### Abgestimmtes Refinement
A, B und C zusammenlegen, D und E getrennt lassen. Die vier prüfbetonten Titel und Anker überarbeiten. Lernpfade erhalten ihre Zugehörigkeiten nach ID-Ersetzung und folgen immer der globalen Reihenfolge.

## Refinement und Ziel

Die Auswahl wurde abgestimmt: A Problem/Zielklärung, B Spec-Frameworks/OpenSpec und C parallele Agenten/Subagents zusammenlegen. Werkzeugrechte/Harness und Prüf-Gates/Evals bleiben getrennt. Skills, Context7, lokale KI-Stacks und Tokenwerkzeuge erhalten technologiebetonte Titel und Alltagsanker; Abwägung und Grenzen bleiben erhalten.

| Gruppe | Erhaltene ID | Entfallende ID | Titel |
| --- | --- | --- | --- |
| A | `problem-understanding-and-change-boundaries` | `goal-discovery-and-stop-criteria` | Problem, Ziel und Änderungsumfang klären |
| B | `spec-driven-development-openspec` | `spec-framework-selection` | Spec-Driven Development mit OpenSpec, Spec Kit und Kiro |
| C | `parallel-agent-task-boundaries` | `specialized-subagents-and-ownership` | Subagents mit klaren Aufgaben und Zuständigkeiten einsetzen |

Vertikalen: Themen und Lernchecks. Keine neuen Abhängigkeiten, keine neuen Fragen oder Änderungen ihrer Antworten. Die bestehende unabhängige Fragenprüfung bleibt für unveränderte Fragen gültig.

## Entscheidungen, Risiken und Abnahme

- 46 Themen und 42 Fragenpools. Alle Inhalte beider Ursprungsthemen einschließlich Java-/Web-Beispielen und Grenzen bleiben fachlich enthalten.
- Globale Reihenfolge ist maßgeblich: zusammengelegte Themen stehen an der früheren Position der Gruppe. Alle 14 Lernpfade behalten die Vereinigung ihrer Zugehörigkeiten, ohne doppelte IDs, in globaler Reihenfolge.
- Alle Fragen samt stabilen IDs, Optionen, Erklärungen und Quellenbezügen erhalten, außer klaren fachlichen Duplikaten. Pools A/B/C umfassen 50/41/42 Fragen. Entfernt: SF01–SF09 (OpenSpec-Artefakte und Ablauf bereits durch S02–S08/S20 abgedeckt) sowie subagent-ownership-01/02/03/04/15/17/24/25 (Auftragsgrenzen, Rückgabe, unabhängige Aufgaben und angemessener Aufwand bereits durch PA01/02/10/13/15/18/20 abgedeckt).
- Quellen nach Identität vereinigen, Primärquellen zuerst, Audio vor anderen Sekundärquellen. Kein neuer Quellenhöchstwert nötig: alle Vereinigungen bleiben unter 20; Fragen haben keine Maximalgrenze.
- Bestehende lokale Fortschrittsdaten werden nicht geändert. Entfallende Themen-IDs folgen dem vorhandenen Verhalten für entfernte Themen; ein früher bestandenes entfallendes Thema überträgt seinen Status nicht automatisch auf das zusammengelegte Thema. Kein Eingriff in die Lernstand-Vertikale.
- Browserablauf: alle drei Themen in Titel- und Alltagsansicht öffnen, vereinigte Inhalte und Quellen prüfen, relevante Lernpfade filtern, globale Reihenfolge und eindeutige Einträge prüfen sowie einen zusammengelegten Lerncheck starten.
- Pflichtsuite: `npm run check`, `npm run --silent test:e2e`, `npm audit --audit-level=high`, Vertikalgrenze und Diff prüfen. Manuelle positive Bestätigung vor Archivierung und Commit erforderlich.

## Quellenprüfung

Prüftag: 08.10.2026. Bestehende Quellen und Einzelprüfdaten werden übernommen; keine pauschale Aktualisierung ungeprüfter Quellen.

| Aussage | Primärquelle | Grenze |
| --- | --- | --- |
| Problem, Nutzerbedarf, Umfang und Fortsetzung/Stopp klären | [GOV.UK Discovery](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) | Auf kleine Coding-Aufgaben angepasst, keine Pflichtdauer übernehmen. |
| Proposal, Specs, Design und Tasks strukturieren eine Änderung | [OpenSpec Quickstart](https://openspec.dev/docs/quickstart), [Schema](https://openspec.dev/docs/schemas/spec-driven) | Kein Korrektheitsbeweis; bestehende Details und Telemetriegrenze erhalten. |
| Präzise Teilaufträge, unabhängige Aufgaben, Synthese und Kostenbegrenzung | [Anthropic Research-System](https://www.anthropic.com/engineering/multi-agent-research-system) | Rechercheergebnisse garantieren keinen Nutzen für Coding. |

Weitere vorhandene Technologieaussagen werden unverändert übernommen. Titeländerungen schaffen keine neuen Produktversprechen.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED | Bestehende Themen-/Lernpfad- und Fragenpooltests erweitert. Gezielter Runnerlauf: 4 Tests fachlich fehlgeschlagen, 27 übersprungen, 23,97 s, Exitcode 1: alte Themenzahl, unveränderte Poolgrößen, fehlende neue Titel/Anker. |
| GREEN | Themen und Pools vereinigt, klare Duplikate entfernt, Quellen dedupliziert; Pfadzugehörigkeiten vereinigt und global sortiert. |
| REFACTOR | Bestehende historische Erwartungen auf Zusammenlegungen angepasst. Zusätzliche Distraktorprüfung behält ihren bisherigen Umfang anhand stabiler Fragen-IDs; keine Antworten geändert. Fingerprint prüft alle erhaltenen Fragen einschließlich Optionen, Erklärungen und URLs; Pfad-Fingerprint prüft alle Namen und Mitgliedschaften. Quellenvereinigung und globale Reihenfolge sind zusätzlich abgesichert. |
| Betroffene Suite | `npm run --silent test:unit -- tests/verticals/topics tests/verticals/learning-checks tests/architecture/learning-data.test.ts`: 106 bestanden, 7,36 s, Exitcode 0. |

| Pflichtsuite | `npm run check`: grün, Exitcode 0, 34,67 s; 130 Unit-/Komponententests, 32 Inhaltsprüfungen, 11 Runner- und 4 Vertikalgrenzen-Selbsttests. Format, Lint, Typen, Architektur, Lizenzen und Produktionsbuild bestanden. |
| E2E | `npm run --silent test:e2e`: 76 Desktop-/Mobiltests bestanden, 343,43 s, Exitcode 0. Alle Testfälle waren vor dem Prozessabschluss fertig; der zu diesem Lauf gehörende Vite-Testserver musste beim Aufräumen gezielt beendet werden. Keine Tests wiederholt. |
| Sicherheit und Diff | `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0. `git diff --check`: grün. Arbeitsbaum mit bestehendem `assertCommitScope` geprüft: zwei Vertikalen (Themen und Lernchecks), Exitcode 0. |
| Browsernachweis | Codex In-app-Browser, lokal auf Port 4173: A in Alltagsansicht, B und C in Titelansicht geöffnet; vereinigte Inhalte, beide Java-/Web-Beispiele und Quellen geprüft, Podcasts zuerst. C auf „Parallele Coding-Agenten kritisch erproben“ gefiltert: sieben eindeutige Themen in globaler Reihenfolge. C-Lerncheck mit übernommener Subagent-Frage gestartet und abgebrochen. B auf Auswahlpfad gefiltert: sieben eindeutige Themen in globaler Reihenfolge. Ansicht ohne Filter visuell geprüft; 46 Themen. Für die eigene Abnahme anschließend die bestehende lokale Vorschau auf `http://127.0.0.1:5173/` mit 46 Themen geöffnet. |

| Abschließende Browserprüfung | Unmittelbar vor dem Commit im Codex In-app-Browser auf Port 5173 den Subagent-Lernpfad erneut gefiltert: sieben eindeutige Themen in globaler Reihenfolge. Lerncheck erfolgreich gestartet. |
| Abnahme | Manuelle Abnahme und ausdrückliche Commitfreigabe erfolgt. |

Abgeschlossen; keine offenen Umsetzungsschritte.
