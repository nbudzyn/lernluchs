# Story-Backlog

Dieses Backlog enthält nur geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; danach wird sie aus dem Backlog entfernt. Die Spec dokumentiert RED → GREEN → REFACTOR.

Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine Ausnahme braucht eine eigene Spec mit Begründung und Architekturtests. Zentrale
Dokumente werden erst mit der jeweiligen Umsetzung knapp um die dann geltenden Entscheidungen und nachgewiesenen Prüfungen ergänzt.

## Ausstehende Lernchecks

Story aufteilen und in Chargen zu je.... umsetzen?

Initial den Entwickler erinnern: KI-Model-Aufwand auf Hoch stellen

Alle Themen erhalten Lernchecks - sofern es für ein Thema noch keine gibt.

- Gibt es für ein Thema schon Lernchecks, dann unverändert lassen.
- Quellengebundene Fragenpools und Auswahlchecks einschließlich Erklärung.
- Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer Quellen; sie werden unabhängig fachlich geprüft.
- Elementare Browser-Tests, aber nicht einzeln für jedes Thema

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Außerdem werden alle für die Vertikalen "Themen" und "Lernchecks" relevanten Begriffe im Glossar mit genau einem englischen Begriff ergänzt
(sofern noch nicht vorhanden). Betroffene englische Bezeichner werden innerhalb der beiden Vertikalen vereinheitlicht, ohne Fachlogik zu
ändern.

Außerdem (VOR PRÜFEN!) den Fragenbestand aus der Vertikale topics in die Vertikale learning-checks verschieben (sofern noch nicht
geschehen).

- Die Vertikale learning-checks kennt durchaus die topics
- Die Vertikale topics kennt keine Fragen (zyklische Abhängikeit verhindern)
    - Möglicherweise muss app die topics und die learning-checks miteinander verknüpfen, damit die Themenübersichts-GUI den Lerncheck
      aufrufen kann.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung:

- target-architecture, verticals-and-boundaries prüfen, aktualisieren
- Kurz Produktstand und redaktionellen Richtlinie prüfen / grob aktualisieren.

## NF: Regelmäßig nachfragen

Regelmäßig nachfragen:

- Können wir ein gecodetes kleines Tool gebrauchen, dass dir beim nächsten Mal bei Aufgabe X hilft?
- Würde uns ein eigener Skill helfen?
- Sollte man die Doku fürs nächste Mal anpassen, um Zeit / Tokens zu sparen?

## NF: Akteure klar benennen

Statt User oder Benutzer oder Nutzer wollen wir zukünftig differenzieren:

- Der Lernende: Der Nutzer der installierten Anwendung
- Der Entwickler: Der menschliche User, der die Entwicklung dieser Anwendung steuert
- Die KI: Das LLM, hier in der Regel Codex, die große Teile der Entwicklung durchführt

Bezeichnungen überall umbenennen. Auch ins glossar eintragen, auch mit englischen Übersetzungen.

## NF: Language Server einbinden

Language Server einbinden

Ziel: Suchen und Code-Bearbeitung beschleunigen

- LSP?
    - IntelliJ MCP?

## NF: Reihenfolge der Themen zusammenziehen

Führe neue Karte und ihre Einfügeposition an einer Stelle in der Themen-Vertikale zusammen. Entferne die getrennte ID-Liste `additionsAfter`
als zweite Pflegequelle. Sichere mit einem zunächst roten Test ab, dass jede neue Karte genau einmal erscheint, alle 26 (?) bisherigen
Themen ihre relative Reihenfolge behalten und jeder Pfad in Listenreihenfolge verläuft. Ändere weder öffentliche Themenverträge noch
Pfadinhalte.

## NF: Redaktionelle Metadaten zusammenziehen

Fasse die gleichartigen Helfer in `newLearningTopics.ts` und `expandedLearningTopics.ts` zu einem internen Helfer der Themen-Vertikale
zusammen. Halte quellenspezifische Prüfdaten weiterhin einzeln änderbar; eine spätere Prüfung einer Quelle darf nicht automatisch alle
anderen Quellen umdatieren. Sichere bestehende Veröffentlichungs-, Prüf- und Wiedervorlagedaten durch Tests ab.

## NF: Empfehlungen für AGENTS.md-Dateien hart prüfen

