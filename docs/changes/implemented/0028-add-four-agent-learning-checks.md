## Lernchecks für weitere 4 Themen ohne Fragen

Die jetzt ersten 4 Themen ohne Fragen (in Reihenfolge der Themenliste) erhalten ebenfalls nutzbare, quellengebundene Lernchecks. Bereits
vorhandene Fragenpools bleiben unverändert.

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

Refinement: Am 28.09.2026 wurden die ersten vier Themen ohne Fragen in Listenreihenfolge bestätigt:
`specialized-subagents-and-ownership`, `agent-context-handoffs`, `agent-tool-and-mcp-permissions` und
`deterministic-agent-verification-gates`. Für jeden Pool gelten mindestens 25 Fragen aus den jeweiligen Themenquellen.
Die unabhängige KI-Prüfung führt der Entwickler mit einem von der KI vorbereiteten Prompt aus und gibt das Ergebnis zurück.

## Ziel und Nicht-Ziele

Vier bestehende Themen erhalten je einen Lerncheck-Fragenpool. Die vorhandene Oberfläche und der Fragenablauf verwenden diese Pools über
die bestehenden öffentlichen Verträge. Bestehende Themen, Quellen und Fragenpools werden nur geändert, wenn die Quellenprüfung einen
konkreten fachlichen Fehler zeigt; jede solche Änderung wird hier begründet. Neue Abhängigkeiten sind nicht vorgesehen.

## Entscheidungen und Risiken

- Die vier oben genannten IDs sind die ersten vier fehlenden Pools der Themenliste vom 28.09.2026; danach bleiben drei Themen ohne Fragen.
- Jede neue Frage besitzt drei bis fünf plausible Optionen, genau eine richtige Antwort sowie eine Erklärung und einen gültigen
  Quellenbezug je Option. Ein Pool gilt erst nach unabhängiger fachlicher Prüfung mit mindestens 25 gültigen Fragen als abgenommen.
- Die fachliche Prüfung und die unabhängige KI-Prüfung folgen den [Fragenregeln](../../content/question-authoring.md), den
  [Quellenregeln](../../content/source-selection.md) und der [redaktionellen Richtlinie](../../content/editorial-policy.md).
- Neue Pools können sich fachlich überschneiden, besonders bei Rollen, Übergaben und Berechtigungen. Jede Frage bleibt beim Schwerpunkt
  ihres Themas. Mehrdeutige Lösungen, schwache Falschantworten und nicht tragende Quellen werden vor Integration korrigiert oder verworfen.
- Die externen Dokumentationen können sich ändern. Der Prüftag und die Aussagegrenzen werden vor dem Coding in der Quellenübersicht
  dokumentiert.

## Prüffähige Abnahme

1. Genau die vier bestätigten Themen erhalten je mindestens 25 fachlich unterschiedliche, quellengebundene Fragen; bisherige Pools bleiben
   unverändert. Die übrigen drei Themen ohne Fragen bleiben unverändert.
2. Katalogvalidierung prüft IDs, eine richtige Option, drei bis fünf Optionen, vollständige Erklärungen und Quellenbezüge.
3. Ein exemplarischer Browserablauf zeigt den Lerncheck eines neuen Themas mit Antwort, Erklärung und Quellenlink; Desktop- und
   Mobiltests decken die Bedienung ab.
4. Nach unabhängiger KI-Prüfung sind beanstandete Fragen geklärt, korrigiert oder entfernt; korrigierte Fragen werden erneut geprüft.
5. Pflichtsuite, lokaler Browsercheck und manuelle Prüfung durch den Entwickler sind nachgewiesen.

## Quellenübersicht vor dem Coding

Originalseiten am 28.09.2026 auf Erreichbarkeit und Aussagegehalt geprüft. Die Themenquellen bleiben bestehen; neue Quellen sind derzeit
nicht nötig.

