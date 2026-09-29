## Lernchecks für 5 Themen ohne Fragen

5 von den noch 28 Themen ohne Fragen erhalten ebenfalls nutzbare, quellengebundene Lernchecks. Vor der Aktivierung wird diese Story bei
Bedarf in kleinere, fachlich zusammenhängende und im Browser einzeln abnehmbare Stories aufgeteilt. Bereits vorhandene Fragenpools bleiben
unverändert.

- Die ersten 5 Themen in Reihenfolge der Liste verwenden, die keine Fragen haben.

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

Abgrenzung:

- Keine Fragen bei Themen ändern, die schon Fragen haben
- Die weiteren Themen (über die fünf hinaus) kommen später

Refinement-Entscheidung: Die fünf Themen bleiben eine Story. Der Entwickler führt die unabhängige KI-Prüfung mit dem von der KI
vorbereiteten Prompt aus und meldet beanstandete Fragen-IDs zurück.

## Konkretisierung und Abnahme

Betroffene Themen in der bestehenden Listenreihenfolge: `open-knowledge-format`, `goal-discovery-and-stop-criteria`,
`design-and-legacy-specification`, `standards-and-constraint-rationale`, `llm-fallibility-and-counterchecks`.
Die Themen- und Lernchecks-Vertikale dürfen geändert werden; App und Shared nur bei Bedarf. Bestehende Fragenpools bleiben unverändert.
Keine neue Abhängigkeit ist vorgesehen.

- Für jede der fünf IDs ist aus der Themenliste ein Lerncheck startbar. Er zeigt fünf unterschiedliche Fragen, Antwortoptionen und danach
  die Erklärungen mit bewusst zu öffnenden Quellenlinks. Abbruch führt zur Themenliste zurück.
- Jeder neue Pool enthält nach unabhängiger Prüfung mindestens 25 fachlich unterschiedliche Fragen. Alle IDs sind stabil und eindeutig,
  jede Frage hat genau eine richtige unter drei bis fünf plausiblen Antworten, und jede Option hat Erklärung und belegten Quellenbezug.
- Katalogvalidierung und exemplarische Browser-Tests prüfen die Nutzbarkeit. Der bestehende Fragenbestand wird nicht verändert.
- Nach fertiger Umsetzung werden Produktstand und redaktionelle Richtlinie auf den tatsächlichen Bestand aktualisiert.

## Quellenübersicht vor dem Coding

Geprüft am 27.09.2026. Die Fragen werden vor ihrer Aufnahme einzeln gegen die Originalstellen geprüft; zusätzliche oder ersetzte Quellen
werden bei Bedarf hier begründet und in der Themen-Vertikale ergänzt.

