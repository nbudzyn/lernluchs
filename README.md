# Lernluchs

Lernluchs ist eine öffentliche, statische Lernanwendung. Derzeit lassen sich
zwölf Lernkarten mit Quellen und Aktualitätsangaben im Browser lesen.

Öffentlich erreichbar unter https://nbudzyn.github.io/lernluchs/.

## Einstieg

1. [Dokumentationsindex](docs/INDEX.md) – welches Dokument für welche Frage gelesen werden muss.
2. [Produktstand](docs/product/vision-and-scope.md) – für den aktuellen Funktionsumfang.
3. [Dauerhafte Vorgaben](docs/governance/durable-rules.md) – gelten bei jeder Änderung.
4. [Änderungs-Workflow](docs/changes/README.md) – für jedes neue Teil-Feature.

Die [KI-Tool-Landkarte](docs/content/ki-tool-landkarte.md) dient als
Rechercheausgangspunkt. Vor der Übernahme einer Aussage in die App wird sie
nach der [redaktionellen Richtlinie](docs/content/editorial-policy.md) geprüft.

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