| Thema | Primärquellen und getragene Aussagen | Grenze |
| --- | --- | --- |
| Spezialisierte Subagents | [GitHub Docs: Custom agents](https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents) beschreibt Rollen, getrennte Kontexte, Werkzeugmengen, Delegation und Rückgabe an die Hauptsitzung. [Anthropic: Multi-agent research](https://www.anthropic.com/engineering/multi-agent-research-system) erläutert begrenzte Teilaufträge, Ausgabeformate, Koordinationskosten und Eignung für parallele Recherche. | Anthropics Zahlen und Ablauf sind Erfahrungswerte des eigenen Research-Systems, keine allgemeine Leistungsgarantie. Dateibesitz ist eine Projektregel und nicht allein durch Rollenprompts erzwungen. |
| Kontextübergabe | [OpenAI Agents SDK: Handoffs](https://openai.github.io/openai-agents-python/handoffs/) erklärt Handoff-Ziel, Eingabeschema, Filter und Steuerübergabe. [OpenAI: Practical guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) unterscheidet Manager- und dezentrale Übergabe. | Konkrete SDK-Optionen gelten für dieses SDK. Angaben zu Dateipfaden, Tests und Übernahmebestätigung sind als bewährte Anwendung auf Entwicklungsaufgaben zu kennzeichnen, nicht als SDK-Pflicht. |
| Werkzeugrechte und MCP | [GitHub Docs: Custom agents configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration) belegt Werkzeuglisten, MCP-Namensräume, Standardzugriff und leere Listen. [OpenAI: Sandbox security](https://developers.openai.com/api/docs/guides/agents-api/environments/security) belegt Isolation, Netzwerkbegrenzung und getrennte Zugangsdaten für Agents API. | GitHub-Einstellungen sind produkt- und teils umgebungsspezifisch; OpenAIs Sandbox-Hinweise gelten für Agents API. Keine universelle Behauptung über jede MCP-Implementierung. |
| Deterministische Prüf-Gates | [GitHub Docs: Status checks](https://docs.github.com/en/pull-requests/reference/status-checks) belegt Pflichtchecks, Status und den Sonderfall übersprungener Jobs. [OpenAI: Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals) erläutert Traces, Grader, Datensätze und wiederholbare Eval-Läufe. | CI-Checks und modellbasierte Evals haben verschiedene Aufgaben. Ein grüner oder übersprungener Check beweist keine fachliche Korrektheit. |

Bewusst ausgelassen: versionsabhängige Produktbefehle, feste Effizienzversprechen und Sicherheitsgarantien. Die Fragen werden gegen die
jeweilige Originalstelle geprüft; konkurrierende Produkte werden nicht als für diese vier Themen entscheidende Alternative behauptet.

Quellenänderung: Die bisherige OpenAI-Seite „Safety in building agents“ beschreibt den auslaufenden Agent Builder (geplante Abschaltung
30.11.2026). Für das Thema Werkzeugrechte wurde sie am 28.09.2026 durch die aktuelle primäre Agents-API-Seite „Sandbox security“ ersetzt.
GitHub Docs wurde am selben Tag erneut geprüft. Der Thementext blieb sachlich passend; nur die Quelle und Prüfmetadaten wurden angepasst.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Subagent-Aufgabenbesitz | `npx vitest run tests/verticals/learning-checks/agentQuestionPools.test.ts -t specialized-subagents-and-ownership`: fehlgeschlagen, weil `questionsForTopic` für die bestätigte ID noch `undefined` lieferte. | 25 Fragen ergänzt und angebunden; derselbe gezielte Test grün (1 bestanden). | Fragekonstruktion in einen internen Helfer ausgelagert, formatiert; gezielter Test erneut grün (1 bestanden). |
| Kontextübergabe | `npx vitest run tests/verticals/learning-checks/agentQuestionPools.test.ts -t agent-context-handoffs`: fehlgeschlagen, weil für die ID noch kein Pool vorhanden war. | 25 Fragen ergänzt; der gezielte Test deckte zunächst einen unzulässigen absoluten Distraktor auf, der korrigiert wurde. Danach grün (1 bestanden). | Pool formatiert und gezielten Test erneut grün ausgeführt (1 bestanden). |
| Werkzeugrechte und MCP | Gezielter Pooltest `-t agent-tool-and-mcp-permissions` fehlgeschlagen: noch kein Pool. Ein zusätzlicher Test für die aktuelle Sicherheitsquelle `-t "current sandbox-security"` schlug wegen der bisherigen Agent-Builder-Quelle fehl. | Auslaufende Quelle durch Agents-API-Sandboxquelle ersetzt; Quellentest grün. 25 Fragen ergänzt; der Pooltest fand vier absolute Distraktoren, die korrigiert wurden. Danach grün (1 bestanden). | Quelle und Pool formatiert; gezielter Pooltest erneut grün (1 bestanden). |
| Deterministische Prüf-Gates | `npx vitest run tests/verticals/learning-checks/agentQuestionPools.test.ts -t deterministic-agent-verification-gates`: fehlgeschlagen, weil der Pool noch fehlte. | 25 Fragen ergänzt. Der erste Lauf fand einen Syntaxfehler, der nächste einen absoluten Distraktor; nach Korrektur war der gezielte Test grün (1 bestanden). | Eine zu breite Frage auf einen konkreten GitHub-Checkstatus eingegrenzt, Pool formatiert und gezielten Test erneut grün ausgeführt (1 bestanden). |
| Redaktionelle Korrektur nach unabhängiger Prüfung | Vier neue Assertions für `subagent-ownership-19`, `subagent-ownership-23`, `agent-handoff-22` und `agent-verification-04` ergänzt. `npx vitest run tests/verticals/learning-checks/agentQuestionPools.test.ts -t 'reviewed distinct concept'`: 4 erwartete Fehlschläge, weil die beanstandeten Fragen noch die gedoppelten Aussagen prüften. | Die vier Fragen durch andere belegte Aspekte ersetzt: Prompt-Simulationen, Skills je Custom Agent, Name des Handoff-Werkzeugs und Herkunft eines Statuschecks. Gezielte Pooldatei danach grün (10 Tests). | Betroffene Dateien mit Prettier formatiert; `npm run check` danach grün (140 Unit- und Komponententests, 35 Inhaltsvalidierungstests). |

## Prüfung und Abnahme

- Gezielte Pool- und Katalogsuite: 43 Tests in vier Dateien grün. Die neuen vier Pools enthalten je 25 Fragen; 43 von 46 Themen haben
  damit einen Pool. Die drei späteren Themen ohne Fragen sind ausdrücklich im Test festgehalten.
- `npm run check`: grün am 28.09.2026 nach der letzten Änderung an Code und Tests; 140 Unit- und Komponententests, 35 Tests der
  Inhaltsvalidierung, Architektur- und Lizenzprüfung sowie Produktionsbuild grün. Keine neue Abhängigkeit.
- `npm run test:e2e`: 70 Browser-Tests auf Desktop- und Mobil-Chromium grün, einschließlich des exemplarischen neuen Lernchecks.
- `npm audit --audit-level=high`: 0 Schwachstellen.
- Lokaler Browsercheck am 28.09.2026: Codex In-app-Browser unter `http://127.0.0.1:4174/`; Lerncheck „Spezialisierte Subagents mit
  klarem Aufgabenbesitz einsetzen“ aus der Themenliste gestartet, fünf Fragen beantwortet, Ergebnisübersicht mit richtigen und gewählten
  Antworten, Erklärungen und HTTPS-Quellenlinks geprüft und zur Themenliste zurückgekehrt. Erfolgreich.
- Abschlusscheck unmittelbar vor dem Commit am 28.09.2026: Derselbe Lerncheck im Codex In-app-Browser erneut gestartet, fünf Fragen
  beantwortet, Ergebnisübersicht mit Erklärung und HTTPS-Quellenlinks geprüft und zur Themenliste zurückgekehrt. Erfolgreich.
- Unabhängige KI-Prüfung: Der Entwickler ließ den Prompt mit allen 100 Fragen vom 28.09.2026 prüfen. Das Ergebnis benannte vier
  fachliche Dopplungen: `subagent-ownership-03/-19`, `subagent-ownership-06/-23`, `agent-handoff-01/-22` und
  `agent-verification-03/-04`. Die jeweils zweite Frage wurde ersetzt. Ein Folgeprompt enthielt die vier Korrekturen und ihre
  unveränderten Vergleichspartner. Der Entwickler meldete für die erneute unabhängige Prüfung am 28.09.2026 keine weiteren Beanstandungen.
  Damit sind auch die vier korrigierten Fragen redaktionell geprüft; jeder neue Pool enthält weiterhin 25 Fragen.
- Der Entwickler bestätigte nach eigener manueller Prüfung am 28.09.2026 ein positives Ergebnis. Alle Abnahmekriterien sind erfüllt.
