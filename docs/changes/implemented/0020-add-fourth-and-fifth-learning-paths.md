## Vierter und fünfter Lernpfad

Die Vertikale Themen wird um den Lernpfad **Java-/Web-Code technisch analysieren und modernisieren** erweitert (vierter Lernpfad):

1. Git-Worktrees für isolierte Änderungen nutzen - neu
2. Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen - neu
3. Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen - neu
4. Modulgrenzen und öffentliche Schnittstellen gestalten - vorhanden
5. Fachverhalten mit TDD absichern - vorhanden
6. Java-Architekturregeln mit ArchUnit prüfen - vorhanden
7. Java-/Spring-Migrationen mit OpenRewrite durchführen - neu
8. Webabläufe mit Playwright prüfen - vorhanden

Die Vertikale Themen wird außerdem um den Lernpfad **Parallele Coding-Agenten kritisch erproben** erweitert (fünfter Lernpfad):

1. Aufgaben und Abbruchkriterien für parallele Agenten festlegen - neu
2. Git-Worktrees für isolierte Änderungen nutzen - vorhanden
3. Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen - neu
4. Kontext zwischen Agenten gezielt übergeben - neu
5. Werkzeugrechte und MCP-Zugriffe begrenzen - neu
6. Deterministische Prüf-Gates im Agenten-Harness gestalten - neu
7. KI-generierte Änderungen prüfen und übernehmen - vorhanden
8. Parallelität gegen einen seriellen Ablauf messen - neu

Die beiden Lernpfade werden als weitere Themenzuordnungen im bestehenden Katalog erfasst. Bereits vorhandene Themen werden wiederverwendet;
jedes der zehn neuen Themen erhält genau eine dauerhafte ID und erscheint nur einmal im Katalog. Die bisherigen drei Lernpfade behalten ihre
Themen und deren Reihenfolge. Das bisher pfadlose Thema bleibt ohne Zuordnung. Die Lern-App führt keine Coding-Agenten aus.

