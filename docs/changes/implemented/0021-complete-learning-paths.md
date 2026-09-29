## Ausstehende Lernpfade

Die Vertikale Themen wird um weitere Lernpfade erweitert. Dazu werden alle Themen aus der KI-Tool-Landkarte importiert und auf Lernpfade
verteilt. Auch Themen, die schon übernommen wurden, aber keinen Lernpfad haben, werden in einen Lernpfad aufgenommen.

- AUSNAHME: Themen, die inhatlich ganz unklar sind (nicht im KI-Umfeld nachvollziehbare Toolnamen) oder deutlich veraltete Konzepte

Refinement-Entscheidung: Auch Einträge mit der Einordnung „Test“, „Später“ und „Separat“ gehören zum Umfang. „Separat“ kann eine besondere
Zielgruppe eines Lernpfads anzeigen, „Test“ ein vertiefendes Verständnis. Fachlich eng verwandte Einträge dürfen in einer Lernkarte gebündelt
werden; die genannten Ausnahmen für unklare oder deutlich veraltete Konzepte bleiben bestehen.

Refinement-Entscheidung: Die neuen Lernpfade werden anhand unterschiedlicher Lernziele und Zielgruppen entworfen. Passende vorhandene Themen
dürfen darin wiederverwendet werden; die fünf bestehenden Lernpfade bleiben unverändert.

Refinement-Entscheidung zur Review-Karte: Der Landkarten-Eintrag zur unabhängigen Review wird in die bestehende Karte
`review-and-accept-ai-generated-changes` aufgenommen. Deren ID, Fragenpool und bisherige Pfadzuordnungen bleiben erhalten; die neue Karte
`independent-agent-review` entfällt. Der Automatisierungspfad verweist an ihrer Stelle auf die bestehende Karte. Die gemeinsame Liste
enthält damit 46 Themen, darunter 20 neue Karten. Die vorhandenen Review-Aussagen werden um die risikogerechte zweite Perspektive ergänzt.

- Die (neuen) Lernpfade sollen möglichst spezifisch sein:
    - Auf ein klar unterschiedliche Endergebnisse zielen
    - Sich an verschiedene Zielgruppen richten
    - Unterschiedliche Menschentypen und Erfahrungs-Hintergründe ansprechen
    - Für sehr unterschiedliche Projekte relevant.

Die Lernpfade können neue, aber auch schon existierende Themen verwenden.