Empfehlungen für AGENTS.md-Dateien aktuell ermitteln und mit Architektur-Tests (oder Commit-Hooks?) hart prüfen.

Erster Ansatz:

- Keine AGENTS.md-Datei soll länger als 150 (?) Zeilen sein.
- Es gibt eine AGENTS.md-Datei auf oberster Ebene (weitere sind erlaubt)

Auch CLAUDE.md anlegen, Verweis (mit @) auf AGENTS.md-Datei oder nur als Symlink.

Außerdem einmal prüfen, ob es widersprüchliche Regeln im Projekt gibt.

## Initial in einem Projekt angewendet / umfassend in einem Projekt umgesetzt

Zusätzlich zu "nicht gelernt" / "gelernt" gibt es einen weiteren Status je Thema: Die Praxiserfahrung (--> Glossar!).

Praxiserfahrung wird manuell angegeben - dazu gibt es in der Themenliste (--> Glossar!) ein weiteres Icon rechts neben dem Testfragen-Icon,
das eine kleine Ansicht öffnet.

- Die neue Ansicht ist gestaltet wie die Testfragen-Ansicht (Lernchecks)
- Der Benutzer wählt dort manuell zwischen:
    - Nicht angewendet
    - Initial in einem Projekt angewendet
    - Umfassend in einem Projekt umgesetzt
    - In Leib und Blut übergegangen (bitte weniger emphatisch formuliert)
- Es muss 1 Auswahl getroffen werden, die Auswahl wird sofort gespeichert
- Alternativ kann der User auch abbrechen, denn bleibt die bisherige Auswahl erhalten.

Implizit gilt für alle (alten und neuen) Themen: "Nicht angewendet"

Die Praxiserfahrung wird (analog zum grünen Haken für "gelern") in der Themenliste durch ein Symbol angezeigt.

- Nicht angewendet: Kein Symbol
- Initial in einem Projekt angewendet: Symbol soundso
- Umfassend in einem Projekt umgesetzt: Symbol soundso
- In Leib und Blut übergegangen: Symbol soundso
- Falls nötig werden Symbole nach den Projektregeln als Grafiken erzeugt (oder textuelle Zeichen in einer Farbe)

## Details des Themas anzeigen wie modaler Dialog

Details des Themas anzeigen wie modaler Dialog

Vertikalen: Themen

## Nichtbestehen auf Wunsch lokal speichern

Hat der User einen Lerncheck zu Ende durchgeführunt und NICHT bestanden, erhält er beim Verlassen der Übersicht eine Rückfrage: "Thema auf
nicht bestanden zurücksetzen?"

- (NUR) wenn der User das bestätigt, wird das Bestehen dieses Themas lokal wieder gelöscht. Alle anderen Elemente des Lernstands bleiben
  erhalten!

Der Browser-E2E-Test deckt Nichtbestehen mit und ohne Löschen des Lernstands UND DEN ERHALT ANDERER, BEREITS BESTANDENER THEMEN ab.

Außerdem werden alle Begriffe im Glossar mit genau einem englischen Begriff ergänzt (sofern noch nicht vorhanden). Betroffene englische
Bezeichner werden innerhalb der beiden Vertikalen vereinheitlicht, ohne Fachlogik zu ändern.

Vertikalen: Lernchecks, Lernfortschritt

## Nur die vorgegebenen Vertikalen bearbeiten

