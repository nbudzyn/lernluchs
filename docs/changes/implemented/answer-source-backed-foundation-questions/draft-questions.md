# Entwurf für die unabhängige Fragenprüfung

Dies ist der redaktionelle Entwurf, aus dem der vollständig begründete Prüf-Prompt und der öffentliche Katalogbestand erzeugt wurden. Jede Zeile nennt Frage, richtige Antwort, zwei falsche Antworten, Begründung und Quelle. Die extern geprüfte Fassung enthält zusätzlich die eigene Begründung jeder falschen Option.

## Mensch-KI-Verantwortung

Quelle H: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

| ID | Frage | Richtig | Falsch 1 | Falsch 2 | Begründung |
| --- | --- | --- | --- | --- | --- |
| H01 | Welche vier Funktionen umfasst der AI RMF Core? | Govern, Map, Measure und Manage | Plan, Build, Test und Deploy | Collect, Train, Prompt und Release | NIST nennt diese vier Funktionen ausdrücklich. |
| H02 | Welche Funktion ist im AI RMF querschnittlich angelegt? | Govern | Map | Measure | Govern soll die anderen Funktionen durchdringen. |
| H03 | Womit beginnt nach eingerichteter Governance für die meisten Nutzenden die Risikoarbeit? | Mit Map | Mit Manage | Mit dem abschließenden Audit | NIST nennt Map als typischen Einstieg nach Govern. |
| H04 | Wie ist die Reihenfolge der Core-Funktionen zu verstehen? | Iterativ und kontextabhängig | Als feste Einbahnstraße | Als zwingende Checkliste | NIST erlaubt kontextabhängige Reihenfolge und Rückbezüge. |
| H05 | Was leistet die Map-Funktion vor einer Risikobewertung? | Sie klärt Kontext und mögliche Risiken des KI-Systems | Sie erteilt die Betriebsfreigabe | Sie ersetzt die Überwachung im Betrieb | Map schafft Kontext für Measure und Manage. |
| H06 | Was soll bei der Beschreibung eines KI-Einsatzes früh geprüft werden? | Ob die KI-Lösung für den Zweck überhaupt angemessen ist | Ob das Modell die meisten Parameter hat | Ob die Dokumentation schon abgeschlossen ist | Map informiert auch die Entscheidung über die Angemessenheit einer KI-Lösung. |
| H07 | Wessen Perspektiven können bei der Risikobetrachtung hilfreich sein? | Auch die von Betroffenen außerhalb des Entwicklungsteams | Nur die des Modellanbieters | Nur die der Geschäftsführung | NIST empfiehlt vielfältige interne und externe Perspektiven. |
| H08 | Warum reichen gute Absichten bei der Entwicklung eines KI-Systems nicht aus? | Spätere Nutzungskontexte und Wechselwirkungen können Risiken verändern | Weil Tests grundsätzlich nutzlos sind | Weil ausschließlich die Trainingsdaten Risiken verursachen | NIST beschreibt Abhängigkeiten zwischen Lebenszyklusphasen und Einsatzkontext. |
| H09 | Welche Rolle haben Führungskräfte laut Govern 2.3? | Verantwortung für Entscheidungen über Entwicklungs- und Einsatzrisiken | Alle Modellantworten selbst formulieren | Das technische Testen allein übernehmen | Govern 2.3 weist der Führung Verantwortung für Risikoentscheidungen zu. |
| H10 | Was gehört zur organisatorischen Verantwortlichkeit für KI-Risiken? | Klare Rollen, Zuständigkeiten und Kommunikationswege | Möglichst unbenannte Zuständigkeiten | Ausschließlich informelle Chat-Absprachen | Govern 2.1 fordert dokumentierte und klare Rollen und Wege. |
| H11 | Wie sollten Verfahren zur Behandlung von KI-Risiken organisiert sein? | Transparent und entsprechend den Risikoprioritäten | Einmalig und danach unveränderlich | Nur nach einem Vorfall | Govern 1.4 beschreibt transparente Kontrollen nach Prioritäten. |
| H12 | Was berücksichtigt Govern 1.3 bei Umfang und Tiefe des Risikomanagements? | Die Risikotoleranz der Organisation | Nur die Dateigröße des Modells | Ausschließlich die Anzahl der Entwickler | Das erforderliche Niveau richtet sich nach der Risikotoleranz. |
| H13 | Was sieht Govern 1.5 für den Betrieb vor? | Laufende Überwachung und regelmäßige Überprüfung | Nur eine Prüfung vor dem ersten Release | Eine Prüfung allein durch das Modell | Der Prozess und seine Ergebnisse sollen fortlaufend beobachtet werden. |
| H14 | Wie soll ein KI-Systembestand organisatorisch behandelt werden? | Erfasst und nach Risikopriorität mit Ressourcen versehen | Unveröffentlicht und ohne Verantwortliche betrieben | Nur beim Ausfall inventarisiert | Govern 1.6 nennt Inventarisierung entsprechend Risikoprioritäten. |
| H15 | Was muss bei der Abschaltung eines KI-Systems berücksichtigt werden? | Sie soll sicher erfolgen und Risiken nicht erhöhen | Sie braucht keine Planung | Nur die Modellgewichte sind zu löschen | Govern 1.7 fordert sicheres Außerbetriebnehmen. |
| H16 | Was umfasst Govern über den Entwicklungszeitpunkt hinaus? | Den gesamten Produktlebenszyklus | Nur die erste Modellwahl | Nur den Promptentwurf | NIST bezieht Governance auf den gesamten Lebenszyklus. |
| H17 | Welche Funktion kann Projektdokumentation im KI-Team erfüllen? | Transparenz, menschliche Prüfung und Verantwortlichkeit stärken | Die fachliche Prüfung ersetzen | Risiken automatisch beseitigen | NIST nennt diese drei möglichen Wirkungen der Dokumentation. |
| H18 | Wie sollen Rollen von Menschen und KI bestimmt werden? | Durch definierte Zuständigkeiten und Aufsicht | Durch zufällige Zuweisung pro Antwort | Ausschließlich durch das Modell selbst | Govern 3.2 fordert geklärte Rollen und menschliche Aufsicht. |
| H19 | Warum ist ein vielfältiges Team bei Risikofragen nützlich? | Es kann Annahmen und neue Risiken sichtbar machen | Es macht jede Messung überflüssig | Es garantiert risikofreie Systeme | NIST begründet vielfältige Perspektiven mit offenerem Austausch. |
| H20 | Welche Rückmeldungen soll ein KI-Team einbeziehen? | Relevante Rückmeldungen außerhalb des Entwicklungsteams zu Auswirkungen | Nur positives Feedback von internen Tests | Ausschließlich die Bewertung des Modellanbieters | Govern 5 behandelt externe Perspektiven und Rückkopplung. |
| H21 | Was ist bei zugekauften KI-Systemen und Daten zu beachten? | Drittanbieter- und Lieferkettenrisiken | Nur der Kaufpreis | Ausschließlich die Geschwindigkeit der Integration | Govern 6 behandelt Risiken aus Drittsoftware und Daten. |
| H22 | Wie soll eine Organisation auf den Ausfall einer als hochriskant eingestuften Drittanbieterkomponente vorbereitet sein? | Mit einem Notfallverfahren | Durch Ignorieren bis zum nächsten Release | Nur mit einem neuen Prompt | Govern 6.2 fordert Kontingenzprozesse für solche Fälle. |
| H23 | Welches Risiko muss Map neben der vorgesehenen Nutzung betrachten? | Vorhersehbare Nutzung außerhalb des vorgesehenen Zwecks | Nur die Anzahl der UI-Klicks | Nur den Speicherbedarf beim Training | NIST nennt Risiken der Nutzung jenseits des beabsichtigten Zwecks. |
| H24 | Warum ist die Prüfung des Einsatzkontexts wichtig? | Ein System kann außerhalb seines vorgesehenen Kontexts versagen | Der Kontext ändert das Verhalten nie | Kontextfragen gehören nur zum Marketing | Map soll Grenzen der Funktionsfähigkeit im Nutzungskontext erkennen. |
| H25 | Welchen Status haben die AI-RMF-Playbook-Vorschläge? | Freiwillige, anpassbare Handlungsvorschläge | Gesetzliche Pflichtschritte in fester Reihenfolge | Eine automatische Zertifizierung | NIST beschreibt Playbook und Framework als freiwillig und kontextabhängig. |

