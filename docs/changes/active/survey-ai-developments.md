# 100 neue Entwicklungen ermitteln und den Themen hinzufügen

100 neue KI-Entwicklungen vor Oktober 2026 ermitteln. Mit den existierenden Themen abgleichen und Vorschläge dem Entwickler darstellen:

- Welche KI-Entwicklungen sollten den bestehenden Themen hinzugefügt werden?
- Welche neuen / zunehmend wichtigen Themen sollten den bestehenden Lernpfaden hinzugefügt werden? (Lernpfade dürfen die bisherige Länge ein
  wenig überschreiten)
- Welche neuen Lernpfade sollte es geben, damit auch alle neuen Themen abgedeckt sind?

Noch nichts im Code ändern.

Refinement: Berücksichtigt werden fachlich belegbare Entwicklungen von Oktober 2025 bis einschließlich September 2026 mit eigenständigem Lernwert für KI-gestützte Java-/Webentwicklung. Einzelne Produktversionen zählen nur, wenn sie einen neuen Lernaspekt begründen. Ergebnis ist eine priorisierte, quellenbelegte Vorschlagsliste für bestehende Themen, neue Themen in vorhandenen Lernpfaden und gegebenenfalls neue Lernpfade. Die App, Themen und Lernpfade werden in dieser Story nicht geändert.

## Ziel, Grenzen und Entscheidungen

Die Recherche erfasst 100 voneinander abgrenzbare Entwicklungen im festgelegten Zeitraum und vergleicht sie mit den 46 Themen und 13 Lernpfaden der Anwendung. Vorschläge werden nach Lernwert und Relevanz für Java-/Webteams priorisiert. Produktankündigungen werden als Aussagen des jeweiligen Anbieters eingeordnet; aus einer Verfügbarkeit folgt keine Qualitäts- oder Sicherheitsgarantie.

Betroffene Vertikalen: keine. Dies ist eine redaktionelle Recherche ohne Änderung an Produktcode, Themen oder Tests. Es werden keine Abhängigkeiten hinzugefügt.

## Risiken und Abnahme

- **Scheinbare Neuheit:** Jede Entwicklung muss ein im Zeitraum datiertes Primärquellendokument und einen benennbaren neuen Lernaspekt haben. Reine Umbenennungen oder Preisänderungen werden ausgeschlossen.
- **Anbieterübergewicht:** Die Recherche berücksichtigt mehrere unabhängige Anbieter, Standards und Open-Source-Projekte.
- **Themenüberschneidung:** Vorschläge unterscheiden Ergänzungen bestehender Themen von neuen Themen und Lernpfaden; vorhandene Themen-IDs und Pfade bilden die Vergleichsbasis.
- **Quellen- und Zukunftsgrenze:** Nur bis 30.09.2026 veröffentlichte Aussagen zählen. Angekündigte, noch nicht ausgelieferte Funktionen werden als solche gekennzeichnet.
- **Abnahme:** Genau 100 belegte Entwicklungen, eine priorisierte Zuordnung und ausdrücklich dokumentierte Unsicherheiten. Der Entwickler kann die Vorschläge prüfen, bevor eine spätere Story Inhalte ändert.

## Umsetzung und Nachweise

Diese Story hat kein Code-Teil-Feature. RED → GREEN → REFACTOR und die Code-Pflichtsuite werden deshalb nicht durch Scheintests ersetzt. Die redaktionelle Prüfung besteht aus Quellen-, Datums-, Dubletten- und Themenabgleich. Die Recherche und ihre Nachweise stehen unten in dieser Spec.

## Rechercheergebnis

Recherche und Themenabgleich am 30.09.2026. Die folgenden 100 Punkte sind **Einzelentwicklungen**, keine 100 vorgeschlagenen Themen. „Neu“ meint die dokumentierte Veröffentlichung oder Erweiterung im vereinbarten Zeitraum, nicht die erstmalige Erfindung des zugrunde liegenden Konzepts. Bei Produktquellen ist die Aussage auf die dort beschriebene Version und Verfügbarkeit begrenzt.

