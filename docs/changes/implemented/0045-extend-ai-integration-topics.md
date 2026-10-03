# Neue Themen für Agentenintegration, Modellwechsel und Java-KI

## Neue Themen ergänzen
Die folgenden Ansätze für drei neue Themen prüfen, ggf. als drei neue Themen integrieren. Recherche! Keine Themenüberschneidungen!

- Agentensysteme verbinden und betreiben / MCP, A2A und ACP gezielt einsetzen
  - Coding-Agenten und Spec-Systeme gezielt auswählen; Werkzeug-, Agenten- und Editor-Schnittstellen haben verschiedene Vertrauens- und Lebenszyklusmodelle ([MCP25], [A2A], [ACP], [OAI-API], [JB-ACP], [GH-SEP7], [GH-SEP21], [OAI-API], [OWASP-A], [OWASP-L], [OAI-SEC], [ANT-SEC])
  - Autorisierung, Zustands- und Task-Lebenszyklus, Sandboxes, Observability, Kosten- und Sicherheitsprüfung
- Modellwechsel und API-Lebenszyklen absichern
  - Coding-Agenten und Spec-Systeme gezielt auswählen; Modelle, Tool-Fähigkeiten, Abkündigungen und Regressionen als Wartungsaufgabe behandeln ([OAI-API], [GEM-API]).
- KI-Funktionen in Java-Webanwendungen bauen
  - Modell- und API-Wahl, Spring-AI-Toolschleife, MCP-Server/-Client, strukturierte Ausgabe, multimodale Suche, Evaluation und Betrieb ; Spring AI 2.x schafft zusätzlich einen eigenständigen Anwendungsbau-Pfad ([SPR-M2], [SPR-2], [SPR-21])

Integrieren =
- Themen voll ausformulieren, aber noch ohne Fragenpools
  - Primär- und Sekundärquellen; gern auch YouTube; gern auch etwas auf Deutsch
- Jedes Thema soll in mindestens einen Lernpfad aufgenommen werden (ggf. Maximallänge der Lernpfade erhöhen)
- Themen sinnvoll in die Gesamtreihenfolge einreihen.
  - Relative Reihenfolge der Lernpfade muss zur Gesamtreihenfolge passen.

Außerdem token-efficiency-tools um fehlende Quellen (zu den nicht abgedeckten Tools) ergänzen, insbesondere um YouTube-Videos.

Vor der Umsetzung Vorschlag machen!

[MCP25]: https://blog.modelcontextprotocol.io/posts/2025-11-25-first-mcp-anniversary/
[A2A]: https://a2a-protocol.org/latest/blog/
[ACP]: https://blog.jetbrains.com/ai/2026/01/acp-agent-registry/
[JB-ACP]: https://blog.jetbrains.com/ai/2025/12/bring-your-own-ai-agent-to-jetbrains-ides/
[OAI-API]: https://developers.openai.com/api/docs/changelog
[GH-SEP7]: https://github.blog/changelog/2026-09-10-GitHub-copilot-weekly-releases-september-7/
[GH-SEP21]: https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21/
[GEM-API]: https://ai.google.dev/gemini-api/docs/changelog
[SPR-M2]: https://spring.io/blog/2026/01/23/spring-ai-2-0-0-M2-available-now/
[SPR-2]: https://spring.io/blog/2026/06/12/spring-ai-2-0-0-GA-available-now/
[SPR-21]: https://spring.io/blog/2026/09/25/spring-ai-2-1-0-M1-available-now/
[OWASP-A]: https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/
[OWASP-L]: https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/
[OAI-SEC]: https://openai.com/index/codex-security-now-in-research-preview/
[ANT-SEC]: https://www.anthropic.com/news/claude-code-security
[ANT-EVAL]: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
### Geklärter Zuschnitt

- Drei neue Themen: Agentensysteme über MCP, A2A und ACP verbinden; Modellwechsel und API-Lebenszyklen absichern; KI-Funktionen in Java-Webanwendungen bauen.
- Java-Thema technologieoffen: Spring AI und LangChain4j vergleichen, Quarkus-Integration und direkte Anbieter-SDKs einordnen. Spring AI Alibaba nur als Erweiterung des Spring-AI-Ökosystems erwähnen.
- Reihenfolge: Modellwechsel nach Coding-Agent-Oberflächen; Protokolle nach Werkzeugrechten; Java-KI nach Modulgrenzen. Relative Bestandsreihenfolge bleibt erhalten.
- Modellwechsel und Protokolle ergänzen den Werkzeugwahl-Lernpfad. Neuer Java-KI-Lernpfad aus vorhandenen Grundlagen und dem neuen Thema, in Gesamtreihenfolge.
- Token-Thema: headroom und ponytail mit Primärquellen ergänzen; geeignete Videos recherchieren; Ausgabe-, Kontext- und Codevermeidung unterscheiden. Keine pauschalen Einspargarantien.
- Neue Themen ohne Fragenpools. Bestehende 45 Fragenpools bleiben erhalten; Tests unterscheiden veröffentlichte Themen und verfügbare Pools.

