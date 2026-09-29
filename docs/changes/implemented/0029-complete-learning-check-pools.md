# Lernchecks für die übrigen Themen ohne Fragen

Die 3 übrigen Themen ohne Fragen erhalten ebenfalls nutzbare, quellengebundene Lernchecks. Vor der Aktivierung wird diese Story bei Bedarf
in kleinere, fachlich zusammenhängende und im Browser einzeln abnehmbare Stories aufgeteilt. Bereits vorhandene Fragenpools bleiben
unverändert.

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

## Refinement und Umfang

Die fehlenden stabilen Themen-IDs sind `java-spring-migrations-with-openrewrite`, `compare-parallel-and-serial-agent-work` und
`coding-harness-design`. Zusammen mit den 43 vorhandenen Pools erhalten damit alle 46 bestehenden Themen einen Lerncheck. Die drei
Pools bleiben in einer Spec: Sie nutzen denselben öffentlichen Fragenvertrag und betreffen zusammen höchstens Themen und Lernchecks.
Jeder Pool ist ein eigener RED → GREEN → REFACTOR-Schritt und im Browser einzeln erreichbar. Bestehende Pools und der Ablauf mit fünf
Fragen werden nicht geändert. Keine neue Abhängigkeit. Der Nutzer hat am 28.09.2026 ausdrücklich bestätigt, dass alle drei Pools mit je
mindestens 25 geprüften Fragen zu dieser Story gehören.

## Risiken und Abnahme

- Jeder der drei Pools enthält nach unabhängiger fachlicher Prüfung mindestens 25 unterschiedliche Fragen, je drei bis fünf plausible
  Optionen mit genau einer richtigen Antwort, individuellen Erklärungen und tragenden Quellen-URLs.
- Die Themenquellen werden vor der Integration gegen die Originalseiten geprüft. Lizenz- und Bezugsregeln für OpenRewrite-Rezepte
  werden präzise formuliert; Forschung zu Recherche-Agenten wird nicht als Coding-Benchmark dargestellt.
- Ein Katalogtest weist 46 eindeutige Pools für 46 Themen nach. Die bestehende Inhaltsvalidierung ist grün. Ein exemplarischer Browser-Test
  prüft den Start und die Benutzung eines der neuen Lernchecks.
- Produktstand und redaktionelle Richtlinie nennen anschließend den tatsächlich geprüften Bestand.
- Die unabhängige externe KI-Prüfung nach der Fragenrichtlinie erfolgt durch den Nutzer anhand eines vollständigen kopierbaren Prompts.
  Beanstandete Fragen werden korrigiert oder entfernt und nötigenfalls erneut geprüft, bevor der Pool in den Katalog aufgenommen wird.

## Quellenprüfung

Prüftag: 28.09.2026. Die folgenden Originalseiten waren erreichbar; ihre Aussagen werden bei der Formulierung jeder Frage einzeln
abgeglichen.

Für die Falschantworten liegen keine freiwilligen Probelaufdaten vor. Ihre Denkwege sind redaktionelle Hypothesen; die Erklärung jeder
Option benennt den konkreten Ausschlussgrund. Plausibilität und Eindeutigkeit bleiben Gegenstand der unabhängigen Prüfung.