| Thema | Primärquelle und tragender Bereich | Grenze oder Unsicherheit |
| --- | --- | --- |
| OKF | [Open Knowledge Format v0.2](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md): Aufbau eines Bundles, Metadaten, Provenienz und Lebenszyklus. Diese konkrete Spezifikation wurde für die vertiefenden Fragen zusätzlich zur vorhandenen Repository-Quelle aufgenommen. | Die Spezifikation kann sich ändern. Produktbezogene Wirkungsbehauptungen sind daraus nicht ableitbar. |
| Zielklärung | [GitHub Docs: Best practices for using Copilot to work on tasks](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results): abgegrenzte Aufgaben, Akzeptanzkriterien, betroffene Dateien sowie Recherche und Planung. Ergänzt wurden die amtlichen [Discovery-](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works), [Story-](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories) und [Nutzenmessungsregeln](https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits) des GOV.UK Service Manual, weil die vorhandene Copilot-Seite Stoppkriterien und Nutzenmessung nicht ausreichend trägt. | Die GitHub-Quelle beschreibt Copilot cloud agent; das Service Manual öffentliche Dienste. Übertragungen auf Java-/Web-Änderungen bleiben konkrete Beispiele, keine universellen Gesetze. |
| Legacy-Spezifikation | [From Black Box to Blueprint](https://martinfowler.com/articles/black-box-to-blueprint.html): beobachtete Oberflächen, Daten und Logik zusammenführen, Herkunft erhalten und Menschen validieren lassen. | Ein berichtetes Praxisbeispiel, kein allgemeingültiges Verfahren oder Wirksamkeitsnachweis. |
| Standards | [OWASP ASVS](https://owasp.org/projects/asvs): Zweck und Versionierung; ergänzt um die offiziellen [Versionshinweise](https://github.com/OWASP/ASVS/blob/master/README.md), [Geltungsbereich](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x03-What-is-the-ASVS.md), [Prüfregeln](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x04-Assessment_and_Certification.md) und [Änderungen zu Version 4](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x05-For-Users-Of-4.0.md), weil die vorhandene Projektseite die Auswahl und Grenzen nur knapp erklärt. | Die Projektseite bezeichnet 5.0.0 im Seitenkopf uneinheitlich; der Repository-Leitfaden nennt 5.0.0 als stabile Version und master als laufenden Stand. Versionsbezogene Fragen verweisen auf den Leitfaden. |
| LLM-Fehlbarkeit | [NIST AI RMF: Generative AI Profile](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=958388): Konfabulationen, Prüfung von Quellen und Zitaten und risikobezogene Messung. Für mögliche Zustimmung zulasten der Wahrheit wurde zusätzlich die [Anthropic-Studie zu Sycophancy](https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models) aufgenommen. | Allgemeines Risikoprofil und eine Studie bestimmter Modelle; keine Garantie für konkrete Modellantworten oder Prüfmethode. |

## Risiken und Prüfweg

- Die Mindestzahl von 25 Fragen je Thema darf nicht durch Umformulierungen derselben Aussage erreicht werden. Vor der Integration werden
  Fragen und Distraktoren fachlich geprüft; mehrdeutige oder schwach belegte Fragen werden gestrichen oder überarbeitet.
- Einige vorhandene Themenquellen sind für die ganze thematische Breite möglicherweise zu eng. Fehlende Aspekte werden durch gezielte
  Primärquellen nach den Quellenregeln ergänzt, nicht durch unbelegte Antworterklärungen.
- Für die unabhängige externe KI-Prüfung wird ein kopierbarer Prompt mit allen Fragen, IDs, Optionen, Erklärungen und Quellen-URLs
  erstellt. Der Entwickler führt ihn aus und meldet beanstandete IDs. Korrekturen werden erneut unabhängig geprüft.
- Das Ergebnis wird erst nach der externen Prüfung in den öffentlichen Fragenkatalog eingebunden. Ein Commit erfolgt erst nach grüner
  Pflichtsuite, lokalem Browsernachweis und ausdrücklicher positiver manueller Prüfung des Entwicklers.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR und Prüfungen |
| --- | --- | --- | --- |
| Fünf neue Lernchecks | `npx vitest run tests/verticals/learning-checks/questionCatalog.test.ts` am 27.09.2026: 6 fachlich erwartete Fehler. Der Katalog enthält 18 statt 23 Pools; für jede der fünf neuen IDs fehlt der Pool. 9 bestehende Tests bestanden. Der gezielte Chromium-E2E-Test `five-new-learning-checks.spec.ts` scheiterte ebenfalls wie erwartet zweimal beim Start: Die Buttons für OKF und Standards fehlen noch. | Nach der unabhängigen Prüfung 125 Fragen in fünf Pools eingebunden. Katalogtest: 15/15 grün. Exemplarische OKF- und Standards-Abläufe: 4/4 grün in Desktop- und Smartphone-Chromium. | Fragen in eigenem Modul geordnet, veraltete OKF-Erwartung im bestehenden Browser-Test und Bestandszahlen in Produktstand und redaktioneller Richtlinie aktualisiert. `npm run check`: 90/90 Unit-Tests, 27/27 Inhaltsprüfungen, Architektur, Lizenzen, Typen, Lint, Format und Build grün. `npm run test:e2e -- --output=test-results/e2e-full`: 60/60 grün. `npm audit --audit-level=high`: 0 Schwachstellen. `git diff --check`: grün. |

Unabhängige fachliche Prüfung: Der Entwickler führte den vollständigen Prompt mit allen 125 Fragen, Optionen, Erklärungen und Quellen-URLs aus `test-results/add-five-learning-checks-review.md` extern aus und meldete am 27.09.2026 keine Beanstandungen.

Lokaler Browsernachweis am 27.09.2026: Chromium mit Desktop- und Smartphone-Viewport gegen die lokal gestartete Vite-App. Aus der Themenliste wurde der Standards-Lerncheck gestartet und abgebrochen; der OKF-Lerncheck wurde mit fünf Antworten abgeschlossen, Ergebnis, Erklärungen und Quellenlink wurden angezeigt. Die vollständige Browser-Suite einschließlich bestehender Abläufe war anschließend grün. Der Entwickler bestätigte nach eigenem manuellem Test am 27.09.2026 ein positives Ergebnis.

Unmittelbarer Browsercheck vor dem Commit am 27.09.2026: Codex In-app Browser gegen `http://127.0.0.1:5173/`. OKF aus der Themenliste gestartet, fünf verschiedene Fragen beantwortet und die Ergebnisansicht mit richtigen und gewählten Antworten, Erklärungen und Quellenlinks geprüft. Ergebnis: erfolgreich. Zuvor waren `npm run check` (90 Unit-Tests, 27 Inhaltsprüfungen und alle weiteren Gates), 60 Chromium-E2E-Tests und `npm audit --audit-level=high` grün.
