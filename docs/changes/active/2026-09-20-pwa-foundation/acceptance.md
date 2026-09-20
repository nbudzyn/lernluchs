# Akzeptanz: Statisches PWA-Fundament

## Ausführbare Nachweise

- `npm run typecheck` prüft den gesamten TypeScript-Quellcode ohne Fehler.
- `npm test -- --run` führt Unit- und Komponententests aus.
- `npm run validate:content` validiert den leeren öffentlichen Katalogvertrag.
- `npm run check:architecture` verhindert Zyklen, Vertikalimporte in `app`
  und direkte Importe zwischen Vertikalen.
- `npm run build` erzeugt ausschließlich statische Produktionsdateien.
- `npm audit --audit-level=high` meldet keine Abhängigkeiten mit hoher oder
  kritischer bekannter Schwachstelle.
- Der CI-Workflow führt diese Befehle auf sauberer Node-Installation aus.

## Manuelle Sichtprüfung

- Der gebaute Einstieg zeigt "Lernluchs" und kennzeichnet sich als
  Architekturgrundlage, ohne Lerninhalt oder externe Ressourcen nachzuladen.
- Es existieren keine Verweise auf Analytics, Telemetrie, externe Fonts,
  Laufzeit-CDNs, Login- oder KI-Dienste.

## Nicht Teil dieser Akzeptanz

PWA-Installation, Service Worker, Offline-Nutzung, GitHub-Pages-Deployment
und echte Zielgeräte sind bewusst spätere Nachweise.
