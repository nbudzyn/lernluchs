# Mit Worktrees arbeiten

## Feste Arbeitsorte

| Zweck | Ordner | Git-Branch |
| --- | --- | --- |
| Entwickler / bisheriges IntelliJ-Projekt | `C:\projects\2026\lernluchs\workspace\lernluchs` | normalerweise `main`, eigene Arbeit auf eigenem Branch |
| Dauerhafter Codex-Arbeitsplatz / zweites IntelliJ-Projekt | `C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs` | wechselnd `codex/<story>` |
| Zusätzliche parallele Entwicklung | eigener temporärer Codex-Worktree; tatsächlichen Pfad nennen | eigener `codex/<story>`-Branch |

`primary` bezeichnet den festen Arbeitsort, keinen Git-Branch. Der dauerhafte Worktree ist manuell mit Git angelegt und gehört nicht zur automatischen Bereinigung temporärer Codex-Worktrees. Zusätzlich ist er mit `git worktree lock` gegen versehentliches Entfernen und Pruning geschützt; das ist unabhängig von der Schreibsperre je Chat. Chats können beendet oder archiviert werden, während dieser Ordner bestehen bleibt. Zusätzliche verwaltete Worktrees können dagegen von Codex bereinigt werden.

Arbeitsdateien und Git-Index sind getrennt; Historie und Branch-Referenzen werden gemeinsam genutzt. Git erlaubt einen Branch regulär nur in einem Worktree. Kein `--force`, um diese Sperre zu umgehen. **Push führt ausschließlich der Entwickler aus.** Die Commit- und manuellen Freigabeschranken aus [AGENTS.md](../../AGENTS.md) gelten weiter.

Ein Worktree begrenzt keine Leserechte. Das tatsächliche Sandbox-Profil bestimmt den Dateizugriff. Ein neuer Projektordner kann eine einmalige Zugriffsfreigabe benötigen; keine globalen Berechtigungen dafür aufweiten.

## Einmalige Einrichtung und neue Chats

1. In Codex den dauerhaften Ordner als eigenes **lokales Projekt** hinzufügen, beispielsweise mit dem Anzeigenamen „Lernluchs – Codex Primary“. Das bisherige Entwickler-Projekt bleibt bestehen. Das Hinzufügen des Projekts und das Vertrauen seiner Hooks erfolgen bewusst durch den Entwickler; die Einrichtung im Dateisystem erledigt diese App-Schritte nicht automatisch.
2. `.codex/hooks.json`, `scripts/worktree-guard.ps1` und `scripts/worktree-guard.mjs` prüfen. Die Hook-Definitionen über die angebotene Vertrauensprüfung freigeben; die CLI bietet `/hooks`. Änderungen an Definitionen erneut prüfen. Ohne aktive, vertraute Hooks gibt es nur den dokumentierten Agentenablauf, keine automatische Schreibsperre. Die tatsächliche Ausführung in einem neuen Chat gehört zur manuellen Abnahme.
3. Den dauerhaften Ordner in IntelliJ als **zweites Projekt in einem neuen Fenster** öffnen. Dieses Fenster kann dauerhaft bestehen bleiben.
4. Reguläre neue Chats im Projekt „Codex Primary“ auf **Dieser Computer**, **New worktree AUS** starten. Der Ordner ist bereits ein Worktree. Der Agent prüft Arbeitsort, Branch und aktive Spec vor Änderungen.
5. Für **gleichzeitige unabhängige Entwicklung** einen neuen Chat mit **New worktree EIN** und bewusst gewähltem Ausgangsbranch starten. Dort eigene Installation, Branch und Portpaar verwenden. Nicht zwei schreibende Chats auf denselben dauerhaften Ordner ansetzen.

Je neuem Worktree `npm ci` ausführen; falls der passende Chromium fehlt: `npx playwright install chromium`. Installationen und Ausgaben bleiben getrennt.

`.idea/workspace.xml` bleibt durch `.idea/.gitignore` lokal. Die Datei mit Projekt-ID und persönlichen IDE-Einstellungen weder kopieren noch versionieren. IntelliJ erzeugt sie je Projekt selbst. Gemeinsame versionierte IDE-Einstellungen bleiben erhalten; neue Projekte benötigen eigene Indizes.

## Start, Fortsetzung und Wiederaufnahme

Der Agent beginnt mit dem folgenden Befehl im zugeordneten Worktree:

```powershell
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 review
```

