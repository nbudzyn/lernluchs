## Bezeichnungen vereinheitlichen

Wir haben nur wenige fachliche Dinge (Konzepte) in der Anwendung.
Erster Schritt: Tabelle der fachlichen Dinge in der Anwendung, jeweils mit Begriffen, die in der Anwendung / im Quellcode / in den Vorgaben verwendet werden und eine überschneidende oder ähnliche Bedeutung haben ("unscharfen Synonyme").

Im zweiten Schritt wollen wir uns klar auf einen Begriff einigen und die anderen Begriffe eliminieren / ersetzen.

Wir wollen eine klare Ubiquitous Language erreichen.

Vielleicht schreiben wir eine Art deutsch-englische Synonym-Liste in das Glossar und haben irgendwo den Hinweis, diese Synonyme NICHT zu verwenden?

## Geklärte Begriffe und Umfang

Die Begriffe sind mit dem Nutzer geklärt. Beschreibende Tabellenbezeichnungen
werden keine zusätzlichen Fachbegriffe. Das Glossar definiert Deutsch und Englisch
und nennt unerwünschte Synonyme ausdrücklich unter „Nicht verwenden“.

| Deutsch | Englisch / Code | Nicht verwenden |
| --- | --- | --- |
| Thema | Topic | Karte, Lernkarte, Lernthema, Card |
| Themen | Topics | Katalog, Inhaltskatalog, TopicCollection |
| Lernpfad | Learning path / LearningPath | keine zusätzliche Bezeichnung |
| Frage | Question | Auswahlfrage |
| Antwortoption | Answer option / AnswerOption | QuestionOption |
| Fragenpool | Question pool / questionPool | kein Synonym für Lerncheck |
| Fragenpools | Question pools / questionPools | Fragenkatalog, questionCatalog |
| Lerncheck | Learning check / LearningCheck | Test, Auswahlcheck, Quiz |
| Lernstand | Learning state / LearningState | Lernfortschritt, LearningProgress |
| Landkarte | Topic map | Karte für ein einzelnes Thema; Map als unspezifischer Fachbegriff |
| bestanden | passed | bezeichnet das Ergebnis eines Lernchecks |
| gelernt | learned | bezeichnet den gespeicherten Status eines Themas |

Oberfläche, zugängliche Beschriftungen, Code, Dateinamen, zugehörige Tests,
Buildkonfiguration und aktuelle Vorgaben werden vereinheitlicht. Technische
Standardbegriffe wie JavaScript-Map, React-State, Test und Fortschrittsausgabe,
fremde Produktnamen und Quellenbezeichnungen behalten ihre Bedeutung.
Archivierte Specs und historische redaktionelle Prüfunterlagen werden nicht
umgeschrieben. Geplante Stories erhalten ausschließlich die vereinbarten
Begriffsersetzungen, keine fachlichen Änderungen. Die noch aktive Recherche
bleibt als redaktioneller Nachweis erhalten; nur ihre Bezeichnungen werden angepasst.

## Ziel und Grenzen

Die Hilfe spricht wie der Lerncheck von einem Lerncheck; der Haken bedeutet
„Thema gelernt“. Die Themenliste heißt auch für Screenreader „Themen“.
Startschaltflächen, Überschrift und zugänglicher Bereich nennen „Lerncheck“.
Alle aktiven Implementierungen verwenden die
vereinbarten Begriffe. Verhalten, fachliche Inhalte, Quellen, dauerhafte IDs und Lernpfade
bleiben erhalten. Eine Antwortoption wird rein sprachlich von „Ein neues Thema
im Katalog ohne Workflowdaten.“ zu „Ein neues Thema ohne Workflowdaten.“ geändert.
Der bestehende Fingerprint wird vor dieser Änderung aus genau dieser einen
Ersetzung berechnet; alle anderen Fragen und Antwortoptionen bleiben unverändert.
Es gibt keine neue Abhängigkeit und keine fachlichen
Inhaltsänderungen, daher ist keine neue Quellenprüfung erforderlich.

Betroffene Vertikalen: Themen, Hilfe, Lernchecks und Lernstand. Die Umsetzung
wird nach manueller Abnahme in höchstens zwei Vertikalen je Commit geschnitten:
1. Umbenennung `learning-progress` → `learning-state` (alter und neuer Eigentümer),
   App-Anbindung und dazugehörige Architekturkonfiguration.
2. Themenbegriffe und Hilfe einschließlich Glossar.
3. Themen-/Lerncheck-Beschriftungen und Fragenpools einschließlich Shared-Typen,
   Buildanbindung und Archivierung dieser Spec.
Die automatisierte Commitgrenze wird weder gelockert noch umgangen.

Geltende Vorgaben: [Workflow](../README.md),
[dauerhafte Regeln](../../governance/durable-rules.md),
[Vertikalen](../../architecture/verticals-and-boundaries.md),
[Qualitätsstrategie](../../quality/verification-strategy.md).

## Risiken und Abnahme

- Der bisherige Schlüssel `lernluchs.learning-progress.v1` bleibt ausschließlich
  als technischer Speichervertrag erhalten. Bestehender Lernstand wird gelesen
  und im selben Format gespeichert; keine Migration oder Löschung.
- Architekturtests prüfen die neue Vertikale und öffentliche Einstiegspunkte;
  dependency-cruiser sichert weiterhin die Importgrenzen ab.
- Bestehende Tests werden erweitert: Glossarbegriffe, Hilfe, zugänglicher
  Themenname, Fragenpool-Dateinamen und Validator-Meldungen. Ein bestehender
  Lernstandstest prüft zusätzlich das Laden schon gespeicherter IDs.
