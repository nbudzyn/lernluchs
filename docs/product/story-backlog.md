# Story-Backlog

Dieses Backlog enthält nur geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; danach wird sie aus dem Backlog entfernt. Die Spec dokumentiert RED → GREEN → REFACTOR.

Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine Ausnahme braucht eine eigene Spec mit Begründung und Architekturtests. Zentrale
Dokumente werden erst mit der jeweiligen Umsetzung knapp um die dann geltenden Entscheidungen und nachgewiesenen Prüfungen ergänzt.

## Sich überschneidende Themen nach Prüfung zusammenlegen
Prüfe, welche Themen sich deutlich überschneiden und gibt eine tabellarische Übersicht.
Stimme mit dem Entwickler ab, welche Themen zusammengelegt werden sollen.
Beim Zusammenlegen:
- Themen-Titel und -Anker zusammenlegen
- Probleme, Beschreibung und Grenzen zusammenlegen, dabei keine Informationen wegfallen lassen
- Alle Fragen der Fragenpools zusammenfügen, so dass sich am Ende die doppelte Menge von Fragen ergibt (klare Duplikate entfernen); sollte eine Maximalgrenze für die Fragen überschritten sein, dann Grenze erhöhen.
- Alle Quellen zusammenfügen und sortieren: Podcasts ganz oben bei den Sekundärquellen. Sollte eine Grenze überschritten sein, Grenze erhöhen

Bei einigen Themen (die für sich stehen oder zusammengelegt werden) steht sehr im Vordergrund, dass eine Technologie zu prüfen / abzuwägen sei oder erst nach genauer Abwägung einzusetzen.
- Im Titel soll die Technologie im Vordergrund stehen, nicht der Prüfbedarf
- So auf im Anker
- Das Problem kann gern weiter eingeschränkt werden, so dass klar wird in welche Kontext die Lösung sinnvoll ist
- Die Beschreibung soll die Prüfung weiterhin erwähnen (solange sie nicht schon im Problem genannt ist). Trotzdem soll der eigentliche Inhalt klar werden und wie er das Problem (bestenfalls) löst.

## Node 24 für Entwicklung und CI vereinheitlichen

Die derzeit verwendete Node-Version `25.9.0` liegt außerhalb der unterstützten Versionen mehrerer Entwicklungsabhängigkeiten.
Entwicklung und CI sollen eine einheitliche, unterstützte Node-24-Version verwenden; die derzeitigen Engine-Anforderungen verlangen mindestens `24.15.0`.

- Vor der Umsetzung eine eigene Änderungs-Spec anlegen und eine aktuelle, unterstützte Node-24-Patchversion festlegen.
- Lokale Versionsvorgaben, Projektkonfiguration, CI und Entwicklungsdokumentation auf diese Version abstimmen.
- Installation mit `npm ci`, Pflichtsuite und Audit unter Node 24 prüfen; die bisherigen Node-Engine-Warnungen müssen entfallen.
- Getrennt vom Sicherheitspatch umsetzen und committen.

## Jüngste Private Notizen in Themen (oder als neue Themen) übernehmen 
- Jüngste Private Notizen in Themen (oder als neue Themen) übernehmen

## Liste der Lernpfade mit Filter (Einzelauswahl)

- ein kompakten alternativer Einstieg über einen oder mehrere Lernpfade auf derselben Seite.

## Verwendung von nmp prüfen, ggf. regulieren

Verwendung von nmp prüfen, ggf. regulieren

## OWASP Dependency Check einbinden

OWASP Dependency Check einbinden

- Immer? Nach jeder Änderung von... was? Am Ende vor dem Commit? Vor jedem install...?

## Regelmäßige Aktivitäten planen und zeitgesteuert auf Ausführung hinweisen

