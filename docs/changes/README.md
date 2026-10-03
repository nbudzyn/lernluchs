# Änderungs-Specs und Archiv

## Eine Backlog-Story vollständig umsetzen

Bei einem Auftrag wie „Wir wollen Story 1 implementieren“ ist die erste Story im
[Story-Backlog](../product/story-backlog.md) gemeint. Der Auftrag umfasst Refinement,
Aktivierung, Implementierung und Prüfung in dieser Reihenfolge; für den Übergang
zwischen diesen Schritten ist kein weiterer Auftrag nötig.

1. Die Story gemeinsam mit dem Nutzer verfeinern. Fachliche Unklarheiten aktiv
   erfragen, bis mit mindestens 95 % Sicherheit klar ist, was umgesetzt werden
   soll. Antworten und Entscheidungen in der Backlog-Story festhalten. Solange
   eine für die Umsetzung wesentliche Antwort fehlt, die Story nicht aktivieren
   oder implementieren.
2. Die geklärte Story wie unten beschrieben als aktive Spec übernehmen und aus
   dem Backlog entfernen. Abnahme, Risiken und nötige Entscheidungen ergänzen.
3. Die aktive Spec pro Teil-Feature mit RED → GREEN → REFACTOR umsetzen und die
   Nachweise eintragen. Anschließend die vollständig verpflichtenden Prüfungen
   und den lokalen Browserablauf durchführen.
4. Dem Nutzer die fertige Änderung zur eigenen manuellen Prüfung bereitstellen.
   Erst nach seiner ausdrücklichen positiven Bestätigung, grüner Pflichtsuite
   und aktuellem Browsernachweis die Spec archivieren und committen. Der
   Implementierungsauftrag allein gilt nicht als Bestätigung für den Commit.

Ist der Auftrag ausdrücklich auf Refinement oder Aktivierung begrenzt, endet
die Arbeit nach dem jeweiligen Schritt. Dafür gelten die folgenden Regeln.

## Erste Backlog-Story vorbereiten

Bei Formulierungen wie „Refinement der ersten Story“ oder „Refine die erste Story“ gilt:

1. Die erste Story im [Story-Backlog](../product/story-backlog.md) prüfen.
2. Den Nutzer so lange befragen, bis mit mindestens 95 % Sicherheit klar ist, was implementiert werden soll. Die geklärten Ergebnisse in diese Backlog-Story übernehmen.
3. Noch keine aktive Spec anlegen und noch nichts implementieren.

Bei Formulierungen wie „Aktiviere die erste Story“ oder „Erzeuge eine active Spec“ gilt:

1. Die erste Story aus dem Backlog einschließlich Überschrift und vollständigem Inhalt wortgetreu als aktive Spec unter `active/` übernehmen.
2. Nach der überprüften Übernahme diese Story vollständig aus dem Backlog entfernen; die nächste geplante Story rückt an die erste Stelle.
3. Die weiteren Kapitel analog zu [0005](implemented/0005-weave-next-learning-path.md) ergänzen, insbesondere Risiken und Abnahme sowie Umsetzung und Nachweise. Noch nicht erbrachte Nachweise nicht als erledigt darstellen.
4. Noch nichts implementieren.

Jede fachliche oder architektonische Änderung erhält vor der Implementierung **eine** Datei direkt unter `active/`. Der englische Dateiname ist kurz, eindeutig und ohne Datum oder Nummer, zum Beispiel `weave-next-learning-path.md`.

Die Spec hält knapp fest: Ziel und Nicht-Ziele, betroffene Vertikalen, nötige Entscheidungen und Risiken, prüfbare Abnahme sowie pro Teil-Feature RED → GREEN → REFACTOR. RED-Grund, grüne Prüfungen, Quellenprüfung bei Inhalten und der lokale Browsernachweis (Browser, Ablauf, Ergebnis) werden während der Arbeit in derselben Datei ergänzt. Vor einem Commit bleiben keine offenen Platzhalter.

## Prüfung mit gezieltem Aufwand

- Den Lese- und Ausgabeumfang nach [AGENTS.md](../../AGENTS.md#vor-jedem-lesen-und-tool-aufruf) begrenzen: zuerst `docs/INDEX.md`, dann die
  relevante aktive Spec oder ausschließlich die erste Backlog-Story. Danach nur benötigte Abschnitte der verlinkten Vorgaben und gezielte
  Ausschnitte aus Code und Tests lesen. Weitere Dateien nur bei konkretem Klärungsbedarf hinzunehmen.
- Bei fachlichen Inhalten vor dem Coding eine knappe Quellenübersicht in der
  Spec festhalten: Aussage, möglichst primäre Quelle, Prüftag und Grenze oder
  Unsicherheit. Mehrere Aussagen gebündelt prüfen; die redaktionellen
  Quellenregeln gelten weiterhin.
- Pro Teil-Feature zuerst den gezielten RED-Test, dann GREEN und die betroffene
  Testsuite ausführen. Die gesamte Pflichtsuite nach der letzten Änderung an
  Code, Tests, Laufzeitinhalten, App-Konfiguration, Abhängigkeiten oder Prüfskripten
  zur Abnahme ausführen. Dieser grüne Nachweis gilt auch für den Commit, wenn
  danach ausschließlich Nachweise und Abnahmevermerk in der Änderungs-Spec
  ergänzt und diese archiviert wurde. Bei weiteren Änderungen oder unklarem
  Stand die Pflichtsuite erneut ausführen. Unmittelbar vor dem Commit den
  Arbeitsbaum und den gestagten Diff auf unerwartete Änderungen und
  Whitespace-Fehler prüfen.
- Den lokalen Browsercheck auf einen vorher festgelegten, für die Story
  aussagekräftigen Ablauf konzentrieren. Automatisierte Desktop- und
  Mobiltests prüfen die übrige Breite. Unmittelbar vor jedem Commit den
  geänderten Ablauf lokal im Browser ausprobieren und Browser, Ablauf und
  Ergebnis in der Spec dokumentieren.

Nach fertiger Änderung, grünen Prüfungen und manueller Prüfung wird die vollständig ausgefüllte Datei direkt nach `implemented/` verschoben. Dort erhält sie die nächste vierstellige Nummer, zum Beispiel `0005-weave-next-learning-path.md`. Die Nummer zeigt die Reihenfolge des Abschlusses; Datum und Commit-Kennung stehen nicht in der Datei. Archivierte Specs werden nicht nachträglich umgeschrieben. Spätere Korrekturen bekommen eine neue Spec.

Die Verschiebung und die fachliche Änderung gehören zum selben Commit. Ein fachlicher Commit betrifft höchstens zwei Vertikalen; breitere Architekturausnahmen brauchen eine ausdrückliche Begründung und Architekturtests. Unmittelbar vor jedem Commit gelten die [dauerhaften Vorgaben](../governance/durable-rules.md).