## AGENTS.md

Quelle A: https://agents.md/; Quelle V: https://code.visualstudio.com/docs/agent-customization/custom-instructions

| ID | Frage | Richtig | Falsch 1 | Falsch 2 | Begründung | Quelle |
| --- | --- | --- | --- | --- | --- | --- |
| A01 | Welchen Zweck hat AGENTS.md in einem Repository? | Vorhersagbare Projektanweisungen für Coding-Agenten bereitstellen | Den Quellcode kompilieren | Die menschliche README ersetzen | Die Datei ist ein eigener Ort für Agentenkontext. | A |
| A02 | In welchem Format wird AGENTS.md geführt? | Markdown | JSON Schema | Binärdatei | Das offene Format verwendet gewöhnliches Markdown. | A |
| A03 | Wo beginnt eine einfache AGENTS.md-Einrichtung? | Mit einer AGENTS.md im Repository-Stamm | Mit einer Datei im Browsercache | Mit einer versteckten Datei in node_modules | Die Anleitung empfiehlt die Datei an der Repository-Wurzel. | A |
| A04 | Welche Angabe hilft Agenten beim lokalen Prüfen besonders? | Konkrete Build- und Testbefehle | Ein allgemeines Werbemotto | Nur die Zahl der Commits | Build und Testbefehle gehören zu den empfohlenen Inhalten. | A |
| A05 | Welche Projektkonvention eignet sich für AGENTS.md? | Konkrete Stil- und Testregeln | Eine Liste aller früheren Chatnachrichten | Ein geheimes Zugangstoken | Die Quelle nennt Code-Stil und Testanweisungen als Beispiele. | A |
| A06 | Wie verhalten sich README und AGENTS.md zueinander? | Sie ergänzen sich mit verschiedenen Zielgruppen | AGENTS.md macht jede README ungültig | Beide müssen denselben Text wortgleich enthalten | README richtet sich an Menschen; AGENTS.md enthält agentenspezifischen Kontext. | A |
| A07 | Warum ist eine eigene Agentendatei nützlich? | Sie hält detaillierte Agentenanweisungen aus der menschlichen README heraus | Sie versteckt Anforderungen vor dem Team | Sie garantiert korrekten Code | Die Quelle nennt präzise Agentenanweisungen bei knapper menschlicher README. | A |
| A08 | Was ist bei einem großen Monorepo für einzelne Pakete vorgesehen? | Zusätzliche AGENTS.md-Dateien in Unterverzeichnissen | Alle Regeln nur in einer globalen Chatnachricht | Eine Kopie jeder Datei in jedem Quellordner | Die Quelle empfiehlt verschachtelte Dateien für Teilprojekte. | A |
| A09 | Welche AGENTS.md gilt bei konkurrierenden Dateien laut Format-FAQ? | Die der bearbeiteten Datei nächstgelegene | Immer nur die am Repository-Stamm | Die alphabetisch erste | Die nächste Datei im Verzeichnisbaum hat Vorrang. | A |
| A10 | Was hat laut Format-FAQ Vorrang vor AGENTS.md-Anweisungen? | Explizite Anweisungen des Nutzers im Chat | Ein beliebiger Kommentar in einer Quelldatei | Die älteste Commit-Nachricht | Die FAQ nennt den ausdrücklichen Nutzerprompt als vorrangig. | A |
| A11 | Sind feste Pflichtabschnitte für AGENTS.md vorgeschrieben? | Nein, Überschriften können passend gewählt werden | Ja, exakt sechs feste Abschnitte | Ja, nur YAML-Frontmatter | Die FAQ nennt keine vorgeschriebenen Felder. | A |
| A13 | Was gilt für AGENTS.md über verschiedene Coding-Agenten hinweg? | Das Format kann von mehreren kompatiblen Werkzeugen genutzt werden | Es funktioniert nur mit einem einzelnen Anbieter | Es ist auf Java-Repositories begrenzt | Die Quelle beschreibt ein offenes, agentenübergreifendes Format. | A |
| A14 | Was gehört bei einem Paket mit eigenem Testbefehl in die nahe AGENTS.md? | Der für dieses Paket relevante Testbefehl | Nur der globale Build aller Firmenprojekte | Ein Befehl zum Löschen aller Repositories | Verschachtelte Anweisungen sollen das jeweilige Teilprojekt unterstützen. | A |
| A16 | Welcher Ort ist laut VS Code für geteilte Projektanweisungen an mehrere kompatible Agenten geeignet? | AGENTS.md | Persönliche Profileinstellungen eines Entwicklers | Ein Screenshot im Issue | VS Code beschreibt AGENTS.md als agentenübergreifendes Projektformat. | V |
| A17 | Welche VS-Code-Anweisungsart passt zu Regeln nur für bestimmte Dateien? | Eine .instructions.md-Datei mit passendem applyTo-Muster | Eine neue Repository-Lizenz | Die package-lock.json | VS Code beschreibt zielgerichtete Anweisungen über Dateimuster. | V |
| A18 | Wie sollten Anweisungen bei mehreren passenden Geltungsbereichen abgelegt werden? | Im engsten passenden Bereich | Ausschließlich im Benutzerprofil | Immer in jedem Verzeichnis dupliziert | VS Code empfiehlt den schmalsten passenden Scope. | V |
| A19 | Worauf kommt es bei einer .instructions.md-Datei für automatische Zuordnung an? | Auf ein passendes applyTo-Dateimuster | Auf den Dateinamen AGENTS.md | Auf ein npm-Skript | VS Code verwendet applyTo zum automatischen Anhängen. | V |
| A20 | Was beschreibt in VS Code eine .instructions.md-Datei für bedarfsweise Auswahl? | Eine aussagekräftige description | Eine beliebige Dateigröße | Die Zahl der Sterne im Repository | Die Beschreibung unterstützt die Relevanzauswahl. | V |
| A21 | Wie werden relative Dateipfade in VS-Code-Anweisungen aufgelöst? | Relativ zur Anweisungsdatei | Relativ zur Startseite des Browsers | Relativ zu node_modules | Die Dokumentation nennt die Anweisungsdatei als Basis. | V |
| A22 | Welche Pfadtrenner empfiehlt VS Code in Anweisungen für Portabilität? | Vorwärtsschrägstriche | Ausschließlich Windows-Backslashes | Gar keine Pfadtrenner | Die Dokumentation empfiehlt `/` für plattformübergreifende Pfade. | V |
| A23 | Was sollten Teams nach KI-generierten Anweisungsdateien tun? | Befehle und Konventionen gegen das Repository prüfen | Die Datei ungeprüft als Autorität behandeln | Nur den Dateinamen kontrollieren | VS Code fordert eine Prüfung der generierten Inhalte. | V |
| A24 | Welche Funktion hat eine Workspace-Anweisung gegenüber einer Nutzeranweisung? | Sie gilt für das jeweilige Projekt | Sie gilt automatisch für alle Projekte des Nutzers | Sie ist immer geheim | VS Code unterscheidet Projekt- und Nutzerscope. | V |
| A25 | Beeinflussen VS-Code-Custom-Instructions Inline-Vorschläge während des Tippens? | Nein | Ja, immer | Nur bei ausgeschaltetem Chat | VS Code weist ausdrücklich auf diese Grenze hin. | V |
| A26 | Wie soll AGENTS.md nach Änderungen am Projekt behandelt werden? | Als lebendes Dokument bei Bedarf aktualisieren | Nach dem ersten Commit nie wieder ändern | Nur vom Agenten während eines Builds überschreiben | Die AGENTS.md-FAQ empfiehlt laufende Pflege der Datei. | A |
| A27 | Wo sucht das AGENTS.md-Beispiel nach dem CI-Prüfplan? | Im Verzeichnis .github/workflows | In node_modules | Im Browsercache | Das Beispiel verweist für den CI-Plan auf .github/workflows. | A |

