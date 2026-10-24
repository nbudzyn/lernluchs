## Guardrails prüfen: Enthalten sie Allgemeinwissen?
Guardrails prüfen: Enthalten sie Allgemeinwissen? - Dann das Allgemeinwissen entfernen, so dass der Fokus auf den projektspezifischen Besonderheiten liegt.
Ziel: Kontext sparen - bei gleichbleibender Code-Ergebnis-Qualität und gleicher oder vielleicht sogar kürzerer Entwicklungszeit
- Weniger spezielle Vorgaben -> weniger Entwicklungszeit?
  Eventuell an zentraler / passender Stelle als Vorgaben notieren

## Ziel und Nicht-Ziele

Aktuelle Repository-Dokumentation kürzen und Pflichtlektüre nach Aufgaben eingrenzen.
AGENTS.md, Produktcode, Tests und bestehende archivierte Specs bleiben unverändert.
Andere Backlog-Stories werden nicht bearbeitet. Keine fachliche Vertikale betroffen;
keine neuen Abhängigkeiten. Weniger Kontext ist nachweisbar, gleiche Ergebnisqualität
und kürzere Entwicklungszeit bleiben über spätere Stories zu beobachtende Annahmen.

## Entscheidungen

- Kürzungsliste vorab besprochen. Projektspezifische Regeln bleiben verbindlich.
  Wiederholungen nur bei nachweislich gemeinsamem Lesepfad kürzen; getrennte
  Rollen und kopierbare Prompts müssen ihren nötigen Kontext behalten.
- Reviewvertrag und Fragenerstellung nur vorsichtig verdichten. Alle Fowler-Smells,
  Reviewgrenzen und die sorgfältige Distraktorentwicklung erhalten.
- Veränderliche Bestandsangaben aus aktuellen Leitfäden entfernen; normative
  Grenzwerte, Kompatibilitätsverträge und datierte Archivnachweise erhalten.
- latest-developments.md vor dieser Bearbeitung einmalig unverändert nach
  docs/product/archive/latest-developments-2026-09.md kopieren. Die Arbeitsdatei
  enthält danach nur einen wiederverwendbaren Rechercheablauf, keine Ergebnisse.
- Produktstories liefern vertikale, überprüfbare Ergebnisse statt technischer
  Schichten. Reine Refactoring- und Dokumentations-Stories bleiben zulässig.
- Dokumentations-Stories erhalten eine manuelle Dokumentenabnahme anstelle einer
  Browserprüfung. Keine zusätzliche Dokumentenabnahme bei normalen Produktstories.
  Nutzerbestätigung und Commit-Freigabe bleiben erforderlich.
- README an den abgestuften Prüfumfang anpassen; Lernpfadfilter knapp als lokal
  gespeichert beschreiben. „Nur“ und „immer“ bleiben in Falschantworten verboten.
- Externe fachliche Fragenprüfung ist unabhängig vom einmaligen Code-Subagentenreview.
- Kein Regelkonflikt zwischen reiner Frage und ausdrücklich beauftragter
  Storypflege; dafür keine neue Ausnahmeregel einführen.
- Architekturentscheidung: Deployment, Datenbesitz, Datenschutz, Import-/CSS-Grenzen,
  öffentliche Verträge und Typmodellierungsziel bleiben unverändert. Der pauschale
  Appell zum Kleinhalten von Änderungen entfällt als Allgemeinwissen; konkrete
  Vertikal-, Spec-, Prüf- und Freigabeschranken bleiben bestehen.

## Risiken und Abnahme

- Keine Regel durch Wegkürzen ihres einzigen verpflichtenden Leseorts verlieren.
  Index, Workflow, Implementierung, Inhaltsarbeit und Reviewer separat prüfen.
- Alte Abschnittslinks erhalten oder alle aktuellen Verweise anpassen.
- Archivkopie muss bytegleich zum bisherigen Recherchetext sein; AGENTS.md
  und bestehende Archive müssen gegen HEAD unverändert sein.
- Veraltete Produktbeschreibung anhand bestehender Filterimplementierung berichtigen;
  keine neue Fachrecherche oder Produktänderung Bestandteil dieser Story.
- Reduzierung aktueller Leitfäden und konkret verkürzte Pflichtlesepfade nachweisen;
  Archivkopie nicht als Kontextgewinn doppelt zählen.

## Umsetzung und Nachweise

Reine Dokumentations-Story: keine Unit-/E2E-RED-/GREEN-Läufe, App-Browserprüfung
oder Subagentenreview. Inhalt, Verweise, Regelabdeckung und Diff werden geprüft.

- Ausgangsbefund: relative Dateiverweise erreichbar; widersprüchliche Angaben zu
  Browserpflicht und Filterpersistenz identifiziert. Filterbeschreibung gegen
  vorhandene Implementierung von pathFilter.ts und TopicBrowser.tsx geprüft.
- Umsetzung: aktuelle Leitfäden verdichtet, veränderliche Themen-/Speicherbestände
  entfernt. Einrichtungen/Ports und IntelliJ-Details auf eigene bedarfsabhängige
  Lesepfade gelegt. Recherchedokument enthält nur Vorgehen; vollständige Ergebnis-
  Archivkopie vor Bearbeitung bytegleich geprüft und gegen ursprünglichen Git-Inhalt bestätigt.
- Progressive Disclosure: Start/Fortsetzung liest Worktree-Ablauf; Einrichtung
  zusätzlich Setup, Formatierung nur bei IDE-Auftrag. Produktänderungen lesen
  Datenschutz/Architektur und Prüfregeln; Inhaltsaufträge ihre redaktionellen Regeln.
  Reviewer erhält weiterhin eigenständig den vollständigen Reviewvertrag samt
  Schutzauftrag. Wiederholungen für diese getrennten Rollen/Lesepfade erhalten.
- Regelabgleich: Review-Prüfraster ab „Gesucht sind konkrete Verbesserungen“ bis
  Dokumentende einschließlich aller Smells, Lesegrenzen und Übergabe wortgleich
  zum Ausgangsstand. Distraktor-Schritte 1–5 und 7 wortgleich; Schritt 6 nur an
  das Verbot absoluter Signalwörter angeglichen. Fachliches Fragenreview separat erläutert.
- Verweisprüfung: zunächst einen falschen Anker zur Port-Anleitung gefunden und
  korrigiert; abschließend PASS, 23 Dokumente, 116 relative Verweise, 55 Anker,
  Exitcode 0. Keine Netzprüfung: bestehende externe URLs nicht fachlich neu bewertet.
- Umfangsnachweis: aktuelle Leitfäden ohne Rechercheergebnisse rund ein Fünftel
  weniger Text; neue Einrichtungsdateien mitgezählt. Normaler Worktree-Lesepfad
  von 16.724 auf 7.630 Zeichen (LF-normalisiert). Einschließlich des ersetzten
  Recherchetexts rund ein Drittel weniger aktuelle Dokumentation, Archiv ausgenommen.
- AGENTS.md, Produktcode, Tests, Konfiguration und bestehende Archive unverändert.
  Keine App-/Unit-/E2E-Tests oder Browserprüfung nötig; passende Dokumentprüfungen
  ersetzen diese Läufe bei dieser reinen Dokumentations-Story.
- Manuelle Dokumentenabnahme und Commit-Freigabe: erfolgt.