## Ziel, Grenzen und Abnahme

Vertikalen: Themen und Lernchecks (nur Testanpassung für Themen ohne Pools); App-Testzählungen dürfen angepasst werden. Keine neue Abhängigkeit.
48 eindeutige Themen und 14 Lernpfade; jedes Thema mindestens einem Pfad zugeordnet, jeder Pfad in Gesamtreihenfolge. Neue Themen erklären Problem, Kernkonzept, Java-/Web-Einsatz und Grenzen mit geprüften Quellen und Metadaten. Bestehende Fragen und Quellen bleiben nutzbar. Der neue Java-KI-Pfad enthält Geheimnisschutz, Modellwechsel, Werkzeugrechte, Protokolle, Modulgrenzen, Java-KI, TDD und Web-Sicherheit. Maximal acht Themen; keine Erweiterung eines Laufzeitlimits nötig.
Im lokalen Browser: neuen Java-KI-Pfad filtern, neues Thema mit Quellen öffnen, fehlenden Lerncheck prüfen; Token-Thema mit ergänzten Quellen öffnen. Desktop und Smartphone automatisiert prüfen.

## Fachliche Quellenprüfung

Prüftag: 2026-10-03. Quellen werden nur für die genannten Aspekte übernommen; keine allgemeinen Leistungs- oder Sicherheitsgarantien.

| Aussage / Aspekt | Geprüfte Originalquelle | Grenze / Unsicherheit |
| --- | --- | --- |
| MCP für Werkzeuge, A2A für Agentenkommunikation; Task-Lebenszyklus | https://a2a-protocol.org/latest/topics/a2a-and-mcp/ und https://a2a-protocol.org/latest/topics/life-of-a-task/ | Protokolle ersetzen keine betriebliche Rechteprüfung; keine universelle Interoperabilität behauptet. |
| ACP verbindet Client/Editor und Coding-Agent; Sitzungen, Fortschritt, Abbruch | https://agentclientprotocol.com/protocol/v1/overview | Gemeint ist Agent Client Protocol; optionale Fähigkeiten müssen ausgehandelt werden. |
| MCP-Autorisierung | https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization | Transportabhängig; keine Gleichsetzung mit Sandbox oder Fachberechtigung. |
| API-Abkündigungen und Ersatzmodelle | https://ai.google.dev/gemini-api/docs/deprecations und https://ai.google.dev/gemini-api/docs/changelog | Termine und Modelle ändern sich; keine konkreten Abschalttermine im Lerntext. |
| Modell-/Produktbewertung und Regressionen | https://martinfowler.com/articles/gen-ai-patterns/ | Sekundärquelle für Muster; Beispiele ersetzen keine projektspezifischen Evals. |
| Spring AI 2.0: Advisor-Toolschleife, strukturierte Ausgabe, MCP, Betriebsintegration | https://spring.io/blog/2026/06/12/spring-ai-2-0-0-GA-available-now/ | Spring Boot 4 als Kompatibilitätsgrenze; 2.1-M1 ist Vorabversion. |
| LangChain4j: Anbieterabstraktion, Tools, Memory und RAG; Quarkus | https://docs.langchain4j.dev/intro/ und https://docs.langchain4j.dev/integrations/frameworks/quarkus/ | Integrationsumfang und Reife versionsabhängig; keine vollständige Parität behauptet. |
| Direkte Java-SDKs | https://github.com/googleapis/java-genai | Anbieterbindung; SDK ist kein Ersatz für jede Frameworkfunktion. |
| Spring AI Alibaba als Erweiterung | https://github.com/alibaba/spring-ai-alibaba | Nur Einordnung; kein unabhängiger Ersatz für Spring AI. |
| Headroom verdichtet Kontext | https://github.com/headroomlabs-ai/headroom | Projektbenchmarks sind keine unabhängigen Garantien; Originaldaten und Datenfluss prüfen. |
| Ponytail vermeidet unnötigen Code; Caveman kürzt Prosa | https://github.com/DietrichGebert/ponytail und https://github.com/JuliusBrussee/caveman | Keine pauschale Kommandoausgabekompression; Einsparungen am eigenen Ablauf messen. |
| Caveman Code seit August 2026 eingefroren | https://github.com/JuliusBrussee/caveman-code | Weiter nutzbar, aber keine aktive Entwicklung; vom aktuellen Caveman-Projekt getrennt. |
| Ergänzendes Video zu den vier Tokenwerkzeugen | https://www.youtube.com/watch?v=vq70qWphRfk | Originalseite und automatisch erzeugtes deutsches Transkript geprüft, Abschnitt 2:00–3:12 behandelt Headroom, Ponytail und Caveman; Gesamtzeit im Player 6:57. Englisches Original, automatische Übersetzung keine redaktionell geprüfte deutsche Quelle. Sekundärquelle mit Werbeanteilen, Prozentangaben werden nicht als Garantie übernommen. |

