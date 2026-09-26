# Statisches PWA-Fundament

## Ziel und Umfang

Ein öffentliches, unter Apache-2.0 lizenziertes React-/TypeScript-/Vite-Projekt liefert eine sichtbare statische Hülle, einen leeren validierbaren Katalogvertrag, Importgrenzen und CI. Betroffen sind PWA/Zuverlässigkeit und der gemeinsame Kern. Lerninhalte, Landkarte, Fortschritt, Service Worker und Offline-Nutzung gehörten nicht dazu.

`src/app` komponiert nur, `src/shared` hält Vertrag und Validierung, Fachvertikalen liegen unter `src/verticals`. dependency-cruiser prüft Zyklen und Importgrenzen. Die nötigen Build-, Test- und Architekturpakete wurden am 20.09.2026 geprüft und im Lockfile festgeschrieben; CI nutzt Node 24.15.0. Für den kleinen Vertrag genügte eigene Validierung ohne Schema-Bibliothek.

## Risiken und Abnahme

- dependency-cruiser 18.4.0 unterstützte Node 25 nicht; verwendet wurde 17.4.3. ESLint und Prettier wurden für diese Grundlage nicht eingeführt.
- Abnahme: sichtbare Hülle, validierbarer leerer Katalog, grüne Typ-, Test-, Inhalts-, Architektur-, Build- und CI-Prüfung ohne externe Laufzeitressourcen. Installation, Offline-Nutzung, echte Geräte und GitHub Pages blieben späteren Änderungen vorbehalten.

## Umsetzung und Nachweise

| Teil-Feature | Phase | Nachweis |
| --- | --- | --- |
| Hülle | RED | App-Test scheiterte ohne `package.json`. |
| Hülle | GREEN | Minimale React-Hülle; 1 Test grün. |
| Hülle | REFACTOR | Keine verfrühte Extraktion. |
| Katalogvertrag | RED | Test scheiterte am fehlenden `validateCatalog`. |
| Katalogvertrag | GREEN | Leerer Katalog und Validierung; 2 Inhaltstests grün. |
| Katalogvertrag | REFACTOR | Einfache Duplikatprüfung mit `Set` beibehalten. |
| Importgrenzen | RED | Architekturprüfung scheiterte an fehlender Konfiguration. |
| Importgrenzen | GREEN | Regeln gegen Zyklen und unerlaubte Importe; 10 Module/5 Abhängigkeiten geprüft. |
| Importgrenzen | REFACTOR | Gleichartige Regeln aus einer Namensliste erzeugt. |
| Produktionsbuild | RED | Build-Prüfung fand noch kein `dist/index.html`. |
| Produktionsbuild | GREEN | Statischer Build mit lokalen Assets. |
| Produktionsbuild | REFACTOR | Verifizierer auf nötige Invarianten begrenzt. |
| CI | RED | Workflowprüfung fand noch keine CI-Datei. |
| CI | GREEN | Gepinnter Workflow mit Node 24.15.0, Tests, Build und Audit. |
| CI | REFACTOR | Befehlsprüfung zusammengefasst. |
| Typprüfung | RED | `TS2769` in der Vite/Vitest-Konfiguration. |
| Typprüfung | GREEN | `defineConfig` aus `vitest/config`; Typprüfung grün. |
| Typprüfung | REFACTOR | Keine weitere Abstraktion. |

`npm run check` war grün (3 Unit-/Komponententests, 2 Inhaltstests, Architekturprüfung, Build); `npm audit --audit-level=high` meldete 0 Schwachstellen. Im Codex In-app-Browser unter `http://127.0.0.1:5173/` waren „Lernluchs“ und „Architekturgrundlage“ sichtbar, ohne Konsolenfehler oder nachgeladene externe Ressourcen.
