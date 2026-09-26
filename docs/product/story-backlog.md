# Story-Backlog

Dieses Backlog enthält nur geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; diese dokumentiert RED → GREEN → REFACTOR.

Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine Ausnahme braucht
eine eigene Spec mit Begründung und Architekturtests. Zentrale Dokumente
werden erst mit der jeweiligen Umsetzung knapp um die dann geltenden
Entscheidungen und nachgewiesenen Prüfungen ergänzt.

## Dritter Lernpfad

Der Inhaltskatalog wird um den Lernpfad **Sicher mit Coding-Agenten arbeiten** erweitert:

1. Mensch und KI: Verantwortung bleibt menschlich - vorhanden
2. Problem verstehen und Änderungsgrenzen setzen - vorhanden
3. AGENTS.md: dauerhafter Kontext für Coding-Agenten - vorhanden
4. Kontext und Vertrauensgrenzen für Coding-Agenten - neu
5. Geheimnisse und sensible Daten beim KI-Einsatz schützen - neu
6. Research, Plan und Tasks trennen - vorhanden
7. Fachverhalten mit TDD absichern - vorhanden
8. KI-generierte Änderungen prüfen und übernehmen - neu

Der Lernpfad als solcher wird noch nicht als Objekt in der Software repräsentiert und erscheint nicht als eigener Abschnitt in der
Oberfläche.

Die drei neuen Lerninhalte werden als Lernkarten mit Quellen und Aktualitätsmetadaten ausformuliert, fachlich geprüft und strukturell an die
vorhandenen Inhalte angeglichen. Dabei auch immer einen Blick auf die Notizen in der KI-Tool-Landkarte haben!

Im selben Katalogupdate werden die Quellen der vorhandenen Karten zu
`AGENTS.md`, Research/Plan/Tasks und OpenSpec bis spätestens 20.12.2026 erneut
geprüft und bei Bedarf aktualisiert. Lernende erhalten damit neue und
fachlich aktuelle Karten in einer Liste.

Fragenpools gehören nicht zu dieser Story.

Alle 15 Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Sie werden über alle drei Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Inhaltskatalog

Dokumentation nach Umsetzung: Den erweiterten Katalog und die sichtbaren
Inhalte knapp im Produktstand ergänzen.

## Quellengebundene Grundlagenfragen im Browser beantworten

Zu jeder der sechs Lernkarten des Grundlagenpfads können Lernende eine Auswahlfrage beantworten und anschließend Begründung und Quelle
einsehen. Dafür werden ausreichend viele fachlich unterschiedliche Fragen für spätere Wiederholungen kuratiert. Jede Frage prüft eine
konkrete Aussage der Karte; jede Antwortoption erhält eine Begründung und einen Quellenbezug. Fragen und Antworten werden unabhängig
fachlich geprüft, versioniert und zusammen mit dem öffentlichen Katalog validiert. Ein optionaler externer Quellenlink öffnet sich nur nach
bewusster Aktion und sein Ausfall verhindert das Lesen und Beantworten der Frage nicht.

Die sechs Grundlagenkarten behandeln Mensch-KI-Verantwortung, Problemverständnis,
`AGENTS.md`, EARS, Research/Plan/Tasks und OpenSpec. Diese Story liefert den
ersten sichtbaren Fragenablauf; Bestehenslogik und Wiederholung folgen in der
nächsten Story. Mit diesem ersten neuen Browserablauf beginnen auch
Browser-E2E-Prüfungen in CI. Format-/Lint- und Lizenzprüfungen werden als ausführbare CI-Gates ergänzt und nach grünem Nachweis in der
Qualitätsstrategie dokumentiert. Ein Architekturtest prüft kleine öffentliche
Vertikal-Einstiegspunkte und verbietet direkte Importe interner Daten oder
Komponenten. Neue Abhängigkeiten erfordern eine begründete Freigabe in der
späteren Änderungs-Spec.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenablauf, Lerncheck-Vertikale und die
tatsächlich grünen CI-Gates knapp in Produktstand, Architektur und
Qualitätsstrategie ergänzen.

## Lernchecks bestehen und mit anderem Fragensatz wiederholen

