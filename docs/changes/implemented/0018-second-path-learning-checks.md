## Lernchecks für den zweiten Lernpfad ergänzen

Initial den Entwickler erinnern: KI-Model-Aufwand auf Hoch stellen

Die sechs zusätzlichen Themen aus „Änderungen gestalten und absichern“ erhalten quellengebundene Fragenpools und die bereits vorhandenen
Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer
Quellen; sie werden unabhängig fachlich geprüft. Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Betroffen sind „Modulgrenzen und öffentliche Schnittstellen gestalten“, „Fachverhalten mit TDD absichern“,
„Java-Architekturregeln mit ArchUnit prüfen“, „Webabläufe mit Playwright prüfen“, „Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung
erkennen“ und „Abhängigkeiten und Sicherheitslücken risikobasiert bewerten“. Jeder neue Pool enthält nach der unabhängigen Prüfung
mindestens 25 fachlich unterschiedliche gültige Fragen. Die Fragen decken den jeweiligen Schwerpunkt, sinnvolle Grenzen und belegte
Vertiefungen ab; Überschneidungen zwischen den Themen werden vermieden. Falls eine Quelle einen wichtigen Aspekt nicht trägt, wird sie nach
den Quellenregeln gezielt ergänzt oder ersetzt und der Thementext bei Bedarf angepasst.

Der bestehende Lerncheck-Ablauf bleibt erhalten: Ein Start wählt fünf Fragen aus dem Pool, fünf richtige Antworten bestehen den Check,
die Auswertung zeigt Erklärungen und Quellenlinks, und bei einer Wiederholung werden fünf Fragen erneut zufällig gewählt. Die
Inhaltsvalidierung erfasst alle sechs neuen Pools. Für die unabhängige fachliche Prüfung erhält der Nutzer den vollständigen kopierbaren
Prüf-Prompt und gibt die kurze Liste beanstandeter Fragen-IDs zurück. Beanstandete Fragen werden vor der Integration korrigiert oder
entfernt; korrigierte Fragen werden erneut unabhängig geprüft.

Browser-Tests belegen Start, Bestehen, Nichtbestehen mit Erklärung und Quellenbezug sowie Wiederholung exemplarisch an jeweils
unterschiedlichen Themen des zweiten Pfads. Sie prüfen sichtbares Verhalten über stabile Selektoren und hängen weder von einer festen
Fragenreihenfolge noch von einer bestimmten zufälligen Auswahl ab. Die Verfügbarkeit und Struktur aller sechs Pools wird unabhängig davon
automatisiert geprüft.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md).

Außerdem prüfen, ob die bestehenden Lerncheck-E2E-Tests der richtigen Vertikale zugeordnet sind, und fachlich zugehörige Tests aus `app`
in `learning-checks` verschieben.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des zweiten Pfads knapp im Produktstand und in der redaktionellen Richtlinie ergänzen.

## Ziel und Nicht-Ziele

Lernende können die sechs bisher nicht geprüften Themen des zweiten Pfads mit dem bestehenden Lerncheck bearbeiten und anhand
quellengebundener Erklärungen aus richtigen und falschen Antworten lernen. Die zwei bereits vorhandenen Themen des Pfads behalten ihre
Fragenpools. Diese Änderung entwirft weder einen neuen Check-Ablauf noch Lernchecks für den dritten Pfad oder das unzugeordnete Git-Thema.
Neue Abhängigkeiten sind nicht vorgesehen.

## Entscheidungen und Risiken

- **Betroffene Themen-IDs:** `module-boundaries-and-public-interfaces`, `tdd-for-domain-behavior`,
  `archunit-for-java-architecture`, `playwright-for-web-flows`, `web-xss-and-safe-dom` und `dependency-security-assessment`.
- **Fachliche Qualität:** Mindestens 25 gültige, unterschiedliche Fragen je Pool bleiben nach der unabhängigen Prüfung übrig. Für jede
  Frage werden alle Optionen, Erklärungen und Quellenbezüge gegen erreichbare Originalquellen geprüft.
- **Mehrdeutige Antworten und schwache Ablenkungen:** Der vollständige Prüf-Prompt mit stabilen IDs wird dem Nutzer zur externen
  unabhängigen Prüfung gegeben. Beanstandete Fragen werden korrigiert und erneut geprüft oder entfernt. Reicht ein Pool danach nicht
  mehr aus, werden weitere Fragen erstellt und geprüft, bevor er integriert wird.
