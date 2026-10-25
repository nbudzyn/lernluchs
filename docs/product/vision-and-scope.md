# Produktstand

Öffentliche, statische Lernanwendung für KI-unterstützte Java-/Webentwicklung.
Themen enthalten kurze deutsche Inhalte, kuratierte [Quellen](../content/source-selection.md)
und Aktualitätsangaben; sie sind redaktionell geprüft, versioniert und nur lesbar.

Quellengebundene Lernchecks wählen fünf Fragen zufällig. Die Auswertung erklärt
richtige und gewählte falsche Antworten mit Quellenlinks; Abbruch verwirft Antworten.
Fünf richtige Antworten speichern das Thema lokal als „gelernt“ mit beschriftetem
grünem Haken. Reload und späteres Nichtbestehen erhalten den Status.
Bei Speicherfehlern bleibt der Check nutzbar und meldet fehlende dauerhafte Speicherung.

Die Themenliste bietet Themen-/Alltagsankeransicht, sofortigen Schnellfilter und
kombinierbare Lernpfadfilter ohne doppelte Themen. „Suche mit KI“ ergänzt einen
semantischen Filter mit lokalem Embeddingmodell im Browser. Fragen und Stichwörter
filtern die Liste in fester Reihenfolge; es entstehen keine Textantworten.
Schnellfilter, Pfade und KI-Filter bilden eine Schnittmenge. Die Auswahl bevorzugt
Vollständigkeit, kann aber zusätzliche Themen und einzelne fachfremde Treffer
enthalten. Modell- und Laufzeitdateien kommen von derselben Website.
Listenansicht und Pfadauswahl werden lokal gespeichert; Suchtexte bleiben flüchtig.
Lernpfadauswahl zeigt Auswahl-/Themenzähler; keine Auswahl zeigt alle Themen,
bewusste Vollauswahl bleibt erhalten. Reihenfolge entspricht „Gefiltert nach“.
„Zurücksetzen“ leert nur den jeweiligen Filterentwurf und lässt die Auswahl offen;
„Filter aufheben“ leert alle drei Filter. Im KI-Editor übernimmt Enter die Eingabe,
Umschalt+Enter fügt eine neue Zeile ein. Ladefehler oder zu langsame Inferenz
lassen die übrigen Filter nutzbar; Abbruch und erneuter Versuch sind möglich.

Ausgefiltertes ausgewähltes Thema schließt, rechts erscheint Hilfe.
Escape schließt zuerst die Pfadauswahl und fokussiert deren Einstieg; sonst leert
es im Suchfeld nur den Suchtext. Hilfe-Einstieg schließt das Thema und erhält Filter.
Hover hinterlegt die Themenzeile; ohne Hover bleibt beim offenen Thema nur der
Textbereich hinterlegt. Pfadsymbole haben keine dauerhafte Filterhinterlegung;
Tastaturfokus bleibt sichtbar, Touch erzeugt kein dauerhaftes Hover.

Geplante Erweiterungen: [Story-Backlog](story-backlog.md).
