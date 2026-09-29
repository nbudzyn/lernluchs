# Kuratierte Quellen für alle Themen ergänzen (außer Grundlagen-Pfad)

Alle Themen erhalten kuratierte Quellen. Die sechs Themen des Grundlagen-Pfads
bleiben ausgenommen, auch wenn sie in weiteren Lernpfaden vorkommen. Alle anderen
bestehenden Themen gehören dazu, einschließlich des Git-Themas ohne Lernpfad.

Bereits vorhandene Quellen werden je betroffenem Thema anhand der Originalseiten
fachlich geprüft. Fehlende Aspekte erhalten passende Quellen; eine bestehende
Quelle wird nur mit dokumentiertem Grund ersetzt. Falls die Prüfung eine Lücke
oder einen Widerspruch im kurzen Thementext zeigt, wird er gezielt korrigiert.
Die fachlichen Schwerpunkte bleiben getrennt; Textkorrekturen erzeugen möglichst
keine Überschneidung mit anderen Themen.

Es gelten die [Regeln zur Quellenauswahl](../../content/source-selection.md).

Außerdem erhalten alle für die Vertikale „Themen“ relevanten Glossarbegriffe
genau eine englische Entsprechung: Fragenpool, Themen, Thema, Lernpfad,
Primärquelle und Sekundärquelle. Betroffene englische Bezeichner werden innerhalb
der Vertikale vereinheitlicht, ohne Fachlogik zu ändern.

Dokumentation nach Umsetzung: Vermerken, dass jedes (auch neue) Thema kuratierte Quellen erhält
gemäß [Regeln zur Quellenauswahl](../../content/source-selection.md).

Vertikalen: Themen

## Ziel und Nicht-Ziele

- Für alle zehn bestehenden Themen außerhalb des Grundlagen-Pfads sind die
  Quellen fachlich passend und in der Anwendung sichtbar. Die sechs
  Grundlagenthemen bleiben unverändert.
- Die sechs genannten Glossarbegriffe erhalten jeweils eine englische
  Entsprechung. Bezeichner innerhalb der Vertikale werden daran ausgerichtet.
- Neue Themen, Fragenpools und eine Änderung der Fachlogik gehören nicht dazu.
- Maßgeblich sind die [Regeln zur Quellenauswahl](../../content/source-selection.md).

## Risiken und Abnahme

- **Fachliche Belege:** Für jedes betroffene Thema die vorhandenen und neuen
  Quellen auf den Originalseiten prüfen. Prüftag, gestützte Aspekte,
  Unsicherheiten, bewusste Auslassungen und Gründe für Ersetzungen in dieser
  Spec dokumentieren. Fehlende Aspekte werden belegt; pro Thema bleibt
  mindestens eine Primärquelle und höchstens zehn Quellen.
- **Themengrenzen:** Nur quellenbedingt nötige Textkorrekturen vornehmen und
  die Abgrenzung zu anderen Themen fachlich prüfen. Die Grundlagenthemen
  einschließlich ihrer gemeinsam genutzten Pfadzuordnungen bleiben unverändert.
- **Glossar und Code:** Für jeden der sechs Begriffe genau eine englische
  Entsprechung festlegen und betroffene englische Bezeichner der Themen-Vertikale
  ohne Verhaltensänderung vereinheitlichen.
- **Sichtbarer Nutzen:** Im lokalen Browser Quellen der betroffenen Themen
  öffnen und Herkunftsgruppe, Titel, Sprache sowie Reihenfolge prüfen. Den
  Ablauf mit Browser und Ergebnis hier festhalten.
- **Prüfungen:** Inhaltliche Validierung, betroffene Tests und die vollständige
  Pflichtsuite nach der Implementierung grün ausführen. Vor dem Commit muss der
  Nutzer die Änderung selbst manuell getestet und ausdrücklich bestätigt haben.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED: Quellen und Inhalte | `npm run validate:content`: 3 Tests rot. Die zehn Nicht-Grundlagenthemen hatten noch alte Prüfdaten; die drei fachlich nötigen Ergänzungen fehlten. |
