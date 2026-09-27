## Lernchecks für den zweiten Lernpfad ergänzen

Initial den Entwickler erinnern: KI-Model-Aufwand auf Hoch stellen

Die sechs zusätzlichen Themen aus „Änderungen gestalten und absichern“ erhalten quellengebundene Fragenpools und die bereits vorhandenen
Auswahlchecks einschließlich Erklärung und Wiederholung. Fragen prüfen den fachlichen Schwerpunkt der Themen und vertiefende Details ihrer
Quellen; sie werden unabhängig fachlich geprüft. Browser-Tests zeigen den Lernnutzen für diesen Pfad.

Betroffen sind „Modulgrenzen und öffentliche Schnittstellen gestalten“, „Fachverhalten mit TDD absichern“,
„Java-Architekturregeln mit ArchUnit prüfen“, „Webabläufe mit Playwright prüfen“, „Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung
erkennen“ und „Abhängigkeiten und Sicherheitslücken risikobasiert bewerten“. Jeder neue Pool enthält nach der unabhängigen Prüfung
mindestens 25 fachlich unterschiedliche gültige Fragen. Die Fragen decken den jeweiligen Schwerpunkt, sinnvolle Grenzen und belegte
Vertiefungen ab; Überschneidungen zwischen den Themen werden vermieden. Falls eine Quelle einen wichtigen Aspekt nicht trägt, wird sie nach
den Quellenregeln gezielt ergänzt oder ersetzt und der Thementext bei Bedarf angepasst.

Der bestehende Lerncheck-Ablauf bleibt erhalten: Ein Start wählt fünf Fragen aus dem Pool, fünf richtige Antworten bestehen den Check,
die Auswertung zeigt Erklärungen und Quellenlinks, und bei einer Wiederholung werden fünf Fragen erneut zufällig gewählt. Die
Inhaltsvalidierung erfasst alle sechs neuen Pools. Für die unabhängige fachliche Prüfung erhält der Nutzer den vollständigen kopierbaren
Prüf-Prompt und gibt die kurze Liste beanstandeter Fragen-IDs zurück. Beanstandete Fragen werden vor der Integration korrigiert oder
entfernt; korrigierte Fragen werden erneut unabhängig geprüft.

Browser-Tests belegen Start, Bestehen, Nichtbestehen mit Erklärung und Quellenbezug sowie Wiederholung exemplarisch an jeweils
unterschiedlichen Themen des zweiten Pfads. Sie prüfen sichtbares Verhalten über stabile Selektoren und hängen weder von einer festen
Fragenreihenfolge noch von einer bestimmten zufälligen Auswahl ab. Die Verfügbarkeit und Struktur aller sechs Pools wird unabhängig davon
automatisiert geprüft.

Für neue Fragen gelten die [gemeinsamen Fragenregeln](../content/question-authoring.md).

Außerdem prüfen, ob die bestehenden Lerncheck-E2E-Tests der richtigen Vertikale zugeordnet sind, und fachlich zugehörige Tests aus `app`
in `learning-checks` verschieben.

Vertikalen: Themen, Lernchecks

Dokumentation nach Umsetzung: Fragenumfang des zweiten Pfads knapp im Produktstand und in der redaktionellen Richtlinie ergänzen.

## Ziel und Nicht-Ziele

Lernende können die sechs bisher nicht geprüften Themen des zweiten Pfads mit dem bestehenden Lerncheck bearbeiten und anhand
quellengebundener Erklärungen aus richtigen und falschen Antworten lernen. Die zwei bereits vorhandenen Themen des Pfads behalten ihre
Fragenpools. Diese Änderung entwirft weder einen neuen Check-Ablauf noch Lernchecks für den dritten Pfad oder das unzugeordnete Git-Thema.
Neue Abhängigkeiten sind nicht vorgesehen.

## Entscheidungen und Risiken

- **Betroffene Themen-IDs:** `module-boundaries-and-public-interfaces`, `tdd-for-domain-behavior`,
  `archunit-for-java-architecture`, `playwright-for-web-flows`, `web-xss-and-safe-dom` und `dependency-security-assessment`.
