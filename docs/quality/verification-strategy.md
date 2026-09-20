# Qualitäts- und Verifikationsstrategie

## Qualitätsziel

Kein Release darf bestehenden, bestätigten Nutzen still beschädigen. Fehler in
Karte oder Quellen dürfen weder lokalen Lernfortschritt löschen noch die
vollständige Nutzung verhindern.

## Pflichtprüfungen in CI

Jede Änderung durchläuft mindestens:

1. Format-, Lint- und TypeScript-Prüfung.
2. Inhalts- und Schema-Validierung, einschließlich Pflichtmetadaten und
   gültiger Referenzen.
3. Unit- und Komponententests.
4. Browser-E2E-Tests für Kernabläufe.
5. Architekturtests für Importgrenzen und Zyklen.
6. Abhängigkeitsprüfung auf neue bekannte Schwachstellen und unzulässige
   Lizenzen.
7. Produktionsbuild und PWA-/Offline-Prüfung.

Ein fehlender oder fehlschlagender Check blockiert Veröffentlichung.

## Kern-E2E-Fälle für Version 0

- Karte öffnen und ein Thema über eine Querverbindung auswählen.
- Lernkarte und Aktualitätsmetadaten anzeigen.
- Lerncheck bestehen; Fortschrittsvorschlag bestätigen; App neu laden;
  Fortschritt ist weiter vorhanden.
- Lerncheck nicht bestehen; Lösung und Quelle werden angezeigt; ein weiterer
  Versuch nutzt einen anderen Fragensatz.
- Anwendung nach Erstladen offline öffnen und Kerninhalt nutzen.
- Fehler in einem optionalen externen Link beeinträchtigt Karte und
  Lernfortschritt nicht.

## Architektur- und Supply-Chain-Prüfung

dependency-cruiser erzwingt die Importregeln zwischen Vertikalen. GitHub
Dependency Review verhindert das Einführen bekannter verwundbarer
Abhängigkeiten. Dependabot erstellt getrennte Aktualisierungsvorschläge; jeder
Vorschlag durchläuft die gesamte Suite und benötigt eine bewusste Freigabe.

## Geräteprüfung

Automatisierte Tests decken die definierten Desktop- und mobilen Viewports ab.
Vor einem Release wird zusätzlich die Installation und Kernnutzung auf realem
Samsung Internet/Android sowie Safari auf einem aktuellen iPhone geprüft.
