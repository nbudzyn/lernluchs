## Zwei weitere NotebookLM-Podcasts aus den Primärquellen erzeugen und in die Anwendung einbinden
Zwei weitere NotebookLM-Podcasts aus den Primärquellen erzeugen und in die Anwendung einbinden
- Beachten, dass die automatischen Tests keinen sichtbaren Browser öffnen, nicht auf das Internet zugreifen und auch in der GitHub-CI laufen.
- Beide neuen Podcasts beim bestehenden Thema `java-ai-applications` einbinden; den bisherigen Podcast erhalten.
- Folge Konzepte und Architektur: Einsatzideen, Kundennutzen, Lösungsbausteine, Architektur, Daten und Berechtigungen, Risiken, Kosten und Betrieb aus Sicht eines erfahrenen Software-Architekten. Inspirierend und entscheidungsorientiert, ohne Spring-APIs oder Implementierungsanleitung.
- Folge Spring AI in der Praxis: konkrete Konfiguration, Modellzugriff, RAG, Tools, strukturierte Ausgabe, Memory, Tests und Betrieb. Keine Wiederholung der konzeptionellen Einführung oder des Frameworkvergleichs.
- Beide Folgen klar voneinander abgrenzen; keine doppelten Erklärblöcke. Deutsch, Zielgruppe erfahrene Java-/Webentwickler, Wunschdauer jeweils ungefähr 35 Minuten.
- Geeignete textuelle Primärquellen prüfen und gezielt ergänzen. Zwei getrennte lokale Erzeugungsaufträge mit unterschiedlichen Schwerpunkten verwenden.
- Betroffene fachliche Vertikale: Themen. Genau ein fokussiertes Abschlussreview durch einen Subagenten nach dem letzten GREEN.

## Ziel und Nicht-Ziele

Zwei fertige, öffentlich abrufbare Audio-Zusammenfassungen ergänzen das vorhandene Java-KI-Thema. Erst Konzepte und Architektur, danach Spring-AI-Implementierung, danach die bisherigen Sekundärquellen. Kein neues Lernthema, keine Fragenpools und keine App-Funktion für KI-Aufrufe. Keine neuen Abhängigkeiten oder Erweiterung der Podcast-Automatisierung.

## Entscheidungen und Risiken

- Zwei lokale Statusverzeichnisse erlauben getrennte Aufträge desselben Themas mit eigenen Prompts. Profil und Notebook-Zuordnung bleiben außerhalb von Git; Aufträge und Browserzugriffe laufen nacheinander.
- Beide Notebooks heißen gemäß Podcast-Ablauf wie das aktuelle Thema mit ` - Primärquellen`; eindeutige lokale Zuordnungen unterscheiden sie. Vor Neuanlage vorhandene passende Notebooks prüfen.
- Textuelle Primärquellen werden thematisch ergänzt. Beide Aufträge verwenden die vollständige geprüfte Primärquellenmenge; die Prompts grenzen die tatsächlich zu behandelnden Aspekte ausdrücklich gegeneinander ab. Sekundärquellen, bestehende Audios und Lernluchs-Texte werden nicht importiert.
- Stichtag 24.10.2026, betrachteter Sechsmonatszeitraum 24.04.2026–24.10.2026; ältere Grundlagen bleiben als solche kenntlich. Stabile Spring-AI-Version und Preview-Funktionen auseinanderhalten.
- Generative Audios können trotz klarer Prompts Wiederholungen oder Fehler enthalten. Verfügbare Audio-/Transkriptansicht auf Schwerpunkt und offensichtliche Dopplungen prüfen; keine Garantie für Wortlaut oder Wunschdauer behaupten.
- Keine kostenpflichtigen Aktionen. Bei fehlender Anmeldung, wesentlichen Importlücken oder ausgeschöpftem Kontingent den konkreten offenen Schritt mit dem Nutzer klären.
- Nach bestätigtem Erteilen der Audio-Aufträge den Entwickler mit einer groben Fertigstellungsschätzung informieren, bei deutlich unterschiedlichen Zeiten je Folge. Danach ausschließlich auf sein Fortsetzungssignal wieder prüfen; unabhängige Story-Arbeiten bleiben möglich. Maßgeblich ist der entsprechend ergänzte Podcast-Ablauf.
- Die bestehende lokale Browserfixture zum Quellenabgleich verwendet externe Favicon-URLs nur als Testdaten. Alle Requests dieser Fixture abfangen, damit auch sie ohne Internetzugriff läuft; der Browser bleibt headless.

