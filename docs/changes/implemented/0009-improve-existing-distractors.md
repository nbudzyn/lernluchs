# Bessere Falschantworten in allen vorhandenen Lernchecks

## Ziel und Umfang

Alle Falschantworten der derzeit sechs Fragenpools mit insgesamt 150 Fragen werden nach dem Verfahren in
[Regeln für Auswahlfragen](../../content/question-authoring.md) durch plausible, eindeutig falsche Distraktoren ersetzt. Pro Frage
bleiben genau eine richtige Antwort und insgesamt drei bis fünf plausible Optionen; die Zahl wird nicht mit schwachen
Fülloptionen erreicht. Auch allgemein sinnvolle Aussagen dürfen nur als Distraktoren dienen, wenn sie die konkrete Frage
eindeutig nicht beantworten. Jeder Distraktor erhält eine kurze Erklärung seines Ausschlussgrundes und einen passenden
Quellenbezug.

Die vorhandenen Fragen und richtigen Antworten bleiben im fachlichen Kern erhalten und dürfen für Eindeutigkeit und
Verständlichkeit umformuliert werden. Eine Frage darf durch Angaben zu Akteur, Zeitpunkt, Einsatzsituation oder gesuchter
Ursache präzisiert werden, nicht durch einen Verweis auf ein bestimmtes Dokument, Kapitel oder dessen Formulierung. Die
Frage darf die richtige Antwort nicht sprachlich verraten. Bleibt sie mit den vorhandenen Kartenquellen und im Kern
gleicher Antwort mehrdeutig, wird sie durch eine neue, quellengebundene Frage zur selben Karte ersetzt. Für überarbeitete
Fragen bleiben die IDs stabil; echte Ersatzfragen erhalten neue IDs. Nach der Prüfung bleiben je Pool mindestens 25
fachlich unterschiedliche, gültige Fragen.

Jede Frage samt richtiger Antwort, allen Distraktoren, Erklärungen und Quellenbezügen wird gegen die Originalquellen
geprüft. Für alle betroffenen Pools wird anschließend der in den Fragenregeln vorgesehene kopierbare Prüf-Prompt erstellt;
der Nutzer führt die unabhängige externe KI-Prüfung aus. Beanstandungen werden vor der Integration geklärt oder durch
erneut geprüfte Fragen ersetzt. Die Validierung umfasst insbesondere eindeutige IDs, genau eine richtige Antwort, drei
bis fünf Optionen und vollständige Erklärungen und Quellenbezüge.

Abgrenzung:

- Lernkartentexte und die den Karten zugeordneten Quellen bleiben unverändert. Fragen, Antwortoptionen, Erklärungen und
  Verweise auf die bestehenden Quellen dürfen angepasst werden.
- Für Karten ohne bestehenden Fragenpool werden keine Fragen erzeugt.

Vertikalen: Inhaltskatalog, Lernchecks

## Risiken und Abnahme

- **Mehrdeutige Antworten:** Jede überarbeitete oder ersetzte Frage wird gegen die Originalquellen darauf geprüft, dass genau eine
  Option die präzisierte Frage beantwortet. Fachlich naheliegende, aber ebenfalls richtige Alternativen werden verworfen.
- **Schwache Distraktoren:** Zu jeder falschen Option sind ein eigener vermuteter Denkfehler, der Ausschlussgrund und der tragende
  Quellenbezug nachvollziehbar. Optionen werden auf sprachliche Hinweise und doppelte Fehlvorstellungen geprüft.
- **Bestand und Grenzen:** Die sechs bestehenden Pools behalten nach der unabhängigen Prüfung jeweils mindestens 25 fachlich
  unterschiedliche Fragen. IDs überarbeiteter Fragen bleiben stabil; Ersatzfragen erhalten neue eindeutige IDs. Lernkartentexte
  und die zugeordneten Quellen bleiben unverändert; Karten ohne Fragenpool bleiben ohne Fragenpool.
- **Vertikalgrenze:** Der Fragenbestand liegt technisch im Inhaltskatalog und wird von Lernchecks angezeigt. Änderungen bleiben
  auf diese beiden Vertikalen beschränkt; eine Neugestaltung des Fragenablaufs gehört nicht zu dieser Story.
