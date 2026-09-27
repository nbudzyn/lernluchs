# Story-Backlog

Dieses Backlog enthält nur geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; danach wird sie aus dem Backlog entfernt. Die Spec dokumentiert RED → GREEN → REFACTOR.

Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine Ausnahme braucht eine eigene Spec mit Begründung und Architekturtests. Zentrale
Dokumente werden erst mit der jeweiligen Umsetzung knapp um die dann geltenden Entscheidungen und nachgewiesenen Prüfungen ergänzt.

## Lernchecks für das unzugeordnete Git-Thema ergänzen

„Git-Commits klein und nachvollziehbar halten“ erhält später einen quellengebundenen Fragenpool und die vorhandenen Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen die Auswahl logisch zusammengehöriger Änderungen, den Einsatz der Staging Area und die Grenzen einer bloßen Größenregel. Sie werden unabhängig fachlich geprüft. Browser-Tests zeigen den Lernnutzen auch für ein Thema ohne Lernpfad.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Vertikalen: Themen, Lernchecks

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

Vertikalen: Lernchecks, Lernfortschritt

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

## Kuratierte Quellen für den zweiten Lernpfad ergänzen

Die sechs zusätzlichen Themen aus „Änderungen gestalten und absichern“ erhalten Quellen.

Es gelten die [Regeln zur Quellenauswahl](../content/source-selection.md).

Vertikalen: Themen

## Lernchecks für den zweiten Lernpfad ergänzen

Die sechs zusätzlichen Themen aus „Änderungen gestalten und absichern“ erhalten quellengebundene Fragenpools und die bereits vorhandenen
Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer
Quellen; sie werden unabhängig fachlich geprüft. Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des zweiten Pfads knapp im Produktstand und in der redaktionellen Richtlinie ergänzen.

## Kuratierte Quellen für den dritten Lernpfad ergänzen

Die drei neuen Themen aus „Sicher mit Coding-Agenten arbeiten“ erhalten Quellen.

Es gelten die [Regeln zur Quellenauswahl](../content/source-selection.md).

Vertikalen: Themen

## Lernchecks für den dritten Lernpfad ergänzen

Die drei neuen Themen aus „Sicher mit Coding-Agenten arbeiten“ erhalten quellengebundene Fragenpools und Auswahlchecks einschließlich
Erklärung und Wiederholung. Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer Quellen; sie werden unabhängig
fachlich geprüft. Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des dritten Pfads knapp im Produktstand und in der redaktionellen Richtlinie ergänzen.

## Vierter Lernpfad

Die Vertikale Themen wird um den Lernpfad **Java-/Web-Code technisch analysieren und modernisieren** erweitert:

1. Git-Worktrees für isolierte Änderungen nutzen - neu
2. Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen - neu
3. Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen - neu
4. Modulgrenzen und öffentliche Schnittstellen gestalten - vorhanden
5. Fachverhalten mit TDD absichern - vorhanden
6. Java-Architekturregeln mit ArchUnit prüfen - vorhanden
7. Java-/Spring-Migrationen mit OpenRewrite durchführen - neu
8. Webabläufe mit Playwright prüfen - vorhanden

Der neue Lernpfad wird in den bereits vorhandenen Themenzuordnungen erfasst. Eine eigene Lernpfad-Auswahl in der Oberfläche folgt erst mit
„Lernpfade in Anzeige berücksichtigen“.

Die vier neuen Themen werden mit Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md) und Aktualitätsmetadaten
ausformuliert, fachlich geprüft und strukturell an die vorhandenen Inhalte angeglichen. Dabei auch immer einen Blick auf die Notizen in der
KI-Tool-Landkarte haben!
Bei Context7 werden Angaben mit der Originaldokumentation der konkreten Bibliotheksversion abgeglichen.

Fragenpools gehören nicht zu dieser Story.

Alle 20 Themen erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste; dazu gehört weiterhin das Thema ohne Lernpfad. Sie werden über die vier Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Themen

Dokumentation nach Umsetzung: Den neuen Themenbestand knapp im Produktstand ergänzen.

## Lernchecks für den vierten Lernpfad ergänzen

Die vier neuen Themen aus „Java-/Web-Code technisch analysieren und modernisieren“ erhalten quellengebundene Fragenpools und Auswahlchecks
einschließlich Erklärung und Wiederholung. Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer Quellen; sie
werden unabhängig fachlich geprüft. Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des vierten Pfads knapp im Produktstand und in der redaktionellen Richtlinie ergänzen.

## Fünfter Lernpfad

Die Vertikale Themen wird um den Lernpfad **Parallele Coding-Agenten kritisch erproben** erweitert:

1. Aufgaben und Abbruchkriterien für parallele Agenten festlegen - neu
2. Git-Worktrees für isolierte Änderungen nutzen - vorhanden
3. Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen - neu
4. Kontext zwischen Agenten gezielt übergeben - neu
5. Werkzeugrechte und MCP-Zugriffe begrenzen - neu
6. Deterministische Prüf-Gates im Agenten-Harness gestalten - neu
7. KI-generierte Änderungen prüfen und übernehmen - vorhanden
8. Parallelität gegen einen seriellen Ablauf messen - neu

