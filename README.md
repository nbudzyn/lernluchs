# KI-Lernlandkarte

Diese Dateien sind der portable Dokumentationsentwurf für das spätere öffentliche
GitHub-Repository der KI-Lernlandkarte. Sie enthalten absichtlich **keinen**
Anwendungscode und erzeugen noch kein Repository.

Die App ist eine öffentliche, statische und installierbare PWA. Lerninhalte sind
öffentlich; persönlicher Lernfortschritt bleibt lokal auf dem jeweiligen Gerät.

## Einstieg

1. [Dokumentationsindex](docs/INDEX.md) – welches Dokument für welche Frage
   gelesen werden muss.
2. [Produktvision und Version 0](docs/product/vision-and-scope.md) – für
   Produkt- und Inhaltsentscheidungen.
3. [Dauerhafte Vorgaben](docs/governance/durable-rules.md) – gelten bei jeder
   Änderung.
4. [Änderungs-Workflow](docs/changes/README.md) – für jedes neue Teil-Feature.
5. [Aktive Running-Skeleton-Spec](docs/changes/active/2026-09-20-running-skeleton/proposal.md)
   – der erste geplante Durchstich.

## Übernahme in das neue Repository

Beim Anlegen des öffentlichen Repositories wird dieser Ordner als Repository-
Wurzel übernommen. Die bestehende private Datei
`KI-Tool-Landkarte-2026-09-20.md` wird dann nach
`docs/content/ki-tool-landkarte.md` kopiert. Vor ihrer inhaltlichen Nutzung in
der App sind ihre Aussagen gemäß der redaktionellen Richtlinie erneut zu
prüfen; sie ist eine Ausgangsquelle, keine ungeprüfte Datenquelle.

Der eigene Code erhält die Lizenz [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).
Für fremde Quellen, Videos und Markenzeichen werden keine Lizenzrechte
beansprucht; sie werden nur korrekt referenziert.

## Lokal ausführen

Verwende für reproduzierbare lokale Prüfungen Node **24.15.x**. Die aktuellen
Entwicklungswerkzeuge unterstützen Node 25 nicht durchgängig und können dort
Engine-Warnungen ausgeben.

```powershell
npm install
npm run dev
```

Vor einem Commit wird mindestens `npm run check` ausgeführt und die geänderte
Anwendung anschließend lokal im Browser geprüft.
