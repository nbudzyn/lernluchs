# Einmaliges Bestandsreview und Korrekturen: Lernchecks

Die Vertikale `learning-checks` durch einen eigenen Review-Subagenten einmalig prüfen: Produktionscode unter `src/verticals/learning-checks/`, Tests unter `tests/verticals/learning-checks/` und `e2e/verticals/learning-checks/` getrennt bewerten.

- Maßstab: Wartbarkeit, Lesbarkeit, Verantwortlichkeiten, Duplikate, einfache Konzepte und Testqualität gemäß `docs/quality/code-review.md`; zusätzlich belegte Fehler und Datenschutzprobleme behandeln. Fachliche Inhalte und externe Quellen nur bei konkretem Verdacht prüfen.
- Alle nötigen Korrekturen im Bereich Lernchecks umsetzen. Verhaltenskorrekturen mit RED → GREEN absichern, reine Refactorings mit passenden bestehenden Prüfungen. Neue Funktionalität gehört nicht zum Review.
- Abhängige Stellen nur gezielt zum Verständnis oder zur notwendigen Vertragsanpassung einbeziehen. Bereichsübergreifenden Änderungsbedarf vor einer Erweiterung klären; höchstens zwei fachliche Vertikalen pro Commit.
- Abnahme: Produktionscode und Tests getrennt bewertet, alle belegten Vorschläge umgesetzt oder konkret begründet abgelehnt, passende Prüfungen und bei produktrelevanten Änderungen ein aussagekräftiger lokaler Browserablauf dokumentiert. Kein künstlicher Änderungsbedarf bei einem Review ohne Funde.
- Einmalige Wartungsstory ohne neue Browserfunktion. Genau ein Review-Subagent für das Bestandsreview, keine zweite Reviewrunde nach Korrekturen; Lesegrenzen und Rückgabeformat des Reviewvertrags gelten.

## Ziel und Abgrenzung

Belegte Qualitätsprobleme der Lernchecks beheben; keine neue Funktion und keine pauschale Inhaltsprüfung. Betroffene Vertikale: `learning-checks`. Keine neuen Abhängigkeiten.

## Entscheidungen, Risiken und Abnahme

Das einmalige Bestandsreview erfolgt vor Korrekturen gemäß ausdrücklicher Storyvorgabe und ersetzt für diese Wartungsstory das übliche Review nach GREEN. Keine zweite Reviewrunde. Zufällige Frageauswahl, Ergebnisauswertung und flüchtige Antworten müssen erhalten bleiben; persönlicher Zustand bleibt lokal.

Arbeitsort ist der separate Chat-Worktree auf `codex/review-learning-checks`, Basis `07e2fc645f9fda59b8327935e27bcfd46acc0542`; der dauerhafte Codex-Arbeitsplatz ist mit anderer Story belegt. Der Entwickler-Checkout wird gemäß Auftrag nicht verändert, auch keine lokale Integration ohne neuen ausdrücklichen Auftrag.

Abnahme: getrennte Bewertung von Produktion und Tests, begründete Behandlung jedes Funds, passende grüne Prüfungen; bei Produktänderungen vollständige Pflichtsuite und lokaler Browsernachweis. Commit erst nach positivem Nutzertest und ausdrücklicher Freigabe.

## Umsetzung und Nachweise

