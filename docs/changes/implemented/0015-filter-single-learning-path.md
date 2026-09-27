## Filtern nach einzelnem Lernpfad

Wenn ein Filter nach Lernpfaden aktiviert ist, werden die einzelnen Lernpfade danach nicht nur als Text dargestellt, sondern sie sind
klickbar.

- Klickt man auf einen Lernpfad, wird die Themenliste nur noch auf diesen einen Lernpfad gefiltert.
    - Das System scrollt weich vertikal, sodass nach Möglichkeit alle Themen des Lernpfads im sichtbaren Bereich liegen. Sind die Themen
      zusammen höher als der sichtbare Bereich, scrollt es zum ersten Thema des Lernpfads.
- Ein erneuter Klick auf diesen Lernpfad bewirkt keine Änderung der Filterung.

Wie bisher: Werden unten Themendetails angezeigt und ändert sich die Filterung so, dass das unten angezeigte Thema nicht mehr in der Liste
enthalten ist, wird das Thema ausgeblendet. (Es wird auch später nicht mehr automatisch eingeblendet.)

Das System stellt intern sicher, dass jeder (auch neue) Lernpfad mindestens ein Thema enthält.

Abgrenzung:

- Die Filterung auf den Icons ganz links in der Themenzeile macht genau dasselbe wie bisher auch: Ein Klick filtert auf alle Lernpfade,
  zu denen das angeklickte Thema gehört. Das gilt auch, wenn zuvor ein einzelner Lernpfad ausgewählt wurde. Erst ein weiterer Klick auf
  dasselbe Icon hebt die Filterung auf und zeigt wieder alle Themen.

Vertikale: Themen

## Risiken und Abnahme

- **Filterzustand:** Ein Klick auf einen angezeigten Pfadnamen zeigt nur dessen Themen in der bestehenden Themenreihenfolge. Ein weiterer
  Klick auf denselben Namen lässt die Auswahl unverändert. Das linke Icon zeigt bei seinem ersten Klick alle Pfade des Themas, auch aus der
  Einzelpfadansicht heraus; erst sein zweiter Klick hebt den Filter auf.
- **Themendetails:** Wechselt die Auswahl zu einem Pfad ohne das geöffnete Thema, verschwinden die Details. Beim späteren Aufheben des
  Filters erscheinen sie nicht von selbst wieder. Bleibt das Thema sichtbar, bleiben auch seine Details sichtbar.
- **Scrollen und Bedienung:** Nach der Pfadauswahl wird vertikal weich gescrollt, sodass alle Themen sichtbar sind, sofern ihre gemeinsame
  Höhe in den sichtbaren Bereich passt. Andernfalls wird das erste Thema sichtbar. Tastaturbedienung und erkennbarer Fokus bleiben erhalten.
- **Katalogkonsistenz:** Jeder Lernpfad enthält mindestens eine vorhandene Themen-ID; ein leerer Pfad wird bei der Inhaltsprüfung erkannt.
  Das Thema ohne Lernpfad bleibt in der vollständigen Liste sichtbar.
- **Browserabnahme:** Einzelpfadwahl, wiederholter Klick, Rückweg über das Icon, Scrollen bei kurzen und langen Pfaden sowie die
  Detailregeln werden im Browser geprüft. Keine neue Abhängigkeit ist vorgesehen.

## Umsetzung und Nachweise

| Schritt | Nachweis | Stand |
| --- | --- | --- |
| RED: Einzelpfadfilter | `npx vitest run tests/verticals/topics/TopicBrowser.test.tsx -t "selects one path"` schlug fachlich korrekt fehl: Ein Button „Erster Pfad“ fehlte. | Erbracht |
| GREEN: Einzelpfadfilter | Pfadnamen sind Buttons. Der Test für Einzelpfad, wiederholten Klick, Icon-Rückweg und ausgeblendete Details wurde grün. Ein weiterer Test prüft den Erhalt sichtbarer Details. | Erbracht |
| REFACTOR: Einzelpfadfilter | Vorhandene Textprüfungen an die neue Buttonstruktur angepasst und den vollständigen Komponententest erneut ausgeführt: 15 Tests grün. | Erbracht |
| RED: Scrollen | Der neue Chromium-Browser-Test für einen hohen Pfad scheiterte mit dem ersten Thema bei −58,125 Pixel außerhalb des Fensters. Ein ergänzter Fokusnachweis scheiterte, weil nach dem Scrollen kein sichtbares Thema fokussiert war. | Erbracht |
| GREEN: Scrollen | Vertikales Scrollen zeigt bei kurzen Pfaden alle Themen und bei hohen Pfaden das erste Thema; dieses erhält den Fokus. Beide Fälle bestehen im Desktop- und Mobilbrowser. | Erbracht |
| REFACTOR: Scrollen | Scroll- und Fokuscodes formatiert; die vorhandene Icon-Ankerung bleibt erhalten. Browser-Suite nach der Überarbeitung grün. | Erbracht |
| RED: Katalogkonsistenz | `npx vitest run tests/verticals/topics/topics.test.ts -t "rejects empty learning paths"` schlug fehl: Die Validierung meldete für einen leeren Pfad keine Fehler. | Erbracht |
| GREEN: Katalogkonsistenz | Leere Pfade und unbekannte Themen-IDs werden gemeldet; `npm run validate:content` grün (10 Tests). | Erbracht |
| REFACTOR: Katalogkonsistenz | Keine weitere Umstrukturierung nötig; die vollständige Inhaltssuite nach GREEN erneut grün. | Erbracht |
| Pflichtsuite | `npm run check` grün: Format, Lint, Typen, 57 Tests, Inhalts- und Architekturprüfung, Lizenzen und Build. `npm run test:e2e` grün: 30 Tests auf Desktop- und Mobil-Chromium. Keine neue Abhängigkeit. | Erbracht |
| Lokale Browserabnahme | In Chromium Desktop unter `http://127.0.0.1:4173/` das Icon neben „Mensch und KI“ gewählt und danach „Grundlagen für KI-gestützte Softwareentwicklung“ angeklickt: Nur die sechs Pfadthemen und der gewählte Pfadname waren sichtbar. Die automatisierten Browserabläufe prüften außerdem lange Pfade, erneuten Pfadklick, Icon-Rückweg und Themendetails. | Erbracht |
| Manuelle Nutzerprüfung | Der Nutzer hat die Änderung selbst geprüft und das Ergebnis ausdrücklich bestätigt; der Commit ist freigegeben. | Erbracht |
