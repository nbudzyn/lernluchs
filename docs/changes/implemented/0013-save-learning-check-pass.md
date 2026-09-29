## Bestehen lokal speichern

Hat eine lernende Person alle fünf Fragen eines Lernchecks richtig beantwortet, wird das Thema sofort nach der fünften Antwort lokal unter
der dauerhaften Themen-ID im Lernstand als „gelernt“ gespeichert. Die Themenliste zeigt hinter dem Namen eines Themas genau dann einen
grünen, auch ohne Farbe verständlichen Haken, wenn es im gespeicherten Lernstand als „gelernt“ steht. Ein nur in der laufenden Sitzung
erzieltes, aber nicht gespeichertes Bestehen erzeugt keinen Haken. Themen ohne Lerncheck erhalten keinen Haken allein aufgrund ihrer Anzeige
im Katalog.

- Der Lernstand bleibt nach Reload erhalten. Ein späterer nicht bestandener Durchlauf entfernt einen vorhandenen Bestehensstand nicht; die
  ausdrücklich bestätigte Rücksetzung gehört zur nächsten Story.
- Katalogänderungen, vorübergehend fehlende Themen und fehlerhafte externe Quellen löschen gespeicherte Bestehensstände nicht.
- Ist lokales Speichern nicht möglich, bleibt der Lerncheck nutzbar. Direkt beim fehlgeschlagenen Speicherversuch zeigt die App an, dass das
  Ergebnis nicht dauerhaft gespeichert wurde. Sie wiederholt denselben Speicherversuch nicht automatisch; jeder neue bestandene Durchlauf
  löst einen neuen Versuch aus.
- Erkennt die App beschädigte Lernstandsdaten, informiert sie darüber und versucht, den gesamten beschädigten Lernstand zurückzusetzen.
  Für die laufende Sitzung gilt dann ein leerer Lernstand. Scheitert auch das Zurücksetzen, zeigt sie den Fehler an; bei einem späteren Laden
  oder Speicherversuch versucht sie das Zurücksetzen erneut. Andere lokale Daten werden dadurch nicht gelöscht.

Die Umsetzung wird in Schritte mit höchstens zwei fachlichen Vertikalen pro Commit geschnitten: zuerst Bestehen und Speichern in Lernchecks
und Lernfortschritt, danach die Anzeige in Themen und Lernfortschritt. Jeder Schritt liefert einen im Browser nachvollziehbaren Wert.
Der Browser-E2E-Test deckt Speichern, Reload, Katalogänderungen und einen späteren nicht bestandenen Durchlauf ab; Tests prüfen außerdem
fehlgeschlagenes Speichern ohne Haken, den erneuten Versuch nach einem weiteren bestandenen Durchlauf sowie beschädigte Daten mit
erfolgreicher und fehlgeschlagener Rücksetzung.

Vertikalen: Lernchecks, Lernfortschritt (neu; Lernchecks hängt von Lernfortschritt ab, nicht umgekehrt), Themen

Dokumentation nach Umsetzung: Lokale Speicherung knapp in Produktstand und Architektur ergänzen; neue Vertikale dokumentieren.

## Risiken und Abnahme

- **Abgrenzung:** Die bestätigte Rücksetzung nach einem nicht bestandenen Durchlauf und die Fragehistorie gehören zu späteren Stories. Ein Abbruch vor der fünften Antwort speichert kein Bestehen.
- **Dauerhafte Themen-ID:** Gespeicherte Einträge beziehen sich auf IDs, nicht auf Titel oder die aktuelle Reihenfolge im Katalog. Ein bestandenes Thema bleibt nach Reload und nach einem späteren nicht bestandenen Durchlauf als „gelernt“ erhalten. Fehlende Themen werden beim Lesen des Katalogs nicht aus dem Lernstand entfernt.
- **Speichergrenze:** Die neue Vertikale Lernfortschritt verantwortet den persönlichen Lernstand und bietet Lernchecks und Themen nur einen kleinen öffentlichen Vertrag. Das Speicherformat wird auf lesbare und strukturell gültige Daten geprüft. Eine Rücksetzung betrifft ausschließlich den Lernstand, nicht andere lokale Daten. Die [Vertikalgrenzen](../../architecture/verticals-and-boundaries.md) und [dauerhaften Vorgaben](../../governance/durable-rules.md) gelten.
- **Sichtbares Ergebnis:** Im Browser wird geprüft, dass ein Haken nach erfolgreichem Speichern ohne Reload sowie nach Reload erscheint, für Themen ohne Lerncheck ausbleibt und auch ohne Farbe verständlich ist. Hinter dem Haken steht kein sichtbares „Gelernt“; Screenreader erhalten diese Bezeichnung über das Haken-Symbol. Bei einem fehlgeschlagenen Speicherversuch erscheint kein neuer Haken; die Fehlermeldung ist beim Abschluss sichtbar. Ein weiterer bestandener Durchlauf versucht erneut zu speichern.
- **Beschädigter Lernstand:** Tests prüfen sowohl eine erfolgreiche Rücksetzung als auch deren Fehlschlag. Der Lerncheck bleibt in beiden Fällen nutzbar; die App informiert beim Erkennen und bei einem fehlgeschlagenen Rücksetzversuch. Ein späteres Laden oder Speichern versucht die Rücksetzung erneut.
- **Lieferbare Schritte:** Zuerst werden Bestehen und Speichern in Lernchecks und Lernfortschritt im Browser sichtbar, danach die Hakenanzeige in Themen und Lernfortschritt. Jeder fachliche Commit betrifft höchstens zwei Vertikalen und setzt eine grüne Pflichtsuite sowie die ausdrücklich bestätigte manuelle Prüfung voraus.

