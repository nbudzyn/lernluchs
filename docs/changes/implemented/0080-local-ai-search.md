## Lokale KI im Browser zur Suche einbinden
Über dem Suchfeld gibt es im Browser links vor "Lernpfade" einen neuen Link "Suche mit KI".

Der Link öffnet ein kleines Eingabefenster (grafisch wie das Lernpfade-Fenster), wo der Lernende einen (potenziell mehrzeiligen) Text eingeben kann (z.B. "Ich möchte eine Altanwendung von Cobol automatisiert nach Java migrieren" oder "Ich suche Ideen für die Integration von Java in eine Webanwendung" oder "Was ist besser, Ponytail oder MCP?").
  - Auch Fragen wie "Was weißt du über Spec-driven-Development" sind möglich.
  - Auch Stichwörter wie "Effizienz" sind möglich.
- Das Fenster entspricht der grafischen Gestaltung der restlichen Oberfläche. Professionelle, verlässliche Darstellung ist gewünscht!
- Kein "1/14 Lernpfade" in diesem Fenster

In den Fenster gibt es Zurücksetzen und Schließen wie beim Lernpfadefenster - und ein Textfeld für die Texteingabe (dort ist der Cursor).
  - Return löst das "SChließen" aus.
- Die Filterung wird bei Schließen übernommen (bzw. ausgeschaltet, wenn das Textfeld dann leer ist). Der Text wird über den Lernpfaden im Gefiltert-nach-Dialog angzeigt.
- Während der Agent nachdenkt wird das in der Themenliste entsprechend markiert - Wartekreisel o.Ä.
- Nachdem der Agent ein Ergebnis gefunden hat, aktualisiert er die Themenliste: Sie wird auf alle Themen gefiltert, die die Frage des Lernenden "beantworten" - also in deren Bereich die Antwort auf die Frage fällt. Der Gedanke ist: Wenn der Lernende sich mit diesen Themen beschäftigt, wird er die gestellte Frage beantworten oder das gestellte Problem lösen können.
- Schnellfilter und Lernpfade filtern zusätzlich.
- Ggf. (Z.B. "Wie backt man einen Pfannkuchen?") wird die Themenliste leer ("Keine Themen gefunden")
- Dem Lernenden wird keine textuelle Antwort auf die Frage angezeigt (abgesehen von den Themen).
- Die Beantwortung der Frage sollte nicht länger als 5 Sekunden dauern.
- Öffnet der User die KI-Suche erneut, ist sie mit dem Filtertext vorausgefüllt.
- "Filter aufheben" hebt auch den KI-Filter auf.
- In der Hilfe ergänzen (nur eine prägnante Zeile)

Die KI zur Beantwortung läuft lokal im Browser (auf jeden Fall Firefox und Chrome, gern auch Safari).
- Keine Sicherheitslücken
- Die KI im Browser kann keine Funktionen auslösen.

### Aktuelle Architektur und Fortsetzungsstand

Am 25.10.2026 ist die Fortsetzung der Produktentwicklung nach den
Formulierungsexperimenten freigegeben. Android misst der Nutzer selbst nach
Integration und Deployment. Die folgenden Entscheidungen beschreiben den
aktuellen Auftrag; die späteren Nachweisabschnitte dokumentieren frühere
Kandidaten und zwischenzeitliche Unterbrechungen.

Manuelle Abnahme, Akzeptanz der bekannten Grenzen sowie Commit und Integration
nach origin/main sind freigegeben. Ungeteilte Suche ist implementiert; Modell,
Suchabsätze und Auswahlgrenzen bleiben unverändert. Die drei benannten
historischen Fehlfälle sind akzeptierte Grenzen des ersten Stands, keine
fachlich richtigen Treffer. Das Gate erlaubt ausschließlich die ausdrücklich
benannten Zusätze; ursprüngliche Relevanzlabels bleiben erhalten und neue
Fehltreffer in Nullfällen bleiben Fehler. Keine weitere Qualitätsoptimierung.

Vertikalen: `topics` besitzt die semantische Suche einschließlich Modellanbindung,
Filterzustand und Oberfläche; `help` erhält eine prägnante Hilfezeile. Keine neue
Vertikale, kein fremder Vertikalimport und keine fachliche Logik in App/Shared.

Die lokale semantische Suche verwendet `@huggingface/tokenizers` 0.2.0 und
`onnxruntime-web` 1.30.0 mit dem mehrsprachigen Embeddingmodell
`Xenova/multilingual-e5-base` (q8), Revision
`1ec9243030a27d1a115d5c340572074c125b58b2`. Das Modell berechnet
Ähnlichkeiten zwischen Eingabe und Themen; es erzeugt keine Antworten und erhält
keine Werkzeuge oder ausführbaren Aufträge. Ein eigener Web Worker hält die
Oberfläche während der Berechnung bedienbar. Pro Thema wird ein sachlicher
deutscher Absatz als Suchrepräsentation verwendet. Ein isolierter Subagent erzeugt
die Absätze ohne Kenntnis der Testfragen anhand der
[dokumentierten Promptvorlage](../../content/semantic-search-prompts.md).
Themenvektoren werden beim Build mit derselben Modellrevision und
Pooling-Konfiguration vorbereitet. Die Erzeugung der Absätze ist ein
redaktioneller Vorbereitungsschritt, kein Laufzeitaufruf im Browser.

Modell, Tokenizer und WASM-Laufzeit werden beim Build anhand festgelegter Versionen,
Modellrevision und SHA256-Prüfsummen vorbereitet und von derselben Website
ausgeliefert. Keine externen Laufzeit-Skripte, Modellserver, Telemetrie oder
Übertragung von Eingaben. Suchtext und Ergebnis bleiben flüchtig. Modellartefakte
werden getrennt davon im Browser zwischengespeichert; ein Cacheausfall darf die
Suche nicht grundsätzlich verhindern. Rohdaten und Fehlermeldungen werden nicht
gespeichert oder übertragen.

Erstladen und Suche bekommen unterscheidbare Statusmeldungen. Der derzeit belegte
Downloadumfang einschließlich q8-Modell, Tokenizer und Runtime beträgt rund
310 MB unkomprimiert. Eine harte
Fünf-Sekunden-Garantie für den Erstdownload ist nicht tragfähig. Der vorgeschlagene
Zielwert gilt für Folgesuchen und wird auf dem vorhandenen PC im Browser geprüft.
Die bisherigen Node/WASM-Messungen liegen im Bereich von Zehntelsekunden;
sie ersetzen die Browsermessung nicht. Android ist keine vorgelagerte
Performance-Abnahme: Der Nutzer misst auf seinem Handy nach Deployment.
CPU/WASM vermeidet eine WebGPU-Pflicht; Chrome und Firefox sind ausdrücklich mit
echter Inferenz zu prüfen. Safari bleibt ein zusätzliches Ziel ohne Zusage.

