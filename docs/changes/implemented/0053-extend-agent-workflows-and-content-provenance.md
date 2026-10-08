# Agentenabläufe ergänzen und Routing sowie transparente Inhalte veröffentlichen

## Ziel und Umfang

Bestehende Themen erhalten die freigegebenen Ergänzungen zu bedarfsgerechten Skills, Interviewverfahren, eigenen Projektregeln, modellabhängigem Prompting, Agentenschleifen, Zuständen und Orchestrierung, Hooks, unabhängigen Reviews, unnötigem Code, Sicherheits-Evals und Testdatenkontamination. Dots dienen als Beispiel für asynchrone Cloud-Arbeit. Bereits ausreichend erklärte Konzepte werden nicht verdoppelt.

Zwei neue Themen lösen konkrete Probleme: `task-based-model-routing` verteilt unterschiedliche Aufgaben auf passende Modelle; `ai-content-provenance-and-disclosure` erhält Herkunftsinformationen und macht KI-Beteiligung für Nutzer erkennbar. Beide haben Primär- und Sekundärquellen und gehören zu bestehenden Lernpfaden. Keine neuen Fragenpools, keine Änderungen vorhandener Fragen oder Antworten, keine neuen Abhängigkeiten.

Die Formulierung zu einer prozentualen Sicherheit und der vorgeschlagene Ersatz durch offene Fragen/Akzeptanzkriterien werden nicht übernommen. Der Fable-5-Leitfaden wird als Primärquelle ergänzt. Die unklare zusätzliche Aussage zur Reviewbedürftigkeit fachlicher Entscheidungen entfällt.

## Fachliche Entscheidungen und Abnahme

- Themen beginnen mit einem konkreten Problem und erklären die passende Lösung. Titel und Alltagsanker stellen die Lösung bzw. den Bedarf heraus; Prüfung und Abwägung sind unterstützende Aspekte oder Grenzen, außer bei ausdrücklich bestehenden Prüfthemen. Diese Vorgabe wird in der redaktionellen Richtlinie festgehalten.
- Die nachträglich gewünschte Architekturpräzisierung stellt fachliche vertikale Module, deren öffentliche Schnittstellen und erlaubte Abhängigkeiten in den Vordergrund. Schichtgrenzen in Auftragsklärung, Standards und ArchUnit-Beispiel werden entsprechend ersetzt. Bestehende Fragen zu konkreten ArchUnit-Schicht-APIs bleiben sachlich korrekt und unverändert; sie schreiben keine bevorzugte Gesamtarchitektur vor.
- Der Alltagsanker für Herkunft/Kennzeichnung zeigt eine falsche Erwartung an ein echtes Angebot: Eine Kundin möchte die abgebildete Torte bestellen, obwohl das Bild nur ein KI-Entwurf ist. Der Flyer enthält keinen Hinweis darauf. Die umgangssprachliche Formulierung passt zu den bestehenden Alltagsankern.
- Der EU AI Act erhält kein eigenes Gesetzesthema. Seine Transparenzpflichten werden im neuen Thema zur Herkunft/Kennzeichnung anhand Anbieter-/Betreiberrollen erklärt. Die allgemeine Einordnung von Rolle, Einsatzzweck und Risiko ergänzt das bestehende Verantwortungsthema. Das ist keine vollständige Darstellung aller gesetzlichen Pflichten.
- Quellen werden je Aussage ausgewählt, vorhandene Quellen und Fragenbezüge bleiben erhalten. Neu geprüfte Quellen erhalten den 09.10.2026; bestehende Einzelprüfdaten werden nicht pauschal aktualisiert. Höchstens 20 Quellen je Thema.
- Neue Themen sind in Titel-/Alltagsansicht und passenden Lernpfaden erreichbar; Primär-/Sekundärquellen erscheinen korrekt, ein Lerncheck wird für beide nicht angeboten.
- Bestehende Lernpfadnamen und Zugehörigkeiten bleiben erhalten; die zwei neuen IDs ergänzen passende Pfade in globaler Themenreihenfolge. 48 Themen, unverändert 42 Fragenpools.
- Vertikalen: Themen; Lernchecks ausschließlich Abnahmetest für unveränderte Pools. App/Architekturtests und Dokumentation zusätzlich. Keine automatische Veröffentlichung oder Commitfreigabe.

## Quellenprüfung

Prüftag: 09.10.2026. Öffentliche Originalquellen werden verwendet; private Notizen und ihr Speicherort werden nicht übernommen.