## Abnahme

- Zwei neue deutsche Audios mit unterschiedlichen HTTPS-Audio-Links, tatsächlichen Titeln, Laufzeiten und Prüftag beim bestehenden Thema.
- Konzepte zuerst, Spring-Implementierung danach; bisheriger Podcast und weitere Quellen bleiben erhalten. Höchstens zwanzig Quellen.
- Konzeptfolge deckt Kundenberatung und Architekturentscheidungen ab; Implementierungsfolge behandelt einen zusammenhängenden Spring-AI-Umsetzungsablauf ohne erneute Grundlagenblöcke.
- Automatisierte Regression prüft beide neuen Audioeinträge, deren Reihenfolge und Erhalt des bisherigen Audios ohne sichtbaren Browser oder externe Requests.
- Lokaler Browsernachweis prüft Reihenfolge, Sprache, Laufzeit und Links. Danach Pflichtsuite und manuelle Nutzerprüfung; Commit und lokale Fast-forward-Integration erst nach ausdrücklicher gemeinsamer Freigabe.

## Quellenprüfung

Am 24.10.2026: offizielle Spring-AI-Referenz zeigt Version 2.0.2 und Boot-Kompatibilität 4.0.x/4.1.x. Bestehende Angabe 2.0.1 im Thementext gezielt aktualisieren; keine Preview zur Implementierungsbaseline machen.

| Quelle | Gestützte Aspekte und Grenzen |
| --- | --- |
| Anthropic: Building effective agents | Eigene Erfahrungen zu einfachen Lösungen, Workflows/Agenten, Kosten und Latenz. Grundlage von 2024; Herstellerperspektive und Hinweis auf inzwischen geänderte Werkzeuge berücksichtigen. |
| OWASP: LLM Top 10, 2025 | Prompt Injection, Datenabfluss, Ausgabevalidierung, übermäßige Handlungsbefugnis, Ressourcenverbrauch; Risikorahmen, keine vollständige Sicherheitsgarantie. |
| Spring AI: Getting Started | Stabile Version, Boot-Kompatibilität, BOM und Startkonfiguration. |
| Spring AI: Chat Client | Modellzugriff, synchrone/streamende Antworten, Advisors, strukturierte Rückgabe. |
| Spring AI: Retrieval Augmented Generation | RAG-Komponenten und Advisors; Berechtigungen müssen fachlich durchgesetzt werden. |
| Spring AI: Tool Calling | Toolregistrierung und kontrollierte Ausführung durch die Anwendung. |
| Spring AI: Chat Memory | Konversationsspeicherung, Repository und begrenzte Aufbewahrung; kein unbegrenztes Gedächtnis. |
| Spring AI: Output Converters | Strukturierte Rückgabe und Konverter; syntaktische Konformität ersetzt keine fachliche Prüfung. |
| Spring AI: Observability | Metriken und Traces für Modell-/Tool-/Retrieval-Aufrufe; sensible Inhalte schützen. |

Die sieben bereits enthaltenen textuellen Primärquellen ebenfalls am 24.10.2026 im Original geprüft: Spring-GA-Beitrag (Boot-4-Baseline und Toolschleife), LangChain4j Introduction (Funktionen und Anwendungsfälle), Quarkus-Integration (CDI/Native/Observability), Google Gen AI Java SDK (direkte Anbieterintegration), Spring AI Alibaba (alternative Agentenintegration), Spring MCP-Übersicht (Server-/Client-Integration), Spring 2.1.0-M1-Beitrag (Preview und angekündigte Agentenunterstützung). Herstellerdarstellungen sind keine unabhängigen Wirksamkeitsnachweise. Neue Dokumentation ist kein Nachweis für eine neue Entwicklung im betrachteten Zeitraum.

## Umsetzung und Nachweise

### Ergänzender Sicherheits- und CI-Auftrag

Die bestehende Audit-Sperre direkt im Projekt beheben und den vorhandenen Audit-Schritt unmittelbar nach `npm ci` ausführen, damit bei bekannten hohen Schwachstellen keine weiteren Prüfungen starten. Keine Dependabot-Konfiguration oder andere Update-Automation anlegen. Sicherheits-/CI-Änderungen in einem eigenen getesteten Commit von den Podcast-Änderungen trennen.

