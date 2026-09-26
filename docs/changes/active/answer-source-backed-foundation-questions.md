# Fragenablauf für Grundlagenkarten

## Quellengebundene Grundlagenfragen im Browser beantworten

Zu jeder der sechs Lernkarten des Grundlagenpfads können Lernende Auswahlfragen beantworten und anschließend Begründungen und Quellen
einsehen. Dafür werden ausreichend viele fachlich unterschiedliche Fragen für spätere Wiederholungen kuratiert.

- Nach der unabhängigen fachlichen Prüfung bleiben mindestens 25 Fragen je Karte. Jede Frage hat genau eine richtige Antwort und drei bis
  fünf plausible Optionen. Vertiefende Details aus den Quellen sind erwünscht, soweit sie für KI-gestützte Java-/Web-Entwicklung relevant
  sind; die Karten sollen sich fachlich nicht überschneiden.
- Ein Fragendurchlauf startet direkt aus der Themenliste, ohne die Karte zu öffnen. Er enthält fünf zufällig gewählte, unterschiedliche
  Fragen der gewählten Karte. Währenddessen sind nur die aktuelle Frage und ihre Optionen sichtbar. Ein Klick auf eine Option legt die
  Antwort einmalig fest und führt zur nächsten Frage. Der Durchlauf kann jederzeit abgebrochen werden; Antworten werden dabei verworfen.
- Erst nach der fünften Antwort zeigt eine Zusammenfassung, ob alle Antworten richtig waren. Sie zeigt die Fragen in der gestellten
  Reihenfolge, jeweils die richtige Antwort in Grün und bei einem Fehler zusätzlich die gewählte falsche Antwort in Rot. Zu jeder
  angezeigten Antwort erscheinen eine kurze Begründung und ein bewusst zu öffnender Quellenlink, möglichst direkt zum relevanten Abschnitt.
  Antworten können dort nicht geändert werden. Von Abbruch und Zusammenfassung führt ein Weg zurück zur Themenliste.
- Auswahl, Antworten und Ergebnis bleiben in dieser Story flüchtig; ein neuer Durchlauf darf bereits gestellte Fragen erneut enthalten.
- Jede Frage prüft einen Fakt oder eine klare Empfehlung (Best Practice) oder das beispielhafte, klare Ergebnis einer Trade-off-Abwägung.
  Basis sind die Quellen (vorrangig Primärquellen) des Lerninhalts, der durch die Karte repräsentiert ist.
- Jede Antwortoption erhält eine Begründung und einen Quellenbezug
- Fragen und Antworten werden unabhängig fachlich geprüft und zusammen mit dem öffentlichen Katalog validiert. Dafür wird ein Prompt mit
  sämtlichen Fragen, Optionen, Lösungen, Begründungen und Quellen für eine externe KI-Prüfung erstellt. Der Nutzer liefert das kurze
  Prüfergebnis zurück; beanstandete Fragen werden entfernt oder vor Integration fachlich geklärt.
- Ein Quellenlink öffnet sich nur nach bewusster Aktion und sein Ausfall verhindert das Lesen und Beantworten der Frage nicht.
- Widersprechen sich Primär- und Sekundärquellen deutlich, ist der Primärquelle Vorrang einzuräumen.

Die sechs Grundlagenkarten behandeln Mensch-KI-Verantwortung, Problemverständnis,
`AGENTS.md`, EARS, Research/Plan/Tasks und OpenSpec. Diese Story liefert den ersten sichtbaren Fragenablauf mit einer reinen
Ergebnisanzeige; ein formaler Bestehensstatus und Wiederholung mit anderem Fragensatz folgen in der nächsten Story.

Mit diesem ersten neuen Browserablauf beginnen auch Browser-E2E-Prüfungen (Integrationstests) in CI.

Lizenzprüfungen werden als ausführbare CI-Gates ergänzt und nach grünem Nachweis in der Qualitätsstrategie dokumentiert. GPL, AGPL, SSPL und
nicht quelloffene Lizenzen sind unzulässig; LGPL und MPL erfordern eine Einzelfallprüfung. Unbekannte Lizenzangaben dürfen nicht unbemerkt
passieren.

Die ersten Browser-E2E-Tests laufen in CI mit Chromium. Ungefähr die Hälfte prüft einen Smartphone-Viewport.

Ein Architekturtest prüft kleine öffentliche Vertikal-Einstiegspunkte und verbietet direkte Importe interner Daten oder Komponenten. Neue
Abhängigkeiten erfordern eine begründete Freigabe in der späteren Änderungs-Spec.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenablauf, Lerncheck-Vertikale und die tatsächlich grünen CI-Gates knapp in Produktstand, Architektur und
Qualitätsstrategie ergänzen.

