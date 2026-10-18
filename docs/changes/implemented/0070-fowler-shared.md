# Fowler-Refactorings: Shared

Als Entwickler möchte ich versehentliche Änderungen gemeinsam genutzter Fragen
verhindern. Mittlere Priorität: Mutable Data im Vertrag
`src/shared/question.ts` (`Question`, `AnswerOption`, `options`).

- Konkretes Refactoring: Felder und verschachtelte Optionsarrays unveränderlich typisieren. Zusammen mit den unveränderlichen Poolzugriffen der Lernchecks-Story abstimmen; Mischfunktionen akzeptieren unveränderliche Eingaben und erzeugen neue Arrays.
- Risiken: Alle Verbraucher und Testdaten sind vom Typvertrag betroffen. Oberflächliches `readonly` genügt nicht für verschachtelte Daten; TypeScript bietet allein keine Laufzeitabsicherung.
- Abnahme: Verbraucher kompilieren ohne Mutation der Originaldaten; Auswahl und Mischen bleiben unverändert. Passende Prüfungen und genau ein abschließendes Subagentenreview gemäß Reviewvertrag. Keine Fachlogik nach Shared verlagern; bereits in der Lernchecks-Story erledigte Vertragsteile nicht doppelt umsetzen.

## Ziel und Abgrenzung

Der gemeinsame Fragevertrag schützt sämtliche Felder, Optionsarrays und Optionsfelder auf TypeScript-Ebene. Lernchecks nehmen unveränderliche Pools entgegen; Mischen arbeitet weiterhin mit neuen Arrays. Frageninhalte, Bewertung, Speicherung und sichtbares Verhalten bleiben erhalten. Keine Laufzeit-Freeze-API, neue Abhängigkeit oder Fachlogik in Shared.

## Umfang, Entscheidungen und Risiken

- Shared, App und eine fachliche Vertikale: Lernchecks, einschließlich ihrer Tests.
- Ausgangsstand: `94af87be15ebc5d8a2afb3ebf70296bc549b0fea`. Separater temporärer Worktree für parallele Arbeit, Branch `codex/fowler-shared`.
- Am Ausgangsstand sind Poolzugriff und Mischfunktionen noch mutable typisiert. Diese Story übernimmt nur die nötigen unveränderlichen Eingabeverträge; weitere Lernchecks-Refactorings bleiben dort.
- Keine zusätzliche Laufzeitabsicherung: `readonly` schützt typisierte Verbraucher, keine untypisierten oder ausdrücklich gecasteten Zugriffe. Gefrorene Testdaten prüfen die mutationsfreie Verarbeitung.
- Abnahme: Typprüfung sichert den tiefen Vertrag, ein Lerncheck mit gefrorenen Eingaben wählt fünf verschiedene Fragen und mischt Optionen ohne Änderung der Originale. Bestehende Pflichtsuite und lokaler Browserablauf sichern Verhalten.
- Manueller Browserablauf: Thema öffnen, Lerncheck starten, fünf Antworten geben, Ergebnis und Rückweg prüfen.
- Ergänzender ausdrücklicher Auftrag: Den wiederholt am Zeitlimit scheiternden Windows-Prozesstest `serializes real Windows hook processes and preserves an interrupted story` entfernen. Die übrigen Schutztests und die Schutzimplementierung bleiben erhalten; der echte konkurrierende PowerShell-Prozessablauf ist dadurch nicht mehr automatisiert abgedeckt.

## Umsetzung und Nachweise