- **Unabhängige Prüfung:** Der vollständige Bestand aller betroffenen Pools wird mit IDs, Optionen, Lösungen, Erklärungen und
  Quellen-URLs zur externen KI-Prüfung bereitgestellt. Beanstandete Fragen werden korrigiert oder ersetzt und danach erneut
  unabhängig geprüft.
- **Technische und sichtbare Abnahme:** Katalogvalidierung und Pflichtsuite sind grün. Im lokalen Browser werden Fragen mit drei
  bis fünf Optionen sowie die zugehörigen Erklärungen und Quellenlinks geprüft. Der Nachweis steht vor einem Commit in dieser Spec.

## Umsetzung und Nachweise

Prüftag der Originalquellen: **27.09.2026**. Die sechs verlinkten Quellenbestände waren erreichbar. Die vorhandenen
Kartenquellen und Lernkartentexte blieben unverändert; es wurden keine neuen Quellen oder Abhängigkeiten aufgenommen.
Alle 150 Fragen behielten ihre IDs und richtigen Antworten. Der Vergleich mit dem Ausgangsbestand ergab **300 ersetzte
Distraktoren** und weiterhin genau 25 Fragen je Pool. Nicht belegte zusätzliche Fachbehauptungen wurden bewusst nicht
aufgenommen. Die Quellen-URLs der Antwortoptionen blieben gegenüber dem Ausgangsbestand gleich.