## EARS

Quelle E: https://alistairmavin.com/ears/

| ID | Frage | Richtig | Falsch 1 | Falsch 2 | Begründung |
| --- | --- | --- | --- | --- | --- |
| E01 | Wofür steht die Abkürzung EARS? | Easy Approach to Requirements Syntax | Extended Automated Review System | Engineering Acceptance Rule Set | Die Quelle löst die Abkürzung ausdrücklich auf. |
| E02 | Was schränkt EARS bei Anforderungen bewusst ein? | Die Form natürlicher Sprache | Die Wahl der Programmiersprache | Die Anzahl der Entwickler | EARS gibt Textanforderungen eine leichte Syntaxstruktur. |
| E03 | Wie sind die EARS-Klauseln angeordnet? | In einer festen Reihenfolge | Zufällig je nach Autor | Alphabetisch nach Schlüsselwort | Die feste Reihenfolge folgt einer zeitlichen Logik. |
| E04 | Welcher Teil steht in der allgemeinen Syntax vor einem optionalen Auslöser? | Die optionale Vorbedingung mit While | Die Systemantwort | Die Test-ID | Die Grundform beginnt mit optionalen While-Vorbedingungen. |
| E05 | Wie viele Trigger erlaubt die EARS-Grundregel in einer Anforderung? | Null oder einen | Genau drei | Beliebig viele | Das Regelwerk nennt null oder einen Trigger. |
| E06 | Wie viele Systemnamen verlangt die EARS-Grundregel? | Genau einen | Keinen | Mindestens zwei | Das Regelwerk nennt einen Systemnamen. |
| E07 | Wie viele Systemreaktionen verlangt die EARS-Grundregel? | Mindestens eine | Keine | Genau fünf | Das Regelwerk nennt eine oder mehrere Reaktionen. |
| E08 | Wie viele Vorbedingungen lässt die EARS-Grundregel zu? | Null oder mehrere | Immer genau eine | Höchstens eine | Das Regelwerk erlaubt null oder mehrere Vorbedingungen. |
| E09 | Welches Muster beschreibt eine ständig geltende Anforderung? | Ubiquitous ohne spezielles Schlüsselwort | Event driven mit When | Unwanted behaviour mit If-Then | Ubiquitous-Anforderungen gelten immer. |
| E10 | Welches Schlüsselwort kennzeichnet eine zustandsgetriebene Anforderung? | While | When | Where | While bindet die Antwort an einen andauernden Zustand. |
| E11 | Welches Schlüsselwort kennzeichnet einen Ereignisauslöser? | When | While | Where | When beschreibt die Reaktion auf ein eintretendes Ereignis. |
| E12 | Welches Schlüsselwort kennzeichnet eine Anforderung an ein enthaltenes optionales Merkmal? | Where | If | When | Where gilt für Produkte mit dem benannten Merkmal. |
| E13 | Welche Schlüsselwörter kennzeichnen unerwünschtes Verhalten? | If und Then | While und Where | Before und After | If-Then beschreibt die Systemreaktion auf unerwünschte Situationen. |
| E14 | Was kennzeichnet eine komplexe EARS-Anforderung? | Mehr als ein EARS-Schlüsselwort | Mehr als ein Systemname | Eine ausschließlich technische Implementierung | Die Quelle nennt Kombinationen einfacher Muster komplex. |
| E15 | Welche Reihenfolge passt für ein Ereignis in einem Zustand? | While Zustand, When Ereignis, System shall Reaktion | When Ereignis, While Zustand, Reaktion shall System | Reaktion, Zustand, Ereignis | Das komplexe Muster stellt die Vorbedingung vor den Auslöser. |
| E16 | Welches Muster passt zu „Solange ein Nutzer gesperrt ist, zeigt die Web-App einen Hinweis“? | State driven mit While | Event driven mit When | Optional feature mit Where | Die Bedingung ist ein andauernder Zustand. |
| E17 | Welches Muster passt zu „Wenn ein Login abgeschickt wird, prüft die Web-App die Eingabe“? | Event driven mit When | State driven mit While | Ubiquitous ohne Bedingung | Der Versand ist ein auslösendes Ereignis. |
| E18 | Welches Muster passt zu „Falls ein ungültiges Token ankommt, gibt die API einen Fehler aus“? | Unwanted behaviour mit If-Then | Optional feature mit Where | Ubiquitous ohne Bedingung | Das ungültige Token ist eine unerwünschte Situation. |
| E19 | Welches Muster passt zu einer Exportfunktion, die nur in einer Produktvariante vorhanden ist? | Optional feature mit Where | State driven mit While | Event driven mit When | Where grenzt Anforderungen nach vorhandenen Funktionen ein. |
| E20 | Welches Muster passt zu „Der Webdienst stellt alle API-Antworten als UTF-8 bereit“ ohne weitere Bedingung? | Ubiquitous | Optional feature | Unwanted behaviour | Eine jederzeit geltende Anforderung braucht kein EARS-Schlüsselwort. |
| E21 | Welches Problem ungebundener natürlicher Sprache adressiert EARS? | Mehrdeutige oder unpräzise Anforderungen | Zu viele Compilerwarnungen | Langsame Netzwerkverbindungen | Die Quelle nennt Ungenauigkeit natürlicher Sprache als Ausgangsproblem. |
| E22 | Welchen Werkzeugbedarf beschreibt die EARS-Quelle? | Kein Spezialwerkzeug ist nötig | Ein bestimmtes CASE-Werkzeug ist Pflicht | Ein trainiertes Sprachmodell ist Pflicht | EARS wird als leichtgewichtige Methode ohne Spezialwerkzeug beschrieben. |
| E23 | Für welche Autorengruppe hebt die Quelle eine besondere Eignung hervor? | Menschen, die Anforderungen auf Englisch schreiben, obwohl es nicht ihre Erstsprache ist | Nur Muttersprachler mit formaler Logikschulung | Nur Java-Entwickler | Die Quelle nennt ausdrücklich nicht englische Erstsprachler. |
| E24 | Aus welchem Arbeitskontext entstand EARS? | Analyse von Lufttüchtigkeitsregeln für ein Triebwerkssteuerungssystem | Entwicklung eines Web-CSS-Standards | Entwurf einer Datenbankabfragesprache | Mavin und Kollegen entwickelten EARS bei Rolls-Royce anhand dieser Regeln. |
| E25 | Wann wurde die EARS-Notation erstmals veröffentlicht? | 2009 | 1990 | 2025 | Die Quelle nennt 2009 als erste Veröffentlichung. |

