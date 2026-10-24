# Lernluchs

Öffentliche, statische Lernanwendung für KI-unterstützte Java- und Webentwicklung:
[Anwendung öffnen](https://nbudzyn.github.io/lernluchs/).

## Einstieg

- [Dokumentationsindex](docs/INDEX.md): Pflichtlektüre passend zum Auftrag.
- [Produktstand](docs/product/vision-and-scope.md): bestehender Funktionsumfang.
- [Dauerhafte Vorgaben](docs/governance/durable-rules.md): verbindliche Projektregeln; die benötigten Abschnitte bestimmt der Index.
- [Änderungs-Workflow](docs/changes/README.md): Story-Arbeit und Freigaben.

Eigener Code: [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).
Fremde Quellen, Videos und Markenzeichen werden referenziert; dafür werden keine Lizenzrechte beansprucht.

## Lokal ausführen

Node **24.15.x** für reproduzierbare Prüfungen verwenden; Node 25 wird von den
Entwicklungswerkzeugen nicht durchgängig unterstützt.

```powershell
npm ci
npm run dev
```

Für Worktree-Einrichtung und parallele Starts gilt der [Worktree-Ablauf](docs/quality/worktrees.md).
Prüfumfang und manuelle Abnahme vor einem Commit richten sich nach der
[Qualitätsstrategie](docs/quality/verification-strategy.md#prüfumfang-und-nachweise);
reine Dokumentationsänderungen brauchen keine App-Browserprüfung.

## Formatieren in IntelliJ IDEA

Projektbezogene Prettier-Konfiguration und erforderliche lokale IDE-Einstellungen:
[IntelliJ-Formatierung](docs/quality/intellij-formatting.md).
