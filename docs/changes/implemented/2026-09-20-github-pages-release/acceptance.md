# Akzeptanz: Öffentlicher GitHub-Pages-Releasepfad

## Sichtbarer Nutzen

- Nach einem Push auf `main` ist die Anwendung über die vom Deployment
  ausgegebene öffentliche GitHub-Pages-URL erreichbar.
- Die Startseite, Themenübersicht, Auswahl, Lernkarte und Quellenaktion
  funktionieren dort auch unter einem Repository-Basispfad.

## Ausführbare Nachweise

- Ein automatischer Test prüft Asset-URLs im Pages-Build mit einem
  Repository-Basispfad.
- Der Workflow installiert reproduzierbar, führt die vollständige Pflichtsuite
  vor dem Upload aus und veröffentlicht nur `dist/`.
- Build und Deploy sind getrennte Jobs; der Deploy-Job hat minimale,
  dokumentierte GitHub-Pages-Berechtigungen und hängt vom erfolgreichen Build
  ab.
- Alle verwendeten Actions sind auf vollständige Commit-SHAs gepinnt.
- `npm audit --audit-level=high` meldet keine hohe oder kritische bekannte
  Schwachstelle.

## Manuelle Sichtprüfung

- Eine berechtigte Person aktiviert GitHub Actions als Pages-Quelle.
- Die ausgegebene Deployment-URL wird in einem Browser geöffnet. Übersicht,
  Tastaturauswahl, vollständige Lernkarte und eine bewusste Quellenaktion
  funktionieren ohne fehlerhafte lokale Asset-Anfragen.

## Nicht Teil dieser Akzeptanz

Service Worker, Offline-Nutzung, Installation, Custom Domain, Vorschau-URLs
für Pull Requests, ein `gh-pages`-Branch oder eine Veröffentlichung bei einem
anderen Anbieter sind ausgeschlossen.