## Problemverständnis und Änderungsgrenzen

Quelle P: https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results; Quelle O: https://openai.com/business/guides-and-resources/how-openai-uses-codex/

| ID | Frage | Richtig | Falsch 1 | Falsch 2 | Begründung | Quelle |
| --- | --- | --- | --- | --- | --- | --- |
| P01 | Was sollte ein gut abgegrenzter Auftrag zuerst benennen? | Das zu lösende Problem oder die gewünschte Arbeit | Nur die gewünschte Modellversion | Nur den Namen des Branches | GitHub nennt eine klare Problembeschreibung als Kern. | P |
| P02 | Welcher Zusatz macht ein Ergebnis eines Coding-Agenten besser überprüfbar? | Vollständige Akzeptanzkriterien | Ein möglichst langer Agentenname | Eine unbefristete Bearbeitungszeit | GitHub nennt Kriterien für die gute Lösung. | P |
| P03 | Welche Information kann den Änderungsumfang eines Agenten eingrenzen? | Hinweise auf die zu ändernden Dateien | Die Anzahl historischer Sterne | Ein zufälliger Beispielcommit | GitHub empfiehlt Dateihinweise im Auftrag. | P |
| P04 | Wie sollte ein Issue für einen Coding-Agenten geschrieben sein? | So, dass die Beschreibung als ausführbarer Arbeitsauftrag verständlich ist | Nur als Stichwort ohne Ziel | Ausschließlich als Screenshot ohne Text | GitHub empfiehlt, das Issue als Prompt zu betrachten. | P |
| P05 | Welche Aufgaben eignen sich laut GitHub besonders für erste Agenteneinsätze? | Einfachere, klar begrenzte Änderungen | Unklare Großmigrationen mit hohem Risiko | Produktionsvorfälle mit geheimen Kundendaten | Die Anleitung empfiehlt anfänglich einfache Aufgaben. | P |
| P06 | Welche Änderung nennt GitHub als Beispiel für eine geeignete Agentenaufgabe? | Verbesserte Testabdeckung | Vertrauliche Incident-Entscheidungen ohne Aufsicht | Ungeklärte Geschäftslogik mehrerer Systeme | Testabdeckung steht in der Liste einfacher Aufgaben. | P |
| P07 | Welche weitere geeignete Aufgabe nennt GitHub? | Eine begrenzte Korrektur der Zugänglichkeit | Vollständige Neuausrichtung aller Produkte | Freigabe aller Sicherheitsrisiken | Zugänglichkeitsverbesserungen werden als Beispiel genannt. | P |
| P08 | Woran erkennt man eine komplexe Aufgabe, die eher menschliche Steuerung braucht? | Sie verlangt breites repositoryübergreifendes Wissen | Sie ändert eine lokale Beschriftung | Sie hat einen klaren kleinen Testfall | GitHub nennt breit angelegte kontextreiche Refactorings als schwierig. | P |
| P09 | Welche Art Aufgabe soll nicht ohne menschliche Risikoprüfung einem Agenten überlassen werden? | Eine Änderung mit Authentifizierungsfolgen | Eine kleine dokumentierte UI-Korrektur | Ein isolierter Testname | GitHub nennt Authentifizierung unter sensitiven Aufgaben. | P |
| P10 | Welcher Datenbezug erhöht die Vorsicht bei einem Agentenauftrag? | Personenbezogene Daten | Ein öffentliches Dummy-Beispiel | Ein lokal erzeugter Teststring | GitHub nennt PII als sensible Aufgabe. | P |
| P11 | Warum ist eine offene, unklare Aufgabe problematisch? | Der Lösungsrahmen ist nicht hinreichend definiert | Die Quelldatei ist zu kurz | Der Testlauf ist zu schnell | GitHub unterscheidet mehrdeutige Aufgaben als menschlich zu klären. | P |
| P13 | Was kann ein Agent vor einem Patch in unbekanntem Code klären? | Wo die Kernlogik einer Funktion liegt | Ob die README eine bestimmte Schrift nutzt | Welche Datei zuletzt alphabetisch steht | OpenAI nennt das Lokalisieren von Kernlogik. | O |
| P14 | Was hilft, die Auswirkung einer API-Änderung zu verstehen? | Beziehungen zwischen Diensten oder Modulen abbilden | Nur den Zielmethodennamen lesen | Nur die letzte Commit-Nachricht zählen | OpenAI nennt die Beziehungen zwischen Diensten und Modulen. | O |
| P15 | Welche Untersuchung hilft bei einem Spring-Webdienst vor einer Änderung des Endpunkts? | Den Datenfluss vom Eintritt bis zur Antwort nachvollziehen | Nur den Browser-Tabtitel ansehen | Nur die Anzahl der Klassen zählen | OpenAI nennt Datenflussanalyse und ein Beispiel vom Entry-Point bis zur Antwort. | O |
| P16 | Was kann bei einer Incident-Analyse die Änderungsgrenze aufzeigen? | Wie Fehlerzustände durch Komponenten weitergegeben werden | Nur wie viele Dateien im Repository liegen | Nur welche UI-Farbe verwendet wird | OpenAI nennt das Nachverfolgen von Fehlerausbreitung. | O |
| P17 | Welche Recherche kann einen unbeabsichtigten Architekturbruch vermeiden? | Bestehende Architekturmuster des Projekts erkennen | Neue Schichten ohne Bestandsprüfung hinzufügen | Alle Imports unverändert kopieren | OpenAI nennt das Auffinden von Architekturmustern. | O |
| P18 | Welche Gefahr besteht bei einer breit angelegten Migration? | Struktur und Abhängigkeiten werden durch reine Textersetzung übersehen | Jede Änderung ist automatisch lokal | Tests sind grundsätzlich unnötig | OpenAI beschreibt Mehrdateien- und Abhängigkeitsbewusstsein über Regex hinaus. | O |
| P19 | Was ist bei einer Leistungsoptimierung vor dem Patch zu suchen? | Konkrete langsame oder speicherintensive Pfade | Nur ein neues Caching-Framework | Beliebige Funktionen ohne Messbezug | OpenAI nennt die Analyse realer Engpässe. | O |
| P20 | Was sollte bei einer geplanten Cache-Änderung als Erstes erkennbar sein? | Wiederholte teure Operationen, die Caching lohnen könnten | Nur die gewünschte Cache-Bibliothek | Nur die Anzahl der React-Komponenten | OpenAI nennt wiederholte teure Operationen als Untersuchungsziel. | O |
| P21 | Welche Fälle sind bei einer neuen Funktion als Akzeptanzkriterien wichtig? | Randfälle wie leere Eingaben und Maximalwerte | Nur der Happy Path ohne Grenzwerte | Nur Screenshots der Startseite | OpenAI nennt leere Eingaben und Maximalwerte als häufig übersehene Bedingungen. | O |
| P22 | Was sollte ein Team bei einer KI-generierten Testergänzung prüfen? | Ob Fehlerpfade und ungewöhnliche gültige Zustände abgedeckt sind | Nur die Anzahl der Testzeilen | Nur den Dateinamen | OpenAI nennt Failure Paths und ungewöhnliche gültige Zustände. | O |
| P23 | Was hilft bei einer offenen Designfrage vor der Implementierung? | Alternativen und Trade-offs sichtbar machen | Die erste Lösung stillschweigend festschreiben | Alle Annahmen als Fakten ausgeben | OpenAI nennt Exploration, Alternativen und das Prüfen von Annahmen. | O |
| P24 | Was sollte eine technische Änderung aus Nutzerfeedback zunächst liefern? | Einen überprüfbaren Entwurf, der fachlich verfeinert wird | Sofortige ungeprüfte Freigabe | Eine zwingende Produktionsmigration | OpenAI beschreibt Startercode als Rohentwurf zur späteren Verfeinerung. | O |
| P25 | Woran wird ein Agentenvorschlag nach einer ersten Umsetzung bewertet? | Am Diff gegen Ziel und Kriterien | Allein an der Antwortlänge | Nur an der Geschwindigkeit des Agenten | GitHub empfiehlt Diff-Prüfung und iterative Korrektur. | P |
| P26 | Welche Aufgabe sollte laut GitHub eher bei der lernenden Person bleiben? | Eine Aufgabe, bei der sie selbst tiefes Verständnis erwerben möchte | Eine routinemäßige Dokumentationskorrektur | Ein klar begrenzter Barrierefreiheitsfix | GitHub nennt Lernaufgaben mit gewünschtem tieferem Verständnis als eher menschlich. | P |