- Aktiviert: benannte Backlog-Story vollständig übernommen.
- Genau ein lesendes Bestandsreview gemäß Reviewvertrag: Produktionscode sowie Unit-/Komponenten-/E2E-Tests getrennt bewertet; drei Funde, alle umgesetzt. Keine belegten Datenschutzprobleme, keine weiteren strukturellen Umbauten und kein konkreter Verdacht gegen fachliche Inhalte. Fragen und Quellen unverändert; keine externe Inhaltsprüfung erforderlich.
- Reviewfund Fokusführung (mittel): Beim Entfernen der beantworteten Frage ging der Fokus verloren. Überschriften erhalten programmatischen Fokus beim Start, nach jeder Antwort und im Ergebnis. Komponentenprüfung für bestandene/nicht bestandene Durchläufe und vorhandener E2E-Tastaturablauf bis zum Ergebnis erweitert.
- Reviewfund Lookup-Vertrag (niedrig): Geerbte Objektnamen konnten statt `undefined` einen Nicht-Fragenpool liefern. Zugriff über `Object.hasOwn` abgesichert; vorhandener Test um `toString`, `constructor` und `__proto__` erweitert.
- RED vor beiden Verhaltenskorrekturen: 12 Tests bestanden, 2 fehlgeschlagen, 3,33 s, Exitcode 1; Fokus blieb auf `body`, unbekannte Objektnamen lieferten geerbte Werte.
- Reviewfund Validator-Tests (mittel): Unabhängige Regeln und Grenzwerte einzeln mit ansonsten gültigen Pools und konkreten Fehlern geprüft, einschließlich vollständiger Fehlersammlung. Reine Testverbesserung; bestehender Validator unverändert.
- GREEN nach Korrekturen: `npm run --silent test:unit -- --vertical learning-checks`: 27 bestanden, 2,93 s, Exitcode 0. Ursprünglicher Bestand: 18 bestanden, 3,16 s, Exitcode 0.
- Abschließende E2E-Suite: `npm run --silent test:e2e`: 84 bestanden, 81,04 s, Exitcode 0 (Desktop- und Smartphone-Chromium).
- Audit: `npm audit --audit-level=high`: bestanden, 2,43 s, Exitcode 0.
- Lokaler Browsernachweis: ChatGPT-In-App-Browser, schmale Ansicht, `http://127.0.0.1:5473/`. Check „Mensch und KI“ per Enter gestartet, fünf Antworten per Tab/Enter eingegeben; Fokus nach Start und jeder Antwort auf der aktuellen Frage, nach Abschluss auf „Antworten im Überblick“. Richtige/falsche Antworten mit Erklärungen und Quellen sichtbar. Rückkehr zur Liste per Enter stellt Fokus auf Startbutton wieder her. Screenshot außerhalb von Git gesichert. Kein Screenreader getestet.
- Erster Pflichtcheck: Format, Lint, Typprüfung und 11 Runner-Selbsttests bestanden; Unit-Suite mit 170 bestandenen Tests und Timeout im unveränderten Windows-Schutztest nach 30 s (Gesamtlauf 60,57 s, Exitcode 1). Wiederholung mit vorhandenem Node 24 und einem Worker: erneut 170 bestanden, derselbe Timeout und Temp-Cleanup-Berechtigungsfehler, 140,23 s, Exitcode 1. Keine Änderung am Schutzcode. Abschließender separater Lauf von `scripts/worktree-guard.test.mjs` unter Node 24 außerhalb der Sandbox: alle 20 bestanden, 56,78 s, Exitcode 0. Zusammen sind damit sämtliche 171 Unit-/Komponententests am unveränderten Produktstand grün nachgewiesen; Sandbox-Ausführung der gesamten Suite bleibt durch diesen Windows-Prozesstest eingeschränkt.
- Übrige Pflichtprüfungen: Inhaltsvalidierung (2,93 s), Architektur einschließlich Vertikalzählungs-Selbsttests (2,52 s), Lizenzen (0,88 s) und Produktionsbuild mit Dateiprüfung (1,39 s) bestanden, jeweils Exitcode 0. Diff ohne Whitespace-Fehler; genau eine fachliche Vertikale betroffen. Keine neuen Commits; Commitgrenze vor einem später freigegebenen Commit erneut prüfen.
- Nutzerabnahme und Commitfreigabe erfolgt. Spec zum Abschluss archiviert. Keine lokale Fast-forward-Integration in `main`, weil der Auftrag Änderungen am Entwickler-Stand ausdrücklich untersagt; kein Push.