- Bestehende Fingerprint-Tests sichern Fragen, Antwortoptionen, Quellen, IDs
  und Lernpfadreihenfolge unverändert ab.
- Pflichtsuite: `npm run check`, beide Pages-Prüfungen, vollständiger E2E-Lauf
  mit dem eigenen Runner und `npm audit --audit-level=high`.
- Browserablauf: Themenliste und Hilfe prüfen, Thema öffnen, Lerncheck starten
  und abbrechen, Rückkehr zur Themenliste; vorhandener Lernstand bleibt erhalten.

## Umsetzung und Nachweise

| Teil | RED | GREEN / REFACTOR |
| --- | --- | --- |
| Begriffe und Verträge | Erweiterte bestehende Glossar-, Hilfe-, Einstiegspunkt-, Dateiablage- und Validator-Tests: 5 erwartete Fehlschläge, 7 bestanden; 29,07 s; Exitcode 1. Bisherige Begriffe, Vertikalenname und Dateinamen entsprachen noch nicht der vereinbarten Sprache. | Glossar, Oberfläche, Typen, Vertikalen- und Dateinamen sowie Build-/Prüfanbindung umbenannt. Gezielter Lauf: 16 bestanden; der anschließend korrigierte Ablagevergleich besteht mit allen 5 Architektur-/Datenprüfungen (0,95 s, Exitcode 0). |
| Sprachliche Antwortoption | Bestehender Fingerprint-Test mit vorab berechnetem Sollwert: 1 erwarteter Fehlschlag, 4 übersprungen; 0,90 s; Exitcode 1. Die eine vereinbarte Begriffskorrektur war noch nicht enthalten. | Genau eine Antwortoption korrigiert; der Fingerprint bestätigt unveränderte übrige Fragen, Antwortoptionen, Quellen und IDs. Der separate Lernpfad-Fingerprint bleibt unverändert. |
| Gespeicherter Status in der Hilfe | Bestehender Hilfe-Test erwartet „Thema gelernt“: 1 erwarteter Fehlschlag; 2,06 s; Exitcode 1. | Hilfetext und CSS-Bezeichnung passend zum gespeicherten Status geändert; 1 Test bestanden; 1,84 s; Exitcode 0. |
| Lerncheck als Nutzerfunktion | Bestehende Tests für zugängliche Startschaltflächen und einen vollständigen Lerncheck erwarten „Lerncheck“ statt „Fragen“ als Durchlaufbezeichnung: 2 erwartete Fehlschläge, 30 übersprungen; 2,23 s; Exitcode 1. | Startbeschriftung, Titel und Bereich vereinheitlicht; alle 32 betroffenen Komponentenprüfungen bestanden; 3,68 s; Exitcode 0. |
| Bestandsschutz und REFACTOR | Keine zusätzliche Anforderung oder neue Testmethode. | Bestehenden Lernstandstest um bereits gespeicherte IDs und unverändertes Schreibformat ergänzt. Namensverletzungen werden mit Datei und betroffenem Bezeichner diagnostiziert, ohne ganze Quelldateien auszugeben; Glossartest prüft alle Begriffe zusammen und eindeutige Überschriften. Formatierung vereinheitlicht. |

Abschließende Prüfungen nach der letzten produktrelevanten Änderung:

- `npm run check`: vollständig grün, Exitcode 0; 44,72 s. Enthält 126
  Unit-/Komponententests (27,52 s), 30 Inhaltsprüfungen (1,90 s), 11 Runner-Selbsttests,
  Formatierung, Lint, Typprüfung, Architektur, Lizenzen und Produktionsbuild.
- `npm run test:pages-build`: grün, Exitcode 0; 1,26 s.
- `npm run test:pages-workflow`: grün, Exitcode 0; 0,77 s.
- `npm audit --audit-level=high`: 0 Schwachstellen, Exitcode 0.
- `npm run --silent test:e2e`: 64 Desktop-/Mobiltests bestanden,
  29,15 s; Exitcode 0. Die lokale Vorschau verwendet `dist`; nach der
  Pages-Basispfadprüfung wurde deshalb der lokale Build wiederhergestellt
  (1,12 s, Exitcode 0). Der vorherige E2E-Anlauf wurde ohne gültigen Nachweis
  beendet; der abschließende vollständige Lauf prüft die stabile Vorschau.
- Lokaler Browsernachweis: Codex In-app-Browser unter
  `http://127.0.0.1:4173/`; Themenname, Hilfe („startet einen Lerncheck“ und
  „Thema gelernt“), Thema öffnen, Lerncheck starten, Abbrechen und Rückkehr zur
  Themenliste geprüft. Vorhandener Lernstand blieb nach dem Ablauf sichtbar.
  Die Hilfe bleibt zur manuellen Prüfung geöffnet.
- Diffprüfung: keine Whitespace-Fehler. Während der Umsetzung hinzugekommene
  Graphify-Erwähnung im Codegraph-Thema erhalten; sie gehört nicht zu dieser Story.

Manuelle Abnahme und Commitfreigabe sind erfolgt. Die Hilfe-E2E-Prüfung verlangt
bei der Rückkehr eine sichtbare Navigation, ohne den von Themen verantworteten
zugänglichen Namen nochmals zu prüfen; dieser bleibt in Themen-/App-Tests
abgesichert. So können die drei Committeile auch unabhängig voneinander die
Vertikalgrenze einhalten. Die abschließenden Prüfergebnisse beziehen sich auf diesen Stand. Die Spec wird
mit dem letzten Committeil archiviert.
