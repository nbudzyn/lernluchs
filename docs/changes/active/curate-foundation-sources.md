# Weitere Quellen für die Grundlagenkarten kuratieren

Die dauerhaften [Regeln zur Quellenauswahl](../../content/source-selection.md) gelten für diese Story.

## Ziel und Umfang

Der Quellenbestand der sechs bestehenden Grundlagenkarten wird fachlich geprüft und, wo es die Abdeckung verlangt, ergänzt oder begründet ersetzt. Eine einzige Quelle darf genügen, wenn sie die verschiedenen Aspekte des Lerninhalts gut abdeckt. Lernende können die Quellen nach Auswahl einer Karte einsehen. [Primär- und Sekundärquellen](../../product/glossary.md) werden katalogweit unterschieden und getrennt angezeigt; Primärquellen stehen zuerst. Sekundärquellen sind optional. Deutsch- und englischsprachige Quellen sind zulässig. Sichtbar sind die Quellengruppe und der verlinkte Titel; deutsche Quellen erhalten das Suffix ` [DE]`, englische kein Sprachsuffix. Je Lerninhalt gelten mindestens eine Primärquelle und höchstens zehn Quellen. Die Quellen sollen aktuell und hochwertig sein. Bei gleicher Eignung werden knappe, inhaltsdichte Quellen bevorzugt. Fachlich passende zusätzliche Perspektiven dürfen spätere Verständnis- und Anwendungsfragen tragen. Bestehende Quellen dürfen nach dokumentierter Begründung durch geeignetere ersetzt werden.

Die übrigen neun Karten werden für die katalogweite Quellenregel geprüft. Dort werden Quellen nur ergänzt oder ersetzt, wenn sonst keine Primärquelle vorhanden wäre. Die fachliche Kuration weiterer Perspektiven für diese Karten bleibt den späteren Backlog-Stories vorbehalten.

Die sechs Karten sind `human-ai-responsibility`, `problem-understanding-and-change-boundaries`, `agents-md`, `ears-requirements`, `research-plan-tasks` und `spec-driven-development-openspec`.

Für gezielte Textanpassungen bleiben die fachlichen Schwerpunkte getrennt: Mensch/KI-Verantwortung behandelt menschliche Entscheidung und risikogerechte Aufsicht; Problemverständnis klärt Ziel, Fakten, Grenzen und Abnahme einer Änderung; `AGENTS.md` hält dauerhaften Repository-Kontext für Agenten fest; EARS formuliert einzelne Anforderungen präzise; Research/Plan/Tasks trennt Recherche, Entscheidung und Umsetzungsschritte; OpenSpec zeigt ein konkretes Werkzeug und dessen Artefakte für spezifikationsgeleitete Änderungen. Eine neue Aussage wird nur der Karte zugeordnet, deren Schwerpunkt sie unmittelbar erklärt.

## Vorläufiger Quellenüberblick je Karte

Die folgenden Kandidaten sind eine begründet änderbare Vorauswahl, keine verbindliche Titelliste oder abschließende Quellenfreigabe. Entscheidend ist die Abdeckung der Kartenaspekte ohne bloße Doppelung. Vor Übernahme werden Aussagen, Erscheinungsstand, Erreichbarkeit und fachliche Herkunft je Quelle geprüft.

