## Fünf weitere NotebookLM-Podcasts für die Primärquellen beauftragen
Fünf weitere NotebookLM-Podcasts für die Primärquellen vorbereiten und beauftragen.
- Themen, wo es noch keine Primärquellen-Podcasts gibt
- Praxisnahe Themen rund um die Entwicklung mit KI oder die Integration von KI in (Java-)Anwendungen
- Fürs Herunterladen und Integrieren der Podcast eigene Story anlegen und oben ins Backlog schieben!

## Ziel und Umfang

Fünf deutsche Audio-Zusammenfassungen aus den textuellen Primärquellen bestehender Themen vorbereiten. Abgenommener Abschlussumfang: drei bestätigte Beauftragungen; die zwei weiteren Beauftragungen sowie Download und Integration aller fünf Folgen gehören zur ersten Folge-Story im Backlog. Keine Änderungen an App, Themenkatalog, Tests oder Automatisierung.

## Refinement und Entscheidungen

- Themenauswahl bestätigt: `spec-driven-development-openspec`, `agent-evals-and-traces`, `agent-protocol-integration`, `task-based-model-routing`, `model-and-api-lifecycle`.
- Zielgruppe: Senior Java/Web-Entwickler; Deutsch, detaillierte Analyse, Standardlänge, etwa 35 Minuten Wunschdauer. Stichtag 24.10.2026, Betrachtungszeitraum 24.04.–24.10.2026; tatsächliche Dauer erst in der Folge-Story prüfen.
- Nur textuelle `primary`-Quellen des jeweiligen Themas verwenden; Quellenabdeckung und erfolgreichen Import prüfen. Bestehende Sekundärquellen und Podcasts nicht als Eingabe verwenden.
- Vor neuen Aufträgen lokale Zuordnung und vorhandene Notebooks auf passende frühere Primärquellen-Aufträge prüfen. Kein Duplikat bei laufendem oder unklarem Erzeugungsstatus.
- Keine Abos oder Zahlungen auslösen. Offene fachliche Arbeit in der Folge-Story festhalten; persönliche Kontoinformationen bleiben lokal.
- Nach bestätigter Beauftragung unmittelbar informieren, grobe Dauer anhand sichtbarer Hinweise einordnen und ausschließlich auf Nutzersignal fortsetzen. Keine automatische Statuskontrolle.
- Persönliche Notebook-Zuordnungen, Kontingentstände, Profil und Fehler bleiben lokal außerhalb von Git.
- Reine redaktionelle Beauftragung und Dokumentation, keine Produktimplementierung und keine betroffene Code-Vertikale. Keine neuen Abhängigkeiten; kein RED/GREEN oder Subagentenreview für diese Dokumentations-Story erforderlich.

## Risiken und Abnahme

- Google-Anmeldung gegebenenfalls ausschließlich durch den Nutzer im getrennten Profil.
- Quellenimport kann scheitern; bei wesentlichen Lücken das Thema zurückstellen und keine vollständige Quellenabdeckung behaupten.
- Prüfen: fünf unterschiedliche passende Themen mit vollständig importierten Primärquellen und gespeicherter Linkfreigabe, drei bestätigte Audio-Aufträge mit deutschem Prompt sowie zwei explizite Folgeaufgaben zur weiteren Beauftragung. Unklare oder nicht erteilte Aufträge nicht als beauftragt zählen.
- Die Folge-Story enthält die zwei weiteren Beauftragungen, Download, Qualitätsprüfung und Integration samt lokalem Datenschutz, TDD, Review und manueller Abnahme der Produktänderung.
- Abschluss erst nach Prüfung der Beauftragungsnachweise; Commit weiterhin nur nach Nutzerfreigabe.

## Umsetzung und Nachweise

