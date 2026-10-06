## Back-Button im Browser berücksichtigen
Der Back-Button im Browser soll an einigen Stellen berücksichtigt werden.
Angenommen, der Lernende kommt von www.google.de auf Lernfuchs und klickt den Browser-Backbutton. Dann kehrt er im Moment auf www.google.de zurück.
Das soll wie folgt geändert werden:
- Falls der User in der "schmalen" Ansicht ist und es wird ein Thema oder die Hilfe gezeigt, aber nicht nicht die Themenliste, löst der Back-Button die Funktion "Zur Themenliste" aus: Der Lernende wird also zu Themenliste zurückgeschickt.
  - ACHTUNG: Das soll auch dann passieren, wenn der User die "schmale" Ansicht dadurch erreicht hat, dass er (z.B. auf dem PC) das Browserfenster aus der breiten Ansicht heraus schmaler gezogen hat.
- Falls der User in der "breiten" Ansicht ist und es werden ein Thema (oder die Hilfe) und zugleich die Themenliste gezeigt, führt der Back-Button unverändert zu www.google.de.
  - ACHTUNG: Das soll auch dann passieren, wenn der User die "breite" Ansicht dadurch erreicht hat, dass er (z.B. auf dem PC) das Browserfenster aus der "schmalen" Ansicht heraus, IN DER NUR EIN THEMA ODER DIE HILFE GEZEIGT WURDE, breiter gezogen hat.
- Falls der User gerade eine Frage gezeigt bekommt (egal, ob Frage 1, 2...), löst der Backbutton die "Abbrechen"-Funktion aus - der User wird also zur Themenliste zurückgeführt. DER USER WIRD NICHT ZUR VORIGEN FRAGEN GEFÜHRT!
- Falls der User die abschließende Antwortenübersicht (am Ende eines Lernchecks) angezeigt bekommt, führt der Backbutton zur Themenliste zurück.
- Aus der Themenliste heraus führt der Back-Button immer zur vorherigen Seite (im Beispiel www.google.de) zurück (egal, was zwischendrin passiert ist).
- Der Browser-Vorwärtsbutton wird nicht überschrieben; es gibt keine eigene Wiederherstellung von Themen, Hilfe oder Lernchecks.
- Filter und Listenposition bleiben beim internen Zurück erhalten. Die jeweils aktuelle Fensterbreite entscheidet; schmal bedeutet unter 800 px.

## Ziel und Umfang

Browser-Zurück beendet eine eigenständige schmale Themen-/Hilfeansicht oder einen Lerncheck und zeigt die Themenliste. Die vorherige Website bleibt aus der Liste und aus der breiten Themen-/Hilfeansicht mit einem Zurück erreichbar, auch nach Größenwechseln und wiederholten Abläufen.

Betroffen: `topics` und `app`. Der technische History-Hook liegt intern in `topics`. Keine neue Abhängigkeit, keine neuen Inhalte, keine persistierten Antworten und kein eigener Vorwärtsablauf. Bestehende Auswahl, Filter und Listenposition bleiben erhalten; Browser-Zurück setzt die schmale Ansicht auf Liste. Die breite Detailauswahl darf erhalten bleiben.

## Entscheidungen, Risiken und Abnahme

- Ein gemeinsamer Rückweg verhindert gestapelte Verlaufseinträge für Themenwechsel oder einzelne Fragen. Die URL und der Pages-Basispfad bleiben erhalten.
- Der vorhandene Breakpoint von 800 px entscheidet auch bei Größenwechseln. Eine breiter gezogene Detailansicht muss mit einem Zurück die vorherige Website erreichen.
- Asynchrone History-Navigation, rasche Größenwechsel, manuelles Zurück zur Liste, erneute Auswahl, Reload und natives Vorwärts dürfen keine Rückwärts-Schleifen erzeugen.
- Browser-E2E deckt Themen und Hilfe einschließlich beider Größenwechselrichtungen, alle fünf Fragen sowie Ergebnis, Wiederholung, sichtbaren Rückkehrbutton und natives Vorwärts ab. Gleiche Anforderungen werden über benannte Szenarien gebündelt.
- Filter und Scrollposition werden bei internem Zurück geprüft; vorhandene Prüfungen für Auswahl und Filter bleiben gültig.
- Manueller Browserablauf: von einer vorherigen lokalen Seite zur App, schmale Themenansicht öffnen, Browser-Zurück zur Liste, erneut Zurück zur vorherigen Seite; Lerncheck abbrechen und Größenwechsel ergänzen.
- Commit erst nach vollständig grüner Pflichtsuite und ausdrücklich positivem manuellen Test des Nutzers.
- Abschlussausnahme: Commit-Freigabe trotz des bekannten offenen Audit-Befunds erfolgt. Der Sicherheitspatch bleibt als separate Änderung im Backlog; die übrigen Pflichtprüfungen sind grün.

