## Einige ausstehende NotebookLM-Podcasts aus den Primärquellen erzeugen
- So lange Ausstehende NotebookLM-Podcasts aus den Primärquellen erzeugen, bis das kostenfreie Kontingent ausgeschöpft ist.
- Prüfen, welche Podcasts bereits beauftragt sind.
- Nur dort, wo es noch keine Primärquellen-Podcasts gibt.
- Prio: Solche Themen, die für die Einbindung einer KI in eine Java-Software relevant sind
- NICHT abwarten, sondern nur beantragen (wir laden später en bloc herunter)
- Bei Fragen: Fragen!

### Ziel und Umfang

Reiner Beauftragungsauftrag nach [Podcast-Ablauf](../../content/notebooklm-podcasts.md):
vorhandene lokale Zuordnungen und Notebooks zur Duplikatvermeidung abgleichen,
geeignete fehlende Podcasts aus den textuellen Primärquellen beauftragen und beide
kostenlosen Erzeugungswege bis zum dort definierten Stoppkriterium prüfen.
Keine Downloads, Audioübernahme, App-Änderungen, Abos oder automatische Fortsetzung.

### Vertikalen und Entscheidungen

Keine Änderung einer fachlichen Vertikale; im Repository werden nur diese Spec
und das Backlog bearbeitet. Arbeitsort ist der zugeordnete temporäre Worktree
`C:\Users\nbudzyn\.codex\worktrees\e156\lernluchs`, Branch
`codex/commission-pending-primary-podcasts`.
Themenauswahl, Quellenprüfung, Notebook-Zuordnungen, Bestätigungen und Kontingentnachweise
bleiben lokal außerhalb von Git. Neue Aufträge erhalten Deutsch, Detaillierte
Analyse, Standardlänge und das Wunschziel von ungefähr 35 Minuten; Stichtag
03.11.2026, Betrachtungszeitraum 03.05.2026 bis 03.11.2026.

### Risiken und Abnahme

Vorhandene Aufträge auch über Monatsgrenzen hinweg erhalten. Unklare Starts nicht
erneut absenden. Wesentliche Importlücken verhindern die Beauftragung des Themas.
Nach bestätigter Beauftragung unmittelbar informieren, ohne auf Fertigstellung zu
warten. Abschluss anhand der lokalen Auftragsnachweise und Dokumentenprüfung;
Manuelle Dokumentenabnahme, Commit-Freigabe und Veröffentlichung nach `origin/main`
sind erfolgt beziehungsweise ausdrücklich freigegeben.

### Nachweise

Arbeitsort, sauberer Ausgangsstand, aktuelle lokale/Remote-Basis und eigener
Schreibbesitz vor Aktivierung geprüft. Node 24.22.1 prozesslokal ausgewählt.
Lokalen Auftragsbestand und vorhandene Primärquellen-Notebooks abgeglichen;
bereits abgedeckte Themen übersprungen. Neue Aufträge erst nach vollständigem
Import und Abgleich der Original-URLs, aktiver Quellenauswahl sowie gespeicherter
Linkfreigabe mit deaktivierter Kopieroption abgesendet. Deutsch, Detaillierte
Analyse und Standardlänge vor jedem Absenden geprüft; thematische Schwerpunkte
und Quellenbegrenzungen im Fokusfeld ergänzt.

Die Originalseiten der verwendeten Quellen auf Erreichbarkeit, Autorität und
Abdeckung geprüft. Herstellerangaben, produktspezifische Verfahren, ältere
Studien und versionsgebundene Referenzen in den Prompts entsprechend eingegrenzt.
Die Quellenprüfung je URL und alle bestätigten Start-/Planungsnachweise liegen
ausschließlich im lokalen Statusverzeichnis gemäß Podcast-Ablauf.

Beauftragungsumfang bis zum festgelegten Stoppkriterium ausgeschöpft; beide
kostenlosen Erzeugungswege anhand der aktuellen Oberfläche geprüft. Konkrete
Kontingent- und Warteschlangennachweise sowie eine vollständig importierte,
noch nicht beauftragte Vorbereitung bleiben lokal erhalten. Unmittelbar nach
Bestätigungen informiert; keine Fertigstellungsabfragen, Downloads, Übernahmen
oder automatische Wiederaufnahme vorgenommen. Verwendete Browser geschlossen.

`npm run --silent test:docs`: 1 Test bestanden, Exitcode 0, 1,66 s.
Keine App-Pflichtsuite oder App-Browserprüfung erforderlich, da ausschließlich
Dokumentation im Repository geändert wurde. Manuelle Dokumentenabnahme und
Commit-Freigabe erfolgt; Spec als `0085` archiviert.
RED/GREEN und Subagentenreview sind mangels Produkt-, Code- oder Teständerungen
nicht anwendbar.
