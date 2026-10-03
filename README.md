# Lernluchs

Lernluchs ist eine öffentliche, statische Lernanwendung rund um KI.

Öffentlich erreichbar unter https://nbudzyn.github.io/lernluchs/.

## Einstieg

1. [Dokumentationsindex](docs/INDEX.md) – welches Dokument für welche Frage gelesen werden muss.
2. [Produktstand](docs/product/vision-and-scope.md) – für den aktuellen Funktionsumfang.
3. [Dauerhafte Vorgaben](docs/governance/durable-rules.md) – gelten bei jeder Änderung.
4. [Änderungs-Workflow](docs/changes/README.md) – für jedes neue Teil-Feature.

Die [KI-Tool-Landkarte](docs/content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt. Vor der Übernahme einer Aussage in die App wird
sie nach der [redaktionellen Richtlinie](docs/content/editorial-policy.md) geprüft.

Der eigene Code erhält die Lizenz [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0). Für fremde Quellen, Videos und Markenzeichen
werden keine Lizenzrechte beansprucht; sie werden nur korrekt referenziert.

## Lokal ausführen

Verwende für reproduzierbare lokale Prüfungen Node **24.15.x**. Die aktuellen Entwicklungswerkzeuge unterstützen Node 25 nicht durchgängig
und können dort Engine-Warnungen ausgeben.

```powershell
npm install
npm run dev
```

Vor einem Commit wird mindestens `npm run check` ausgeführt und die geänderte Anwendung anschließend lokal im Browser geprüft.

## Formatieren in IntelliJ IDEA

Die projektbezogene `.idea/prettier.xml` aktiviert Prettier beim Speichern und
bei „Reformat Code“. IntelliJ verwendet das lokale Paket aus `node_modules`
und dieselben Dateien und Regeln wie `npm run format:check`.
`.prettierrc.json` und `.editorconfig` halten die Formatierung gemeinsam fest.

Nach Übernahme der Einstellungen das Projekt erneut öffnen. Die Plugins
„JavaScript and TypeScript“ und „Prettier“ müssen aktiviert sein. Unter
**Languages & Frameworks → JavaScript → Prettier** müssen **Automatic Prettier
configuration** und **Run on save** aktiv sein. Unter **Tools → Actions on Save**
die zusätzlichen Aktionen **Reformat code**, **Optimize imports** und
**Code cleanup** deaktivieren; diese Optionen speichert IntelliJ pro Benutzer
in der nicht versionierten `.idea/workspace.xml`.
Zum Speichern genügt **Run Prettier**. **Reformat code → Changed lines** ist
eine zusätzliche IDE-Formatierung und bleibt ausgeschaltet. Prettier prüft und
formatiert beim Speichern die gesamte geänderte Datei.

Für **Run for files** gilt dieses Muster ohne verschachtelte Gruppen:

```text
{src/**/*.ts,src/**/*.tsx,tests/**/*.ts,tests/**/*.tsx,e2e/**/*.ts,scripts/**/*.mjs,.github/workflows/*.yml,*.json,*.ts,*.cjs}
```

Zur Kontrolle eine TypeScript-Datei absichtlich anders einrücken, speichern
(`Ctrl+S`) und anschließend `npm run format:check` ausführen. Die genaue Ausgabe
erzeugt Prettier; die eingebauten IDE-Code-Stile allein garantieren sie nicht.