Die Ausgabe nennt Pfad, Branch, aktive Spec, Git-Status, Story-Zuordnung, vorhandene Schreibsperre und einen Prüf-Fingerabdruck. Zusätzlich den Diff und die aktive Spec lesen. Ein unveränderter Fingerabdruck schützt vor einer inzwischen geänderten Übernahmegrundlage. Sitzung und Turn stammen aus dem aktuellen Codex-Hook-Ereignis; keine fremden IDs erfinden. Platzhalter in den folgenden Beispielen ersetzen.

- **Neue Story:** sauberer Worktree ohne aktive Spec und ohne fremde oder unterbrochene Schreibsperre; der bisherige Stand muss in `main` enthalten sein. Mit `start` wird ein neuer Aufgabenbranch ab dem lokalen `main` angelegt. Hat ein Tool-Hook bereits die eigene Sperre gesetzt, zusätzlich `-Turn` mit der tatsächlichen Turn-ID aus `review` übergeben. Sitzung und Turn müssen exakt zur Sperre passen; sie bleibt während des Starts erhalten. Ohne Sperre bleibt `-Turn` optional. `main` muss zuvor bewusst auf den gewünschten integrierten Stand gebracht werden. Kein automatisches Pull, Merge oder Verwerfen außerhalb der ausdrücklich freigegebenen lokalen Integration beim Story-Abschluss.
- **Fortsetzung:** passende bestehende Story und Diff prüfen. Uncommittete Änderungen sind dabei ausdrücklich erlaubt. Ohne Schreibsperre kann `adopt` die geprüfte Story-Zuordnung bestätigen. Bei bereits passender Zuordnung sind normale weitere Turns möglich.
- **Abbruch / Absturz:** Änderungen bleiben bestehen. Bei Unterbrechung bleibt die Schreibsperre erhalten; beim normalen Turn-Ende wird nur sie freigegeben. Eine neue Sitzung darf bestehende Arbeit nach Prüfung fortsetzen. Kein Zeitlimit löscht eine Sperre. Bei nachweislich beendetem Besitzerprozess erlaubt `recover` die Wiederaufnahme; PID und Prozessstartzeit werden gemeinsam geprüft. Ist die Prozessidentität unbekannt oder lebt sie noch, zuerst den alten Chat und seine Prozesse prüfen und stoppen. Erst danach seine konkrete Sitzungs-ID als inaktiv bestätigen. Kein automatisches Übergehen eines laufenden Chats.

```powershell
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 start -Session AKTUELLE_SITZUNG -Turn AKTUELLER_TURN -Branch codex/neue-story
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 adopt -Session AKTUELLE_SITZUNG -Review FINGERABDRUCK
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 recover -Session AKTUELLE_SITZUNG -Review FINGERABDRUCK
# Nur nach tatsächlicher Prüfung und Stilllegung der konkreten alten Sitzung:
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 recover -Session AKTUELLE_SITZUNG -Review FINGERABDRUCK -ConfirmInactive ALTE_SITZUNG
```

Die Befehle sind Alternativen je Situation, keine gemeinsam auszuführende Befehlsfolge. Bei geändertem Fingerabdruck erneut prüfen. Der Windows-Mutex serialisiert die Schutzoperationen; dauerhaft gespeicherter Zustand liegt unter `%LOCALAPPDATA%\Lernluchs\codex-worktrees\<Pfad-Hash>`. Beschädigter Status wird nicht überschrieben. Sitzungsdaten, Sicherungen und Fehlermeldungen gehören nicht nach Git oder an externe Dienste.

Die Hooks schützen unterstützte Codex-Werkzeugaufrufe zusätzlich zu den Agentenanweisungen. Sie sind keine vollständige Sicherheitsgrenze für beliebige Shellbefehle, externe Programme, bereits laufende Hintergrundprozesse oder eigene IntelliJ-Änderungen. Vor einer Wiederaufnahme auch gestartete Server und Tests berücksichtigen. Ein Interrupt-Hook kann bei einem harten Prozessabbruch ausfallen; die zuvor gespeicherte Schreibsperre bleibt dann maßgeblich.

`Stop` läuft beim regulären Ende eines Agenten-Turns, also nach einer abschließenden Antwort; der Chat muss dafür nicht geschlossen oder archiviert werden. `SessionEnd` gibt ebenfalls nur die passende Sperre frei. Die Story-Zuordnung bleibt erhalten. Nach einer Unterbrechung geben diese Ereignisse die Sperre absichtlich nicht frei; dann gilt der geprüfte Wiederaufnahmeablauf. Die Schreibsperre reserviert den Worktree für eine Sitzung und einen Turn und weist konkurrierende, vom Hook geschützte Werkzeugaufrufe ab. Manche lesenden oder umhüllenden Tool-Aufrufe können sie ebenfalls setzen; sie ist keine Dateisystemsperre und verhindert keine externen Änderungen.

