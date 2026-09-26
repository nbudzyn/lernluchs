# Story-Backlog

Dieses Backlog enhält (nur) geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; deren `tasks.md` dokumentiert RED → GREEN → REFACTOR.

## Nächsten Lernpfad einweben

Der Inhaltskatalog wird um diesen Lernpfad erweitert:

1. Problem verstehen und Änderungsgrenzen setzen - vorhanden
2. EARS: Anforderungen präzise formulieren - vorhanden
3. Modulgrenzen und öffentliche Schnittstellen gestalten - neu
4. Fachverhalten mit TDD absichern - neu
5. Java-Architekturregeln mit ArchUnit prüfen - neu
6. Webabläufe mit Playwright prüfen - neu
7. Web-Sicherheitsrisiken wie XSS und unsichere DOM-Nutzung erkennen - neu
8. Abhängigkeiten und Sicherheitslücken risikobasiert bewerten - neu

Der Lernpfad als solcher wird noch nicht als Objekt in der Software repräsentiert
und erscheint nicht als eigener Abschnitt in der Oberfläche.

Die sechs neuen Lerninhalte werden als Lernkarten mit Quellen und
Aktualitätsmetadaten ausformuliert, fachlich geprüft und strukturell an die
vorhandenen Inhalte angeglichen. Fragenpools gehören nicht zu dieser Story.

Alle zwölf Lerninhalte erscheinen genau einmal in einer gemeinsamen,
ungruppierten Liste. Sie werden über beide Lernpfade hinweg nach Grundlagen,
mittleren und fortgeschrittenen Themen sortiert. Die relative Reihenfolge der
sechs vorhandenen Inhalte bleibt erhalten; die neuen Inhalte werden passend
dazwischen oder danach eingefügt. Auch die oben angegebene Reihenfolge der
acht Inhalte des neuen Lernpfads bleibt erhalten.

Vertikale: Inhaltskatalog

## Fragenpools für Lerninhalte kuratieren

Für alle Lerninhalte, denen noch Fragen fehlen, einen ausreichend großen,
quellengebundenen Fragenpool erstellen, damit Wiederholungen unterschiedliche
Fragensätze nutzen können. Fragen prüfen konkrete Aussagen aus dem jeweiligen
Lerninhalt und seiner Lernkarte; Allgemeinplätze sind unzulässig. Jede
Antwortoption erhält eine Begründung und einen Quellenbezug. Die Fragen werden
vor dem Commit unabhängig fachlich geprüft.

Vertikale: Inhaltskatalog

## Grundlagenwissen überprüfen

Auswahlchecks aus den kuratierten Fragenpools mit Bestehen, Nichtbestehen,
Erklärung und Wiederholung anbieten.

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