- RED: Typprüfung vor Implementierung fehlgeschlagen (Exitcode 1): mutable Frage-/Optionsfelder und Arrays erfüllen den unveränderlichen Vertrag nicht; Lerncheck akzeptiert keine readonly Eingabe.
- GREEN: Sämtliche Felder in `Question` und `AnswerOption` sowie `options` readonly; Poolzugriff, Validierung, Mischung und App akzeptieren readonly Fragenarrays. Mischung behält ihre Kopien bei. Lokal erzeugte Validator-Fixtures verwenden `satisfies Question` und bleiben für Negativfälle bearbeitbar.
- Typprüfung erfolgreich; gezielter Silent-Runner: 25 Tests in vier Dateien bestanden, 4,38 s, Exitcode 0. Der neue Shared-Typtest wird durch die Typprüfung geprüft; Vitest allein ersetzt diesen Nachweis nicht. Vollständig gefrorene Lerncheck-Fixtures sichern die unveränderte Verarbeitung ab.
- Genau ein fokussiertes Subagentenreview gegen den Ausgangsstand einschließlich beider neuen Dateien und unmittelbarer Verbraucher: keine belegbaren Fehler oder sinnvollen weiteren Refactorings; keine Vorschläge abzulehnen.
- Abschließende Prüfungen: Format, Lint, Typprüfung, 11 Runner-Selbsttests, Inhaltsvalidierung, Architekturprüfung einschließlich Vertikalzählungs-Selbsttests, Lizenzprüfung und Produktionsbuild erfolgreich. Audit: keine bekannten Schwachstellen, Exitcode 0. Diff ohne Whitespacefehler. Änderungen betreffen eine fachliche Vertikale; noch keine neuen Commits zur Commitprüfung vorhanden.
- Vollständige Unit-Suite zunächst 163/165 grün (133,87 s); Zeitlimits in lokalen Servertests und Windows-Hook-Prozesstest. Erneuter vollständiger Lauf mit einem Worker: 164/165 grün (131,74 s); Servertests grün, unveränderter Windows-Hook-Prozesstest weiterhin Zeitlimit und Aufräumfehler. Isolierter Lauf desselben Tests nach Ende der übrigen Läufe: ebenfalls fehlgeschlagen (31,17 s; 19 andere Tests übersprungen, Exitcode 1), auch außerhalb der Sandbox. Damit bleibt die vollständige Pflichtsuite rot. Keine Testlimits oder sachfremden Schutzskripte geändert. Commit und Integration bleiben bis zur Klärung gesperrt.
- Vollständiger E2E-Lauf: 80/82 grün (309,88 s); zwei Desktop-Abläufe mit Zeit-/Wartefehlern. Gezielter Wiederholungslauf dieser beiden Tests mit einem Worker: 2/2 grün, 26,31 s, Exitcode 0. Alle 82 E2E-Tests damit am unveränderten Produktstand erfolgreich nachgewiesen; erster Lauf bleibt als instabiler Nachweis dokumentiert.
- Lokaler Browsernachweis: Chromium über Playwright CLI, `http://127.0.0.1:58573/`; Lerncheck „Mensch und KI: Verantwortung bleibt menschlich“ gestartet, fünf verschiedene Fragen beantwortet, Ergebnis mit Erklärungen und Quellen angezeigt, über „Zur Themenliste“ zurückgekehrt. Erfolgreich; keine externe Quelle geöffnet. Persönlicher Zustand und Browserprotokolle bleiben lokal außerhalb von Git. Die lokale Konsole meldet das vorhandene fehlende Favicon.
- Manueller Nutzertest positiv bestätigt; Freigabe für Commit und lokale Fast-forward-Integration in `main` erfolgt.

## Ergänzende Testbereinigung

- Den beauftragten Windows-Prozesstest einschließlich des danach unbenutzten `spawn`-Imports entfernt. Keine neue Funktionalität; kein neuer RED-Test für das Entfernen eines Tests. Keine zweite Reviewrunde gemäß Reviewvertrag.
- Erneutes `npm run check` nach Entfernung vollständig grün, 62,63 s, Exitcode 0: 164 Unit-/Komponententests (43,33 s), 27 Inhaltsvalidierungstests (3,60 s), Format, Lint, Typprüfung, Runner-Selbsttests, Architektur, Lizenzen und Produktionsbuild. Diff ohne Whitespacefehler. Die oben dokumentierten Fehlversuche bleiben historische Nachweise; der entfernte Test gehört nicht mehr zur Pflichtsuite und blockiert den Abschluss nicht mehr.
- Erneuter vollständiger E2E-Lauf mit einem Worker: 82/82 bestanden, 267,29 s, Exitcode 0. Die vollständige Pflichtsuite ist damit grün; der vorherige Auditnachweis bleibt bei unveränderten Abhängigkeiten gültig. Produktcode und lokaler Browserablauf sind seit dem dokumentierten Browsernachweis unverändert. Positiver manueller Nutzertest und ausdrückliche Freigabe für Commit und lokale Fast-forward-Integration in `main` sind erfolgt.

## Abschluss

- Spec archiviert; Umsetzung und Testbereinigung gemeinsam zum Commit freigegeben.
- Vor Integration geprüft: Entwickler-Checkout sauber auf `main`, inzwischen zusätzlicher Commit `a0d4f04`. Lokale Fast-forward-Integration dadurch nicht möglich; gemäß Worktree-Ablauf angehalten. Kein Push.