### 100 belegte Entwicklungen

**Offene Agentenprotokolle und Schnittstellen**

1. MCP führte experimentelle Tasks mit abfragbarem Status und später abrufbarem Ergebnis ein (11/2025; [MCP25]).
2. MCP erlaubte URL-basierte Client-ID-Metadaten statt zwingender dynamischer Registrierung (11/2025; [MCP25]).
3. MCP ergänzte Sicherheitsanforderungen für lokal installierte Server (11/2025; [MCP25]).
4. MCP definierte Standard-Scopes für Autorisierung (11/2025; [MCP25]).
5. MCP führte eigenständig versionierbare Protokollerweiterungen ein (11/2025; [MCP25]).
6. Eine MCP-Erweiterung ergänzte OAuth-Client-Credentials für Maschine-zu-Maschine-Zugriffe (11/2025; [MCP25]).
7. Eine MCP-Erweiterung ergänzte Enterprise-IdP-Kontrollen für anwendungsübergreifende Zugriffe (11/2025; [MCP25]).
8. MCP ergänzte URL-Elicitation, sodass Zugangsdaten außerhalb des Clients eingegeben werden können (11/2025; [MCP25]).
9. A2A 1.0 veröffentlichte einen stabilen Standard für die Kommunikation unabhängiger Agenten (03/2026; [A2A]).
10. ACP bekam ein Editor-übergreifendes Agentenregister für JetBrains und Zed (01/2026; [ACP]).
11. Open Responses wurde als offene, anbieterübergreifende Responses-Spezifikation angekündigt (01/2026; [OAI-API]).
12. JetBrains öffnete die IDE über ACP für externe Coding-Agenten statt nur eigener Integrationen (12/2025; [JB-ACP]).

**Coding-Agenten und Arbeitsabläufe**

