# Neue Entwicklungen einarbeiten

## Neue Entwicklungen einarbeiten
Wir wollen die Inhalte von Lernluchs aktualisieren und aktuelle Entwicklungen ergänzen, damit nichts Wichtiges Neues fehlt. Dabei wollen wir die Anzahl der Themen oder Lernpfade nicht aufblähen, damit die App übersichtlich bleibt.

Sieh dir dazu `latest-development.md` an.

Bevor du Code änderst, mach im ersten Schritt eine tabellarische Übersicht:
- Welche Details sollten wir bei bestehenden Themen ergänzen?
  -- Brauchen wir vielleicht weitere Primärquellen zu diesen Themen?
- Welchen (wenigen?) neuen Themen sollten wir ergänzen (und welche Punkte würden dazu gehören)?
  -- Dazu brauchen wir dann jeweils Primärquellen und Sekundärquellen analog zu den anderen Themen. (Gern auch immer etwas YouTube auf Deutsch, aber nicht KI-übersetzt.)
- Brauchen wir vielleicht sogar einen weiteren Lernpfad, um Themen abzudecken, die wir ganz übersehen haben.
- Gibt es in unseren bestehenden Themen Inhalte, die deutlich veraltet sind oder schief formuliert, aus aktueller Sicht nicht mehr haltbar?
- Aktualisiere auch das Aktualisierungsdatum, wenn es eine spürbare Überarbeitung gab
- Setze ggf. das Wiedervorlagedatum neu, falls das Thema durchgreifend geprüft wurde.

Erst nach dem ersten Schritt (Tabelle) und Abstimmung mit den Entwickler wird entwickelt!

Abgrenzung:
- Keine NotebookLM-Podcasts (fügen wir später hinzu)
- Fragen unverändert lassen - auch keine neuen Fragen(pools) einfügen.

## Ziel und vereinbarter Umfang

Die tabellarische Bestandsprüfung und Abstimmung sind erfolgt. Gemeint ist die vorhandene Datei
`docs/product/latest-developments.md`. Neun bestehende Themen werden überarbeitet; ein neues Thema zu Evals und Traces
ergänzt den Katalog von 48 auf 49 Themen. Die 14 Lernpfade bleiben bestehen. Vertikale: Themen; bestehende Tests der
Lernchecks dürfen an das zusätzliche Thema ohne Fragenpool angepasst werden, die Fragen selbst bleiben unverändert.

| Thema | Ergänzung oder Korrektur |
| --- | --- |
| `coding-harness-design` | Lange Läufe, gespeicherte Sitzungen, Wiederaufnahme, Abbruch und Budgets. |
| `codegraphs-for-large-repos` | Codegraph, semantische Suche und IDE-Werkzeuge unterscheiden; JetBrains Context und Datenfluss. |
| `spec-framework-selection` | Spec und Implementierung nach der Umsetzung abgleichen; konkrete Grenzen erklären. |
| `coding-agent-interface-selection` | Lokale und Cloud-Ausführung vergleichen; Junie als Java-relevantes Beispiel. |
| `agent-protocol-integration` | MCP 2026-07-28 gegenüber älteren Revisionen und Java-SDK-Unterstützung einordnen. |
| `java-ai-applications` | Stabile Releases, Milestones und angekündigte Agentenfunktionen trennen. |
| `agent-skills-and-commands` | Offenes Format, bedarfsgerechtes Laden und Evals nach Änderungen. |
| `review-and-accept-ai-generated-changes` | Agentische Review als zusätzliche Perspektive; Aufwand und kleine Änderungen. |
| `deterministic-agent-verification-gates` | Technische Checks von qualitativen Evals abgrenzen. |
| `agent-evals-and-traces` (neu) | Repräsentative Aufgaben, Ergebnisse und Toolabläufe, Bewertungsmaßstäbe, Regressionen und Grenzen. |

Die Texte dürfen für anschauliche Beispiele länger werden. Grenzen werden konkret erklärt, etwa:
Ein automatischer Spec-Abgleich kann Widersprüche finden, aber eine fehlende oder falsch verstandene Anforderung übersehen.
Das neue Thema wird nach den Prüf-Gates eingeordnet und den bestehenden Pfaden für Java-KI-Anwendungsbau und kontrollierte
Automatisierung zugewiesen. Neue Sekundärquellen zu neuen Aspekten stammen möglichst aus dem Zeitraum 2026-07-07 bis
2026-10-07; deutsche Originalvideos werden bevorzugt, KI-übersetzte Videos nicht aufgenommen.

Das vorhandene Datum `reviewedAt` zeigt die fachliche Aktualisierung; `publishedAt` bestehender Themen bleibt erhalten.
Bei vollständiger Prüfung werden `reviewedAt` auf 2026-10-07 und `reviewDueAt` auf 2027-01-07 gesetzt.
Quellenprüfdaten werden ausschließlich für tatsächlich geprüfte Quellen aktualisiert.
Keine neuen Abhängigkeiten oder Laufzeitintegrationen. Vorhandene Podcasts bleiben erhalten.

## Vorgaben

