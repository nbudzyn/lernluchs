## Erzeugte Primärquellen-Podcasts herunterladen und integrieren
Ale bereits beauftragten Folgen nach ausdrücklichem Fortsetzungssignal auf Fertigstellung prüfen, lokal herunterladen und in ihre bestehenden Themen integrieren:
- Aufgaben mit Modell-Routing an passende Modelle verteilen (`task-based-model-routing`)
- Modellwechsel und API-Lebenszyklen absichern (`model-and-api-lifecycle`)
- Und alle weiteren

Vorhandene lokale Notebook-Zuordnungen, Aufträge und Prompts aus der Beauftragungs- und Integrationsstory wiederverwenden; keine erneute Generierung oder doppelten Notebooks. Keine automatische Statusprüfung oder kostenpflichtige Beschleunigung starten.

Für jedes tatsächlich fertige Audio Originalquellen-Zuordnung, deutsche Ausgabe, tatsächlichen Titel, positive Laufzeit und anonym erreichbaren öffentlichen Audio-Artefaktlink prüfen. Audiodateien ausschließlich lokal außerhalb von Git aufbewahren; vor eigener Veröffentlichung der Dateien Distributionsrechte klären. Den geprüften Link als erste Sekundärquelle mit `audio-summary`, `audio`, `secondary`, `de` und tatsächlichem Prüftag ergänzen; vorhandene Podcasts und Quellen erhalten. Persönliche Zuordnungen, Kontodaten und Fehlermeldungen nicht versionieren.

Die drei Folgen zu Spec-Driven Development, Evals/Traces und MCP/A2A/ACP sind bereits integriert und gehören nicht zum offenen Umfang. Für die verbleibenden Integrationen aktive Spec, RED → GREEN mit erweitertem bestehendem Katalogtest, genau ein Subagentenreview, Pflichtsuite und lokalen App-Browsernachweis durchführen. Manueller Nutzertest und ausdrückliche Commit-Freigabe bleiben erforderlich.

## Ziel, Grenzen und Entscheidungen

Am 03.11.2026 einmalig alle bereits beauftragten, noch nicht integrierten Folgen prüfen. Fertige Folgen herunterladen und integrieren; auf unfertige Folgen ausdrücklich nicht warten. Keine neue Generierung, keine automatischen Folgeprüfungen. Unfertiger Rest bleibt als Folgeaufgabe im Backlog erhalten.

Betroffene Vertikale: Themen. Änderungen nur am Quellenkatalog, seinem bestehenden Regressionstest, unmittelbar betroffener bestehender E2E-Prüfung und Storydokumentation. Keine neuen Abhängigkeiten. Audio bleibt lokal außerhalb von Git; keine eigene Dateiveröffentlichung ohne geklärte Distributionsrechte. Notebook-Zuordnungen und Diagnosen bleiben lokal.

## Abnahme und Risiken

Je übernommener Folge: Originalquellen stimmen mit dem bestehenden Auftrag überein; öffentliches Audio anonym erreichbar; tatsächlicher Titel, Deutsch und positive Laufzeit geprüft; Download vorhanden. Neuer Podcast steht als erste Sekundärquelle vor erhaltenen Bestandsquellen. Quellenobergrenze und Eindeutigkeit bleiben gewahrt.

Metadatenprüfung ist keine vollständige fachliche Hörprüfung; aus Primärquellen erzeugte Audios bleiben Sekundärquellen. Thema und fachliche Texte werden nicht neu bewertet oder umdatiert.

## Nachweise

- Einmalige Prüfung am 03.11.2026: alle 13 verbleibenden beauftragten Folgen fertig. Keine neue Generierung, kein Polling und kein Warten auf Fertigstellung. Kein unfertiger beauftragter Rest für eine Folgeaufgabe.
- Originalquellen-URLs und Auswahl gegen bestehende Aufträge geprüft; öffentliche Audioseiten in getrenntem unangemeldetem Browserkontext geprüft: Wiedergabeschaltfläche, tatsächlicher Titel, positive Laufzeit und passende Quellenanzahl. Deutsche Erzeugungsanweisung und deutsche Ausgabetitel geprüft; keine vollständige fachliche Hörprüfung. Alle 13 Downloads mit positiver Dateigröße ausschließlich lokal aufbewahrt.
- RED: Bestehenden Test `places the new primary-source podcasts first and retains the earlier audio` um 13 Fälle erweitert. Gezielter Silent-Lauf: 1 fehlgeschlagen, 24 übersprungen, Exitcode 1 (21,88 s); neue Laufzeiten/Prüftage und Erhalt der bisherigen Sekundärquellen scheitern vor Integration erwartungsgemäß.
- GREEN: 13 Audioquellen vor bisherigen Sekundärquellen ergänzt. Bestehende Datumsprüfung auf Nicht-Audioquellen begrenzt: Ergänzte Audios besitzen unabhängige Prüftage; Themenprüftage bleiben unverändert. Silent-Lauf `tests/verticals/topics/topics.test.ts`: 25 bestanden, Exitcode 0 (1,57 s).
- Audit: 0 Schwachstellen, Exitcode 0. Keine Abhängigkeiten geändert.

