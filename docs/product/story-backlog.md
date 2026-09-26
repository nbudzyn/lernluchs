# Story-Backlog

Dieses Backlog enhält (nur) geplante, noch nicht aktive Stories in vorgesehener Umsetzungsreihenfolge. Unmittelbar vor der Umsetzung erhält
jede Story eine eigene Änderungs-Spec unter
`docs/changes/active/`; diese dokumentiert RED → GREEN → REFACTOR.

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
- Bisher gibt es zwei Lernpfade:

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