- Worktree geprüft: sauberer zugeordneter temporärer Worktree, keine aktive Spec oder Schreibsperre; eigener Branch `codex/five-primary-source-podcasts` aus geprüftem `main`, das nach Fetch mit `origin/main` übereinstimmte. Entwickler-Worktree unverändert.
- Themenauswahl und Audio-Einstellungen im Refinement bestätigt.
- `npm ci` abgeschlossen, Exitcode 0; `npm audit --audit-level=high`: keine Schwachstellen, Exitcode 0. Keine versionierten Abhängigkeiten geändert.
- Bestehender Planer erfolgreich ausgeführt: fünf ausgewählte Themen mit 9 / 7 / 8 / 4 / 4 textuellen Primärquellen, insgesamt 32. Vor Neuanlage lokale Zuordnungen und vorhandene Themen-Notebooks geprüft.
- Originalseiten am 24.10.2026 aufgerufen: OpenSpec-Quickstart, Schema, CLI und Projektseite für Ablauf/Validierung; Spec-Kit-Einstieg, Juni-Newsletter und History für Prozess, Konvergenz und Entwicklung; beide Kiro-Seiten für Spec-Abläufe. Evals: beide OpenAI-Guides für Traces/Kriterien, Anthropic-Evals für Agentenprüfungen, ADK für Ergebnis-/Ablaufprüfung, Misalignment-Studie für unerwünschtes Verhalten, Kontaminationspaper für Benchmarkgrenzen und Hamels FAQ für Fehleranalyse. Protokolle: beide A2A-Seiten für Rollen/Aufgabenlebenszyklus, ACP-Übersicht/Changelog für Editor-Agent-Vertrag und Reifegrad, MCP-Autorisierung/Revision für Rechte/Protokollwechsel sowie Java-SDK-Changelog/Roadmap für verfügbare versus geplante Unterstützung. Routing: Anthropic für Routingmuster, RouteLLM für Präferenzdaten, TypeSafe/Jev und Ollama/Clef für strukturierte Entscheidungen. Lebenszyklen: Gemini-Abkündigungen/Changelog sowie beide Claude-Prompting-Guides für Migration und modellspezifische Verhaltensunterschiede. URLs bleiben unverändert im Themenkatalog.
- Grenzen: Herstellerseiten sind interessengeleitete Primärquellen; Leistungsversprechen nicht verallgemeinern. Ältere Forschungsarbeiten bleiben zeitlose Grundlagen. Roadmap, experimentelle ACP-Änderungen und veröffentlichte SDK-Unterstützung auseinanderhalten. Dynamische Dokumentation kann nach dem Stichtag wechseln; tatsächliche Audioqualität wird erst in der Folge-Story geprüft.
- Folge-Story steht an erster Stelle im Backlog; ursprünglichen fachlichen Auftrag übernommen und persönliche Angaben gemäß Datenschutzvorgabe entfernt.
- Sechs passende ältere Themen-Notebooks auf Originalquellen geprüft: jeweils andere Quellen als die aktuellen textuellen Primärquellen des Themas. Keine neue Primärquellen-Folge darunter. Fünf deduplizierte Auftragspläne mit konkreten thematischen Java-/Web-Schwerpunkten lokal gespeichert.
- Fünf neue Themen-Notebooks vorbereitet; alle 32 vorgesehenen Primärquellen vollständig importiert und je Thema anhand der Original-URLs, erfolgreichen Importzustände und vollständigen Auswahl geprüft. Linkzugriff nach Speichern und erneutem Laden bestätigt, Duplizieren der Quellen ausgeschaltet. Keine Personen eingeladen.
- Lokaler Browsernachweis in Google Chrome: Spec-Driven Development (9 Quellen), Evals und Traces (7) und MCP/A2A/ACP (8) mit Deutsch, detaillierter Analyse, Standardlänge und vollständigem thematischem Prompt beauftragt. Jeweils die sichtbare Auftragsbestätigung in der Hintergrundwarteschlange geprüft. Tatsächliche Laufzeit und fertiges Audio sind noch nicht nachgewiesen.
- Modell-Routing und Modellwechsel/API-Lebenszyklen sind mit jeweils vier Quellen und bestätigter Linkfreigabe vorbereitet, aber noch nicht beauftragt. Bestehende lokale Zuordnung und Prompts für eine ausdrückliche Fortsetzung erhalten; keine Duplikate anlegen. Persönliche Konto-, Kontingent- und Terminangaben bleiben ausschließlich im lokalen Status außerhalb von Git.
- Browser nach der Beauftragung geschlossen. Keine weiteren Audio-Statusprüfungen, Watcher oder automatischen Wiederaufnahmen eingerichtet. Weitere Beauftragung und Fertigstellungsprüfung ausschließlich nach Nutzersignal.
- Dokumentationsprüfung: `git diff --check` ohne Befund; ursprüngliche Story aus dem Backlog entfernt, Folge-Story mit allen offenen Schritten an erster Stelle. Keine Produktänderung, deshalb keine App-Tests ausgeführt. Reine Dokumentations-Story, daher kein Subagentenreview erforderlich.
- Datenschutzregel für versionierte Arbeitsnachweise ausdrücklich ergänzt: keine persönlichen Konto-, Tarif-, Budget-, Kontingent- oder Rücksetzangaben in Specs, Backlog oder Committexten. Keine persönlichen Statusdateien versioniert.
- Nutzerabnahme des Abschlussumfangs sowie Commit- und Veröffentlichungsfreigabe erfolgt. Spec zur Archivierung abgeschlossen; Veröffentlichung ausschließlich aus dem eigenen Worktree nach erneuter Remote- und Fast-forward-Prüfung.