Lernende absolvieren Auswahlchecks ohne Zeitdruck. Nur vollständig korrekte Antworten bestehen. Nach Nichtbestehen erscheinen sofort Lösung,
Begründung und die passende Lernkarte beziehungsweise Quelle; ein neuer Versuch nutzt einen anderen Fragensatz.
Bestehen erzeugt einen Fortschrittsvorschlag, speichert ihn aber noch nicht. Browser-E2E-Tests prüfen
Bestehen, Nichtbestehen und Wiederholung.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Bestehens- und Wiederholungsregeln knapp in
redaktioneller Richtlinie und Produktstand ergänzen.

## Lernfortschritt nach einem Check bestätigen und lokal speichern

Ein bestandener Check zeigt einen sichtbaren, änderbaren Fortschrittsvorschlag. Nur die bewusste Bestätigung speichert den Wert in IndexedDB
unter der dauerhaften Themen-ID. Fortschritt enthält keine Zugangsdaten, bleibt nach Reload erhalten und ist vom öffentlichen, nur lesbaren
Katalog getrennt. Neue Inhaltsversionen oder fehlerhafte externe Quellen löschen bestätigten Fortschritt nicht. Der Browser-E2E-Test deckt
Bestätigung, Korrektur, Reload und Inhaltsversionswechsel ab.

Vertikalen: Lernchecks, Lernfortschritt

Dokumentation nach Umsetzung: Lokale Speicherung, Datenfluss und
Bestätigungsregel knapp in Produktstand und Architektur ergänzen.

## Kompetenzen aus bestätigtem Fortschritt anzeigen

Lernende sehen ihren bestätigten Fortschritt je Thema. Das Kompetenzprofil leitet seine Anzeige aus dem lokalen Fortschritt ab und speichert
keine zweite fachliche Wahrheit. Es nutzt den schmalen öffentlichen Vertrag der Fortschritts-Vertikale; ein Browser-Test prüft die Anzeige
nach einem Reload.

Vertikalen: Lernfortschritt, Kompetenzprofil

Dokumentation nach Umsetzung: Kompetenzanzeige und ihren Datenfluss knapp in
Produktstand und Architektur ergänzen.

## Themen auf einer Landkarte erkunden

Die sechs Grundlagenkarten erscheinen als frei navigierbare grafische Landkarte mit fachlichen Querverbindungen. Lernende können jedes Thema
ohne Sperre auswählen. Die vorhandene zugängliche Liste bleibt als Fallback nutzbar, auch wenn die Grafik ausfällt. Die Landkarte liest
Katalog und bestätigten Fortschritt nur über kleine öffentliche Verträge und delegiert Änderungen an die zuständige Vertikale.
Browser-E2E-Tests prüfen Auswahl, Querverbindung und Listenfallback.

Vertikalen: Inhaltskatalog, Landkarte

Dokumentation nach Umsetzung: Landkarte, Fallback und Vertikalgrenzen knapp in
Produktstand und Architektur ergänzen.

## App installieren und Kernabläufe offline nutzen

Nach dem ersten erfolgreichen Laden ist die öffentliche GitHub-Pages-App installierbar und zeigt offline Landkarte, Liste, Lernkarten,
Lernchecks und bereits bestätigten Fortschritt. Der versionierte Service-Worker-Cache hält App und Katalog einschließlich Fragen pro
Inhaltsversion zusammen; Updates mischen keine Versionen und überschreiben keinen lokalen Fortschritt. Der öffentliche Build enthält nur App
und Katalog, keine persönlichen Daten oder extern nachgeladenen Laufzeitressourcen. Externe Quellen können offline als nicht verfügbar
erscheinen und öffnen sich nur nach bewusster Aktion. Browser- und PWA-Prüfungen decken Erstladen, Offline-Nutzung und kontrollierte Updates
ab. Die neuen PWA-/Offline-Gates werden nach grünem Nachweis in der Qualitätsstrategie dokumentiert.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Installation, Offline-Grenzen, Cache-Strategie
und tatsächlich grüne Prüfungen knapp in Produktstand, Architektur und
Qualitätsstrategie ergänzen.

## Kernabläufe und Release auf Zielbrowsern abnehmen

Lernende können die installierbare App auf den unterstützten Geräten durchgängig nutzen: ein Thema wählen, einen Lerncheck wiederholen,
Fortschritt bestätigen und die Kerninhalte nach dem Erstladen offline öffnen.

