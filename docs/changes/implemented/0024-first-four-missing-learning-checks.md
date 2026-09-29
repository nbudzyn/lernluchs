# Lernchecks für die ersten 4 Themen ohne Fragen

Die ersten 4 Themen **ohne Fragen** erhalten ebenfalls nutzbare, quellengebundene Lernchecks. Bereits vorhandene Fragenpools bleiben
unverändert.

- In Reihenfolge der Themenliste

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

Refinement mit dem Entwickler am 27.09.2026: Der Umfang gilt genau wie beschrieben. Die ersten vier Themen ohne Fragen in der aktuellen
Themenliste sind `context-selection-and-reset`, `codebase-memory-for-large-repos`, `token-efficiency-tools` und
`coding-agent-interface-selection`; jeder dieser vier Pools erhält mindestens 25 fachlich unterschiedliche Fragen.

## Ziel und Nicht-Ziele

Die vier Themen erhalten je einen nutzbaren Pool mit mindestens 25 Fragen. Der bestehende Lerncheck-Ablauf wird über seine öffentlichen
Schnittstellen genutzt. Andere Fragenpools und persönliche Lernstände werden nicht geändert.

## Entscheidungen und Risiken

- Die fachlichen Schwerpunkte der vier Themen bleiben getrennt. Neue oder ersetzte Quellen werden nach den [Quellenregeln](../../content/source-selection.md)
  und der [redaktionellen Richtlinie](../../content/editorial-policy.md) geprüft.
- Werkzeug- und Produktfunktionen können sich ändern. Fragen verwenden nur belegte, am Prüftag aktuelle Aussagen; Werbe- und
  Benchmarkzahlen werden nicht als allgemeingültige Ergebnisse dargestellt.
- Jede Frage und jede Option benötigt einen passenden Originalquellenbezug. Die unabhängige externe KI-Prüfung gemäß Fragenregeln führt
  der Entwickler anhand eines vollständigen, kopierbaren Prompts aus; beanstandete Fragen werden vor Integration geklärt oder ersetzt.
- Es werden keine neuen Abhängigkeiten benötigt.

## Prüfbare Abnahme

- Genau diese vier Themen sind zusätzlich für Lernchecks verfügbar, mit jeweils mindestens 25 gültigen, fachlich verschiedenen Fragen.
- Alle bestehenden Fragenpools bleiben inhaltlich unverändert.
- Pro neuer Frage existieren eine eindeutig richtige Antwort, zwei bis vier plausible falsche Antworten, Erklärungen und Quellenbezüge.
- Die unabhängige Prüfung aller vier Pools ist abgeschlossen; beanstandete Fragen sind korrigiert oder entfernt und erneut geprüft.
- Ein Browser-Test belegt die Nutzbarkeit eines neuen Pools exemplarisch. Pflichtsuite und lokaler Browserablauf sind grün.

## Quellenprüfung

Prüftag: 27.09.2026. Originalseiten wurden geöffnet; der genaue Zuschnitt der Fragen wird an diesen Aussagen geprüft.

