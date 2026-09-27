## Lernchecks für die ersten zwei Themen ohne Fragen

Vor der Umsetzung den Entwickler daran erinnern, den KI-Modell-Aufwand auf Hoch zu stellen.

Die ersten zwei Themen ohne Fragen in der aktuellen Katalogreihenfolge erhalten nutzbare Lernchecks:

1. „Fachsprache vereinheitlichen und Komplexität begrenzen“ (`domain-language-and-complexity`).
2. „Projektwissen und Fertigkriterien gezielt dokumentieren“ (`project-documentation-and-checklists`).

- Jedes der beiden Themen erhält einen quellengebundenen Pool mit mindestens 25 fachlich unterschiedlichen, gültigen Auswahlfragen und Erklärungen je Antwortoption. Die Fragen prüfen den Schwerpunkt des jeweiligen Themas und vertiefende Details seiner Quellen.
- Für neue Fragen gelten die [gemeinsamen Fragenregeln](../../content/question-authoring.md), einschließlich Quellenprüfung und unabhängiger fachlicher Prüfung. Vor der Integration liefert die KI dem Entwickler den dort geforderten kopierbaren Prüf-Prompt; beanstandete Fragen werden geklärt und nötigenfalls erneut geprüft.
- Lernende können beide Checks aus der Themenliste starten, beantworten und die Erklärungen und Quellenbezüge sehen. Browser-Tests prüfen den Start und einen vollständigen Ablauf exemplarisch, ohne jeden Fragenpool einzeln im Browser durchzuspielen.
- Die 16 bestehenden Fragenpools bleiben in Inhalt, stabilen IDs und sichtbarem Verhalten unverändert.

In derselben Story wechselt die Zuständigkeit für sämtliche Fragenpools und ihre Validierung von `topics` zu `learning-checks`. `topics` enthält danach keine Fragen und kennt keine Interna von `learning-checks`. `learning-checks` darf den kleinen öffentlichen Themenvertrag für ID und Quellen nutzen; `src/app` verbindet Themenauswahl und Lerncheck. Die bestehenden Lernchecks bleiben nach dem Umbau erreichbar.

Die bei diesem Umbau betroffenen Begriffe in „Themen“ und „Lernchecks“ werden im Glossar mit genau einem englischen Begriff geführt. Betroffene englische Bezeichner werden innerhalb dieser beiden Vertikalen vereinheitlicht, ohne zusätzliche Fachlogik zu ändern.

Vertikalen: Themen, Lernchecks (plus App und Shared bei Bedarf).

Dokumentation nach Umsetzung: `target-architecture` und `verticals-and-boundaries` auf die neue Zuständigkeit prüfen und aktualisieren; Produktstand und redaktionelle Richtlinie knapp auf den erreichten Stand bringen.

## Entscheidungen und Risiken

- Die 16 vorhandenen Pools werden ohne inhaltliche Änderung verschoben. `learning-checks` gibt der App eine kleine Abfrage nach Themen-ID; die Themenliste signalisiert die Auswahl nur über IDs. Der Themenvertrag enthält danach keine Fragen mehr.
- Der Start eines Checks, ein vollständiger Durchlauf und die Erklärung bleiben im Browser für alte und neue Themen nutzbar. Inhalte werden nicht allein durch einen erfolgreichen Datentest als fachlich geprüft betrachtet.
- Für beide neuen Themen sind vor Integration jeweils mindestens 25 geprüfte Fragen nötig. Die unabhängige externe KI-Prüfung führt der Entwickler mit dem vollständigen Prüf-Prompt aus. Beanstandungen werden vor Integration geklärt und gegebenenfalls erneut geprüft.
- Die Migration kann zyklische Importe und unbemerkte Änderungen an bestehenden Pools verursachen. Architekturtests und Vergleich von IDs/Inhalten sichern die Grenze.
- Keine neue Abhängigkeit. Keine Änderungen am persönlichen Lernfortschritt.
- Ein bestehender Browser-Integrationstest für Lernfortschritt liest den alten Fragenpool direkt. Der Test zieht nach `e2e/app/`, weil er App, Lerncheck und Lernfortschritt gemeinsam prüft. Für die Grenze von höchstens zwei Vertikalen pro Commit wird zuerst die neue Lerncheck-Version des bisherigen JSON-Pools mit der fachlichen Änderung committet; die vorübergehend verbleibende, ungenutzte Themen-Kopie hält den bisherigen Lernfortschritt-Test in diesem Zwischenstand lauffähig. Der zweite Commit entfernt diese Kopie und verschiebt den Test mit angepasstem Import nach `e2e/app/`. Beide Commits setzen die ausdrückliche manuelle Bestätigung sowie jeweils eine grüne Pflichtsuite und einen aktuellen Browsernachweis voraus.