Der neue Lernpfad wird in den bereits vorhandenen Themenzuordnungen erfasst. Eine eigene Lernpfad-Auswahl in der Oberfläche folgt erst mit
„Lernpfade in Anzeige berücksichtigen“. Die Lern-App führt keine Coding-Agenten aus.

Die sechs neuen Themen werden mit Quellen nach den [Regeln zur Quellenauswahl](../content/source-selection.md) und Aktualitätsmetadaten
ausformuliert, fachlich geprüft und strukturell an die vorhandenen Inhalte angeglichen.
Die [KI-Tool-Landkarte](../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt. Die Themen benennen Voraussetzungen, Grenzen und
Gegenbeispiele. Das Thema zur Bewertung beschreibt einen kontrollierten Vergleich von Ergebnisqualität, Dauer, Kosten und Review-Aufwand mit
einem seriellen Ablauf. Fragenpools gehören nicht zu dieser Story.

Alle 26 Themen erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste; dazu gehört weiterhin das Thema ohne Lernpfad. Sie werden über die fünf Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Themen

Dokumentation nach Umsetzung: Den neuen Themenbestand knapp im Produktstand ergänzen.

## Lernchecks für den fünften Lernpfad ergänzen

Die sechs neuen Themen aus „Parallele Coding-Agenten kritisch erproben“ erhalten quellengebundene Fragenpools und Auswahlchecks
einschließlich Erklärung und Wiederholung. Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer Quellen; sie
werden unabhängig fachlich geprüft. Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des fünften Pfads knapp im Produktstand und in der redaktionellen Richtlinie ergänzen.

## Lernpfade in Anzeige berücksichtigen

Die Anwendung kennt zu diesem Zeitpunkt bereits die fünf Lernpfade und die Zuordnungen ihrer Themen. Diese Story ergänzt die eigenständige
Anzeige und Auswahl von Lernpfaden; sie führt die Pfaddaten nicht noch einmal ein.

- Es gibt fünf Lernpfade:

  **Grundlagen für KI-gestützte Softwareentwicklung**

    1. Mensch und KI: Verantwortung bleibt menschlich
    2. Problem verstehen und Änderungsgrenzen setzen
    3. AGENTS.md: dauerhafter Kontext für Coding-Agenten
    4. EARS: Anforderungen präzise formulieren
    5. Research, Plan und Tasks trennen
    6. Spec-Driven Development mit OpenSpec

  **Änderungen gestalten und absichern**

    1. Problem verstehen und Änderungsgrenzen setzen
    2. EARS: Anforderungen präzise formulieren
    3. Modulgrenzen und öffentliche Schnittstellen gestalten
    4. Fachverhalten mit TDD absichern
    5. Java-Architekturregeln mit ArchUnit prüfen
    6. Webabläufe mit Playwright prüfen
    7. Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen
    8. Abhängigkeiten und Sicherheitslücken risikobasiert bewerten

  **Sicher mit Coding-Agenten arbeiten**

    1. Mensch und KI: Verantwortung bleibt menschlich
    2. Problem verstehen und Änderungsgrenzen setzen
    3. AGENTS.md: dauerhafter Kontext für Coding-Agenten
    4. Kontext und Vertrauensgrenzen für Coding-Agenten
    5. Geheimnisse und sensible Daten beim KI-Einsatz schützen
    6. Research, Plan und Tasks trennen
    7. Fachverhalten mit TDD absichern
    8. KI-generierte Änderungen prüfen und übernehmen

  **Java-/Web-Code technisch analysieren und modernisieren**

    1. Git-Worktrees für isolierte Änderungen nutzen
    2. Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen
    3. Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen
    4. Modulgrenzen und öffentliche Schnittstellen gestalten
    5. Fachverhalten mit TDD absichern
    6. Java-Architekturregeln mit ArchUnit prüfen
    7. Java-/Spring-Migrationen mit OpenRewrite durchführen
    8. Webabläufe mit Playwright prüfen

  **Parallele Coding-Agenten kritisch erproben**

    1. Aufgaben und Abbruchkriterien für parallele Agenten festlegen
    2. Git-Worktrees für isolierte Änderungen nutzen
    3. Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen
    4. Kontext zwischen Agenten gezielt übergeben
    5. Werkzeugrechte und MCP-Zugriffe begrenzen
    6. Deterministische Prüf-Gates im Agenten-Harness gestalten
    7. KI-generierte Änderungen prüfen und übernehmen
    8. Parallelität gegen einen seriellen Ablauf messen

Lernpfade werden in der Anzeige berücksichtigt. Man kann die Anzeige auf einen oder mehrere Lernpfade filtern - oder man zeigt alternativ
alle Lernpfade an.

Beim Aufbau des sichtbaren Filters werden die benötigten Pfadbegriffe im Glossar mit genau einem englischen Begriff ergänzt. Betroffene
englische Bezeichner werden innerhalb der höchstens zwei berührten Vertikalen vereinheitlicht, ohne Fachlogik zu ändern. Weitere Begriffe
werden erst in der jeweils betroffenen fachlichen Story vereinheitlicht.

Vertikalen: Themen, Lernpfade

Dokumentation nach Umsetzung: Pfadmodell, Filterverhalten und neue Begriffe knapp in Produktstand, Architektur und Glossar ergänzen.

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