- Generell überlegen: Vielleicht eine Liste der regelmäßigen Aktivitäten machen, die einmal täglich geprüft und dann während der Entwicklung
  vorgeschlagen wird?
    - z.B.:
        - Auf Secrets prüfen (z.B. mit TruffleHog?!)
        - Links (Primärquellen und Sekundärquellen) auf Erreichbarkeit und Sicherheitsrisiken prüfen, ggf. ersetzen (Themen höchstens
          minimal anpassen; Fragen bleiben gleich)
        - Aktualisierung der Inhalte prüfen
        - Auf personenbezogene Daten prüfen und anbieten, sie zu entfernen oder zu anonymisieren

Vielleicht eine eigene Datei, die dann durchgegangen wird, wenn ein Kalenderdatum, DAS IN DER ZENTRALEN DOKU STEHT, erreicht oder
überschritten ist? (Dieses Kalenderdatum muss dann nach der Abarbeitung weitergesetzt werden.)

## Zunächst nur Tests der jeweiligen Vertikale laufen lassen?

Nur Tests der Vertikalen laufen lassen? Alle Tests erst, wenn die grün sind? Vor dem Commit immer alle Tests

## Link zu ChatGPT zum Lernen?

Ein Link oder Button öffnet ChatGPT mit dem Prompt "Das hier möchte ich lernen: " und dann dem vollständigen Texte des Themas inkl. Primär-
und vielleicht Sekundärquellen
Man könnte den /teach-Skill von Matt einbinden

## Link zur Google-KI zum Lernen

Ein Link oder Button öffnet die online-Google-KI mit dem Prompt "Das hier möchte ich lernen: " und dann dem vollständigen Texte des Themas
inkl. Primär- und vielleicht Sekundärquellen

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

- LSP
    - IntelliJ MCP? oder ACP

## Detaillierte redaktionelle Metadaten nur auf Wunsch zeigen

Bei redaktionelle Metadaten nur fachlich geprüft anzeigen ( "September 2026") - den Rest erst auf Klick aufklappen

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

## Nichtbestehen auf Wunsch lokal speichern

Hat der User einen Lerncheck zu Ende durchgeführunt und NICHT bestanden, erhält er beim Verlassen der Übersicht eine Rückfrage: "Thema auf
nicht bestanden zurücksetzen?"

- (NUR) wenn der User das bestätigt, wird das Bestehen dieses Themas lokal wieder gelöscht. Alle anderen Elemente des Lernstands bleiben
  erhalten!

Der Browser-E2E-Test deckt Nichtbestehen mit und ohne Löschen des Lernstands UND DEN ERHALT ANDERER, BEREITS BESTANDENER THEMEN ab.

Außerdem werden alle Begriffe im Glossar mit genau einem englischen Begriff ergänzt (sofern noch nicht vorhanden). Betroffene englische
Bezeichner werden innerhalb der beiden Vertikalen vereinheitlicht, ohne Fachlogik zu ändern.

Vertikalen: Lernchecks, Lernstand

## Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden

Sicherstellen, dass Architektur oder Bibliotheken nicht unbemerkt geändert werden. Möglicherweise gewisse Architekturen, Bibliotheken oder
Toolaufrufe verbieten?

## Bereits gestellte Fragen je Thema lokal merken

Die App merkt sich auf dem Gerät je Thema, welche Fragen bereits gestellt wurden. Neue Durchläufe bevorzugen ausschließlich noch nicht
gestellte Fragen, bis der Pool des Themas ausgeschöpft ist. Danach beginnt ein neuer Zyklus. Innerhalb eines Durchlaufs erscheint keine
Frage doppelt.

Die spätere Änderungs-Spec legt fest, wann eine abgebrochene Frage als gestellt gilt, wie ein Rest von weniger als fünf Fragen mit dem
nächsten Zyklus verbunden wird und wie veraltete Fragen-IDs nach Änderungen an Themen oder Fragenpools behandelt werden. Ohne gespeicherten Stand bleibt der
Fragenablauf nutzbar. Browser-E2E-Tests prüfen mehrere Durchläufe, Ausschöpfung, Neustart und Abbruch.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Lokale Fragehistorie und Zyklusregel knapp in Produktstand und Architektur ergänzen.