## Quellenprüfung vor Implementierung

Prüftag: 2026-09-27. Geprüfte Originalquellen der beiden Themen:

| Thema und Aussage | Primärquelle | Grenze |
| --- | --- | --- |
| Fachsprache und abgegrenzter Kontext; Modell und Modulverantwortung | [Eric Evans, DDD Reference](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf) | Ein Beispiel aus Java/Web wird als Anwendung des Prinzips formuliert, nicht als wörtliche Vorgabe der Quelle. |
| Dokumenttypen nach Lern- und Arbeitszweck trennen | [Diátaxis](https://diataxis.fr/) | Diátaxis begründet keine allgemeine Pflicht zu einer bestimmten Dateistruktur oder zu `AGENTS.md`. |
| Gemeinsame Fertigdefinition und Qualitätsmaß | [Scrum Guide](https://scrumguides.org/scrum-guide.html) | Scrum-spezifische Aussagen bleiben auf Scrum begrenzt; projektspezifische Checklisten sind eine begründete Übertragung. |

Bei jeder neuen Frage werden Aussage, Ausschluss der falschen Optionen und Quellenlink einzeln geprüft. Fachlich nicht eindeutig belegbare Fragen werden verworfen.

Für das Projektwissen-Thema wurden zusätzlich die Originalseiten zu [Tutorials](https://diataxis.fr/tutorials/), [How-to guides](https://diataxis.fr/how-to-guides/), [Reference](https://diataxis.fr/reference/), [Explanation](https://diataxis.fr/explanation/) und [The map](https://diataxis.fr/map/) geprüft und als Themenquellen ergänzt. Sie tragen die jeweiligen Detailfragen direkter als die Diátaxis-Startseite.

Die unabhängige externe KI-Prüfung aller 50 Fragen beanstandete am 27.09.2026 DL17 (Vorbedingung statt belegter Nachbedingung/Invariante) sowie die PDF-Seitenlinks von DL19, DL20 und DL23. DL17 wurde fachlich auf Nachbedingung und Invarianten geändert; die Links wurden auf `#page=47`, `#page=48` und `#page=36` korrigiert. Die erneute unabhängige Prüfung dieser vier Fragen ergab „Alles ok!“. Die übrigen 46 Fragen wurden nicht beanstandet. Die Entwürfe wurden erst danach in den Lerncheck-Katalog eingebunden.

## Abnahme und Umsetzung

| Teil-Feature | RED | GREEN | REFACTOR / Nachweis |
| --- | --- | --- | --- |
| Fragenzuständigkeit und bestehende Pools | `npm test -- --run tests/verticals/learning-checks/questionCatalog.test.ts` fehlgeschlagen: Der öffentliche Lerncheck-Einstieg liefert noch keine Themen-IDs oder Fragenabfrage. Ein weiterer RED-Lauf scheiterte an der noch fehlenden Katalogvalidierung. | 16 Pools und Validierung verschoben; gezielte Tests grün. | Bestehende Fragen-IDs sind nur je Pool eindeutig; die Validierung prüft daher weiterhin je Pool und lässt die alten IDs unverändert. Themen und Lernchecks sind über ID und öffentliche Einstiege verbunden; Architekturprüfung grün. |
| Fragenpool Fachsprache | Der Katalogtest `offers a sourced pool for domain-language-and-complexity` war rot, weil der Pool fehlte. | 25 unabhängig geprüfte Fragen integriert; `npm run validate:content` grün (22 Tests). | Korrigierte Quellenstellen und Erklärungen nachgeprüft; keine Änderung an bestehenden Pools. |
| Fragenpool Projektwissen | Der Katalogtest `offers a sourced pool for project-documentation-and-checklists` war rot, weil der Pool fehlte. | 25 unabhängig geprüfte Fragen integriert; `npm run validate:content` grün (22 Tests). | Diátaxis-Detailquellen gezielt ergänzt; Fragen verweisen direkt darauf. |
| Browserablauf und Grenzen | `npx playwright test e2e/verticals/learning-checks/first-two.spec.ts --project=desktop-chromium` war rot: Beide neuen Startknöpfe fehlten. | Derselbe neue Ablauf auf Desktop und Mobil grün (4 Tests): Start beider Checks und vollständiger Durchlauf mit Erklärungen und Quellenlinks. | Der vertikalübergreifende Lernfortschritt-Test zieht im zweiten Commit nach `e2e/app/`. Alle 56 Browser-E2E-Tests auf Desktop und Mobil sind grün. |

## Prüfungen und lokaler Browsernachweis

- `npm run check` am 27.09.2026 grün: Format, Lint, Typprüfung, 85 Unit-/Komponententests, 22 Content-Tests, Architektur- und Lizenzprüfung sowie Produktionsbuild. Der Build meldet wegen des zusammengefassten JavaScript-Bundles mit 547 kB eine Größenwarnung; das Gate bleibt grün.
- `npm run test:e2e` am 27.09.2026 grün: 56 von 56 Chromium-Tests auf Desktop und Mobil, einschließlich der beiden neuen Lernchecks und der bestehenden Lernfortschritt-Abläufe.
- `npm audit --audit-level=high` am 27.09.2026 grün: 0 Schwachstellen. Es wurden keine Abhängigkeiten ergänzt.
- Lokaler Browser: Codex-In-App-Browser mit Chromium auf `http://127.0.0.1:4174/`. Beide neuen Themen zeigten in der Themenliste „Fragen starten“. Der erste Check öffnete Fragen mit drei Optionen; nach einer Antwort erschien die nächste Frage, und „Abbrechen“ führte zur Liste zurück. Der zweite Check ließ sich ebenfalls starten und zeigte eine quellengebundene Frage mit drei Optionen; Abbruch führte zurück zur Liste. Ergebnis: beide Starts und der einfache Antwort-/Abbruchablauf funktionieren. Der vollständige Durchlauf und die Quellenlinks sind zusätzlich in den Desktop- und Mobil-E2E-Tests grün.

Der Entwickler hat seine eigene manuelle Prüfung am 27.09.2026 ausdrücklich mit „Ja, es ist alles okay. Alles committen!“ bestätigt. Im ersten Commit bleibt eine ungenutzte Kopie von `foundationQuestions.json` unter `topics` für den unveränderten Lernfortschritt-Test bestehen. Pflichtsuite und lokaler Browserablauf werden vor jedem Commit erneut geprüft; vor dem letzten Commit wird diese Spec archiviert.

### Prüfung unmittelbar vor Commit 1

- Im Zwischenstand mit zwei Vertikalen (`topics`, `learning-checks`) ist `npm run check` vollständig grün: 85 Unit-/Komponententests, 22 Content-Tests, Architektur- und Lizenzprüfung sowie Build. `npm run test:e2e` meldet 56 von 56 grünen Desktop-/Mobiltests; `npm audit --audit-level=high` meldet 0 Schwachstellen.
- Codex-In-App-Browser mit Chromium auf `http://127.0.0.1:4174/`: Die beiden neuen Themen und der bestehende Check „Mensch und KI: Verantwortung bleibt menschlich“ lassen sich aus der Themenliste starten, zeigen Frage und drei Optionen und führen per „Abbrechen“ zur Liste zurück. Ergebnis: neuer und bisheriger Startablauf funktionieren im exakt für Commit 1 vorbereiteten Zwischenstand.
