# Änderungs-Specs und Archiv

## Eine Backlog-Story vollständig umsetzen

„Wir wollen Story 1 implementieren“ beauftragt die erste Story im
[Story-Backlog](../product/story-backlog.md): Refinement, Aktivierung, Implementierung
und Prüfung in dieser Reihenfolge. Die Übergänge brauchen keinen weiteren Auftrag.

1. Die Story nach [Refinement](#erste-backlog-story-vorbereiten) klären.
2. Die geklärte Story nach den [Aktivierungsregeln](#erste-backlog-story-vorbereiten) als aktive Spec übernehmen und aus
   dem Backlog entfernen. Abnahme, Risiken und nötige Entscheidungen ergänzen.
3. Die aktive Spec nach [TDD und Spec-Nachweisen](#tdd-und-spec-nachweise)
   umsetzen und nach [Qualitätsstrategie](../quality/verification-strategy.md#prüfumfang-und-nachweise) prüfen.
4. Dem Nutzer die fertige Änderung zur eigenen manuellen Prüfung bereitstellen.
   Den [Abschluss und die Archivierung](#abschluss-und-archivierung) durchführen.

Bei ausdrücklich auf Refinement oder Aktivierung begrenztem Auftrag nach diesem
Schritt enden. Dafür gelten die folgenden Regeln.

## Erste Backlog-Story vorbereiten

Bei Formulierungen wie „Refinement der ersten Story“ oder „Refine die erste Story“ gilt:

1. Die erste Story im [Story-Backlog](../product/story-backlog.md) prüfen.
2. Befrage den Nutzer, bis mit mindestens 95 % Sicherheit klar ist, was umgesetzt werden soll. Halte die Ergebnisse in dieser Backlog-Story fest.
3. Die betroffenen Vertikalen ermitteln und die [Rückfrage beim Entwickler](../../AGENTS.md#nicht-verhandelbar) bereits im Refinement anwenden.
4. Noch keine aktive Spec anlegen und noch nichts implementieren.

Fehlt eine umsetzungsrelevante Antwort, die Story nicht aktivieren oder
implementieren. Jede Story liefert im Browser nachvollziehbaren Geschäftswert.
Interne Verträge, Datenbestände oder Grundlagen sind Teil einer solchen vertikalen
Scheibe, kein alleiniger Liefergegenstand.

Bei Formulierungen wie „Aktiviere die erste Story“ oder „Erzeuge eine active Spec“ gilt:

1. Übernimm die erste Backlog-Story mit Überschrift und vollständigem Inhalt wortgetreu als aktive Spec unter `active/`.
2. Prüfe die Übernahme und entferne danach die Story vollständig aus dem Backlog. Die nächste geplante Story rückt an die erste Stelle.
3. Die weiteren Kapitel analog zu [0005](implemented/0005-weave-next-learning-path.md) ergänzen, insbesondere Risiken und Abnahme sowie Umsetzung und Nachweise. Noch nicht erbrachte Nachweise nicht als erledigt darstellen.
4. Noch nichts implementieren.

Lege vor jeder fachlichen oder architektonischen Implementierung **eine** Datei direkt unter `active/` an. Der englische Dateiname ist kurz, eindeutig, ohne Datum oder Nummer, etwa `weave-next-learning-path.md`.

Die Spec enthält knapp: Ziel und Nicht-Ziele, betroffene Vertikalen, Entscheidungen und Risiken, prüfbare Abnahme sowie RED → GREEN → REFACTOR pro Teil-Feature. Ergänze während der Arbeit RED-Grund, grüne Prüfungen, Quellenprüfung bei Inhalten und lokalen Browsernachweis (Browser, Ablauf, Ergebnis) in derselben Datei. Vor dem Commit alle Platzhalter ausfüllen.

## Prüfung mit gezieltem Aufwand

Lese- und Ausgabeumfang regelt [AGENTS.md](../../AGENTS.md#vor-jedem-lesen-und-tool-aufruf).
Für Testorganisation, Runner, Prüfumfang und die Gültigkeit von Nachweisen ist
die [Qualitätsstrategie](../quality/verification-strategy.md) maßgeblich; die
passenden Abschnitte sind gemäß [Index](../INDEX.md) vor der Handlung zu lesen.

### TDD und Spec-Nachweise

Pro Teil-Feature in dieser Reihenfolge arbeiten:

1. **RED:** Vor der Implementierung einen Test schreiben und ausführen, der aus
   fachlich korrektem Grund fehlschlägt. Vorher die Testorganisation beachten.
2. **GREEN:** Die kleinste Implementierung ergänzen, bis der Test besteht.
3. **REFACTOR:** Bei weiterhin grüner Testsuite refaktorieren.

Ergänze Nachweise in derselben aktiven Spec. Halte bei fachlichen Inhalten vor dem
Coding knapp fest: Aussage, möglichst primäre Quelle, Prüftag und Grenze oder
Unsicherheit. Prüfe Aussagen gebündelt; die einschlägigen Inhaltsregeln gelten zusätzlich.

## Abschluss und Archivierung

Es gelten die Freigabeschranken aus [AGENTS.md](../../AGENTS.md#nicht-verhandelbar).
Der Implementierungsauftrag allein ist keine manuelle Commit-Freigabe. Prüfe
unmittelbar vor dem Commit Arbeitsbaum und gestagten Diff auf unerwartete Änderungen
und Whitespace-Fehler. Vermerke Test- und Freigaberückmeldungen des Entwicklers in Git
nur als erfolgt, ohne Wortlaut oder weitere Details.

Nach fertiger Änderung, grünen Prüfungen und manueller Prüfung die vollständig ausgefüllte Spec direkt nach `implemented/` verschieben. Vergib die nächste vierstellige Nummer, etwa `0005-weave-next-learning-path.md`, nach Abschlussreihenfolge. Keine Datums- oder Commit-Kennung in der Datei. Archivierte Specs nicht umschreiben; spätere Korrekturen erhalten eine neue Spec.

Die Verschiebung und die fachliche Änderung gehören zum selben Commit.
Architekturausnahmen richten sich nach den [Architekturregeln](../governance/durable-rules.md#architektur-und-änderungen);
sie heben die Vertikalgrenze aus AGENTS.md nicht auf.