## Research, Plan und Tasks

Quelle R: https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate; Quelle O: https://openai.com/business/guides-and-resources/how-openai-uses-codex/; Quelle T: https://docs.github.com/en/copilot/tutorials/optimize-ai-usage

| ID | Frage | Richtig | Falsch 1 | Falsch 2 | Begründung | Quelle |
| --- | --- | --- | --- | --- | --- | --- |
| R01 | Was steht im beschriebenen Arbeitsablauf vor einem Implementierungsplan? | Die Untersuchung des Repositorys | Das sofortige Öffnen des Pull Requests | Die Bereitstellung im Produktivbetrieb | GitHub beschreibt zuerst Recherche, dann Plan und Änderung. | R |
| R03 | Wozu dient Research vor einer Änderung? | Bestehendes Verhalten und Annahmen prüfen | Schon die endgültige Implementierung freigeben | Die fachliche Verantwortung abgeben | Research untersucht Code und Annahmen vor dem Plan. | R |
| R04 | Wie kann eine Research-Sitzung vertieft werden? | Mit gezielten Folgefragen | Nur durch Neustart ohne Kontext | Indem der Diff sofort übernommen wird | GitHub beschreibt Follow-up-Fragen zur Steuerung. | R |
| R05 | Was sollte nach einer Research-Antwort passieren? | Die Antwort prüfen und offene Punkte nachfragen | Die Antwort als Beweis für Korrektheit behandeln | Alle Tests deaktivieren | GitHub nennt Review und Follow-ups nach Research. | R |
| R06 | Was soll ein Plan vor dem Coding klären? | Den vorgesehenen Lösungsansatz | Die endgültige Zahl der Commits ohne Sachbezug | Nur die Farbe der Entwicklungsumgebung | Die Planphase legt den Ansatz zur Prüfung vor. | R |
| R07 | Was geschieht, wenn der vorgeschlagene Plan die Absicht nicht trifft? | Er wird vor der Umsetzung iteriert | Er wird unverändert programmiert | Er wird ohne Prüfung archiviert | GitHub fordert Review und Plananpassung. | R |
| R09 | Wie wird der Plan im GitHub-Ablauf anschließend verwendet? | Als Bezug für iterative Codeänderungen | Als Ersatz für das Repository | Als automatischer Merge-Befehl | Die Änderungen folgen nach Research und Planung. | R |
| R11 | Wann wird im beschriebenen Ablauf ein Pull Request erstellt? | Wenn Änderungen und Review dafür bereit sind | Zwingend vor jeder Recherche | Automatisch nach jeder Agentenantwort | Der PR steht am Ende der Iteration. | R |
| R12 | Wie kann visuelle Information in einem Forschungsauftrag helfen? | Einen relevanten Screenshot oder eine Skizze beilegen | Ein geheimes Token im Bild verstecken | Das textliche Ziel vollständig weglassen | GitHub beschreibt Bilder als ergänzenden Kontext. | R |
| R13 | Was empfiehlt OpenAI für größere Änderungen als ersten Schritt? | Zunächst einen Implementierungsplan anfragen | Sofort alle Dateien ändern lassen | Nur den Build starten | Die Quelle beschreibt einen Planungsmodus vor dem Codieren. | O |
| R14 | Wie groß sind laut OpenAI typische gut abgrenzbare Agentenaufgaben? | Etwa eine Stunde menschliche Arbeit oder einige hundert Codezeilen | Unbegrenzt viele gekoppelte Projekte | Immer genau eine Zeile | Die Quelle nennt diesen Größenbereich als Erfahrung. | O |
| R15 | Welche Angaben machen einen technischen Planungsauftrag konkreter? | Relevante Pfade, Komponenten und Dokumentauszüge | Nur ein einzelnes Schlagwort | Ausschließlich die Modelltemperatur | OpenAI empfiehlt konkrete Struktur und Kontext. | O |
| R16 | Was kann ein Plan aus vorhandenen Codebeispielen übernehmen? | Bewährte Muster eines benannten Moduls | Ungeprüfte externe Geheimnisse | Beliebige fremde Paketnamen | OpenAI empfiehlt einen konkreten Referenzmodul-Hinweis. | O |
| R17 | Was kann als kleiner Task aus einer großen Änderung herausgelöst werden? | Ein abgegrenzter Test- oder Refactoring-Schritt | Die gesamte Migration ohne Prüfkriterium | Eine unklare Sammelaufgabe | Die Quellen empfehlen gut begrenzte iterative Arbeiten. | O |
| R18 | Wie können Randideen während einer laufenden Änderung erfasst werden? | Als separate spätere Aufgaben | Indem sie ungeprüft in den aktuellen Patch gelangen | Indem sie die Spec stillschweigend ersetzen | OpenAI beschreibt die Task Queue als leichten Backlog. | O |
| R19 | Wozu dient ein konfigurierter Startablauf für einen Coding-Agenten? | Er verringert wiederkehrende Umgebungsfehler | Er ersetzt Akzeptanzkriterien | Er entscheidet Fachfragen automatisch | OpenAI nennt Startup-Skript und Umgebung als Fehlerreduktion. | O |
| R20 | Was sollte bei wiederholten Buildfehlern vor weiteren Tasks überprüft werden? | Die Entwicklungsumgebung des Agenten | Nur die Zahl der Promptwörter | Die Reihenfolge der Dateinamen | OpenAI empfiehlt iterative Korrektur der Umgebung. | O |
| R21 | Wozu können mehrere Lösungsvorschläge für einen schwierigen Task dienen? | Alternativen vergleichen und einen stärkeren Ansatz wählen | Den ersten Vorschlag ungeprüft verpflichtend machen | Tests durch Abstimmung ersetzen | OpenAI beschreibt mehrere Antworten zur Exploration. | O |
| R22 | Wie bleibt eine unterbrochene Aufgabe nachvollziehbar? | Teilstände und offene Schritte festhalten | Alles nur im flüchtigen Chatgedächtnis belassen | Nur den letzten Konsolenbefehl merken | OpenAI nennt das Erfassen unfertiger Arbeit für spätere Wiederaufnahme. | O |
| R23 | Welche Research-Frage unterstützt eine Migrationsplanung? | Wo dasselbe veraltete Muster sonst noch verwendet wird | Welche Datei die meisten Leerzeichen hat | Welches Theme im Editor aktiv ist | OpenAI nennt die Suche nach ähnlichen Mustern als Vorbereitung. | O |
| R24 | Was ist bei einer neuen Erkenntnis während der Implementierung sinnvoll? | Annahmen und Plan erneut prüfen und den Task anpassen | Den Befund ignorieren | Den bisherigen Plan als unveränderlich behandeln | Die Quellen beschreiben iterative Forschung, Planung und Änderung. | R |
| R25 | Wie werden Umsetzungsschritte im beschriebenen Ablauf überprüfbar? | Durch kleine Änderungen mit Diff-Review und gezielten Folgeaufträgen | Durch einen einzigen unprüfbaren Großpatch | Durch automatisches Vertrauen in die erste Antwort | GitHub beschreibt iterative Änderungen und Review. | R |
| R26 | Warum empfiehlt GitHub, Research, Plan und Umsetzung in getrennten Phasen zu bearbeiten? | Gemeinsame lange Sitzungen sammeln schnell irrelevanten Kontext an | Weil der Quellcode sonst nicht kompiliert | Weil jede Phase einen anderen Git-Server benötigt | GitHub nennt wachsenden und irrelevanten Kontext als Grund für die Trennung. | T |
| R27 | Welche Modellwahl empfiehlt GitHub für die Planungsphase im Vergleich zur Ausführung? | Stärkeres Reasoning für den Plan, günstigeres passendes Modell für die Umsetzung | Immer dasselbe teuerste Modell für beide Phasen | Nur ein Formatierungsmodell für alle Entscheidungen | Die Quelle unterscheidet anspruchsvolle Planung und fokussierte Ausführung. | T |
| R28 | Was hilft laut GitHub beim Übergang zwischen Research, Plan und Umsetzung gegen unnötigen Alt-Kontext? | Eine neue Sitzung zwischen Phasen beginnen | Alle vorherigen Chatnachrichten ungefiltert anhängen | Den gesamten Repository-Inhalt in jeden Prompt kopieren | GitHub empfiehlt neue Sitzungen zwischen den Phasen. | T |

