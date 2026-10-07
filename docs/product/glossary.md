# Glossar

Dieses Glossar erklärt bestehende und geplante Begriffe. Eine Definition
behauptet nicht, dass die Funktion bereits umgesetzt ist. Neue Stories
präzisieren Begriffe bei Bedarf in ihrer Spec.

Die deutschen und englischen Begriffe gelten für Oberfläche, Code und aktuelle
Vorgaben; eine ausdrücklich angegebene GUI-Beschriftung gilt für die Oberfläche.
„Nicht verwenden“ nennt bisherige oder unerwünschte Synonyme, die nur
hier zur Abgrenzung aufgeführt werden. Technische Standardbegriffe und fremde
Produkt- oder Quellenbezeichnungen sind davon ausgenommen. Ein bestehender
Speicherschlüssel bleibt als Kompatibilitätsvertrag erhalten.

## Frage

**Englisch:** Question

**Nicht verwenden:** Auswahlfrage.

Eine quellengebundene Frage mit mehreren Antwortoptionen, genau einer richtigen
Antwortoption und einer Erklärung zu jeder Antwortoption.

## Antwortoption

**Englisch:** Answer option

**Code:** AnswerOption

**Nicht verwenden:** QuestionOption. „Option“ ist nur eine Kurzform innerhalb einer Frage.

Eine auswählbare Antwort auf eine Frage mit Erklärung und Quellenbezug.

## Fragenpool

**Englisch:** Question pool

Eine kuratierte Sammlung quellengebundener Fragen zu einem Thema.
Ein Lerncheck kann daraus für Wiederholungen unterschiedliche Fragen auswählen.

## Fragenpools

**Englisch:** Question pools

**Nicht verwenden:** Fragenkatalog, questionCatalog, validateQuestionCatalog.

Die Fragenpools der Lernchecks, nach dauerhafter Themen-ID zugeordnet. Im Code
heißen sie `questionPools`; ihre gemeinsame Validierung heißt `validateQuestionPools`.

## Themen

**Englisch:** Topics

**Nicht verwenden:** Katalog, Inhaltskatalog, Themenkatalog, TopicCollection.

Die fachliche Vertikale für den versionierten, öffentlich lesbaren Bestand an Themen, Quellen und redaktionellen Metadaten sowie
deren Anzeige. Sie enthält keinen persönlichen Lernstand und wird nicht durch Benutzereingaben verändert.

## Alltagsanker

**Englisch:** Everyday anchor

**Code:** everydayAnchor

**GUI:** Kommt mir bekannt vor

**Nicht verwenden:** persönliches Problem, persönlicher Anker, Einstiegsfrage, personalAnchor.

„Kommt mir bekannt vor“ beschriftet die Randnotiz und die alternative
Listenansicht. In Code und fachlicher Dokumentation heißt das Konzept
Alltagsanker / Everyday anchor.

Eine feste, redaktionell formulierte Alltagssituation aus Sicht des Lernenden,
in der er sich wiedererkennen kann. Der Alltagsanker benennt eine konkrete
Schwierigkeit oder Unsicherheit in umgangssprachlichem Ton, ohne die Lösung
vorwegzunehmen. Er steht als zurückhaltende Randnotiz beim Thema und kann in der
Themenliste anstelle der fachlichen Überschrift angezeigt werden. Der
Schnellfilter durchsucht ihn in beiden Listenansichten. Alltagsanker sind
öffentliche Themeninhalte, keine persönlichen Eingaben oder gespeicherten
Nutzererfahrungen. Beim ersten Besuch zeigt die Liste Alltagsanker. Die Wahl
zwischen „Themen“ und „Kommt mir bekannt vor“ wird als lokale Anzeigepräferenz
im Browser gespeichert und beim erneuten Laden wiederhergestellt; der Lernstand
bleibt davon unabhängig.

## Kompetenzprofil

**Englisch:** Competency profile

Die nachvollziehbare Darstellung bestätigter Kompetenzen je Thema. Sie wird aus der Vertikale Themen und dem Lernstand abgeleitet.

## Landkarte

**Englisch:** Topic map

**Nicht verwenden:** Map als unspezifische englische Bezeichnung. „Karte“ bezeichnet kein einzelnes Thema.

Die frei navigierbare, grafische Darstellung der Themen und ihrer Querverbindungen. Eine Listenansicht der Inhalte dient als Fallback.

## Lerncheck

**Englisch:** Learning check

**Nicht verwenden:** Test, Auswahlcheck, Quiz als Bezeichnung der Nutzerfunktion.

Ein Durchlauf mit Fragen aus dem Fragenpool eines Themas, mit dem Lernende ihr
Verständnis überprüfen. Zur Auswertung gehören Lösungserklärungen und die
Möglichkeit zur Wiederholung. Ein einzelner Lerncheck und sein Fragenpool sind
verschiedene Dinge.

## Lernchecks

**Englisch:** Learning checks

Die fachliche Vertikale für Fragenpools, deren Validierung und die Durchführung von Lernchecks. Sie ordnet Fragenpools über dauerhafte
Themen-IDs zu und besitzt keine Themeninhalte oder persönlichen Lernstände.

## Lernstand

**Englisch:** Learning state

**Code:** learning-state, useLearningState, LearningStateNotice

**Nicht verwenden:** Lernfortschritt, Learning progress, LearningProgress, progress als Bezeichnung des Lernstands.

Der persönliche, lokal im Browser gespeicherte Zustand, etwa bestätigte Kompetenzen und Check-Ergebnisse. Er ist von der Vertikale Themen getrennt
und bleibt bei Inhaltsupdates erhalten.

## Bestanden

**Englisch:** Passed

Das Ergebnis eines Lernchecks, wenn alle fünf Fragen richtig beantwortet wurden.
Das Bestehen wird erst durch erfolgreiches Speichern im Lernstand festgehalten.

## Gelernt

**Englisch:** Learned

Der im Lernstand gespeicherte Status eines Themas nach einem bestandenen
Lerncheck. Ein späterer nicht bestandener Lerncheck entfernt diesen Status nicht.

## Thema

**Englisch:** Topic

**Nicht verwenden:** Karte, Lernkarte, Themenkarte, Lernthema, Card als Synonyme für Thema.

Ein fachlicher Gegenstand mit einer dauerhaften ID, kurzen Inhalten, Quellen und Angaben zur Aktualität. Ein Thema kann Teil mehrerer
Lernpfade sein, auf der Landkarte erscheinen und im Kompetenzprofil einzeln betrachtet werden.

## Lernpfad

**Englisch:** Learning path

Eine empfohlene Folge von Themen. Er bietet Orientierung, sperrt aber keine Themen außerhalb des Pfads.

## Primärquelle

**Englisch:** Primary source

Eine Originalveröffentlichung oder die Dokumentation eines Urhebers zu seiner eigenen Methode, seinem Produkt oder seinem Vorgehen. Sie belegt die ursprüngliche Aussage unmittelbar.

## Sekundärquelle

**Englisch:** Secondary source

Eine fremde Zusammenfassung, Erklärung oder Bewertung einer ursprünglichen Aussage, Methode oder Dokumentation. Sie ordnet eine Primärquelle ein, ersetzt sie aber nicht als Beleg für deren ursprüngliche Aussage.

## Vertikale

**Englisch:** Vertical

Ein abgegrenzter Verantwortungsbereich der Anwendung, etwa Themen, Lernchecks oder Lernstand. Vertikalen begrenzen, welche
Teile eine Änderung betrifft und welche Daten sie verändern darf.
