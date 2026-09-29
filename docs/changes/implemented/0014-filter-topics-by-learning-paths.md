## Themenliste auf die Lernpfade eines einzelnen Themas filtern

Die drei bereits bestehenden Lernpfade **Grundlagen für KI-gestützte Softwareentwicklung**, **Änderungen gestalten und absichern** und **Sicher mit Coding-Agenten arbeiten** werden jetzt mit ihren Themenzuordnungen als Daten der Vertikale Themen erfasst. Der bisherige Name „Grundlagenpfad“ wird dabei durch den inhaltlich klareren Namen ersetzt. Maßgeblich sind die Themenlisten in der späteren Story „Lernpfade in Anzeige berücksichtigen“. Ein Thema darf mehreren Pfaden angehören. Die beiden weiteren geplanten Pfade werden erst mit ihren jeweiligen Themen-Stories ergänzt. Die Filterlogik liest die Zuordnungen aus den Daten und hängt nicht an festen Themen-IDs.

Zusätzlich wird als bewusst keinem Lernpfad zugeordnetes Beispiel ein neues Thema in den öffentlichen Katalog und die gemeinsame Themenliste aufgenommen:

- **Titel:** Git-Commits klein und nachvollziehbar halten
- **Dauerhafte ID:** `focused-git-commits`
- **Problem:** Wenn unabhängige Änderungen in einem Commit landen, ist schwerer zu erkennen und zu prüfen, was aus welchem Grund geändert wurde.
- **Kernkonzept:** Ein Commit bündelt eine logisch zusammengehörige Änderung mit einer aussagekräftigen Nachricht. Über die Staging Area lassen sich aus dem Arbeitsstand gezielt Dateien oder Teile davon für diesen Commit auswählen.
- **Anwendung in der Java- und Webentwicklung:** Bei Änderungen an einem Spring-Endpunkt werden eine fachliche API-Anpassung und davon unabhängige Formatkorrekturen getrennt festgehalten. Vor jedem Commit wird geprüft, welche Änderungen tatsächlich gestagt sind.
- **Grenzen des Konzepts:** Ein kleiner Commit ist nicht automatisch korrekt oder lauffähig. Zusammengehörige Änderungen dürfen mehrere Dateien umfassen; eine starre Dateizahl ist kein Qualitätsmaßstab.
- **Quellen:** [Pro Git: Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging) (Primärquelle, EN; gezielte Auswahl und logisch getrennte Änderungen) und [Git: git-commit Documentation](https://git-scm.com/docs/git-commit) (Primärquelle, EN; gespeicherter Stand und Commit-Nachricht). Originalseiten am 27.09.2026 geprüft. Pro Git gibt eine Vorgehensweise der Autoren wieder; die Git-Referenz beschreibt das Werkzeugverhalten. Die Git-Projektregel [SubmittingPatches](https://git-scm.com/docs/SubmittingPatches) wurde geprüft, aber wegen ihres ausdrücklich projektspezifischen Geltungsbereichs nicht als allgemeine Handlungsregel übernommen.
- **Redaktionelle Metadaten bei Umsetzung:** Veröffentlichung und fachliche Prüfung am tatsächlichen Integrationstag, Wiedervorlage sechs Monate später, Status `active`.

Für dieses Thema gibt es in dieser Story noch keinen Fragenpool. Der Lerncheck folgt in einer eigenen späteren Story.

In den Detailansichten aller bestehenden und neuen Themen werden die Abschnittsüberschriften durchgängig ersetzt: „Java-/Web-Einsatz“ durch „Anwendung in der Java- und Webentwicklung“ und „Wichtige Grenze“ durch „Grenzen des Konzepts“. Die fachlichen Inhalte dieser Abschnitte bleiben unverändert; die einheitlichen Überschriften werden in Komponenten- und Browserprüfungen berücksichtigt.

In der Themenliste:
Links vor jedem Thema X, DAS ZU MINDESTENS 1 LERNPFAD GEHÖRT, wird ein Icon angezeigt.

- Per Klick auf das Icon wird die Themenliste gefiltert:
    - Die Liste zeigt jetzt nur noch Themen, die zu einem der Lernpfade von Thema X gehören.
    - Die GUI wird - falls nötig - so horizontal gescrollt, dass diese Themenzeile für den Nutzer weiterhin in der GUI sichtbar ist.
        - Tatsächlich soll die Listenzeile in der Anzeige nach Möglichkeit horizontal (und vertikal) an derselben Stelle bleiben. Es wird
          allerdings niemals Leerraum vor der Liste oder innerhalb der Liste eingefügt (sondern die Liste schnurrt horizontal zusammen).
- Ein erneuter Klick AUF DASSELBE ICON hebt diese Filterung wieder auf.
- Ein Klick AUF EIN ICON EINES ANDEREN THEMAS Y hingegen filtert die Themenliste nach den Lernpfaden von Y (und nicht mehr nach den
  Lernpfaden von X).
- Gehört das angeklickte Thema zu mehreren Lernpfaden, zeigt die Liste die Vereinigung ihrer Themen ohne Dubletten in der bisherigen Reihenfolge.
- Immer wenn die Liste nach einem oder mehreren Dingen Lernpfaden gefiltert ist, erscheint direkt unter der Liste eine Anzeige: "Themen
  gefiltert nach Lernpfaden: <Namen der Lernpfade>"
    - Die Namen der Lernpfade sind nach ihrer Themenfolge sortiert: Zuerst werden die Positionen der jeweils ersten Themen in der ungefilterten Themenliste verglichen. Sind sie gleich, werden die zweiten Themen verglichen, dann die dritten usw. Der Pfad mit dem früheren abweichenden Thema steht zuerst. Ist eine Themenfolge vollständig am Anfang der anderen enthalten, steht der kürzere Pfad zuerst. Die Regel gilt ebenso für später ergänzte oder geänderte Pfade; es gibt keine fest hinterlegten „Basic“- oder „Advanced“-Gruppen.

Hat ein Thema keinen Lernpfad, wird das Icon nicht angezeigt.

Bei einem Filterwechsel wird eine bereits geöffnete Themen-Detailansicht nur dann weiter angezeigt, wenn ihr Thema noch in der gefilterten Liste steht. Andernfalls wird die Detailansicht geschlossen. Auch wenn das Thema durch einen späteren Filterwechsel oder das Aufheben des Filters wieder in der Liste erscheint, öffnet sich seine Detailansicht nicht von selbst. Bei erneutem Anklicken des Themas erscheint sie wieder.

Sollten Themen später ihre Lernpfad-Zuordnungen wechseln, funktioniert die ganze Logik ganz genau so! Die Logik hängt nicht an den konkreten
Themen! Der Test sollte nicht unnötig brüchig sein.

Das Icon wird bei der Entwicklung KI-generiert (z.B. SVG, falls wir das schon so haben.). Kurzer Vermerk in einem neuen .md: Die Icons, die
wir verwenden, generieren wir selbst, Technologie nennen.

- Das Icon muss mit dem Themen-Listeneintrag ausgerichtet sein (horizontal mittig zum Eintrag).
- Kein sichtbarer Button, sondern nur ein Icon, aber mit schlichter Klick-Visualisierung
- Das Icon muss niedrig genug sein, dass die Listenzeilen NICHT horizontal auseinandergeschoben werden.

Abgrenzung:

- Die Reihenfolge der 16 vorhandenen Themen wird als Projektion der gemeinsam geprüften 26er-Reihenfolge festgelegt. Dabei bleiben die Themen innerhalb aller fünf im Story-Backlog vorgesehenen Lernpfade jeweils in ihrer dort festgelegten Folge. Themen des Grundlagenpfads stehen so früh wie unter diesen Folgen möglich. Die beiden späteren Pfade und ihre geplanten Themen werden jetzt nicht in die Katalogdaten übernommen.
- Konkrete Reihenfolge der vorhandenen IDs: `human-ai-responsibility`, `problem-understanding-and-change-boundaries`, `agents-md`, `ears-requirements`, `coding-agent-context-and-trust-boundaries`, `protect-secrets-and-sensitive-data-with-ai`, `research-plan-tasks`, `spec-driven-development-openspec`, `module-boundaries-and-public-interfaces`, `tdd-for-domain-behavior`, `archunit-for-java-architecture`, `playwright-for-web-flows`, `web-xss-and-safe-dom`, `dependency-security-assessment`, `review-and-accept-ai-generated-changes`, `focused-git-commits`.

Vertikalen: Themen

## Risiken und Abnahme

- **Zuordnungen und Reihenfolge:** Die 16 Themen stehen in der oben festgelegten Reihenfolge. Die Zuordnung zu den drei vorhandenen Lernpfaden entspricht den Themenfolgen in der späteren Backlog-Story „Lernpfade in Anzeige berücksichtigen“; auch die Reihenfolge der gemeinsamen Themen in den zwei geplanten Pfaden bleibt gewahrt. Der Katalog enthält 16 eindeutige Themen-IDs; `focused-git-commits` gehört zu keinem Pfad und hat kein Filter-Icon. Es werden keine geplanten Themen oder Pfade hinzugefügt.
- **Künftige Katalogänderungen:** Filterung und Namenssortierung werden mit veränderten Zuordnungen und Themenpositionen geprüft, damit sie keine konkreten Themen-IDs oder fest codierte Pfadreihenfolgen voraussetzen.
- **Bedienung:** Komponententests prüfen Aktivieren, Aufheben und Wechseln des Filters, Vereinigung ohne Dubletten, unveränderte Themenreihenfolge, die sortierte Pfadanzeige sowie das bedingte Schließen und den Erhalt einer geöffneten Detailansicht. Browserprüfungen decken Tastaturbedienung, sichtbaren Fokus, Icon-Höhe sowie horizontale und vertikale Position der angeklickten Zeile ab.
- **Inhalte:** Das neue Thema erfüllt die [redaktionelle Richtlinie](../../content/editorial-policy.md) und die [Quellenregeln](../../content/source-selection.md). Quellen, fachliche Aussagen und Metadaten werden vor der Integration erneut geprüft und in dieser Spec nachgewiesen. Es erhält in dieser Story keine Lerncheck-Fragen. Die beiden neuen Abschnittsüberschriften erscheinen bei bestehenden und neuen Themen.
- **Änderungsgrenze:** Die fachliche Änderung bleibt in der Vertikale Themen. Falls nötig, dürfen `src/app` für die Komposition und `src/shared` für stabile IDs, Datentypen oder Validierung angepasst werden; sie zählen nicht als weitere fachliche Vertikalen. Filter- oder Anzeigelogik gehört weder nach `src/app` noch nach `src/shared`. Bestehende Lernchecks und gespeicherter Lernfortschritt bleiben nutzbar. Neue Abhängigkeiten sind nicht vorgesehen.

## Umsetzung und Nachweise

Für jedes Teil-Feature werden der fachlich begründete RED-Fehler, die grüne Prüfung und das REFACTOR-Ergebnis hier nach der Durchführung eingetragen.

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Pfadzuordnungen und unzugeordnetes Thema | Katalogtest verlangte 16 eindeutige IDs, die drei konkreten Pfadfolgen und ein unzugeordnetes Thema; `npm test -- --run tests/verticals/topics/topics.test.ts` scheiterte an fehlendem Thema und `paths` (2 fachliche Fehler). | Derselbe Test wurde nach Ergänzung der Katalogdaten grün (9/9). | Daten und Tests formatiert; Katalogtest blieb grün. |
| Themenfilter, Pfadanzeige und Positionsverhalten | Komponententest verlangte 15 Filter-Icons sowie Aktivieren, Wechseln, Aufheben, Vereinigung, Pfadnamenssortierung und zunächst den Erhalt einer offenen Detailansicht; `npm test -- --run tests/verticals/topics/TopicBrowser.test.tsx` scheiterte an fehlenden Filter-Buttons (2 fachliche Fehler einschließlich Katalogzählung). Ein zusätzlicher Test mit gleicher Anfangsfolge deckte später einen fachlichen Sortierfehler auf (kürzerer Pfad stand zuletzt). Das ursprüngliche Detailverhalten wurde später durch die unten dokumentierte Änderung ersetzt. | Der Komponententest wurde mit datenbasierter Filterung, korrigiertem Folge-Vergleich und Positionsausgleich grün (12/12). | Pfadfolge wird aus den aktuellen Daten und Listenpositionen verglichen; Browserprüfung hält auch eine spätere angeklickte Zeile im Sichtbereich. Tests blieben grün. |
| Icon und einheitliche Abschnittsüberschriften | Nach Umstellung der Erwartungen scheiterten 4 Komponententests an den alten Überschriften. Die neue Chromium-Prüfung scheiterte ebenfalls an der fehlenden neuen Überschrift. | Inline-SVG mit Tastaturfokus, Klickzustand und neuen Überschriften: Komponententest 11/11, gezielte Chromium-Prüfung grün. | Das Icon wurde in den bisherigen Listenrand gesetzt, damit auf Mobilgeräten keine zusätzliche Zeilenhöhe durch Textumbruch entsteht. Nach dem Fix waren alle Browserprüfungen grün. |
| Aussagekräftiger Name des Grundlagenpfads | Der Katalogtest erwartete „Grundlagen für KI-gestützte Softwareentwicklung“ und scheiterte am bisherigen Namen „Grundlagenpfad“ (1 fachlicher Fehler). | Nach der Umbenennung wurde der Katalogtest grün (9/9); ein Komponententest prüft den neuen Namen in der Filteranzeige. | Der spätere Story-Backlog wurde auf denselben Namen abgestimmt; alte archivierte Specs blieben unverändert. Pflichtsuite erneut grün. |
| Detailansicht bei Filterwechsel | Nach Anpassung des Komponententests an die neue Vorgabe scheiterte `npm test -- --run tests/verticals/topics/TopicBrowser.test.tsx`, weil die Detailansicht eines ausgefilterten Themas weiterhin sichtbar war (1 fachlicher Fehler). | Nach dem bedingten Schließen beim Filterwechsel waren 13/13 Komponententests grün. Der Test prüft auch, dass sichtbare Details erhalten bleiben und geschlossene Details nach Aufheben des Filters nicht von selbst wiederkehren. | Der Filterwechsel verwendet die bestehenden Pfadzuordnungen direkt; keine zusätzliche abgeleitete Zustandskopie. Gezielt in Desktop- und Mobile-Chromium geprüft. |
| Reihenfolge mit möglichst frühen Grundlagen-Themen | Der Katalogtest erwartete die oben festgelegte Projektion der fünf Backlog-Pfade; `npm test -- --run tests/verticals/topics/topics.test.ts` scheiterte an der bisherigen Reihenfolge (1 fachlicher Fehler: EARS, Research/Spec und Modulgrenzen standen anders). | Nach dem Umordnen der 16 vorhandenen Themen war der Katalogtest grün (9/9). Die Grundlagen-Themen stehen auf Position 1–4 und 7–8; die Reihenfolge innerhalb aller fünf Backlog-Pfade bleibt erhalten. | Ausschließlich vorhandene Themenblöcke wurden verschoben; Inhalte, drei vorhandene Pfadzuordnungen und die Anzahl von 16 Themen blieben unverändert. Pflichtsuite erneut grün. |

Quellenprüfung am 27.09.2026: [Pro Git: Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging) ist erreichbar und belegt das gezielte Staging von Dateien und Dateiteilen sowie die Empfehlung logisch getrennter, gut prüfbarer Commits. Es ist eine Anleitung der Autoren, keine technische Garantie für Korrektheit. [Git: git-commit Documentation](https://git-scm.com/docs/git-commit) ist erreichbar und belegt das Commit-Verhalten und die Nachricht. Die Aussage, dass kleine Commits nicht automatisch korrekt oder lauffähig sind, ist eine sachliche Grenze und wird nicht als wörtliche Git-Regel ausgegeben. Die projektspezifische Git-Regel `SubmittingPatches` wurde bewusst nicht als allgemeine Regel verwendet. Keine ungeklärte fachliche Aussage; keine neue Abhängigkeit.

Pflichtsuite (`npm run check`, `npm run test:e2e`, `npm audit --audit-level=high`): am 27.09.2026 nach der Neusortierung erneut grün; `npm run check` mit 54 Unit-/Komponententests, Architektur-, Lizenz- und Build-Prüfung; Browser-Suite mit 26 Prüfungen in Desktop- und Mobile-Chromium; Audit mit 0 Schwachstellen. Eine mobile Layoutregression der Lerncheck-Schaltfläche wurde bei der ersten Browser-Suite gefunden, korrigiert und danach erneut grün geprüft. Lokaler Browsernachweis: Playwright mit Desktop- und Mobile-Chromium; Filter per Tastatur aktiviert, Fokus und gedrückten Zustand geprüft, sichtbare Zeilenposition bei Filterwechsel sowie Höhe des Icons geprüft, Filter aufgehoben und beide neuen Überschriften in der Detailansicht geprüft; nach der letzten Verhaltensänderung zusätzlich das bedingte Schließen und Ausbleiben automatischer Wiederöffnung geprüft. Der Nutzer hat die lokale Anwendung anschließend selbst geprüft, das Ergebnis positiv bestätigt und den Commit freigegeben.