## Spec-Driven Development mit OpenSpec

Quelle S: https://openspec.dev/docs/schemas/spec-driven; Quelle Q: https://openspec.dev/docs/quickstart

| ID | Frage | Richtig | Falsch 1 | Falsch 2 | Begründung | Quelle |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | Welches OpenSpec-Schema beschreibt den eingebauten Standardablauf? | spec-driven | test-only | deploy-first | Die Dokumentation nennt spec-driven als Standardschema. | S |
| S02 | Welches Artefakt begründet zuerst, warum eine Änderung nötig ist? | proposal.md | tasks.md | design.md | Das Proposal beschreibt das Warum. | S |
| S03 | Welches Artefakt beschreibt geändertes beobachtbares Verhalten? | Eine Spec unter specs/ | Der Lockfile | Ein Konsolenprotokoll | OpenSpec ordnet Verhalten den Specs zu. | S |
| S04 | Welches Artefakt hält die technische Umsetzungsidee fest? | design.md | proposal.md | README.md | Das Design behandelt das Wie. | S |
| S05 | Welches Artefakt enthält die prüfbare Umsetzungsliste? | tasks.md | package-lock.json | proposal.md | Tasks sind die Implementierungscheckliste. | S |
| S06 | Was ist die Standardreihenfolge beim Entwurf der Artefakte? | Proposal, dann Specs und Design, danach Tasks | Tasks, dann Code, danach Proposal | Design erst nach dem Archivieren | Das Proposal steht zuerst, Tasks folgen auf Specs und Design. | S |
| S07 | In welcher Reihenfolge können Specs und Design nach dem Proposal entstehen? | In beliebiger Reihenfolge vor Tasks | Nur Design vor Specs | Erst nach dem Apply-Schritt | Beide folgen dem Proposal und gehen Tasks voraus. | S |
| S08 | Wann kann design.md im Standardschema entfallen? | Wenn keine seiner Bedingungen zutrifft | Immer bei neuen Abhängigkeiten | Immer bei Architekturänderungen | OpenSpec lässt Design bei unnötigem Bedarf aus. | S |
| S09 | Unter welcher Bedingung dürfen Specs im Schema ausgelassen werden? | Wenn skip_specs ausdrücklich gesetzt wird | Sobald Tests existieren | Sobald der Prompt kurz ist | Die Schema-Dokumentation nennt skip_specs. | S |
| S10 | Wo liegt eine Delta-Spec für eine neue Capability? | specs/<capability-path>/spec.md im Änderungsordner | Direkt in package.json | Ausschließlich im Chatprotokoll | Das Standardschema nutzt einen Pfad je Capability. | S |
| S11 | Was sollen Specs primär beschreiben? | Was Nutzer oder andere Systeme beobachten können | Interne Klassennamen als Pflicht | Eine genaue Schrittfolge der Implementierung | Die Spec ist ein Verhaltensvertrag. | S |
| S12 | Welche Angabe gehört zu einem guten Spec-Szenario? | Eingabe beziehungsweise Bedingung und erwartetes Ergebnis | Nur der Name einer Bibliothek | Nur die geschätzte Arbeitszeit | OpenSpec betont prüfbare Szenarien mit WHEN und THEN. | S |
| S13 | Welcher Inhalt gehört eher ins Design als in eine Spec? | Die Wahl einer Bibliothek oder internen Struktur | Das sichtbare Ergebnis bei fehlerhafter Eingabe | Eine externe Sicherheitsgrenze | Designs erklären technische Entscheidungen. | S |
| S14 | Was sollte eine Spec bei Fehlerfällen festhalten? | Das beobachtbare Verhalten im Fehlerfall | Nur den internen Stacktrace | Nur die Zahl der Codezeilen | OpenSpec nennt Fehlerbedingungen als Spec-Inhalt. | S |
| S15 | Was bedeutet ein Delta-Abschnitt ADDED Requirements? | Neue Anforderungen einer Capability | Eine bloße Umbenennung ohne Änderung | Das Löschen alter Tests | ADDED kennzeichnet hinzugefügtes Verhalten. | S |
| S16 | Was erfordert ein MODIFIED-Abschnitt für eine bestehende Anforderung? | Den vollständigen aktualisierten Anforderungsblock | Nur die geänderte Textzeile | Ausschließlich eine neue Überschrift | OpenSpec warnt vor Teilblöcken bei MODIFIED. | S |
| S17 | Was muss eine entfernte Anforderung im Delta begründen? | Grund und Migration | Nur eine neue Versionsnummer | Nur den Namen des Autors | REMOVED fordert Reason und Migration. | S |
| S18 | Was unterscheidet RENAMED von MODIFIED? | RENAMED ändert nur den Namen | RENAMED ersetzt alle Verhaltensregeln | RENAMED startet automatisch die Tests | Die Delta-Operation RENAMED ist für reine Namen. | S |
| S19 | Wie wird in OpenSpec ein Szenario als Überschrift markiert? | Mit vier Markdown-Hashes | Mit einem einzigen Hash | Nur mit einem Bullet | Die Schema-Anleitung verlangt #### für Szenarien. | S |
| S20 | Wann beginnt Apply im Standardschema? | Wenn tasks.md mit mindestens einem Task vorliegt | Schon vor dem Proposal | Erst nach dem Archiv | Apply benötigt die Taskliste. | S |
| S21 | Wie verfolgt Apply die Umsetzung? | Über Checkboxen in tasks.md | Über private Chats | Über die Zahl der Pull-Request-Kommentare | Das Schema verfolgt markierte Tasks. | S |
| S22 | Was soll ein einzelner Task laut Schema enthalten? | Einen konkreten Nachweis der Fertigstellung | Nur ein loses Stichwort | Eine unbefristete Sammelaufgabe | OpenSpec fordert für Tasks einen Verifikationsweg. | S |
| S23 | Was passiert beim Archivieren mit Delta-Anforderungen? | Sie werden in die dauerhaften Specs übernommen | Sie werden ohne Übernahme gelöscht | Sie werden in den Lockfile verschoben | Der Quickstart beschreibt die Übernahme in Haupt-Specs. | Q |
| S24 | Was passiert beim Archivieren mit dem Änderungsordner? | Er wird ins Archiv verschoben | Er bleibt als aktiver Ordner stehen | Er wird in Quellcode umgewandelt | Der Quickstart zeigt den Archivschritt. | Q |
| S25 | Wie ist OpenSpec im Verhältnis zu Git zu verstehen? | Der Änderungsablauf ist von Git-Commits getrennt | Es ersetzt Git vollständig | Es verhindert jeden Commit | Der Quickstart nennt Git als getrenntes Anliegen. | Q |
