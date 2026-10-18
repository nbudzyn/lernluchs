## Einmaliges Bestandsreview und Korrekturen: Hilfe

Die Vertikale `help` durch einen eigenen Review-Subagenten einmalig prüfen: Produktionscode unter `src/verticals/help/`, Tests unter `tests/verticals/help/` und `e2e/verticals/help/` getrennt bewerten.

- Maßstab: Wartbarkeit, Lesbarkeit, Verantwortlichkeiten, Duplikate, einfache Konzepte und Testqualität gemäß `docs/quality/code-review.md`; zusätzlich belegte Fehler und Datenschutzprobleme behandeln. Fachliche Inhalte und externe Quellen nur bei konkretem Verdacht prüfen.
- Alle nötigen Korrekturen im Bereich Hilfe umsetzen. Verhaltenskorrekturen mit RED → GREEN absichern, reine Refactorings mit passenden bestehenden Prüfungen. Neue Funktionalität gehört nicht zum Review.
- Abhängige Stellen nur gezielt zum Verständnis oder zur notwendigen Vertragsanpassung einbeziehen. Bereichsübergreifenden Änderungsbedarf vor einer Erweiterung klären; höchstens zwei fachliche Vertikalen pro Commit.
- Abnahme: Produktionscode und Tests getrennt bewertet, alle belegten Vorschläge umgesetzt oder konkret begründet abgelehnt, passende Prüfungen und bei produktrelevanten Änderungen ein aussagekräftiger lokaler Browserablauf dokumentiert. Kein künstlicher Änderungsbedarf bei einem Review ohne Funde.
- Einmalige Wartungsstory ohne neue Browserfunktion. Genau ein Review-Subagent für das Bestandsreview, keine zweite Reviewrunde nach Korrekturen; Lesegrenzen und Rückgabeformat des Reviewvertrags gelten.

## Ziel und Nicht-Ziele

Einmaliges Bestandsreview der Hilfe einschließlich ihrer Tests; belegte Korrekturen umsetzen. Keine neue Funktionalität, keine allgemeinen Umbauten außerhalb der Hilfe und keine neuen Abhängigkeiten.

## Betroffene Vertikalen und Entscheidungen

- Fachliche Vertikale: `help`. `topics` nur bei einem konkreten Verständnisbedarf lesend einbeziehen.
- Die Story ist ausreichend geklärt; keine offenen Umsetzungsentscheidungen.
- Genau ein Review des Bestands vor möglichen Korrekturen, entsprechend der ausdrücklichen Wartungsstory. Keine zusätzliche Reviewrunde nach Korrekturen.
- Verhaltenskorrekturen benötigen RED → GREEN; Refactorings passende bestehende Nachweise. Ohne belegte Funde keine künstlichen Code- oder Teständerungen.

## Risiken und Abnahme

- Produktionscode, Komponenten- und E2E-Tests getrennt auf Wartbarkeit, Verständlichkeit und Testqualität bewerten.
- Jeden belegten Vorschlag umsetzen oder mit konkretem Grund ablehnen und hier dokumentieren.
- Datenschutzgrenzen und den präsentierenden öffentlichen Vertrag der Hilfe erhalten.
- Prüfungen nach tatsächlichem Änderungsumfang; bei produktrelevanten Änderungen vollständige Pflichtsuite und aussagekräftiger lokaler Browserablauf.
- Manueller Test und ausdrückliche positive Nutzerfreigabe vor Archivierung und Commit erfolgt.

## Umsetzung und Nachweise

- Aktivierung: erste Backlog-Story vollständig und wortgetreu übernommen, Übernahme vor Entfernung geprüft. Basis `4aa28dd`, Branch `codex/review-help` im dauerhaften Codex-Worktree.
- Bestandsreview: genau ein eigener Review-Subagent hat Produktionscode einschließlich CSS und öffentlichem Einstieg, Komponententests und E2E-Tests getrennt bewertet. Keine belegten Produktionsfehler, Datenschutzprobleme oder notwendigen Produktionsrefactorings. Desktopdarstellung und mobiler Hilfeablauf sind sinnvoll abgedeckt.
- Einziger Vorschlag (mittel), umgesetzt: Die acht unabhängigen Texte der Komponenten-Inhaltsmatrix werden mit nichtwerfender `queryByText`-Abfrage und `expect.soft` einschließlich des erwarteten Texts als Fehlerkontext geprüft. Ein fehlender Text verhindert damit die Prüfung der übrigen Texte nicht mehr. Keine Vorschläge abgelehnt.
- Reine Testkorrektur ohne neue fachliche Anforderung oder Verhaltensänderung; kein RED → GREEN erforderlich. Bestehender Hilfe-Komponententest vor Korrektur grün: 1 Test, Exitcode 0.
- Abschließende Pflichtsuite nach der Testkorrektur: `npm run check` grün (Exitcode 0, 46,99 s), einschließlich Format, Lint, Typprüfung, Runner-Selbsttests, 157 Unit-/Komponententests, Inhaltsvalidierung (32 Prüfungen), Architektur einschließlich Vertikalzählung, Lizenzen und Produktionsbuild. `npm audit --audit-level=high`: keine Schwachstellen, Exitcode 0.
- `npm run --silent test:e2e`: 84 Tests bestanden, Exitcode 0, 930,92 s. Alle Testfälle waren abgeschlossen; der zu diesem Lauf gehörende Vite-Testserver hing beim Prozessabschluss. Nach Prüfung der Prozesskette gezielt nur diesen Server beendet; der ursprüngliche Runner erzeugte danach den grünen Abschlussbericht. Kein Wiederholungslauf.
- Lokaler Browsernachweis: Codex In-app-Browser unter `http://127.0.0.1:5274/`, schmale Ansicht. Hilfe über „Hilfe öffnen“ aufgerufen, alle neun Hinweise einschließlich Symbolen und Umbrüchen visuell geprüft; „Zur Themenliste“ stellt die Liste mit Schnellfilter und Hilfe-Schaltfläche wieder her. Ergebnis erfolgreich. Desktop- und Mobilbreite zusätzlich durch die E2E-Suite abgedeckt.
- Abschließender Diff: ausschließlich Hilfe-Testkorrektur und Story-Dokumentation, eine fachliche Vertikale (`help`); `git diff --check` grün. Keine neue Abhängigkeit, keine Änderung am Produktverhalten oder an fachlichen Inhalten.
- Manueller Test und ausdrückliche positive Nutzerfreigabe erfolgt. Spec zum Abschluss archiviert; kein Push durch Codex.
