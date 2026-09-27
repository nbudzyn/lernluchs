## Themenliste auf die Lernpfade eines einzelnen Themas filtern

Die drei bereits bestehenden Lernpfade **Grundlagenpfad**, **Änderungen gestalten und absichern** und **Sicher mit Coding-Agenten arbeiten** werden jetzt mit ihren Themenzuordnungen als Daten der Vertikale Themen erfasst. Maßgeblich sind die Themenlisten in der späteren Story „Lernpfade in Anzeige berücksichtigen“. Ein Thema darf mehreren Pfaden angehören. Die beiden weiteren geplanten Pfade werden erst mit ihren jeweiligen Themen-Stories ergänzt. Die Filterlogik liest die Zuordnungen aus den Daten und hängt nicht an festen Themen-IDs.

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

Eine bereits geöffnete Themen-Detailansicht bleibt bei einem Filterwechsel sichtbar, auch wenn ihr Thema nicht mehr in der gefilterten Liste steht. Der Filter ändert nur die Liste, nicht die aktuell geöffnete Detailansicht.

Sollten Themen später ihre Lernpfad-Zuordnungen wechseln, funktioniert die ganze Logik ganz genau so! Die Logik hängt nicht an den konkreten
Themen! Der Test sollte nicht unnötig brüchig sein.

Das Icon wird bei der Entwicklung KI-generiert (z.B. SVG, falls wir das schon so haben.). Kurzer Vermerk in einem neuen .md: Die Icons, die
wir verwenden, generieren wir selbst, Technologie nennen.

- Das Icon muss mit dem Themen-Listeneintrag ausgerichtet sein (horizontal mittig zum Eintrag).
- Kein sichtbarer Button, sondern nur ein Icon, aber mit schlichter Klick-Visualisierung
- Das Icon muss niedrig genug sein, dass die Listenzeilen NICHT horizontal auseinandergeschoben werden.

Abgrenzung:

- Die vorhandenen Themen und ihre relative Reihenfolge werden nicht verändert. Das neue, unzugeordnete Thema wird passend in die gemeinsame Liste eingefügt.

Vertikalen: Themen

## Risiken und Abnahme

- **Zuordnungen und Reihenfolge:** Die 15 bestehenden Themen behalten ihre relative Reihenfolge. Ihre Zuordnung zu den drei vorhandenen Lernpfaden entspricht den Themenfolgen in der späteren Backlog-Story „Lernpfade in Anzeige berücksichtigen“. Der Katalog enthält danach 16 eindeutige Themen-IDs; `focused-git-commits` gehört zu keinem Pfad und hat kein Filter-Icon.
- **Künftige Katalogänderungen:** Filterung und Namenssortierung werden mit veränderten Zuordnungen und Themenpositionen geprüft, damit sie keine konkreten Themen-IDs oder fest codierte Pfadreihenfolgen voraussetzen.
- **Bedienung:** Komponententests prüfen Aktivieren, Aufheben und Wechseln des Filters, Vereinigung ohne Dubletten, unveränderte Themenreihenfolge, die sortierte Pfadanzeige und den Erhalt einer geöffneten Detailansicht. Browserprüfungen decken Tastaturbedienung, sichtbaren Fokus, Icon-Höhe sowie horizontale und vertikale Position der angeklickten Zeile ab.
- **Inhalte:** Das neue Thema erfüllt die [redaktionelle Richtlinie](../../content/editorial-policy.md) und die [Quellenregeln](../../content/source-selection.md). Quellen, fachliche Aussagen und Metadaten werden vor der Integration erneut geprüft und in dieser Spec nachgewiesen. Es erhält in dieser Story keine Lerncheck-Fragen. Die beiden neuen Abschnittsüberschriften erscheinen bei bestehenden und neuen Themen.
- **Änderungsgrenze:** Die fachliche Änderung bleibt in der Vertikale Themen. Falls nötig, dürfen `src/app` für die Komposition und `src/shared` für stabile IDs, Datentypen oder Validierung angepasst werden; sie zählen nicht als weitere fachliche Vertikalen. Filter- oder Anzeigelogik gehört weder nach `src/app` noch nach `src/shared`. Bestehende Lernchecks und gespeicherter Lernfortschritt bleiben nutzbar. Neue Abhängigkeiten sind nicht vorgesehen.

## Umsetzung und Nachweise

Für jedes Teil-Feature werden der fachlich begründete RED-Fehler, die grüne Prüfung und das REFACTOR-Ergebnis hier nach der Durchführung eingetragen.

| Teil-Feature | RED | GREEN | REFACTOR |
| --- | --- | --- | --- |
| Pfadzuordnungen und unzugeordnetes Thema | Ausstehend | Ausstehend | Ausstehend |
| Themenfilter, Pfadanzeige und Positionsverhalten | Ausstehend | Ausstehend | Ausstehend |
| Icon und einheitliche Abschnittsüberschriften | Ausstehend | Ausstehend | Ausstehend |

Pflichtsuite (`npm run check`, `npm run test:e2e`, `npm audit --audit-level=high`): ausstehend. Lokaler Browsernachweis mit Browser, Ablauf und Ergebnis: ausstehend. Manuelle Prüfung und ausdrückliche Bestätigung durch den Nutzer: ausstehend. Ein Commit erfolgt erst nach diesen Nachweisen.
