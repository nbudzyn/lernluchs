# Lernchecks für die ersten 4 Themen ohne Fragen

Die 4 ersten Themen ohne Fragen (Reihenfolge der Themenliste) erhalten ebenfalls nutzbare, quellengebundene Lernchecks.Bereits vorhandene
Fragenpools bleiben unverändert.

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Refinement: Wenn vorhandene Themenquellen für 25 fachlich unterschiedliche Fragen nicht ausreichen, werden gezielt geprüfte Primärquellen ergänzt. Fragen und neue Quellen bleiben beim Schwerpunkt ihres jeweiligen Themas und vermeiden fachliche Überschneidungen mit anderen Themen.

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

## Ziel und Nicht-Ziele

In Listenreihenfolge erhalten `parallel-agent-task-boundaries`, `git-worktrees-for-isolated-changes`, `code-navigation-with-symbols-and-references` und `versioned-library-docs-with-context7` je einen nutzbaren Pool mit mindestens 25 unterschiedlichen Fragen. Die Lerncheck-Oberfläche und bestehende Pools bleiben unverändert. Die Fragen bleiben jeweils beim Themenfokus; insbesondere prüfen Worktree-Fragen keine allgemeine Agentenkoordination und Context7-Fragen keine allgemeine Code-Navigation.

## Entscheidungen und Risiken

- Neue Primärquellen dürfen ergänzt werden, wenn die bestehenden Quellen für fachlich unterschiedliche Fragen nicht ausreichen. Die Quellenregeln und die redaktionelle Richtlinie gelten auch dafür.
- Die unabhängige externe KI-Prüfung erfolgt mit einem kopierbaren Prompt über alle vier vollständigen Pools. Der Nutzer führt sie aus und liefert beanstandete Fragen-IDs zurück. Beanstandete Fragen werden vor der Integration korrigiert oder ersetzt und erneut geprüft.
- Risiko: Ähnlich formulierte Fragen oder mehrere vertretbare Antworten können den Mindestbestand nur scheinbar erfüllen. Jede Frage wird fachlich gegen die Originalquelle geprüft; die unabhängige Prüfung ist zusätzliche Abnahme.
- Risiko: Produkt- und Werkzeugdokumentation ändert sich. Versions- und Bedienungsdetails werden nur gefragt, wenn die konkrete Originalquelle sie trägt.
- Keine neue Abhängigkeit vorgesehen.

## Prüfbarkeit und Abnahme

- Ein Test ermittelt die ersten vier Themen ohne Lerncheck aus der tatsächlichen Themenreihenfolge und prüft die oben genannten IDs.
- Jeder neue Pool hat mindestens 25 eindeutige Fragen-IDs und fachlich unterschiedliche Prompts, genau eine richtige von drei bis fünf Antworten, Erklärungen und gültige Themenquellen.
- Bestehende Pools und der bestehende Fragenablauf bleiben erhalten. Ein exemplarischer Browser-Test startet einen der neuen Lernchecks, beantwortet ihn und prüft die Ergebnisansicht mit Erklärungen und bewusst öffnenden Quellenlinks.
- Die vollständig verpflichtenden Prüfungen und ein lokaler Browserablauf werden nach der letzten Inhaltsänderung dokumentiert. Die eigene manuelle Prüfung des Nutzers und ausdrückliche Bestätigung sind Voraussetzung für Archivierung und Commit.

## Quellenübersicht vor dem Coding

Prüftag: 28.09.2026. Die Originalseiten wurden geöffnet; konkrete Fragen werden vor der Integration einzeln dagegen geprüft.