## Themen auf einer Landkarte erkunden

Die sechs Grundlagenthemen erscheinen als frei navigierbare grafische Landkarte mit fachlichen Querverbindungen. Lernende können jedes Thema
ohne Sperre auswählen. Die vorhandene zugängliche Liste bleibt als Fallback nutzbar, auch wenn die Grafik ausfällt. Die Landkarte liest
Themen und bestätigten Lernstand nur über kleine öffentliche Verträge und delegiert Änderungen an die zuständige Vertikale.
Browser-E2E-Tests prüfen Auswahl, Querverbindung und Listenfallback.

Falls wir inzwischen den 01.12.2026 oder später haben, werden in dieser Story die Quellen der vorhandenen Themen zu `AGENTS.md`,
Research/Plan/Tasks und OpenSpec erneut fachlich geprüft und bei Bedarf aktualisiert. - Falls Datum noch nicht erreicht, dann diesen Auftrag
in die nächste Story verschieben.

Vertikalen: Themen, Landkarte

Dokumentation nach Umsetzung: Landkarte, Fallback und Vertikalgrenzen knapp in Produktstand und Architektur ergänzen.

## App installieren und Kernabläufe offline nutzen

Nach dem ersten erfolgreichen Laden ist die öffentliche GitHub-Pages-App installierbar und zeigt offline Landkarte, Liste, Themen,
Lernchecks und bereits bestätigten Fortschritt. Der versionierte Service-Worker-Cache hält App und Themen einschließlich Fragen je Build
zusammen; Updates mischen keine Build-Stände und überschreiben keinen lokalen Fortschritt. Der öffentliche Build enthält nur App und
Themen, keine persönlichen Daten oder extern nachgeladenen Laufzeitressourcen. Externe Quellen können offline als nicht verfügbar
erscheinen und öffnen sich nur nach bewusster Aktion. Browser- und PWA-Prüfungen decken Erstladen, Offline-Nutzung und kontrollierte Updates
ab. Die neuen PWA-/Offline-Gates werden nach grünem Nachweis in der Qualitätsstrategie dokumentiert.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Installation, Offline-Grenzen, Cache-Strategie und tatsächlich grüne Prüfungen knapp in Produktstand,
Architektur und Qualitätsstrategie ergänzen.

## Kernabläufe und Release auf Zielbrowsern abnehmen

Die vollständige Pflichtsuite ist grün: Lint, Typen, Inhalts- und Schema-Validierung, bekannte Schwachstellen und unzulässige Lizenzen, Produktionsbuild sowie PWA-/Offline-Prüfung. Insbesondere werden
Querverbindungen, Themen und Metadaten, Bestehen und Nichtbestehen mit anderem Fragensatz, bestätigter Fortschritt über Reload,
Offline-Nutzung geprüft. Der GitHub-Pages-Release durchläuft dieselben Pflichtprüfungen; ein fehlendes oder fehlschlagendes Gate verhindert die Veröffentlichung.
GitHub Dependency Review und Dependabot ergänzen die Abhängigkeitsprüfung; Updates werden getrennt getestet und bewusst freigegeben.

Installation und Kernabläufe werden zusätzlich auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf einem
aktuellen iPhone geprüft. Browser, Version, Ablauf und Ergebnis werden in der Änderungs-Spec beziehungsweise dem Release-Nachweis
dokumentiert. Die bereits eingerichtete GitHub-Pages-Bereitstellung wird mit der installierbaren Version erneut geprüft. Nach grünem
Nachweis beschreibt die Qualitätsstrategie die tatsächlich eingerichteten Gates und Geräteprüfungen.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Unterstützte Browser, nachgewiesene Abläufe und Release-Gates knapp in Produktstand und Qualitätsstrategie
ergänzen.

## Aktualisierte und ersetzte Themen nachvollziehen

Lernende erkennen bei einem geänderten oder ersetzten Thema das fachliche Prüfdatum und gegebenenfalls einen Nachfolger. Ein archiviertes
Thema bleibt lesbar, damit frühere Lernschritte nachvollziehbar sind. Redaktionell werden fachliche Prüfung und bloße Textänderung getrennt
erfasst. Tests prüfen Archivierung und Nachfolgerhinweis.

