# Zielarchitektur

## Leitidee

Die KI-Lernlandkarte ist eine clientseitige, statisch veröffentlichte PWA. Sie
ist nach dem ersten erfolgreichen Laden offline für ihre Kernfunktionen
nutzbar. Inhaltliche Updates werden bei bestehender Netzverbindung kontrolliert
geladen und versioniert; sie dürfen den lokalen Lernfortschritt nie
überschreiben.

## Technische Basis

- React und TypeScript als etablierter Browser-Stack.
- Vite erzeugt statische Dateien für GitHub Pages.
- IndexedDB speichert ausschließlich lokalen persönlichen Zustand.
- Service Worker und versionierter Cache bilden die PWA-/Offline-Vertikale.
- React, TypeScript, Vite, Vitest, Playwright und dependency-cruiser sind die
  vorgesehenen Kernwerkzeuge. Konkrete Versionen werden zum Implementierungs-
 zeitpunkt geprüft, gepinnt und dokumentiert.

Die App enthält keinen KI-Schlüssel und ruft kein KI-Modell auf.

## Wesentliche Datenflüsse

```text
Versionierter Inhaltskatalog (öffentlich, nur lesbar)
  -> Karte, Lernkarten, Lernchecks und Kompetenzprofil

Lokaler Lernfortschritt (pro Browser und Gerät)
  -> Kompetenzprofil, Lerncheck-Ergebnisse und spätere Lernziele

PWA-Vertikale
  -> lädt und cached Anwendung und Inhaltsversion
```

Inhaltskatalog und lokaler Fortschritt sind getrennte Datenmodelle. Der
Inhaltskatalog darf nie durch Benutzereingaben verändert werden.

## Verfügbarkeit und Fallback

Die App muss nach Erstinstallation offline Karte, Lernkarten, Lernchecks und
bereits gespeicherten Fortschritt anzeigen. Quellen und externe Videos dürfen
offline als nicht verfügbar erscheinen. Wenn die grafische Karte einen Fehler
hat, bleibt eine zugängliche Listenansicht der Inhalte verfügbar.

## Unterstützte Zielumgebungen

- Samsung Internet auf aktuellem Android.
- Chrome und Firefox unter Windows 11.
- Safari auf aktuellen iPhones, inklusive „Zum Home-Bildschirm“.

Die konkret getesteten Browser-Versionen werden im jeweiligen Release
dokumentiert.
