# Einmaliges Bestandsreview und Korrekturen: Impressum

Die Vertikale `imprint` durch einen eigenen Review-Subagenten einmalig prüfen: Produktionscode unter `src/verticals/imprint/`, Tests unter `tests/verticals/imprint/` und `e2e/verticals/imprint/` getrennt bewerten.

- Maßstab: Wartbarkeit, Lesbarkeit, Verantwortlichkeiten, Duplikate, einfache Konzepte und Testqualität gemäß `docs/quality/code-review.md`; zusätzlich belegte Fehler und Datenschutzprobleme behandeln. Fachliche Inhalte und externe Quellen nur bei konkretem Verdacht prüfen.
- Alle nötigen Korrekturen im Bereich Impressum umsetzen. Verhaltenskorrekturen mit RED → GREEN absichern, reine Refactorings mit passenden bestehenden Prüfungen. Neue Funktionalität gehört nicht zum Review.
- Abhängige Stellen nur gezielt zum Verständnis oder zur notwendigen Vertragsanpassung einbeziehen. Bereichsübergreifenden Änderungsbedarf vor einer Erweiterung klären; höchstens zwei fachliche Vertikalen pro Commit.
- Abnahme: Produktionscode und Tests getrennt bewertet, alle belegten Vorschläge umgesetzt oder konkret begründet abgelehnt, passende Prüfungen und bei produktrelevanten Änderungen ein aussagekräftiger lokaler Browserablauf dokumentiert. Kein künstlicher Änderungsbedarf bei einem Review ohne Funde.
- Einmalige Wartungsstory ohne neue Browserfunktion. Genau ein Review-Subagent für das Bestandsreview, keine zweite Reviewrunde nach Korrekturen; Lesegrenzen und Rückgabeformat des Reviewvertrags gelten.

## Ziel und Umfang

Einmaliges Bestandsreview der Vertikale `imprint`, getrennt nach Produktionscode, Komponenten- und E2E-Tests. Der Auftrag ist hinreichend konkret; keine offene umsetzungsrelevante Fachentscheidung. Keine neue Funktionalität, Abhängigkeit oder Änderung abgestimmter Inhalte ohne belegten Fehler. Betroffene fachliche Vertikale: Impressum.

## Entscheidungen, Risiken und Abnahme

- Genau ein lesender Review-Subagent für das Bestandsreview; keine zweite Reviewrunde nach Korrekturen. Diese ausdrückliche Wartungsstory bestimmt den Reviewzeitpunkt.
- Öffentlicher Vertrag: `Imprint` aus `imprint/index.ts`; keine Imports anderer Vertikalen, `app` oder `shared`.
- Abhängige Stellen nur bei konkretem Bezug lesen. Kein künstlicher Änderungsbedarf bei fehlenden Funden.
- Alle belegten Vorschläge umsetzen oder konkret begründet ablehnen; Verhalten mit RED → GREEN, reine Refactorings mit bestehenden Prüfungen absichern.
- Bei produktrelevanten Korrekturen vollständige Pflichtsuite und lokaler Browserablauf; ohne solche Korrekturen inhaltliche Dokumentationsprüfung.
- Commit und lokale Fast-forward-Integration in `main` erst nach den vorgeschriebenen Nutzerfreigaben; kein Push.

## Umsetzung und Nachweise

- Ausgangsstand: `87b09b17691e30a1fb43d0cf83cf728dd4882d00`, sauberer dauerhafter Codex-Worktree; Story auf `codex/review-imprint` gestartet.
- Genau ein lesendes Bestandsreview gemäß Reviewvertrag durchgeführt. Produktionscode (`Imprint.tsx`, `Imprint.css`, `index.ts`), Komponententest und E2E-Test getrennt bewertet; Topics nur gezielt für gemeinsame Navigation/Positionierung mitgelesen.
- Produktionscode: keine belegten Fehler, Datenschutzauffälligkeiten oder sinnvollen Refactorings. Komponententest: vollständige, bewusst an die abgestimmten vier Hinweise gebundene Inhaltsprüfung; kein Änderungsbedarf. Keine konkrete Veranlassung für eine externe Inhalts-/Quellenprüfung.
- Ein E2E-Vorschlag mittlerer Priorität angenommen und umgesetzt: unabhängige Bildschirm-/Farbschema-Konfigurationen brachen zuvor beim ersten Fehler gemeinsam ab. Der bestehende Test sammelt jetzt Fehler einschließlich Stack und Konfigurationskennung in `scenarioFailures`; jede weitere Konfiguration startet erneut mit `page.goto("/")`. Am Ende scheitert der Test mit sämtlichen gesammelten Fehlern. Keine Vorschläge abgelehnt, keine zweite Reviewrunde.
- Reines Testrefactoring ohne neue Funktionalität oder Verhaltenskorrektur am Produkt; daher kein fachlicher RED-Schritt. Abgesichert durch bestehende Pflichtprüfungen. Keine neue Abhängigkeit, keine Architektur- oder Inhaltsänderung.
- Ausgangsnachweis: `npm run --silent test:unit -- --vertical imprint`: 1 bestanden, 32,08 s, Exitcode 0.
- Abschließendes `npm run check`: vollständig grün, 67,07 s, Exitcode 0; 162 Unit-/Komponententests (51,37 s), 32 Inhaltsprüfungen (2,00 s), Format, Lint, Typen, Runner-Selbsttests, Architektur, Lizenzen und Produktionsbuild erfolgreich.
- `npm audit --audit-level=high`: 0 Schwachstellen, 7,11 s, Exitcode 0.
- Lokaler Browsernachweis am 18.10.2026: Codex-In-app-Browser unter `http://127.0.0.1:5273/`, schmale Darstellung im dunklen Farbschema; Themenliste geladen, Impressum geöffnet, alle vier abgestimmten Hinweise und Rückweg-Schaltfläche vorhanden. Visuell gut lesbar ohne abgeschnittene Inhalte. Ansicht für Nutzerabnahme geöffnet.
- Vollständige E2E-Suite mit `npm run --silent test:e2e`: 84 bestanden, 241,36 s, Exitcode 0. Nach Abschluss aller Testfälle musste der eindeutig zugeordnete Vite-Testserver für den Prozessabschluss gezielt beendet werden; der ursprüngliche Runner schrieb anschließend seinen gültigen Abschlussbericht. Kein Wiederholungslauf. Eine dauerhafte Lösung für das Windows-Sandbox-Teardown ist nicht Teil dieser Story.
- Manuelle Nutzerabnahme sowie Freigabe für Commit und lokale Fast-forward-Integration in `main`: erfolgt.