Für die Erstellung und Prüfung der Fragen gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md).

## Nicht-Ziele

- Kein dauerhafter Lernstand, keine Fragehistorie und kein formaler Bestehensstatus.
- Keine Fragen für Karten außerhalb des Grundlagenpfads.
- Keine gestalterische Überarbeitung der gesamten Oberfläche; die spätere Oberflächen-Story bleibt eigenständig.

## Risiken und Abnahme

- **Fachliche Richtigkeit:** Die gemeinsamen Fragenregeln für alle sechs Karten nachweisen. Quellenprüfung, Unsicherheiten und entfernte
  Fragen werden in dieser Spec dokumentiert.
- **Unabhängige Prüfung:** Den vollständigen Bestand nach den gemeinsamen Fragenregeln zur externen KI-Prüfung bereitstellen. Das vom Nutzer
  zurückgegebene Prüfergebnis wird vor Integration verarbeitet; nach Entfernen beanstandeter Fragen bleiben mindestens 25 je Karte.
- **Fragenablauf:** Tests prüfen Start aus der ungeöffneten Karte, fünf unterschiedliche zufällige Fragen, einmalige Wahl mit direktem
  Übergang, jederzeitigen Abbruch, Rückkehr zur Liste und den Verlust des flüchtigen Zustands. Die Zusammenfassung zeigt Reihenfolge,
  Gesamtergebnis, richtige und gegebenenfalls gewählte falsche Antwort samt Erklärung und bewusst zu öffnendem Quellenlink. Ein
  ausgefallener externer Link blockiert den Ablauf nicht.
- **Browser-E2E:** Chromium-Tests werden in CI ausgeführt; ungefähr die Hälfte der Fälle nutzt einen Smartphone-Viewport. Die Tests prüfen
  den sichtbaren Fragenablauf und mindestens einen Abbruch sowie richtige und falsche Antworten.
- **Architektur:** Ein automatisierter Test prüft die öffentlichen Einstiegspunkte von Inhaltskatalog und Lernchecks und verhindert direkte
  Importe interner Daten oder Komponenten. Die App komponiert nur die beiden Vertikalen.
- **Lizenzen und Abhängigkeiten:** Das CI-Gate sperrt GPL, AGPL, SSPL und nicht quelloffene Lizenzen. LGPL und MPL sowie unbekannte Angaben
  lösen eine nachvollziehbare Einzelfallprüfung aus und passieren nicht stillschweigend. Vor jeder neuen Abhängigkeit werden Nutzen,
  Wartung, Lizenz, Datenschutz und Sicherheitslage hier begründet und freigegeben.

## Umsetzung und Nachweise

Stand 2026-09-26: Der Fragenablauf ist mit dem extern geprüften Bestand von 150 Fragen im öffentlichen Katalog verbunden. Die vollständige Pflichtsuite und die lokalen Browser-E2E-Tests sind grün. Der Nutzer hat die Änderung manuell geprüft und das Testergebnis ausdrücklich als gut bestätigt.

