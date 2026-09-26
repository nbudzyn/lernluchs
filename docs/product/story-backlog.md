# Story-Backlog

Dieses Backlog enhält (nur) geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; diese dokumentiert RED → GREEN → REFACTOR.

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

Fragenpools gehören nicht zu dieser Story.

Alle 15 Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Sie werden über alle drei Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Inhaltskatalog

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

Die sechs neuen Lerninhalte werden als Lernkarten mit Quellen und Aktualitätsmetadaten ausformuliert, fachlich geprüft und strukturell an die
vorhandenen Inhalte angeglichen. Die [KI-Tool-Landkarte](../content/ki-tool-landkarte.md) dient als Rechercheausgangspunkt. Die Karten
benennen Voraussetzungen, Grenzen und Gegenbeispiele. Die Karte zur Bewertung beschreibt einen kontrollierten Vergleich von
Ergebnisqualität, Dauer, Kosten und Review-Aufwand mit einem seriellen Ablauf. Fragenpools gehören nicht zu dieser Story.

Alle 25 Lerninhalte erscheinen genau einmal in einer gemeinsamen, ungruppierten Liste. Sie werden über alle fünf Lernpfade hinweg nach
Grundlagen, mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge aller vorhandenen Inhalte bleibt erhalten; die neuen
Inhalte werden passend dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der Inhalte des neuen Lernpfads bleibt
erhalten.

Vertikale: Inhaltskatalog

## Glossar um englische Übersetzungen ergänzen und englische Begriffe vereinheitlichen

Jeder Begriff im Glossar wird in der Überschrift um einen einzigen englischen Begriff ergänzt:
``Ding (thing)``
Wo englische Begriffe verwendet werden (Dateinamen, Verzeichnisnamen, Code): Sicherstellen, dass einheitlich diese englischen Begriffe
verwendet werden.

- Kürzungen (wenn der Kontext klar ist) sind möglich, z.B. statt ``Indian food``: ``food``.

Außerdem prüfen, ob Begriffe im Glossar fehlen und ggf. eine Story anlegen (als nächste Story einsortieren), um das Glossar zu ergänzen und
außerdem dann (in der anderen Story) genau diese englischen Begriffe einheitlich zu verwenden.

Abgrenzung:

- Keine Übersetzungen: Deutsch bleibt Deutsch, Englisch bleibt Englisch
- Keine logischen Code-Änderungen

Maximal zwei Vertikalen - wenn es weitere Vertikalen gibt: Weitere Stories anlegen.

## Lernpfade in Anzeige berücksichtigen

Die Anwendung kennt Lernpfade.

- Neue Vertikale, die vom Inhaltskatalog abhängig ist, aber nicht umgekehrt?
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

## Fragenpools für Lerninhalte kuratieren

Für alle Lerninhalte, denen noch Fragen fehlen, einen ausreichend großen, quellengebundenen Fragenpool erstellen, damit Wiederholungen
unterschiedliche Fragensätze nutzen können. Fragen prüfen konkrete Aussagen aus dem jeweiligen Lerninhalt und seiner Lernkarte;
Allgemeinplätze sind unzulässig. Jede Antwortoption erhält eine Begründung und einen Quellenbezug. Die Fragen werden vor dem Commit
unabhängig fachlich geprüft.

Vertikale: Inhaltskatalog

## Grundlagenwissen überprüfen

Auswahlchecks aus den kuratierten Fragenpools mit Bestehen, Nichtbestehen, Erklärung und Wiederholung anbieten.

Vertikalen: Inhaltskatalog, Lernchecks

## Lernfortschritt lokal speichern

Check-Ergebnis als änderbaren Vorschlag zeigen und bestätigten Fortschritt über Reload erhalten.

Vertikalen: Lernchecks, Lernfortschritt

## Kompetenzen nach Themen einsehen

Bestätigten Fortschritt je Thema nachvollziehbar darstellen.

Vertikale: Kompetenzprofil

## Themen auf einer Landkarte erkunden

Themen und Querverbindungen frei navigierbar darstellen; die bestehende Listenansicht bleibt Fallback.

Vertikalen: Inhaltskatalog, Landkarte

## App installieren und offline nutzen

Installation, versionierter Offline-Cache und kontrollierte Updates für die Kernabläufe.

## Quallen erneut prüfen

Die Quellen zu `AGENTS.md`, Research/Plan/Tasks und OpenSpec werden bis 20.12.2026 erneut geprüft.