| Aussage | Quelle | Grenze / Einordnung |
| --- | --- | --- |
| Aufgaben klassifizieren und einfachen/schwierigen Modellen zuweisen; unabhängiger Evaluator | https://www.anthropic.com/engineering/building-effective-agents | Primärquelle für veröffentlichte Agentenmuster; keine zugesicherten Einsparungen. |
| Routing aus Präferenzdaten lernen | https://arxiv.org/abs/2406.18665 | Primäre RouteLLM-Forschung; Ergebnisse gelten für die untersuchten Modelle und Datensätze. |
| Modell-Routing im Anwendungsablauf einordnen | https://www.ibm.com/think/topics/agent-gateway | Sekundärer Überblick; Gateway-Funktionen sind keine zugesicherten Eigenschaften jedes Routers. |
| Strukturierte Agentenentscheidungen | https://typesafe.ai/blog/introducing-system-one-models-and-jev ; https://ollama.com/library/clef | Hersteller-/Distributordokumentation für Jev/Clef; Typkonformität ist keine fachliche Korrektheit. Laya bleibt ohne eindeutige Zuordnung ausgelassen. |
| Signierte Herkunft und entfernbare Metadaten, Wasserzeichen/Fingerprints | https://c2pa.org/faqs/ | Primärquelle; Herkunft ist kein Wahrheitsbeweis. |
| Offenlegung und Nutzung von Content Credentials auf einer Publikationsplattform | https://support.google.com/youtube/answer/15447836?hl=de | Deutsche Primärquelle für YouTubes Regeln; keine allgemeine Rechtsauslegung. |
| Grenzen von Herkunftsnachweisen und der Vertrauenskette | https://www.heise.de/news/Die-Lehren-aus-dem-C2PA-Debakel-Fotonews-der-Woche-39-2025-10672872.html | Deutsche Sekundärquelle; Kritik an der Vertrauenskette bedeutet nicht, dass jede kryptografische Signatur ungültig wäre. |
| Transparenzpflichten und rollen-/anwendungsbezogene Ausnahmen | https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act | Primäre Erläuterung der EU-Kommission; keine pauschale Kennzeichnungspflicht für jeden KI-Text. C2PA allein weist keine vollständige Rechtskonformität nach. |
| Rollen, Risikobezug und KI-Kompetenz | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai | Primäre Übersicht der EU-Kommission; die beiden fachlichen Themen behandeln die für ihren Anwendungsfall relevanten Aspekte, keinen vollständigen Compliance-Lehrgang. |
| Modellabhängiger Umfang und Instruktionen | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5 ; https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5 | Primärquellen für genau diese Modelle; keine Übertragung auf beliebige Modelle. Projekt-Pflichtprüfungen bleiben verbindlich. |
| Interview, Glossar/ADRs, Handoff und getrennte Review-Perspektiven | https://github.com/mattpocock/skills | Primärquelle für die konkreten Skills; keine Installation oder Übernahme ihrer Seiteneffekte. |
| Bedarfsgerechte Verfahren | https://agentskills.io/home | Primärquelle; Ausführung und Rechte hängen vom Harness ab. |
| Zustände, Abläufe, Checkpoints | https://docs.langchain.com/oss/python/langgraph/overview ; https://docs.langchain.com/oss/python/langgraph/persistence | Primärquellen; Graph Engineering hier als explizite Ablaufsteuerung, kein Repository-Codegraph. |
| Hooks | https://code.claude.com/docs/en/hooks-guide | Shell-Hooks von modellbasierten Hooks unterscheiden. Mods/Blast Radius nur bei verifizierbarem Original aufnehmen. |
| Erweiterungen der Agentenoberfläche | https://github.com/anthropics/claude-code-playground | Primäres Repository; keine ungeprüften Eigenschaften einer konkreten Blast-Radius-Erweiterung behauptet. |
| Projektspezifische Regeln automatisieren | https://www.archunit.org/userguide/html/000_Index.html | Primärer Leitfaden; eigene Regeln ergänzen vorhandene Standards und begründen keine allgemeingültige Architektur. |
| Unnötigen Code vermeiden | https://github.com/DietrichGebert/ponytail | Primärquelle; vorhandene Tokenquelle bleibt, keine Einsparversprechen. |
| Unerwünschtes zielgerichtetes Verhalten und kontaminierte Benchmarks | https://www.anthropic.com/research/agentic-misalignment ; https://arxiv.org/abs/2310.17623 | Primäre Forschung; experimentelle Szenarien sind keine Häufigkeitsangaben zum Produktbetrieb. |
| Asynchrone Cloud-Agenten | https://learn.chatgpt.com/docs/dots | Primärquelle; schrittweise Verfügbarkeit und konkrete Berechtigungen beachten. |

Die Sekundärquellen wurden auf Erreichbarkeit, Aussagebezug und Sprache geprüft. Das Routing-Video wurde zusätzlich auf Originalsprache und Gesamtlänge geprüft. Unbestätigte Laufzeiten oder uneindeutige Stichworte werden nicht veröffentlicht. Für Herkunft/Kennzeichnung wurde keine ausreichend belegte deutsche Originalvideoquelle aufgenommen; die deutsche Sekundärquelle ist ein Artikel.

## Umsetzung und Nachweise