| Thema | Geprüfte Laufzeit |
| --- | --- |
| `task-based-model-routing` | 23:30 |
| `model-and-api-lifecycle` | 14:37 |
| `refactorings-and-migrations-with-openrewrite` | 23:39 |
| `design-and-legacy-specification` | 18:01 |
| `codegraphs-for-large-repos` | 13:32 |
| `coding-agent-context-and-trust-boundaries` | 23:45 |
| `archunit-for-java-architecture` | 27:55 |
| `module-boundaries-and-public-interfaces` | 25:06 |
| `web-security-baseline` | 18:44 |
| `protect-secrets-and-sensitive-data-with-ai` | 15:07 |
| `local-model-stack-evaluation` | 19:06 |
| `dependency-security-assessment` | 19:17 |
| `llm-fallibility-and-counterchecks` | 22:09 |

- Genau ein fokussiertes Subagentenreview gegen Basis `26afc57fc09ead7f21014ce2ac2fa243cf0bcb8e`, einschließlich neuer Spec, Themenkatalog, Katalogtest und unmittelbar betroffener bestehender E2E-Prüfung. Ein belegter Fund: positionsabhängige Audioauswahl traf nach Ergänzung die neue Folge, erwartete aber die alte Laufzeit. Empfehlung umgesetzt: bisherigen Podcast über stabile URL auswählen, erste Primärlinks unabhängig von der späteren Audiozeile prüfen. Kein weiterer belegter Fund, keine Ablehnung und keine zweite Runde.
- Abschließender Pflichtcheck nach Reviewkorrektur: `npm run check`, Exitcode 0 (84,26 s). 230 Unit-/Komponententests bestanden (64,63 s), 35 Inhaltsprüfungen bestanden (3,03 s); Formatierung, Lint, Typen, Runner-Selbsttests, Architektur, Lizenzen und Produktionsbuild grün.
- Echte Modelltests mit `LERNLUCHS_AI_TESTS=1`: `semanticModel.ai.test.ts` und `independentSemanticQuality.ai.test.ts`, 42 bestanden, Exitcode 0 (14,66 s). Die nachfolgende reine E2E-Testkorrektur ändert keine Eingaben dieser Prüfungen.
- Vollständiger Silent-E2E-Lauf nach Korrektur auf eigenem Port 4273: 88 bestanden, Exitcode 0 (89,80 s), einschließlich Desktop-/Mobil-Chromium und KI-Firefox.
- Lokaler Chrome-App-Browsernachweis auf `http://127.0.0.1:5273/`: alle 13 betroffenen Themen geöffnet. Jeweils erste Sekundärquelle mit tatsächlichem Titel, `[DE]`, Laufzeit, Audio-Symbol und korrektem öffentlichen Ziel geprüft; sämtliche Bestandslinks in ihrer Primär-/Sekundärgruppierung erhalten. Modell-Routing-Link aus der App geöffnet und öffentliches Audio erreicht. API-Lebenszyklus zusätzlich bei 390 × 844 geprüft: lesbare Quellenanzeige ohne horizontalen Überlauf. Desktop-/Mobilansicht visuell kontrolliert.
- Alle 13 Aufträge nach App-Nachweis ausschließlich im lokalen Status als integriert markiert. Keine Audio-/Profil-/Diagnosedateien im Git-Diff. Arbeitsdiff betrifft genau eine fachliche Vertikale; Whitespace-Prüfung grün. Commitgrenze vor Erstellung geprüft: genau eine fachliche Vertikale (Themen).

- Dokumentationsprüfung: `npm run --silent test:docs`, 1 bestanden, Exitcode 0 (1,62 s).

## Abnahme und Freigabe

Manueller App-Nutzertest positiv bestätigt; Commit und Integration nach `origin/main` ausdrücklich freigegeben.