Weitere Video-/Deutschquellen für die neuen Themen wurden recherchiert, aber keine ungeprüften Laufzeiten oder nicht erreichbaren Originalseiten integriert. Sekundärquellen bleiben nach den Quellenregeln optional: der GenAI-Musterartikel ergänzt Modellwechsel und Java-Anwendungsbau; Protokollunterschiede werden durch die jeweiligen Primärdokumentationen erklärt. Keine zusätzliche Videoquote für neue Themen eingeführt.

## Umsetzung und Nachweise

| Schritt | Nachweis |
| --- | --- |
| RED: Themen, Pfade und Tokenquellen | Gezielter eigener Unit-Runner: 3 Tests fehlgeschlagen, 25 übersprungen, 23,42 s, Exitcode 1. Bestand nur 45 statt 48 Themen, fehlender Java-KI-Pfad, neue IDs und Primärquellen fehlen; Ponytail-Wirkweise im Bestand unzutreffend. |
| GREEN | Derselbe Filter: 3 bestanden, 25 übersprungen, 1,44 s, Exitcode 0. Drei Karten, Pfadzuordnungen, Metadaten und Tokenquellen ergänzt. |
| REFACTOR | Inhalts- und Tokenanforderungen im gemeinsamen `topics.test.ts` getrennt, historische Quellen-/Videoauswahl gezielt erhalten, Pfad-Fingerprint prüft unveränderte relative Bestandsreihenfolge. Fragenpool-Tests prüfen die bestehenden 45 Pools und die drei bewusst poollosen Themen. Kein Laufzeit-Refactoring nötig. Betroffene Vertikalen: 98 Tests grün, 9,44 s, Exitcode 0; abschließender gezielter Inhalts-/Architekturtest: 29 grün, 1,53 s, Exitcode 0. |
| Prüfkorrekturen | Erste Pflichtsuite fand einen historischen Fingerprint für exakt 13 unveränderte Pfade; er wird jetzt auf den bewahrten Bestand angewendet. Erster E2E-Lauf erreichte einen zuvor laufenden Preview mit altem Build; für die Abnahme wird der aktuelle Pflichtsuite-Build verwendet. |
| Audit | `npm audit --audit-level=high`: 0 Schwachstellen, 5,06 s, Exitcode 0. |

| Pflichtsuite | Nach letzter produktrelevanter Änderung `npm run --silent check` vollständig grün: 128 Unit-/Komponententests (9,89 s), 32 Inhalts-/Poolprüfungen (2,55 s), 11 Runner-Selbsttests und 4 Vertikalprüfungen; Format, Lint, Typen, Architektur, Lizenzen und Produktionsbuild bestanden. Gesamtlauf 30,89 s, Exitcode 0. |
| E2E | `npm run --silent test:e2e`: 66 Prüfungen auf Desktop-/Mobile-Chromium grün, 26,77 s, Exitcode 0; darunter neue Karten, Pfadfilter, Quellen und bewusst fehlende Lernchecks sowie sämtliche Bestandsabläufe. Der abschließende Lauf erfolgte nach abgeschlossenem Build; der parallele Vorlauf hatte einen Timeout in einem bestehenden mobilen Abbruchtest. |
| Browsernachweis | Codex In-app-Browser unter `http://127.0.0.1:4173/`: aktueller Build mit 48 Themen; Java-KI-Pfad auf acht Themen gefiltert, Java-KI-Karte mit Spring AI/LangChain4j/Quarkus/SDK-Vergleich, Primär-/Sekundärquellen und Wiedervorlage geprüft. Drei neue Themen ohne Lerncheck-Schaltfläche. Filter aufgehoben, Token-Karte mit Headroom-/Ponytail-Quellen und Video 6:57 geprüft. Screenshot außerhalb von Git gespeichert. |

Manuelle Nutzerabnahme und Freigabe erfolgt. Abschließender Browsercheck im Codex In-app-Browser: Schnellfilter auf das neue Java-KI-Thema angewendet, Karte geöffnet; Inhalte, Quellen, Metadaten und bewusst fehlender Lerncheck korrekt. Seit der grünen Pflichtsuite keine produktrelevante Änderung.