| Thema | Primärquelle und tragender Bereich | Grenze |
| --- | --- | --- |
| OpenRewrite | [Quickstart](https://docs.openrewrite.org/running-recipes/getting-started): Maven-/Gradle-Plugin, Aktivierung, Ausführung, externe Rezeptmodule und Diff-Prüfung. [Spring-Boot-3.5-Rezept](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition): zusammengesetzte Migration, Build-/API-Änderungen, Nutzung und Lizenz. | Aktuelle Artefakte können Authentifizierung am Code Genome Project verlangen; das verlinkte Community-Rezept ist source-available, nicht pauschal Apache-lizenziert. Keine Zusage einer vollständigen Migration. |
| Seriell/parallel | [Anthropic-Erfahrungsbericht](https://www.anthropic.com/engineering/multi-agent-research-system): Koordination, Tokenkosten, Abhängigkeiten, Evaluation, menschliche Prüfung. [OpenAI Agent Evals](https://developers.openai.com/api/docs/guides/agent-evals): Traces, Grader, Datasets und wiederholbare Eval-Läufe. | Anthropic beschreibt sein Research-System und interne Messungen. Diese Werte belegen keinen generellen Vorteil bei Coding-Aufgaben. |
| Harness | [OpenAI Sandbox Security](https://developers.openai.com/api/docs/guides/agents-api/environments/security): Isolierung, Netzwerkbegrenzung, Trennung von Schlüsseln. [Architecture](https://developers.openai.com/api/docs/guides/agents-api/architecture): Harness, Umgebung, Anwendungsserver. [Self-hosted sandboxes](https://developers.openai.com/api/docs/guides/agents-api/environments/self-hosted): Executor, Dateien, Verbindung. [MCP connections](https://developers.openai.com/api/docs/guides/agents-api/tools/mcp): Werkzeugserver und Verbindungsort. [Run and continue sessions](https://developers.openai.com/api/docs/guides/agents-api/sessions): Sitzungen, Turns, Fortschritt. | Die Seiten beschreiben eine konkrete Agents-API-Umgebung. Übertragung auf ein eigenes Harness wird nur als Beispiel und begründete Sicherheitsentscheidung gefragt. Die vier ergänzenden Quellen decken vom bisherigen Sicherheitslink nicht getragene Aspekte des Themas ab. |

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR und Prüfung |
| --- | --- | --- | --- |
| OpenRewrite-Pool | Der gezielte Vitest-Lauf am 28.09.2026 scheiterte: Der Pool ist `undefined`, erwartet sind 25 Fragen. | Pool mit 25 Fragen eingebunden; gezielter Vitest-Lauf und Inhaltsvalidierung grün. | Nach Prüfung kein weiterer Umbau nötig; bestehende Pools unverändert. |
| Seriell-/Parallel-Pool | Derselbe Vitest-Lauf scheiterte: Der Pool ist `undefined`, erwartet sind 25 Fragen. | Pool mit 25 Fragen eingebunden; gezielter Vitest-Lauf und Inhaltsvalidierung grün. | `parallel-comparison-13` nach Quellenreview präzisiert und erneut unabhängig bestätigt; kein weiterer Umbau nötig. |
| Harness-Pool | Derselbe Vitest-Lauf scheiterte: Der Pool ist `undefined`, erwartet sind 25 Fragen. Der Katalog hat erst 43 statt 46 Pools. | Pool mit 25 Fragen eingebunden; drei gezielte Pooltests und Inhaltsvalidierung grün. | Ergänzende Primärquellen gezielt in der Themen-Vertikale gepflegt; danach kein weiterer Umbau nötig. |

Der exemplarische Browser-Test `final-three-learning-checks.spec.ts` schlug am 28.09.2026 unter Desktop- und Mobile-Chromium erwartungsgemäß fehl:
Der Button „Fragen starten: Agenten-Harness mit technischen Grenzen gestalten“ fehlt noch. Die drei Frageentwürfe enthalten jeweils 25
Fragen und bestanden am 28.09.2026 die strukturelle Validierung gegen die Themenquellen. Der vollständige externe Review-Prompt wurde mit
`node scripts/create-final-question-review-prompt.mjs <Ausgabepfad>` erzeugt und vom Nutzer für die unabhängige Prüfung verwendet.
Die Entwürfe blieben bis zum Ergebnis der unabhängigen Prüfung außerhalb des öffentlichen Fragenkatalogs.

Die unabhängige Prüfung meldete `parallel-comparison-13`: Die Anthropic-Quelle fordert keine Review-Minuten als Vergleichsmetrik. Der
Einwand ist zutreffend. Die Frage wurde durch eine Quellenzuordnungsfrage zur ausdrücklich genannten „citation accuracy“ ersetzt. Diese
korrigierte ID wurde vom Nutzer gegen die Anthropic-Originalquelle erneut unabhängig geprüft und ausdrücklich als direkt belegt sowie
eindeutig abgegrenzt bestätigt. Die drei Pools wurden danach in den öffentlichen Fragenkatalog aufgenommen.

Nach der letzten Änderung an Code und Laufzeitinhalten war `npm run check` am 28.09.2026 grün: Format, Lint, Typen, 143 Unit- und
Komponententests, 35 Inhaltsvalidierungstests, Architektur- und Lizenzprüfung sowie Produktionsbuild. `npm run test:e2e` war mit
72/72 Desktop- und Mobile-Chromium-Tests grün, darunter der zuvor rote exemplarische Test. `npm audit --audit-level=high` fand
0 Schwachstellen. Es wurde keine Abhängigkeit ergänzt.

Lokaler Browsernachweis am 28.09.2026: Codex In-app-Browser unter `http://127.0.0.1:5173/`. Der neue Harness-Lerncheck erschien in der
Themenliste; fünf Fragen ließen sich beantworten. Die Ergebnisübersicht zeigte richtige und gewählte Antworten mit Begründungen und
Quellenlinks. „Zur Themenliste“ führte zurück zur Liste. Die beiden weiteren neuen Startbuttons waren dort ebenfalls sichtbar.

Der Nutzer hat den geänderten Ablauf am 28.09.2026 selbst manuell getestet, das Ergebnis positiv bestätigt und den Commit freigegeben.
Damit ist die manuelle Abnahme erfolgt. Unmittelbar vor dem Commit wurde der Ablauf im Codex In-app-Browser unter
`http://127.0.0.1:5173/` erneut geprüft: Der Harness-Lerncheck startete aus der Themenliste, alle fünf Fragen ließen sich beantworten,
die Ergebnisübersicht zeigte Begründungen und Quellenlinks, und „Zur Themenliste“ führte zurück. Die Startbuttons der beiden anderen
neuen Themen waren in der Liste sichtbar.

Vor dem Commit wurden der Arbeitsbaum und der gestagte Diff geprüft: ausschließlich die 14 erwarteten Dateien dieser Story sind enthalten,
darunter die archivierte Spec; `git diff --cached --check` meldete keine Whitespace-Fehler.