Die vollständige Pflichtsuite ist grün: Format, Lint, Typen, Inhalts- und Schema-Validierung, Unit- und Komponententests, Browser-E2E,
Architekturgrenzen, bekannte Schwachstellen und unzulässige Lizenzen, Produktionsbuild sowie PWA-/Offline-Prüfung. Insbesondere werden
Querverbindungen, Karten und Metadaten, Bestehen und Nichtbestehen mit anderem Fragensatz, bestätigter Fortschritt über Reload,
Offline-Nutzung und der Ausfall eines optionalen Quellenlinks geprüft. Automatisierte Tests decken definierte Desktop- und mobile Viewports
ab. Der GitHub-Pages-Release durchläuft dieselben Pflichtprüfungen; ein fehlendes oder fehlschlagendes Gate verhindert die Veröffentlichung.
GitHub Dependency Review und Dependabot ergänzen die Abhängigkeitsprüfung; Updates werden getrennt getestet und bewusst freigegeben.

Installation und Kernabläufe werden zusätzlich auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf einem
aktuellen iPhone geprüft. Browser, Version, Ablauf und Ergebnis werden in der Änderungs-Spec beziehungsweise dem Release-Nachweis
dokumentiert. Die bereits eingerichtete GitHub-Pages-Bereitstellung wird mit der installierbaren Version erneut geprüft. Nach grünem
Nachweis beschreibt die Qualitätsstrategie die tatsächlich eingerichteten Gates und Geräteprüfungen.

Vertikale: PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Unterstützte Browser, nachgewiesene Abläufe und
Release-Gates knapp in Produktstand und Qualitätsstrategie ergänzen.

## Lernchecks für den zweiten Lernpfad ergänzen

Die sechs zusätzlichen Karten aus „Änderungen gestalten und absichern“ erhalten quellengebundene Fragenpools und die bereits vorhandenen
Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft.
Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des zweiten Pfads knapp im
Produktstand und in der redaktionellen Richtlinie ergänzen.

## Lernchecks für den dritten Lernpfad ergänzen

Die drei neuen Karten aus „Sicher mit Coding-Agenten arbeiten“ erhalten quellengebundene Fragenpools und Auswahlchecks einschließlich
Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft. Browser-Tests zeigen den
Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des dritten Pfads knapp im
Produktstand und in der redaktionellen Richtlinie ergänzen.

## Vierter Lernpfad

Der Inhaltskatalog wird um den Lernpfad **Java-/Web-Code technisch analysieren und modernisieren** erweitert:

1. Git-Worktrees für isolierte Änderungen nutzen - neu
2. Code mit Symbol- und Referenzsuche in IDE oder LSP erschließen - neu
3. Versionsbezogene Bibliotheksdokumentation mit Context7 prüfen - neu
4. Modulgrenzen und öffentliche Schnittstellen gestalten - vorhanden
5. Fachverhalten mit TDD absichern - vorhanden
6. Java-Architekturregeln mit ArchUnit prüfen - vorhanden
7. Java-/Spring-Migrationen mit OpenRewrite durchführen - neu
8. Webabläufe mit Playwright prüfen - vorhanden

Der Lernpfad als solcher wird noch nicht als Objekt in der Software repräsentiert und erscheint nicht als eigener Abschnitt in der
Oberfläche.

Die vier neuen Lerninhalte werden als Lernkarten mit Quellen und Aktualitätsmetadaten ausformuliert, fachlich geprüft und strukturell an die
vorhandenen Inhalte angeglichen. Dabei auch immer einen Blick auf die Notizen in der KI-Tool-Landkarte haben! Bei Context7 werden Angaben
mit der Originaldokumentation der konkreten Bibliotheksversion abgeglichen.

Fragenpools gehören nicht zu dieser Story.

Alle 19 Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Sie werden über alle vier Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Inhaltskatalog

Dokumentation nach Umsetzung: Den neuen Kartenbestand knapp im Produktstand ergänzen.

## Lernchecks für den vierten Lernpfad ergänzen

Die vier neuen Karten aus „Java-/Web-Code technisch analysieren und modernisieren“ erhalten quellengebundene Fragenpools und Auswahlchecks
einschließlich Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft. Browser-Tests
zeigen den Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des vierten Pfads knapp im
Produktstand und in der redaktionellen Richtlinie ergänzen.

