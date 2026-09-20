# Tasks: Öffentlicher GitHub-Pages-Releasepfad

## Arbeitsregel

Jeder Teil-Schritt erhält unmittelbar vor der Implementierung einen fachlich
korrekt fehlschlagenden Test (RED). Danach folgt die kleinste Implementierung
(GREEN) und ein sinnvoller REFACTOR bei weiterhin grüner Suite. Befehle und
Ergebnisse werden direkt hier festgehalten.

## Nachweise

### 1. Pages-Build mit richtigem Basispfad

- **RED:** `npm run test:pages-build` schlug fehl, weil der Build die Assets
  unter `/assets/` statt unter dem erwarteten Repository-Basispfad
  `/lernluchs/assets/` referenzierte.
- **GREEN:** `PAGES_BASE_PATH` wird beim Vite-Build als `base` verwendet.
  `npm run test:pages-build` ist grün und prüft einen Build mit einem
  Repository-Basispfad.
- **REFACTOR:** Die Vite-Konfiguration liest den Wert mit `loadEnv`, sodass
  kein Node-Globaltyp oder eine neue Abhängigkeit erforderlich ist. Danach
  sind `npm run check` und `npm run test:pages-build` grün. Der Test
  normalisiert außerdem den von `configure-pages` gelieferten
  Repository-Pfad ohne abschließenden Slash.

### 2. Gepinnter Build- und Deploy-Workflow

- **RED:** `npm run test:pages-workflow` schlug erwartungsgemäß fehl, weil
  `.github/workflows/pages.yml` noch nicht existierte.
- **GREEN:** Der Workflow enthält getrennte Build- und Deploy-Jobs, den
  tatsächlich benötigten Basispfad, ausschließlichen `dist/`-Upload,
  minimale Job-Berechtigungen sowie vollständige SHA-Pins für die verwendeten
  Actions. `npm run test:pages-workflow` ist grün.
- **REFACTOR:** Der Workflow-Nachweis prüft die sicherheits- und
  releasekritischen Angaben automatisiert; es wurden keine Abhängigkeiten
  ergänzt.

### 3. Abschlussprüfung und öffentliche Bereitstellung

- **Pflichtsuite:** grün: `npm run check` (TypeScript, 7 Unit-/Komponententests,
  Inhaltsvalidierung, Architekturprüfung und Produktionsbuild).
- **Abhängigkeitsprüfung:** grün: `npm audit --audit-level=high` meldet
  `found 0 vulnerabilities`.
- **Lokaler Browsernachweis:** grün: Codex In-app Browser, lokaler
  Produktionsbuild unter `http://127.0.0.1:4173/`; Übersicht,
  Themenauswahl, vollständige Lernkarte und Quellenaktion geprüft, keine
  Konsolenfehler.
- **GitHub-Pages-Nachweis:** am 20.09.2026 durch die berechtigte Person
  abgeschlossen und vom User bestätigt. URL und verwendeter Browser wurden
  nicht überliefert und werden nicht nachträglich ergänzt.
- **Diff-Prüfung und Commit:** liegen bei der berechtigten Person; diese
  Änderung dokumentiert keinen nicht selbst ausgeführten Git-Vorgang.