Jede aktivierte Spec muss die max. 2 Vertikalen nennen, die geändert werden sollen. Beim Commit (?) prüfen, ob wirklich maximal diese
angegebenen Vertikalen geändert wurden (sowohl Tests als auch Prod-Code - zusätzlich app und shared erlaubt sowie docs. main.tsx vielleicht
auf Anfrage. Bei den Tests auch architecture und quality.

## Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden

Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden. Möglicherweise gewisse Architekturen, Bibliotheken oder
Toolaufrufe verbieten?

## Bereits gestellte Fragen je Thema lokal merken

Die App merkt sich auf dem Gerät je Thema, welche Fragen bereits gestellt wurden. Neue Durchläufe bevorzugen ausschließlich noch nicht
gestellte Fragen, bis der Pool des Themas ausgeschöpft ist. Danach beginnt ein neuer Zyklus. Innerhalb eines Durchlaufs erscheint keine
Frage doppelt.

Die spätere Änderungs-Spec legt fest, wann eine abgebrochene Frage als gestellt gilt, wie ein Rest von weniger als fünf Fragen mit dem
nächsten Zyklus verbunden wird und wie veraltete Fragen-IDs nach Katalogänderungen behandelt werden. Ohne gespeicherten Stand bleibt der
Fragenablauf nutzbar. Browser-E2E-Tests prüfen mehrere Durchläufe, Ausschöpfung, Neustart und Abbruch.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Lokale Fragehistorie und Zyklusregel knapp in Produktstand und Architektur ergänzen.

## Durch die Oberfläche und Bedienung motiviert, aber nicht abgelenkt werden

Die Oberfläche soll motivierend, aber nicht ablenkend sein.

- Ein einheitliches Farbschema soll angenehm anzuschauen sein, Texte sollen gut lesbar sein (automatisch Light Mode und Dark Mode nach
  Auswahl des Betriebssystems / des Browsers).
    - Farben vorsehen (Story-Backlog) für erfolgreiche Lernchecks und ggf. für Fehlantworten
- Schriftgröße etwas größer als bisher
- Kein vertikales Scrollen!
- Horizontales Scrollen sollte eher selten nötig sein
- Auf dem PC mit Tasten bedienbar
- Auch auf Handy gut bedienbar
- Barrierefrei
- Der Inhalt steht im Vordergrund. Bedienelemente und statische Texte sollen wenig Platz verschwenden
- Es soll nicht nach "AI Slop" aussehen.

## Themen auf einer Landkarte erkunden

Die sechs Grundlagenthemen erscheinen als frei navigierbare grafische Landkarte mit fachlichen Querverbindungen. Lernende können jedes Thema
ohne Sperre auswählen. Die vorhandene zugängliche Liste bleibt als Fallback nutzbar, auch wenn die Grafik ausfällt. Die Landkarte liest
Katalog und bestätigten Fortschritt nur über kleine öffentliche Verträge und delegiert Änderungen an die zuständige Vertikale.
Browser-E2E-Tests prüfen Auswahl, Querverbindung und Listenfallback.

Falls wir inzwischen den 01.12.2026 oder später haben, werden in dieser Story die Quellen der vorhandenen Themen zu `AGENTS.md`,
Research/Plan/Tasks und OpenSpec erneut fachlich geprüft und bei Bedarf aktualisiert. - Falls Datum noch nicht erreicht, dann diesen Auftrag
in die nächste Story verschieben.

Vertikalen: Themen, Landkarte

Dokumentation nach Umsetzung: Landkarte, Fallback und Vertikalgrenzen knapp in Produktstand und Architektur ergänzen.

## App installieren und Kernabläufe offline nutzen

Nach dem ersten erfolgreichen Laden ist die öffentliche GitHub-Pages-App installierbar und zeigt offline Landkarte, Liste, Themen,
Lernchecks und bereits bestätigten Fortschritt. Der versionierte Service-Worker-Cache hält App und Katalog einschließlich Fragen je Build
zusammen; Updates mischen keine Build-Stände und überschreiben keinen lokalen Fortschritt. Der öffentliche Build enthält nur App und
Katalog, keine persönlichen Daten oder extern nachgeladenen Laufzeitressourcen. Externe Quellen können offline als nicht verfügbar
erscheinen und öffnen sich nur nach bewusster Aktion. Browser- und PWA-Prüfungen decken Erstladen, Offline-Nutzung und kontrollierte Updates
ab. Die neuen PWA-/Offline-Gates werden nach grünem Nachweis in der Qualitätsstrategie dokumentiert.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Installation, Offline-Grenzen, Cache-Strategie und tatsächlich grüne Prüfungen knapp in Produktstand,
Architektur und Qualitätsstrategie ergänzen.

## Kernabläufe und Release auf Zielbrowsern abnehmen

Lernende können die installierbare App auf den unterstützten Geräten durchgängig nutzen: ein Thema wählen, einen Lerncheck wiederholen,
Fortschritt bestätigen und die Kerninhalte nach dem Erstladen offline öffnen.

Die vollständige Pflichtsuite ist grün: Format, Lint, Typen, Inhalts- und Schema-Validierung, Unit- und Komponententests, Browser-E2E,
Architekturgrenzen, bekannte Schwachstellen und unzulässige Lizenzen, Produktionsbuild sowie PWA-/Offline-Prüfung. Insbesondere werden
Querverbindungen, Themen und Metadaten, Bestehen und Nichtbestehen mit anderem Fragensatz, bestätigter Fortschritt über Reload,
Offline-Nutzung und der Ausfall eines optionalen Quellenlinks geprüft. Automatisierte Tests decken definierte Desktop- und mobile Viewports
ab. Der GitHub-Pages-Release durchläuft dieselben Pflichtprüfungen; ein fehlendes oder fehlschlagendes Gate verhindert die Veröffentlichung.
GitHub Dependency Review und Dependabot ergänzen die Abhängigkeitsprüfung; Updates werden getrennt getestet und bewusst freigegeben.

Installation und Kernabläufe werden zusätzlich auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf einem
aktuellen iPhone geprüft. Browser, Version, Ablauf und Ergebnis werden in der Änderungs-Spec beziehungsweise dem Release-Nachweis
dokumentiert. Die bereits eingerichtete GitHub-Pages-Bereitstellung wird mit der installierbaren Version erneut geprüft. Nach grünem
Nachweis beschreibt die Qualitätsstrategie die tatsächlich eingerichteten Gates und Geräteprüfungen.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Unterstützte Browser, nachgewiesene Abläufe und Release-Gates knapp in Produktstand und Qualitätsstrategie
ergänzen.

## Quellen und Videos gezielt erkunden

Lernende sehen je Thema, welche Quellen und Videos verfügbar sind, erkennen deren Typ und Aktualität und öffnen externe Angebote nur nach
bewusster Aktion. Die redaktionelle Pflege bleibt im öffentlichen Katalog; die App bietet keine Inhaltsbearbeitung. Ein ausgefallener
externer Link blockiert das Thema nicht. Browser-Tests prüfen Anzeige und Öffnung.

Vertikale: Themen

Dokumentation nach Umsetzung: Tatsächliche Quell- und Videodaten, Pflege und Öffnungsverhalten knapp in Produktstand und redaktioneller
Richtlinie ergänzen.

## Aktualisierte und ersetzte Themen nachvollziehen

Lernende erkennen bei einem geänderten oder ersetzten Thema das fachliche Prüfdatum und gegebenenfalls einen Nachfolger. Ein archiviertes
Thema bleibt lesbar, damit frühere Lernschritte nachvollziehbar sind. Redaktionell werden fachliche Prüfung und bloße Textänderung getrennt
erfasst. Tests prüfen Archivierung und Nachfolgerhinweis.

Vertikale: Themen

Dokumentation nach Umsetzung: Archivierungs- und Nachfolgerregeln knapp in Produktstand und redaktioneller Richtlinie ergänzen.

## Persönliche Hinweise zu Themen festhalten

Lernende können zu einem Thema eine lokale Notiz oder einen Fehler- und Aktualitätshinweis festhalten und später wiederfinden. Hinweise
enthalten Themen-ID, Datum und kurze Begründung; sie bleiben ohne bewussten Export auf dem Gerät und gelangen nicht nach Git. Browser-Tests
prüfen Speichern, Wiederfinden und Trennung vom öffentlichen Katalog.

Vertikalen: Themen, Lernfortschritt

Dokumentation nach Umsetzung: Lokale Hinweise und ihren Datenfluss knapp in Produktstand, Architektur und redaktioneller Richtlinie
ergänzen.

## Lernziele aus dem eigenen Fortschritt setzen

Lernende können für ein Thema ein persönliches Ziel setzen, ändern und abschließen. Das Ziel zeigt den bestätigten Fortschritt, ohne ihn zu
ersetzen, und bleibt nach Reload erhalten. Browser-Tests prüfen diese Abläufe.

Vertikalen: Lernfortschritt, Lernziele

Dokumentation nach Umsetzung: Lernziele und ihre Beziehung zum Fortschritt knapp in Produktstand und Architektur ergänzen.

## Termine für Lernziele planen

Lernende können einem Ziel einen lokalen Termin geben, ändern oder entfernen und fällige Ziele in der App erkennen. Termine werden nicht
öffentlich übertragen. Browser-Tests prüfen Fälligkeit und Änderungen.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Terminverhalten knapp in Produktstand und Architektur ergänzen.

## Erinnerungen für fällige Lernziele einstellen

Lernende können für ein Ziel eine Erinnerung ein- und ausschalten. Fällige Erinnerungen erscheinen beim Öffnen der App, ohne Zeitdruck oder
Streaks. Browser-Tests prüfen Anzeige und Abschalten.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Erinnerungsregeln knapp in Produktstand und Architektur ergänzen.

## Benachrichtigungen für Erinnerungen erlauben

Lernende können Benachrichtigungen für bestehende Erinnerungen ausdrücklich aktivieren und wieder deaktivieren. Ohne Berechtigung bleiben
Erinnerungen in der App sichtbar. Die Änderungs-Spec klärt Browserunterstützung und den gewählten Mechanismus; Tests prüfen Zustimmung und
Fallback.

Vertikalen: Lernziele, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Berechtigungen, unterstützte Browser und Fallback knapp in Produktstand, Architektur und Qualitätsstrategie
ergänzen.

## Persönliche Daten exportieren und wiederherstellen

Lernende können Fortschritt, Ziele und Hinweise bewusst als Datei exportieren und auf einem Gerät wieder importieren. Vor dem Import sehen
sie, welche Daten ersetzt oder zusammengeführt würden, und bestätigen die Aktion. Ungültige Dateien verändern keine vorhandenen Daten.
Browser-Tests prüfen Export, Vorschau, Import und Fehlerfall.

Vertikalen: Lernfortschritt, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Exportformat, Importregeln und Datenschutz knapp in Produktstand und Architektur ergänzen.

## Inhaltsversionen von Themen und gelerntem Stand berücksichtigen

Erst mit dieser Story erhalten Themen fachliche Inhaltsversionen. Jede Änderung an einem Thema erzeugt eine neue Inhaltsversion. Zusätzliche
Fragen dürfen jederzeit zu einer bestehenden Inhaltsversion hinzukommen, ohne deren Nummer zu ändern. Quellen und Fragen sind jeweils einer
konkreten Inhaltsversion zugeordnet.

Wird ein Thema beantwortet, wird die zugehörige Inhaltsversion beim Speichern des Lernstands mitgeführt. Die Anzeige unterscheidet, ob ein
Thema in der aktuellen Inhaltsversion oder nur in einer älteren gelernt wurde. Ein späterer Versionswechsel löscht den bisherigen Lernstand
nicht. **Offene Frage für die spätere Spec:** Wird die Version schon nach jeder Antwort oder erst nach bewusster Bestätigung dauerhaft
gespeichert? Die Änderungs-Spec legt außerdem die genaue Versions- und Migrationsregel fest, auch für Lernstand ohne bisherige
Inhaltsversion und für reine Quellenänderungen. Browser-Tests prüfen Lernen, Versionswechsel, ältere Lernstände und zusätzliche Fragen ohne
Versionswechsel.

Bis zur Umsetzung dieser Story gibt es keine fachlichen Inhaltsversionen. Eine technische App- oder Katalog-Buildnummer ist davon getrennt.
Die betroffenen Vertikalen Themen, Lernchecks und Lernfortschritt werden für die Umsetzung in Schritte mit höchstens zwei Vertikalen pro
fachlichem Commit geschnitten.

Dokumentation nach Umsetzung: Versionsregeln und Bezug von Fragen, Quellen und Lernstand knapp in Produktstand, Architektur und
redaktioneller Richtlinie ergänzen.

## Persönlichen Zustand ohne Login zwischen Geräten synchronisieren

Lernende können ihren bestätigten persönlichen Zustand bewusst zwischen Geräten abgleichen, ohne Login oder serverseitige
Benutzerverwaltung. Die Änderungs-Spec prüft vor der Implementierung eine sichere, praktikable Lösung und legt Zustimmung,
Konfliktbehandlung, Löschung und Ausfallverhalten fest. Die bestehende lokale Nutzung bleibt unabhängig von einer Verbindung möglich.
Browser-Tests prüfen Abgleich, Konflikt und Offline-Fallback.

Vertikalen: Lernfortschritt, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Tatsächlichen Datenfluss, Grenzen und Sicherheitsentscheidung knapp in Produktstand und Architektur ergänzen.