## Fünfter Lernpfad

Der Inhaltskatalog wird um den Lernpfad **Parallele Coding-Agenten kritisch erproben** erweitert:

1. Aufgaben und Abbruchkriterien für parallele Agenten festlegen - neu
2. Git-Worktrees für isolierte Änderungen nutzen - vorhanden
3. Spezialisierte Subagents mit klarem Aufgabenbesitz einsetzen - neu
4. Kontext zwischen Agenten gezielt übergeben - neu
5. Werkzeugrechte und MCP-Zugriffe begrenzen - neu
6. Deterministische Prüf-Gates im Agenten-Harness gestalten - neu
7. KI-generierte Änderungen prüfen und übernehmen - vorhanden
8. Parallelität gegen einen seriellen Ablauf messen - neu

Der Lernpfad als solcher wird noch nicht als Objekt in der Software repräsentiert und erscheint nicht als eigener Abschnitt in der
Oberfläche. Die Lern-App führt keine Coding-Agenten aus.

Die sechs neuen Lerninhalte werden als Lernkarten mit Quellen und Aktualitätsmetadaten ausformuliert, fachlich geprüft und strukturell an
die vorhandenen Inhalte angeglichen. Die [KI-Tool-Landkarte](../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt. Die Karten
benennen Voraussetzungen, Grenzen und Gegenbeispiele. Die Karte zur Bewertung beschreibt einen kontrollierten Vergleich von
Ergebnisqualität, Dauer, Kosten und Review-Aufwand mit einem seriellen Ablauf. Fragenpools gehören nicht zu dieser Story.

Alle 25 Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Sie werden über alle fünf Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Inhaltskatalog

Dokumentation nach Umsetzung: Den neuen Kartenbestand knapp im Produktstand ergänzen.

## Lernchecks für den fünften Lernpfad ergänzen

Die sechs neuen Karten aus „Parallele Coding-Agenten kritisch erproben“ erhalten quellengebundene Fragenpools und Auswahlchecks
einschließlich Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft. Browser-Tests
zeigen den Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des fünften Pfads knapp im
Produktstand und in der redaktionellen Richtlinie ergänzen.

## Lernpfade in Anzeige berücksichtigen

Die Anwendung kennt Lernpfade.

- Es gibt fünf Lernpfade:

  **Grundlagenpfad**

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

Beim Aufbau des sichtbaren Filters werden die benötigten Pfadbegriffe im
Glossar mit genau einem englischen Begriff ergänzt. Betroffene englische
Bezeichner werden innerhalb der höchstens zwei berührten Vertikalen
vereinheitlicht, ohne Fachlogik zu ändern. Weitere Begriffe werden erst in der
jeweils betroffenen fachlichen Story vereinheitlicht.

Vertikalen: Inhaltskatalog, Lernpfade

Dokumentation nach Umsetzung: Pfadmodell, Filterverhalten und neue Begriffe
knapp in Produktstand, Architektur und Glossar ergänzen.

## Quellen und Videos gezielt erkunden

Lernende sehen je Lernkarte, welche Quellen und Videos verfügbar sind, erkennen
deren Typ und Aktualität und öffnen externe Angebote nur nach bewusster Aktion.
Die redaktionelle Pflege bleibt im öffentlichen Katalog; die App bietet keine
Inhaltsbearbeitung. Ein ausgefallener externer Link blockiert die Lernkarte
nicht. Browser-Tests prüfen Anzeige und Öffnung.

Vertikale: Inhaltskatalog

Dokumentation nach Umsetzung: Tatsächliche Quell- und Videodaten, Pflege und
Öffnungsverhalten knapp in Produktstand und redaktioneller Richtlinie ergänzen.

## Aktualisierte und ersetzte Lernkarten nachvollziehen

Lernende erkennen bei einer geänderten oder ersetzten Karte Version,
fachliches Prüfdatum und gegebenenfalls einen Nachfolger. Eine archivierte
Karte bleibt lesbar, damit frühere Lernschritte nachvollziehbar sind.
Redaktionell werden fachliche Prüfung und bloße Textänderung getrennt erfasst.
Tests prüfen Versionswechsel und Nachfolgerhinweis.

Vertikale: Inhaltskatalog

Dokumentation nach Umsetzung: Versions- und Archivierungsregeln knapp in
Produktstand und redaktioneller Richtlinie ergänzen.

## Persönliche Hinweise zu Lerninhalten festhalten

Lernende können zu einer Karte eine lokale Notiz oder einen Fehler- und
Aktualitätshinweis festhalten und später wiederfinden. Hinweise enthalten
Themen-ID, Inhaltsversion, Datum und kurze Begründung; sie bleiben ohne
bewussten Export auf dem Gerät und gelangen nicht nach Git. Browser-Tests
prüfen Speichern, Wiederfinden und Trennung vom öffentlichen Katalog.

Vertikalen: Inhaltskatalog, Lernfortschritt

Dokumentation nach Umsetzung: Lokale Hinweise und ihren Datenfluss knapp in
Produktstand, Architektur und redaktioneller Richtlinie ergänzen.

## Lernziele aus dem eigenen Fortschritt setzen

Lernende können für ein Thema ein persönliches Ziel setzen, ändern und
abschließen. Das Ziel zeigt den bestätigten Fortschritt, ohne ihn zu ersetzen,
und bleibt nach Reload erhalten. Browser-Tests prüfen diese Abläufe.

Vertikalen: Lernfortschritt, Lernziele

Dokumentation nach Umsetzung: Lernziele und ihre Beziehung zum Fortschritt
knapp in Produktstand und Architektur ergänzen.

## Termine für Lernziele planen

Lernende können einem Ziel einen lokalen Termin geben, ändern oder entfernen
und fällige Ziele in der App erkennen. Termine werden nicht öffentlich
übertragen. Browser-Tests prüfen Fälligkeit und Änderungen.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Terminverhalten knapp in Produktstand und
Architektur ergänzen.

## Erinnerungen für fällige Lernziele einstellen

Lernende können für ein Ziel eine Erinnerung ein- und ausschalten. Fällige
Erinnerungen erscheinen beim Öffnen der App, ohne Zeitdruck oder Streaks.
Browser-Tests prüfen Anzeige und Abschalten.

Vertikale: Lernziele

Dokumentation nach Umsetzung: Erinnerungsregeln knapp in Produktstand und
Architektur ergänzen.

## Benachrichtigungen für Erinnerungen erlauben

Lernende können Benachrichtigungen für bestehende Erinnerungen ausdrücklich
aktivieren und wieder deaktivieren. Ohne Berechtigung bleiben Erinnerungen in
der App sichtbar. Die Änderungs-Spec klärt Browserunterstützung und den
gewählten Mechanismus; Tests prüfen Zustimmung und Fallback.

Vertikalen: Lernziele, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Berechtigungen, unterstützte Browser und
Fallback knapp in Produktstand, Architektur und Qualitätsstrategie ergänzen.

## Persönliche Daten exportieren und wiederherstellen

Lernende können Fortschritt, Ziele und Hinweise bewusst als Datei exportieren
und auf einem Gerät wieder importieren. Vor dem Import sehen sie, welche
Daten ersetzt oder zusammengeführt würden, und bestätigen die Aktion.
Ungültige Dateien verändern keine vorhandenen Daten. Browser-Tests prüfen
Export, Vorschau, Import und Fehlerfall.

Vertikalen: Lernfortschritt, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Exportformat, Importregeln und Datenschutz
knapp in Produktstand und Architektur ergänzen.

## Persönlichen Zustand ohne Login zwischen Geräten synchronisieren

Lernende können ihren bestätigten persönlichen Zustand bewusst zwischen
Geräten abgleichen, ohne Login oder serverseitige Benutzerverwaltung. Die
Änderungs-Spec prüft vor der Implementierung eine sichere, praktikable Lösung
und legt Zustimmung, Konfliktbehandlung, Löschung und Ausfallverhalten fest.
Die bestehende lokale Nutzung bleibt unabhängig von einer Verbindung möglich.
Browser-Tests prüfen Abgleich, Konflikt und Offline-Fallback.

Vertikalen: Lernfortschritt, PWA/Zuverlässigkeit

Dokumentation nach Umsetzung: Tatsächlichen Datenfluss, Grenzen und
Sicherheitsentscheidung knapp in Produktstand und Architektur ergänzen.