## Technische Quellenprüfung

Geprüft am 04.10.2026: [MDN pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) beschreibt zusätzliche gleichartige Verlaufseinträge ohne URL-Wechsel; [MDN popstate](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event) beschreibt Verlaufstraversierung einschließlich Vorwärts; [MDN MediaQueryList change](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event) beschreibt Breakpoint-Wechsel. Die Browserprüfung muss die Kombination und asynchrone Reihenfolge absichern. Keine pauschale Aussage über nicht getestete Browser.

Ergänzend am 06.10.2026: Die MDN-Dokumentation zu `popstate` beschreibt das Ereignis vor Abschluss der nativen Zustandswiederherstellung und einen Timer mit Verzögerung 0 für Verarbeitung nach diesem Schritt. Daraus folgt hier die technische Entscheidung, die zweite breite Traversierung erst anschließend anzufordern. Die automatisierten Reihenfolge-Tests sichern diese Entscheidung ab; die manuelle Abnahme ist erfolgt.

## Umsetzung und Nachweise

### Abdeckungsabgleich vor der abschließenden Pflichtsuite

Geprüft am 06.10.2026. Die Fälle sind in vorhandenen Testmethoden als benannte Datenszenarien gebündelt; keine fachliche Anforderung bleibt ohne Testzuordnung.

| Fall der Spec | Automatisierter Testfall |
| --- | --- |
| Schmale Themen- und Hilfeansicht → Liste → vorherige Website | `e2e/app/browser-back.spec.ts`: `browser back returns narrow topics and help…`, Szenarien `narrow topic`, `narrow help`. |
| Breites Thema wird schmal, einschließlich erhaltenem Thema nach Listenrückkehr | Derselbe Test: `wide topic resized narrow`, `retained wide topic resized narrow after returning to the list`. |
| Hilfe über beide Größenwechselrichtungen | Derselbe Test: `help resized wide and narrow`; breiter Rückweg zusätzlich im Test `browser back leaves wide topics and help immediately…`: `narrow help resized wide`. |
| Durchgehend breites Thema / breite Hilfe → vorherige Website mit einer Back-Aktion | `browser back leaves wide topics and help immediately…`: `wide topic`, `initial wide help`, zusätzlich `wide topic with native history back` ohne Playwright-Navigationsaufruf. |
| Schmal geöffnetes Thema wird breit → vorherige Website | Derselbe Test: `narrow topic resized wide`, zusätzlich `retained topic widened after browser back to the list`. |
| Breakpoint unter 800 px | Schmaler Rückweg: `topic below breakpoint` bei 799 px; breiter Rückweg: `topic at breakpoint` bei 800 px. |
| Fragen 1 bis 5 und Ergebnis → Liste, bei beiden Breiten; kein Rückweg zur vorigen Frage, neuer Check ohne alte Antworten | `browser back cancels questions and results…`: 0 bis 5 beantwortete Fragen bei 390 und 1280 px; Overlay beendet, erneuter Start zeigt Frage 1. |
| Initiale Liste und Liste nach interner Rückkehr → vorherige Website | `list back leaves after repeated returns…`: initiale Liste bei beiden Breiten; zusätzlich zweite Back-Aktion in Themen-/Hilfe- und Checktests. |
| Wiederholung, sichtbarer Rückkehrbutton, Reload, natives Vorwärts ohne eigene Wiederherstellung | `list back leaves after repeated returns…`: Thema, Hilfe und Check × `button`, `reload`, `forward`, jeweils zweimal; Liste sichtbar, Check beendet und History-Länge bei Vorwärts unverändert. |
| Schnellfilter, URL mit Query/Fragment und schmale Scrollposition bleiben erhalten | Themen-/Hilfe-Rückwegtest; Schnellfilter zusätzlich im Fragen-/Ergebnistest. |
| Lernpfadfilter und Scrollposition bei internem Zurück aus Thema und Check | `e2e/verticals/topics/topic-responsive-view.spec.ts`: bestehende mobile und breite Rückkehrtests, jeweils um `browser back` neben dem Rückkehrbutton ergänzt. |
| Laufende breite Navigation wird nicht durch spätes Rendern unterbrochen; Wiederbenutzung nach Browser-Rückkehr | `tests/verticals/topics/useBrowserBack.test.ts`: `does not recreate the detail entry…`, einschließlich `pageshow`. |
| Zweite breite Traversierung beginnt erst nach Abschluss des ersten popstate | Derselbe Unit-Testblock: `finishes the wide popstate before traversing to the previous website`. |