## Eigene Änderungen, Abbruch und Integration

Code und Diff direkt im passenden IntelliJ-Projekt ansehen. Eigene Korrekturen an der laufenden Story dort vornehmen, nachdem der Agent seinen Turn beendet hat; danach den Agenten über die Änderungen informieren. Unabhängige eigene Entwicklung bleibt im Entwickler-Checkout auf eigenem Branch. Gleichzeitige Änderungen desselben Dokuments können später Mergekonflikte erzeugen.

Eine Story ganz abzubrechen bedeutet zunächst nur, die Arbeit anzuhalten. Nichts automatisch löschen, zurücksetzen oder auf eine neue Story umschalten. Vor einer später ausdrücklich beauftragten Bereinigung lokal sichern:

```powershell
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 checkpoint -Session AKTUELLE_SITZUNG
```

Der Befehl sichert den kombinierten Patch gegen HEAD und nicht ignorierte neue Dateien außerhalb des Repositorys. Er verändert den Arbeitsbaum nicht und erhält nicht die Trennung zwischen gestagten und ungestagten Änderungen. Ignorierte Dateien wie `.env.local`, persönliche IDE-Dateien und gegebenenfalls lokale Daten separat prüfen und sichern. Die Sicherung ist kein Ersatz für ein Backup; nicht automatisch nach Git übernehmen. Erst nach ausdrücklicher Entscheidung Änderungen gezielt bereinigen oder in einem separaten Worktree aufbewahren.

Nach grüner Pflichtsuite und ausdrücklich positivem manuellen Test fragt Codex ausdrücklich nach Freigabe für **Commit und lokale Fast-forward-Integration in `main`**. Nach dieser gemeinsamen Freigabe darf Codex die abgeschlossene Story samt archivierter Spec committen und im sauberen Entwickler-Checkout auf `main` lokal per `--ff-only` integrieren. Eine reine Commit-Freigabe umfasst die Integration nicht. Branch und Arbeitsbaum unmittelbar vor der Integration prüfen; bei Änderungen, anderem Branch oder abweichender Historie anhalten. Push führt ausschließlich der Entwickler aus. Beispiel für eine freigegebene lokale Integration:

```powershell
# Im Entwickler-Checkout auf main:
git merge --ff-only codex/worktree-workflow
```

Bei abgelehntem Fast-forward nicht erzwingen, sondern abweichende Commits prüfen. Nach erfolgreicher Integration kann der Entwickler `main` selbst pushen. Den dauerhaften Codex-Ordner anschließend behalten; für die nächste Story einen neuen lokalen Chat mit **New worktree AUS** öffnen und über den geprüften Startablauf den Branch wechseln. Die Freigabe der Schreibsperre erledigt der reguläre Turn-Abschluss; ein Hintergrundprozess zum Story-Start ist nicht erforderlich. Handoff in den Entwickler-Checkout gehört nicht zum Standard dieses festen Zwei-Projekt-Ablaufs.

## Parallele App- und Teststarts

Im jeweiligen Worktree eine **nicht versionierte** `.env.local` anlegen. Für den festen Checkout reichen ohne Datei die Standardports; zusätzliche Worktrees erhalten andere Paare, zum Beispiel:

| Arbeitsort | App-Port | E2E-Port |
| --- | --- | --- |
| Fester Checkout | 5173 | 4173 |
| Aufgabe A | 5273 | 4273 |
| Aufgabe B | 5373 | 4373 |

Beispiel `.env.local` für Aufgabe A:

```dotenv
LERNLUCHS_DEV_PORT=5273
LERNLUCHS_E2E_PORT=4273
```

```powershell
npm run dev
npm run --silent test:unit
npm run --silent test:e2e
```

Explizite Shell-Variablen haben Vorrang vor den Env-Dateien. Ein nur für die laufende PowerShell gewählter E2E-Port geht so:

```powershell
$env:LERNLUCHS_E2E_PORT = '4274'
npm run --silent test:e2e -- e2e/verticals/topics/learning-videos.spec.ts
Remove-Item Env:LERNLUCHS_E2E_PORT
```

Beide Werte müssen ganze Dezimalzahlen von 1 bis 65535 und innerhalb eines Worktrees verschieden sein. Für parallelen Betrieb müssen auch die Portpaare verschiedener Worktrees frei und unterschiedlich sein. Das Betriebssystem entscheidet, welche Ports tatsächlich verfügbar sind. Es gibt keine automatische Portsuche: Vite bricht bei Kollision ab. Playwright startet seinen eigenen Server und übernimmt keinen vorhandenen Server. Die App kann währenddessen auf ihrem anderen Port geöffnet bleiben. CLI-Optionen wie Vites `--port` bleiben möglich; vorzugsweise die dokumentierten Variablen verwenden.