| Karte | Vorhandene Quelle | Ergänzungskandidaten und Aspekt |
| --- | --- | --- |
| Mensch/KI-Verantwortung | [NIST AI RMF](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10) | [NIST-Kernaussagen zu Rollen und Aufsicht](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) als kurzer Einstieg; [GitHub-Anleitung zum Prüfen von KI-Code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) für den Entwicklungsalltag. Die NIST-Seite stammt aus demselben Framework und ist keine unabhängige Perspektive. |
| Problemverständnis | [OpenAI-Praxisbericht](https://openai.com/business/guides-and-resources/how-openai-uses-codex/) | [GitHub-Hinweise zu gut abgegrenzten Aufgaben](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) für Problem, Akzeptanzkriterien und Änderungsumfang. |
| `AGENTS.md` | [Projektseite](https://agents.md/) | [VS-Code-Dokumentation](https://code.visualstudio.com/docs/agent-customization/custom-instructions) als Werkzeugbeispiel für Geltungsbereich und Einbindung. |
| EARS | [Originalarbeit bei IEEE](https://ieeexplore.ieee.org/document/5328600) | [Erläuterung des Mitautors](https://alistairmavin.com/ears/) mit Satzmustern und Beispielen als direkter Leseeinstieg. |
| Research/Plan/Tasks | [OpenAI-Praxisbericht](https://openai.com/business/guides-and-resources/how-openai-uses-codex/) | [GitHub-Ablauf für Recherche und Planung](https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate). Die Quellen zeigen Praxisabläufe, keine allgemeingültige Pflichtreihenfolge. |
| OpenSpec | [Projekt-Repository](https://github.com/Fission-AI/OpenSpec) | [Quickstart](https://openspec.dev/docs/quickstart) für den Ablauf und [Schema-Referenz](https://openspec.dev/docs/schemas/spec-driven) für Proposal, Specs, Design und Tasks. |

Bei der Vorprüfung der übrigen neun Karten ist die TDD-Karte ein möglicher Korrekturfall: Der vorhandene [Artikel von Martin Fowler](https://martinfowler.com/bliki/TestDrivenDevelopment.html) erläutert eine von Kent Beck entwickelte Methode und wäre für deren Ursprung sekundär. [Kent Becks „Canon TDD“](https://newsletter.kentbeck.com/p/canon-tdd) ist ein kurzer, frei lesbarer Primärquellenkandidat. Die endgültige Einordnung aller neun Karten erfolgt bei der fachlichen Prüfung.

Format- und Lint-Prüfungen für Code, Tests und Konfiguration werden als ausführbare CI-Gates ergänzt. Markdown-Dokumente gehören nicht zum Format-Gate. Beide Befehle werden in `npm run check` und damit im Pages-Build ausgeführt; der PR-/Push-CI-Workflow führt sie ebenfalls aus. Die Qualitätsstrategie wird erst nach grüner Ausführung um die tatsächlich eingerichteten Gates ergänzt.

Die bisherige fachliche Angabe `contentVersion: "1"` wird in dieser Story aus Katalogschema, Validierung, Daten und sichtbarer Kartenansicht entfernt. Die redaktionelle Richtlinie wird bei der Umsetzung entsprechend korrigiert. Fachliche Inhaltsversionen werden erst in der späteren eigenen Backlog-Story eingeführt; die technische Katalog-Buildnummer ist davon getrennt.

Vertikale: Inhaltskatalog.

## Nicht-Ziele

- Fragenpools, Lernchecks und Fortschritt.
- Quellen oder Videos innerhalb der App laden oder einbetten.
- Weitere Lernkarten oder Lernpfad-Abschnitte anlegen.
- Inhaltliche Überschneidungen zwischen den Lernkarten erzeugen.
- Fachliche Inhaltsversionen einführen oder bei Quellen- oder Kartentextänderungen fortschreiben. Dies ist eine spätere Story im Backlog.

## Regeln für Einordnung und Anzeige

- Die Einordnung bezieht sich auf die konkrete Aussage, für die eine Quelle verwendet wird. Eine Originalveröffentlichung oder Eigendokumentation ist dafür primär; eine fremde Erklärung oder Bewertung ist sekundär. Bei gemischten oder unklaren Fällen wird die redaktionelle Entscheidung mit dem belegten Aspekt dokumentiert, statt allein aus dem bisherigen `type`-Feld abgeleitet.
- Die Überschrift „Primärquellen“ erscheint für jede Karte. „Sekundärquellen“ erscheint nur, wenn mindestens eine solche Quelle vorhanden ist; eine leere Gruppe wird nicht angezeigt.
- Innerhalb einer Gruppe gilt die redaktionell festgelegte Reihenfolge. Links öffnen externe Seiten nur nach bewusster Aktion; der Karteninhalt bleibt bei Linkausfall lesbar.

## Fachliche Prüfung während der Umsetzung

- Für jede Grundlagenkarte die Aspektabdeckung der Vorauswahl anhand der Originalseiten belegen und die endgültige, möglichst knappe Quellenmenge begründet festlegen. Eine Quelle darf genügen.
- Nur die Texte der sechs Grundlagenkarten gezielt anpassen, für die eine wichtige und belegte Perspektive sonst nicht zur Karte passt. Die Themenabgrenzung zu anderen Karten bleibt erhalten.

## Auswahl der CI-Werkzeuge

Vorrang haben verbreitete, erprobte und aktuell gepflegte Werkzeuge. Für das Format-Gate ist [Prettier](https://prettier.io/docs/cli) vorgesehen (`--check`, ohne Schreibzugriff in CI), weil es neben TypeScript und Konfigurationsdateien auch YAML-Workflows abdeckt. Für das Lint-Gate werden zuerst ESLint mit TypeScript-Anbindung und [Biome](https://biomejs.dev/) geprüft. Derzeit nennt [typescript-eslint](https://typescript-eslint.io/users/dependency-versions/) als unterstützten Bereich `>=4.8.4 <6.1.0`; das Repository verwendet TypeScript 7.0.2. [Biome dokumentiert](https://biomejs.dev/internals/language-support/) TypeScript-Unterstützung bis 5.9 und kein YAML-Format-Gate. Daraus folgt noch kein nachgewiesener Fehler am Projektcode, aber auch keine belegte Unterstützung für TypeScript 7. Die spätere Implementierung prüft die Kandidaten am echten Repository, bevor ein Werkzeug festgelegt oder installiert wird. Oxlint ist kein vorab gesetzter Standard.

Die ausgewählten Werkzeuge werden als festgeschriebene Entwicklungsabhängigkeiten aufgenommen und nicht in die Browser-App eingebunden. Vor der Aufnahme werden Nutzen, Wartung, Lizenz, transitive Abhängigkeiten, Schwachstellen und unerwünschte Netzwerk- oder Telemetriefunktionen in dieser Spec begründet und geprüft. Wenn weder ESLint-Anbindung noch Biome zuverlässig mit TypeScript 7 funktionieren, wird die Werkzeugentscheidung in der Spec erneut geklärt, bevor das Gate umgesetzt wird.

## Risiken und geplante Abnahme

- Für jede Grundlagenkarte wird festgehalten, welche Quelle Problem, Kernkonzept, Java-/Web-Einsatz und Grenze trägt und welche zusätzliche Perspektive später Fragen begründen kann. Eine zusätzliche Quelle ist nur bei einer echten Lücke nötig. Neue und ersetzte Quellen werden nach der [redaktionellen Richtlinie](../../content/editorial-policy.md) hinsichtlich fachlicher Eignung, Aktualität und Verfügbarkeit geprüft. Quelle, Prüftag, Unsicherheiten, Ersatzgründe und bewusste Auslassungen werden hier dokumentiert.
- Die Katalogvalidierung prüft bei allen 15 Karten die Einteilung, mindestens eine Primärquelle, höchstens zehn Quellen und Sprache `de` oder `en`. Die übrigen neun Karten erhalten nur dann eine Quellenänderung, wenn sie sonst die Primärquellenpflicht verletzen.
- Komponententests prüfen Primärquellen vor Sekundärquellen, eine fehlende Sekundärgruppe, das Suffix ` [DE]` und Links erst nach Kartenauswahl. Die Titel bleiben auch bei Ausfall einer externen Seite lesbar.
- Nach der Umsetzung gibt es kein Feld `contentVersion` im Katalogvertrag, keinen entsprechenden Validierungszwang und keine sichtbare Inhaltsversionsangabe. Die technische Katalog-Buildnummer kann bestehen bleiben.
- Im Browser werden alle sechs Grundlagenkarten und mindestens ein Beispiel mit beiden Quellengruppen sowie ein Beispiel ohne Sekundärquelle geprüft. Die gemeinsame Liste mit 15 Karten bleibt erhalten.
- Format- und Lint-Befehle scheitern bei einem gezielt fehlerhaften Beispiel und laufen auf dem bereinigten Repository in PR-/Push-CI sowie im Pages-Build grün. Neue Bibliotheken brauchen die hier begründete Freigabe und erfolgreiche Lizenz- und Sicherheitsprüfung.
- Die TypeScript-7-Kompatibilität des gewählten Linters wird mit den Projektdateien und der vollständigen Pflichtsuite nachgewiesen; eine bloß erfolgreiche Installation genügt nicht.

## Umsetzung und Nachweise

Die Umsetzung erfolgt später je Teil-Feature in der Reihenfolge RED → GREEN → REFACTOR:

| Teil-Feature | Geplanter RED-Nachweis | Geplanter GREEN- und REFACTOR-Nachweis |
| --- | --- | --- |
| Quellenvertrag und Katalogprüfung | Test verwirft fehlende Primärquelle, mehr als zehn Quellen oder ungültige Sprache noch nicht. | Vertrag, Daten und Validierung angepasst; `npm run validate:content` grün; unnötige Doppelungen entfernt. |
| Quellenansicht | Komponententest findet Gruppenfolge, optionale Sekundärgruppe oder ` [DE]` noch nicht. | Anzeige und Interaktion grün; einfache, zugängliche Struktur ohne zusätzliche Ladepfade. |
| Vorläufige Inhaltsversionsangabe entfernen | Test findet `contentVersion` noch im Vertrag beziehungsweise „Inhaltsversion“ in der Karte. | Feld, Anzeige und redaktionelle Pflicht entfernt; Katalog- und Komponententests grün. |
| Format und Lint | Befehle fehlen oder ein absichtlich fehlerhaftes Beispiel wird nicht abgewiesen. | Festgeschriebene Werkzeuge und CI-Gates eingerichtet; nach nötigen Korrekturen vollständige Pflichtsuite grün. |

Die tatsächlichen RED-Gründe, grünen Prüfungen, Quellenprüfung und lokale Browserabnahme werden während der Umsetzung hier festgehalten. Vorher wird kein Produktcode geändert.