- **Fachliche Qualität:** Mindestens 25 gültige, unterschiedliche Fragen je Pool bleiben nach der unabhängigen Prüfung übrig. Für jede
  Frage werden alle Optionen, Erklärungen und Quellenbezüge gegen erreichbare Originalquellen geprüft. Die Fragenregeln gelten über
  [diesen Pfad aus der aktiven Spec](../../content/question-authoring.md); die wortgetreu übernommene Backlog-Verknüpfung oben ist relativ
  zum früheren Dateistandort.
- **Mehrdeutige Antworten und schwache Ablenkungen:** Der vollständige Prüf-Prompt mit stabilen IDs wird dem Nutzer zur externen
  unabhängigen Prüfung gegeben. Beanstandete Fragen werden korrigiert und erneut geprüft oder entfernt. Reicht ein Pool danach nicht
  mehr aus, werden weitere Fragen erstellt und geprüft, bevor er integriert wird.
- **Quellenänderungen:** Neue oder ersetzte Themenquellen und fachliche Textkorrekturen müssen nach den Quellenregeln begründet und
  mit Prüftag dokumentiert werden. Ungeklärte fachliche Aussagen werden nicht geraten.
- **Instabile Browser-Tests:** Tests nutzen zugängliche Bezeichnungen und den jeweiligen Pool zum Zuordnen der sichtbaren Frage.
  Weder die Reihenfolge noch ein garantiert anderer Fünfersatz bei Wiederholung wird vorausgesetzt. Bestehen, Nichtbestehen und
  Wiederholung werden an verschiedenen Themen exemplarisch geprüft.
- **Vertikalgrenzen:** Katalog und Fragen gehören zu `topics`, der Auswahlcheck zu `learning-checks`. Fachlich zugehörige E2E-Tests
  werden diesen Vertikalen zugeordnet; `app` bleibt nur für reine Kompositionstests. Ein Commit berührt höchstens diese zwei Vertikalen.

## Abnahme

1. Alle sechs Themen bieten einen Lerncheck mit je mindestens 25 validen, quellengebundenen und fachlich unterschiedlichen Fragen.
   Die Strukturprüfung erfasst die sechs Pools zusätzlich zu den vorhandenen Grundlagen-Pools.
2. Der bestehende Fünf-Fragen-Ablauf bleibt erhalten. Browser-Tests belegen Start, Bestehen, Nichtbestehen mit Erklärung und
   Quellenlink sowie Wiederholung exemplarisch an verschiedenen Themen des zweiten Pfads. Ein fehlgeschlagener externer Quellenlink
   verhindert die Auswertung nicht.
3. Die unabhängige fachliche Prüfung aller neuen Fragen ist dokumentiert. Es bleiben keine ungeklärten Beanstandungen, und nach
   Korrekturen oder Entfernungen gilt weiterhin der Mindestumfang je Pool.
4. Fachlich zugehörige E2E-Tests liegen bei ihrer Vertikale. Die verpflichtende Prüfsuite, Browser-E2E und die lokale manuelle
   Browserprüfung sind grün; Browser, Ablauf und Ergebnis werden hier festgehalten.

## Umsetzung und Nachweise

| Teil-Feature | RED | GREEN | REFACTOR / Nachweis |
| --- | --- | --- | --- |
| Fragenpool je der sechs Themen | Vor jedem Pool einen fachlich passenden Test für Bestand und Struktur ausführen; erwartetes Fehlen als RED dokumentieren. | Fragen und nötige Quellen-/Thementextkorrekturen ergänzen; den jeweiligen Test grün ausführen. | Fachliche Vielfalt, Abgrenzung und Quellenbezüge prüfen; unabhängige Prüfung und erneute grüne Tests je Pool dokumentieren. Noch ausstehend. |
| Lerncheck-Zugang und Ablauf für den zweiten Pfad | Browser-Test für den neuen Zugang und repräsentative Lernergebnisse vor der Anbindung fehlschlagen lassen. | Pools anbinden und den vorhandenen Ablauf für die neuen Themen grün prüfen. | E2E-Tests nach fachlicher Zuständigkeit einordnen, Zufallsabhängigkeiten entfernen und Browser-E2E erneut grün ausführen. Noch ausstehend. |
| Gesamtabnahme | — | — | Vollständige Pflichtsuite, Inhaltsvalidierung, Architekturprüfung, Browser-E2E und lokale Browserprüfung mit Browser, Ablauf und Ergebnis dokumentieren. Nutzer prüft die Änderung selbst und bestätigt das Ergebnis ausdrücklich vor einem Commit. Noch ausstehend. |