- Die [KI-Tool-Landkarte](../../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt für neue Themen.
- Neue Themen werden mit Quellen nach den [Regeln zur Quellenauswahl](../../content/source-selection.md) und Aktualitätsmetadaten
  ausformuliert, fachlich geprüft und strukturell an die vorhandenen Inhalte angeglichen.
- Die Themen benennen Voraussetzungen, Grenzen und Gegenbeispiele.

Alle Themen erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste; gibt es Themen ohne Lernpfad, werden auch die weiterhin in
der Liste angezeigt. Alle Themen werden über alle Lernpfade hinweg nach Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die
relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen Inhalte werden passend dazwischen oder danach eingefügt. Auch die
oben Reihenfolgen der neuen Inhalte bleiben erhalten (im Fall eines Konflikts muss sich die Reihenfolge im neuen Lernpfad an den
Reihenfolgen der bisherigen Lernpfade orientieren).

Dokumentation nach Umsetzung: Den neuen Themenbestand knapp im Produktstand ergänzen.

Abgrenzung:

- Bestehend Lernpfade werden nicht verändert.
- Fragenpools gehören nicht zu dieser Story.
- Die Lern-App führt keine Coding-Agenten aus.

Vertikale: Themen

## Entscheidungen, Risiken und Abnahme

- Die 97 Tabellenzeilen der zehn Hauptabschnitte der KI-Tool-Landkarte werden einzeln auf bestehende oder neue Lernkarten abgebildet. Fachlich eng verwandte Einträge dürfen dieselbe Lernkarte stützen. Unklare Produktnamen und deutlich veraltete Konzepte werden mit Begründung ausgenommen. Die vier Einträge unter „Lernmaterial und nicht zugeordnete Notizen“ werden gesondert geprüft; die Hardware-Notiz ist kein KI-Thema.
- Die fünf bestehenden Lernpfade und ihre jeweilige Reihenfolge bleiben unverändert. Neue Pfade erhalten ein konkretes Lernergebnis und eine erkennbare Zielgruppe. Alle vorhandenen Themen ohne Pfad erhalten einen Platz in mindestens einem neuen Pfad.
- Neue Karten verwenden den bestehenden öffentlichen Themenvertrag. Es werden keine Fragenpools, Agentenausführung oder neuen Abhängigkeiten eingeführt.
- Risiko: Eine mechanische Karte je Tabellenzeile würde Doppelungen und wenig hilfreiche Mini-Themen erzeugen. Die Abbildung aller Landkarten-Einträge wird deshalb vor der Katalogänderung dokumentiert und auf fachliche Eigenständigkeit geprüft.
- Risiko: Produkt- und Workflow-Aussagen können sich rasch ändern. Jede neue Karte erhält eine geprüfte Primärquelle, Prüftag, Aktualitätsmetadaten und eine begrenzte Aussage. Die KI-Tool-Landkarte ist Rechercheausgangspunkt, nicht Beleg.
- Abnahme: Jede relevante Landkarten-Zeile ist einem bestehenden oder neuen Thema zugeordnet oder begründet ausgenommen. Die Themenliste zeigt jede ID einmal; alle Pfade referenzieren existierende IDs, die fünf vorhandenen Pfade sind identisch zum Ausgangsstand, und alle 26 bisherigen Themen behalten ihre relative Listenreihenfolge.
- Abnahme: Für jeden neuen Pfad ist die Reihenfolge in der gemeinsamen Liste monoton. Ein lokaler Browserablauf zeigt Pfadwahl, neue Themen mit Inhalt und Quellen sowie die ungruppierte Gesamtliste. Die vollständige Pflichtsuite ist grün.

| Neuer Lernpfad | Zielgruppe und Lernergebnis |
| --- | --- |
| Projektwissen für kleine Java-/Web-Teams pflegen | Teammitglieder halten Begriffe, Dokumente und Fertigkriterien nachvollziehbar. |
| Unklare Änderungswünsche in prüfbare Aufträge übersetzen | Auftraggebende und Entwickelnde klären Ziel, Grenzen und Abnahme. |
| Agentenkontext in großen Repositories steuern | Entwickelnde wählen, prüfen und verdichten Kontext für umfangreiche Codebasen. |
| Coding-Agenten und Spec-Systeme gezielt auswählen | Erfahrene Anwender vergleichen Oberflächen, Skills und Spec-Abläufe anhand eines Pilots. |
| Weboberflächen und technische Dokumentation gestalten | Frontend- und Java-Entwickelnde pflegen sichtbare Komponenten und API-Dokumentation. |
| Sicherheit und Qualität eines Webprodukts bewerten | Teams wählen passende Sicherheitsanforderungen und prüfen deren Umsetzung. |
| Wiederkehrende Entwicklungsarbeit kontrolliert automatisieren | Verantwortliche pilotieren überprüfbare Agenten- und PR-Abläufe. |
| Lokale KI-Stacks für sensible Projekte prüfen | Teams mit Betriebs- und Datenschutzanforderungen unterscheiden Modell, Harness und Plattform. |

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR und Prüfungen |
| --- | --- | --- | --- |
| Katalogerweiterung und Lernpfade, Zwischenstand | `npx vitest run tests/verticals/topics/completeLearningPaths.test.ts` rot: 26 statt 47 Themen und keine acht neuen Pfade. Die fehlenden Karten und Pfade waren der beabsichtigte fachliche Grund. | Zunächst 21 Karten mit Problem, Konzept, Java-/Web-Einsatz, Grenze, Primärquellen und Prüfdaten sowie acht Pfade ergänzt. Altpfade und relative Altreihenfolge unverändert; derselbe Test grün (2/2), Inhaltsvalidierung grün (19/19). | Verwandte Einträge gebündelt, 97 Landkarten-Zeilen zugeordnet und bestehende Zähl- und Filtertests angepasst; betroffene Themen-Suite grün (61/61). |
| Review-Karten zusammenführen | `npx vitest run tests/verticals/topics/completeLearningPaths.test.ts` rot (2/3): 47 statt 46 Themen; die bestehende Review-Karte enthielt die unabhängige zweite Perspektive noch nicht. | Die Review-Aussagen und die zusätzliche Primärquelle in `review-and-accept-ai-generated-changes` aufgenommen, `independent-agent-review` entfernt und den Automatisierungspfad angepasst; derselbe Test grün (3/3). | Die ursprünglichen fünf Pfade, die bestehende Review-ID und ihr Fragenpool bleiben erhalten. `npm run check` grün: 87 Unit-/Komponententests, Inhalts- (19/19), Architektur-, Lizenz- und Buildprüfung. `npm run test:e2e` grün: 52/52 auf Desktop- und Mobil-Chromium. |
| Abnahme, Zwischenstand vor Review-Zusammenführung | Browser-Test für den neuen Projektwissen-Pfad und die OKF-Karte ergänzt. | `npm run check` grün: 86 Unit-/Komponententests, Inhalts-, Architektur-, Lizenz- und Buildprüfung. `npm run test:e2e` grün: 52/52 auf Desktop- und Mobil-Chromium. `npm audit --audit-level=high`: 0 Schwachstellen. | Lokaler Sichtcheck: Codex In-app-Browser auf `http://127.0.0.1:4176/`, Fachsprache-Filter gewählt, sieben Themen im Projektwissen-Pfad gesehen und OKF-Karte mit Inhalt, Metadaten und Primärquelle geöffnet. Der abschließende Sichtcheck und die Nutzerbestätigung sind nachfolgend dokumentiert. |

Abschluss am 27.09.2026: Unmittelbar vor dem Commit waren `npm run check` (87/87 Unit- und Komponententests, 19/19 Inhaltsprüfungen, Architektur-, Lizenz- und Buildprüfung), `npm run test:e2e` (52/52 auf Desktop- und Mobil-Chromium) sowie `npm audit --audit-level=high` (0 Schwachstellen) grün. Im Codex In-app-Browser auf `http://127.0.0.1:4176/` wurde die zusammengeführte Review-Karte geöffnet: Text zur unabhängigen zweiten Perspektive und beide Primärquellen waren sichtbar. Über ihren Pfadfilter wurde „Wiederkehrende Entwicklungsarbeit kontrolliert automatisieren“ gewählt; der Pfad zeigte sieben Themen und die bestehende Review-Karte genau einmal. Der Nutzer hat den Stand selbst manuell getestet, das Ergebnis positiv bestätigt und den Commit freigegeben.

## Quellenprüfung

### Abbildung der KI-Tool-Landkarte

Die Positionen zählen die Tabellenzeilen jedes nummerierten Abschnitts von oben ab 1. Ein Kürzel steht für eine bestehende (E) oder neue (N) Karte; `–` bezeichnet die unten begründete Ausnahme. Mehrere Zeilen dürfen denselben fachlichen Schwerpunkt tragen.

| Kürzel | Themen-ID |
| --- | --- |
| E1–E8 | `human-ai-responsibility`; `problem-understanding-and-change-boundaries`; `module-boundaries-and-public-interfaces`; `code-navigation-with-symbols-and-references`; `spec-driven-development-openspec`; `focused-git-commits`; `git-worktrees-for-isolated-changes`; `agents-md` |
| E9–E16 | `ears-requirements`; `research-plan-tasks`; `versioned-library-docs-with-context7`; `specialized-subagents-and-ownership`; `deterministic-agent-verification-gates`; `tdd-for-domain-behavior`; `playwright-for-web-flows`; `archunit-for-java-architecture` |
| E17–E24 | `java-spring-migrations-with-openrewrite`; `dependency-security-assessment`; `web-xss-and-safe-dom`; `coding-agent-context-and-trust-boundaries`; `agent-tool-and-mcp-permissions`; `review-and-accept-ai-generated-changes`; `parallel-agent-task-boundaries`; `compare-parallel-and-serial-agent-work` |
| N1–N7 | `domain-language-and-complexity`; `project-documentation-and-checklists`; `open-knowledge-format`; `goal-discovery-and-stop-criteria`; `design-and-legacy-specification`; `standards-and-constraint-rationale`; `llm-fallibility-and-counterchecks` |
| N8–N13 | `context-selection-and-reset`; `codebase-memory-for-large-repos`; `token-efficiency-tools`; `coding-agent-interface-selection`; `agent-skills-and-commands`; `spec-framework-selection` |
| N14–N20 | `automation-value-and-gates`; `web-security-baseline`; `ui-design-system-workflow`; `technical-documentation-generation`; `bug-triage-and-pr-automation`; `local-model-stack-evaluation`; `coding-harness-design` |

| Abschnitt | Zuordnung der Zeilen in Originalreihenfolge |
| --- | --- |
| 1 (9) | E1, E2, E3, N1, N1, E2, E4, N7, E5 |
| 2 (10) | E6, E7, E8, N2, N2, N2, N2, N3, N2, – |
| 3 (13) | N4, N4, N4, E9, N6, E10, N5, N2, N5, N6, N20, E10, N7 |
| 4 (10) | N8, N8, N8, N8, N8, E11, N9, E4, N10, N10 |
| 5 (10) | N11, N11, N11, N11, N12, N12, N12, N16, N15, N12 |
| 6 (12) | E5, E5, N13, N13, N13, N13, N13, N5, –, –, E1, N13 |
| 7 (8) | E12, E7, E22, E13, N20, E1, N14, E22 |
| 8 (16) | E14, E15, E16, E17, N17, E3, N16, N16, E18, E18, N15, E19, N15, E20, E21, E18 |
| 9 (3) | N18, E22, N18 |
| 10 (6) | N19, N19, N19, N20, N20, – |

Ausnahmen: `SGL.md`, „RPI → QRISPI“, „Trajectory Development / Trajectory Engineer“ und „xpres AI“ sind in der Landkarte selbst nicht eindeutig auflösbar. „OpenWiki / LLM-Wiki“ wird als allgemeine Wissensbasis über N2 eingeordnet, ohne einen unklaren Produktnamen als gesicherte Technik darzustellen. Die eingefrorene Variante Caveman Code wird in N10 nur als historische Grenze erwähnt; aktueller Gegenstand sind RTK und Caveman. Die vier zusätzlichen Notizen: „AI Engineering from Scratch“ ist ein Lernmaterialhinweis in N4; Simon Brown/Peter Naur/Karpathy sind ergänzende Denkmodelle zu E2/N1, kein Tool; die Java-Tool-Frage ist bereits Gegenstand der Einordnung; die Hardware-Notiz liegt außerhalb des KI-Themas.

Die Zuordnung wurde vor dem Coding ergänzt und nach der Zusammenführung der Review-Karten aktualisiert: Die beiden ursprünglichen N14-Zuordnungen tragen jetzt E22; die übrigen N-Kürzel ab N14 wurden um eins verschoben. Die ursprünglichen Backlog-Verweise auf [KI-Tool-Landkarte](../../content/ki-tool-landkarte.md) und [Quellenregeln](../../content/source-selection.md) gelten auch für diese Spec. Für bereits vorhandene Themen bleiben Quellen und Aussagen unberührt, mit Ausnahme der ausdrücklich zusammengeführten Review-Karte E22. Als erste Primärquellen wurden am 27.09.2026 die Projektseiten von [OpenSpec](https://openspec.dev/), [GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md), [Context7](https://github.com/upstash/context7) und [OpenRewrite](https://docs.openrewrite.org/) auf Erreichbarkeit und Selbstdarstellung geprüft. Ihre Produktbeschreibungen belegen keine allgemeine Eignung für jedes Projekt.

### Quellenbefunde für neue Themen, geprüft am 27.09.2026

| Bereich | Primärquelle und getragene Aussage | Grenze |
| --- | --- | --- |
| Fachsprache und Modell | [DDD Reference von Eric Evans](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf): gemeinsame Sprache innerhalb eines abgegrenzten Modells. | Belegt keine feste Obergrenze für Modulgröße oder Anzahl von Begriffen. |
| Dokumentationsarten | [Diátaxis](https://diataxis.fr/): Tutorials, Anleitungen, Referenz und Erklärung erfüllen unterschiedliche Zwecke. | Kein vorgeschriebenes Repository-Layout. |
| Fertigkriterien | [Scrum Guide](https://scrumguides.org/scrum-guide.html): Definition of Done macht Qualitätsmaßstäbe explizit. | Scrum ist für die App kein verpflichtender Prozess. |
| Wissensformat | [Open Knowledge Format](https://github.com/GoogleCloudPlatform/open-knowledge-format): Markdown-Bündel mit Metadaten und Herkunft. | Die Landkarte verlinkt noch die inzwischen eingefrorene Kopie im Knowledge-Catalog-Repository. |
| Aufträge und Planung | [GitHub Copilot Aufgabenpraxis](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results): Problem, Abnahme und Änderungsgrenze verbessern die Übergabe. | Die konkrete Copilot-Oberfläche ist kein allgemeiner Standard. |
| Legacy-Spezifikation | [Fowler: From Black Box to Blueprint](https://martinfowler.com/articles/black-box-to-blueprint.html): eine bestehende Anwendung kann durch gezielte Beobachtung und Gegenprüfung beschrieben werden. | Ein erzeugter Text allein beweist keine vollständige Verhaltensabdeckung. |
| Sicherheitsstandards | [OWASP ASVS](https://owasp.org/projects/asvs): prüfbare Anforderungen für Websicherheit. | Projektrisiko und Zielversion bestimmen die relevante Auswahl. |
| Modellfehler | [NIST GAI Profile](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=958388): Modelle können überzeugend falsche Inhalte erzeugen. | Gegenprüfung vermindert Fehler, garantiert keine Richtigkeit. |
| Codex-Kontext | [OpenAI Codex Remote Guide](https://developers.openai.com/blog/mastering-codex-remote-for-engineering): abgegrenzte Arbeitsumgebung, Status, Kompaktierung und Forks. | UI-Befehle und Verfügbarkeit sind produktspezifisch. |
| Codegraph | [Codebase Memory MCP](https://github.com/DeusData/codebase-memory-mcp): Graphindex für strukturelle Codefragen. | Leistungsangaben des Herstellers sind keine Zusage für ein konkretes Repository. |
| Tokenwerkzeuge | [RTK](https://github.com/rtk-ai/rtk) und [Caveman](https://github.com/JuliusBrussee/caveman): Ausgabe- beziehungsweise Kontextverdichtung. | Die ältere Variante [Caveman Code](https://github.com/JuliusBrussee/caveman-code) ist eingefroren; Einsparungen sind abhängig vom Ablauf. |
| Skills | [OpenAI Skills](https://developers.openai.com/plugins/concepts/skills): wiederverwendbare Anleitungen mit Ressourcen; Werkzeuge bleiben separat. | Fremde Skills vor Nutzung auf Rechte und Herkunft prüfen. |
| Spec-Systeme | [OpenSpec](https://openspec.dev/), [Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md) und [Kiro](https://kiro.dev/docs/getting-started/first-project/): verschiedene Artefakt- und Ablaufmodelle. | Keines dieser Systeme ist ohne konkreten Bedarf Pflicht. |
| Review und Agentensicherheit | [GitHub Review](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) und [OpenAI Agent Safety](https://developers.openai.com/api/docs/guides/agent-builder-safety): KI-Ausgaben, fremde Eingaben und Werkzeugaktionen brauchen unabhängige Prüfgrenzen. | Die Agent-Builder-Seite beschreibt ein auslaufendes Produkt; die allgemeinen Risiken bleiben relevant. |
| Websicherheit | [OWASP Top 10:2025](https://top10.owasp.org/2025/) und [OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/): unterschiedliche Risikokataloge. | Top-10-Listen ersetzen keine konkreten, testbaren Sicherheitsanforderungen. |
| UI-System | [Storybook](https://storybook.js.org/docs/writing-docs) und [Penpot](https://help.penpot.app/user-guide/design-systems/components/): implementierte Komponenten und Entwurfskomponenten. | Ein Design-System lohnt sich nur bei wiederkehrendem UI-Bedarf. |
| Java-Dokumentation | [Oracle Javadoc Guide](https://docs.oracle.com/en/java/javase/26/javadoc/javadoc-guide.pdf): Doclets verarbeiten Java-Dokumentationskommentare. | Markdown-PDF-Konvertierung ist ein anderer Workflow. |
| PR-Automatisierung | [GitHub Copilot Aufgabenpraxis](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results): Research, Branch, Review und PR können getrennte Schritte sein. | Produktivsysteme und Unternehmensdaten brauchen eigene Freigaben. |
| Alternative Stacks | [Qwen](https://github.com/QwenLM/Qwen3), [Hermes Agent](https://github.com/NousResearch/hermes-agent) und [Bionic](https://github.com/bionic-gpt/bionic-gpt): Modellfamilie, Agenten-Harness und selbst hostbare Plattform erfüllen verschiedene Rollen. | Aus Selbstdarstellungen folgen weder Eignung für Unternehmensdaten noch niedrige Betriebskosten. |
| Harness und Rechte | [OpenAI Sandbox Security](https://developers.openai.com/api/docs/guides/agents-api/environments/security): Ausführungsumgebung, Netzwerk und Zugangsdaten sind technische Grenzen. | Die API-Umgebung ist nicht identisch mit allen Coding-Agenten. |