Die neuen Themen werden mit Quellen nach den [Regeln zur Quellenauswahl](../../content/source-selection.md) und Aktualitätsmetadaten
ausformuliert, fachlich geprüft und strukturell an die vorhandenen Inhalte angeglichen. Die
[KI-Tool-Landkarte](../../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt, nicht als Beleg. Die Themen benennen Voraussetzungen,
Grenzen und Gegenbeispiele. Das Thema zur Bewertung beschreibt einen kontrollierten Vergleich von Ergebnisqualität, Dauer, Kosten und
Review-Aufwand mit einem seriellen Ablauf.

Alle 26 Themen erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste; dazu gehört weiterhin das Thema ohne Lernpfad. Die Liste
ordnet Grundlagen vor mittleren und fortgeschrittenen Themen. Ihre bisherige globale Reihenfolge darf sich ändern, wenn danach jeder der
fünf Lernpfade seine vorgegebene interne Reihenfolge behält. Die Pfadfilter zeigen jeweils genau die zugeordneten Themen in dieser
Reihenfolge. Für neue Themen ohne Fragenpool wird kein Lerncheck angeboten.

Beim Context7-Thema wird zwischen der über Context7 gefundenen Dokumentation und der Originaldokumentation der konkret genannten
Bibliotheksversion unterschieden. Versionsabhängige Aussagen werden gegen die Originaldokumentation geprüft. Quellenprüfung,
Aktualitätsmetadaten und begründete Unsicherheiten werden in der späteren Änderungs-Spec festgehalten.

Abnahme: Katalogprüfungen belegen 26 eindeutige Themen, fünf vollständige Pfadzuordnungen mit korrekter Reihenfolge und das weiterhin
pfadlose Thema. Ein Browser-Test belegt die gemeinsame Liste, beide neuen Pfadfilter, die Anzeige neuer Themen mit Quellen und Metadaten
sowie das fehlende Lerncheck-Angebot bei Themen ohne Fragenpool.

Fragenpools gehören nicht zu dieser Story.

Vertikale: Themen

Dokumentation nach Umsetzung: Den neuen Themenbestand knapp im Produktstand ergänzen.

## Risiken und Abnahme

- **Reihenfolge und Vollständigkeit:** Vor der Implementierung die erwartete Reihenfolge aller 26 Themen-IDs festlegen. Katalogtests prüfen
  Eindeutigkeit, die Reihenfolge aller fünf Pfade, den Erhalt der drei bisherigen Pfadzuordnungen und das pfadlose Thema. Die globale
  Reihenfolge muss mit allen Pfaden vereinbar sein.
- **Fachliche Aussagen und Quellen:** Jedes neue Thema erhält eine dokumentierte Quellenprüfung nach den Quellenregeln. Bei
  versionsabhängigen Aussagen, insbesondere zu Context7, wird die Originaldokumentation der konkreten Bibliotheksversion geprüft.
  Unsicherheiten und bewusste Auslassungen werden festgehalten. Die Landkarte allein gilt nicht als Beleg.
- **Sichtbarer Lernnutzen:** Im Browser sind die beiden neuen Pfade über die vorhandenen Filter erreichbar. Neue Karten zeigen Problem,
  Kernkonzept, Java-/Web-Einsatz, Grenze, Quellen und Aktualitätsangaben. In der Gesamtansicht erscheint jede Karte nur einmal und ein
  Thema ohne Fragenpool bietet keinen Lerncheck an.
- **Umfang:** Die Änderung bleibt in der Vertikale Themen. Es werden weder Fragenpools noch eine Agentenausführung ergänzt. Neue
  Abhängigkeiten sind nicht vorgesehen.

## Umsetzung und Nachweise

Erwartete globale ID-Reihenfolge vor der Implementierung:

1. `human-ai-responsibility`
2. `problem-understanding-and-change-boundaries`
3. `agents-md`
4. `ears-requirements`
5. `coding-agent-context-and-trust-boundaries`
6. `protect-secrets-and-sensitive-data-with-ai`
7. `research-plan-tasks`
8. `spec-driven-development-openspec`
9. `parallel-agent-task-boundaries`
10. `git-worktrees-for-isolated-changes`
11. `code-navigation-with-symbols-and-references`
12. `versioned-library-docs-with-context7`
13. `specialized-subagents-and-ownership`
14. `agent-context-handoffs`
15. `agent-tool-and-mcp-permissions`
16. `module-boundaries-and-public-interfaces`
17. `tdd-for-domain-behavior`
18. `archunit-for-java-architecture`
19. `deterministic-agent-verification-gates`
20. `java-spring-migrations-with-openrewrite`
21. `playwright-for-web-flows`
22. `web-xss-and-safe-dom`
23. `dependency-security-assessment`
24. `review-and-accept-ai-generated-changes`
25. `compare-parallel-and-serial-agent-work`
26. `focused-git-commits`

Für beide Teil-Features werden RED-Test und fachlicher Fehlergrund, GREEN-Prüfung und REFACTOR mit weiterhin grüner Testsuite hier
dokumentiert:

1. Vierten Lernpfad mit vier neuen, quellengeprüften Themen und wiederverwendeten vorhandenen Themen einweben.
2. Fünften Lernpfad mit sechs neuen, quellengeprüften Themen und wiederverwendeten vorhandenen Themen einweben.

Die gemeinsame Liste und beide Pfadfilter werden anschließend im Browser geprüft; dabei werden die globalen 26 Themen, das pfadlose
Thema und das Verhalten ohne Fragenpool abgenommen.

Vor dem Abschluss werden hier die vollständig grüne Pflichtsuite, die Quellenprüfung pro neuem Thema, der lokale Browsernachweis
(Browser, Ablauf, Ergebnis) und die ausdrückliche manuelle Bestätigung des Nutzers festgehalten.

### Teil-Feature 1: Vierter Lernpfad

- RED am 27.09.2026: `npm run validate:content -- --run tests/verticals/topics/newLearningPaths.test.ts` schlug fehl, weil der vierte
  Lernpfad im Katalog fehlt (`path?.topicIds` war `undefined`, erwartet wurden die acht oben festgelegten IDs). Die bisherige
  Katalogsuite war grün (19 Tests).
- GREEN: Nach vier neuen Karten und der Pfadzuordnung bestand `npx vitest run tests/verticals/topics/newLearningPaths.test.ts` (1 Test).
- REFACTOR: Bestehende Katalogtests an die vier neuen Themen angepasst; `npm run validate:content` bestand mit 19 Tests.

### Teil-Feature 2: Fünfter Lernpfad

- RED am 27.09.2026: `npx vitest run tests/verticals/topics/newLearningPaths.test.ts` schlug im neuen Test fehl, weil der fünfte
  Lernpfad fehlt (`path?.topicIds` war `undefined`, erwartet wurden die acht festgelegten IDs). Der Test für den vierten Pfad blieb grün.
- GREEN: Nach sechs neuen Karten und der Pfadzuordnung bestand `npx vitest run tests/verticals/topics/newLearningPaths.test.ts`
  (2 Tests).
- REFACTOR: Der bisherige Übersichtstest zählt Themenzeilen statt aller Schaltflächen. Die alten Katalogtests prüfen 26 eindeutige IDs,
  globale Reihenfolge und die drei unveränderten Lernpfade. `npx vitest run tests/verticals/topics` bestand mit 59 Tests.

### Fachliche Quellenprüfung

Alle folgenden Originalseiten wurden am 27.09.2026 auf Erreichbarkeit und die jeweils genannte Aussage geprüft. Die in den Karten
gespeicherten Quellen sind Primärquellen der jeweiligen Hersteller, Projektverantwortlichen oder Autoren; die Tool-Landkarte wurde nur
als Rechercheausgangspunkt verwendet. Wo ein Arbeitsrat über die Quelle hinausgeht, ist er unten als redaktionelle Ableitung benannt.

| Thema | Geprüfte Quelle und gestützter Aspekt | Grenze oder bewusste Auslassung |
| --- | --- | --- |
| Worktrees | [Git worktree](https://git-scm.com/docs/git-worktree): mehrere verknüpfte Checkouts, Verwaltungsbefehle. | Keine Behauptung, dass Datenbanken oder Ports isoliert werden. |
| Symbolsuche | [VS Code Code Navigation](https://code.visualstudio.com/docs/editing/editingevolved): Definitionen, Symbole und Referenzen; [IntelliJ Find Usages](https://www.jetbrains.com/help/idea/find-highlight-usages.html): Verwendungen von Java-Symbolen. | Treffer bei dynamischen Aufrufen und Reflection können fehlen; die Ergänzung durch Tests ist redaktioneller Arbeitsrat. |
| Context7 | [Context7-Repository](https://github.com/upstash/context7): Suche nach Bibliotheks-ID und Dokumentation; [API Guide](https://github.com/upstash/context7/blob/master/docs/api-guide.mdx): Versionsangabe; [Spring Boot 3.5 Reference](https://docs.spring.io/spring-boot/3.5/reference/index.html): Originaldokumentation der beispielhaft genannten Version 3.5. | Keine Context7-Sitzung oder API-Behauptung für eine konkrete Spring-Funktion; ein Treffer und eine Versionsnennung sind keine Garantie. |
| OpenRewrite | [Running Recipes](https://docs.openrewrite.org/running-recipes/getting-started): Maven-/Gradle-Ablauf; [Spring-Boot-3.5-Rezept](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition): Umfang und Lizenzhinweis eines konkreten Rezepts. | Kein Rezept im Projekt installiert oder ausgeführt; Zugänglichkeit, Lizenz und Ergebnisse sind vor realem Einsatz erneut zu prüfen. |
| Aufgaben und Abbruch | [OpenAI Agent Guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/): Orchestrierung und Ausstiegsbedingungen; [Anthropic Erfahrungsbericht](https://www.anthropic.com/engineering/multi-agent-research-system): Eignung unabhängiger Arbeit und Koordinationskosten. | Dateibesitz und Abbruchgrenzen sind redaktionelle Anwendung auf Coding-Aufgaben, keine allgemeine Produktfunktion. |
| Subagents | [GitHub Custom Agents](https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents): getrennte Agenten und Werkzeuglisten; [Anthropic Erfahrungsbericht](https://www.anthropic.com/engineering/multi-agent-research-system): getrennte Kontexte. | Die Quelle beweist keinen Geschwindigkeitsvorteil für Java-/Web-Aufgaben; Dateibesitz wird als Arbeitsregel empfohlen. |
| Übergabe | [OpenAI Agents SDK Handoffs](https://openai.github.io/openai-agents-python/handoffs/): Übergabe, Verlauf und Filter; [OpenAI Agent Guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/): Orchestrierungsmuster. | Die kompakte Befundübergabe und Bestätigung sind redaktionelle Praxisempfehlungen, keine Pflicht der SDK. |
| Rechte und MCP | [GitHub Custom Agents Configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration): Werkzeug- und MCP-Auswahl; [OpenAI Safety](https://developers.openai.com/api/docs/guides/agent-builder-safety): Risiken, Schutzschichten und Freigaben. | Konkrete Durchsetzung hängt vom eingesetzten Harness und MCP-Server ab; Promptregeln genügen nicht. |
| Prüf-Gates | [GitHub Status Checks](https://docs.github.com/en/pull-requests/reference/status-checks): erforderliche Checks vor Merge und übersprungene Jobs; [OpenAI Agent Evals](https://developers.openai.com/api/docs/guides/agent-evals): wiederholbare Agenten-Evaluation. | Die Kombination zu einem Coding-Harness ist redaktionelle Ableitung; grüne Checks sind kein Korrektheitsbeweis. |
| Vergleich | [Anthropic Erfahrungsbericht](https://www.anthropic.com/engineering/multi-agent-research-system): Leistung und Kosten im eigenen Recherche-System; [OpenAI Agent Evals](https://developers.openai.com/api/docs/guides/agent-evals): Datensätze und Prüfkriterien. | Anthropic-Zahlen werden bewusst nicht auf Coding übertragen. Der kontrollierte Vergleich ist eine Anleitung, kein behauptetes Messergebnis. |

### Pflichtprüfungen und Browserabnahme

- `npm run check`: grün; Format, Lint, Typen, 84 Unit-/Komponententests, Inhaltsvalidierung (19 Tests), Architektur,
  Lizenzen und Produktionsbuild.
- `npm run test:e2e`: 50/50 grün in Desktop-Chromium und Mobile-Chromium; die vier neuen Browserfälle prüfen beide Pfade,
  Reihenfolge, Quellen/Metadaten und fehlende Lernchecks.
- `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit.
- Lokaler Sichtcheck im Codex In-app-Browser unter `http://127.0.0.1:4176/`: Die gemeinsame Liste zeigte 26 Themen. Der Filter
  „Parallele Coding-Agenten kritisch erproben“ zeigte acht Themen in der vorgesehenen Reihenfolge. Die Karte „Aufgaben und
  Abbruchkriterien für parallele Agenten festlegen“ zeigte alle vier Inhaltsabschnitte, redaktionelle Metadaten und zwei
  Primärquellen; für sie erschien kein Lerncheck. Der vierte Pfad wurde zusätzlich im Desktop- und Mobile-Browser-E2E geprüft.
- Der Nutzer bestätigte nach eigener manueller Prüfung am 27.09.2026 das Ergebnis und gab anschließend den Commit aller lokalen Änderungen
  einschließlich seiner Backlog-Anpassungen ausdrücklich frei.
- Unmittelbar vor dem Commit erneuter lokaler Sichtcheck im Codex In-app-Browser unter `http://127.0.0.1:4176/`:
  Der fünfte Pfad zeigte acht Themen; die Worktree-Karte öffnete sich mit Inhalt, Datum und Git-Primärquelle ohne Lerncheck.
  Die erneut ausgeführten Pflichtprüfungen waren grün (`npm run check`: 84 Tests; `npm run test:e2e`: 50 Tests;
  `npm audit --audit-level=high`: 0 Schwachstellen).
