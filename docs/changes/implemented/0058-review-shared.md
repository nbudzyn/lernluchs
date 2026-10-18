## Einmaliges Bestandsreview und Korrekturen: Shared

Den Produktionscode unter `src/shared/` und die zugehörigen Tests durch einen eigenen Review-Subagenten einmalig prüfen; Produktionscode und Tests getrennt bewerten. Fehlende eigene Tests ausdrücklich einordnen und bestehende Absicherung bei Verbrauchern berücksichtigen.

- Maßstab: Wartbarkeit, Lesbarkeit, Verantwortlichkeiten, Duplikate, einfache Konzepte und Testqualität gemäß `docs/quality/code-review.md`; zusätzlich belegte Fehler und Datenschutzprobleme behandeln.
- Fachliche Inhalte und externe Quellen nur bei konkretem Verdacht prüfen.
- Alle nötigen Korrekturen im Bereich Shared umsetzen; neue Funktionalität gehört nicht zum Review. Verhaltenskorrekturen mit RED → GREEN absichern, reine Refactorings mit passenden bestehenden Prüfungen.
- Abhängige Stellen nur gezielt zum Verständnis oder zur notwendigen Anpassung öffentlicher Verträge lesen beziehungsweise ändern. Keine weiteren Bereiche nebenbei einem Bestandsreview unterziehen. Bereichsübergreifenden Änderungsbedarf vor einer Erweiterung des Umfangs klären; die Commitgrenze von höchstens zwei fachlichen Vertikalen bleibt verbindlich.
- Abnahme: Produktionscode und Tests getrennt bewertet, alle belegten Vorschläge umgesetzt oder konkret begründet abgelehnt und passende Prüfungen dokumentiert. Kein künstlicher Änderungsbedarf bei einem Review ohne Funde.
- Dieses ausdrücklich beauftragte Bestandsreview ist eine einmalige Wartungsstory ohne neue Browserfunktion. Genau ein Review-Subagent je Story; keine zusätzliche Reviewrunde nach Korrekturen. Die gemeinsamen Lesegrenzen und das Rückgabeformat des Reviewvertrags gelten, der Prüfgegenstand ist hier der Bestand des genannten Bereichs.

## Ziel und Nicht-Ziele

Den vorhandenen gemeinsamen Typvertrag und seine Absicherung bewerten und alle nötigen Korrekturen umsetzen. Keine neue Funktion, keine vorsorglichen Abstraktionen und kein Bestandsreview anderer Bereiche. Die sechs anschließenden Bereichsstories bleiben im Backlog.

## Betroffene Bereiche und Entscheidungen

- Shared: `src/shared/question.ts` mit `AnswerOption` und `Question`; kein ausführbarer Produktionscode und keine eigenen Shared-Testdateien vorhanden.
- Bestehende Verbraucher und Tests der Lernchecks nur gezielt zur Einordnung des Vertrags lesen. Der öffentliche Reexport der Lernchecks und seine Nutzung durch App gehören zum Vertragskontext.
- Der ausdrückliche Auftrag erlaubt hier das Bestandsreview statt des sonstigen Reviewumfangs ab Story-Diff. Produktionscode und Tests werden innerhalb genau eines Subagentenreviews getrennt bewertet.
- Als einmalige Wartungsstory liefert diese Story keine neue Browserfunktion; die Browserwert-Regel für neue Funktionsstories wird hier nicht angewandt. Die dauerhaften Architektur- und Datenschutzvorgaben gelten unverändert.
- Vorhandene Grenzen prüfen, keine geplanten schärferen Abhängigkeitsregeln vorwegnehmen. Keine neuen Abhängigkeiten.

## Risiken und Abnahme

- Ein gemeinsamer Typ bildet nicht jede Laufzeitinvariante ab. Typvertrag und vorhandene Laufzeitvalidierung im Verbraucher unterscheiden; keine spekulative Verdopplung von Validierungslogik.
- Ein fehlendes eigenes Testverzeichnis ist allein kein Mangel bei reinen TypeScript-Typen. Belegte Lücken müssen konkrete ungedeckte Anforderungen benennen.
- Review bewertet Produktionscode und Tests getrennt und nennt entweder konkrete Funde mit Behandlung oder ausdrücklich keine belegbaren Verbesserungen.
- Verhaltensänderungen benötigen RED → GREEN. Bei unverändertem Produktcode genügt die passende inhaltliche Prüfung der Dokumentation; keine künstlichen RED-Tests oder vollständigen App-Testläufe.
- Bei produktrelevanten Korrekturen folgen Pflichtsuite und lokaler Browsernachweis nach `docs/quality/verification-strategy.md`; Commit erst nach ausdrücklich positiver manueller Freigabe.

## Umsetzung und Nachweise

- Aufteilung: Shared aktiviert; Hilfe, Impressum, Lernstand, Lernchecks, Themen und App als einzelne Folgestories im Backlog.
- RED → GREEN: entfallen, da das Review keinen Korrekturbedarf ergeben hat und Produktcode sowie Tests unverändert bleiben. Keine künstlichen Tests für reine Typdeklarationen angelegt.
- Genau ein Bestandsreview durch einen eigenen Subagenten mit eigenem Kontext gemäß Reviewvertrag durchgeführt. Basis: `c75213107635ab01032fdae1504214afeb150b68`; zusätzlich Story-Diff und neue aktive Spec einbezogen. Ausschließlich lesender Zugriff, keine Tests durch den Reviewer.
- Produktionscode: `AnswerOption` und `Question` sind kleine, verständliche Typdeklarationen ohne Laufzeitlogik, Abhängigkeiten oder persönliche Daten. Der Vertrag passt zu den gezielt geprüften Lerncheck-Verbrauchern; App verwendet den öffentlichen Reexport. Die Poolvalidierung verantwortet die fachlichen Laufzeitinvarianten. Keine belegbaren Funde.
- Tests: Keine eigenen Shared-Testdateien und keine belegte Shared-Testlücke. Verbrauchertests decken gültige Fragenpools, ausgewählte ungültige Daten sowie Darstellung und Verarbeitung der Optionen ab; Architekturtests sichern öffentliche Vertikaleinstiege. Kein Bedarf für zusätzliche Typ- oder Laufzeittests.
- Behandlung: Keine Vorschläge und keine Ablehnungen. Keine Produkt-, Test- oder Abhängigkeitsänderungen.
- Abschlussprüfung: Reihenfolge und Vollständigkeit der sechs Folgestories, unveränderter nachfolgender Backlog, lokale Dokumentverweise und Whitespace geprüft; Exitcode 0. Keine Unit-, E2E- oder Pflichtsuite ausgeführt, da ausschließlich Dokumentation geändert wurde. Das Review behauptet keinen aktuellen grünen Testlauf. Eine Browserprüfung ist für diesen unveränderten Produktstand nicht erforderlich.
- Abnahme: Shared-Bestandsreview abgeschlossen; Nutzerfreigabe erfolgt. Reine Dokumentationsänderung ohne erforderlichen manuellen Browsertest. Die abgeschlossene Spec wird mit der Backlog-Aufteilung archiviert.