App-URL, Test-URL und vorgegebene Testpräferenz verwenden dieselbe konfigurierte E2E-Origin. Der vorhandene Datenschutztest erkennt lokale Requests anhand dieser Origin. Unterschiedliche App-Ports bedeuten getrennten Browser-localStorage; Lernstand und Präferenzen werden weder kopiert noch synchronisiert. E2E verwendet eigene Browserkontexte. Mehrere Testläufe im selben Worktree nicht gleichzeitig starten, weil sie lokale Artefaktpfade teilen.

Die versionierte .gitattributes legt für Textdateien LF fest, passend zur Formatprüfung. Dadurch liefern neue Windows-Worktrees auch bei globalem core.autocrlf=true passende Zeilenenden. Keine globale Git-Einstellung ändern. Bereits vorhandene CRLF-Checkouts werden dadurch nicht rückwirkend umgeschrieben.

## Speicherplatz und Aufwand

Jeder installierte Worktree hat eigene `node_modules`, Vite-Caches, `dist` und ignorierte Testartefakte. Diese Verzeichnisse nicht per Symlink, Junction oder Kopplung teilen: `npm ci` bereinigt die Installation, und verschiedene Branches können andere Abhängigkeiten benötigen. Gemeinsam bleiben Git-Historie, der npm-Downloadcache und die versionierten Playwright-Browser-Binaries im Benutzer-Cache. Browserprofile und persönlicher Lernzustand werden nicht geteilt.

Als Größenordnung bei Einführung: versionierte Dateien etwa 2,8 MiB, Installation etwa 174 MiB, Build etwa 1 MiB; zusammen ungefähr 178 MiB pro zusätzlich installiertem Worktree. Dateisystem-Overhead, IDE-Indizes, weitere Caches und Testartefakte kommen hinzu. Die Werte sind Momentaufnahmen, keine Platzgarantie. Parallele Tests benötigen außerdem mehr CPU und RAM; bei knappen Ressourcen nacheinander testen.

## Worktrees sicher entfernen

Zuerst eigene Server und IDE-Fenster schließen, Git-Status prüfen und benötigte lokale Dateien sichern. Dazu gehören auch ignorierte Dateien, die ein Git-Status ohne weitere Optionen nicht zeigt. Die letzte `git worktree list` zeigt Pfad und zugehörigen Branch beziehungsweise detached HEAD.

- **Codex-verwaltet:** Die zugehörige Worktree-Archivierung in Codex verwenden. Sie sichert wiederherstellbaren Git-Zustand und entfernt den Checkout. Benötigte ignorierte Dateien vorher separat sichern; nicht als durch den Snapshot geschützt annehmen. Die App kann verwaltete Worktrees auch automatisch bereinigen. Ein dauerhaft eingerichteter Worktree wird nicht automatisch bereinigt.
- **Dauerhafter Codex-Arbeitsplatz:** behalten. Nur nach ausdrücklicher Entscheidung, Stilllegung und Sicherung zuerst mit `git worktree unlock 'C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs'` entsperren und danach regulär entfernen.
- **Andere manuell angelegte Worktrees:** Aus einem anderen Checkout `git worktree remove 'ABSOLUTER_WORKTREE_PFAD'` verwenden. Kein `--force` als Standard; zuerst die Ursache eines abgelehnten Entfernens klären. Einen Aufgabenbranch danach nur gesondert und bei gesicherter Integration löschen.
- **Niemals** einen Worktree-Ordner einfach im Explorer oder per rekursivem Dateisystem-Löschbefehl entfernen. `git worktree prune --dry-run` dient bei bereits fehlenden Ordnern zur Diagnose, nicht zum regulären Entfernen. Den festen Hauptcheckout erhalten.

## Quellen

Geprüft am 18.10.2026: [Git](https://git-scm.com/docs/git-worktree), [Codex](https://learn.chatgpt.com/docs/environments/git-worktrees), [Codex-Hooks](https://learn.chatgpt.com/docs/hooks), [Codex-Sandbox](https://learn.chatgpt.com/docs/windows/windows-sandbox), [IntelliJ](https://www.jetbrains.com/help/idea/use-git-worktrees.html), [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/), [Vite](https://vite.dev/config/server-options#server-port), [Playwright-Webserver](https://playwright.dev/docs/test-webserver) und [Browser-Cache](https://playwright.dev/docs/browsers#managing-browser-binaries). Bedienbezeichnungen können zwischen App-/IDE-Versionen abweichen; maßgeblich bleiben der tatsächliche Arbeitsordner und das effektive Berechtigungsprofil.