RED, GREEN und REFACTOR sowie betroffene Suite, Pflichtsuite, Quellenentscheidung und Browsernachweis:

| Schritt | Ergebnis |
| --- | --- |
| RED Unit | Bestehende Themen-, Lernpfad- und Pooltests erweitert: 5 Tests fachlich fehlgeschlagen, 29 übersprungen; 19,64 s; Exitcode 1. Zwei Themen, ihre Pfadzugehörigkeiten, neue fachliche Aspekte und die Fable-Primärquelle fehlen. |
| RED Browser | Bestehenden Quellenablauf um beide Themen erweitert: 1 Desktop-Test fehlgeschlagen; 34,56 s; Exitcode 1. Der neue Routing-Eintrag fehlt in der Themenliste. |
| RED Architekturpräzisierung | Bestehenden Themen-Abnahmetest erweitert: 1 Test fehlgeschlagen, 23 übersprungen; 26,82 s; Exitcode 1. Fachliche Modulgrenzen und das konkrete Bestellung-/Versand-Beispiel fehlen; bisherige Texte nennen noch Schichten. |
| GREEN betroffene Suite | 106 Unit-/Komponententests nach Architekturpräzisierung bestanden; 11,37 s; Exitcode 0. Themen, Modulbeispiele, Pfad-Reihenfolge, Quellen und unveränderte Fragenpools abgesichert. |
| REFACTOR | Zentrale Themenpflege und bestehende Testorganisation erhalten. Vorhandene Tests erweitert; keine neuen Testdateien. Quellen angehängt, sodass bisherige Quellenbezüge der Fragen erhalten bleiben. Das C2PA-Konzept trennt signierte Herkunftsangaben ausdrücklich von wahrheitsgemäßem Inhalt. |
| Pflichtchecks | `npm run check`: Stand mit finalem Torten-Anker vollständig bestanden; 21,55 s; Exitcode 0. 130 Unit-/Komponententests, 32 Inhaltsprüfungen, 11 Runner-Selbsttests, 4 Umfangsprüfungen sowie Formatierung, Lint, Typen, Architektur, Lizenzprüfung und Produktionsbuild grün. |
| Audit und Umfang | `npm audit --audit-level=high`: 0 Schwachstellen; Exitcode 0. Diffprüfung und Umfangsprüfung grün; zwei Vertikalen, Themen und Lernchecks. |
| Eigene Browserprüfung | Codex In-app Browser / Chromium, lokaler Vite-Server: beide neuen Themen geöffnet, Problem/Lösung und Primär-/Sekundärquellen sichtbar; Routing-Video mit 11:10. Beide ohne Lerncheck. Herkunftsthema in seinem Sicherheits-/Qualitätspfad nach Standards und vor Web-Sicherheitsbaseline; 10 Themen im Pfad. Darstellung im Screenshot kontrolliert. |
| Abschließende E2E-Prüfung | 76 Desktop-/Smartphone-Tests mit finalem Torten-Anker bestanden; 48,22 s; Exitcode 0. Eigener temporärer Testserver zur Wiederverwendung; nach Abschluss beendet. |
| Browser nach Architekturpräzisierung | ArchUnit-Thema geöffnet: fachliche Module Bestellung/Versand, öffentliche API, erlaubte Abhängigkeiten und Zyklen korrekt sichtbar. |
| Finaler Alltagsanker | Torten-Beispiel in der lokalen Vorschau geprüft: fehlender Hinweis bereits im Flyer, keine Weitergabe oder abgeschnittene Kennzeichnung. Umgangssprachliche Formulierung ohne Änderung des Themenverhaltens oder der Fragen. |
| Browser unmittelbar vor Commit | Codex In-app Browser / Chromium: Herkunftsthema mit finalem Torten-Anker und beiden Quellengruppen geöffnet; zurück zur Liste mit 48 Themen, Routing-Thema erneut geöffnet, Inhalt und Video mit 11:10 sichtbar. Ablauf bestanden. |
| Manuelle Abnahme | Manuelle Prüfung und Commitfreigabe erfolgt. |

Videoauswahl: „LLM Routers Explained!!!“, 1littlecoder, https://www.youtube.com/watch?v=cdvNTmDIvec, englisches Original, tatsächliche Playerlaufzeit 11:10. Beschreibung, Kapitel und englisches Transkript geprüft; erklärt Routing, RouteLLM und Zielkonflikte. Historische Benchmark-/Preisangaben sind keine Aussagen zum aktuellen Produktbetrieb. Automatisch erzeugte Untertitel sind keine synchronisierte Tonspur. Deutsche automatisch synchronisierte Empfehlungsvideos wurden ausgelassen; die Regel für deutsche Originalvideos steht in der Quellenrichtlinie.

Abgeschlossen: Inhalte, Quellen und Lernpfade umgesetzt; verpflichtende Prüfungen und Browserablauf bestanden, manuelle Abnahme erfolgt. Keine offenen fachlichen Schritte.