Geplante Abnahme: passende Themen für die Storybeispiele, kein Treffer für die
Pfannkuchenfrage, Schnittmenge mit Schnellfilter und Lernpfaden, unveränderte
Katalogreihenfolge, verständlicher Lade-/Fehlerzustand und erneuter Versuch.
Veraltete Ergebnisse nach neuer Suche oder „Filter aufheben“ dürfen keinen Filter
reaktivieren. Ausgefilterte Themendetails schließen. Eingaben einschließlich
HTML-/Auftragsformulierungen bleiben Text; weder Ausführung noch Netzwerkzugriff
werden daraus abgeleitet. Mehrzeilige Eingabe, Fokus, Escape, Wiederöffnen,
Zurücksetzen und gemeinsame Filterzusammenfassung werden im Browser geprüft.

### Geklärte Entscheidungen

- Lokale Embeddingsuche samt Bibliothek und Modell ist freigegeben. Die direkte
  ONNX-Anbindung ersetzt Transformers.js und vermeidet dessen für den Browser
  unnötigen nativen Bildverarbeitungsanteil. Tokenizer: Apache-2.0; Originalmodell
  E5 und ONNX Runtime: MIT. Konvertierungsherkunft, Lizenztexte, exakte Versionen
  und Prüfsummen werden mitgeführt. Keine Cloudinferenz und keine Schlüssel.
- Die dauerhafte Regel wird ausdrücklich auf lokale Browserinferenz zur
  Themensuche angepasst. Alle übrigen Datenschutzgrenzen bleiben verbindlich.
- Fünf Sekunden sind der Zielwert für Folgesuchen; Erstladen wird separat angezeigt.
- Der sachliche deutsche Absatz ist die gewählte Produktrepräsentation.
  Getrennte Fragen bleiben dokumentierter Vergleichskandidat. Eine weitere
  offene Modell-/Stilsuche ist kein vorgeschalteter Auftrag.
- Die Themenliste wird als Menge gefiltert und behält ihre feste Katalogreihenfolge.
  Keine Suchergebnis-Sortierung und keine feste Top-k-Begrenzung. Fehlende relevante
  Themen wiegen schwerer als zusätzliche Treffer. Auswahlgrenzen werden anhand
  der Kalibrierungsdaten festgelegt und anschließend unverändert gegen neue
  unabhängige Fragen geprüft; Zusatztreffer werden transparent ausgewiesen.
  Klar fachfremde Fragen einschließlich der Pfannkuchenfrage bleiben Nulltrefferfälle,
  mit den ausdrücklich akzeptierten historischen Grenzen: Java-KI als Zusatz bei
  Kaffee aus Java; AGENTS.md, Vertrauensgrenzen und Kontextübergabe bei
  Immobilienagenten. Bei „Javadoc“ ist das zusätzliche Token-Thema akzeptiert.
  Verbesserungen sind zulässig; weitere Zusätze in diesen Nullfällen sind nicht
  freigegeben. Pflicht-Themen und die zwölf neueren Nullfragen bleiben streng geprüft.
- Jede Eingabe wird als Ganzes eingebettet. Vergleichswörter wie „oder“, „und“
  oder „versus“ erzeugen keine zusätzlichen Teilanfragen. Der neutrale Kontextsatz
  für ein einzelnes Stichwort und die bestehenden Auswahlgrenzen bleiben erhalten.
- Enter übernimmt und schließt; Umschalt+Enter erzeugt einen Zeilenumbruch. Ein
  kleiner Hilfetext unterhalb des Textfelds erklärt Umschalt+Enter. Escape und
  Außenklick schließen mit Übernahme wie „Schließen“; Zurücksetzen leert zunächst
  den Entwurf und lässt das Fenster offen. Nur ein Filterfenster ist gleichzeitig offen.
- Algorithmische Tests mit festen Vektoren und UI-Tests mit simuliertem Suchdienst
  sind vom echten Modellqualitätslauf getrennt. Synthetische Fragen mit
  fachlich festgelegten Pflicht-/Ausschlusstreffern, einschließlich Nichttreffern,
  werden vor Modellmessungen in Kalibrierung und zurückgehaltene Validierung geteilt.
  Echte Inferenz-Smokes prüfen Chrome und Firefox. Kein KI-Judge.
- Architekturentscheidung: direkte ONNX-Anbindung mit CPU/WASM, eigenem Worker
  und vorberechneten Themenvektoren. Die vorhandene Umsetzung wird entsprechend
  vervollständigt; kein neuer generativer Antwortdienst.

