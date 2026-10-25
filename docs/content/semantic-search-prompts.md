# Prompts für lokale semantische Suchtexte

Diese Prompts erzeugen redaktionelle Suchrepräsentationen aus vorhandenen
Themeninhalten. Sie werden vorab erstellt und geprüft. Im Browser verwendet
das Embeddingmodell die fertigen Texte beziehungsweise deren Vektoren; dort
wird kein generativer Subagent aufgerufen.

Stand 25.10.2026: Der sachliche deutsche Absatz ist für die Fortsetzung der
Produktentwicklung gewählt. Vier getrennte Fragen bleiben Vergleichskandidat.
Die endgültige Auswahlgrenze wird bei der Umsetzung geprüft und festgelegt. Die
[abgeschlossene Such-Spec](../changes/implemented/0080-local-ai-search.md) enthält die Versuchsbedingungen
und Messergebnisse; sie ist kein Eingabedokument für den Textautor.

## Trennung von Textautor und Testfragen

- Einen Subagenten mit frischem Kontext starten, ohne die Chat-Historie zu
  übernehmen (`fork_turns="none"`).
- Nur den Erzeugungsauftrag und die ausgewählten öffentlichen Themeninhalte
  übergeben. Keine Testfragen, erwarteten Treffer, Fehlfälle oder Messberichte;
  auch nicht indirekt über die ganze aktive Spec oder das Repository.
- Suchtexte und Testfragen von unterschiedlichen Autoren erstellen lassen.
  Beide erhalten dieselbe fachliche Themenvorlage, aber keinen Zugriff auf die
  Datei des jeweils anderen.
- Suchtexte und fachlich beschriftete Fragen vor der Modellmessung einfrieren
  und ihre Prüfsummen festhalten. Nach Einsicht in die Validierung sind deren
  Fragen Entwicklungsdaten; spätere Abnahme braucht neue unabhängige Fragen.
- Bei einem neuen Thema die vorhandenen redaktionell geprüften Inhalte als
  Grundlage verwenden. Keine neuen Werkzeugfähigkeiten oder Fachbehauptungen
  zur Verbesserung der Auffindbarkeit erfinden.

## Tatsächlich verwendeter Erzeugungsauftrag

Im Versuch mit vier zufälligen Themen wurde der folgende initiale Auftrag an
den isolierten Textautor geschickt. Lokale Dateipfade sind durch Platzhalter
ersetzt; Zeilenumbrüche dienen der Lesbarkeit. Der Eingabe-JSON enthielt je
Thema ID, Titel und den bisherigen Suchtext aus Titel, Suchbeschreibung,
Problem und Kernkonzept. Er enthielt keine Testfragen.

```text
Forschungsauftrag: Erstelle nur Suchtextvarianten für vier zufällig ausgewählte
bestehende Themen. Lies ausschließlich diese öffentliche Inhaltsvorlage:
<THEMEN_VORLAGE_JSON>.
Keine Tests/Modell-/Netzaufrufe, keine anderen Agenten, keine
Produkt-/Git-/Schutzdateien lesen oder ändern.
Schreibe ausschließlich candidate-texts.json im selben Artefaktordner
(JSON-Erzeugung/Validierung erlaubt).
Format {topics:[{id,title,forms:{neutral:[string],structured:[string],questions:[string,string,string,string]}}]}.
Für jedes Thema drei Formen: neutraler sachlicher deutscher Absatz,
Problem–Vorgehen–Ergebnis als deutscher Absatz, vier getrennte deutsche Fragen.
Pro Absatz etwa60–110Wörter; Fragen zusammen ähnlich viel Inhalt,
keine Zusammenfassung nur des einfachsten Aspekts.
Alle drei Formen müssen dieselben vorhandenen Kernaspekte abdecken,
keine Fähigkeiten/Anforderungen/Behauptungen hinzufügen.
Keine neuen Rechtsauskünfte im Herkunftsthema; nur vorhandene
Begriffe/Zweckunterschiede sachlich abbilden.
Kein Titel muss vorangestellt werden
(gehört nicht zum vorherigen neuen Variantenformat).
Noch keine Messung, keine testfallbezogene Formulierung.
Du erhältst und liest bewusst KEINE späteren Suchfragen.
Rückgabe nur Pfad, Anzahl und kurze fachliche Unsicherheiten,
nicht den gesamten JSON-Text.
```

Vor der endgültigen Datensperre erhielt derselbe Textautor folgende
Formatkorrektur; Messwerte lagen zu diesem Zeitpunkt nicht vor:

```text
Vor endgültiger Datensperre eine rein formale Angleichung an den ausgewählten
ursprünglichen Kandidaten: Die structured-Absätze müssen die expliziten Marker
'Problem:', 'Vorgehen:', 'Ergebnis:' verwenden, wie die getestete Legacy-Variante.
Aktuell sind es inhaltlich gegliederte Absätze ohne diese Marker.
Bitte nur structured in candidate-texts.json entsprechend gliedern,
Inhalt nicht ausweiten, neutral/questions unverändert lassen.
Weiterhin keine Fragen lesen. Keine Messwerte existieren.
Danach JSON validieren, erneut einfrieren und neue SHA256 melden.
```

Die Suchtexte wurden nach der Messung nicht nachgebessert. Der tatsächliche
Auftrag erzeugte alle drei Formen gemeinsam. Die folgenden Einzelvorlagen sind
daraus abgeleitet. Neutral-v1 wurde anschließend durch einen frischen Autor für
alle 48 Themen verwendet, getrennt von einem neuen Fragenautor. Der erste
eingefrorene Vergleich erhielt alle 48 Pflicht-Themen, lieferte aber viele
Zusatztreffer; das ist keine allgemeine Qualitätsgarantie. Die Fragevorlage
wurde noch nicht eigenständig gegen einen neuen Fragensatz geprüft.