13. GitHub bündelte Agentensitzungen im Agents-Tab des Repositorys (01/2026; [GH-AGENTS]).
14. GitHub ermöglichte die Fortsetzung einer Cloud-Agent-Sitzung in Copilot CLI (01/2026; [GH-AGENTS]).
15. Copilot Cloud Agent erhielt eine Modellwahl pro Aufgabe (02/2026; [GH-FEB]).
16. Copilot Cloud Agent prüft seinen Patch vor dem PR mit Copilot Code Review selbst (10/2025; [GH-OCT-SEC]).
17. Copilot Cloud Agent integrierte Code-, Secret- und Abhängigkeitsprüfung in seinen Ablauf (10/2025; [GH-OCT-SEC]).
18. GitHub führte spezialisierte, dateibasiert definierte Custom Agents für Cloud-Aufgaben ein (10/2025; [GH-OCT-AGENTS]).
19. Copilot Code Review nutzt Agentenwerkzeuge, um Repository-Kontext für Reviews nachzuladen (03/2026; [GH-REVIEW]).
20. Copilot Cloud Agent kann Änderungen auf einem Branch vorbereiten, ohne sofort einen PR anzulegen (04/2026; [GH-APR]).
21. Copilot Cloud Agent kann vor dem Coding einen zur Freigabe vorgelegten Plan erzeugen (04/2026; [GH-APR]).
22. Copilot Cloud Agent bekam einen eigenständigen Modus für gründliche Repository-Recherche (04/2026; [GH-APR]).
23. Die Copilot-App veröffentlichte parallele Sitzungen je Branch und Worktree auf mehreren Betriebssystemen (06/2026; [GH-APP]).
24. Die Copilot-App führte gemeinsam bedienbare Canvases für Plan, PR, Terminal und Browser ein (06/2026; [GH-APP]).
25. Die Copilot-App ergänzte zeitgesteuerte Cloud-Automationen (06/2026; [GH-APP]).
26. Die Copilot-App erlaubte Modellauswahl und externe Werkzeuge über MCP pro Sitzung (06/2026; [GH-APP]).
27. Copilot Chat kann abgeschlossene Agentensitzungen thematisch durchsuchen (06/2026; [GH-LOGS]).
28. Copilot Chat kann Agentenprotokolle zu Änderungen und Prüfungen abfragen (06/2026; [GH-LOGS]).
29. Agent Plugins 1.0 machte ein Plugin in VS Code, CLI, SDK und Copilot-App verwendbar (08/2026; [GH-AUG10]).
30. Copilot CLI ergänzte eine Übersicht paralleler Subagent-Aufgaben (08/2026; [GH-AUG10]).
31. Copilot CLI kann Eingaben während eines laufenden Agentenschritts in eine Warteschlange stellen (08/2026; [GH-AUG10]).
32. Copilot CLI erhielt ein Rückspulen eigener Änderungen ohne Verwerfen fremder Edits (08/2026; [GH-AUG10]).
33. Copilot in JetBrains erhielt sitzungsübergreifendes Projektgedächtnis (08/2026; [GH-AUG10]).
34. Copilot in JetBrains kann lokale Ollama-Modelle als eigenen Anbieter verwenden (08/2026; [GH-AUG10]).
35. Copilot in Slack und Teams führte gemeinsam nachvollziehbare Agentensitzungen ein (08/2026; [GH-AUG24]).
36. Die Copilot-App bündelte MCP-Server, Plugins, Skills und Canvases in einer anpassbaren Oberfläche (08/2026; [GH-AUG24]).
37. Die Copilot-App kann Azure-DevOps-Issues und PRs in Agentensitzungen übernehmen (08/2026; [GH-AUG24]).
38. Copilot CLI kann unerwartet abgebrochene Sitzungen einschließlich Unterbrechungen mitten im Turn wiederherstellen (08/2026; [GH-AUG24]).
39. VS Code ergänzte eine zweite Modellmeinung für übersehene Details und Randfälle (08/2026; [GH-AUG24]).
40. Die Copilot-App kann Jira-Issues mit Kontext bis zur PR-Vorbereitung führen (09/2026; [GH-SEP7]).
41. Copilot CLI erprobte semantisches Routing zwischen lokalen, Cloud- und kombinierten Modellen (09/2026, experimentell; [GH-SEP7]).
42. VS Code führte regelmäßig laufende Agentenaufgaben ein (09/2026, Preview; [GH-SEP7]).
43. Copilot in JetBrains erhielt zentral verwaltete Sandbox-Regeln für Datei-, Netz- und Werkzeugzugriffe (09/2026, Preview; [GH-SEP7]).
44. Copilot Code Review kann Shell-Werkzeuge zur Validierung einer Review-Aussage verwenden (09/2026; [GH-SEP14]).
45. Die Copilot-App verband Sentry-Fehlerkontext mit Untersuchung, Validierung und PR-Vorbereitung (09/2026; [GH-SEP14]).
46. Die Copilot-App führte lokale Sandbox-Grenzen für Dateien, Netzwerk und Credentials ein (09/2026, Preview; [GH-SEP21]).

**Agenten- und Modell-APIs**

47. Die Responses API ergänzte serverseitige Kontextkompaktierung (02/2026; [OAI-API]).
48. Die Responses API unterstützte wiederverwendbare Skills in lokaler und gehosteter Ausführung (02/2026; [OAI-API]).
49. OpenAI ergänzte gehostete Shell-Ausführung und Netzoptionen für Container (02/2026; [OAI-API]).
50. Die Responses API erhielt einen WebSocket-Modus für lange Interaktionen (02/2026; [OAI-API]).
51. Tool Search erlaubt das bedarfsweise Nachladen großer Werkzeugangebote (03/2026; [OAI-API]).
52. GPT-5.4 erhielt eingebaute Screenshot-basierte Computerbedienung über die Responses API (03/2026; [OAI-API]).
53. GPT-5.4 verband ein Millionen-Token-Fenster mit nativer Kompaktierung für lange Agentenläufe (03/2026; [OAI-API]).
54. Das OpenAI Agents SDK ergänzte kontrollierte Sandboxes und einen inspizierbaren Harness (04/2026; [OAI-API]).
55. Das OpenAI Agents SDK ergänzte Steuerung von Ort und Zeitpunkt angelegter Erinnerungen (04/2026; [OAI-API]).
56. Secure MCP Tunnel kann private MCP-Server mit OpenAI-Produkten verbinden, ohne sie öffentlich zu exponieren (05/2026; [OAI-API]).
57. OpenAI führte Workload-Identity-Federation für kurzlebige API-Zugänge ein (05/2026; [OAI-API]).
58. OpenAI ergänzte Admin-APIs für Modellerlaubnis, Datenaufbewahrung und Hosted-Tool-Rechte (05/2026; [OAI-API]).
59. OpenAI ergänzte harte projekt- und organisationsweite Ausgabenlimits (07/2026; [OAI-API]).
60. Ein offizieller Terraform-Provider verwaltet OpenAI-Plattformressourcen als Code (07/2026; [OAI-API]).
61. Asynchrone Werkzeugaufrufe erlauben einem Modell weiterzuarbeiten, während ein Werkzeug läuft (09/2026; [OAI-API]).
62. Mid-turn Steering erlaubt Korrekturen während einer laufenden Responses-Anfrage (09/2026; [OAI-API]).

