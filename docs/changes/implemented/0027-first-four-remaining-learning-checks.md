# Lernchecks für die ersten 4 Themen ohne Fragen

Die ersten 4 Themen ohne Fragen (in Reihenfolge der Themenliste) erhalten ebenfalls nutzbare, quellengebundene Lernchecks. Bereits
vorhandene Fragenpools bleiben unverändert.

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

## Geklärte Entscheidungen und Nicht-Ziele

- Betroffen sind in Listenreihenfolge `ui-design-system-workflow`, `technical-documentation-generation`, `bug-triage-and-pr-automation` und `local-model-stack-evaluation`.
- Der Entwickler bestätigte am 28.09.2026 die bestehenden Themenschwerpunkte. Quellen und knappe Thementexte dürfen bei belegten Lücken oder veralteten Aussagen gezielt aktualisiert werden; die vier Themen sollen sich dadurch nicht stärker überschneiden.
- Vorhandene Fragenpools, Fragenablauf und Lernfortschritt bleiben unverändert. Es werden keine neuen Laufzeitabhängigkeiten benötigt.

## Risiken und prüfbare Abnahme

- Jede neue Frage hat eine stabile, einzigartige ID, genau eine richtige und insgesamt drei bis fünf plausible Antwortoptionen. Jede Option erhält eine kurze Erklärung und einen zugeordneten tragenden Quellenlink.
- Pro Pool verbleiben nach unabhängiger fachlicher Prüfung mindestens 25 fachlich unterschiedliche gültige Fragen. Der Entwickler führt die externe KI-Prüfung mit einem kopierbaren Prompt über alle vier vollständigen Pools durch; beanstandete Fragen werden entfernt oder korrigiert und erneut geprüft.
- Die Quelle trägt die konkrete Aussage. Produktdetails, die sich ändern können, werden am Original geprüft. Bei Lücken werden höchstens gezielt Quellen oder knappe Thementexte angepasst und die Themenabgrenzung kontrolliert.
- Der Katalog zeigt danach 39 verfügbare Lernchecks. Ein exemplarischer Browserablauf startet einen neuen Check, beantwortet fünf Fragen, zeigt Erklärungen und öffnet eine Quelle nur nach bewusster Aktion. Desktop- und Mobiltests decken die Nutzung ab.
- Produktstand und redaktionelle Richtlinie nennen anschließend die tatsächliche Anzahl an Themen mit Fragen.

## Quellenprüfung vor dem Coding

Prüftag: 28.09.2026. Die verlinkten Originalseiten waren erreichbar. Die folgenden Quellen sind Primärquellen für ihre jeweiligen Produkte; Produktbeschreibungen belegen deren Funktionen, aber keine allgemeine Wirksamkeits- oder Sicherheitsgarantie.