Technische Quellengrundlage:
[Originalmodell](https://huggingface.co/intfloat/multilingual-e5-base),
[ONNX-Konvertierung](https://huggingface.co/Xenova/multilingual-e5-base),
[Tokenizer-Paket](https://www.npmjs.com/package/@huggingface/tokenizers),
[Browserunterstützung](https://onnxruntime.ai/docs/get-started/with-javascript/web.html#supported-versions).
Die Quellen belegen Verfügbarkeit und technische Eignung, keine projektspezifische
Trefferqualität oder gemessene Suchlatenz. Beides ist vor Abnahme nachzuweisen.

## Umsetzungsplan und Nicht-Ziele

1. Sachliche Suchabsätze für den gesamten Katalog durch einen isolierten Autor
   erzeugen, fachlich gegen die vorhandenen Inhalte prüfen und mit dem Prompt
   versionieren. Die Sichtbarkeit eines Abschnitts „Lösung“ bleibt eigene Backlog-Story.
2. Themenvektoren neu vorbereiten und Filterauswahl per RED → GREEN auf hohe
   Vollständigkeit ausrichten. Keine Übernahme der bisherigen Rangdiagnose als
   Abnahmekriterium. Neue unabhängige Validierungsfragen verwenden, Fehlerarten
   getrennt berichten. Das aktuelle Modell beibehalten.
3. Bestehenden Worker und die bereits umgesetzte Oberfläche vervollständigen:
   gemeinsame Filter, Eingabeverhalten, Abbruch, Wiederholung, Ladeanzeige und
   Speicherfreigabe. Verhalten bei schwachen Geräten und Cache-/Downloadfehlern
   prüfen; Schnellfilter und Lernpfade bleiben nutzbar.
4. Assetvorbereitung, Versionskonsistenz und Auslieferung von derselben Website
   prüfen; nur final benötigte Modellartefakte ausliefern. Suchtext bleibt flüchtig.
5. Echte lokale Inferenz in Desktop-Chromium und Firefox einschließlich warmer
   Suchlatenz prüfen. Mobile Darstellung automatisiert prüfen; echte Android-
   Performance misst der Nutzer nach Integration und Deployment.
6. Nach dem letzten GREEN genau ein fokussiertes Subagentenreview, Vorschläge
   bearbeiten, endgültige Pflichtsuite und Desktopabnahme. Commit und Integration
   bleiben an die geltenden ausdrücklichen Nutzerfreigaben gebunden.

Nicht-Ziele: generative Antworten, RAG-Antworttexte, Toolaufrufe, Lernstandzugriff,
Cloudfallback, persönliche Suchhistorie, Vektordatenbank und zusätzliche Vertikalen.
Semantische Nähe ist keine Garantie, dass ein Thema eine Frage vollständig löst;
Trefferqualität und Nulltreffer werden über fachliche Fälle geprüft.

Die vorhandene Datenschutzregel wurde entsprechend der Freigabe angepasst.
Modellrevision, Dateiprüfsummen und transitive Abhängigkeiten werden vor Abnahme
geprüft. Der veröffentlichte Code nutzt ausschließlich statische Imports, auch
für den Worker. Persönlicher Lernstand wird weder zur Suche herangezogen noch
übertragen.

## Nachweise

### Zwischenstand vor der Modellentscheidung

Oberfläche, Worker-Lebenszyklus und Filterzustand sind implementiert. Die
Modellentscheidung ist noch offen: MiniLM und anschließend multilingual E5 small
lieferten auf der unabhängigen Zusatzvalidierung zu viele fachfremde Treffer.
Beim letzten E5-Lauf wurden 18 von 21 Pflichttreffern erkannt, aber nur 18 von 85
ausgegebenen Treffern waren im fachlich freigegebenen Erwartungsraum. Damit ist
das Qualitätsgate ausdrücklich nicht erfüllt. Die Erwartungen werden nicht
nachträglich an die Modellausgabe angepasst. Ein mehrsprachiger Cross-Encoder
wird als Ersatz mit demselben lokalen Datenfluss untersucht.

Die Laufzeitanbindung verwendet inzwischen direkt `@huggingface/tokenizers`
0.2.0 (Apache-2.0) und `onnxruntime-web` 1.30.0 (MIT). Diese begründete Alternative
zur freigegebenen Transformers.js-Anbindung vermeidet deren für den Browser
unnötigen nativen Bildverarbeitungsanteil. Beide Versionen sind exakt fixiert;
Audit und Lizenzprüfung waren beim Einbinden grün. Der endgültige Modell- und
Lizenznachweis wird nach der Qualitätsentscheidung aktualisiert.

RED → GREEN wurde für feste Vektoren/Relevanzauswahl, Asset-Prüfsummen,
Worker-Abbruch/Timeout, Filterzustand und Eingabefenster jeweils durchgeführt.
Zuletzt waren die gezielten Algorithmus-/Komponententests grün. Echte lokale
Inferenz samt Nulltreffer, Netzwerkgrenze und Fehler/Wiederholung war in Chromium,
mobiler Chromium-Ansicht und Firefox grün: 6 E2E-Tests, Exitcode 0, 18,15 s.
Diese Browsernachweise gelten für den E5-Zwischenstand und müssen nach einer
Modelländerung erneuert werden. Eine mobile Browseransicht ersetzt keinen Test
auf einem echten Android-Gerät.

Ressourcenstrategie: Modell erst bei Nutzung laden; Erstladen separat anzeigen;
Suchlauf abbrechbar machen; für Folgeinferenz 20 s technische Abbruchgrenze;
Worker nach 2 Minuten Inaktivität freigeben. Lade-/Laufzeitfehler bieten eine
Wiederholung, Schnellfilter und Lernpfade bleiben bedienbar. Es gibt keine
unzuverlässige Geräteklassifizierung anhand von RAM-/CPU-Angaben. Ein durch das
Betriebssystem beendeter Browserprozess kann nicht zuverlässig abgefangen werden.

Genau ein verpflichtendes Abschlussreview und die endgültige Pflichtsuite stehen
noch aus. Manuelle Nutzerabnahme und Commit-Freigabe stehen aus. Der reine
Refinement-Dokumentationstest war grün: 1 Test, Exitcode 0.

### Begrenztes Formulierungsexperiment, 25.10.2026

Der größere E5-base-Kandidat bestand mit den bisherigen Filterregeln das Gate
ebenfalls nicht (37 Tests grün, 6 rot; 15,60 s, Exitcode 1). Im zusätzlichen
Fragensatz: 16 passende von 35 ausgegebenen Treffern, 15 von 21 Pflichttreffern.
Die Produktumsetzung wurde auf Nutzerwunsch angehalten. Die Filteroberfläche
bleibt gewünscht; fehlende Themen wiegen fachlich schwerer als zusätzliche.

Nun ausdrücklich autorisiert: ein isolierter Vergleich verschiedener Suchtexte
für EIN Thema, `design-and-legacy-specification`, mit unverändertem E5-base q8
und unveränderter Inferenz. Keine weitere Produktänderung oder Modellwahl.
Die Formulierungen decken dieselben vorhandenen Inhalte ab: Verhaltensermittlung,
Beobachtungen gegenüber Annahmen, Vergleich alt/neu und konkrete Entwurfsskizzen.
Deutsch/Englisch wird mit inhaltlich entsprechenden Paaren verglichen; zusätzlich
eine klar gekennzeichnete Variante mit getrennten Fragevektoren.

Ein unabhängiger Forschungs-Subagent hat vor Modellmessungen 20 synthetische
Fragen beschriftet, ohne die Suchtexte zu kennen: je fünf passende und fünf
unpassende Fragen in Kalibrierung und Validierung. Dies ist ein gezielter neuer
Satz; die bisherigen 20 allgemeinen Suchfragen enthalten zu wenige positive
Fälle für ein einzelnes Thema. Keine nachträgliche Änderung der Labels.

Messung: rohe Kosinusähnlichkeit ohne lexikalische Boni, Queryzerlegung oder
bisherige Filterregeln. Pro Variante Grenze beim schwächsten positiven
Kalibrierungsfall festlegen (alle fünf behalten); auf die zehn Validierungsfälle
unverändert anwenden. Ausweisen: fehlende Positive, fälschlich behaltene Negative,
AUROC als schwellenunabhängiger Trennscore (100 = alle Positiv/Negativ-Paare richtig
geordnet, 50 = Zufallsniveau) und Rang der positiven Fragen gegenüber den übrigen
47 unveränderten Themen. AUROC für Kalibrierung/Validierung getrennt und gemeinsam.
Keine Bewertung von Modellähnlichkeit als Wahrscheinlichkeit und kein daraus
abgeleiteter allgemeiner Abnahmenachweis für alle Themen. Rohmesswerte und
lesbare Ergebnistabelle werden als lokale Artefakte außerhalb von Git erzeugt.

Ergebnis des unverändert durchgeführten Vergleichs: 11 Textvarianten, 20 Fragen,
220 Frage/Variante-Messwerte. Bisheriger Suchtext: AUROC 76/100, medianer Rang 6,
bei 5 von 10 positiven Fragen unter den ersten fünf Themen. Vier einzeln
eingebettete Fragen mit Maximumaggregation: AUROC 96/100, alle zehn positiven
Fragen auf Rang 1 gegenüber den unveränderten übrigen 47 Themen. Deutsches
Problem/Vorgehen/Ergebnis: AUROC 90/100, medianer Rang 1,5, 9 von 10 unter den
ersten fünf. Kein überzeugender Vorteil durch den reinen Sprachwechsel in diesen
Messungen; die englischen Einzelthemen stehen allerdings weiterhin einem
deutschsprachigen Restkatalog gegenüber.

Die feste Kalibrierungsgrenze überträgt sich weiterhin schlecht: Bei getrennten
Fragen fehlen in der Validierung 4 von 5 positiven Fällen, obwohl alle im
Katalogvergleich Rang 1 erreichen. Bei Problem/Vorgehen/Ergebnis fehlen 1 von 5,
mit 1 zusätzlichen negativen Fall. Textrepräsentation und Auswahlgrenze müssen
deshalb getrennt beurteilt werden.

Nachträglich ergänzte, ausdrücklich rückblickende Analyse: Bei einer Grenze,
die alle zehn bekannten positiven Fälle behält, bleiben mit getrennten Fragen
zwei von zehn negativen Fällen zusätzlich erhalten (Neuprojekt-TDD und reine
DNS-Umstellung beim Serverwechsel); mit dem bisherigen Text sechs. Diese Grenze
verwendet auch Validierungslabels und ist kein unabhängiger Qualitätsnachweis.
Der Hauptagent kannte die Fragen beim Schreiben der Varianten; der Versuch ist
explorativ, nicht strikt verblindet. Die Varianten wurden nach Messung nicht
nachgebessert. Vor einer Produktabnahme neue unabhängige Fragen verwenden.

Nachweise: Metriktests zunächst RED wegen fehlender Auswertung; anschließend
GREEN (2 Tests, Exitcode 0, 1,67 s). Rückblickende Grenzauswertung separat RED
(1/2 Tests fehlgeschlagen), anschließend GREEN (2 Tests, Exitcode 0, 1,62 s).
Echte lokale Modellmessung: 1 Instrumentierungstest grün, Exitcode 0, 10,11 s;
dies belegt die Messdurchführung, nicht die Produktqualität. Typecheck und
gezielter Lint der sechs Experimentdateien grün. Tabelle und sämtliche
Einzelwerte lokal als HTML/JSON erzeugt; nachträgliche Tabellenanalyse aus den
gespeicherten Werten, ohne erneute Modellinferenz. Produktumsetzung weiterhin
angehalten; keine automatische Änderung des Filters aus dem Experiment.
Abschließend Metrik-/Dokumentationstests grün: 3 Tests, Exitcode 0, 2,20 s;
Typecheck und gezielter Experiment-Lint erneut grün nach der Berichtserweiterung.
HTML im Browser geöffnet: alle elf Varianten und elf Detailansichten vorhanden,
keine horizontale Überbreite der Seite bei 1002 Pixeln Viewport.

### Übertragung auf zufällige Themen, 25.10.2026

Auf ausdrücklichen Folgeauftrag werden getrennte Fragen, sachlicher deutscher
Absatz und Problem/Vorgehen/Ergebnis auf vier weitere Themen übertragen. Auswahl
gleichverteilt ohne Zurücklegen mit `crypto.randomInt` aus den übrigen 47 Themen;
vor Formulierung und Messung als `selection.json` lokal festgehalten. Gezogene IDs:
`ai-content-provenance-and-disclosure`, `domain-language-and-complexity`,
`compare-parallel-and-serial-agent-work`, `deterministic-agent-verification-gates`.
Keine Neuziehung aufgrund späterer Ergebnisse. Bisheriger Text jeweils als Kontrolle.

Nach einer Nutzerunterbrechung ausdrücklich fortgesetzt mit strikter Trennung:
ein frischer Subagent ohne Chat-Historie erstellt nur die drei Suchtextformen je
Thema aus den bestehenden öffentlichen Inhalten; ein zweiter frischer Subagent
erstellt unabhängig nur die Fragen. Beide dürfen nur die gemeinsame Themenvorlage
lesen, nicht die Datei des jeweils anderen. Je Thema 20 beschriftete Eingaben
(5 passende + 5 unpassende je Split), insgesamt 80. Dateien und Prüfsummen werden
vor der Inferenz eingefroren. Keine Anpassung anhand von Messwerten.

Modell, Pooling und Messverfahren bleiben unverändert. Für Rangvergleiche werden
alle vier gezogenen Themen gemeinsam in derselben Form repräsentiert, die übrigen
44 bleiben unverändert. Vier Fragevektoren pro Thema werden per Maximum verbunden.
Auswertung pro Thema sowie zusammengefasst pro Form; zusätzlich eine gemeinsame
Auswahlgrenze pro Form aus allen positiven Kalibrierungsfällen und Anwendung auf
die gesamte Validierung. Vollständiger-Recall-Grenzen nur rückblickend ausweisen.
Dies bleibt ein Formulierungsexperiment, die Produktumsetzung ist angehalten.

Durchgeführt: vier Themen, drei übertragene Formen und bisheriger Suchtext als
Kontrolle; 80 Fragen, 320 Frage/Form-Messwerte. Suchtextautor ohne Kenntnis der
Fragen, Frageautor ohne Kenntnis der Suchtexte; ausschließlich gemeinsame
Inhaltsvorlage. Vor der Inferenz eingefrorene SHA256:
Suchtexte `f1b9aff09242026ac0e4297864c23cfb7ae4c8d896017de4a195fa53c6f9ebe5`,
Fragen `5c40a5fe44c9f5bee756d046bd915f4f8e49f9c9740b8d096703a22ad45065af`.
Vor dem Einfrieren nur explizite Problem/Vorgehen/Ergebnis-Marker formal ergänzt,
ohne Kenntnis der Fragen oder Modellmessung. Danach keine Text-/Labelanpassung.

| Form | Mittlere AUROC /100 | Positive in ersten 5 /40 | Fehlende Validierung /20 | Zusätzliche Validierung /20 |
| --- | ---: | ---: | ---: | ---: |
| Bisheriger Text | 96,0 | 32 | 1 | 9 |
| Sachlicher Absatz | 96,8 | 32 | 0 | 10 |
| Problem/Vorgehen/Ergebnis | 93,0 | 37 | 1 | 6 |
| Vier getrennte Fragen | 97,3 | 38 | 4 | 0 |

Validierungsspalten verwenden die gemeinsame, ausschließlich aus den 20 positiven
Kalibrierungsfällen bestimmte Grenze je Form. Die Frageform gewinnt die Trennung
bei Fachsprache deutlich (100 statt 93); bei Herkunft/Kennzeichnung erreicht sie
93 statt 94, bei seriell/parallel wie der bisherige Text 100, bei Prüf-Gates 96
statt 97. Kein allgemeiner Gewinner aus vier Themen ableitbar. Der sachliche
Absatz behält hier alle relevanten Validierungsfälle, mit mehr zusätzlichen
Treffern. Feste Auswahlgrenzen bleiben der maßgebliche offene Punkt.

Rückblickend mit je eigener Grenze pro Thema und vollständigem Recall aller
40 positiven Fälle: 11 zusätzliche Negative beim bisherigen Text, 9 beim
sachlichen Absatz, 14 bei Problem/Vorgehen/Ergebnis, 9 bei getrennten Fragen.
Mit einer einzigen gemeinsamen vollständigen-Recall-Grenze: 21/22/21/25.
Beide rückblickenden Auswertungen verwenden auch Validierungslabels und sind
keine unabhängige Validierung. Die Differenz macht unterschiedliche
Ähnlichkeitsskalen zwischen Themen sichtbar.

Nachweise: Berichtserweiterung RED (1 von 3 Metrik-/Berichtstests fehlgeschlagen),
danach GREEN (3 Tests, Exitcode 0, 1,70 s). Echte lokale Messung mit unveränderten
eingefrorenen Eingaben: 1 Instrumentierungstest grün, Exitcode 0, 19,53 s.
Metrik-, Aggregations- und Dokumentationstests anschließend grün: 5 Tests,
Exitcode 0, 2,48 s. Typfehler in der Instrumentierung korrigiert; Typecheck und
gezielter Lint danach grün. HTML-Haupttabelle im Browser geöffnet, vier Themen
und vier Formzeilen vorhanden, keine Seitenüberbreite bei 1002 Pixeln.
Vollständige Texte, Fragen, Prüfsummen und Einzelmessungen bleiben als lokale
HTML-/JSON-Artefakte außerhalb von Git. Produktumsetzung weiterhin angehalten.

### Promptablage und Vorschläge vor der Fortsetzungsfreigabe

Auf ausdrücklichen Auftrag sind die tatsächlich verwendeten Erzeugungsanweisungen
einschließlich der formalen Nachanweisung und daraus abgeleitete Einzelvorlagen
in [Suchtextprompts](../../content/semantic-search-prompts.md) festgehalten und im
Dokumentationsindex verlinkt. Die Einzelvorlagen sind neu abgeleitet, nicht als
separat geprüfte Prompts auszugeben. Frischer Textautor ohne Testfragen bleibt
verbindlich für weitere Versuche. Sachlicher Absatz ist der bevorzugte Kandidat;
getrennte Fragen bleiben Alternative.

Die feste Themenreihenfolge bleibt erhalten. Rangwerte des Versuchs sind
Diagnosewerte; entscheidend sind vollständiger Erhalt relevanter Themen,
vertretbare Zusätze und Nulltreffer bei klar fachfremden Fragen. Ein passendes
Thema kann auch nur einen Teil einer mehrteiligen Frage abdecken.

Für die Diskussion vor einer Wiederaufnahme vorgeschlagen, noch nicht beauftragt:

1. Binäre Filterauswahl auf dem vollständigen Themenkatalog mit sachlichen Texten,
   vorher festgelegter Auswahlgrenze und neuen unabhängig formulierten Fragen.
   Insbesondere mehrere Anliegen, kurze Fachbegriffe, Paraphrasen und fachfremde
   Fragen mit ähnlichem Wortschatz prüfen. Keine Top-k-Abnahme oder Sortierung.
2. Browserperformance in Chrome und Firefox sowie auf einem echten Android-Gerät:
   Erstdownload, Start mit gecachten Dateien und warme Folgesuche separat;
   Speicherbedarf und Freigabe messen. Das Fünf-Sekunden-Ziel gilt für Folgesuchen.
   Ein begrenzter Small/Base-Vergleich mit denselben verbesserten Suchtexten könnte
   klären, ob der kleinere Download jetzt ausreicht; dies ist bisher nicht belegt.
3. Fehler- und Aktualisierungsfälle: Abbruch, schwaches Gerät, fehlender Speicher,
   gestörter Download, Wiederholung und veralteter Cache nach Themen-/Modellwechsel.
   Suchtexte bleiben flüchtig, öffentliche Modellartefakte dürfen gecacht werden;
   Schnellfilter und Lernpfade bleiben bei KI-Fehlern bedienbar.

Diese Vorschläge starten keine weitere Modellmessung oder Produktimplementierung.
Promptdokument, Indexverweis und Spec-Ergänzung geprüft; Dokumentationstest grün:
1 Test, Exitcode 0, 1,72 s. Kein Produktcode in diesem Schritt geändert.

### Aktueller Auftrag nach der Fortsetzungsfreigabe

Produktentwicklung ist wieder freigegeben; maßgeblich sind „Aktuelle Architektur
und Fortsetzungsstand“ sowie der aktualisierte Umsetzungsplan oben. Android misst
der Nutzer nach Integration und Deployment. Der zusammengefasste Fortsetzungsplan
ist auf dieser Grundlage dokumentiert; Dokumentationstest grün: 1 Test,
Exitcode 0, 24,42 s. Frühere Unterbrechungen und Vorschläge bleiben historische
Nachweise und dürfen die aktuelle Freigabe nicht als weiter pausiert darstellen.

### Fortsetzung: unabhängige Absätze und mengenbasierter Filter

Arbeitsort/Branch/aktive Spec und unveränderte eigene Sitzungszuordnung geprüft.
Zwei frische Subagenten erhalten ausschließlich dieselbe öffentliche Themenvorlage:
48 Suchabsätze nach neutral-v1 beziehungsweise neue fachlich beschriftete
Validierungsanliegen. Keine gegenseitigen Dateien oder Test-/Messberichte.
Die Vorlage entspricht dem bisherigen Vier-Themen-Versuch (Titel, vorhandene
Suchbeschreibung, Problem und Kernkonzept). Produktive Absätze werden nach
Messung nicht auf Fragen hin nachgebessert.

Algorithmischer RED-Nachweis: Ein sehr ähnliches Thema verdrängte ein weiteres
qualifizierendes Thema (1 fehlgeschlagen, 4 grün, Exitcode 1, 2,06 s).
GREEN: jedes Thema unabhängig am gemeinsamen Grenzwert prüfen, ohne relatives
Abstandsfenster, lexikalische Zusatzgewichtung oder Top-k; 5 Tests grün,
Exitcode 0, 2,02 s. Der vorläufige Wert 0,8 ist noch keine Qualitätsfreigabe;
der endgültige Grenzwert wird an vorhandenen Kalibrierungsdaten festgelegt.

Indexkonsistenz RED: neue Prüfung noch nicht vorhanden (Importsuite fehlgeschlagen,
Exitcode 1, 1,85 s). GREEN: Revision, vollständige eindeutige IDs, exakte
Suchpassagen und gültige kompatible Vektoren prüfen; zusammen 6 Tests grün,
Exitcode 0, 2,21 s. Worker lehnt einen veralteten Index beim Start ab.

Suchabsätze eingefroren: SHA256
f2c8a2437505f3fa07069f7f4ae302372ac238b51b55f65c0f33281d4949db7b.
Neue Validierungsfragen (36 positive, 12 fachfremde) eingefroren:
3246278382dbaaaba61bde59ec39cb7f8854e84dd1a8d951a67f9c120733e7e7.
Alle 48 Themen werden laut unabhängigem Fragenautor abgedeckt. Beide Datensätze
sind vor der Modellmessung gesperrt; Hauptagent liest die neuen Fragen erst nach
Festlegung der Auswahlregel. Herkunftsvorlage SHA256
165bef988cef0fd8d9079b3b153f2daa1610e083f38f796c576b0cf221ee6343.

Kalibrierung: Ein gemeinsamer Rohwert kann Stichwörter und längere Sätze nicht
vollständig trennen. Ein einzelner neutraler Kontextsatz für Einzelwörter
wurde zusätzlich geprüft: „Ich suche Informationen zum Thema <Eingabe>.“.
Keine Fachbegriffe ergänzt und keine Suchabsätze verändert. Beide
Instrumentierungsläufe grün (je 1 Test; 4,52/4,58 s, Exitcode 0), was nur die
Messdurchführung belegt. Feste Auswahlgrenzen V1 vor neuer Validierung:
0,785 für Sätze, 0,768 für kontextualisierte Einzelwörter. Jeder Kandidat wird
unabhängig geprüft; Vergleichsteile werden vereinigt und in Katalogreihenfolge
zurückgegeben. Normales „und“ in langen Sätzen wird nicht aufgetrennt.
Entsprechender RED-Nachweis 1/5 fehlgeschlagen (1,93 s), danach 5 grün
(1,77 s). Kontextsatz RED 1/6 fehlgeschlagen (1,82 s).

Die frühere 70%-Präzisionshürde widerspricht der inzwischen vereinbarten
Recall-Priorität und gilt nicht als aktuelles Produktgate. Für die neue
unabhängige Prüfung vorab festgelegt: mindestens 95% Pflicht-Themen erhalten,
alle klar fachfremden Fragen ohne Treffer. Zusätzliche Themen werden vollständig
und als Mittelwert ausgewiesen; ihre Zumutbarkeit bleibt Teil der manuellen
Abnahme. Dies ist kein Beleg für beliebige neue Eingaben und keine Freigabe
beliebig großer Ergebnismengen. Bei Scheitern dieser Validierung keine weitere
Optimierung auf ihren Fragen: Stand und Grenzen berichten, Entscheidung abwarten.

### Ergebnis der Produktfortsetzung und vereinbarter Prüfhalt

Einzelwort-Kontext und Auswahlregel: 7 algorithmische/Index-Tests grün,
Exitcode 0, 1,90 s. Unabhängige Modellprüfung mit eingefrorenen Texten, Fragen
und Grenzen V1: 1 Test grün, Exitcode 0, 15,76 s. Alle 48 Pflicht-Themen
bei 36 positiven Anfragen erhalten; alle 12 fachfremden Anfragen ohne Treffer.
520 weitere Themen außerhalb der fachlichen Labels, im Mittel 14,44 pro
positiver Anfrage. Ein Fall erhält 41 von 48 Themen, darunter 37 zusätzliche.
Diese Breite ist ausdrücklich keine bereits erteilte manuelle Qualitätsabnahme.
Node/WASM-Suchdauer in diesem Lauf: Mittel 276 ms, Minimum 144 ms,
Maximum 691 ms. Kein Beleg für Browser oder Android.

Historischer Regressionstest nach derselben Änderung: 38 Tests grün,
3 fehlgeschlagen, Exitcode 1, 17,25 s. Die vorab dokumentierte Anpassung entfernt
nur die überholte 70%-Präzisionshürde; Pflicht-Themen, explizite Ausschlüsse und
Nullfälle bleiben geprüft. Fehler:
- „Javadoc“ enthält zusätzlich das ausdrücklich ausgeschlossene Token-Thema.
- Kaffee aus Java mit French Press erhält das Java-KI-Thema.
- Provisionen von Immobilienagenten erhalten AGENTS.md, Vertrauensgrenzen und
  Kontextübergaben als falsche Treffer.

Gesamtstatus weiterhin ROT. Keine neue Filteroptimierung anhand dieser
Fehler beziehungsweise der inzwischen angesehenen unabhängigen Validierung.
Aufgrund des vereinbarten Stopppunkts ist die weitere Produktentwicklung
angehalten. Alle Änderungen bleiben im eigenen Worktree uncommittet erhalten.
Offen: Nutzerentscheidung zur akzeptablen Breite und zu fachfremden Ausnahmen,
danach gegebenenfalls begrenzte Neukalibrierung mit neuer unabhängiger Abnahme.
Browser-/Auslieferungsabschluss, vollständige Pflichtsuite, genau ein finales
Subagentenreview sowie manuelle Abnahme und Commit-Freigabe stehen noch aus.
CI ist noch nicht auf das neue unabhängige Gate umgestellt. Die alten
Forschungsartefakte liegen weiterhin unter public/ai-search und müssen vor einem
Produktbuild aus dessen Auslieferung entfernt werden. Kein Deployment/Commit/Push.

Artefakte außerhalb Git im Ordner production-neutral-2026-10-25:
Vorlage, neutrale Absätze, unabhängige Fragen, eingefrorene Prüfsummen,
beide Kalibrierungsmessungen und independent-quality.json. Die neue Validierung
ist nach Einsicht Entwicklungswissen; eine geänderte Auswahlregel braucht erneut
unabhängige Fragen. Keine persönliche Nutzereingabe in den synthetischen Fällen.

Prüfhalt und Ergebnisse dokumentiert; Dokumentationstest grün: 1 Test, Exitcode 0, 1,73 s. Keine abschließende Pflichtsuite und kein finales Review behauptet.

### Wiederaufnahme nach entferntem Query-Splitting

Die begrenzte Diagnose verwendete zehn vorhandene betroffene Anfragen bei
unverändertem Modell und unveränderten Grenzen. Ungeteilte Eingabe behält alle
Pflicht-Themen; zusätzliche Themen dieser zehn Fälle sinken von 181 auf 108.
Im 36-Positivfälle-Satz sinkt die Summe von 520 auf 462 (14,44 auf 12,83 je Fall).
Dies ist Entwicklungsauswertung bekannter Fälle, keine neue Blindvalidierung.

RED für die beauftragte Entfernung: 1/6 algorithmische Tests fehlgeschlagen,
Exitcode 1, 1,69 s; Satzfragmente erzeugten zusätzliche Treffer und Modellaufrufe.
GREEN: vollständige Eingabe genau einmal einbetten; alte Aufteilungsfunktion
auch aus der Kalibrierungsinstrumentierung entfernt. Algorithmus, Index,
Filteroberfläche und Client zusammen 12 Tests grün, Exitcode 0, 7,22 s.
Typecheck und gezielter Lint grün. Echter Modelllauf: 39 grün, drei unveränderte
bekannte Fehler, Exitcode 1, 13,28 s; der Satz mit ursprünglich unabhängig
verfassten Fragen besteht. Keine Qualitätsgrenzen oder Fragenlabels verändert.
Browserablauf mit echter Base-Inferenz: Desktop-Chromium, mobile Chromium-Ansicht
und Firefox grün, drei Tests, Exitcode 0, 17,20 s. Ein voriger leerer Lauf wegen
zu eng verankertem Testnamenfilter ist kein Prüfnachweis. Nutzerstopp kam erst
nach abgeschlossenem Browserlauf; jetzt wieder zur technischen Fertigstellung
freigegeben. Kein Commit/Push und keine manuelle Abnahme.

Auslieferung: Build-Prüfung um vollständige KI-Assets und genau das ausgewählte
Modellverzeichnis erweitern. Initialer Testimport traf den bisherigen sofortigen
CLI-Lauf; nach verhaltenserhaltender Extraktion ergab der fachliche RED-Test:
fehlende WASM-Datei wurde akzeptiert, 1 Test fehlgeschlagen, Exitcode 1, 1,04 s.
GREEN mit Assetprüfung: zwei Toolingtests grün, Exitcode 0, 1,28 s.
Drei eigene ignorierte Versuchsmodellverzeichnisse außerhalb des
Veröffentlichungsordners lokal erhalten. Neue unabhängige Qualitätsprüfung
zusätzlich zum bisherigen Gate in CI aufgenommen; bekannte Fehler nicht versteckt.

### Technische Fertigstellung nach erneuter Freigabe

Vorhandene Story-Zuordnung und freie bzw. anschließend eigene Schreibsperre
geprüft; keine fremden Änderungen übernommen. Drei eigene Versuchsmodelle lokal
außerhalb von public erhalten. Finales public/ai-search enthält nur e5-base-v1.
Der Build prüft benötigte Modelldateien, Runtime, Index und Lizenzhinweise.
Modellvorbereitung mit den eingefrorenen 48 Suchabsätzen grün.

Cache-Fallback und Same-Origin-Verhalten mit simuliertem Embedder geprüft:
CacheAPI fehlt, Öffnen wird abgewiesen oder Cache ist voll. Worker antwortet
weiterhin erfolgreich, Requests enthalten keinen Suchtext. Zusammen mit den
bestehenden Timeout-/Abbruch-/Idle-Tests drei Tests grün, Exitcode 0, 25,03 s.
Ein TypeScript-this-Bindungsfehler im neuen Test wurde korrigiert; danach
Typprüfung, Lint und Architekturprüfung grün, Lizenzprüfung grün.

Erster vollständiger Unit-Lauf: 217 grün, zwei CI-Browservoraussetzungsprüfungen
rot, Exitcode 1, 76,72 s. Ursache: bisherige Annahme einer exakten
Chromium-only-Installationszeile. CI benötigt jetzt Chromium und Firefox;
Pages führt keine Firefox-E2E aus und installiert weiterhin nur Chromium.
Gezielte korrigierte Prüfung grün: zwei Tests, Exitcode 0, 1,97 s.
Produktionsbuild einschließlich Assetprüfung grün, Exitcode 0, 5,79 s;
Pages-Basispfad-Build grün, Exitcode 0, 2,07 s; Runner-Selbsttests grün;
Abhängigkeits-Audit ohne Funde. Keine neue Modell-/Stilsuche und keine
Abschwächung des bekannten roten Modellgates. Genau ein frischer,
ausschließlich lesender Review-Subagent ist beauftragt; Ergebnis noch ausstehend.

### Einmaliges Abschlussreview und Behandlung

Frischer Reviewer ohne Chat-Historie, Basis f8ef987c03ac750afc2516fa027ca45ae8a5ed95,
alle relevanten uncommitteten und neuen Story-Dateien einschließlich topics,
help, Tooling, Konfiguration und Tests. Ausschließlich lesend nach
Reviewvertrag; keine Tests, Änderungen oder zweite Reviewrunde.

Zwei Vorschläge mittlerer Priorität, beide angenommen:
1. Vier uneinheitliche Artefakt-Pfadprüfungen zusammenführen. Gemeinsame
   technische Testhilfe unter tests/shared, keine Vertikalimporte. Exakte
   Repositorywurzel, echte Unterordner und „..reports“ ablehnen; externe
   Nachbarordner und andere Windows-Laufwerke zulassen. RED: neue Hilfe fehlt,
   Importsuite rot, Exitcode 1, 5,68 s; GREEN gemeinsam mit Filtertests:
   47 Tests, Exitcode 0, 39,01 s. Windows/POSIX-Pfadregeln separat abgedeckt.
2. Vier redundante filterbezogene Detail-Schließregeln entfernen. Endgültige
   visibleItems bestimmen die einzige Invalidierung; Layout-Effekt schließt
   vor dem Paint. Die dargestellte Auswahl ebenfalls aus visibleItems ableiten,
   damit die bestehende Breitenwechsel-Logik keine unsichtbare Auswahl reaktiviert.
   Vorherige passende Unit-Nachweise grün, danach gezielte Filtertests grün;
   abschließende Browserprüfung umfasst Navigation und mobile Ansicht.

Keine weiteren belegten Funktions-/Datenschutzbefunde. Bekannte Modellfehler
bleiben offen; keine Anpassung der Auswahlgrenzen oder Labels. Reviewkorrekturen
verändern keine Suchrepräsentationen. Finale Prüfungen nach Korrekturen folgen.

Reviewkorrekturen: zentrale Detailinvalidierung und reine Ableitung der sichtbaren
Auswahl umgesetzt. Finale Unit-Suite grün: 221 Tests, Exitcode 0, 81,60 s.
Architekturprüfung erkannte zunächst Node-Core-Importe der neuen technischen
Testhilfe als unzulässig (Exitcode 2). Die Shared-Testregel wie die bereits
bestehende Vertikal-Testregel um Node-Core-Module ergänzt; fachliche Importgrenzen
bleiben unverändert. Das ist die Korrektur der technischen Prüfauswahl, keine
Freigabe fremder Vertikalimporte. Danach Architekturprüfung grün, Exitcode 0,
3,32 s. Typprüfung, Lint und Formatprüfung grün; Produktionsbuild nach den
Reviewkorrekturen grün, Exitcode 0, 5,61 s.

Erster vollständiger E2E-Lauf nach Reviewkorrekturen: 85 Tests grün, drei rot,
Exitcode 1, 94,58 s. Zwei Fehler sind derselbe bestehende Layouttest auf Desktop
und Mobil: sein unspezifischer CSS-Selektor trifft mit dem neuen KI-Knopf zwei
Elemente. Korrigiert auf das eindeutige aria-controls-Ziel des Lernpfadknopfs.
Dritter Fehler: Browserprozess beim Öffnen der Hilfe abgestürzt, ohne fachlichen
Assertfehler. Lauf verwendete acht parallele Worker; erneuter Gesamtlauf mit
zwei Workern begrenzt die gleichzeitige Last, keine Assertions abgeschwächt.
Alle sechs KI-E2E dieses Laufs grün, einschließlich Downloadfehler/Wiederholung.
Warme Folgesuche: Desktop-Chromium 219 ms, mobile Chromium-Emulation 206 ms,
Firefox 310 ms. Das sind lokale Browserwerte, keine Android-Messung.
Architektur-Unit-Tests nach Anpassung der Core-Import-Prüfung grün:
neun Tests, Exitcode 0, 2,55 s. Format, Typprüfung und Lint grün, Exitcode 0,
13,03 s.

Abschließender vollständiger Browserlauf mit zwei Workern grün:
88 Tests, Exitcode 0, 143,39 s. Einschließlich aller sechs KI-Abläufe mit echter
Base-Inferenz, Chrome Desktop/Mobil-Emulation und Firefox, sowie Pfad-, Schnellfilter-,
Lerncheck-, Scroll- und Browserhistorienabläufen. Die korrigierte Auswahl des
Lernpfadknopfs ändert nur den Testselektor. Keine Wiederholungsrunde des Reviews.
Lokale Version läuft im eigenen Worktree auf Port 5673 und wurde zur manuellen
Prüfung im Codex-Browser vorgemerkt. Noch keine Nutzerabnahme, kein Commit/Push.

### Finaler technischer Stand zur Nutzerabnahme

Letzter kombinierter Lauf von Modell-, Architektur- und Dokumentationstests:
49 grün, drei unveränderte bekannte Modellfehler, Exitcode 1, 18,11 s.
Alle 48 Pflicht-Themen des ursprünglich unabhängigen Satzes erhalten,
alle zwölf dortigen Nullfragen leer; zusätzliche Themen 462, im Mittel 12,83.
Diese bekannten Fälle sind inzwischen Regression, keine neue Blindabnahme.
Historische Fehlfälle Javadoc-Zusatz, Kaffee aus Java und Immobilienagenten
bleiben ausdrücklich offen; keine Labels oder Auswahlgrenzen angepasst.
Finaler Pages-Basispfad-Build grün, Exitcode 0, 1,78 s; Whitespaceprüfung grün.

Technischer Implementierungs-, Review- und Prüfabschluss ist erreicht.
Die vollständig grüne Gesamtpflichtsuite ist wegen des Modellqualitätsgates
noch NICHT erreicht. Keine Commit-Freigabe einholen oder committen, bevor die
Qualitätsanforderung geklärt, das zutreffende Gate grün und der manuelle Test
positiv bestätigt ist. Kein Push/Deployment beauftragt oder ausgeführt.
Die lokale Version ist für die manuelle Abnahme auf Port 5673 bereit.
Android-Performance bleibt wie vereinbart Nutzerprüfung nach Deployment.

### Abnahme und Freigabe des ersten Stands

Positive manuelle Nutzerabnahme ist erfolgt. Die bekannten drei historischen
Fehlfälle sowie die breite Auswahl sind als Grenzen des ersten Stands akzeptiert.
Commit und Fast-forward-Integration nach origin/main sind ausdrücklich freigegeben.
Keine erneute manuelle Abnahme oder zweite Reviewrunde erforderlich: Laufzeitcode,
Suchabsätze, Modell und Auswahlgrenzen wurden seit dem abgenommenen Stand nicht
verändert.

Das Qualitätsgate dokumentiert genau die akzeptierten Zusätze pro Fall:
val-14 Token-Thema; val-19 Java-KI-Thema; fresh-17 AGENTS.md, Vertrauensgrenzen und
Kontextübergabe. Ursprüngliche Relevanzlabels bleiben erhalten. Verbesserungen
bestehen weiterhin; weitere Zusätze in diesen Nullfällen scheitern. Pflicht-Themen,
alle übrigen Nullfälle und die zwölf neueren Nullfragen bleiben unverändert geprüft.
Die vorherigen drei roten Fälle sind Nachweis der ursprünglichen strengeren
Anforderung, kein Anlass für eine Modelländerung. Nach Anpassung an die freigegebene
Anforderung: 42 Modelltests grün, Exitcode 0, 13,93 s.

Format, Lint, Typprüfung, Architektur, Lizenzen und Runner-Selbsttests erneut grün.
Produktionsbuild ebenfalls grün. Die unveränderten 221 Unit- und 88 E2E-Nachweise
bleiben gültig; geänderte Modelltests wurden separat vollständig erneut geprüft.
Ein vollständiger Abhängigkeits-Audit ist ohne Funde. Dokumentation und Ablage
werden nach Archivierung abschließend geprüft. Remote vor dem Abschluss aktualisiert,
origin/main ist Vorfahr des eigenen Branches. Ausschließlich eigener Worktree;
Entwickler-Checkout und dessen lokale main-Referenz bleiben unverändert.
