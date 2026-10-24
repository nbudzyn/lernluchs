# Glossar

Begriffe für Oberfläche, Code und aktuelle Vorgaben, einschließlich geplanter
Funktionen. Definition bedeutet nicht Umsetzung; Stories präzisieren bei Bedarf.
GUI-Beschriftungen gelten für die Oberfläche. „Nicht verwenden“ grenzt unerwünschte
Synonyme ab, ausgenommen technische Standard- und fremde Produkt-/Quellenbegriffe.
Bestehende Speicherschlüssel bleiben als Kompatibilitätsvertrag erhalten.

## Frage

**Englisch:** Question. **Nicht verwenden:** Auswahlfrage.

Quellengebundene Frage mit mehreren Optionen, genau einer richtigen Antwort
und Erklärung je Option.

## Antwortoption

**Englisch:** Answer option. **Code:** AnswerOption.
**Nicht verwenden:** QuestionOption; „Option“ nur als Kurzform innerhalb einer Frage.

Auswählbare Antwort mit Erklärung und Quellenbezug.

## Fragenpool

**Englisch:** Question pool.

Kuratierte Sammlung quellengebundener Fragen zu einem Thema; ermöglicht
unterschiedliche Fragen bei Wiederholungen.

## Fragenpools

**Englisch:** Question pools.
**Nicht verwenden:** Fragenkatalog, questionCatalog, validateQuestionCatalog.

Lernchecks-Fragenpools nach dauerhafter Themen-ID:
`questionPools`, gemeinsame Validierung `validateQuestionPools`.

## Themen

**Englisch:** Topics.
**Nicht verwenden:** Katalog, Inhaltskatalog, Themenkatalog, TopicCollection.

Vertikale für öffentliche versionierte Themen, Quellen, redaktionelle Metadaten
und Anzeige; ohne persönlichen Lernstand, keine Veränderung durch Benutzereingaben.

## Alltagsanker

**Englisch:** Everyday anchor. **Code:** everydayAnchor.
**GUI:** Kommt mir bekannt vor.
**Nicht verwenden:** persönliches Problem, persönlicher Anker, Einstiegsfrage, personalAnchor.

Feste redaktionelle Alltagssituation aus Lernendensicht: konkrete Schwierigkeit/
Unsicherheit, umgangssprachlich, ohne vorweggenommene Lösung.
Öffentlicher Themeninhalt, keine persönliche Eingabe oder gespeicherte Nutzererfahrung.
Zurückhaltende Randnotiz am Thema und alternative Listenansicht; Schnellfilter
durchsucht ihn in beiden Ansichten.
Beim ersten Besuch zeigt die Liste Alltagsanker; die ausdrückliche Wahl zwischen
„Themen“ und „Kommt mir bekannt vor“ bleibt als lokale Anzeigepräferenz erhalten,
unabhängig vom Lernstand.

## Kompetenzprofil

**Englisch:** Competency profile.

Nachvollziehbare Darstellung bestätigter Kompetenzen je Thema, aus Themen und Lernstand abgeleitet.

## Landkarte

**Englisch:** Topic map.
**Nicht verwenden:** unspezifisches Map; „Karte“ bezeichnet kein einzelnes Thema.

Frei navigierbare grafische Themen-/Querverbindungsansicht mit Liste als Fallback.

## Lerncheck

**Englisch:** Learning check.
**Nicht verwenden:** Test, Auswahlcheck, Quiz für die Nutzerfunktion.

Durchlauf mit Fragen aus dem Pool eines Themas, Lösungserklärungen und
Wiederholungsmöglichkeit. Durchlauf und Fragenpool sind verschieden.

## Lernchecks

**Englisch:** Learning checks.

Vertikale für Fragenpools, Validierung und Durchführung; Zuordnung über dauerhafte
Themen-IDs, ohne eigene Themeninhalte oder persönliche Lernstände.

## Lernstand

**Englisch:** Learning state.
**Code:** learning-state, useLearningState, LearningStateNotice.
**Nicht verwenden:** Lernfortschritt, Learning progress, LearningProgress, progress als Lernstandsbezeichnung.

Persönlicher lokaler Browserzustand, etwa bestätigte Kompetenzen und Check-Ergebnisse;
von Themen getrennt und bei Inhaltsupdates erhalten.

## Bestanden

**Englisch:** Passed.

Alle fünf Fragen richtig; Bestehen wird erst durch erfolgreiche Speicherung im Lernstand festgehalten.

## Gelernt

**Englisch:** Learned.

Gespeicherter Themenstatus nach bestandenem Check; späteres Nichtbestehen entfernt ihn nicht.

## Thema

**Englisch:** Topic.
**Nicht verwenden:** Karte, Lernkarte, Themenkarte, Lernthema, Card als Synonyme.

Fachlicher Gegenstand mit dauerhafter ID, kurzen Inhalten, Quellen und Aktualitätsangaben;
kann mehreren Lernpfaden angehören, auf der Landkarte und im Kompetenzprofil erscheinen.

## Lernpfad

**Englisch:** Learning path.

Empfohlene Themenfolge zur Orientierung; sperrt keine anderen Themen.

## Primärquelle

**Englisch:** Primary source.

Originalveröffentlichung oder Urheberdokumentation zur eigenen Methode, zum
Produkt oder Vorgehen; belegt die ursprüngliche Aussage unmittelbar.

## Sekundärquelle

**Englisch:** Secondary source.

Fremde Zusammenfassung, Erklärung oder Bewertung; ordnet Primärquellen ein,
ersetzt sie nicht als Beleg der ursprünglichen Aussage.

## Vertikale

**Englisch:** Vertical.

Abgegrenzte fachliche Verantwortung, etwa Themen, Lernchecks oder Lernstand;
begrenzt Änderungsumfang und Datenbesitz.