| Thema | Geprüfte Quellen und getragene Aspekte | Grenze und Entscheidung |
| --- | --- | --- |
| UI-Komponenten | [Storybook Docs](https://storybook.js.org/docs/writing-docs), [Stories](https://storybook.js.org/docs/writing-stories), [Args](https://storybook.js.org/docs/writing-stories/args), [Interaktionstests](https://storybook.js.org/docs/writing-tests/interaction-testing), [Accessibility-Tests](https://storybook.js.org/docs/writing-tests/accessibility-testing), [visuelle Tests](https://storybook.js.org/docs/writing-tests/visual-testing) und [Penpot-Komponenten](https://help.penpot.app/user-guide/design-systems/components/) sowie [Varianten](https://help.penpot.app/user-guide/design-systems/variants/) tragen Entwurfsvarianten, implementierte Zustände und ihre Prüfung. | Die vorhandenen zwei Übersichtsquellen allein tragen die Testdetails nicht. Gezielte Originalseiten werden dem Thema ergänzt. Fragen betreffen den UI-Workflow, keine allgemeine Sicherheits- oder Agentenarchitektur. Automatisierte Accessibility-Prüfung ersetzt keinen Nutzertest. |
| Java-API-Dokumentation | [Oracle JavaDoc Guide JDK 26](https://docs.oracle.com/en/java/javase/26/javadoc/javadoc-guide.pdf), [Kommentar-Spezifikation](https://docs.oracle.com/en/java/javase/26/docs/specs/javadoc/doc-comment-spec.html) und [javadoc-Befehl](https://docs.oracle.com/en/java/javase/26/docs/specs/man/javadoc.html) tragen Kommentare, Tags, Links, Snippets, Ausgabe und Prüfoptionen. | Die Guide-PDF allein verweist für Syntax und Befehle auf die beiden Spezifikationen; diese werden gezielt ergänzt. Fragen gelten ausdrücklich für JDK 26, wenn Verhalten versionsabhängig ist. Keine allgemeine Markdown-/PDF-Exportlehre. |
| Bug-Triage bis PR | [GitHub Copilot-Aufgabenleitfaden](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results), [Issue-Erstellung](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue), [Suche](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests), [Projektverbesserung](https://docs.github.com/en/copilot/tutorials/cloud-agent/improve-a-project) und [PR-Review](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request) tragen Eingrenzung, Duplikatsuche, überprüfbaren Auftrag und Review. | Der Copilot-Leitfaden allein trägt nicht jede Triage-Aussage. Gezielte GitHub-Originalseiten werden ergänzt. Fragen behandeln überprüfbare Übergänge bis zum PR, keine allgemeine Mehragentensteuerung. |
| Lokale KI-Stacks | Die Projektseiten von [Qwen3](https://github.com/QwenLM/Qwen3), [Hermes Agent](https://github.com/NousResearch/hermes-agent) und [Bionic](https://github.com/bionic-gpt/bionic-gpt) belegen Modellfamilie, Agentenlaufzeit und selbst hostbare Plattform sowie Betriebsoptionen. | Anbieterangaben belegen keine Eignung für Unternehmensdaten. Bionic beschreibt sich aktuell auch als Agenten-Harness; im Thema bleibt die Bewertung der drei Stack-Ebenen im Vordergrund, nicht der Entwurf eines eigenen Harness. Keine Benchmark- oder Rechtsbehauptung ohne weitere Quelle. |

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED | `npm test -- --run tests/verticals/learning-checks/firstFourRemainingQuestionPools.test.ts` am 28.09.2026: fünf erwartete Fehlschläge; der Katalog hat 35 statt 39 Pools, und für alle vier neuen Themen liefert die Abfrage noch keinen Pool. `npx playwright test e2e/verticals/learning-checks/first-four-remaining.spec.ts --project=desktop-chromium` scheiterte erwartungsgemäß, weil für das UI-Thema noch keine Startschaltfläche vorhanden ist. |
| GREEN | Vier geprüfte Pools mit je 25 Fragen in den öffentlichen Katalog eingebunden. `npm test -- --run tests/verticals/learning-checks/firstFourRemainingQuestionPools.test.ts tests/verticals/learning-checks/questionCatalog.test.ts tests/verticals/learning-checks/nextFourMissingQuestionPools.test.ts`: 33/33 grün. Der neue Browserfall bestand auf Desktop und Mobil mit 2/2 Tests. Die zunächst vollständige Pflichtsuite zeigte einen alten Test, der für sämtliche Themenquellen noch das Prüfdatum 27.09.2026 verlangte; nach Anpassung auf ein Datum nicht vor Themenveröffentlichung ist auch die volle Suite grün. |
| REFACTOR | Fragen bleiben in einem eigenen Poolmodul mit gemeinsamem Mapping für Optionen und Quellen. Vorhandene Fragenpools blieben unverändert. Temporäre Review-Prompts und Generator wurden nach der unabhängigen Prüfung entfernt; nur zwei fachliche Vertikalen sind geändert. |
| Unabhängige Prüfung | Der Entwickler ließ den vollständigen 100-Fragen-Prompt extern prüfen und meldete am 28.09.2026 acht Beanstandungen: UIW23 (Dopplung), UIW24/UIW25 (Quellenbezug), JAD15 (Markdown-Javadoc), BTP14/BTP23 (Dopplung), BTP24 (unbelegte Lizenzfolge), LMS06 (Qwen3-2507). Alle acht Entwürfe wurden an den Originalquellen korrigiert. Bei der eigenen Dublettenprüfung wurde außerdem LMS23 ersetzt. Die erneute externe Prüfung der neun geänderten Fragen beanstandete nur JAD15: Die Annotation `@Deprecated` ist bei Markdown-Javadoc für die Kennzeichnung erforderlich, das Tag `@deprecated` lediglich ergänzend. JAD15 wurde nach [Oracles JDK-26-Spezifikation](https://docs.oracle.com/en/java/javase/26/docs/specs/javadoc/doc-comment-spec.html) erneut korrigiert; der Entwickler meldete dafür keine weiteren Beanstandungen. |
| Pflichtsuite | `npm run check` grün: 130/130 Unit- und Komponententests, 35/35 Inhaltsprüfungen, Architektur- und Lizenzprüfung, Produktionsbuild. `npm run test:e2e` grün: 68/68 Desktop- und Mobiltests. `npm audit --audit-level=high`: 0 Schwachstellen. |
| Lokaler Browsercheck | Codex In-App-Browser mit Chromium unter `http://127.0.0.1:4174/`: Das neue Thema „UI-Komponenten entwerfen und sichtbar prüfen“ zeigte eine Startschaltfläche und kuratierte Quellen; fünf Fragen ließen sich beantworten. Die Ergebnisansicht zeigte korrekte und gewählte Antworten mit Erklärungen und Quellenlinks; „Zur Themenliste“ führte zurück. Unmittelbar vor dem Commit wurde auch „Java-API-Dokumentation gezielt erzeugen“ lokal gestartet: fünf Antworten führten zur Ergebnisansicht mit Erklärungen und Quellenlinks; die Rückkehr zur Themenliste funktionierte. |
| Manuelle Abnahme durch Entwickler | Der Entwickler bestätigte nach eigenem Test am 28.09.2026 das Ergebnis und gab den Commit frei. |