| Pool | Originalquellen und fachliche Prüfung | RED → GREEN → REFACTOR |
| --- | --- | --- |
| `human-ai-responsibility` | [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/): vier Funktionen, iterative Anwendung, Govern 1–6 und Map gegen die Optionen geprüft. | RED: verwerfbare Audit- und UI-Klick-Antworten; Pool-Test fehlgeschlagen. GREEN: 50 Distraktoren ersetzt, gezielter Test bestanden. REFACTOR: Fragen H09/H12/H13/H20/H21 präzisiert und absolute Hinweise reduziert; Katalog- und Pflichtsuite grün. |
| `agents-md` | [AGENTS.md](https://agents.md/) und [VS Code Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions): Format, Vorrang, Projekt-/Dateigeltung und `applyTo` geprüft. | RED: Binärdatei und Browsercache als offensichtliche Altoptionen; Pool-Test fehlgeschlagen. GREEN: 50 Distraktoren ersetzt, gezielter Test bestanden. REFACTOR: A09/A10 präzisiert und A11/c nach externer Prüfung auf eine AGENTS.md-interne Fehlvorstellung umgestellt; Katalog- und Pflichtsuite grün. |
| `ears-requirements` | [EARS von Alistair Mavin](https://alistairmavin.com/ears/): generische Syntax, Grundregel, sechs Muster, Herkunft und 2009 geprüft. | RED: Teamgröße und Netzwerkgeschwindigkeit als sachfremde Altoptionen; Pool-Test fehlgeschlagen. GREEN: 50 Distraktoren ersetzt, gezielter Test bestanden. REFACTOR: Szenarien E16–E18 ohne sprachliche Lösungshinweise präzisiert; Katalog- und Pflichtsuite grün. |
| `problem-understanding-and-change-boundaries` | [GitHub-Aufgabenpraxis](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) und [OpenAI-Praxisbeispiele](https://openai.com/business/guides-and-resources/how-openai-uses-codex/): Auftragsschnitt, sensible Aufgaben, Codeverständnis und Diff-Review geprüft. | RED: Sterne und Browser-Tabtitel als sachfremde Altoptionen; Pool-Test fehlgeschlagen. GREEN: 50 Distraktoren ersetzt, gezielter Test bestanden. REFACTOR: P05/P26 ohne Dokumentverweis präzisiert; Katalog- und Pflichtsuite grün. |
| `research-plan-tasks` | [GitHub Research/Plan/Iterate](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate), [GitHub zur Phasentrennung](https://docs.github.com/en/copilot/tutorials/optimize-ai-usage) und [OpenAI-Praxisbeispiele](https://openai.com/business/guides-and-resources/how-openai-uses-codex/): Ablauf, Umfang und Kontextwechsel geprüft. | RED: Editorfarbe und verstecktes Token als sachfremde Altoptionen; Pool-Test fehlgeschlagen. GREEN: 50 Distraktoren ersetzt, gezielter Test bestanden. REFACTOR: R01/R09/R11/R13/R14/R26–R28 präzisiert; Katalog- und Pflichtsuite grün. |
| `spec-driven-development-openspec` | [OpenSpec Quickstart](https://openspec.dev/docs/quickstart) und [spec-driven-Schema](https://openspec.dev/docs/schemas/spec-driven): Artefakte, Delta-Operationen, `skip_specs`, Apply und Archivierung geprüft. | RED: Lockfile und Konsolenprotokoll als sachfremde Altoptionen; Pool-Test fehlgeschlagen. GREEN: 50 Distraktoren ersetzt, gezielter Test bestanden. REFACTOR: Antwortarten und Quellenabgrenzungen bereinigt; Katalog- und Pflichtsuite grün. |

Der RED-Lauf `npx vitest run tests/verticals/catalog/distractor-quality.test.ts` schlug vor der Datenänderung in allen
sechs Pool-Tests aus den genannten fachlichen Gründen fehl. Danach bestand jeder Pool-Test einzeln. Nach der
redaktionellen Bereinigung bestanden `npm run check` (39 Unit-Tests, 8 Katalogtests, Architektur-, Lizenz-, Typ-,
Format- und Buildprüfung) und `npm run test:e2e` (8 Browser-Tests in Desktop- und Mobile-Chromium).

## Unabhängige Prüfung und Abnahme

Der [kopierbare Prüf-Prompt](../review-prompts/improve-existing-distractors.md) enthält alle 150 Fragen mit IDs,
Antwortoptionen, Lösungen, Erklärungen und Quellen-URLs. Die externe KI-Prüfung des Nutzers beanstandete H20, H22,
A11, P13, P25, S09 und S15/S18 sowie Lücken in der ID-Nummerierung. Die Nummernlücken sind absichtlich: Jede Karte
hat bereits 25 stabile Fragen-IDs. H20 wurde gegen die explizite NIST-Unterkategorie Govern 5.1 geprüft; H22 entspricht
dem Kontingenzprozess von Govern 6.2. P13 ist durch das Auffinden der Kernlogik im OpenAI-Beispiel gedeckt. P11 fragt
nach dem unklaren Auftrag, P25 nach der Bewertung des fertigen Diffs. S09 ist im aktuellen OpenSpec-Schema durch
`skip_specs: true` gedeckt; S15 fragt nach neuen Anforderungen, S18 nach reiner Umbenennung. Bei A11/c war die
anfängliche `applyTo`-Option fachlich zu leicht erkennbar. Nach einer ersten Korrektur des Quellenlinks blieb diese
Schwäche in der unabhängigen Nachprüfung bestehen. Die Option wurde deshalb durch einen Irrtum über verpflichtende
Geltungsbereichsabschnitte ersetzt und wieder an die AGENTS.md-Originalquelle gebunden. Die erneute unabhängige
Nachprüfung von A11 ergab **keine Beanstandungen**.

Lokaler Browsernachweis: Desktop-Chromium und Mobile-Chromium; in allen sechs Pools Fragen gestartet, je fünf Antworten
gegeben und bei jeder Frage drei bis fünf sichtbare Optionen geprüft. Nach einer falschen Antwort wurden die Erklärung
der gewählten und der richtigen Antwort sowie beide Quellenlinks im Ergebnis geprüft. Ergebnis: acht Browser-Tests grün.
Manuelle Prüfung: Der Nutzer öffnete die lokale Anwendung im In-App-Browser unter `http://127.0.0.1:4174/` und
bestätigte den Ablauf am 27.09.2026 ausdrücklich mit „Funktioniert!“. Einzelne geprüfte Fragen-IDs wurden nicht
zurückgemeldet; die automatisierte Browserprüfung deckte alle sechs Pools ab. Damit ist die manuelle Freigabe für den
Commit erteilt.