**Gemini-API und multimodale Entwicklung**

63. Gemini 3 Pro Preview erschien mit neuen Regeln für Medienauflösung, Thinking-Level und Thought Signatures (11/2025; [GEM-API]).
64. Gemini 3 Flash Preview bot eine schnellere Modellklasse mit Agenten- und Coding-Fokus (12/2025; [GEM-API]).
65. Gemini 3 Flash ergänzte multimodale Antworten aus Funktionsaufrufen (12/2025; [GEM-API]).
66. Gemini 3 Flash ergänzte Codeausführung mit Bildern (12/2025; [GEM-API]).
67. Die Interactions API vereinheitlichte Modell- und Agenteninteraktion (12/2025; [GEM-API]).
68. Google stellte einen Deep-Research-Agenten für mehrstufige Recherche als Preview bereit (12/2025; [GEM-API]).
69. Die Gemini API dokumentiert Modell-Lebenszyklus und Abkündigungszeitplan explizit (01/2026; [GEM-API]).
70. Gemini 3 Pro und Flash Preview erhielten ein Computer-Use-Werkzeug (01/2026; [GEM-API]).
71. Ein Gemini-3.1-Pro-Endpunkt priorisiert kundeneigene Werkzeuge beim Einsatz mit Shell und Tools (02/2026; [GEM-API]).
72. Gemini Embedding 2 verband Text, Bild, Video, Audio und PDF in einem Embeddingraum (03/2026, Preview; [GEM-API]).
73. Die Gemini API kombinierte eingebaute Tools und eigene Function Calls in einem Aufruf (03/2026; [GEM-API]).
74. Deep Research erhielt kollaborative Planung, Visualisierung, MCP und File Search (04/2026, Preview; [GEM-API]).
75. Gemini Managed Agents liefen als zustandsbehaftete Agenten in isolierten Google-Sandboxes (05/2026, Preview; [GEM-API]).
76. Der Antigravity-Agent wurde als verwalteter, Code und Web nutzender Agent angeboten (05/2026, Preview; [GEM-API]).
77. Gemini File Search unterstützte Bildsuche mit Medien- und Seitenzitaten (05/2026; [GEM-API]).
78. Die Gemini API ergänzte Webhooks für Batch- und Langläufergebnisse statt reinem Polling (05/2026; [GEM-API]).

**Java und Spring AI**

