## Lernchecks für alle Themen

Initial den Entwickler erinnern: KI-Model-Aufwand auf Hoch stellen

Die vier Themen des aktuellen Katalogs ohne Fragenpool erhalten quellengebundene Auswahlfragen:

- „Kontext und Vertrauensgrenzen für Coding-Agenten“
- „Geheimnisse und sensible Daten beim KI-Einsatz schützen“
- „KI-generierte Änderungen prüfen und übernehmen“
- „Git-Commits klein und nachvollziehbar halten“ (ohne Lernpfad)

Für jedes dieser Themen bleiben nach der unabhängigen fachlichen Prüfung mindestens 25 gültige, fachlich unterschiedliche Fragen. Die
Fragen prüfen den jeweiligen Schwerpunkt und vertiefende Details der zugeordneten Quellen. Beim Git-Thema prüfen sie insbesondere die
Auswahl logisch zusammengehöriger Änderungen, den Einsatz der Staging Area und die Grenzen einer bloßen Größenregel. Die fachlichen
Schwerpunkte der vier Themen bleiben voneinander und von den übrigen Themen abgegrenzt; Fragen wiederholen keine Aussagen eines anderen
Themas unter anderem Namen.

Die zwölf bereits vorhandenen Fragenpools bleiben unverändert. Bei der Quellenprüfung dürfen die vier betroffenen Themen und ihre Quellen
gezielt sachlich korrigiert oder ergänzt werden, wenn dies für eindeutige, belegte Fragen oder zur Vermeidung fachlicher Überschneidungen
nötig ist. Solche Änderungen werden begründet und fachlich geprüft.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md).

Die vorhandenen Auswahlchecks stehen nach Ergänzung für alle vier Themen zur Verfügung, einschließlich Erklärung, Quellenlink und
Wiederholung. Browser-Tests zeigen den Lernnutzen exemplarisch für ein Thema des dritten Lernpfads und für das Thema
ohne Lernpfad; sie hängen nicht von einem bestimmten zufällig gezogenen Fragensatz ab.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Dass alle Themen des aktuellen Katalogs Fragen haben, knapp im Produktstand und in der redaktionellen
Richtlinie ergänzen.

## Risiken und Abnahme

- **Fachliche Richtigkeit und Abgrenzung:** Jede neue Frage einschließlich aller Antwortoptionen, Erklärungen und Quellenbezüge wird gegen die Originalquellen geprüft. Die vier Pools decken unterschiedliche Schwerpunkte ab; strittige Aussagen werden geklärt oder verworfen. Nötige Korrekturen an den vier Themen und ihren Quellen werden mit Grund und Prüftag dokumentiert. Für die Umsetzung gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md).
- **Unabhängige Prüfung:** Vor der Integration erhält der Nutzer den dort verlangten kopierbaren Prüf-Prompt mit allen Fragen der betroffenen Themen. Beanstandungen werden geklärt und korrigierte Fragen erneut unabhängig geprüft. Danach verbleiben mindestens 25 gültige Fragen je neuem Pool.
- **Bestehende Inhalte:** Die zwölf vorhandenen Fragenpools bleiben unverändert. Katalog- und Fragentests prüfen alle 16 Themen, eindeutige IDs innerhalb der Pools, kollisionsfreie neue IDs, vollständige Optionen und Erklärungen sowie gültige Quellenbezüge. Zwischen älteren Pools gibt es bereits gleiche Kurz-IDs; diese Story ändert sie nicht.
- **Lernnutzen im Browser:** Für ein Thema des dritten Lernpfads und das Git-Thema ohne Lernpfad lassen sich Lernchecks starten, beantworten und wiederholen; Ergebnis, Erklärungen und Quellenlinks sind zugänglich. Browser-Tests prüfen diese Abläufe ohne Annahmen über die zufällige Fragenauswahl.
- **Umfang und Architektur:** Die Änderung betrifft höchstens Themen und Lernchecks; App und Shared werden nur bei Bedarf zur Komposition beziehungsweise für gemeinsame Datentypen angepasst. Neue Abhängigkeiten sind nicht vorgesehen.

## Umsetzung und Nachweise

Für jeden der vier neuen Fragenpools wird vor der Implementierung ein fachlich aussagekräftiger fehlschlagender Test ausgeführt (RED), danach die kleinste Änderung bis zum Bestehen ergänzt (GREEN) und bei grüner Suite überarbeitet (REFACTOR). Die konkreten RED-Gründe, Ergebnisse und Quellenprüfungen werden hier während der Umsetzung festgehalten.

