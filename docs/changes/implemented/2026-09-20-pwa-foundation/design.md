# Design: Statisches PWA-Fundament

## Aufbau und Grenzen

`src/app` ist ausschließlich die Komposition der sichtbaren Hülle.
`src/shared` hält nur Verträge und Validierung. Fachliche Vertikalen liegen
künftig unter `src/verticals/<name>`; ihr Verzeichnisname ist Teil der
Architekturprüfung. In diesem Schritt existiert nur
`src/verticals/content-catalog` mit einem leeren Katalog. Der Katalog kennt
keinen persönlichen Zustand. Präsentationscode darf den Katalog lesen;
Vertikalen dürfen weder `app` noch Tests importieren. dependency-cruiser
verbietet Zyklen sowie direkte Importe zwischen künftigen Vertikalen.

## Öffentlicher Datenvertrag

Der Katalog ist eine im Build enthaltene, nur lesbare Datei. Er enthält eine
Version und eine anfangs leere `items`-Liste. Die eigene Validierung prüft
Form und Duplikatfreiheit der IDs, ohne Inhalt zu erfinden. Das Validierungs-
skript schlägt bei ungültigem Katalog mit einem Fehler fehl und ist Teil von
lokaler Pflichtsuite und CI.

## Technische Entscheidungen und Abhängigkeiten

Die während der Implementierung mit `npm view` geprüften exakten Versionen
werden in `package-lock.json` festgeschrieben und unten nachgetragen. Es
werden ausschließlich diese etablierten Open-Source-Pakete verwendet:

| Paket | Zweck | Lizenz / Wartung | Datenschutz und Sicherheitslage |
| --- | --- | --- | --- |
| `react`, `react-dom` | deklarative, clientseitige Hülle | MIT; React-Projekt | kein Netzwerkzugriff oder Telemetrie durch die Bibliothek; nur lokaler Bundle-Code |
| `typescript` | strenge Typprüfung | Apache-2.0; Microsoft/Community | nur Entwicklungswerkzeug; aktuelle gepinnte Version und `npm audit` in CI |
| `vite`, `@vitejs/plugin-react` | etablierter React-Entwicklungsserver und statischer Produktionsbuild | MIT; Vite-Team | keine Laufzeit-CDNs; Build erzeugt lokale Assets; aktuelle gepinnte Version und Audit |
| `vitest`, `jsdom` | Unit- und Komponententests | MIT; Vitest-Team/Community | nur Entwicklung und CI; kein Produktionscode; aktuelle gepinnte Version und Audit |
| `@testing-library/react` | nutzernahe Komponentenprüfung | MIT; Testing Library Community | nur Entwicklung und CI; kein Produktionscode; aktuelle gepinnte Version und Audit |
| `dependency-cruiser` | automatisierte Importgrenzen und Zyklenerkennung | MIT; aktiv gepflegt | nur Entwicklung und CI; analysiert lokale Importgraphen, keine Anwendungsdaten |

Node und npm sind keine Projektabhängigkeiten. Die CI pinnt ihre verwendete
Node-Hauptversion. GitHub Actions werden auf einen vollständigen Commit-SHA
gepinnt. Das Abhängigkeitsrisiko wird mit `npm audit --audit-level=high`
geprüft. Keine Abhängigkeit bringt einen Service Worker oder externe Assets
hinzu.

## Alternativen

- Ein handgeschriebener Bundler oder reine HTML-Datei würde die festgelegte
  React-/TypeScript-/Vite-Basis verlassen.
- ESLint/Prettier werden in dieser kleinen Story bewusst nicht ergänzt: Sie
  sind nicht für die geforderten Grundprüfungen nötig und würden die erste
  Abhängigkeitsfläche vergrößern. Eine spätere Qualitätsstory kann sie mit
  eigener Begründung einführen.
- Eine Schema-Bibliothek wird nicht eingeführt; der kleine öffentliche Vertrag
  lässt sich klar und testbar selbst validieren.

## Risiken

Der Browser-Support und Offline-Installation sind noch nicht nachgewiesen,
weil Service Worker und E2E-Tests außerhalb des Umfangs liegen. Die CI kann
die Projekthülle bauen und prüfen, aber GitHub Pages veröffentlicht noch nicht.
Die vorliegende Landkarte bleibt eine ungeprüfte Dokumentationsquelle und wird
nicht importiert.

## Nachgetragene geprüfte Versionen

Am 20.09.2026 mit `npm view` geprüft und in `package-lock.json` exakt
festgeschrieben: React/React DOM 19.3.0, TypeScript 7.0.2, Vite 8.3.0,
`@vitejs/plugin-react` 6.1.1, Vitest 5.0.1, jsdom 30.1.0,
`@testing-library/react` 16.3.3 und dependency-cruiser 17.4.3.
`dependency-cruiser` 18.4.0 wurde nicht verwendet, weil es Node 25 nicht
unterstützt; 17.4.3 unterstützt den hier und in CI vorgesehenen Bereich
`>=24`. Der lokale Node-25-Lauf erzeugt für jsdom/Vitest weiterhin eine
Engine-Warnung, bestand aber vollständig; CI verwendet deshalb ausdrücklich
die unterstützte Node-Version 24.15.0.
