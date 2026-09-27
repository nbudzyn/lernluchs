# Lernchecks für die ersten 4 Themen ohne Fragen

Die ersten 4 Themen **ohne Fragen** erhalten ebenfalls nutzbare, quellengebundene Lernchecks. Bereits vorhandene Fragenpools bleiben
unverändert.

Je neuem Themenpool gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md): mindestens 25 fachlich unterschiedliche,
gültige Fragen mit Erklärungen und Quellenbezügen nach unabhängiger fachlicher Prüfung. Die Fragen prüfen den Schwerpunkt des Themas sowie
passende vertiefende Details seiner Quellen. Elementare Browser-Tests sichern die Nutzung exemplarisch, nicht für jedes Thema einzeln.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: Produktstand und redaktionelle Richtlinie auf den tatsächlich erreichten Fragenbestand prüfen und knapp
aktualisieren.

Refinement mit dem Entwickler am 27.09.2026: „Die ersten 4 Themen ohne Fragen“ meint die nächsten vier in der aktuellen Themenlisten-
Reihenfolge: `agent-skills-and-commands`, `spec-framework-selection`, `automation-value-and-gates` und `web-security-baseline`.
Jeder neue Pool erhält mindestens 25 quellengeprüfte, fachlich unterschiedliche Fragen. Der Entwickler bestätigte genau diesen Umfang.

## Ziel und Nicht-Ziele

Die vier Themen erhalten je mindestens 25 gültige Fragen über den bestehenden Lerncheck-Ablauf. Bestehende Fragenpools und persönlicher
Lernstand werden nicht geändert.

## Entscheidungen und Risiken

- Die Themenlisten-Reihenfolge bestimmt den Zuschnitt. Die vier Schwerpunkte bleiben fachlich getrennt.
- Für Fragen und eventuelle Quellenänderungen gelten die [Quellenregeln](../../content/source-selection.md) und die
  [redaktionelle Richtlinie](../../content/editorial-policy.md).
- Produkt- und Sicherheitsinformationen können sich ändern. Fragen werden gegen die Originalquellen geprüft; Aussagen über Funktionen,
  Versionen oder Wirksamkeit werden auf den belegten Umfang begrenzt.
- Der Entwickler führt gemäß Fragenregeln die unabhängige externe KI-Prüfung anhand eines vollständigen Prompts durch. Beanstandungen
  werden vor Integration korrigiert und erneut geprüft.
- Es sind keine neuen Abhängigkeiten vorgesehen. Die Zuständigkeiten folgen den
  [Vertikalgrenzen](../../architecture/verticals-and-boundaries.md) und den [dauerhaften Vorgaben](../../governance/durable-rules.md).

## Prüfbare Abnahme

- Genau die vier genannten Themen erhalten neue Lernchecks mit je mindestens 25 fachlich verschiedenen, gültigen Fragen.
- Alle bestehenden Fragenpools bleiben inhaltlich unverändert.
- Jede Frage besitzt genau eine richtige Antwort, zwei bis vier plausible falsche Antworten, Erklärungen und passende Quellenbezüge.
- Die unabhängige Prüfung aller Fragen ist abgeschlossen; Beanstandungen wurden beseitigt und erneut geprüft.
- Ein Browser-Test belegt einen neuen Pool exemplarisch. Pflichtsuite und lokaler Browserablauf sind grün.

## Quellenprüfung

Prüftag: 27.09.2026. Die Originalseiten der vorhandenen Themenquellen und der gezielt ergänzten Quellen wurden geöffnet.

