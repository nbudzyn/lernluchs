# Worktree-Einrichtung und lokale Starts

Schreibbesitz und sichere Übergänge regelt der [Worktree-Ablauf](worktrees.md).

## Einrichtung und Chats

1. Dauerhaften Codex-Ordner als eigenes **lokales Projekt** hinzufügen, etwa „Lernluchs – Codex Primary“. Entwickler-Projekt erhalten.
2. `.codex/hooks.json`, `scripts/worktree-guard.ps1` und `scripts/worktree-guard.mjs` bewusst prüfen und Hooks über die Vertrauensprüfung freigeben; CLI: `/hooks`. Änderungen erneut prüfen. Ohne aktive vertraute Hooks gilt nur der Agentenablauf, keine automatische Schreibsperre. Tatsächliche Hook-Ausführung in einem neuen Chat manuell abnehmen.
3. Dauerhaften Codex-Ordner in IntelliJ als **zweites Projekt in neuem Fenster** öffnen.
4. Reguläre Chats auf **Dieser Computer**, **New worktree AUS** starten; Arbeitsort, Branch, Spec und Schreibbesitz prüfen.
5. Parallele unabhängige Arbeit: **New worktree EIN**, bewusst gewählter Ausgangsbranch, eigene Installation, eigener Branch und freies Portpaar. Keine zwei schreibenden Chats auf demselben Ordner.

Projektanlage und Hook-Vertrauen nimmt der Entwickler bewusst in der App vor;
Dateisystemeinrichtung erledigt diese Schritte nicht.

## Installation und lokale Dateien

Je neuem Worktree `npm ci`; bei fehlendem Chromium `npx playwright install chromium`.
`node_modules`, Vite-Caches, `dist` und Testartefakte bleiben getrennt;
keine Symlinks, Junctions oder Kopplung. Gemeinsam bleiben Git-Historie,
npm-Downloadcache und versionierte Browser-Binaries im Benutzercache.
Browserprofile und persönlicher Lernzustand werden nicht geteilt.

`.idea/workspace.xml` bleibt lokal: weder kopieren noch versionieren.
IntelliJ erzeugt Projekt-ID, persönliche Einstellungen und Indizes je Projekt selbst.
Gemeinsame versionierte IDE-Einstellungen erhalten. Zeilenenden legt `.gitattributes`
fest; keine globale Git-Konfiguration ändern. Bestehende CRLF-Dateien werden dadurch nicht rückwirkend umgeschrieben.

## Parallele App- und Teststarts

Im jeweiligen Worktree eine unversionierte `.env.local` anlegen. Beispielpaare:

| Arbeitsort | App | E2E |
| --- | --- | --- |
| Entwickler-Checkout (Standard) | 5173 | 4173 |
| Zusätzlicher Worktree A | 5273 | 4273 |
| Zusätzlicher Worktree B | 5373 | 4373 |

```dotenv
LERNLUCHS_DEV_PORT=5273
LERNLUCHS_E2E_PORT=4273
```

```powershell
npm run dev
npm run --silent test:unit
npm run --silent test:e2e
```

Explizite Shell-Variablen gehen Env-Dateien vor. Beispiel für nur einen Lauf:

```powershell
$env:LERNLUCHS_E2E_PORT = '4274'
npm run --silent test:e2e -- e2e/verticals/topics/learning-videos.spec.ts
Remove-Item Env:LERNLUCHS_E2E_PORT
```

Ports: ganze Dezimalzahlen von 1 bis 65535, App/E2E verschieden und bei parallelen
Worktrees frei und eindeutig. Keine automatische Portsuche: Vite bricht bei
Kollision ab. Playwright startet einen eigenen Server und übernimmt keinen
vorhandenen. CLI-Optionen wie `--port` bleiben möglich, bevorzugt Env-Werte verwenden.

App-URL, Test-URL und Testpräferenz verwenden dieselbe konfigurierte E2E-Origin;
der Datenschutztest erkennt daran lokale Requests. Andere App-Ports trennen
`localStorage`; Lernstand und Präferenzen werden weder kopiert noch synchronisiert.
E2E nutzt eigene Browserkontexte. Testläufe im selben Worktree nicht gleichzeitig starten,
da sie Artefaktpfade teilen; bei knappen Ressourcen nacheinander testen.

Quellen: [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/),
[Vite-Ports](https://vite.dev/config/server-options#server-port),
[Playwright-Webserver](https://playwright.dev/docs/test-webserver),
[Browserinstallation](https://playwright.dev/docs/browsers#managing-browser-binaries),
[IntelliJ-Worktrees](https://www.jetbrains.com/help/idea/use-git-worktrees.html).