Gezielte Aktualisierung vorhandener Entwicklungsabhängigkeiten: Vitest 5.0.1 auf die gepatchte Linie ab 5.0.3 einschließlich passender Vitest-Pakete; transitive undici-Abhängigkeit von jsdom innerhalb ihres kompatiblen Versionsbereichs auf mindestens 8.12.2. Keine neue Bibliothek, kein `audit fix --force`, keine Änderung der produktiven React-Abhängigkeiten. Risiken sind Änderungen am Testwerkzeug und an jsdoms HTTP-Implementierung; vollständige Pflichtsuite und Lizenzprüfung nach der Aktualisierung erneut ausführen.

RED für das Sicherheitsupdate ist der bereits dokumentierte Audit-Fehler gegen den unveränderten Lockfile-Stand. Die bisherige CI-Reihenfolge vor der Änderung gezielt prüfen; anschließend bestätigen, dass Audit nach Installation und vor allen Validierungs-/Test-/Buildschritten steht. Das bereits durchgeführte einmalige Storyreview bleibt erhalten; keine zweite Reviewrunde.

### Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Quellenaktualisierung | Datumsregression vor der Inhaltsänderung fehlgeschlagen: Java-KI-Prüfung noch 07.10. statt 24.10.2026; Exitcode 1. |
| GREEN: Quellenaktualisierung | Spring-AI-Angabe 2.0.2, neun ergänzte Primärquellen, sieben bestehende Primärquellen erneut geprüft; Themen-Testdatei: 24 bestanden, 1,73 s, Exitcode 0. |
| RED: zwei Audiofolgen | Neue Regression vor der Einbindung fehlgeschlagen: nur ein bestehendes Audio statt drei, neue Metadaten und Reihenfolge fehlen; 1 fehlgeschlagen, 24 übersprungen, 1,72 s, Exitcode 1. |
| Unabhängige Vorprüfungen | Format: grün (5,07 s), Lint: grün (4,63 s), Typprüfung: grün (4,83 s), jeweils Exitcode 0. Architektur mit vorhandener Node-Laufzeit 24.19.0: keine Verstöße bei 109 Modulen und 215 Abhängigkeiten, statische Modulprüfung grün und 4 Tests bestanden, 8,26 s, Exitcode 0. Diff betrifft fachlich ausschließlich `topics`; Vertikalgrenze und Whitespace-Prüfung grün. Diese Vorprüfungen ersetzen nicht die Pflichtsuite nach der letzten produktrelevanten Änderung. |
| Quellenumfang | Lokale Katalogprüfung: 18 bestehende Quellen einschließlich 16 textueller Primärquellen; mit zwei neuen Audios genau 20. Bisheriger Audio-Link vorhanden; Exitcode 0. |
| Offline-Browserfixture | Favicon-Requests der bestehenden Quellenabgleich-Fixture abgefangen; Podcast-Toolingtests: 14 bestanden, 8,80 s, Exitcode 0. Keine Produktfunktion ergänzt. |
| GREEN: zwei Audiofolgen | Beide fertigen Audioeinträge vor den bisherigen Sekundärquellen eingefügt; Themen-Testdatei: 25 bestanden, 23,36 s, Exitcode 0. |
| Öffentliche Audioprüfung | Beide unterschiedlichen Artefaktlinks in nicht angemeldetem Browser mit Wiedergabesteuerung erreichbar, jeweils 16 Quellen. Tatsächliche Titel und geladene Laufzeiten: „Sichere KI Architektur für Java Backends“ (25:50), „Sichere LLM-Endpunkte mit Spring AI“ (27:31). Deutsch bei der Erzeugung in der Oberfläche bestätigt. |
| Einmaliges fokussiertes Subagentenreview | Unabhängiger Reviewer prüfte den damaligen vollständigen Podcast-Story-Diff gegen `3e0e2c3`, die neue aktive Spec und gezielt Katalogvalidierung sowie Quellenanzeige nach dem Reviewvertrag einschließlich der 24 Fowler-Smells. Keine belegbaren Fehler oder Verbesserungen; keine Vorschläge abzulehnen. Reviewer führte keine Tests oder Änderungen aus. Die später beauftragte Sicherheits-/CI-Korrektur war nicht Teil dieses Reviews; keine zweite Reviewrunde. |
| Lokaler Browsernachweis | Codex In-app-Browser, `http://127.0.0.1:5373/`: Schnellfilter „Java-Dienst“, Thema geöffnet, Sekundärquellen mit Architekturfolge 25:50, Spring-Folge 27:31, bisherigem Podcast 24:16 und anschließendem Textlink geprüft. Alle Audios mit `[DE]`, zugänglichem Audio-Symbol und den richtigen öffentlichen Linkzielen; redaktionelle Metadaten korrekt. Screenshot lokal außerhalb von Git gespeichert. |
| RED: ursprüngliches Sicherheitsgate | `npm audit --audit-level=high`: Exitcode 1, zwei moderate und ein hoher Paketbefund. Bestehende Entwicklungsabhängigkeiten: `jsdom@30.1.0 → undici@8.10.2`, `vitest@5.0.1 → @vitest/mocker@5.0.1`. Die Podcast-Einbindung selbst änderte keine Abhängigkeiten. Dieser Befund begründete den nachträglichen Sicherheitsauftrag. |
| Pflichtsuite vor Sicherheitskorrektur | `npm run check` mit Node 24.19.0 vollständig grün, Exitcode 0: Format, Lint, Typen, 11 Runner-Selbsttests, 198 Unit-/Komponententests (62,49 s), Inhaltsvalidierung mit 35 Tests (2,37 s), Architektur einschließlich 4 Vertikalgrenztests, Lizenzen und Produktionsbuild. `npm run --silent test:e2e`: 82 bestanden, 60,79 s, Exitcode 0. Sicherheitsgate zu diesem Zeitpunkt separat rot. |
| RED/GREEN: früher CI-Audit | Gezielte Reihenfolgeprüfung vor der Änderung fehlgeschlagen (Exitcode 1): nach Installation folgte die Vertikalprüfung. Audit direkt hinter `npm ci` verschoben; Reihenfolge und genau ein Audit-Aufruf anschließend bestätigt, 2 Prüfungen, Exitcode 0. Qualitätsstrategie an die Reihenfolge angepasst. |
| GREEN: Sicherheitsupdate | Vitest und @vitest/mocker 5.0.3; transitive undici-Abhängigkeit 8.12.3. Zugehörige Lockfile-Anpassungen geprüft: Vitest-Begleitpakete und kompatible Abhängigkeiten erneuert, zwei nicht mehr benötigte Pakete entfernt; keine neue Bibliothek oder produktive Abhängigkeit ergänzt. `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0. |
| Pflichtsuite nach Sicherheitskorrektur | `npm run check` mit Node 24.19.0 erneut vollständig grün, Exitcode 0: Format, Lint, Typen, 11 Runner-Selbsttests, 198 Unit-/Komponententests (61,87 s), Inhaltsvalidierung mit 35 Tests (2,37 s), Architektur einschließlich 4 Vertikalgrenztests, Lizenzen und Produktionsbuild. `npm run --silent test:e2e`: 82 bestanden, 60,36 s, Exitcode 0. Zusammen mit Audit 0 Schwachstellen und gezielter CI-Reihenfolgeprüfung vollständig grüne Pflichtsuite. |

## Manuelle Abnahme und Grenzen

Es war kein echtes Transkript über den öffentlichen Player, die Eigentümer-Audioansicht oder das Audio-Menü zugänglich. Gesprochene Sprache, fachliche Vollständigkeit und tatsächliche inhaltliche Abgrenzung wurden deshalb nicht unabhängig durch den Agenten am Audio geprüft. Die getrennten Erzeugungsanweisungen sind kein Ersatz für diesen Nachweis. Die manuelle Hör-/Nutzerprüfung ist positiv bestätigt.

Abnahmeablauf: Java-KI-Thema über den Schnellfilter öffnen, unter Sekundärquellen zuerst die Architekturfolge (25:50), dann die Spring-Folge (27:31) und danach den bisherigen Podcast (24:16) prüfen. Neue Links öffnen die jeweiligen öffentlichen Audios. Die Hörprüfung umfasst die vereinbarte konzeptionelle beziehungsweise technische Abgrenzung sowie Sprache und fachliche Qualität.

Manuelle Abnahme und Commit-Freigabe erfolgt. Sicherheits-/CI-Korrektur und Podcast-Story werden in getrennten Commits abgeschlossen. Die vollständigen grünen Nachweise gelten für den unveränderten geprüften Stand; Spec-Abschluss und Archivierung ändern ihn nicht. Lokale Fast-forward-Integration in `main` ist nicht freigegeben; kein Push durch Codex. Es wurden keine weiteren Audio-Aufträge beauftragt.