79. Spring AI 2.0 begann eine mit JSpecify und NullAway geprüfte Null-Safety-Basis (01/2026, Milestone; [SPR-M2]).
80. Spring AI 2.0 verlegte Agentenschleifen in eine komponierbare Advisor-Kette (06/2026; [SPR-2]).
81. Ein einheitlicher ToolCallingAdvisor ersetzte Modell-spezifische Tool-Schleifen (06/2026; [SPR-2]).
82. ToolSearchToolCallingAdvisor lädt aus großen Toolbeständen passende Werkzeuge schrittweise nach (06/2026; [SPR-2]).
83. StructuredOutputValidationAdvisor kann ungültige strukturierte Ausgabe selbstkorrigieren lassen (06/2026; [SPR-2]).
84. Ein Community-Modul ergänzte ereignisbasiertes Gesprächsgedächtnis mit Kompaktierung (06/2026; [SPR-2]).
85. Spring-AI-Agent-Utils bot eine Spring-native Umsetzung von Agent Skills (06/2026; [SPR-2]).
86. Spring AI 2.0 bündelte das MCP Java SDK 2.0 für die Spezifikation von 11/2025 (06/2026; [SPR-2]).
87. MCP-Tools, Ressourcen und Prompts können in Spring AI per Annotation freigegeben werden (06/2026; [SPR-2]).
88. Ein einheitlicher MCP-Request-Kontext stellt Logging, Fortschritt, Sampling und Elicitation bereit (06/2026; [SPR-2]).
89. Deklarative MCP-Client-Handler decken Sampling, Elicitation und Fähigkeitsänderungen ab (06/2026; [SPR-2]).
90. Spring AI machte Streamable HTTP für MCP zum Standardtransport; eine stateless Variante dient Remote-Skalierung (06/2026; [SPR-2]).
91. Spring AI integrierte MCP-Beobachtbarkeit mit Micrometer/OpenTelemetry und OAuth- beziehungsweise API-Key-Sicherheit (06/2026; [SPR-2]).
92. Spring AI 2.1 modelliert Text, Reasoning, Toolaufrufe und Medien als geordnete Message Parts (09/2026, Milestone; [SPR-21]).
93. Spring AI 2.1 ergänzte ein Responses-API-Modell, das Reasoning-Payloads über Toolrunden trägt (09/2026, Milestone; [SPR-21]).

**Sicherheit, Repository-Kontext und lokale Ausführung**

94. OWASP veröffentlichte eine eigene Top-10-Taxonomie für agentische Anwendungen (12/2025; [OWASP-A]).
95. OWASP veröffentlichte eine 2026-Fassung der LLM Top 10 mit erweitertem Bedrohungsbild und Agent Control Standard (09/2026; [OWASP-L]).
96. Codex Security startete als Agent für kontextbezogene Schwachstellenanalyse und Patchvorschläge (03/2026, Research Preview; [OAI-SEC]).
97. Claude Code Security startete mit Codebasis-Scan und menschlich zu prüfenden Patchvorschlägen (02/2026, begrenzte Research Preview; [ANT-SEC]).
98. JetBrains Context machte semantische und repositoryübergreifende Code-Suche für mehrere Coding-Agenten verfügbar (07/2026, Early Access; [JB-CONTEXT]).
99. Junie Local bündelte einen lokal ausgeführten, abgestimmten Coding-Agenten ohne Cloud-Verarbeitung (08/2026; [JB-LOCAL]).
100. Ollama Launch vereinfachte die Kopplung lokaler oder gehosteter Modelle mit Coding-Agent-CLIs (01/2026; [OLLAMA]).

### Vorschläge für die Themen

**Priorität A – neue Themen in vorhandenen Pfaden**

| Neues Thema                                         | Passender bestehender Pfad | Lernwert |
|-----------------------------------------------------| --- | --- |
| MCP, A2A und ACP gezielt einsetzen                  | Coding-Agenten und Spec-Systeme gezielt auswählen | Werkzeug-, Agenten- und Editor-Schnittstellen haben verschiedene Vertrauens- und Lebenszyklusmodelle (1–12). |
| Modellwechsel und API-Lebenszyklen absichern  | Coding-Agenten und Spec-Systeme gezielt auswählen | Modelle, Tool-Fähigkeiten, Abkündigungen und Regressionen als Wartungsaufgabe behandeln (51–53, 63–70). |

**Priorität B – neue Lernpfade, um die neuen Themen abzudecken**

