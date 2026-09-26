# Story-Backlog

Dieses Backlog enhält (nur) geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; diese dokumentiert RED → GREEN → REFACTOR.

Die frühere breit angelegte Architekturausnahme für einen gemeinsamen Durchstich wird mit diesen getrennten Stories nicht fortgeführt.
Pro fachlichem Commit gelten höchstens zwei Vertikalen; eine spätere Ausnahme braucht eine eigene Spec mit Begründung und Architekturtests.
Stories mit neuen Prüfungen ergänzen die Qualitätsstrategie erst nach grünem Nachweis um die dann tatsächlich ausgeführten Checks.

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

## Quellengebundene Grundlagenfragen im Browser beantworten

Zu jeder der sechs Lernkarten des Grundlagenpfads können Lernende eine Auswahlfrage beantworten und anschließend Begründung und Quelle
einsehen. Dafür werden ausreichend viele fachlich unterschiedliche Fragen für spätere Wiederholungen kuratiert. Jede Frage prüft eine
konkrete Aussage der Karte; jede Antwortoption erhält eine Begründung und einen Quellenbezug. Fragen und Antworten werden unabhängig
fachlich geprüft, versioniert und zusammen mit dem öffentlichen Katalog validiert. Ein optionaler externer Quellenlink öffnet sich nur nach
bewusster Aktion und sein Ausfall verhindert das Lesen und Beantworten der Frage nicht.

Die sechs Grundlagenkarten sind in der [Produktvision](vision-and-scope.md) festgelegt. Diese Story liefert den ersten sichtbaren
Fragenablauf; Bestehenslogik und Wiederholung folgen in der nächsten Story. Mit diesem ersten neuen Browserablauf beginnen auch
Browser-E2E-Prüfungen in CI. Format-/Lint- und Lizenzprüfungen werden als ausführbare CI-Gates ergänzt und nach grünem Nachweis in der
Qualitätsstrategie dokumentiert. Neue Abhängigkeiten erfordern eine begründete Freigabe in der späteren Änderungs-Spec.

Vertikalen: Inhaltskatalog, Lernchecks

## Lernchecks bestehen und mit anderem Fragensatz wiederholen

Lernende absolvieren Auswahlchecks ohne Zeitdruck. Nur vollständig korrekte Antworten bestehen. Nach Nichtbestehen erscheinen sofort
Lösung, Begründung und die passende Lernkarte beziehungsweise Quelle; ein neuer Versuch nutzt einen anderen Fragensatz. Bestehen erzeugt
einen Fortschrittsvorschlag, speichert ihn aber noch nicht. Browser-E2E-Tests prüfen Bestehen, Nichtbestehen und Wiederholung.

Vertikalen: Inhaltskatalog, Lernchecks

## Lernfortschritt nach einem Check bestätigen und lokal speichern

Ein bestandener Check zeigt einen sichtbaren, änderbaren Fortschrittsvorschlag. Nur die bewusste Bestätigung speichert den Wert in
IndexedDB unter der dauerhaften Themen-ID. Fortschritt enthält keine Zugangsdaten, bleibt nach Reload erhalten und ist vom öffentlichen,
nur lesbaren Katalog getrennt. Neue Inhaltsversionen oder fehlerhafte externe Quellen löschen bestätigten Fortschritt nicht. Der
Browser-E2E-Test deckt Bestätigung, Korrektur, Reload und Inhaltsversionswechsel ab.

Vertikalen: Lernchecks, Lernfortschritt

## Kompetenzen aus bestätigtem Fortschritt anzeigen

Lernende sehen ihren bestätigten Fortschritt je Thema. Das Kompetenzprofil leitet seine Anzeige aus dem lokalen Fortschritt ab und
speichert keine zweite fachliche Wahrheit. Es nutzt den schmalen öffentlichen Vertrag der Fortschritts-Vertikale; ein Browser-Test prüft
die Anzeige nach einem Reload.

Vertikalen: Lernfortschritt, Kompetenzprofil

## Themen auf einer Landkarte erkunden

Die sechs Grundlagenkarten erscheinen als frei navigierbare grafische Landkarte mit fachlichen Querverbindungen. Lernende können jedes
Thema ohne Sperre auswählen. Die vorhandene zugängliche Liste bleibt als Fallback nutzbar, auch wenn die Grafik ausfällt. Die Landkarte
liest Katalog und bestätigten Fortschritt nur über kleine öffentliche Verträge und delegiert Änderungen an die zuständige Vertikale.
Browser-E2E-Tests prüfen Auswahl, Querverbindung und Listenfallback.

