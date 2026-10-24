Zwischen Januar und Ende September 2026 hat sich Softwareentwicklung mit KI ziemlich deutlich verschoben. Der wichtigste Wandel ist weniger „die Modelle schreiben noch besseren Code“, sondern:

> **Von AI-assisted development zu agentic software engineering:**  
> Der Entwickler schreibt nicht mehr primär zusammen mit dem Modell Code, sondern beschreibt Arbeit, stellt Kontext und Constraints bereit, delegiert Teilaufgaben und überprüft Ergebnisse.

Coding-Agenten können inzwischen über längere Zeiträume Repositorys analysieren, planen, Code verändern, Builds und Tests ausführen, Fehler untersuchen und iterieren. OpenAI beschreibt intern bereits eine Verschiebung von kurzen Chat-Interaktionen hin zu delegierter, lang laufender Arbeit. [OpenAI](https://openai.com/de-DE/index/how-agents-are-transforming-work/?utm_source=chatgpt.com)

Für jemanden mit deinem Java/Web-Hintergrund sind meiner Einschätzung nach **Harness Engineering, Spec-Driven Development, MCP, Agent Skills, agentische CI/Reviews und Repository Intelligence** die sechs wichtigsten Entwicklungen.

---

## 1. Die große Veränderung: Coding Agent statt Coding Assistant

2024/25 war das typische Modell ungefähr:

```text
Developer
   ↓
IDE
   ↓
Autocomplete / Chat
   ↓
Code
```

2026 wird daraus zunehmend:

```text
                  ┌─ Agent A → Feature
Requirement ──────┼─ Agent B → Tests
                  ├─ Agent C → Review
                  └─ Agent D → Migration
                       ↓
               Build / Test / Browser
                       ↓
                 Pull Request
                       ↓
                  Human Review
```

Die IDE ist damit nicht mehr zwangsläufig der Mittelpunkt.

OpenAIs Codex-App wurde im Februar explizit als Oberfläche zum parallelen Steuern mehrerer Coding-Agenten eingeführt. GitHub hat seine Copilot-Funktion entsprechend vom „coding agent“ zum **cloud agent** weiterentwickelt: Plan erstellen, auf einem Branch arbeiten, Änderungen iterieren und erst danach optional einen PR erzeugen. VS Code bekam im Frühjahr sogar ein eigenes **Agents Window** für parallel laufende Tasks. [OpenAI](https://openai.com/de-DE/index/introducing-the-codex-app/?utm_source=chatgpt.com)

Das ist ein wesentlicher Unterschied zu Copilot-artigem Pair Programming.

---

# 2. „Harness Engineering“ ist wahrscheinlich der wichtigste neue Begriff 2026

Einer der interessantesten Begriffe dieses Jahres ist **Agent Harness / Harness Engineering**.

Ein LLM allein ist noch kein brauchbarer Softwareentwickler.

Ein Coding-Agent besteht eher aus:

```text
                 MODEL
                   │
        ┌──────────┴──────────┐
        │    Agent Harness    │
        │                     │
        │ Context Management  │
        │ Planning / TODOs    │
        │ Tool selection      │
        │ Terminal            │
        │ File access         │
        │ Search              │
        │ Browser             │
        │ Git                 │
        │ Tests / Feedback    │
        │ Memory              │
        │ Permissions         │
        │ Sub-agents          │
        │ Observability       │
        └──────────┬──────────┘
                   │
              Repository
```

OpenAI veröffentlichte im Februar sogar einen Engineering-Bericht unter genau diesem Titel. Das bemerkenswerte Experiment: Ein internes Produkt wurde mit **0 manuell geschriebenen Codezeilen** entwickelt. Der Schwerpunkt des menschlichen Engineerings verschob sich dabei darauf, Repository, Architektur, Regeln und Feedbackmechanismen für Agenten verständlich und kontrollierbar zu machen. [OpenAI](https://openai.com/index/harness-engineering/?utm_source=chatgpt.com)

Microsoft hat das Konzept inzwischen direkt als Produktabstraktion übernommen: Der **Agent Harness** im Microsoft Agent Framework kapselt Planung, TODO-Verfolgung, Kontextkomprimierung, Speicher, Dateizugriff, Approval und Telemetrie. [Microsoft Developer Blog](https://devblogs.microsoft.com/agent-framework/the-microsoft-agent-framework-harness-is-now-released/?utm_source=chatgpt.com)

Das halte ich für wesentlich langlebiger als den Begriff „Prompt Engineering“.

---

# 3. Die eigentliche Programmiersprache für Agenten wird zunehmend das Repository

Ein interessanter Nebeneffekt:

Gute Agenten brauchen nicht primär bessere Prompts, sondern **gut lesbare Projekte**.

Das bedeutet beispielsweise:

```text
repo/
├── AGENTS.md
├── architecture/
│   ├── decisions/
│   └── boundaries.md
├── specs/
├── skills/
├── services/
├── tests/
└── ...
```

Darin stehen Dinge wie:

- Architekturregeln
- Modulgrenzen
- Commands zum Builden/Testen
- Definition of Done
- Coding Guidelines
- verbotene Dependencies
- Teststrategien
- Deployment-Verfahren
- Domänenwissen

Das Repo wird damit zunehmend zum **ausführbaren Wissensspeicher für Menschen UND Agenten**.

OpenAI nennt das „repository knowledge as the system of record“ und spricht von **agent legibility**. [OpenAI](https://openai.com/index/harness-engineering/?utm_source=chatgpt.com)

JetBrains geht einen ähnlichen Weg mit **JetBrains Context**: Repositories werden semantisch indexiert, sodass Codex, Claude oder Junie nicht jedes Mal das komplette Projekt explorieren müssen. Interessant ist insbesondere die organisationsweite **Multi-Repo-Suche**. [The JetBrains Blog](https://blog.jetbrains.com/ai/2026/07/introducing-jetbrains-context-repository-intelligence-for-coding-agents/?utm_source=chatgpt.com)

Für größere Java-Landschaften mit 50–500 Repositories könnte genau das sehr wichtig werden.

---

# 4. Spec-Driven Development erlebt ein großes Comeback

„Vibe Coding“ funktioniert erstaunlich gut für kleine Projekte.

Bei Enterprise-Software skaliert es schlecht.

Darum ist 2026 **Spec-Driven Development (SDD)** stark aufgekommen.

Statt:

```text
Prompt
  ↓
Code
```

eher:

```text
Idea
 ↓
Requirements
 ↓
Specification
 ↓
Architecture / Plan
 ↓
Tasks
 ↓
Implementation
 ↓
Verification
 ↓
Spec ↔ Code convergence
```

Das bekannteste Werkzeug dafür ist inzwischen GitHubs Open-Source-Projekt **Spec Kit**.

Es hat sich 2026 erheblich weiterentwickelt und erreichte am 21. August Version 1.0. Das System enthält inzwischen u. a. Integrationen, Extensions, Presets, Workflows und Workflow-Steps und ist bewusst weitgehend agentenunabhängig. [GitHub](https://github.com/github/spec-kit/blob/main/docs/history.md?utm_source=chatgpt.com)

Besonders interessant finde ich den inzwischen geschlossenen Kreis:

```text
specify
   ↓
plan
   ↓
tasks
   ↓
implement
   ↓
converge
   ↓
Spec == Implementation?
```

Die `/speckit.converge`-Funktion prüft gerade den häufig übersehenen Teil: ob Spezifikation und implementierter Code wieder auseinanderlaufen. [GitHub](https://github.com/github/spec-kit/blob/main/newsletters/2026-June.md?utm_source=chatgpt.com)

### Warum wird das jetzt wichtig?

Weil Agenten Code extrem viel schneller erzeugen können.

Der Engpass verschiebt sich deshalb von

> „Wie programmiere ich das?“

zu

> „Was genau soll gebaut werden, unter welchen Constraints, und wie erkenne ich zuverlässig, ob das Ergebnis stimmt?“

Das ist eine ziemlich fundamentale Verschiebung.

---

# 5. Planning wird wieder explizit

Interessanterweise führt KI nicht zu weniger Planung, sondern teilweise zu **mehr expliziter Planung**.

GitHub Copilot hat beispielsweise einen eigenständigen **Plan Agent** eingeführt:

```text
Requirement
    ↓
Read-only exploration
    ↓
Questions
    ↓
Implementation plan
    ↓
Human approval
    ↓
Implementation agent
```

Pläne werden dabei sogar als `.copilot/plans/*.md` im Projekt hinterlegt. [The GitHub Blog](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/?utm_source=chatgpt.com)

Der verbreitete Agentenworkflow 2026 lautet zunehmend:

```text
Explore → Plan → Implement → Test → Review
```

und nicht:

```text
Prompt → Generate
```

Für komplexe Brownfield-Java-Systeme ist das ein sehr relevanter Unterschied.

---

# 6. MCP wird zur Infrastruktur und nicht mehr nur zum AI-Gimmick

Beim **Model Context Protocol (MCP)** ist 2026 der Übergang von Experiment zu ernsthafter Infrastruktur deutlich.

Die große MCP-Spezifikation vom **28. Juli 2026** brachte unter anderem:

- stateless protocol core
- Multi-Round-Trip Requests
- header-based routing
- cachebare Tool-/Resource-Listen
- härteres Authorization-Modell
- Extensions
- bessere Skalierbarkeit auf normaler HTTP-Infrastruktur. [Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/?utm_source=chatgpt.com)

Das ist deshalb interessant, weil MCP ursprünglich eher so wirkte:

```text
Claude
  ↓
MCP
  ↓
SQLite / GitHub / Files
```

Heute wird daraus eher:

```text
                     ┌─ Jira
                     ├─ GitHub
Agent ── MCP Gateway ┼─ Confluence
                     ├─ Database
                     ├─ Kubernetes
                     ├─ Internal APIs
                     └─ Company tools
```

Also ein gewissermaßen:

> **USB-C für Agenten und Tools.**

Der aktuelle MCP-Roadmap-Schwerpunkt liegt bereits auf Skalierung, Agent-Kommunikation, Governance und Enterprise Readiness. [Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/?utm_source=chatgpt.com)

---

# 7. Für Java ist MCP inzwischen ernsthaft relevant

Hier hat sich 2026 besonders viel getan.

Der offizielle **MCP Java SDK** erreichte im Februar erstmals 1.0 und im Juni 2.0. Die derzeitige stabile Linie ist 2.0.x; 2.0.1 erschien im August. Enthalten sind unter anderem JSON-Schema-Validierung, Jackson-2/3-Unterstützung und Streamable HTTP. [GitHub](https://github.com/modelcontextprotocol/java-sdk/blob/main/CHANGELOG.md?utm_source=chatgpt.com)

Allerdings ist Java beim neuesten MCP-Protokoll momentan noch etwas hinterher: Die 2.x-Linie implementiert die November-2025-Spezifikation; eine kommende 3.x-Linie soll die MCP-Spezifikation vom Juli 2026 unterstützen. [GitHub](https://github.com/modelcontextprotocol/java-sdk/blob/main/ROADMAP.md?utm_source=chatgpt.com)

Das ist etwas, was ich im Java-Umfeld **konkret beobachten würde**.

---

# 8. Spring AI ist deutlich erwachsener geworden

Für einen Spring-Entwickler ist **Spring AI** inzwischen definitiv kein Spielzeugprojekt mehr.

Die aktuelle stabile Dokumentation verweist auf Spring AI **2.0.1**. MCP ist tief integriert über:

- MCP Client
- MCP Server
- Boot Starter
- Annotationen
- Streamable HTTP
- Security. [Home](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-overview.html?utm_source=chatgpt.com)

Am 25. September kam **Spring AI 2.1.0-M1**. Interessant daran sind:

- OpenAI Responses API
- strukturierteres Message-Modell
- Session-/Memory-Arbeit
- geplante Unterstützung des aktuellen MCP-Protokolls. [Home](https://spring.io/blog/2026/09/25/spring-ai-2-1-0-M1-available-now/?utm_source=chatgpt.com)

Und besonders interessant:

Spring plant ein eigenes **Spring AI Agents** Projekt für November 2026, zunächst experimentell; später soll es laut aktueller Planung Richtung Spring AI 3.0 wandern. [Home](https://spring.io/blog/2026/09/25/spring-ai-2-1-0-M1-available-now/?utm_source=chatgpt.com)

Das würde ich als Java-Entwickler definitiv beobachten.

---

# 9. LangChain4j entwickelt sich ebenfalls Richtung Agent-Plattform

Auch **LangChain4j** ist inzwischen weit über einfachen RAG-/Chat-Code hinaus.

Stand Ende September liegt es bei **1.20.2**; die aktuellen Releases enthalten unter anderem Arbeiten an:

- MCP
- A2A
- agentischen Scopes
- Tool-Kompensation
- verschiedenen Model Providern. [GitHub](https://github.com/langchain4j/langchain4j/releases?utm_source=chatgpt.com)

Damit entsteht für Java langsam ein recht interessantes Dreieck:

```text
Spring AI
     │
     │
LangChain4j ─── MCP Java SDK
```

Meine Erwartung wäre, dass du künftig wesentlich seltener direkt anbieterspezifische APIs programmieren musst.

---

# 10. Agent-to-Agent wird ein eigenes Architekturthema

Ein weiterer Trend ist die Trennung zwischen:

**Tool-Protokollen**

```text
Agent → MCP → Tool
```

und

**Agenten-Protokollen**

```text
Agent → A2A → Agent
```

Microsofts Agent Framework unterstützt beispielsweise sowohl MCP als auch A2A und positioniert Interoperabilität inzwischen explizit als Teil seiner Architektur. [Microsoft Developer Blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/?utm_source=chatgpt.com)

Die typische Architektur könnte damit künftig aussehen wie:

```text
                    ┌───────────────┐
                    │ Planner Agent │
                    └──────┬────────┘
                           │ A2A
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
      Dev Agent       Test Agent      Security Agent
          │                │                │
          └──────────── MCP ────────────────┘
                           │
                  Enterprise Tools
```

Ob echte „Agent Swarms“ dauerhaft sinnvoll sind, ist noch offen.

Aber **Agenten-Orchestrierung** bleibt.

---

# 11. Multi-Agent ist real — aber weniger magisch, als Marketing suggeriert

2026 ist ein wichtiges Gegenmittel zum bisherigen Hype entstanden:

Nicht jede Aufgabe braucht einen autonomen Agenten.

Und nicht jeder Agent braucht fünf Subagenten.

Interessanterweise schreibt sogar Microsoft in seiner Agent-Framework-Dokumentation sinngemäß:

> Wenn du die Aufgabe zuverlässig als normale Funktion implementieren kannst, tu das statt einen Agenten einzusetzen. [Microsoft Learn](https://learn.microsoft.com/de-de/agent-framework/overview/?utm_source=chatgpt.com)

Das entspricht meiner technischen Einschätzung.

Gute Systeme sehen eher aus wie:

```text
deterministic software
       │
       ├── LLM decision
       │
       ├── deterministic workflow
       │
       ├── agent
       │
       └── human approval
```

statt:

```text
Everything → Agent
```

Das Stichwort hierfür ist teilweise:

**Code owns the workflow; AI handles uncertainty.**

---

# 12. Agent Skills werden wichtiger als Mega-Prompts

Eine weitere Architekturidee, die 2026 deutlich an Bedeutung gewonnen hat, sind **Skills**.

Statt einen riesigen System Prompt zu bauen:

```text
mega_prompt.md
```

bekommt der Agent modulare Fähigkeiten:

```text
skills/
├── create-rest-endpoint/
│   └── SKILL.md
├── database-migration/
│   └── SKILL.md
├── write-architecture-decision/
│   └── SKILL.md
└── deploy-service/
    └── SKILL.md
```

Das ist interessant, weil darin nicht nur Wissen stehen kann, sondern ein **wiederverwendbarer Arbeitsprozess**.

GitHub Copilot hat Skills inzwischen direkt im UI sichtbar gemacht; Spec Kit registriert Skills automatisch für unterstützte Agenten. [The GitHub Blog](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/?utm_source=chatgpt.com)

Ich halte Skills für einen unterschätzten Baustein der kommenden Jahre.

---

# 13. Coding-Agenten wandern in den kompletten SDLC

Eine weitere relevante Veränderung:

KI sitzt nicht mehr nur **vor dem Commit**.

Agenten tauchen inzwischen überall auf:

```text
Requirement
     ↓
Specification Agent
     ↓
Implementation Agent
     ↓
Test Agent
     ↓
Review Agent
     ↓
Security Agent
     ↓
CI/CD Agent
     ↓
Observability / Incident Agent
```

Cursor beispielsweise investiert stark in **Bugbot**, einen autonomen Review-Agenten. Im Juni berichtete Cursor über mehr als dreifache Geschwindigkeit und 10 % mehr gefundene Bugs gegenüber der vorherigen Version. Das sind Herstellerangaben, keine unabhängigen Benchmarks, aber sie zeigen die Entwicklungsrichtung. [Cursor](https://prod.cursor.com/blog/bugbot-updates-june-2026?utm_source=chatgpt.com)

Anthropic hat im Februar zudem **Claude Code Security** vorgestellt, das Repositories auf Schwachstellen untersucht und Patchvorschläge erzeugt. [Anthropic](https://www.anthropic.com/news/claude-code-security?via=deltl\&utm_source=chatgpt.com)

Damit wird Code Review zunehmend selbst zu einem agentischen Workflow.

---

# 14. Das führt zu einem neuen Flaschenhals: Review

Das ist aus meiner Sicht eine der wichtigsten Folgen.

Wenn ein Entwickler früher vielleicht

```text
500 LOC/day
```

vernünftig erzeugen und prüfen konnte und Agenten plötzlich in kurzer Zeit Tausende LOC produzieren können, dann wird **Code-Erzeugung billig**.

Der teure Teil wird:

```text
Understanding
Validation
Architecture
Security
Review
Integration
```

OpenAIs Harness-Engineering-Bericht beschreibt genau diese Verschiebung: Höherer Durchsatz erfordert auch eine neue Merge-, Review- und Repository-Strategie. [OpenAI](https://openai.com/index/harness-engineering/?utm_source=chatgpt.com)

Deshalb werden agentische Reviews, Tests, statische Analyse und Architektur-Constraints überproportional wichtiger.

---

# 15. Evals kommen in die normale Softwareentwicklung

Ein weiteres Konzept aus der LLM-Entwicklung schwappt in Software Engineering:

**Evaluation-driven Development.**

Bei deterministischer Software testen wir:

```java
assertEquals(expected, actual);
```

Bei Agenten braucht man zusätzlich:

```text
task
 ↓
agent execution
 ↓
trace
 ↓
evaluation
 ↓
score / failure category
```

LangChains Umfrage unter über 1.300 Professionals von Juni 2026 zeigt den Stand recht schön: Rund 57 % der Befragten gaben an, Agenten bereits in Produktion zu haben. 89 % nutzten Observability, aber nur 52 % Evals; als größtes Produktionsproblem wurde weiterhin Qualität genannt. Das ist eine Anbieterumfrage und entsprechend keine neutrale Gesamtmarktstatistik, aber die Größenordnung verdeutlicht, wohin sich das Engineering verschiebt. [LangChain](https://www.langchain.com/state-of-agent-engineering?utm_source=chatgpt.com)

Daraus entsteht ein neuer Lifecycle:

```text
BUILD
  ↓
TEST / EVAL
  ↓
DEPLOY
  ↓
OBSERVE
  ↓
TRACE FAILURES
  ↓
IMPROVE HARNESS
```

LangChain nennt das inzwischen explizit **Agent Development Lifecycle (ADLC)**. [LangChain](https://www.langchain.com/blog/the-agent-development-lifecycle?utm_source=chatgpt.com)

---

# 16. Kontext wird wichtiger als Prompting

2023:

> Prompt Engineering.

2024/25:

> RAG.

2026:

> **Context Engineering.**

Die zentrale Frage lautet nicht mehr:

> „Wie formuliere ich den Prompt perfekt?“

sondern:

> „Welche Information benötigt der Agent zu welchem Zeitpunkt?“

Also:

```text
           Context Window
                 │
 ┌───────────────┼────────────────┐
 │               │                │
Task        Relevant code       Skills
 │               │                │
Spec         Git history      Architecture
 │               │                │
Tests       Runtime output    Tool results
```

Dabei gilt zunehmend:

**Mehr Kontext ≠ besserer Kontext.**

Deshalb entstehen Repository-Indizes, Subagenten, Context-Compaction, Skills und gezielte Retrieval-Mechanismen.

---

# 17. Long-running Agents werden zu normaler Infrastruktur

Ein Coding-Agent 2024:

```text
Prompt → 30 seconds → answer
```

Ein Agent 2026:

```text
Task
 ↓
work
 ↓
compile
 ↓
test
 ↓
investigate failure
 ↓
modify
 ↓
test
 ↓
sub-agent
 ↓
browser validation
 ↓
PR
```

und das kann Minuten bis Stunden dauern.

Das verlangt neue Infrastruktur:

- persistente Sessions
- Sandboxes
- Checkpoints
- Retry
- Memory
- Credentials
- Tool Permissions
- Event Streams
- Telemetry.

OpenAI hat deshalb am 10. September die **Agents API** als Public Beta veröffentlicht: gehostete Agent-Ausführung, Kontextverwaltung und Subagenten auf derselben Infrastrukturklasse wie Codex. [OpenAI](https://openai.com/de-DE/index/introducing-the-agents-api/?utm_source=chatgpt.com)

Microsoft, LangChain und andere entwickeln in dieselbe Richtung.

---

# 18. Cloud Agent vs. lokaler Agent wird eine Architekturentscheidung

2026 kristallisieren sich zwei Modelle heraus.

### Local Agent

```text
Developer laptop
     ↓
Claude Code / Codex CLI / Junie
     ↓
local repo
```

Vorteile:

- schnelle Interaktion
- lokale Tools
- leichter Debug-Zugriff.

### Cloud Agent

```text
Ticket
  ↓
Cloud sandbox
  ↓
Agent
  ↓
Repository
  ↓
CI
  ↓
PR
```

Vorteile:

- asynchron
- parallelisierbar
- reproduzierbare Umgebungen
- unabhängig vom Developer-Laptop.

GitHub, Cursor und OpenAI bewegen sich alle stark in Richtung letzterem. [The GitHub Blog](https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent/?utm_source=chatgpt.com)

---

# 19. Die IDE verliert ihr Monopol

Das wird besonders für JetBrains-Nutzer interessant.

Früher:

```text
Developer → IntelliJ → Source code
```

Jetzt gibt es:

```text
             IntelliJ
                │
Developer ──────┼──── Terminal Agent
                │
                ├──── Cloud Agent
                │
                ├──── GitHub
                │
                └──── Mobile / Web UI
```

JetBrains reagiert ziemlich konsequent darauf.

**Junie** verließ 2026 die Beta und arbeitet inzwischen innerhalb IDE und Terminal; es kann planen, den echten Debugger verwenden und PRs prüfen. [The JetBrains Blog](https://blog.jetbrains.com/junie/2026/06/junie-coding-agent-out-of-beta/?utm_source=chatgpt.com)

Bemerkenswert ist außerdem, dass JetBrains inzwischen mehrere Agenten nebeneinander unterstützt:

- Junie
- Codex
- Claude Agent
- ACP-kompatible Agenten. [The JetBrains Blog](https://blog.jetbrains.com/ai/2026/06/codex-is-now-the-recommended-agent-in-jetbrains-ai/?utm_source=chatgpt.com)

Für mich ist das ein wichtiges Signal:

> **IDE-Hersteller versuchen nicht mehr, einen einzigen AI-Agenten zu besitzen, sondern werden zum Agent Host.**

---

# 20. Was verändert die Branche wirklich?

Ich würde die Entwicklungen ungefähr so einordnen:

| Entwicklung | Relevanz |
|---|---|
| Bessere Autocomplete | inkrementell |
| Chat im Editor | etabliert |
| Agent Mode | sehr relevant |
| Cloud Coding Agents | sehr relevant |
| MCP | **strategisch** |
| Agent Skills | **strategisch** |
| Spec-Driven Development | **sehr relevant** |
| Harness Engineering | **extrem relevant** |
| Repo-/Context Engineering | **extrem relevant** |
| Multi-Agent Swarms | interessant, teilweise Hype |
| Agentic Code Review | **sehr relevant** |
| Agent Evals/Observability | **Pflicht für Produktion** |
| Vollautonome Entwickler | noch nicht verlässlich genug |

---

# 21. Die Rolle eines Senior Developers verändert sich dadurch

Ich glaube nicht, dass Senior-Entwickler demnächst einfach „nicht mehr programmieren“.

Aber der Mix verschiebt sich.

Von:

```text
50% implementation
20% debugging
15% architecture
15% communication
```

eher Richtung:

```text
requirements
architecture
specification
decomposition
agent orchestration
review
validation
debugging
system design
```

Der wertvollere Entwickler wird weniger derjenige sein, der besonders schnell

```java
for (...)
```

tippen kann, sondern derjenige, der sagen kann:

> „Das System soll diese Invarianten besitzen, diese Module dürfen voneinander abhängen, diese fünf Fälle müssen getestet werden, diese Daten dürfen diesen Trust Boundary nicht verlassen, und hier ist die Definition of Done.“

Agenten können daraus inzwischen erstaunlich viel Software produzieren.

---

# 22. Ein gutes Zielbild für ein Java-Team Ende 2026

Ich würde für ein Java-/Spring-Team ungefähr diese Architektur anstreben:

```text
                  Product requirement
                          │
                          ▼
                  Spec / Acceptance
                          │
                          ▼
                    Planning Agent
                          │
                 ┌────────┴─────────┐
                 ▼                  ▼
           Coding Agent        Test Agent
                 │                  │
                 └────────┬─────────┘
                          ▼
                    Maven / Gradle
                          │
                    Testcontainers
                          │
                     Integration
                          │
                 ┌────────┴────────┐
                 ▼                 ▼
            Review Agent      Security Agent
                 │                 │
                 └────────┬────────┘
                          ▼
                         PR
                          │
                      Human
```

Unterhalb davon:

```text
Spring Boot
Spring AI / LangChain4j
MCP Java SDK
OpenTelemetry
Docker/Testcontainers
GitHub/GitLab CI
```

und daneben:

```text
AGENTS.md
/specs
/architecture
/skills
```

Das ist meines Erachtens wesentlich wichtiger als ein bestimmtes Modell auszuwählen.

---

# 23. Was ich mir als Senior-Java-Entwickler jetzt konkret anschauen würde

Wenn du deine Zeit begrenzen willst, würde ich nicht 30 neue Agenten ausprobieren.

Ich würde mich auf fünf Lernfelder konzentrieren:

1. **Einen echten Coding-Agenten intensiv benutzen.**  
   Codex, Claude Code, Junie oder Cursor. Nicht nur Chat/Autocomplete, sondern mehrstündige Tasks, Refactorings, Tests und Migrationen delegieren.

2. **MCP selbst bauen.**  
   Einen kleinen MCP-Server mit Java/Spring AI bauen und darüber 2–3 interne APIs als Tools anbieten. Damit versteht man das kommende Agent-Integrationsmodell sehr schnell.

3. **Spec-Driven Development ausprobieren.**  
   Beispielsweise GitHub Spec Kit einmal an einem mittelgroßen Feature testen und beobachten, wie sich deine Arbeit verändert, wenn Spec → Plan → Tasks → Implement getrennt sind.

4. **Ein Repository agent-friendly machen.**  
   `AGENTS.md`, Architektur-Dokumentation, klare Build-Kommandos, automatisierte Tests, Modulgrenzen und kleine Skills.

5. **Evals und agentische Reviews lernen.**  
   Denn Codegenerierung wird vermutlich nicht dein Engpass sein. **Vertrauenswürdige Verifikation** wird es.

---

# 24. Worauf ich für 2027 besonders achten würde

Drei Dinge halte ich für besonders spannend.

### ① Agent Harnesses werden wichtiger als Modelle

Heute fragt jeder:

> Claude oder GPT oder Gemini?

Die langfristig interessantere Frage könnte sein:

> **Welcher Harness nutzt welches Modell für welche Aufgabe?**

Modelle werden austauschbarer.

Die Differenzierung wandert Richtung:

```text
context
tools
skills
memory
orchestration
verification
sandbox
security
```

Genau deshalb taucht „Harness Engineering“ 2026 plötzlich überall auf.

---

### ② Software wird zunehmend „agent-readable“

Wir haben jahrzehntelang Code für

```text
CPU + Humans
```

geschrieben.

Nun kommt ein dritter Verbraucher hinzu:

```text
CPU
Humans
Agents
```

Das dürfte Auswirkungen haben auf:

- Repository-Struktur
- Architektur
- Dokumentation
- Tests
- Build-Systeme
- APIs
- Coding Standards.

Ein Projekt, das für Agenten gut verständlich ist, könnte einen massiven Produktivitätsvorteil besitzen.

---

### ③ Der SDLC wird stärker maschinengetrieben

Das langfristige Bild könnte weniger

```text
Developer writes code
```

sein und stärker:

```text
Human defines intent
        ↓
Agents transform intent
        ↓
Software artifacts
        ↓
Automated verification
        ↓
Human supervises exceptions
```

Nicht überall und nicht vollständig.

Aber diese Richtung ist 2026 deutlich konkreter geworden.

---

## Mein Gesamtbild Stand 30. September 2026

Der größte Fehler wäre momentan, die Entwicklung lediglich als

> „Copilot wird immer besser“

zu verstehen.

Das Spannendere ist:

```text
2023   Prompt Engineering
          ↓
2024   RAG
          ↓
2025   Coding Agents
          ↓
2026   Harness Engineering
       Context Engineering
       Spec-Driven Development
       MCP
       Agent Skills
       Agentic SDLC
          ↓
2027?  Agent-native Software Engineering
```

Der **Code selbst verliert etwas von seiner bisherigen Rolle als knappes Gut**.

Dafür werden **Spezifikation, Architektur, Kontext, Constraints, Tests, Evals und Review** deutlich wertvoller.

Für einen Senior Java/Web-Entwickler halte ich das eher für eine interessante Verschiebung als für eine reine Bedrohung: Viel von dem, was Seniorität ausmacht — Architekturverständnis, Zerlegung, Trade-offs, Fehleranalyse und Qualitätsurteil — wird gerade zum Engpass einer Entwicklungsmethode, bei der Implementierungsdurchsatz massiv steigt.

Wenn du möchtest, kann ich als Nächstes noch einen **konkreten „AI/Agentic Software Engineering Technology Radar September 2026“ für Java-Entwickler** daraus machen — z. B. mit den Kategorien **Adopt / Trial / Assess / Hold** für Spring AI, LangChain4j, MCP, A2A, Spec Kit, Codex, Claude Code, Junie, Cursor, Agent Framework, Agent Skills, Evals usw.