| Thema und belegte Aussage | Primärquellen | Grenze / Unsicherheit |
| --- | --- | --- |
| Skills bündeln wiederholbare Anweisungen und Ressourcen; Aktivierung und Ergebnis lassen sich mit unterschiedlichen Anfragen prüfen; Datenzugriff und Werkzeugrechte liegen an einer eigenen Grenze. | [OpenAI Skills](https://developers.openai.com/plugins/concepts/skills), [Build skills](https://developers.openai.com/plugins/build/skills), [Skill-Evaluierung](https://developers.openai.com/blog/eval-skills), [Security & Privacy](https://developers.openai.com/plugins/guides/security-privacy) | Die Seiten beschreiben OpenAI-Plugins und Skills. Produktdetails werden nicht auf fremde Agentensysteme übertragen; ein Skill allein erzwingt keine Berechtigung. |
| OpenSpec, Spec Kit und Kiro bieten verschiedene Spec-Abläufe und Artefakte; ein Pilot kann deren Eignung für eine konkrete Änderung prüfen. | [OpenSpec](https://openspec.dev/), [OpenSpec spec-driven](https://openspec.dev/docs/schemas/spec-driven), [GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md), [Kiro Specs](https://kiro.dev/docs/specs/) | Funktionsumfang und Befehle können sich ändern. Ein Framework belegt keine fachliche Korrektheit; die Fragen vermeiden unbelegte Qualitätsvergleiche. |
| Wiederholbare Agentenaufgaben brauchen klaren Auftrag, Prüfkriterien, Werkzeuggrenzen und gezielte Freigaben vor sensiblen Aktionen. | [OpenAI Guardrails and human review](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals), [GitHub Copilot task guidance](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) | Die bisherige [Agent-Builder-Sicherheitsseite](https://developers.openai.com/api/docs/guides/agent-builder-safety) bezeichnet Agent Builder als auslaufend. Sie wird für neue Fragen durch die aktuelle SDK-Anleitung ersetzt; konkrete Freigaberegeln sind kontextabhängig. |
| Web- und LLM-Risiken betreffen verschiedene Angriffsflächen; Zugriffskontrolle, Konfiguration, Injection, Prompt Injection und Agentenrechte werden passend zur Anwendung geprüft. | [OWASP Web Top 10:2025](https://top10.owasp.org/2025/), [A01 Zugriffskontrolle](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/), [A02 Konfiguration](https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/), [A05 Injection](https://top10.owasp.org/2025/A05_2025-Injection/), [OWASP LLM Risks](https://genai.owasp.org/llm-top-10/), [OWASP Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), [OWASP Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), [MDN security guides](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides) | Die LLM-Übersicht ist als Archiv beschriftet; für konkrete Risiken tragen die spezifischen OWASP-Seiten die Aussagen. Eine Top-10-Liste ist keine vollständige Prüfung einer bestimmten Anwendung. |

Bewusst ausgelassen werden Benchmark- und Einsparquoten, pauschale Sicherheitsgarantien sowie versionsabhängige Produktvergleiche ohne direkten Beleg.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Vier neue Fragenpools | `npx vitest run tests/verticals/learning-checks/nextFourMissingQuestionPools.test.ts` am 27.09.2026: fünf Katalogtests rot; 27 statt 31 Pools und die vier neuen Pools fehlen. Vier weitere Entwurfs-Validierungen sind grün. | Vier Pools mit je 25 Fragen im öffentlichen Katalog; `npx vitest run tests/verticals/learning-checks/nextFourMissingQuestionPools.test.ts tests/verticals/topics/topics.test.ts` grün (27 Tests). `npm run validate:content` grün (35 Tests). | Antwortdistraktoren auf eindeutige, plausible Alternativen überarbeitet und auffällige Absolutformulierungen entfernt; alte feste Katalogzahl auf 31 aktualisiert, ohne frühere Fragen zu ändern. |
| Gezielte Quellen | `npx vitest run tests/verticals/topics/topics.test.ts -t 'links the focused source'`: zuerst vier, nach Erweiterung drei Quellen-Tests rot. | Sieben gezielte Quellenprüfungen und die ganze Themen-Testdatei grün (18 Tests). | Auslaufende Agent-Builder-Seite durch aktuelle SDK-Anleitung ersetzt; keine weitere strukturelle Änderung. |
| Browserablauf | `npx playwright test e2e/verticals/learning-checks/next-four-missing.spec.ts --project=desktop-chromium` rot: Startknopf des Skills-Themas fehlt. | `npx playwright test e2e/verticals/learning-checks/next-four-missing.spec.ts` grün auf Desktop und Mobilgerät (2 Tests). Lokale Probe im Codex In-App-Browser am 27.09.2026: Skills-Pool gestartet, fünf Fragen beantwortet, Auswertung mit Quellenlinks angezeigt und zur Themenliste zurückgekehrt. | Browser-Test auf den vollständigen Fünf-Fragen-Ablauf und Quellenlink konzentriert; kein weiterer Umbau nötig. |

Der vollständige [Prüf-Prompt](next-four-missing-learning-checks/review-prompt.md) mit 100 Entwürfen wurde dem Entwickler für die
unabhängige externe KI-Prüfung bereitgestellt. Die Erstprüfung beanstandete `SF07` (optionales `design.md` im OpenSpec-Schema) und
`AV02` (Dateihinweis war ebenfalls richtig). Beide Fragen wurden präzisiert und mit dem
[Korrektur-Prompt](next-four-missing-learning-checks/review-corrections.md) erneut unabhängig geprüft. Rückmeldung des Entwicklers:
„Keine Beanstandungen“. Anschließend wurden die Fragen in den öffentlichen Katalog eingehängt.

Pflichtsuite am 27.09.2026: `npm run check` grün (Format, Lint, Typen, 112 Unit-/Komponententests, 35 Inhaltsprüfungen,
Architekturregeln, Lizenzprüfung und Produktions-Build). `npm run test:e2e` grün (64 Desktop-/Mobiltests).
`npm audit --audit-level=high`: keine Schwachstellen ab „high“. Der Entwickler bestätigte nach eigenem manuellem Test am
27.09.2026 ausdrücklich: „Ist abgenommen. Commit!“

Abschlussprüfung unmittelbar vor dem Commit am 27.09.2026: `npm run check` erneut grün (112 Unit-/Komponententests,
35 Inhaltsprüfungen und weitere Pflichtprüfungen), `npm run test:e2e` erneut grün (64 Tests),
`npm audit --audit-level=high` ohne Schwachstellen. Codex In-App-Browser: Skills-Lerncheck aus der Themenliste gestartet,
fünf Fragen beantwortet, Auswertung mit Quellenlinks angezeigt und zur Themenliste zurückgekehrt; der Ablauf war fehlerfrei.