- **Quellenänderungen:** Neue oder ersetzte Themenquellen und fachliche Textkorrekturen müssen nach den Quellenregeln begründet und
  mit Prüftag dokumentiert werden. Ungeklärte fachliche Aussagen werden nicht geraten.
- **Instabile Browser-Tests:** Tests nutzen zugängliche Bezeichnungen und den jeweiligen Pool zum Zuordnen der sichtbaren Frage.
  Weder die Reihenfolge noch ein garantiert anderer Fünfersatz bei Wiederholung wird vorausgesetzt. Bestehen, Nichtbestehen und
  Wiederholung werden an verschiedenen Themen exemplarisch geprüft.
- **Vertikalgrenzen:** Katalog und Fragen gehören zu `topics`, der Auswahlcheck zu `learning-checks`. Fachlich zugehörige E2E-Tests
  werden diesen Vertikalen zugeordnet; `app` bleibt nur für reine Kompositionstests. Ein Commit berührt höchstens diese zwei Vertikalen.

## Abnahme

1. Alle sechs Themen bieten einen Lerncheck mit je mindestens 25 validen, quellengebundenen und fachlich unterschiedlichen Fragen.
   Die Strukturprüfung erfasst die sechs Pools zusätzlich zu den vorhandenen Grundlagen-Pools.
2. Der bestehende Fünf-Fragen-Ablauf bleibt erhalten. Browser-Tests belegen Start, Bestehen, Nichtbestehen mit Erklärung und
   Quellenlink sowie Wiederholung exemplarisch an verschiedenen Themen des zweiten Pfads. Ein fehlgeschlagener externer Quellenlink
   verhindert die Auswertung nicht.
3. Die unabhängige fachliche Prüfung aller neuen Fragen ist dokumentiert. Es bleiben keine ungeklärten Beanstandungen, und nach
   Korrekturen oder Entfernungen gilt weiterhin der Mindestumfang je Pool.
4. Fachlich zugehörige E2E-Tests liegen bei ihrer Vertikale. Die verpflichtende Prüfsuite, Browser-E2E und die lokale manuelle
   Browserprüfung sind grün; Browser, Ablauf und Ergebnis werden hier festgehalten.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR / Nachweis |
| --- | --- | --- | --- |
| Fragenpool je der sechs Themen | 2026-09-27: Sechs parametrisierte Bestandstests in `tests/verticals/topics/topics.test.ts` ergänzt. `npx vitest run tests/verticals/topics/topics.test.ts -t "contains at least 25 validated questions for"` schlug bei allen sechs Themen wegen fehlender `questions` fehl (6 fehlgeschlagen, Exit 1). Zusätzlicher RED-Nachweis für die Inhaltsvalidierung unten. | Nach der unabhängigen Prüfung ohne Beanstandungen sechs Pools mit je 25 Fragen an den Katalog gebunden; `npx vitest run tests/verticals/topics/topics.test.ts`: 19 bestanden. | IDs, Fragen, Optionen, Erklärungen und zugeordnete Quellen werden für alle sechs Pools strukturell geprüft. Die neue Java-Modul-Einführung trägt vertiefende Fragen. `npm run validate:content`: 19 bestanden. |
| Lerncheck-Zugang und Ablauf für den zweiten Pfad | 2026-09-27: `npx playwright test e2e/verticals/learning-checks/second-path.spec.ts -g "all six second-path topics" --project=desktop-chromium` schlug beim ersten Thema fehl: Der Button `Fragen starten: Modulgrenzen und öffentliche Schnittstellen gestalten` fehlt (Timeout, Exit 1). | Nach der Anbindung: `npx playwright test e2e/verticals/learning-checks/second-path.spec.ts --project=desktop-chromium`: 4 bestanden. | Grundlagen-E2E von `e2e/app/` nach `e2e/verticals/learning-checks/` verschoben. Neue E2E ordnen sichtbare Fragen anhand ihres Texts dem Pool zu und prüfen Start, fünf richtige Antworten, nicht bestandenes Ergebnis mit beiden Erklärungen und Quellenbezug bei gesperrter externer Quelle sowie einen erneuten Durchlauf mit fünf verschiedenen Fragen. `npm run test:e2e`: 40 bestanden (Desktop- und Mobile-Chromium). |
| Gesamtabnahme | — | — | `npm run check`: 73 Unit-/Integrationstests, 19 Inhaltsprüfungen, Architektur-/Lizenzprüfung und Build grün; `npm run test:e2e`: 40 grün. Lokale manuelle Prüfung am 2026-09-27 im Codex In-app Browser unter `http://127.0.0.1:4174/`: Lerncheck für „Modulgrenzen und öffentliche Schnittstellen gestalten“ gestartet, fünf Fragen korrekt beantwortet; „Lerncheck bestanden“, „Als gelernt gespeichert“, Erklärungen und Quellenlinks sichtbar. Der Nutzer bestätigte nach eigener manueller Prüfung am 2026-09-27 das erfolgreiche Ergebnis und gab den Commit frei. |

