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

| Schritt | Geplanter Nachweis | Stand |
| --- | --- | --- |
| RED → GREEN → REFACTOR: Einzelpfadfilter | Zuerst scheitert ein Komponententest am fehlenden Wechsel zum Einzelpfad. Danach werden Pfadnamen bedienbar und die Filterzustände sowie Detailregeln grün geprüft. Anschließend wird bei grünen Tests überarbeitet. | Ausstehend |
| RED → GREEN → REFACTOR: Scrollen | Zuerst scheitert ein Browser-Test an der fehlenden vertikalen Scrollregel. Danach bestehen die Fälle für kurze und lange Pfade. Anschließend wird bei grünen Tests überarbeitet. | Ausstehend |
| RED → GREEN → REFACTOR: Katalogkonsistenz | Zuerst scheitert ein Inhaltstest an einem leeren Pfad. Danach weist die Inhaltsprüfung leere Pfade zurück. Anschließend wird bei grünen Tests überarbeitet. | Ausstehend |
| Pflichtsuite | Nach allen Teil-Features laufen die für die Änderung geltenden Prüfungen vollständig grün. | Ausstehend |
| Lokale Browserabnahme | Browser, geprüfter Ablauf und Ergebnis werden nach der Implementierung hier festgehalten. | Ausstehend |
| Manuelle Nutzerprüfung | Die ausdrückliche Bestätigung des Nutzers wird vor einem Commit abgewartet. | Ausstehend |