- [Dauerhafte Vorgaben](../../governance/durable-rules.md)
- [Vertikalen und Grenzen](../../architecture/verticals-and-boundaries.md)
- [Redaktionelle Richtlinie](../../content/editorial-policy.md) und [Quellenregeln](../../content/source-selection.md)
- [Qualitätsstrategie](../../quality/verification-strategy.md)

## Quellenprüfung

Geprüft am 2026-10-07; die folgenden Originalseiten wurden bereits vor der Implementierung geöffnet.
Weitere Quellenprüfungen werden in derselben Übersicht ergänzt.

| Aussage / Aspekt | Primäre Quelle | Grenze / bewusste Auslassung |
| --- | --- | --- |
| Lange Läufe und Sitzungen | [Agents API](https://developers.openai.com/api/docs/guides/agents-api/overview), [Sessions](https://developers.openai.com/api/docs/guides/agents-api/sessions) | Gespeicherte Agentensitzung und Sandbox besitzen unterschiedliche Lebenszyklen; Abbruch ist kein Rollback. |
| Codegraph gegenüber Suche und IDE | [IDE MCP](https://www.jetbrains.com/help/idea/mcp-server.html), [JetBrains Context](https://www.jetbrains.com/help/jetbrains-console/getting-started-with-jetbrains-context.html) | Context-Dokumentation beschreibt Versand von Codeabschnitten; Marketingaussage zur Speicherung ist keine Garantie lokaler Verarbeitung. |
| Spec-Abgleich | [Spec Kit Newsletter](https://github.com/github/spec-kit/blob/main/newsletters/2026-June.md), [History](https://github.com/github/spec-kit/blob/main/docs/history.md) | Gefundene Übereinstimmung beweist weder vollständige Anforderungen noch fachliche Korrektheit. |
| Lokale / Cloud-Oberflächen | [Junie](https://blog.jetbrains.com/junie/2026/06/junie-coding-agent-out-of-beta/), [Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate) | Lokale Oberfläche bedeutet keine lokale Modellverarbeitung. |
| MCP und Java-SDK | [MCP 2026-07-28](https://blog.modelcontextprotocol.io/posts/2026-07-28/), [SDK Changelog](https://github.com/modelcontextprotocol/java-sdk/blob/main/CHANGELOG.md), [Roadmap](https://github.com/modelcontextprotocol/java-sdk/blob/main/ROADMAP.md) | 2.0.x unterstützt 2025-11-25; 3.x für 2026-07-28 ist eine Roadmap, kein stabiler Nachweis. |
| Java-KI-Versionen | [Spring AI](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-overview.html), [2.1-M1](https://spring.io/blog/2026/09/25/spring-ai-2-1-0-M1-available-now/), [LangChain4j Releases](https://github.com/langchain4j/langchain4j/releases) | Spring AI 2.0.1 stabil, 2.1.0-M1 Preview; geplante Agentenunterstützung nicht als verfügbar ausgeben. |
| Skills | [Agent Skills](https://agentskills.io/home), [Skill Evals](https://developers.openai.com/blog/eval-skills) | Formatunterstützung und Werkzeugrechte separat prüfen. |
| Agentische Reviews | [Copilot Code Review](https://docs.github.com/en/copilot/concepts/agents/code-review), [Review AI Code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) | Review-Agent kann Fehler übersehen; Herstellerzahlen werden nicht übertragen. |
| Evals und Traces | [OpenAI Agent Evals](https://developers.openai.com/api/docs/guides/agent-evals), [Evaluation Best Practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), [Google ADK](https://adk.dev/evaluate/) | Wiederholte Läufe und repräsentative Daten nötig; Judges brauchen menschlichen Abgleich; sensible Traces schützen. |

Ergänzende Sekundärquellen, Originalseiten geöffnet und am selben Prüftag gegen die Primärquellen eingeordnet:

| Quelle | Veröffentlichung / Aktualisierung | Aspekt und Grenze |
| --- | --- | --- |
| [Sébastien Dubois: JetBrains Context](https://www.dsebastien.net/jetbrains-context/) | 2026-08-03 / 2026-08-21 | Semantische Suche, Multi-Repo und Einordnung der Hersteller-Benchmarks. Zahlen nicht in den Thementext übernommen; Datenfluss nach Herstellerdokumentation. |
| [InfoQ: MCP Goes Stateless](https://www.infoq.com/news/2026/08/mcp-stateless-gateway/) | 2026-08-12 | Skalierung und Migrationsaufwand. Fachliche Protokollangaben aus der offiziellen Spezifikation. |
| [InfoQ: Akka Tests Spec-Driven AI Delivery](https://www.infoq.com/news/2026/10/ai-spec-driven-delivery/) | 2026-10-05 | Praxisfall und verbleibender Prüfbedarf; kein übertragbarer Produktivitätsnachweis. |
| [Testμ-Konferenzbericht: Agent Evals](https://www.testmuai.com/blog/build-trustworthy-ai-agents/) | Konferenz August 2026; Bericht aktualisiert 2026-09-21 | Ergebnisse, Toolabläufe, wiederholte Läufe und Grader. Sekundärquelle als Bericht über Rushabh Mehtas Vortrag; keine Prozentwerte oder Benchmarkzahlen übernommen. |

Alle neu ergänzten Sekundärquellen liegen im vereinbarten Dreimonatsfenster. Für neue YouTube-Links ließen sich in der
gezielten Recherche Inhalt, Datum, Sprache und Laufzeit nicht ausreichend gemeinsam belegen; vorhandene Videos bleiben erhalten.
Suchtreffer ohne erfolgreich geöffnete Originalseite wurden nicht aufgenommen. Die IBM-Einführung wurde zugunsten des
aktuelleren Konferenzberichts nicht ergänzt. Quellenergänzungen verdrängen keine von bestehenden Fragen referenzierten URLs.

## Risiken und Abnahme

- 49 eindeutige Themen, 14 bestehende Pfade; bestehende Themen-IDs und relative Reihenfolge bleiben erhalten.
- Alle neun überarbeiteten Themen enthalten die vereinbarten Aspekte, konkrete Java-/Web-Beispiele und passende Grenzen.
- Neues Evals-Thema besitzt Primär- und Sekundärquellen, aktuelle Metadaten und keinen Lerncheck.
- Jeder Pfad bleibt in Themenlistenreihenfolge; das neue Thema ist in beiden vereinbarten Pfaden erreichbar.
- Fragen einschließlich Antworten und Quellenverweise bleiben unverändert; vorhandene quellengebundene Lernchecks bleiben gültig.
- Keine ungesicherten Verfügbarkeits-, Leistungs- oder Datenschutzversprechen. Quellen höchstens 20 je Thema.
- Browserablauf: Java-KI-Pfad filtern, MCP-/Java-Thema und neues Evals-Thema lesen, Quellen und Metadaten prüfen;
  Evals zusätzlich über Automatisierungspfad öffnen und einen bestehenden Lerncheck erreichen.
- Pflichtsuite: `npm run check`, kompletter E2E-Einmallauf, Audit und Vertikalprüfung. Commit erst nach ausdrücklich
  positiver manueller Prüfung durch den Entwickler; bis dahin bleibt die Spec aktiv.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN / REFACTOR |
| --- | --- | --- |
| Bestehende Themen aktualisieren | Bestehenden Inhaltstest erweitert; gezielter Lauf: 1 fehlgeschlagen, 23 übersprungen, 21,04 s, Exitcode 1. Die neuen Konzepte und Prüfdaten fehlen. | Neun Themen überarbeitet und Quellen ergänzt; historische Metadatentests erlauben gezielte spätere Quellenprüfungen. Inhalt und Pfade: 29 bestanden, 1,45 s, Exitcode 0. |
| Evals-Thema und Pfade | Bestehende Inhalts- und Pfadtests erweitert: 2 fehlgeschlagen, 27 übersprungen, 1,48 s, Exitcode 1; Evals-Thema fehlt. | Thema nach den Prüf-Gates eingefügt, zwei bestehende Pfade ergänzt; betroffene Unit-/Komponenten- und Datenprüfungen: 93 bestanden, 10,13 s, Exitcode 0. |

Die bestehenden Inhalts-, Pfad- und Metadatentests wurden für beide Teil-Features erweitert und verallgemeinert;
keine neuen Testdateien waren erforderlich. Fragen und ihre Quellenverweise sind durch die unveränderte
Daten-Fingerabdruckprüfung abgesichert.

| Abschließende Prüfung | Ergebnis |
| --- | --- |
| `npm run check` | Bestanden, 23,08 s, Exitcode 0: 130 Unit-/Komponententests (7,49 s), 32 Inhaltsprüfungen (1,76 s), Format, Lint, Typen, Runner-Selbsttests, Architektur, Lizenzen und Produktionsbuild. |
| `npm run --silent test:e2e` | 74 bestanden, 386,64 s, Exitcode 0. Nach den erfolgreichen Einzelprüfungen wartete der Abschluss auf das Ende des Windows-Testservers; dessen gezieltes Beenden ließ den Runner erfolgreich abschließen. |
| `npm audit --audit-level=high` | Keine Schwachstellen, 1,83 s, Exitcode 0. |
| Vertikalen im Arbeitsstand | Zwei: `topics` und `learning-checks`, 0,12 s, Exitcode 0. Das Commit-Bereichswerkzeug benötigt zwei Revisionen; der noch nicht committete Arbeitsstand wurde anhand der geänderten Pfade geprüft. |
| Lokaler Browser | Codex In-app Browser: Java-KI-Pfad, aktualisierte MCP-/Java-Themen und neues Evals-Thema geprüft; Quellen, Metadaten und lesbarer Textumbruch bestätigt. Unmittelbar vor dem Commit Evals erneut über den Automatisierungspfad geöffnet, Quellen und Metadaten geprüft; bestehender Lerncheck erreichbar. |
| `git diff --check` | Bestanden, 0,32 s, Exitcode 0. |

Die Pflichtsuite ist vollständig grün. Manuelle Prüfung und Freigabe durch den Entwickler erfolgt.
Die Story ist abgeschlossen; die Spec wird mit der fachlichen Änderung archiviert.