### Fachliche Quellenprüfung und Fragenentwurf (2026-09-27)

Die Originalseiten wurden am 2026-09-27 auf Erreichbarkeit und tragende Aussagen geprüft. Für Modulgrenzen: [Dev.java Modules](https://dev.java/learn/organizing/modules/), die zusätzlich aufgenommene [Java-Modul-Einführung](https://dev.java/learn/organizing/modules/intro/) und das [TypeScript-Handbuch zu Modulen](https://www.typescriptlang.org/docs/handbook/2/modules.html). Die Einführung trägt konkrete Fragen zu `module-info.java`, `requires`, `exports`, `opens`, Services und Modulpfad; der bisherige Dev.java-Einstieg allein war dafür zu knapp. Für TDD: [Kent Becks Canon TDD](https://newsletter.kentbeck.com/p/canon-tdd) und [Martin Fowlers TDD-Erläuterung](https://martinfowler.com/bliki/TestDrivenDevelopment.html). Für Java-Architekturregeln: der [ArchUnit User Guide](https://www.archunit.org/userguide/html/000_Index.html). Für Browserabläufe: [Playwright Locators](https://playwright.dev/docs/locators) und [Playwright Assertions](https://playwright.dev/docs/test-assertions). Für XSS: das [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html). Für Abhängigkeiten: der [OpenSSF-Leitfaden](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html) und [GitHubs Dependency Review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review).

Die Quellen sind für die jeweiligen Fragen erreichbar. Die 150 Fragen wurden vor der Kataloganbindung zur unabhängigen Prüfung vorgelegt. Der vollständige kopierbare [Prüf-Prompt](second-path-learning-checks/review-prompt.md) enthält alle IDs und Quellen. Bewusst ausgelassen sind versionsgebundene Konfigurationsdetails von ArchUnit und Playwright sowie konkrete CVE-Bewertungen, weil diese schneller veralten und nicht zum stabilen Schwerpunkt der Themen gehören. Die externe Prüfung ergab keine Beanstandungen.

Vor der Integration waren die sechs Entwurfspools mit `npx vitest run tests/verticals/topics/topics.test.ts -t "validates the six draft pools"` strukturell grün. Der bestehende Grundlagen-Browsertest wurde aus `e2e/app/` nach `e2e/verticals/learning-checks/` verschoben; alle sechs Tests bestanden dort mit Desktop Chromium. `npm run format:check`, `npm run lint`, `npm run typecheck` und `npm run check:architecture` bestanden für den vorbereiteten Stand. Die sechs Bestandstests und der neue Browser-Zugangstest blieben bis zur geprüften Anbindung erwartungsgemäß rot.

Der Nutzer meldete am 2026-09-27 für den vollständigen Prüf-Prompt als Ergebnis der unabhängigen externen KI-Prüfung keine Beanstandungen. Es wurden damit keine Fragen zur Korrektur oder Entfernung zurückgegeben; die sechs Pools behalten je 25 Fragen. Freiwillige Probeläufe mit Lernenden liegen nicht vor, daher sind Annahmen über die Attraktivität der falschen Optionen hypothetisch.

Zusätzlicher RED-Nachweis für die Inhaltsvalidierung: `npx vitest run tests/verticals/topics/topics.test.ts -t "rejects a second-path topic without"` schlug am 2026-09-27 fehl, weil `validateTopics` einen fehlenden Pool des zweiten Pfads noch akzeptierte (1 fehlgeschlagen, Exit 1).