- **RED Fragenablauf:** `npm test -- --run tests/verticals/learning-checks/LearningCheck.test.tsx` scheiterte am fehlenden Einstiegspunkt `src/verticals/learning-checks`; nach dem ersten GREEN zeigte ein weiterer RED-Test, dass ein erneuter Klick auf das alte Options-Element bereits die nächste Frage beantworten konnte.
- **GREEN Fragenablauf:** Fünf Komponententests prüfen fünf unterschiedliche Fragen, Fortschritt, Ergebnis erst nach der fünften Antwort, richtige/falsche Antwort mit Erklärungen und bewussten Quellenlinks, Abbruch, einmalige Wahl und gemischte Optionen. Der Start erfolgt direkt aus der ungeöffneten Karte.
- **RED Architektur:** `npm test -- --run tests/architecture/public-entrypoints.test.ts` meldete den direkten App-Import `../verticals/catalog/CatalogBrowser`.
- **GREEN Architektur:** App importiert über `catalog/index.ts`; Architekturtest und dependency-cruiser laufen grün. Der öffentliche Lerncheck-Einstiegspunkt liegt in `learning-checks/index.ts`.
- **RED Lizenzgate:** `npm test -- --run tests/quality/licenses.test.ts` scheiterte am fehlenden Prüfschema. Danach prüften sieben Tests verbotene, unbekannte, erlaubte und einzeln freigegebene Lizenzen.
- **GREEN Lizenzgate:** `npm run check:licenses` prüft die Lockfile-Lizenzen und ist Teil von `npm run check` und CI. Ausnahmen gelten nur für Lightning CSS 1.33.0 samt Plattformpaketen mit MPL-2.0. Es ist eine bestehende transitive Build-Abhängigkeit; der eigene Quellcode wird nicht in Lightning CSS integriert oder die Bibliothek verändert. Grundlage der Einzelfallprüfung sind die [Projektlizenz](https://github.com/parcel-bundler/lightningcss/blob/master/LICENSE) und die [MPL-FAQ](https://www.mozilla.org/en-US/MPL/2.0/FAQ/). Jede andere MPL-/LGPL-Angabe und jede Versionsänderung scheitert am Gate bis zu erneuter Prüfung.
- **RED Fragenvalidierung:** `npm test -- --run tests/verticals/catalog/questionPool.test.ts` scheiterte am fehlenden Validator. Ein zusätzlicher Katalogtest scheiterte, weil die sechs Grundlagenkarten noch keine Fragen enthielten. **GREEN:** Zwei Pooltests prüfen Mindestbestand, eindeutige IDs, genau eine korrekte unter drei bis fünf Optionen, Erklärungen und einen Bezug zu einer Kartenquelle. Der Katalogtest prüft den tatsächlichen Bestand mit 25 Fragen je Karte.
- **RED App-Integration:** `npm test -- --run tests/app/App.test.tsx` scheiterte am fehlenden Start aus der Themenliste. **GREEN:** App und Katalogbrowser verbinden die zwei öffentlichen Vertikal-Einstiegspunkte; Start, Abbruch und Rückkehr zur Liste sind grün.

### Begründete Abhängigkeitsfreigabe für Browser-E2E

Für den geforderten Chromium-E2E-Test wird `@playwright/test` in Version 1.63.0 als reine Entwicklungsabhängigkeit freigegeben. Nutzen: echte, wiederholbare Browserabläufe mit Desktop- und Smartphone-Viewport und Integration in CI. Wartung: das [offizielle Projekt veröffentlicht aktuelle Releases](https://github.com/microsoft/playwright/releases) und [dokumentiert die CI-Einrichtung](https://playwright.dev/docs/ci). Lizenz: [Apache-2.0](https://github.com/microsoft/playwright/blob/main/LICENSE), zusätzlich vom Lizenz-Gate geprüft. Datenschutz: Tests laufen lokal beziehungsweise in CI gegen die lokale statische App; es werden keine Nutzerdaten erhoben und keine Laufzeit-Skripte in die App eingebunden. Sicherheit: feste Version und Lockfile; nur Chromium wird in CI installiert. Abhängigkeiten und Browser-Binaries werden nur für Tests benötigt.

### Quellen- und Fragenprüfung

Am 2026-09-26 wurden die Originalseiten der im [Fragenentwurf](answer-source-backed-foundation-questions/draft-questions.md) genannten Quellen geöffnet und die folgenden Aspekte gegen die Fragen geprüft. Alle Seiten waren erreichbar.

| Quelle | Tragende Aspekte | Unsicherheit und Abgrenzung |
| --- | --- | --- |
| [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) | Govern, Map, Measure, Manage und konkrete Govern-/Map-Unterkategorien | NIST kündigt eine Überarbeitung des AI RMF 1.0 an. Die Fragen beziehen sich auf die derzeit sichtbare Fassung; keine rechtliche Pflicht wird daraus abgeleitet. |
| [AGENTS.md](https://agents.md/) und [VS Code Custom Instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) | Format, Geltung, Verschachtelung und konkrete Anweisungsarten | Werkzeugunterstützung kann sich ändern; Fragen zu VS Code bleiben auf die dokumentierten VS-Code-Funktionen beschränkt. |
| [EARS-Originalanleitung](https://alistairmavin.com/ears/) | Satzmuster, Klauselregeln, Beispiele und Grenzen | Für 25 Fragen werden auch neue Java-/Web-Beispiele zur Anwendung der Muster verwendet. Diese Beispiele sind Ableitungen, nicht Zitate der Quelle. |
| [GitHub-Aufgabenpraxis](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) und [OpenAI-Codex-Praxis](https://openai.com/business/guides-and-resources/how-openai-uses-codex/) | Problemklärung, Änderungsumfang, Risiken, bestehende Codepfade | Produktgebundene Empfehlungen sind als solche formuliert; allgemeine Prozessschlüsse bleiben prüfpflichtig. |
| [GitHub Research/Plan/Iterate](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate) und [GitHub Optimize AI Usage](https://docs.github.com/en/copilot/tutorials/optimize-ai-usage) | Getrennte Arbeitsphasen, Kontextumfang, Modellwahl und Iteration | Die zweite Quelle wurde nach Prüferfeedback ergänzt, um drei eigenständige Fragen zu tragen; sie ist eine offizielle Primärquelle. Kosten- und Modellhinweise können sich ändern. |
| [OpenSpec Schema](https://openspec.dev/docs/schemas/spec-driven) und [Quickstart](https://openspec.dev/docs/quickstart) | Artefakte, Delta-Specs, Tasks, Apply und Archivierung | Beschrieben wird das dokumentierte Standardschema; anpassbare andere Schemas werden nicht als unmöglich dargestellt. |

Bewusst ausgelassen wurden wechselnde Preise, Nutzungszahlen, Produktverfügbarkeiten und rechtliche Aussagen ohne eigene Primärquelle. Die Fragenquellen sind den vorhandenen Karten zugeordnet; die zusätzliche GitHub-Quelle erweitert nur die Research/Plan/Tasks-Karte und hält deren Schwerpunkt getrennt.

Der [vollständige Prüf-Prompt](answer-source-backed-foundation-questions/review-prompt.md) enthält 150 Fragen mit stabilen IDs, drei Optionen, Lösung, Erklärung je Option und Original-URL. Im ersten externen Rücklauf wurde ein systematischer Fehler der Falschantwort-Erklärungen für H11–H21 gemeldet; die gleiche Generatorvorlage betraf alle Fragen. Der Generator wurde entfernt und alle 300 Falschantworten erhielten eigene Erklärungen. Zusätzlich wurde E20 als mehrdeutiges Beispiel korrigiert. Der zweite externe Rücklauf beanstandete A12, A15, P12, R02, R08 und R10 wegen fehlender Quellenstütze oder fachlicher Überschneidung. Diese sechs IDs wurden entfernt und durch A26, A27, P26 und R26–R28 ersetzt; die neue Quelle trägt die drei Research-Fragen. Die dritte unabhängige Prüfung meldete am 2026-09-26 „Keine Beanstandungen“. Erst danach wurde die geprüfte Fassung in `foundationQuestions.json` übernommen. Jede Grundlagenkarte enthält 25 Fragen; entfernte IDs sind im öffentlichen Bestand nicht enthalten.

**Browser-E2E RED:** Playwright 1.63.0 und Chromium wurden installiert. Zwei E2E-Fälle in Desktop- und Smartphone-Projekten (vier Ausführungen) scheiterten am fehlenden Startknopf in der Themenliste; das ist der erwartete fachliche RED-Grund. **GREEN:** Drei Fälle laufen auf beiden Viewports, insgesamt 6/6 grün. Sie prüfen Start aus ungeöffneter Karte, fünf richtige Antworten und Zusammenfassung, eine falsche Antwort samt Erklärung, fehlgeschlagenen externen Quellenaufruf sowie Abbruch. Chromium wird im CI-Workflow installiert und `npm run test:e2e` als Gate ausgeführt.

**REFACTOR und Pflichtsuite:** Öffentliche Einstiegspunkte, gemeinsame Fragetypen und getrennte Katalog-/Lerncheck-Verantwortung wurden bereinigt. `npm run check` ist am 2026-09-26 grün: Format, Lint, Typprüfung, 33 Unit-/Komponententests, Katalogvalidierung, Architektur, Lizenzen und Produktionsbuild. `npm run test:e2e` ist mit Chromium 6/6 grün (drei Abläufe auf Desktop und Pixel-7-Viewport). `npm run test:pages-workflow`, `npm run test:pages-build` und `npm audit --audit-level=high` sind ebenfalls grün; das Audit meldet null Schwachstellen.

**Lokaler Browsernachweis:** Playwright/Chromium, Desktop-Viewport und Pixel 7: Start aus der geschlossenen Karte „Mensch und KI“, fünf Antworten, richtige und falsche Zusammenfassung, bewusst geöffneter Quellenlink bei simuliertem Netzwerkfehler, Rückkehr zur Themenliste. Start aus der AGENTS.md-Karte, eine Antwort und Abbruch. Ergebnis: alle sechs Browserausführungen grün. Zusätzlich bestätigte der Nutzer nach manuellem Test am 2026-09-26: „Testergebnis gut.“
