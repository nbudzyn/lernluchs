# Mit Worktrees arbeiten

## Feste Arbeitsorte

| Zweck | Ordner | Git-Branch |
| --- | --- | --- |
| Entwickler | `C:\projects\2026\lernluchs\workspace\lernluchs` | normalerweise `main`, eigene Arbeit auf eigenem Branch |
| Dauerhafter Codex-Arbeitsplatz | `C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs` | wechselnd `codex/<story>` |
| Parallele Entwicklung | eigener temporärer Codex-Worktree; tatsächlichen Pfad nennen | eigener `codex/<story>`-Branch |

Der dauerhafte Codex-Worktree bleibt auch nach Story oder Chat-Archivierung bestehen.
Er ist manuell angelegt und mit `git worktree lock` gegen Entfernen/Pruning geschützt;
das ist unabhängig von der Schreibsperre je Chat. Temporäre verwaltete Worktrees können bereinigt werden.

Entwickler-Worktree und dessen ausgecheckte Branch-Referenz bleiben unverändert,
auch bei Integrationsaufträgen. Kein `--force` zum Umgehen der Branch-Belegung.
Worktrees ersetzen keine Sandbox; Zugriffsrechte nicht global aufweiten.

## Einmalige Einrichtung und neue Chats

Für Projektanlage, bewusstes Hook-Vertrauen und IDE-Einrichtung die
[Einrichtungsanleitung](worktree-setup.md#einrichtung-und-chats) lesen.
Reguläre Chats im dauerhaften Projekt mit **New worktree AUS**, parallele
unabhängige Entwicklung in eigenem temporären Worktree mit eigenem Branch.
Kein zweiter schreibender Chat auf demselben Arbeitsordner.

## Start, Fortsetzung und Wiederaufnahme

Im zugeordneten Worktree beginnen:

```powershell
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 review
```

Pfad, Branch, aktive Spec, Diff, Story-Zuordnung und Schreibsperre prüfen.
Der Fingerabdruck muss für eine Übernahme unverändert sein.
Sitzung und Turn aus dem aktuellen Hook-Ereignis verwenden; keine IDs erfinden.

- **Neue Story:** sauber, keine aktive Spec, keine fremde oder unterbrochene Sperre. Nach `git fetch origin` das lokale `main` mit `origin/main` vergleichen. `start` verwendet das lokale `main`; ist es veraltet oder enthält es den bisherigen Stand nicht, anhalten. Weder Entwickler-Checkout noch dessen Branch-Referenz aktualisieren. Eine Umstellung auf Remote-Basis braucht eine eigene geprüfte Änderung. Besteht bereits die eigene Sperre, `-Turn` mit dem tatsächlichen Turn aus `review` übergeben; Sitzung und Turn müssen exakt passen. Ohne Sperre ist `-Turn` optional.
- **Fortsetzung:** passende Story und Diff prüfen; uncommittete Arbeit erhalten. Ohne Sperre kann `adopt` die geprüfte Zuordnung bestätigen. Bei passender Zuordnung sind normale weitere Turns möglich.
- **Abbruch/Absturz:** Sperre und Änderungen erhalten. `recover` nur nach Prüfung des bisherigen Besitzers: PID und Prozessstartzeit gemeinsam, keine Altersheuristik. Bei lebendem oder unbekanntem Prozess zuerst alten Chat samt Servern/Tests prüfen und stilllegen; erst danach dessen konkrete Sitzung als inaktiv bestätigen. Keine laufende Sitzung übergehen.

Alternativen je Situation; Platzhalter ersetzen:

```powershell
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 start -Session AKTUELLE_SITZUNG -Turn AKTUELLER_TURN -Branch codex/neue-story
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 adopt -Session AKTUELLE_SITZUNG -Review FINGERABDRUCK
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 recover -Session AKTUELLE_SITZUNG -Review FINGERABDRUCK
# Nur nach tatsächlicher Prüfung und Stilllegung der konkreten alten Sitzung:
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 recover -Session AKTUELLE_SITZUNG -Review FINGERABDRUCK -ConfirmInactive ALTE_SITZUNG
```

Geänderter Fingerabdruck verlangt erneute Prüfung. Ein Windows-Mutex serialisiert
Schutzoperationen. Status liegt unter `%LOCALAPPDATA%\Lernluchs\codex-worktrees\<Pfad-Hash>`;
beschädigten Status nicht überschreiben. Sitzungsdaten, Sicherungen und Fehlermeldungen
bleiben lokal außerhalb von Git.

Hooks schützen unterstützte Werkzeugaufrufe, keine beliebigen externen Änderungen.
Auch lesende/umhüllende Aufrufe können eine Schreibsperre setzen.
`Stop` am regulären Turn-Ende und `SessionEnd` geben nur die passende Sperre frei;
die Story-Zuordnung bleibt. Nach Unterbrechung bleibt die Sperre bis zur geprüften
Wiederaufnahme erhalten, auch wenn ein Interrupt-Hook beim Absturz ausfällt.

## Eigene Änderungen, Abbruch und Integration

Eigene Korrekturen im zugeordneten Projekt nach Ende des Agenten-Turns vornehmen
und danach mitteilen. Unabhängige Entwicklerarbeit bleibt im Entwickler-Checkout.

Abbruch verwirft nichts und wechselt keine Story. Vor ausdrücklich beauftragter
Bereinigung lokal sichern:

```powershell
powershell.exe -NoProfile -File scripts/worktree-guard.ps1 checkpoint -Session AKTUELLE_SITZUNG
```

Checkpoint sichert Patch gegen HEAD und nicht ignorierte neue Dateien außerhalb
des Repositorys, ohne den Arbeitsbaum zu ändern. Gestagt/ungestagt bleibt nicht getrennt.
Ignorierte Dateien wie `.env.local`, IDE-Daten und lokale Zustände separat sichern;
kein automatisches Bereinigen oder Übernehmen der Sicherung nach Git.

Nach grüner Pflichtsuite und positiver manueller Abnahme Commit-Freigabe einholen;
sie erlaubt keinen Push. Nur auf ausdrücklichen Integrations-/Push-Auftrag aus dem
eigenen fertigen Story-Branch unmittelbar vorher sauberen Arbeitsbaum, Branch und
Historie prüfen:

```powershell
git fetch origin
git merge-base --is-ancestor origin/main HEAD
# Nur bei Exitcode 0 und ausdrücklicher Veröffentlichungsfreigabe:
git push origin HEAD:refs/heads/main
```

Bei abweichender Historie oder abgelehntem Push anhalten, kein Force-Push.
Kein Checkout/Schreiben im Entwickler-Worktree, kein `branch -f main`,
`update-ref refs/heads/main` oder Umgehen der Worktree-Sperre.
Der Entwickler aktualisiert seinen Checkout selbst. Dauerhaften Codex-Ordner behalten;
nächste Story im neuen lokalen Chat mit **New worktree AUS** über den Startablauf.
Kein Hintergrundprozess zum Story-Start, kein Handoff in den Entwickler-Checkout.

## Parallele App- und Teststarts

Vor Installation oder parallelen Starts die
[Port-, Installations- und Speicherregeln](worktree-setup.md#parallele-app--und-teststarts) lesen.
Alle Edits und Tests bleiben im zugeordneten Worktree.

## Speicherplatz und Aufwand

Installationen, Caches, Build- und Testartefakte sind je Worktree getrennt.
Keine Symlinks, Junctions oder Kopplung von `node_modules`; Details in der [Einrichtung](worktree-setup.md#installation-und-lokale-dateien).

## Worktrees sicher entfernen

Eigene Server/IDE schließen, Git-Status und ignorierte Dateien prüfen und sichern.
`git worktree list` zeigt Pfad und Branch/detached HEAD.

- **Codex-verwaltet:** Codex-Archivierung verwenden; sie sichert Git-Zustand, nicht benötigte ignorierte Dateien.
- **Dauerhafter Codex-Arbeitsplatz:** behalten. Nur nach ausdrücklicher Entscheidung, Stilllegung und Sicherung erst `git worktree unlock 'C:\projects\2026\lernluchs\workspace-codex-primary\lernluchs'`, dann regulär entfernen.
- **Andere manuelle Worktrees:** aus einem anderen Checkout `git worktree remove 'ABSOLUTER_WORKTREE_PFAD'`. Kein `--force` als Standard; Ablehnungsgrund klären. Branch nur gesondert und bei gesicherter Integration löschen.

Nie Worktree-Ordner rekursiv löschen. `git worktree prune --dry-run` dient nur zur
Diagnose bereits fehlender Ordner. Festen Hauptcheckout erhalten.

## Quellen

[Git-Worktrees](https://git-scm.com/docs/git-worktree),
[Codex-Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees),
[Hooks](https://learn.chatgpt.com/docs/hooks),
[Windows-Sandbox](https://learn.chatgpt.com/docs/windows/windows-sandbox).
Maßgeblich sind tatsächlicher Arbeitsordner und effektives Berechtigungsprofil.