| GREEN: Quellen und Inhalte | Drei Primärquellen ergänzt, die vorhandenen Quellen der zehn betroffenen Themen neu geprüft und Prüfdaten über `curatedEditorial` aktualisiert. `npm run validate:content`: 11 Tests grün. |
| RED: Glossar und Bezeichner | `npm test -- --run tests/verticals/topics/glossary.test.ts`: 6 Tests rot, weil die englischen Entsprechungen fehlten. |
| GREEN: Glossar und Bezeichner | Sechs eindeutige Entsprechungen ergänzt; derselbe Lauf: 6 Tests grün. Bestehende Bezeichner `Topic`, `topics`, `LearningPath`, `TopicSource`, `primary`, `secondary` und `validateQuestionPool` stimmen bereits überein; keine Umbenennung nötig. |
| REFACTOR | Neue Tests formatiert und Bezeichner gegen das Glossar geprüft; keine weitere Code-Umbenennung erforderlich. Danach `npm run check` grün: Format, Lint, Typen, 65 Unit-/Komponententests, 11 Inhaltsprüfungen, Architektur, Lizenzen und Build. `npm run test:e2e`: 32/32 grün. `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit. |
| Quellenprüfung | Originalseiten aller 17 beibehaltenen oder ergänzten Quellen am 27.09.2026 geprüft; Einzelheiten unten. Keine Quelle ersetzt. |
| Browserabnahme | Lokales Chromium mit Playwright auf Desktop- und Pixel-7-Viewport: Themen für Coding-Agent-Kontext, Modulgrenzen und Playwright geöffnet. Jeweils Primärquellengruppe, Linktitel in Katalogreihenfolge, HTTPS-Ziele und bewusst zu aktivierende Links geprüft; keine Sekundärgruppe für diese drei Themen. Alle 2 neuen Browserfälle grün, zusammen mit der vollständigen E2E-Suite 32/32. Die Quellen sind englisch; der vorhandene Komponententest für die sichtbare Kennzeichnung ` [DE]` blieb grün. |
| Manuelle Prüfung durch den Nutzer | Der Nutzer bestätigte am 27.09.2026 nach eigener manueller Prüfung das Ergebnis und gab den Commit frei. |

## Quellenprüfung am 27.09.2026

Alle verlinkten Originalseiten waren erreichbar. „Primär“ bezeichnet hier die
eigene Veröffentlichung des jeweiligen Herausgebers zu seinem Verfahren,
Produkt oder seinen Empfehlungen. Martin Fowlers Einordnung von Kent Becks TDD
bleibt als Sekundärquelle klassifiziert. Die Beispiele für Java und Web in den
Thementexten sind Anwendungen der belegten Regeln, keine Behauptungen über
bestimmte Projektimplementierungen. Versionsabhängige Befehle und vollständige
Sicherheitsgarantien werden bewusst nicht behauptet.

| Thema | Geprüfte Originalseite | Gestützte Aspekte; Unsicherheiten und bewusste Auslassungen |
| --- | --- | --- |
| Coding-Agent-Kontext | [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) | Fremde Inhalte, indirekte Injection, Trennung von Kontext, Rechtebegrenzung und menschliche Prüfung. Allgemeine LLM-Risiken; keine Garantie durch Markierung oder Prompt. |
| Coding-Agent-Kontext | [GitHub: Risks and mitigations for Copilot cloud agent](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations) | Ergänzt den konkreten Coding-Agent-Fall mit Issue-Inhalten, Werkzeuggrenzen und Review. Produktspezifische Schutzmechanismen gelten nicht automatisch für andere Agenten. |
| Geheimnisse und sensible Daten | [OWASP LLM02:2025 Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/) | Personen- und Geschäftsdaten, Datenminimierung, Redaktion, Zugriffsgrenzen und Grenzen von Prompt-Anweisungen. Kein konkretes Secret-Store-Produkt empfohlen. |
| Geheimnisse und sensible Daten | [GitHub: Keeping your API credentials secure](https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure) | Ergänzt sichere Token-Aufbewahrung, minimale Rechte und Behandlung kompromittierter Credentials. GitHub-spezifische Beispiele werden nicht als allgemeine Pflicht dargestellt. |
| Modulgrenzen | [Dev.java: Modules](https://dev.java/learn/organizing/modules/) | Java-Module, Exporte und Kapselung. Die Quelle allein belegt keine Web-Modulsyntax. |
| Modulgrenzen | [TypeScript Handbook: Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html) | Ergänzt Web-Modulsyntax, explizite Exporte und Imports. Ein Export ist allein noch kein fachlich guter Vertrag. |
| TDD | [Kent Beck: Canon TDD](https://newsletter.kentbeck.com/p/canon-tdd) | Originäre Beschreibung von Szenarienliste, erstem Test, kleinstem grünen Schritt und optionalem Refactor. Kein Korrektheitsbeweis. |
| TDD | [Martin Fowler: Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) | Sekundäre Einordnung des Red-Green-Refactor-Ablaufs und der Testreihenfolge. Keine zusätzliche, unabhängige Methode behauptet. |
| ArchUnit | [ArchUnit User Guide](https://www.archunit.org/userguide/html/000_Index.html) | Regeln über Klassenabhängigkeiten, Schichten und Zyklen. Fachverhalten und unformulierte Regeln bleiben außerhalb des Nachweises. |
| Playwright | [Playwright: Assertions](https://playwright.dev/docs/test-assertions) | Wiederholende sichtbare Browser-Assertions und ihre Grenzen. Locator-Auswahl war damit allein nicht hinreichend belegt. |
| Playwright | [Playwright: Locators](https://playwright.dev/docs/locators) | Ergänzt semantische Locators und Browserabläufe. Keine Aussage über ungeprüfte Browser oder fachliche Vollständigkeit. |
| XSS und DOM | [OWASP: Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | Kontextgerechte Ausgabe, sichere DOM-Sinks und Grenzen von `textContent`. Keine pauschale XSS-Sicherheit durch eine Einzelmaßnahme. |
| Abhängigkeiten | [OpenSSF: Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html) | Nutzen, Wartung, Sicherheitspraktiken, Lizenz und Risiko einer neuen Abhängigkeit. Kein Ersatz für projektspezifische Bewertung. |
| Abhängigkeiten | [GitHub: Dependency review](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review) | Ergänzt Diff-Prüfung und bekannte Advisories. Ein unauffälliger Scan beweist keine Sicherheit. |
| KI-generierte Änderungen | [GitHub: Review AI-generated code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) | Anforderungen, Architektur, Tests, Sicherheit, Abhängigkeiten und menschliche Entscheidung. Produkthinweise sind Beispiele, keine Garantie für andere Werkzeuge. |
| Git-Commits | [Pro Git: Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging) | Logisch getrennte Changesets und gezieltes Staging auch von Teilen einer Datei. Keine starre Größenregel. |
| Git-Commits | [Git: git-commit Documentation](https://git-scm.com/docs/git-commit) | Index, Commit-Inhalt, interaktive und Patch-Auswahl. Korrektheit eines Commits folgt daraus nicht. |

Die drei neuen Quellen schließen jeweils einen zuvor nicht belegten Aspekt;
weitere Quellen wurden wegen ausreichender Abdeckung und fehlendem Zusatznutzen
bewusst ausgelassen. Die kurzen Thementexte bleiben fachlich stimmig und
überschneiden sich nicht zusätzlich. Daher war keine Textkorrektur oder
Quellenersetzung nötig.