### TDD und Prüfungen

| Schritt | Ergebnis |
| --- | --- |
| RED: Themen und Hilfe | Browser-E2E (Desktop): 1 bestanden, 1 fehlgeschlagen, Exitcode 1; nach Zurück aus schmalem Thema fehlt die Themenliste, weil die vorherige Website geöffnet wird. Vorherigen Testfixture-Encodingfehler vor dem fachlichen RED korrigiert. |
| GREEN / REFACTOR: Themen und Hilfe | Gezielte Browser-E2E: 2 bestanden, 4,34 s, Exitcode 0. Ein technischer Hook hält höchstens einen Detail-Verlaufseintrag; bei Zurück entscheidet die dann aktuelle Breite. Ein zusätzlicher RED nach erster Implementierung zeigte die Race zwischen CSS-Größenwechsel und MediaQuery-Ereignis; deshalb wird die Breite erst beim Zurück ausgewertet. Breite Ansichten überspringen den technischen Eintrag mit derselben Nutzeraktion. |
| RED: Lernchecks und Ergebnis | Gezielte Browser-E2E: 1 fehlgeschlagen, 6,83 s, Exitcode 1; nach Browser-Zurück aus Frage 1 ist die Themenliste nicht zugänglich, weil der Lerncheck aktiv bleibt. |
| GREEN / REFACTOR: Lernchecks und Ergebnis | App stellt den vorhandenen Exit-Rückruf über den Themenvertrag bereit; Browser-Zurück setzt zusätzlich die schmale Ansicht auf Liste. Gezielte Browser-E2E: 3 bestanden, 8,01 s, Exitcode 0; Fragen 1 und 2, Ergebnis und neuer Start bei beiden Breiten. Zusätzliche Prüfung von manueller Rückkehr, Wiederholungen, Reload und nativem Vorwärts: 4 bestanden, 14,89 s, Exitcode 0. URL samt Query/Fragment, Schnellfilter und schmale Listenposition bleiben erhalten. |
| RED / GREEN: Scroll-Rückkehr | Vollständige E2E zeigte 72 bestandene und 2 fehlgeschlagene Prüfungen: bestehender mobiler Scrolltest erhielt 0 statt 151 nach dem Rückkehrbutton, nach erster Korrektur 151 statt 184 nach Check-Abbruch. Den bestehenden Test wiederverwendet: Scrollposition vor Checkstart erfassen und nach Abschluss der asynchronen History-Rückkehr erneut herstellen. Betroffene E2E danach 14 bestanden, 16,24 s, Exitcode 0. |
| RED: Erhaltenes breites Thema erneut verkleinern | Bestehenden Browser-Rückwegtest um Rückkehr zur schmalen Liste → breite Ansicht mit erhaltenem Thema → erneut schmal → Back ergänzt. 1 fehlgeschlagen, 12,57 s, Exitcode 1: Nach Back fehlt die Themenliste, die vorherige Website ist geöffnet. |
| GREEN / REFACTOR: Erhaltenes breites Thema | `topics` gleicht beim Eintritt in die breite Ansicht die sichtbare erhaltene Themenauswahl mit dem mobilen Ansichtsstatus ab. Der vorhandene Rückweg bleibt dadurch beim erneuten Verkleinern aktiv. Bestehenden E2E-Test erweitert; die zwischenzeitlich breite Ansicht wird vor dem erneuten Verkleinern einen Render-Frame lang dargestellt, danach die schmale Themenansicht und beide Back-Schritte geprüft. Betroffene Browser-E2E: 14 bestanden, 24,46 s, Exitcode 0. Keine neue Abhängigkeit und keine zusätzliche Änderung in `app`. |
| RED: Breiter Rückweg während Ansichtsabgleich | Den breiten Browser-E2E um ein nach Rückkehr zur Liste wieder verbreitertes, erhaltenes Thema ergänzt; dieser Ablauf bestand bereits. Zusätzlich unabhängigen Hook-Test für einen verzögerten Ansichtsabgleich während der bereits gestarteten Navigation angelegt: 1 fehlgeschlagen, 1,72 s, Exitcode 1; nach breitem Back wird ein zweiter `pushState` ausgeführt. Dieser darf die ausstehende Navigation nicht durch einen neuen Eintrag unterbrechen. |
| RED: Abschluss der breiten History-Traversierung | Zusätzlicher Hook-Test für die Ereignisreihenfolge: 1 fehlgeschlagen, 1 übersprungen, 1,97 s, Exitcode 1; die zweite Traversierung beginnt bereits innerhalb des ersten `popstate`. Die E2E allein reproduzierte den gemeldeten Stillstand nicht; die Reihenfolge und ein späteres Rendern werden deshalb separat abgesichert. |
| GREEN / REFACTOR: Breiter Rückweg | Der Hook markiert die ausstehende Navigation, unterbindet neue Verlaufseinträge bis zur Browser-Rückkehr und verschiebt die zweite Traversierung in den nächsten Event-Loop-Durchlauf. Die breite Ansicht behält einen technischen Eintrag, um auch unmittelbar nach Verkleinerung abzusichern. Unit: 2 bestanden, 1,98 s, Exitcode 0. Betroffene E2E einschließlich aller Fragen, Grenzbreiten, nativem History-Back und Filter-/Scrollrückkehr: 14 bestanden, 32,16 s, Exitcode 0; anschließend initialen Listenrückweg bei beiden Breiten für die abschließende Suite ergänzt. |
| Abschließende Pflichtsuite nach Abdeckungsabgleich | Aktueller Stand einschließlich der parallel ergänzten Katalogquellen: `npm run check` grün, 37,05 s, Exitcode 0: 130 Unit-/Komponententests, 32 Inhaltsprüfungen, 11 Runner- und 4 Vertikalzähltests sowie Format, Lint, Typen, Architektur, Lizenzen und Produktionsbuild. Vollständige E2E: 74 bestanden, 231,22 s, Exitcode 0 (Desktop- und Mobil-Chromium). Alle Testfälle waren erfolgreich; beim Abschluss hing der eigene Vite-Testserver. Nach Prüfung der Prozesszuordnung wurde ausschließlich dieser beendet, anschließend lieferte der Runner regulär Exitcode 0. Keine Testwiederholung. Audit am 06.10.2026 unverändert maßgeblich, da keine Abhängigkeit geändert wurde: 1 High-Schwachstelle in `source-map-js`, Exitcode 1, [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q). Die komplette Pflichtsuite ist deshalb noch nicht grün; das Sicherheitsupdate muss gemäß dauerhaften Vorgaben separat erfolgen und steht im Backlog. |
| Lokaler Browsernachweis | Playwright-CLI, sichtbarer Chromium unter `http://127.0.0.1:4173/`: von der vorherigen lokalen URL `/manual-previous.html` zur App; bei 390 px Thema öffnen, Browser-Zurück zeigt Liste, erneut Zurück erreicht die vorherige URL. Frage 1 eines Lernchecks mit Browser-Zurück beendet, Liste wieder zugänglich. Breites Thema auf 390 px verkleinert: Zurück zeigt Liste; schmale Themenansicht auf 1280 px vergrößert: derselbe Zurück-Klick erreicht die vorherige URL. Alle Abläufe erfolgreich. |
| Lokaler Browsernachweis: Regression | Playwright-CLI, sichtbarer Chromium: Thema bei 390 px öffnen und per Browser-Back zur Liste zurückkehren; auf 1280 px verbreitern, das erhaltene Thema ist rechts sichtbar; erneut auf 390 px verkleinern und Browser-Back auslösen. Ergebnis: Themenliste angezeigt, URL bleibt in der App; der nächste Browser-Back erreicht `/manual-previous.html`. Erfolgreich. |
| Lokaler Browsernachweis unmittelbar vor Commit | Playwright-CLI, sichtbarer Chromium bei 1280 × 740 px: von `about:blank` zur lokalen App, Thema links geöffnet, einmal Browser-Zurück; die vorherige Seite `about:blank` erreicht. Erfolgreich. |
| Manuelle Prüfung des Nutzers | Erfolgt. |
