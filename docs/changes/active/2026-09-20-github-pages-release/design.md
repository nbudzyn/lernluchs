# Design: Öffentlicher GitHub-Pages-Releasepfad

## Workflow

Ein neuer, von CI getrennter Workflow startet bei Pushes auf `main` und
manuell über `workflow_dispatch`. Ein Build-Job installiert mit `npm ci`,
führt die vorhandene Pflichtsuite aus, ermittelt den Pages-Basispfad und baut
den Vite-Release. Nur `dist/` wird als GitHub-Pages-Artefakt hochgeladen. Ein
nachgelagerter Deploy-Job veröffentlicht dieses Artefakt in der Umgebung
`github-pages`.

Der Deploy-Job hängt explizit vom Build-Job ab und besitzt nur `pages: write`
und `id-token: write`; der Build-Job benötigt ausschließlich Lesezugriff.
GitHub-Action-Referenzen werden wie im bestehenden CI-Workflow auf vollständige
Commit-SHAs gepinnt und mit der geprüften Versionsbezeichnung kommentiert.

## Basispfad und statische Assets

Vite erzeugt derzeit URLs ab `/`. Eine GitHub-Projektseite wird hingegen unter
einem Repository-Pfad ausgeliefert. Der Workflow verwendet deshalb die Ausgabe
`base_path` von `actions/configure-pages` als Build-Eingabe. Die Vite-
Konfiguration oder ein kleiner, getesteter Build-Befehl übernimmt diesen Wert,
sodass `index.html` auf die lokalen Assets unter dem tatsächlichen Pages-Pfad
verweist. Für lokales Entwickeln bleibt der Basispfad `/`.

Ein automatischer Test liest den Pages-Build und weist nach, dass der
veröffentlichte Basispfad in den Asset-URLs erscheint. Die vorhandene
Build-Prüfung bleibt für den normalen lokalen Produktionsbuild zuständig.

## Sicherheit, Datenschutz und Kosten

GitHub Pages veröffentlicht den Build öffentlich. Der Workflow darf daher
keine Dokumentation, Testdaten, Git-Metadaten oder Zugangsdaten hochladen.
Das Artefakt enthält ausschließlich `dist/`. Der Code lädt keine externen
Laufzeitressourcen nach; der Build verwendet weiter lokale Assets.

GitHub Pages und GitHub Actions sind für öffentliche Repositories auf GitHub
Free verfügbar. Die Pages-Quelle muss durch eine berechtigte Person einmalig
in den Repository-Einstellungen aktiviert werden. Der Workflow verwendet nur
den automatisch bereitgestellten `GITHUB_TOKEN`, keine neue Abhängigkeit und
kein Geheimnis.

## Risiken und Alternativen

Eine private GitHub-Free-Repository-Konfiguration erfüllt die Voraussetzung
nicht; die Story darf sie weder öffentlich machen noch ihre Einstellungen
automatisch ändern. Ein dedizierter `gh-pages`-Branch würde generierte Dateien
in den Git-Verlauf schreiben und wird deshalb ausgeschlossen. Ein externer
Host würde Kosten-, Datenschutz- und Zugangsthemen eröffnen und ist ebenfalls
nicht Teil dieser Story.

Die jeweilige Pages-URL hängt vom Konto- und Repository-Namen ab und wird nicht
hart codiert. Der Workflow gibt sie über den Deployment-Output aus.