| Thema und Aussage | Primärquelle | Grenze / Unsicherheit |
| --- | --- | --- |
| Kontext: bewusste Wahl von Repository, Arbeitsumgebung und Kontext; Kompaktierung für fortlaufende Aufgaben | [OpenAI Remote Guide](https://developers.openai.com/blog/mastering-codex-remote-for-engineering) | Der Guide behandelt speziell Codex Remote; daraus folgen keine allgemeinen Leistungsgarantien. |
| Kontext: Nachrichten, Werkzeugaufrufe und große Ausgaben füllen den Kontext; Kompaktierung fasst ihn zusammen | [GitHub Copilot CLI: Context management](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management) | Produktspezifische Schwellenwerte sind veränderlich und werden nicht als allgemeine Regel gefragt. Die Quelle wurde dem Thema gezielt ergänzt. |
| Codegraph: Index, strukturelle Abfragen, Abdeckungs- und Aktualitätsprüfung | [Codebase Memory MCP](https://github.com/DeusData/codebase-memory-mcp) | Hersteller-Benchmarks sind keine unabhängige Evidenz; ein Graphfund ersetzt die Kontrolle aktueller Quelldateien nicht. |
| Tokenwerkzeuge: RTK verdichtet Kommandoausgaben, Caveman verändert weitere Ausgabe- und Kontextpfade | [RTK](https://github.com/rtk-ai/rtk), [Caveman](https://github.com/JuliusBrussee/caveman) | Herstellerangaben zu Einsparungen gelten nicht ohne Messung im eigenen Ablauf; Detailverlust ist möglich. |
| Coding-Agent-Oberflächen: Laufumgebung, Plan-/Agentenmodus, Werkzeuge und menschliches Review unterscheiden sich | [OpenAI Remote Guide](https://developers.openai.com/blog/mastering-codex-remote-for-engineering), [GitHub Copilot IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide), [Claude Code](https://code.claude.com/docs/en/overview), [Kiro](https://kiro.dev/docs/getting-started/first-project/), [Gemini Gems](https://support.google.com/gemini/answer/15236321?hl=en) | Produktfunktionen und Preise ändern sich; der Vergleich wird auf ausdrücklich belegte, stabile Unterschiede begrenzt. |

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Vier neue Fragenpools | `npx vitest run tests/verticals/learning-checks/firstFourMissingQuestionPools.test.ts` am 27.09.2026: fünf Tests rot; Katalog enthält 23 statt 27 Pools, alle vier neuen Pools fehlen. | Vier Pools mit je 25 extern geprüften Fragen eingebunden; derselbe Lauf: fünf Tests grün. `npm run validate:content`: 28 Tests grün. | Fragenformate und Quellenbezüge gegen die gemeinsamen Katalogregeln geprüft; keine weitere Strukturänderung nötig. |
| Kontextquelle | `npx vitest run tests/verticals/topics/topics.test.ts -t context-management`: rot, weil die GitHub-Kontextquelle fehlte. | GitHub-Originalseite als zweite Primärquelle für `context-selection-and-reset` ergänzt; derselbe Test grün. | Quelle und Themenaussage erneut abgeglichen; keine weitere Änderung nötig. |
| Browserablauf | `npx playwright test e2e/verticals/learning-checks/first-four-missing.spec.ts --project=desktop-chromium`: rot; der Startknopf für das Kontext-Thema fehlt. | Neuer Test für Start, fünf Antworten, Quellenlinks und Rückkehr zur Themenliste auf Desktop und Mobilgerät grün; `npm run test:e2e`: 62 Tests grün. Der Ablauf wurde zusätzlich im lokalen Browser mit Tastaturbedienung vollständig durchlaufen. | Bestehenden Lerncheck-Ablauf ohne neue Sonderlogik verwendet; keine weitere Änderung nötig. |

Die unabhängige Erstprüfung aller 100 Entwürfe beanstandete `TK02`, `TK13`, `TK25`, `UI23` und `UI25` wegen nicht ausreichend
belegter Aussagen. Diese fünf Fragen wurden durch unmittelbar in den jeweiligen Originalquellen belegte Fragen ersetzt. Der Entwickler
bestätigte nach unabhängiger erneuter Prüfung am 27.09.2026, dass keine weiteren Beanstandungen vorlagen. Erst danach wurden alle 100 Fragen in den
öffentlichen Katalog übernommen.

Pflichtsuite unmittelbar vor dem Commit am 27.09.2026 erneut ausgeführt: `npm run check` grün (96 Unit-Tests, 28 Content-Tests,
Architektur- und Lizenzprüfungen sowie Build), `npm run test:e2e` grün (62 Browser-Tests). `npm audit --audit-level=high` war
zuvor ohne Fund. Der Build meldet eine nicht blockierende Warnung zur Größe des gebündelten JavaScript.

Der Entwickler hat die Änderung selbst manuell getestet, am 27.09.2026 das Ergebnis positiv bestätigt und den Commit freigegeben. Lokaler Browsernachweis: Codex-In-App-Browser auf `http://127.0.0.1:4176/`; beim Thema „Agentenkontext gezielt auswählen
und neu ordnen“ wurden fünf Antworten gegeben, das Ergebnis mit Quellenlinks geprüft und die Themenliste wieder erreicht. Der
abschließende Browsercheck direkt vor dem Commit ist grün.