Vertikale: Themen

Dokumentation nach Umsetzung: Archivierungs- und Nachfolgerregeln knapp in Produktstand und redaktioneller Richtlinie ergänzen.

## Persönliche Hinweise zu Themen festhalten

Lernende können zu einem Thema eine lokale Notiz oder einen Fehler- und Aktualitätshinweis festhalten und später wiederfinden. Hinweise
enthalten Themen-ID, Datum und kurze Begründung; sie bleiben ohne bewussten Export auf dem Gerät und gelangen nicht nach Git. Browser-Tests
prüfen Speichern, Wiederfinden und Trennung von den öffentlichen Themen.

Vertikalen: Themen, Lernstand

Dokumentation nach Umsetzung: Lokale Hinweise und ihren Datenfluss knapp in Produktstand, Architektur und redaktioneller Richtlinie
ergänzen.

## Lernziele aus dem eigenen Fortschritt setzen

Lernende können für ein Thema ein persönliches Ziel setzen, ändern und abschließen. Das Ziel zeigt den bestätigten Fortschritt, ohne ihn zu
ersetzen, und bleibt nach Reload erhalten. Browser-Tests prüfen diese Abläufe.

Vertikalen: Lernstand, Lernziele

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

## Mutation Testing einführen?

Mutation Testing einführen?

## Benachrichtigungen für Erinnerungen erlauben

Lernende können Benachrichtigungen für bestehende Erinnerungen ausdrücklich aktivieren und wieder deaktivieren. Ohne Berechtigung bleiben
Erinnerungen in der App sichtbar. Die Änderungs-Spec klärt Browserunterstützung und den gewählten Mechanismus; Tests prüfen Zustimmung und
Fallback.

Vertikalen: Lernziele, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Berechtigungen, unterstützte Browser und Fallback knapp in Produktstand, Architektur und Qualitätsstrategie
ergänzen.

## Für TDD: TIA Parasoft

Für TDD: TIA Parasoft

## Persönliche Daten exportieren und wiederherstellen

Lernende können Fortschritt, Ziele und Hinweise bewusst als Datei exportieren und auf einem Gerät wieder importieren. Vor dem Import sehen
sie, welche Daten ersetzt oder zusammengeführt würden, und bestätigen die Aktion. Ungültige Dateien verändern keine vorhandenen Daten.
Browser-Tests prüfen Export, Vorschau, Import und Fehlerfall.

Vertikalen: Lernstand, PWA/Zuverlässigkeit

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

Bis zur Umsetzung dieser Story gibt es keine fachlichen Inhaltsversionen. Eine technische App- oder Buildnummer der Themen ist davon getrennt.
Die betroffenen Vertikalen Themen, Lernchecks und Lernstand werden für die Umsetzung in Schritte mit höchstens zwei Vertikalen pro
fachlichem Commit geschnitten.

Dokumentation nach Umsetzung: Versionsregeln und Bezug von Fragen, Quellen und Lernstand knapp in Produktstand, Architektur und
redaktioneller Richtlinie ergänzen.

## Persönlichen Zustand ohne Login zwischen Geräten synchronisieren

Lernende können ihren bestätigten persönlichen Zustand bewusst zwischen Geräten abgleichen, ohne Login oder serverseitige
Benutzerverwaltung. Die Änderungs-Spec prüft vor der Implementierung eine sichere, praktikable Lösung und legt Zustimmung,
Konfliktbehandlung, Löschung und Ausfallverhalten fest. Die bestehende lokale Nutzung bleibt unabhängig von einer Verbindung möglich.
Browser-Tests prüfen Abgleich, Konflikt und Offline-Fallback.

Vertikalen: Lernstand, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Tatsächlichen Datenfluss, Grenzen und Sicherheitsentscheidung knapp in Produktstand und Architektur ergänzen.
