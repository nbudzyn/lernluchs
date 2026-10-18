# Story-Start unter eigener Schreibsperre

## Ziel und Umfang

Direkt beauftragte technische Folgekorrektur: Der reguläre Story-Start funktioniert auch dann, wenn ein vorheriger Tool-Hook bereits die Schreibsperre derselben Sitzung und desselben Turns gesetzt hat. Die Sperre bleibt während des Starts erhalten. Fremde, unterbrochene oder einem anderen Turn zugehörige Sperren bleiben geschützt.

Der Entwickler muss lokale Fast-forward-Integration nicht selbst ausführen: Codex fragt künftig ausdrücklich nach Freigabe für Commit und lokale Integration in `main`. Erst mit dieser Freigabe darf Codex im sauberen Entwickler-Checkout auf `main` per `--ff-only` integrieren. Push bleibt beim Entwickler.

## Arbeitsort und Grenzen

- Dauerhafter Codex-Worktree, Branch `codex/review-help`, Basis `1834132`. Eigenständiger Folgeauftrag mit separater Spec und später separatem Commit; kein Branchwechsel außerhalb des regulären Startablaufs zur Umgehung des zu korrigierenden Fehlers.
- Der Hilfe-Commit ist bereits lokal in `main` integriert. Arbeitsbaum vor Aktivierung sauber, Schreibbesitzer aktuelle Sitzung und aktueller Turn.
- Keine fachliche Vertikale, keine neue Abhängigkeit, kein Produktverhalten betroffen.
- Keine allgemeine Lockerung der Hook-Prüfungen oder Löschung von Schutzdaten. Bestehende Regeln für `recover`, ungeklärte Änderungen und aktive Specs erhalten.

## Risiken und Abnahme

- Eigene Sperre nur bei exakt passender Sitzung und Turn-ID und ohne Unterbrechung akzeptieren; fehlende Turn-ID genügt bei bestehender Sperre nicht.
- Freier sauberer Worktree startet weiterhin ohne Turn-ID. Entwickler-Checkout, falscher Branchname, nicht integrierter Vorgänger, aktive Specs, uncommittete Arbeit und fremde Sperren verhindern den Start.
- Nach Erfolg sind Branch und Story-Zuordnung konsistent; eine vorhandene eigene Sperre bleibt unverändert und verhindert konkurrierende Schreibsitzungen.
- Ein fehlgeschlagener Start verändert weder Branch noch Schutzdaten, soweit Git noch keinen erfolgreichen Branchwechsel ausgeführt hat.
- Dokumentation erklärt `Stop` am regulären Turn-Ende, Reichweite der Sperre und ausdrückliche Freigabe für Commit einschließlich lokaler Integration. Kein automatischer Merge allein aufgrund einer Commit-Freigabe.

## Umsetzung und Nachweise

- RED: Nach Verlagerung des unveränderten bisherigen Startablaufs in die testbare Guard-Methode scheitert der echte Git-Worktree-Test trotz identischer Sitzung und Turn-ID an der pauschalen Sperrprüfung; 1 fehlgeschlagen, 2 bestanden, Exitcode 1.
- GREEN: `start` akzeptiert ausschließlich die eigene nicht unterbrochene Sitzung/Turn-Kombination und schreibt nach dem Git-Branchwechsel die neue Story-Zuordnung, ohne die eigene Sperre freizugeben. Der PowerShell-Wrapper reicht `-Turn` bereits durch und benötigt keine Codeänderung. Fremde/fehlende Turn-Identität, Unterbrechung, nicht integrierte Arbeit, aktive Spec, schmutziger Arbeitsbaum und Entwickler-Checkout werden weiter abgewiesen. Auch der freie Start ohne Turn-ID bleibt möglich.
- Guard-Suite einschließlich realem PowerShell-Aufruf: 20 Tests bestanden, Exitcode 0, 41,93 s. Für die neuen echten Git-/Windows-Prozessprüfungen das bestehende Integrationszeitlimit von 30 s verwendet; das Standardlimit von 5 s reichte für die Schutzfall-Matrix nicht aus.
- Dokumentation: ausdrückliche gemeinsame Freigabe für Commit und lokale Fast-forward-Integration in AGENTS.md, Änderungs-Workflow und Worktree-Ablauf festgehalten. Reichweite der Sperre, Stop/SessionEnd und regulärer nächster Story-Start dokumentiert.
- Einmaliges fokussiertes Subagentenreview erfolgt. Ein Vorschlag (mittel), umgesetzt: Im Schutztest die Story-Zuordnung nach Anlegen beziehungsweise Entfernen einer aktiven Spec über `refresh` synchronisieren und ausdrücklich die Spec-Sperre erwarten. Zuvor griff bereits der Schutz gegen eine abweichende Story-Zuordnung; die Assertion hätte eine fehlende Spec-Sperre verdeckt. Keine Vorschläge abgelehnt. Keine zweite Reviewrunde.
- Abschließender `npm run check` nach der Reviewkorrektur: grün, Exitcode 0, 68,08 s; Format, Lint, Typen, Runner-Selbsttests, 162 Unit-/Komponententests (52,30 s), Inhaltsvalidierung (32 Prüfungen), Architektur einschließlich Vertikalzählung, Lizenzen und Produktionsbuild. `npm audit --audit-level=high`: keine Schwachstellen, Exitcode 0. `git diff --check` grün.
- Lokaler Browser-Smokeablauf nach der Reviewkorrektur: Codex In-app-Browser unter `http://127.0.0.1:5274/`; Hilfe öffnen, Hinweise prüfen und zur Themenliste zurückkehren. Erfolgreich. Keine Produktanzeige oder persönlichen Daten durch die Guard-Korrektur verändert. Der eigentliche neue Ablauf ist über echte temporäre Git-Worktrees und den PowerShell-Einstiegspunkt in der Pflichtsuite geprüft.
- Abschließende E2E-Suite über `npm run --silent test:e2e`: 84 Tests bestanden, Exitcode 0, 131,27 s. Nach vollständig abgeschlossenen Testfällen hing erneut der Vite-Testserver beim Prozessabschluss; die Prozesskette des eigenen Laufs geprüft und ausschließlich diesen Server beendet. Danach lieferte der ursprüngliche Runner den grünen Abschlussbericht. Kein Wiederholungslauf.
- Manueller Test und ausdrückliche Freigabe für Commit und lokale Fast-forward-Integration erfolgt. Spec zum Abschluss archiviert.