| Teil-Feature | RED | GREEN und REFACTOR | Fachliche Prüfung und Abnahme |
| --- | --- | --- | --- |
| Kontext und Vertrauensgrenzen | `remainingQuestionPools.test.ts -t coding-agent-context-and-trust-boundaries` schlug fehl: `questions` fehlten. | 25 Fragen `CT01`–`CT25` ergänzt; gezielter Test grün. Inhalt und Ablenkungen gegen die Quellen nachbearbeitet. | Eigene Quellenprüfung erfolgt; unabhängige Prüfung ohne Beanstandung. |
| Geheimnisse und sensible Daten | `remainingQuestionPools.test.ts -t protect-secrets-and-sensitive-data-with-ai` schlug fehl: `questions` fehlten. | 25 Fragen `PS01`–`PS25` ergänzt; gezielter Test grün. | Eigene Quellenprüfung erfolgt; unabhängige Prüfung ohne Beanstandung. |
| KI-generierte Änderungen prüfen | `remainingQuestionPools.test.ts -t review-and-accept-ai-generated-changes` schlug fehl: `questions` fehlten. | 25 Fragen `RV01`–`RV25` ergänzt; gezielter Test grün. Doppelte oder nicht direkt belegte Fragenschwerpunkte überarbeitet. | Eigene Quellenprüfung erfolgt; unabhängige Prüfung ohne Beanstandung. |
| Git-Commits | `remainingQuestionPools.test.ts -t focused-git-commits` schlug fehl: `questions` fehlten. | 25 Fragen `GC01`–`GC25` ergänzt; gezielter Test grün. Wiederholte Patch-Frage ersetzt. | Eigene Quellenprüfung erfolgt; `GC18` und `GC23` korrigiert, Nachprüfung ohne Beanstandung. |
| Browserabläufe und Katalogvollständigkeit | Die vier RED-Tests wiesen zugleich fehlende Startmöglichkeiten nach. | Katalogtests: 28 bestanden. Neue Browser-Tests: 6 bestanden, Desktop- und Smartphone-Chromium. | Lokale manuelle Browserprüfung erfolgt; Nutzer hat das Ergebnis nach eigenem Test ausdrücklich bestätigt und den Commit freigegeben. |

## Quellenprüfung

Am 27.09.2026 wurden die Originalseiten geöffnet und auf Erreichbarkeit, Aktualität und die verwendeten Aussagen geprüft:

- [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) trägt direkte und indirekte Injection, Beispiele, Grenzen promptbasierter Abwehr sowie Rechtebegrenzung, Freigabe und Kontexttrennung.
- [GitHub: Risiken und Gegenmaßnahmen des Copilot Cloud Agent](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations) trägt die konkreten Kontrollen für Auslösung, Branch, Kommentare, PR-Review und Workflow-Freigabe.
- [OWASP LLM02:2025 Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/) trägt Datenkategorien, Ein- und Ausgaberisiken, Bereinigung, Zugriff und Transparenz.
- [GitHub: API-Zugangsdaten schützen](https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure) trägt Wahl der Authentifizierung, geringste Rechte, sichere Ablage, Secret Scanning und Rotation.
- [GitHub: KI-generierten Code prüfen](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code) trägt Funktions-, Kontext-, Qualitäts-, Abhängigkeits- und menschliche Prüfung.
- [Pro Git: Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging) und [git-commit-Referenz](https://git-scm.com/docs/git-commit) tragen logische Changesets, Index, Patch-Auswahl und Commit-Optionen.

Keine Themenquelle wurde ergänzt oder ersetzt; die vier Thementexte blieben unverändert. Bewusst ausgelassen sind Garantien gegen Prompt Injection, anbieterspezifische Zusagen zur Speicherung von KI-Eingaben und ungesicherte Größenregeln für Commits. Plausibilität der Ablenkungen und fachliche Trennung wurden mit dem vollständigen Prompt unabhängig geprüft; die beiden beanstandeten Fragen wurden korrigiert und ohne weitere Beanstandung nachgeprüft. Der Prompt wird außerhalb von Git aus dem aktuellen Fragenstand erzeugt.

## Prüfstand und lokale Browserabnahme

- `npm run check` grün: Format, Lint, Typen, 82 Unit-/Komponententests, 19 Inhaltsprüfungen, Architektur, Lizenzen und Produktionsbuild.
- `npm run test:e2e` nach Korrektur erneut grün: 46 Tests auf Desktop- und Smartphone-Chromium. Ein bestehender Locator für das Git-Thema wurde nach dessen neuem Fragebutton auf den exakten Themennamen eingeschränkt.
- `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit.
- Lokaler Codex In-app-Browser, Chromium, `http://127.0.0.1:4173/`: Lerncheck „Kontext und Vertrauensgrenzen“ gestartet, fünf Antworten gegeben und Ergebnis mit richtiger sowie gewählter falscher Erklärung und Quellenlinks geprüft. Das Git-Thema ohne Lernpfad gestartet, fünf richtige Antworten gegeben, „Lerncheck bestanden“ und lokale Speicherung gesehen, danach einen neuen Durchlauf gestartet. Die Abläufe funktionierten. Dieser manuelle Test markierte das Git-Thema im lokalen Browser als gelernt.

Der aus allen 100 neuen Fragen erzeugte kopierbare Prüf-Prompt liegt außerhalb von Git. Die unabhängige externe KI-Prüfung durch den Nutzer beanstandete `GC18` (Ausnahmen zu erneutem Staging) und `GC23` (nicht belegter „Grund“ der Commit-Nachricht). `GC18` ist nun ausdrücklich auf `git commit` ohne `-a` und ohne Pfadangabe nach weiterem Bearbeiten einer zuvor gestagten Datei begrenzt; `GC23` fragt nur noch nach dem belegten Beschreiben der Änderungen. Der gezielte Fragenpool-Test ist danach grün. Die unabhängige Nachprüfung dieser beiden korrigierten Fragen ergab laut Rückmeldung des Nutzers keine Beanstandungen. Der Nutzer bestätigte anschließend nach eigenem manuellen Test das Ergebnis ausdrücklich mit „OK. Du kannst alles committen.“