| Thema und Aussagebereich | Primärquelle | Grenze oder Unsicherheit |
| --- | --- | --- |
| Parallele Agenten: Aufgabenteilung, Koordinationsaufwand und Eignung | [OpenAI: Practical guide](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/), [Anthropic: Multi-agent research](https://www.anthropic.com/engineering/multi-agent-research-system) | Anthropic beschreibt ein Recherchesystem; dessen Zahlen sind nicht auf Coding-Aufgaben übertragbar. Konkrete Dateibesitz- und Abbruchregeln sind Projektentscheidungen, keine pauschalen Produktfunktionen. |
| Git-Worktrees: Verknüpfung, Branches, Verwaltung und Grenzen | [Git: git-worktree](https://git-scm.com/docs/git-worktree) | Das Handbuch beschreibt Git-Isolation, keine Isolation externer Dienste. |
| Code-Navigation: Definition, Implementierung, Referenzen und Suchbereich | [VS Code: Code Navigation](https://code.visualstudio.com/docs/editing/editingevolved), [IntelliJ IDEA: Search for usages](https://www.jetbrains.com/help/idea/find-highlight-usages.html) | Funktionen hängen von Sprache, Index und Werkzeug ab; dynamische Aufrufe werden nicht als vollständig auffindbar behauptet. |
| Context7: Bibliotheks-ID, Versionswahl, Such- und Kontextabfrage | [Upstash: Context7](https://github.com/upstash/context7), [Upstash: API Guide](https://github.com/upstash/context7/blob/master/docs/api-guide.mdx), [Spring Boot 3.5 Referenz](https://docs.spring.io/spring-boot/3.5/reference/index.html) | Context7-Treffer werden mit Originaldokumentation abgeglichen; Versionsnennung allein garantiert keine passende Passage. |

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR und weitere Prüfungen |
| --- | --- | --- | --- |
| Vier Themenpools und Kataloganbindung | `npm test -- --run tests/verticals/learning-checks/newFourQuestionPools.test.ts` am 28.09.2026: 5 fachlich erwartete Fehler, weil die vier Pools im Katalog fehlen. | Vier unabhängig geprüfte Pools mit je 25 Fragen eingebunden. Die gezielte Suite aus Katalog- und Pooltests ist grün: 33 Tests. | Überholte globale Poolzählungen auf 35 aktualisiert; `npm run check` danach grün. |
| Exemplarischer Browserablauf | `npx playwright test e2e/verticals/learning-checks/new-four-learning-checks.spec.ts --project=desktop-chromium` am 28.09.2026: erwarteter Timeout, weil der Startknopf für das neue Thema ohne Kataloganbindung fehlt. | Der neue Lerncheck besteht den Browserablauf auf Desktop und Mobil; Ergebnis enthält fünf Antworten, Erklärungen und Quellenlinks. | Die bisherige Annahme „ohne neue Checks“ im Lernpfad-Browsertest angepasst; `npm run test:e2e` danach grün: 66 Tests. |

Unabhängige fachliche Prüfung: Der Nutzer ließ alle 100 Fragen anhand des vollständigen Prüfprompts extern prüfen und meldete allein CN18: Die bisherige Begründung behauptete einen variablen Suchbereich, den die VS-Code-Quelle für `Rename Symbol` nicht belegt. CN18 wurde auf die dort ausdrücklich genannte Sprachunterstützung umformuliert. Der Nutzer ließ diese Korrektur erneut extern prüfen und meldete keine weiteren Beanstandungen.

Die vorhandenen Primärquellen tragen die Entwürfe; eine neue Themenquelle war nicht nötig. Die eigene Prüfung hat insbesondere Aussagen ohne direkten Quellenbezug durch belegte Git- und IDE-Funktionen ersetzt. Der vollständige externe Prüfprompt wurde aus den Fragenentwürfen erzeugt und dem Nutzer zum unabhängigen Prüfen bereitgestellt.

Pflichtsuite am 28.09.2026 nach der letzten Code-, Test- und Inhaltsänderung: `npm run check` grün (19 Testdateien, 121 Unit-/Komponententests, 35 Inhaltsprüfungen, Architektur- und Lizenzprüfung, Produktionsbuild); `npm run test:e2e` grün (66 Desktop-/Mobiltests); `npm audit --audit-level=high` meldete 0 Schwachstellen. Keine neue Abhängigkeit.

Lokaler Browsernachweis am 28.09.2026: Codex In-app-Browser unter `http://127.0.0.1:5174/`. Lerncheck „Aufgaben und Abbruchkriterien für parallele Agenten festlegen“ aus der Themenliste gestartet, fünf Antworten eingegeben und in der Ergebnisübersicht die fünf Fragen, richtige und gewählte Antworten, Erklärungen sowie bewusst zu öffnende Quellenlinks gesehen. Der Durchlauf war nicht bestanden; es wurde kein neuer Lernstand bestätigt.

Browsercheck unmittelbar vor dem Commit am 28.09.2026: Codex In-app-Browser unter `http://127.0.0.1:5174/`. Den Lerncheck „Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen“ aus der Themenliste gestartet, alle fünf Fragen beantwortet und die bestandene Ergebnisansicht mit Erklärungen und Quellenlinks geprüft.

Manuelle Prüfung des Nutzers: Der Nutzer hat die Änderung selbst getestet, am 28.09.2026 das Ergebnis positiv bestätigt und den Commit freigegeben.