| Neuer Lernpfad | Vorgeschlagene Folge von Themen | Begründung |
| --- | --- | --- |
| KI-Funktionen in Java-Webanwendungen bauen | Modell- und API-Wahl → Spring-AI-Toolschleife → MCP-Server/-Client → strukturierte Ausgabe → multimodale Suche → Evaluation und Betrieb | Der aktuelle Java-/Web-Pfad behandelt vor allem Codeanalyse und Modernisierung; Spring AI 2.x schafft zusätzlich einen eigenständigen Anwendungsbau-Pfad (79–93). |
| Agentensysteme verbinden und betreiben | MCP/A2A/ACP → Autorisierung → Zustands- und Task-Lebenszyklus → Sandboxes → Observability → Kosten- und Sicherheitsprüfung | Die Protokoll-, Sicherheits- und Betriebsaspekte werden sonst über mehrere vorhandene Pfade verstreut (1–12, 43, 46, 56–62, 94–97). |

Die bestehenden Pfade dürfen für die sechs priorisierten Themen leicht länger werden. Der Java-Web-Pfad und der neue Agentensystem-Pfad brauchen vor einer späteren Inhaltsstory eine eigene fachliche Reihenfolge und Quellenprüfung je Thema.

### Quellen und Grenzen

Alle verlinkten Seiten wurden am 30.09.2026 auf Datum und die jeweils genannte Aussage geprüft. Die Kurzangaben verweisen auf Originalankündigungen, Spezifikationen oder Release Notes. Vorschau- und Milestone-Funktionen können sich ändern; insbesondere die geordneten Message Parts in Spring AI 2.1 werden zunächst nur vom Responses-Modell nativ genutzt. Anbieter-Benchmarks und Sicherheitswirksamkeit wurden hier nicht unabhängig gemessen. Die 100 Punkte sind als Recherchepool kuratiert; Priorität und didaktische Gruppierung sind unsere Schlussfolgerung aus dem Produktfokus und keine Aussage der Quellen.

Der lokale Abgleich mit den Themen ergab 46 vorhandene Themen und 13 vorhandene Pfade. Eine Nummernprüfung bestätigte 100 eindeutige Einträge von 1 bis 100; alle Kurzverweise haben eine Quellen-Definition. `git diff --check` meldete keinen Whitespace-Fehler. Produktcode, Tests, Laufzeitinhalte und Abhängigkeiten wurden nicht verändert; deshalb waren Pflichtsuite und Browserablauf für diese Recherche nicht einschlägig. Die Vorschläge bleiben bis zur manuellen Sichtung durch den Entwickler aktiv und werden nicht committet.

[MCP25]: https://blog.modelcontextprotocol.io/posts/2025-11-25-first-mcp-anniversary/
[A2A]: https://a2a-protocol.org/latest/blog/
[ACP]: https://blog.jetbrains.com/ai/2026/01/acp-agent-registry/
[JB-ACP]: https://blog.jetbrains.com/ai/2025/12/bring-your-own-ai-agent-to-jetbrains-ides/
[OAI-API]: https://developers.openai.com/api/docs/changelog
[GH-AGENTS]: https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/
[GH-FEB]: https://github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/
[GH-OCT-SEC]: https://github.blog/changelog/2025-10-28-copilot-coding-agent-now-automatically-validates-code-security-and-quality/
[GH-OCT-AGENTS]: https://github.blog/changelog/2025-10-28-custom-agents-for-github-copilot/
[GH-REVIEW]: https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/
[GH-APR]: https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent/
[GH-APP]: https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/
[GH-LOGS]: https://github.blog/changelog/2026-06-10-copilot-chat-now-sees-your-agent-sessions/
[GH-AUG10]: https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/
[GH-AUG24]: https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24/
[GH-SEP7]: https://github.blog/changelog/2026-09-10-GitHub-copilot-weekly-releases-september-7/
[GH-SEP14]: https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/
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
[JB-CONTEXT]: https://blog.jetbrains.com/ai/2026/07/introducing-jetbrains-context-repository-intelligence-for-coding-agents/
[JB-LOCAL]: https://blog.jetbrains.com/junie/2026/08/junie-local-launch/
[OLLAMA]: https://ollama.com/blog/launch
