# Proposal: Öffentlicher GitHub-Pages-Releasepfad

## Problem und Nutzen

Der Katalog ist lokal als statischer Build geprüft, aber noch nicht über eine
öffentliche, stabile URL erreichbar. Ein Besucher kann den vorhandenen Nutzen
ohne lokale Entwicklungsumgebung nicht aufrufen.

## Ziel

Ein Push auf `main` baut den statischen, bereits geprüften Release und stellt
ausschließlich dessen `dist/`-Artefakt über GitHub Pages bereit. Der Build
funktioniert sowohl für eine Projektseite unter `/<repository>/` als auch für
eine mögliche Root-Seite. Die veröffentlichte URL wird im Deployment sichtbar.

## Betroffene Vertikalen

- PWA und Zuverlässigkeit: reproduzierbarer, statischer Auslieferungspfad.

Der Katalog und seine Inhalte bleiben unverändert. Die Anwendung erhält weder
Service Worker noch Offline-Verhalten.

## Nicht-Ziele

- Keine PWA-Installation, kein Offline-Cache und keine Änderungen an
  Lernkarten oder deren Quellen.
- Kein `gh-pages`-Branch und kein Hosten bei einem anderen Anbieter.
- Kein Login, keine Telemetrie, kein CDN und keine neue npm-Abhängigkeit.
- Keine automatische Änderung der GitHub-Repository-Einstellungen.

## Voraussetzung außerhalb des Repositories

Das Repository ist für GitHub Free öffentlich. Eine Person mit Admin- oder
Maintainer-Recht stellt unter **Settings → Pages** die Veröffentlichungsquelle
einmalig auf **GitHub Actions**. Die Story dokumentiert diesen manuellen
Schritt, automatisiert ihn aber nicht.

## Akzeptanz

Die prüfbaren Kriterien stehen in [acceptance.md](acceptance.md). Die
RED-, GREEN- und REFACTOR-Nachweise werden in [tasks.md](tasks.md) ergänzt.
