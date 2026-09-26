# Öffentlicher GitHub-Pages-Releasepfad

## Ziel und Umfang

Ein Push auf `main` baut die geprüfte statische Anwendung und veröffentlicht ausschließlich `dist/` über GitHub Pages. Der Basispfad funktioniert für eine Projekt- oder Root-Seite. Betroffen war PWA/Zuverlässigkeit; Katalog, Service Worker, Offline-Verhalten und npm-Abhängigkeiten blieben unverändert.

Ein eigener Workflow trennt Build und Deployment: Der Build-Job liest das Repository, der abhängige Deploy-Job erhält nur `pages: write` und `id-token: write`; Actions sind auf vollständige SHAs gepinnt. `actions/configure-pages` liefert den Basispfad an Vite, lokal bleibt `/`. Die öffentliche URL kommt aus dem Deployment-Output und wird nicht fest codiert.

## Risiken und Abnahme

- Eine berechtigte Person musste **Settings → Pages → GitHub Actions** einmalig selbst einstellen; die Änderung änderte weder diese Berechtigung noch die Sichtbarkeit des Repositorys. Kein `gh-pages`-Branch, externer Host, CDN oder zusätzliches Geheimnis.
- Abnahme: Asset-URLs funktionieren unter dem Repository-Basispfad; Build und Deploy sind getrennt, nur `dist/` wird hochgeladen, minimale Berechtigungen und SHA-Pins sind geprüft. `npm run check`, beide Pages-Tests und Abhängigkeitsprüfung sind grün. Die öffentliche Bereitstellung wurde bestätigt; URL und Browser sind nicht überliefert.

## Umsetzung und Nachweise

| Teil-Feature | Phase | Nachweis |
| --- | --- | --- |
| Pages-Build | RED | `npm run test:pages-build` fand `/assets/` statt `/lernluchs/assets/`. |
| Pages-Build | GREEN | `PAGES_BASE_PATH` beim Vite-Build berücksichtigt; Pages-Build-Test grün. |
| Pages-Build | REFACTOR | `loadEnv` verwendet und Pfad ohne abschließenden Slash normalisiert; `npm run check` grün. |
| Workflow | RED | `npm run test:pages-workflow` scheiterte am fehlenden Pages-Workflow. |
| Workflow | GREEN | Getrennte Jobs, minimaler Zugriff, `dist/`-Upload und SHA-Pins ergänzt; Test grün. |
| Workflow | REFACTOR | Kritische Workflow-Angaben automatisiert geprüft; keine neue Abhängigkeit. |

`npm run check` war grün (7 Tests, Inhaltsvalidierung, Architekturprüfung, Build); `npm audit --audit-level=high` meldete 0 Schwachstellen. Im Codex In-app-Browser wurde der lokale Produktionsbuild unter `http://127.0.0.1:4173/` mit Übersicht, Themenauswahl, Karte und Quellenaktion ohne Konsolenfehler geprüft. Die öffentliche Bereitstellung wurde am 20.09.2026 von der berechtigten Person bestätigt; verwendete URL und Browser sind nicht überliefert.