## Einzelvorlage für einen sachlichen Absatz

Version 1, abgeleitet aus dem Erzeugungsauftrag des Vier-Themen-Versuchs.

```text
Du erstellst ausschließlich einen sachlichen deutschen Suchtext für ein
bestehendes Lernthema. Du kennst keine Testfragen und darfst keine Frage-,
Test- oder Messdateien lesen. Keine Modellmessung, keine Netzaufrufe,
keine Änderungen an Produkt-, Git- oder Schutzdateien.

Eingabe: <THEMEN_ID>, <TITEL>, <FREIGEGEBENE_THEMENINHALTE>.
Verwende ausschließlich diese fachliche Vorlage.

Schreibe genau einen neutralen sachlichen Absatz mit etwa 60–110 Wörtern.
Beschreibe den konkreten Anlass beziehungsweise das Problem, die im Thema
erklärten Zusammenhänge oder Vorgehensweisen und den daraus entstehenden Nutzen.
Decke die vorhandenen Kernaspekte ab, nicht nur den einfachsten Teil.
Erhalte fachlich wichtige Grenzen und Unterscheidungen.
Verwende klare deutsche Sätze und die tatsächlich vorkommenden Fachbegriffe.
Füge keine Fähigkeiten, Anforderungen, Behauptungen oder erfundenen Beispiele
hinzu. Keine neuen Rechtsauskünfte. Kein vorangestellter Titel,
keine Aufzählung, keine Problem/Vorgehen/Ergebnis-Marker und keine Suchfragen.
Gib kein query:- oder passage:-Präfix aus; das ergänzt die Modellanbindung.

Ausgabe als JSON:
{"id":"<THEMEN_ID>","form":"neutral","texts":["<ABSATZ>"]}

Wenn die Vorlage keine belastbare Formulierung ermöglicht, melde den konkreten
fehlenden Inhalt statt ihn zu erfinden. Nach der Ausgabe den Text nicht anhand
späterer Testfragen oder Messwerte verändern.
```

## Einzelvorlage für vier getrennte Fragen

Version 1, abgeleitet aus demselben Erzeugungsauftrag.

```text
Du erstellst ausschließlich vier deutsche Suchrepräsentationen in Frageform
für ein bestehendes Lernthema. Du kennst keine Testfragen und darfst keine
Frage-, Test- oder Messdateien lesen. Keine Modellmessung, keine Netzaufrufe,
keine Änderungen an Produkt-, Git- oder Schutzdateien.

Eingabe: <THEMEN_ID>, <TITEL>, <FREIGEGEBENE_THEMENINHALTE>.
Verwende ausschließlich diese fachliche Vorlage.

Formuliere genau vier eigenständige Fragen, die unterschiedliche vorhandene
Kernaspekte des Themas abdecken. Jede Frage soll ein Anliegen beschreiben,
bei dem der vorhandene Themeninhalt hilft. Zusammen sollen sie ungefähr den
Inhalt eines sachlichen Absatzes von 60–110 Wörtern abdecken.
Erhalte fachlich wichtige Grenzen und Unterscheidungen. Keine bloße Wiederholung
des Titels in vier Varianten. Verwende klare deutsche Sätze und passende
Fachbegriffe. Füge keine Fähigkeiten, Anforderungen oder Behauptungen hinzu.
Keine neuen Rechtsauskünfte. Kein query:- oder passage:-Präfix ausgeben;
das ergänzt die Modellanbindung.

Ausgabe als JSON mit vier getrennten Strings:
{"id":"<THEMEN_ID>","form":"questions","texts":["<FRAGE_1>","<FRAGE_2>","<FRAGE_3>","<FRAGE_4>"]}

Wenn die Vorlage vier fachlich gedeckte Fragen nicht ermöglicht, melde den
konkreten fehlenden Inhalt statt ihn zu erfinden. Nach der Ausgabe die Fragen
nicht anhand späterer Testfragen oder Messwerte verändern.
```

## Verwendung bei weiteren Themen

Für eine Wiederholung des bisherigen Vergleichs den ursprünglichen gemeinsamen
Auftrag verwenden. Für den gewählten sachlichen Absatz die Einzelvorlage
neutral-v1 verwenden. Bei mehreren Themen dieselben Vorgaben je Thema anwenden;
die Ausgabe kann als `topics`-Array zusammengefasst werden. Die Themenvorlage
enthält wie im Versuch Titel, bisherige Suchbeschreibung, Problem und Kernkonzept.
Prompts und erzeugte Texte gemeinsam versionieren. Auch derselbe Prompt garantiert
keinen identischen generierten Text. Neue Themen und geänderte Suchtexte benötigen
eine passende Qualitätsprüfung; die Fragevorlage bleibt eine Vergleichsalternative.

Im Forschungsbericht Promptversion, Eingabequelle, erzeugten Text, Modellrevision,
Vorverarbeitung und Auswahlgrenze zuordnen. Textänderung, neue Modellrevision oder
andere Vorverarbeitung benötigen eine passende neue Qualitätsprüfung. Die
endgültige Ablage im Themenmodell wird mit der Produktumsetzung festgelegt.

Die Produktliste behält ihre Katalogreihenfolge. Primäre Qualitätswerte sind
fehlende relevante Themen, zusätzlich erhaltene Themen und fachfremde Treffer.
Rang und AUROC sind ergänzende Diagnosewerte, keine Produktsortierung und keine
Trefferwahrscheinlichkeit.