## Umsetzung und Nachweise

| Schritt | Ergebnis |
| --- | --- |
| RED → GREEN → REFACTOR: Bestehen und Speichern in Lernchecks und Lernfortschritt | **RED:** `npm test -- --run tests/verticals/learning-checks/LearningCheck.test.tsx` schlug mit zwei fachlichen Fehlern fehl: Nach der fünften richtigen Antwort wurde der Speichervertrag nicht aufgerufen und ein Speicherfehler nicht angezeigt. Der neue Fortschrittstest konnte mangels Vertikale zunächst nicht geladen werden. **GREEN:** Lerncheck ruft den Speichervertrag unmittelbar nach der fünften richtigen Antwort auf; die neue Fortschritts-Vertikale speichert und prüft IDs sowie beschädigte Daten. 14 gezielte Tests grün. **REFACTOR:** Öffentlichen Hook-Vertrag auf gelernte IDs, Hinweis und Speicherfunktion verengt; Tests zu ungültiger Datenstruktur ergänzt. |
| RED → GREEN → REFACTOR: Hakenanzeige in Themen und Lernfortschritt | **RED:** `npm test -- --run tests/verticals/topics/TopicBrowser.test.tsx` schlug fachlich fehl: Der erwartete Haken für ein gespeichertes Thema fehlte (1 von 10 Tests rot). **GREEN:** Haken nur für gespeicherte Themen mit Lerncheck; 16 gezielte Tests grün. **Korrektur RED:** Nach dem Nutzerhinweis schlug derselbe gezielte Test erneut fehl, weil „Gelernt“ sichtbar war (1 von 10 Tests rot). **Korrektur GREEN:** Nur „✓“ sichtbar, als „Gelernt“ für Screenreader bezeichnet; 10 von 10 gezielten Tests grün. **REFACTOR:** Die App reicht nur IDs und Speicherfunktion zwischen den öffentlichen Vertikal-Einstiegspunkten weiter; Architekturprüfung auf die neue Vertikale erweitert. |
| Pflichtsuite und Browser-E2E | `npm run check` grün: Format, Lint, Typen, 50 Unit- und Komponententests, 8 Inhaltsprüfungen, Architektur, Lizenzen und Build. `npm run test:e2e` grün: 20 Chromium-Tests auf Desktop und Mobil, darunter Speichern, Reload, fehlende Katalog-ID, späteres Nichtbestehen, Speicherfehler und beschädigte Daten mit erfolgreicher und fehlgeschlagener Rücksetzung. `npm audit --audit-level=high`: 0 Schwachstellen. Keine neue Abhängigkeit. |
| Lokale Browserabnahme | Codex In-app-Browser unter `http://127.0.0.1:4174/`: fünf Fragen des Themas „Mensch und KI: Verantwortung bleibt menschlich“ richtig beantwortet, „Als gelernt gespeichert.“ in der Übersicht gesehen und den Haken nach Reload geprüft. Nach der Nutzerkorrektur erneut die Themenliste visuell und im Accessibility-Baum geprüft: Nur der grüne Haken ist sichtbar, dessen zugängliche Bezeichnung ist „Gelernt“. |
| Manuelle Prüfung durch den Nutzer | Der Nutzer bestätigte nach eigenem Test das Ergebnis und gab den Commit frei. |
