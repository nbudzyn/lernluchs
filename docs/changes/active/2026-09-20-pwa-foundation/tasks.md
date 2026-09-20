# Tasks: Statisches PWA-Fundament

## Arbeitsregel

Der konkrete Test wird jeweils unmittelbar vor dem zugehörigen Teil-Feature
ergänzt und als RED ausgeführt. Erst danach folgt die kleinste GREEN-
Implementierung und ein REFACTOR bei weiterhin vollständig grüner Suite.
Ausgeführte Befehle und Ergebnisse werden direkt darunter protokolliert.

## Nachweise

### 1. Sichtbare, inhaltsfreie React-Hülle

- **RED:** `tests/app.test.tsx` vor `package.json` und `src/app/App.tsx`
  angelegt; `npm test -- --run` schlug am 20.09.2026 wie erwartet mit
  `ENOENT: package.json` fehl. Der gewünschte Einstieg war damit noch nicht
  ausführbar vorhanden.
- **GREEN:** Vite-, TypeScript- und Vitest-Konfiguration sowie die minimale
  `App` ergänzt. Nach Installation der in `design.md` freigegebenen Pakete
  bestand `npm test -- --run --reporter=verbose`: 1 Test, 1 erfolgreich.
- **REFACTOR:** Keine Extraktion vorgenommen: Die Komponente besteht nur aus
  semantischem `main`, Überschrift und Status. Eine Abstraktion wäre ohne
  Wiederholung verfrüht. Der weiterhin grüne Lauf ist der oben dokumentierte
  Vitest-Lauf.

### 2. Leerer, validierbarer Inhaltskatalogvertrag

- **RED:** `tests/catalog.test.ts` vor Vertrag und Katalog angelegt.
  `npm run validate:content` scheiterte am 20.09.2026 erwartungsgemäß mit
  `Failed to resolve import .../validateCatalog`, weil Vertrag und Validierung
  noch nicht existierten. Ein erster, sandboxbedingter Vite-`EPERM`-Fehler
  wurde außerhalb der Sandbox wiederholt und nicht als RED-Nachweis gewertet.
- **GREEN:** `Catalog`, `validateCatalog` und der öffentliche Katalog mit
  leerer `items`-Liste ergänzt. `npm run validate:content` bestand: 2 Tests,
  2 erfolgreich.
- **REFACTOR:** Die Duplikatprüfung bleibt bewusst eine lineare Schleife mit
  `Set`; sie ist der kleinste lesbare Vertrag. `npm test -- --run
  --reporter=verbose` blieb grün: 2 Dateien, 3 Tests.

### 3. Automatisierte Importgrenzen

- **RED:** `npm run check:architecture` scheiterte zunächst erwartungsgemäß,
  weil `dependency-cruiser.cjs` nicht existierte. Ein vorheriger Lauf mit
  dependency-cruiser 18.4.0 wurde nicht als Nachweis gezählt: Das Werkzeug
  unterstützt die lokale Node-25-Version nicht. Nach dem in `design.md`
  begründeten Wechsel auf 17.4.3 lautete der fachliche RED-Fehler korrekt
  `Can't open config file 'dependency-cruiser.cjs'`.
- **GREEN:** Regeln gegen Zyklen, Vertikalimporte in `app`, Importe aus dem
  gemeinsamen Kern nach oben und Importe in eine andere Fachvertikale ergänzt.
  `npm run check:architecture` bestand mit 10 geprüften Modulen und 5
  Abhängigkeiten ohne Verletzung.
- **REFACTOR:** Die sechs gleichartigen Vertikalregeln werden aus einer
  lokalen Namensliste erzeugt; die Grenzregel bleibt an einer Stelle lesbar.
  `npm test -- --run --reporter=verbose` (3/3) und die Architekturprüfung
  blieben grün.

### 4. Statischer Produktionsbuild ohne externe Laufzeitressourcen

- **RED:** `scripts/verify-build.mjs` vor einem Produktionsbuild angelegt und
  mit `node scripts/verify-build.mjs` ausgeführt. Der Lauf scheiterte korrekt
  mit `ENOENT ... dist/index.html`; es gab noch kein auslieferbares Artefakt.
- **GREEN:** `npm run build` erzeugt den Vite-Build und führt anschließend den
  Verifizierer aus. Der Befehl bestand: 15 Module transformiert,
  `dist/index.html` und ein lokales JavaScript-Asset erzeugt; die Prüfung fand
  weder eine fehlende App-Wurzel noch externe HTTP(S)-Laufzeitressourcen.
- **REFACTOR:** Der Verifizierer bleibt bei explizitem Dateizugriff und zwei
  klaren Invarianten. Das ist kürzer und aussagekräftiger als ein zusätzliches
  Testframework für Build-Artefakte; keine weitere Extraktion nötig.

### 5. CI-Grundgerüst

- **RED:** `scripts/verify-ci.mjs` vor dem Workflow angelegt und ausgeführt.
  Der Lauf scheiterte korrekt mit `ENOENT ... .github/workflows/ci.yml`; es
  gab noch keine automatisierte Prüfung.
- **GREEN:** Der auf vollständige Commit-SHAs gepinnte GitHub-Actions-Workflow
  installiert unter Node 24.15.0 reproduzierbar mit `npm ci` und führt Typen,
  Tests, Inhalts- und Architekturprüfung, Build sowie Security-Audit aus.
  `node scripts/verify-ci.mjs` bestand.
- **REFACTOR:** Die lokale Workflowprüfung verwendet eine kurze Liste der
  sieben obligatorischen Befehle statt duplizierter Einzelprüfungen. Sie bleibt
  unabhängig von einem YAML-Parser und prüft den für diese Story relevanten
  Vertrag.

### 6. TypeScript-Grundprüfung und Abschlusslauf

- **RED:** `npm run typecheck` meldete korrekt `TS2769`: Vites `defineConfig`
  akzeptierte den Vitest-Block nicht.
- **GREEN:** `defineConfig` aus `vitest/config` importiert. `npm run
  typecheck` bestand danach ohne Fehler.
- **REFACTOR:** Keine weitere Änderung: Vites und Vitests gemeinsame,
  typisierte Konfiguration ist die kleinste verständliche Lösung.
- **Pflichtsuite:** `npm run check` bestand am 20.09.2026 vollständig:
  TypeScript, 3/3 Unit-/Komponententests, 2/2 Inhaltsvalidierungen,
  dependency-cruiser (10 Module/5 Abhängigkeiten) und Produktionsbuild.
  Zusätzlich bestand `npm audit --audit-level=high` mit `found 0
  vulnerabilities`.

### 7. Browsernachweis vor dem Commit

- **Lokal geprüft:** Am 20.09.2026 im Codex In-app-Browser unter
  `http://127.0.0.1:5173/`: Überschrift „Lernluchs“ und Status
  „Architekturgrundlage“ sichtbar, keine Browser-Konsolenfehler. Der
  Entwicklungsserver lief lokal; weder externe Ressourcen noch Lerninhalt
  wurden geprüft oder geladen.
