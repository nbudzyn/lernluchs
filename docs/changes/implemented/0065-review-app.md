## Einmaliges Bestandsreview und Korrekturen: App

Die Komposition unter `src/app/` durch einen eigenen Review-Subagenten einmalig prüfen; Produktionscode einschließlich Styles und Tests unter `tests/app/` und `e2e/app/` getrennt bewerten. Bereits geprüfte Vertikalen und Shared nur gezielt zur Beurteilung der Komposition einbeziehen.

- Maßstab: Wartbarkeit, Lesbarkeit, Verantwortlichkeiten, Duplikate, einfache Konzepte und Testqualität gemäß `docs/quality/code-review.md`; zusätzlich belegte Fehler und Datenschutzprobleme behandeln. Fachliche Inhalte und externe Quellen nur bei konkretem Verdacht prüfen.
- Alle nötigen Korrekturen im Bereich App umsetzen. Verhaltenskorrekturen mit RED → GREEN absichern, reine Refactorings mit passenden bestehenden Prüfungen. Neue Funktionalität gehört nicht zum Review.
- Abhängige Stellen nur gezielt zum Verständnis oder zur notwendigen Vertragsanpassung einbeziehen. Bereichsübergreifenden Änderungsbedarf vor einer Erweiterung klären; höchstens zwei fachliche Vertikalen pro Commit. Fachlogik bleibt in ihrer Vertikale.
- Abnahme: Produktionscode und Tests getrennt bewertet, alle belegten Vorschläge umgesetzt oder konkret begründet abgelehnt, passende Prüfungen und bei produktrelevanten Änderungen ein aussagekräftiger lokaler Browserablauf dokumentiert. Kein künstlicher Änderungsbedarf bei einem Review ohne Funde.
- Einmalige Wartungsstory ohne neue Browserfunktion. Genau ein Review-Subagent für das Bestandsreview, keine zweite Reviewrunde nach Korrekturen; Lesegrenzen und Rückgabeformat des Reviewvertrags gelten.

## Ziel und Grenzen

Einmalige Wartungsstory für `app`, ohne neue Funktionalität. Produktionscode, Unit-/Komponententests und E2E-Tests werden getrennt bewertet. Andere Vertikalen werden nur bei notwendiger Vertragsklärung einbezogen; eine Umfangserweiterung wird zuvor geklärt. Keine neuen Abhängigkeiten vorgesehen.

## Entscheidungen, Risiken und Abnahme

- Basis: `origin/main` und lokales `main` bei `619cb14f9a21a7f8abf0335d6bad79d24cdd6c55`; Branch `codex/review-learning-checks-maintenance`.
- Genau ein lesender Review-Subagent für den Bestand; keine zweite Reviewrunde. Die spezielle Wartungsstory bestimmt den Reviewzeitpunkt vor Korrekturen.
- Verhaltenskorrekturen erhalten RED → GREEN; Refactorings passende bestehende Tests. Kein künstlicher Änderungsbedarf.
- Datenschutz und öffentliche Vertikalverträge bleiben Maßstab. Fachinhalte und Quellen nur bei konkretem Verdacht prüfen.
- Abnahme: getrennte Bewertungen und Behandlung sämtlicher belegter Vorschläge dokumentiert; bei Produktänderungen vollständige Pflichtsuite und lokaler Browsernachweis.

## Umsetzung und Nachweise

Genau ein lesender Review-Subagent hat den App-Bestand getrennt bewertet:

- **Produktionscode und Styles:** `src/app/App.tsx` und `App.css` sind übersichtlich und auf Komposition begrenzt. Keine belegten Produktions- oder Datenschutzfehler; keine Produktänderung nötig.
- **Unit-/Komponententests:** Größenprüfung unabhängiger Build-Chunks brach beim ersten Fehler ab. Auf `expect.soft` umgestellt, damit jeder betroffene Chunk mit Dateiname gemeldet wird.
- **E2E-Tests:** Navigationsszenarien in `browser-back.spec.ts` sammeln Fehler pro Szenariokennung und führen nachfolgende unabhängige Szenarien weiter aus. Abhängige Schritte innerhalb eines Szenarios dürfen abbrechen. In `removed-topic.spec.ts` die sachfremde Gesamtzahl von 48 Themen entfernt; gezielte Abwesenheits-, Restablauf- und Speicherprüfungen bleiben erhalten.
- **Begründet abgelehnt:** `questionsForTopic` in `learning-state.spec.ts` über den öffentlichen Einstieg importieren. Der tatsächlich ausgeführte E2E-Lauf konnte dann keine Tests laden, weil der Einstieg auch `LearningCheck.tsx` und dessen CSS in Playwrights Node-Kontext lädt. Den Vorschlag zurückgenommen; keine zusätzliche Exportarchitektur allein für diesen Test eingeführt. Der abschließende E2E-Lauf verwendet wieder den bisherigen Datenimport und ist grün.

Es handelt sich ausschließlich um Testwartung, ohne Verhaltenskorrektur oder neue Funktionalität. Deshalb kein fachlicher RED-Schritt; bestehende Prüfungen sichern die Refactorings. Keine neue Abhängigkeit, keine fachliche Inhaltsänderung und keine geänderte fachliche Vertikale. Keine zweite Reviewrunde.

| Prüfung | Ergebnis |
| --- | --- |
| `npm run check` | Exitcode 0; 72,9 s. Format, Type-Aware-Lint, Typprüfung, 11 Runner-Selbsttests, 164 Unit-/Komponententests (56,11 s), Inhaltsvalidierung mit 27 Tests (1,97 s), Architektur einschließlich 4 Vertikalzählungs-Selbsttests, Lizenzen und Produktionsbuild grün. |
| `npm run --silent test:e2e` | Abschließender Lauf: 82 bestanden, 71,20 s, Exitcode 0; Desktop- und Mobil-Chromium. |
| `npm audit --audit-level=high` | Exitcode 0; keine bekannten Schwachstellen. |
| Diffprüfung | `git diff --check` grün; Änderungen nur App-Tests, Backlog und aktive Spec, keine fachliche Vertikale betroffen. |
| Lokaler Browserablauf | Chromium über Chrome DevTools, `http://127.0.0.1:5275/`, isolierter Kontext: Lerncheck aus Liste starten, eine Frage beantworten, Browser-Zurück zur Themenliste, Fokus wieder am Startknopf, erneut starten. Rückweg beendet den Check, Neustart beginnt bei Frage 1. |

Manuelle Nutzerprüfung und Abschlussfreigabe sind erfolgt. Die Spec wird als `0065-review-app.md` archiviert. Die abschließende Remote-Prüfung ergab den zusätzlichen Dokumentationscommit `c087b34` auf `origin/main`; Integration und Push sind deshalb bis zur geklärten Übernahme dieses Stands angehalten. Der Aufgabenbranch behält seinen beim Start registrierten technischen Namen; maßgeblich ist die oben wortgetreu aktivierte App-Story.