Vertikalen: Inhaltskatalog, Landkarte

## App installieren und Kernabläufe offline nutzen

Nach dem ersten erfolgreichen Laden ist die öffentliche GitHub-Pages-App installierbar und zeigt offline Landkarte, Liste, Lernkarten,
Lernchecks und bereits bestätigten Fortschritt. Der versionierte Service-Worker-Cache hält App und Katalog einschließlich Fragen pro
Inhaltsversion zusammen; Updates mischen keine Versionen und überschreiben keinen lokalen Fortschritt. Der öffentliche Build enthält
nur App und Katalog, keine persönlichen Daten oder extern nachgeladenen Laufzeitressourcen. Externe Quellen können offline als nicht
verfügbar erscheinen und öffnen sich nur nach bewusster Aktion. Browser- und PWA-Prüfungen decken Erstladen, Offline-Nutzung und
kontrollierte Updates ab. Die neuen PWA-/Offline-Gates werden nach grünem Nachweis in der Qualitätsstrategie dokumentiert.

Vertikale: PWA/Zuverlässigkeit

## Kernabläufe und Release auf Zielbrowsern abnehmen

Lernende können die installierbare App auf den unterstützten Geräten durchgängig nutzen: ein Thema wählen, einen Lerncheck wiederholen,
Fortschritt bestätigen und die Kerninhalte nach dem Erstladen offline öffnen.

Die vollständige Pflichtsuite ist grün: Format, Lint, Typen, Inhalts- und Schema-Validierung, Unit- und Komponententests,
Browser-E2E, Architekturgrenzen, bekannte Schwachstellen und unzulässige Lizenzen, Produktionsbuild sowie PWA-/Offline-Prüfung.
Insbesondere werden Querverbindungen, Karten und Metadaten, Bestehen und Nichtbestehen mit anderem Fragensatz, bestätigter Fortschritt
über Reload, Offline-Nutzung und der Ausfall eines optionalen Quellenlinks geprüft. Automatisierte Tests decken definierte Desktop- und
mobile Viewports ab. Der GitHub-Pages-Release durchläuft dieselben Pflichtprüfungen; ein fehlendes oder fehlschlagendes Gate verhindert
die Veröffentlichung. GitHub Dependency Review und Dependabot ergänzen die Abhängigkeitsprüfung; Updates werden getrennt getestet und
bewusst freigegeben.

Installation und Kernabläufe werden zusätzlich auf Samsung Internet/Android, Chrome und Firefox unter Windows 11 sowie Safari auf
einem aktuellen iPhone geprüft. Browser, Version, Ablauf und Ergebnis werden in der Änderungs-Spec beziehungsweise dem Release-Nachweis
dokumentiert. Die bereits eingerichtete GitHub-Pages-Bereitstellung wird mit der installierbaren Version erneut geprüft. Nach grünem
Nachweis beschreibt die Qualitätsstrategie die tatsächlich eingerichteten Gates und Geräteprüfungen.

Vertikale: PWA/Zuverlässigkeit

## Lernchecks für den zweiten Lernpfad ergänzen

Die sechs zusätzlichen Karten aus „Änderungen gestalten und absichern“ erhalten quellengebundene Fragenpools und die bereits vorhandenen
Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft.
Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

## Lernchecks für den dritten Lernpfad ergänzen

Die drei neuen Karten aus „Sicher mit Coding-Agenten arbeiten“ erhalten quellengebundene Fragenpools und Auswahlchecks einschließlich
Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft. Browser-Tests zeigen den
Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

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

## Lernchecks für den vierten Lernpfad ergänzen

Die vier neuen Karten aus „Java-/Web-Code technisch analysieren und modernisieren“ erhalten quellengebundene Fragenpools und
Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft.
Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

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

## Lernchecks für den fünften Lernpfad ergänzen

Die sechs neuen Karten aus „Parallele Coding-Agenten kritisch erproben“ erhalten quellengebundene Fragenpools und Auswahlchecks
einschließlich Erklärung und Wiederholung. Fragen prüfen konkrete Kartenaussagen und werden unabhängig fachlich geprüft. Browser-Tests
zeigen den Lernnutzen für diesen Pfad.

Vertikalen: Inhaltskatalog, Lernchecks

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

## Quallen erneut prüfen

Die Quellen zu `AGENTS.md`, Research/Plan/Tasks und OpenSpec werden bis 20.12.2026 erneut geprüft.
