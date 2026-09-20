# Akzeptanz: Running Skeleton

## Produktnachweise

- Die PWA ist öffentlich über GitHub Pages erreichbar und installierbar.
- Die sechs Themen des Grundlagenpfads sind als frei navigierbare Karte mit
  Querverbindungen und als Listenfallback nutzbar.
- Jede Lernkarte ist deutsch, knapp, fachlich geprüft, mit Quellen und
  Aktualitätsmetadaten versehen.
- Jeder Lerncheck verwendet mehrere, themenspezifische Auswahlfragen ohne
  Zeitdruck. Alle ausgewählten Antworten müssen korrekt sein.
- Nach Nichtbestehen sind korrekte Lösung, Begründung und Quelle sofort
  sichtbar; eine Wiederholung verwendet einen anderen Fragensatz.
- Nach Bestehen zeigt die App einen änderbaren Fortschrittsvorschlag; ein
  bestätigter Fortschritt bleibt nach Reload erhalten.
- Karte, Lernkarten, Checks und Fortschritt funktionieren nach dem ersten
  Laden offline. Externe Quellen dürfen offline nicht verfügbar sein.

## Architektur-, Datenschutz- und Qualitätsnachweise

- Kein Login, keine Telemetrie, kein KI-Schlüssel, kein Schreiben nach Git.
- Architekturtests verhindern unzulässige Vertikalimporte.
- Typ-, Inhalts-, Unit-, Komponenten-, E2E-, Abhängigkeits- und
  PWA-Prüfungen sind grün.
- Die Installation und Kernabläufe sind auf Samsung Internet/Android, Chrome
  und Firefox unter Windows 11 sowie Safari auf aktuellem iPhone geprüft.
