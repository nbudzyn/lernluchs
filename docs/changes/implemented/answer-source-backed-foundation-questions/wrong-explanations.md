# Begründungen der falschen Optionen

Die Spalten B und C erklären die jeweilige Falschaussage selbst. Sie werden im vollständigen Prüf-Prompt den Fragen nach stabiler ID zugeordnet.

| ID | Erklärung B | Erklärung C |
| --- | --- | --- |
| H01 | Plan, Build, Test und Deploy sind Entwicklungsphasen, keine vier AI-RMF-Core-Funktionen. | Collect, Train, Prompt und Release betreffen Modellarbeit, aber nicht die Core-Funktionen des AI RMF. |
| H02 | Map klärt den Nutzungskontext und ist nicht die übergreifende Governance-Funktion. | Measure bewertet Risiken; NIST beschreibt es nicht als querschnittliche Funktion. |
| H03 | Manage behandelt Risiken auf Basis der vorher erfassten Kontexte; NIST nennt es nicht als typischen ersten Schritt nach Govern. | Ein Abschlussaudit ist kein im Core vorgesehener Startpunkt der laufenden Risikoarbeit. |
| H04 | Die Core-Funktionen müssen laut NIST nicht als starre lineare Sequenz abgearbeitet werden. | NIST sagt ausdrücklich, dass die Aktionen keine verpflichtende Checkliste bilden. |
| H05 | Map entscheidet noch nicht über eine Betriebsfreigabe; es erfasst und strukturiert den Kontext. | Map liefert Grundlagen für Measure und Manage, ersetzt diese Funktionen aber nicht. |
| H06 | Die Parameterzahl ist kein Kriterium, das NIST hier für die grundsätzliche Eignung einer KI-Lösung nennt. | Abgeschlossene Dokumentation beantwortet nicht die Frage, ob KI für den Zweck angemessen ist. |
| H07 | Der Anbieter allein deckt Perspektiven von Nutzenden und Betroffenen nicht ab. | Die Geschäftsführung allein ersetzt keine verschiedenen internen und externen Perspektiven. |
| H08 | NIST hält Tests für einen Teil der Risikoarbeit; es sagt nicht, dass sie grundsätzlich nutzlos seien. | NIST beschreibt Risiken über Lebenszyklus und Nutzungskontext hinweg, nicht ausschließlich aus Trainingsdaten. |
| H09 | Führungskräfte tragen Risikoentscheidungen; sie müssen nicht jede Modellantwort selbst erstellen. | Technische Tests sind nicht die alleinige Aufgabe der Führung und ersetzen Risikoentscheidungen nicht. |
| H10 | Unbenannte Verantwortlichkeiten widersprechen den geforderten klaren Rollen und Kommunikationswegen. | Informelle Chatabsprachen erfüllen die geforderte dokumentierte Zuständigkeitsstruktur nicht. |
| H11 | Ein unveränderliches Verfahren widerspricht laufender Überwachung und periodischer Überprüfung. | Risikomanagement soll vorausschauend und kontinuierlich erfolgen, nicht erst nach einem Vorfall. |
| H12 | Die Modellgröße bestimmt nach Govern 1.3 nicht allein den erforderlichen Umfang der Risikoarbeit. | Die Entwicklerzahl ist kein Ersatz für die organisatorische Risikotoleranz. |
| H13 | NIST fordert auch während des Lebenszyklus Überwachung, nicht nur eine Prüfung vor dem Release. | Das Modell kann seine eigene unabhängige Überwachung und menschliche Zuständigkeit nicht ersetzen. |
| H14 | Ein nicht erfasster Bestand widerspricht der in Govern 1.6 vorgesehenen Inventarisierung. | Die Inventarisierung ist eine geplante Governance-Aufgabe, keine reine Reaktion auf Ausfälle. |
| H15 | Govern 1.7 fordert ausdrücklich Verfahren für sichere Außerbetriebnahme. | Nur Modellgewichte zu löschen berücksichtigt nicht die Risiken des gesamten KI-Systems. |
| H16 | Governance umfasst nach NIST mehr als die einmalige Auswahl eines Modells. | Promptentwurf ist nur ein Ausschnitt, kein Ersatz für Lebenszyklus-Governance. |
| H17 | Dokumentation kann menschliche Prüfung unterstützen, aber nicht fachliche Entscheidungen selbst treffen. | Dokumentation stärkt Rechenschaft; sie beseitigt Risiken nicht automatisch. |
| H18 | Zufällige Rollenverteilung widerspricht der geforderten Definition von Zuständigkeiten und Aufsicht. | Das Modell kann die organisatorisch festzulegende menschliche Aufsicht nicht allein bestimmen. |
| H19 | Vielfältige Perspektiven ergänzen Messung, ersetzen die Measure-Funktion aber nicht. | Ein diverses Team kann Risiken besser erkennen, garantiert aber keine Risikofreiheit. |
| H20 | Nur positives internes Feedback schließt gerade die geforderten externen Auswirkungen aus. | Eine Anbieterbewertung ersetzt Rückmeldungen von weiteren betroffenen Gruppen nicht. |
| H21 | Der Kaufpreis beschreibt keine Risiken durch Drittsoftware, Daten oder Lieferketten. | Integrationsgeschwindigkeit deckt die von Govern 6 genannten Drittparteirisiken nicht ab. |
| H22 | Govern 6.2 verlangt Vorbereitung auf Ausfälle, nicht bloßes Abwarten bis zum nächsten Release. | Ein neuer Prompt ist kein Notfallverfahren für den Ausfall einer Drittanbieterkomponente. |
| H23 | Die Zahl der UI-Klicks ist kein Ersatz für Risiken durch vorhersehbare Zweckentfremdung. | Trainingsspeicherbedarf beantwortet nicht, welche Schäden außerhalb der vorgesehenen Nutzung entstehen können. |
| H24 | NIST weist gerade darauf hin, dass Systeme außerhalb ihres vorgesehenen Kontexts nicht funktionieren können. | Map behandelt Nutzungskontext als Teil der Risikoarbeit, nicht bloß als Marketingfrage. |
| H25 | NIST bezeichnet Framework und Playbook als freiwillig; es sind keine gesetzlich vorgeschriebenen Pflichtschritte. | Das Playbook liefert Vorschläge, keine automatische Zertifizierung eines Systems. |
| A01 | AGENTS.md ist eine Anweisungsdatei und kein Compiler oder Buildwerkzeug. | Die menschliche README bleibt bestehen und wird durch agentenspezifischen Kontext ergänzt. |
| A02 | AGENTS.md verwendet keine JSON-Schema-Struktur als vorgeschriebenes Dateiformat. | Eine Binärdatei wäre nicht das lesbare Markdown-Format des Standards. |
| A03 | Der Browsercache gehört nicht zum Repository und ist kein vorgesehener Ort für Projektanweisungen. | node_modules enthält Abhängigkeiten und ist nicht der empfohlene Einstiegspunkt für Projektanweisungen. |
| A04 | Ein Werbemotto erklärt dem Agenten nicht, wie das Projekt gebaut und getestet wird. | Die Commitzahl gibt keinen ausführbaren Test- oder Buildbefehl an. |
| A05 | Alte Chatnachrichten sind kein gezielt gepflegter Bestand an Projektkonventionen. | Zugangstoken sind Geheimnisse und keine geeigneten Projektanweisungen. |
| A06 | Die Quelle beschreibt AGENTS.md als Ergänzung, nicht als Ungültigmachen der README. | Die getrennten Zielgruppen machen eine wortgleiche Dopplung nicht erforderlich. |
| A07 | Die Datei soll präzise Arbeitsanweisungen sichtbar machen, nicht Anforderungen vor dem Team verbergen. | Kontext verbessert die Arbeit, garantiert aber keine korrekte Implementierung. |
| A08 | Eine globale Chatnachricht bildet die lokalen Regeln der Pakete nicht dauerhaft im Repository ab. | Eine Datei in jedem Quellordner wäre keine gezielte Verschachtelung nach Teilprojekten. |
| A09 | Die Stammdatei kann durch eine nähere AGENTS.md für ein Teilprojekt konkretisiert werden. | Alphabetische Reihenfolge spielt bei der beschriebenen Vorrangregel keine Rolle. |
| A10 | Ein beliebiger Quellkommentar hat keinen generellen Vorrang vor Agentenanweisungen. | Eine alte Commit-Nachricht ist keine aktuelle ausdrückliche Nutzeranweisung. |
| A11 | Die FAQ schreibt keine sechs festen Abschnitte vor. | YAML-Frontmatter ist für AGENTS.md nicht vorgeschrieben. |
| A13 | Die Quelle führt mehrere kompatible Coding-Agenten auf und bindet das Format nicht an einen Anbieter. | Das Format gilt für Coding-Projekte allgemein und ist nicht auf Java beschränkt. |
| A14 | Ein globaler Build aller Projekte beschreibt den nötigen lokalen Prüfbefehl des Pakets nicht. | Ein Löschbefehl hilft nicht bei der sicheren Prüfung des Teilprojekts. |
| A16 | Persönliche Profileinstellungen werden nicht als geteilte Repository-Anweisung versioniert. | Ein Issue-Screenshot ist kein wiederverwendbares projektweites Anweisungsformat. |
| A17 | Eine Lizenz regelt Nutzungsrechte, nicht die automatische Dateimuster-Zuordnung von Instruktionen. | package-lock.json hält Abhängigkeiten fest und ist keine Datei für gezielte Agentenregeln. |
| A18 | Das Nutzerprofil gilt über Projekte hinweg und wäre für eine nur lokale Regel zu breit. | Viele Kopien erhöhen Widerspruchsrisiken; die Dokumentation empfiehlt den engsten passenden Scope. |
| A19 | AGENTS.md ist ein anderes Format und nicht das applyTo-Feld einer .instructions.md-Datei. | Ein npm-Skript bestimmt nicht, wann VS Code eine Anweisungsdatei anhängt. |
| A20 | Dateigröße beschreibt keine thematische Relevanz einer Anweisung. | Repository-Sterne haben keinen Bezug zur Auswahl einer Instruktionsdatei. |
| A21 | Die Browserstartseite ist kein Bezugspunkt relativer Pfade in einer Anweisungsdatei. | node_modules ist nicht der dokumentierte Pfadbezug. |
| A22 | Windows-Backslashes sind nicht der empfohlene portable Pfadtrenner. | Ohne Trenner lassen sich verschachtelte Pfade nicht wie dokumentiert angeben. |
| A23 | Generierter Text kann falsche Befehle enthalten und ist deshalb nicht ungeprüft verbindlich. | Der Dateiname allein sagt nichts über die Richtigkeit von Befehlen und Konventionen aus. |
| A24 | Projektanweisungen gelten nicht automatisch als persönliche Präferenz für alle Repositories. | Workspace-Dateien sind im Projekt sichtbar und nicht per Definition geheim. |
| A25 | Die VS-Code-Dokumentation schließt Inline-Vorschläge ausdrücklich von diesen Anweisungen aus. | Die genannte Grenze hängt nicht davon ab, ob der Chat eingeschaltet ist. |
| A26 | Die FAQ beschreibt AGENTS.md als lebende Dokumentation; dauerhaftes Einfrieren würde neue Projektregeln ausschließen. | Ein Build überschreibt Projektanweisungen nicht automatisch und sollte sie nicht unkontrolliert verändern. |
| A27 | node_modules enthält installierte Abhängigkeiten, nicht die GitHub-CI-Workflows des Projekts. | Ein Browsercache ist kein Repository-Verzeichnis für den CI-Prüfplan. |
| E01 | Extended Automated Review System ist nicht die ausgeschriebene Bezeichnung der EARS-Notation. | Engineering Acceptance Rule Set ist nicht die von Mavin genannte Langform. |
| E02 | EARS formuliert Anforderungen und legt keine Programmiersprache fest. | Die Methode begrenzt Textmuster, nicht die Teamgröße. |
| E03 | Die Klauseln haben laut EARS eine feste zeitliche Reihenfolge, die Autoren nicht frei wechseln. | Alphabetische Sortierung würde die vorgeschriebene Klauselabfolge verletzen. |
| E04 | Die Systemantwort folgt Systemname und Bedingungen; sie steht nicht vor dem Trigger. | Eine Test-ID ist kein Bestandteil der allgemeinen EARS-Syntax. |
| E05 | Das Regelwerk erlaubt höchstens einen Trigger, nicht genau drei. | Mehrere Trigger in derselben Anforderung widersprechen der genannten Grundregel. |
| E06 | Ohne Systemnamen wäre nicht klar, welches System reagieren soll. | Zwei Systemnamen widersprechen der Regel mit genau einem Systemnamen. |
| E07 | Eine Anforderung ohne Systemreaktion beschreibt kein gefordertes Verhalten. | EARS verlangt eine oder mehrere Reaktionen, nicht genau fünf. |
| E08 | Eine Vorbedingung ist optional und daher nicht immer vorhanden. | EARS lässt ausdrücklich auch mehrere Vorbedingungen zu. |
| E09 | When kennzeichnet ein auslösendes Ereignis, nicht eine ständig geltende Regel. | If-Then adressiert unerwünschtes Verhalten, nicht die bedingungslose Geltung. |
| E10 | When markiert einen Zeitpunkt oder Auslöser statt einen andauernden Zustand. | Where bezieht sich auf vorhandene optionale Funktionen. |
| E11 | While gilt während eines Zustands, nicht für das Eintreten eines Ereignisses. | Where markiert eine enthaltene Produktfunktion, keinen Ereigniszeitpunkt. |
| E12 | If leitet eine unerwünschte Situation ein und bezeichnet kein optionales Merkmal. | When beschreibt einen Trigger unabhängig von der Produktvariante. |
| E13 | While und Where stehen für Zustand und enthaltenes Merkmal, nicht für den Fehlerfall. | Before und After gehören nicht zu den beschriebenen If-Then-Schlüsselwörtern. |
| E14 | Komplexität wird hier über kombinierte Muster bestimmt, nicht über mehrere Systemnamen. | Eine konkrete Implementierung macht die Anforderung nicht zum komplexen EARS-Muster. |
| E15 | Dieses Muster stellt den Trigger vor den Zustand und vertauscht System und Reaktion. | Diese Folge entspricht weder der zeitlichen Klauselordnung noch der EARS-Grundform. |
| E16 | Der gesperrte Zustand besteht fort; ein einzelner When-Trigger ist nicht genannt. | Die Sperre ist keine optionale Produktfunktion, die mit Where eingeführt wird. |
| E17 | Das Abschicken ist ein einzelnes Ereignis, kein fortbestehender While-Zustand. | Die Prüfung ist an das Abschicken gebunden und damit nicht bedingungslos. |
| E18 | Das ungültige Token ist kein nur in einer Produktvariante vorhandenes Merkmal. | Die Fehlerreaktion gilt gerade unter einer Bedingung und ist nicht allgegenwärtig. |
| E19 | Die Frage unterscheidet Produktvarianten, nicht einen fortbestehenden Laufzeitzustand. | Das Vorhandensein einer Funktion ist kein einzelnes auslösendes Ereignis. |
| E20 | Where setzt voraus, dass die Anforderung nur bei einer optional enthaltenen Funktion gilt; das ist hier nicht genannt. | Ein unerwünschter Fehlerfall und eine If-Then-Reaktion sind nicht beschrieben. |
| E21 | EARS adressiert Anforderungstexte; Compilerwarnungen gehören zur Implementierung. | Netzwerkleistung wird durch EARS-Satzmuster nicht unmittelbar behandelt. |
| E22 | Die Quelle bezeichnet EARS als leichtgewichtig und fordert kein bestimmtes CASE-Werkzeug. | Ein Sprachmodell gehört nicht zur Voraussetzung der Notation. |
| E23 | Die Quelle nennt gerade Menschen ohne Englisch als Erstsprache; Muttersprachlichkeit ist keine Pflicht. | Die Methode wurde in verschiedenen Domänen eingesetzt und ist nicht auf Java begrenzt. |
| E24 | EARS entstand nicht bei der Arbeit an einem Web-CSS-Standard. | EARS ist ein Muster für Anforderungen, keine Datenbankabfragesprache. |
| E25 | Die Veröffentlichung von 1990 liegt vor dem in der Quelle genannten Entstehungskontext. | 2025 liegt lange nach der ausdrücklich genannten Erstveröffentlichung 2009. |
| P01 | Die Modellversion beschreibt ein Werkzeug, aber nicht das zu lösende Problem. | Ein Branchname benennt einen Arbeitszweig, nicht Zweck und Ergebnis der Änderung. |
| P02 | Ein Agentenname ist kein Kriterium, mit dem die fachliche Lösung geprüft werden kann. | Eine lange Bearbeitungszeit definiert kein akzeptables Ergebnis. |
| P03 | Repository-Sterne haben keinen Bezug dazu, welche Dateien geändert werden dürfen. | Ein zufälliger Commit grenzt die betroffenen Dateien nicht zuverlässig ein. |
| P04 | Ein bloßes Stichwort lässt Ziel und Abnahmebedingungen offen. | Ein Screenshot ohne erklärenden Text gibt dem Agenten keinen hinreichenden Auftrag. |
| P05 | Unklare Großmigrationen gehören zu den von GitHub als schwierig genannten Aufgaben. | Ein Produktionsvorfall mit Kundendaten ist sensibel und kein geeigneter erster Agentenfall. |
| P06 | Vertrauliche Incident-Entscheidungen nennt GitHub unter sensiblen Aufgaben. | Ungeklärte Geschäftslogik ist gerade kein klar begrenzter Testfall. |
| P07 | Eine Produktneuausrichtung geht über eine kleine, überprüfbare Änderung hinaus. | Die Freigabe von Sicherheitsrisiken verlangt menschliche Verantwortung. |
| P08 | Eine lokale Beschriftung betrifft keinen breit angelegten Architekturkontext. | Ein einzelner klarer Testfall ist nicht das beschriebene breite Refactoring. |
| P09 | Eine dokumentierte UI-Korrektur hat nicht automatisch Authentifizierungsfolgen. | Das Umbenennen eines isolierten Tests betrifft keine geschützten Zugänge. |
| P10 | Öffentliche Dummy-Daten enthalten nicht die genannten persönlichen Informationen. | Ein lokaler Teststring ist kein personenbezogener Produktionsdatensatz. |
| P11 | Die Länge einer Quelldatei entscheidet nicht über die fachliche Klarheit des Auftrags. | Ein schneller Testlauf beseitigt keine Mehrdeutigkeit der Anforderungen. |
| P13 | Die Schrift einer README beantwortet nicht, wo die Fachlogik implementiert ist. | Alphabetische Dateireihenfolge zeigt keinen Codepfad der Funktion. |
| P14 | Ein Methodenname allein zeigt keine Abhängigkeiten zwischen Diensten. | Die Anzahl von Commit-Nachrichten erklärt keine Modulbeziehungen. |
| P15 | Der Browsertitel zeigt nicht, wie eine Anfrage intern verarbeitet wird. | Die Klassenzahl erklärt weder Eingabepfad noch Antworterzeugung. |
| P16 | Die Dateianzahl verrät nicht, über welche Komponenten ein Fehler weiterläuft. | Die UI-Farbe beschreibt keinen Fehlerpfad eines Dienstes. |
| P17 | Ungeprüfte neue Schichten können bestehende Architekturgrenzen verletzen. | Das blinde Kopieren von Imports erklärt die vorhandenen Architekturregeln nicht. |
| P18 | Mehrdateienänderungen können abhängige Stellen betreffen und sind nicht automatisch lokal. | Die Quelle nennt Struktur und Testbarkeit als Gründe für vorsichtige Migrationen; Tests sind nicht entbehrlich. |
| P19 | Eine Bibliothek auszuwählen identifiziert keinen gemessenen Engpass. | Zufällige Funktionen sind kein belegter langsamer oder speicherintensiver Pfad. |
| P20 | Der Wunsch nach einer Bibliothek zeigt keine wiederholte teure Operation. | Die Zahl der React-Komponenten sagt nichts über Cache-Wirkung in einem Request-Handler. |
| P21 | Ein reiner Happy Path lässt die von OpenAI genannten Randbedingungen aus. | Startseiten-Screenshots prüfen keine leeren oder maximalen Eingaben. |
| P22 | Mehr Testzeilen bedeuten nicht, dass relevante Fehlerpfade geprüft werden. | Ein Dateiname belegt keine Abdeckung ungewöhnlicher Zustände. |
| P23 | Die erste Lösung ohne Vergleich lässt mögliche Trade-offs und Annahmen unsichtbar. | Annahmen als Tatsachen auszugeben verhindert die empfohlene Prüfung des Ansatzes. |
| P24 | Ein KI-Entwurf muss gegen Anforderungen geprüft werden, bevor er freigegeben wird. | Nutzerfeedback zu einem Entwurf erzwingt nicht automatisch eine Produktionsmigration. |
| P25 | Eine lange Antwort kann trotzdem die vereinbarten Kriterien verfehlen. | Geschwindigkeit zeigt nicht, ob der Diff fachlich und technisch passt. |
| P26 | Eine routinemäßige Dokumentationskorrektur nennt GitHub als eher geeignete Agentenaufgabe. | Ein klar begrenzter Barrierefreiheitsfix ist ebenfalls ein Beispiel für eine geeignete Agentenaufgabe. |
| R01 | Ein Pull Request wird im beschriebenen Ablauf nach Recherche, Plan und Änderung vorbereitet. | Produktivbetrieb ist keine Forschungsphase vor der Implementierungsplanung. |
| R03 | Recherche liefert Fakten für spätere Entscheidungen; sie gibt die Implementierung nicht automatisch frei. | Ein Agent kann Fachverantwortung durch Repository-Recherche nicht übernehmen. |
| R04 | Ein Neustart ohne Kontext ist nicht die von GitHub beschriebene gezielte Vertiefung. | Der Diff entsteht erst bei Codeänderungen und ersetzt keine Forschungsfrage. |
| R05 | Die Antwort kann Lücken haben und darf nicht allein als Korrektheitsbeweis gelten. | Tests abzuschalten verbessert die Prüfung einer Research-Antwort nicht. |
| R06 | Die Commitzahl beschreibt keinen technischen Ansatz zur Lösung. | Editorfarben gehören nicht zum Implementierungsplan. |
| R07 | Einen ungeeigneten Plan unverändert umzusetzen widerspricht der empfohlenen Review-Iteration. | Archivieren ohne Prüfung behebt keine Abweichung zwischen Plan und Absicht. |
| R09 | Der Plan hält den Kontext der Änderung fest und ist kein Ersatz für den Quellcode. | Ein Plan allein führt keinen Merge aus. |
| R11 | GitHub empfiehlt ausdrücklich Recherche und Plan vor der PR-Entscheidung. | Eine Agentenantwort erzeugt im beschriebenen Ablauf nicht automatisch einen PR. |
| R12 | Ein Token in einem Bild wäre sensible Information und kein sinnvoller visueller Kontext. | Ein Bild ergänzt die Beschreibung; es ersetzt das Ziel des Auftrags nicht. |
| R13 | Alle Dateien sofort zu ändern umgeht die empfohlene Planungsstufe. | Ein Build ohne geklärten Ansatz beantwortet die Planungsfrage nicht. |
| R14 | Unbegrenzte gekoppelte Projekte liegen außerhalb der beschriebenen gut abgrenzbaren Aufgabengröße. | OpenAI nennt einen ungefähren Arbeitsumfang, nicht eine feste Ein-Zeilen-Grenze. |
| R15 | Ein Schlagwort allein liefert zu wenig Struktur und Kontext für die Planung. | Die Modelltemperatur beschreibt weder Dateien noch Komponenten der Änderung. |
| R16 | Externe Geheimnisse sind kein zulässiges Muster zur Übernahme in eine Implementierung. | Beliebige fremde Pakete zeigen kein bewährtes Muster des eigenen Projekts. |
| R17 | Eine gesamte Migration ohne Prüfkriterium ist kein kleiner überprüfbarer Task. | Eine unklare Sammelaufgabe widerspricht der empfohlenen Abgrenzung. |
| R18 | Ungeprüfte Randideen vergrößern den aktuellen Patch ohne vereinbarten Umfang. | Eine beiläufige Idee ändert die vereinbarte Spec nicht stillschweigend. |
| R19 | Ein Startskript schafft eine funktionsfähige Umgebung, aber keine fachlichen Kriterien. | Die Umgebungskonfiguration trifft keine Fachentscheidung über die Änderung. |
| R20 | Promptwortzahl diagnostiziert keinen fehlenden Build- oder Setupschritt. | Dateinamensreihenfolge behebt keine Umgebungsfehler. |
| R21 | Mehrere Varianten sollen verglichen werden; der erste Vorschlag ist nicht automatisch verbindlich. | Die Auswahl zwischen Varianten ersetzt keine späteren Tests. |
| R22 | Flüchtiger Chatkontext ist nicht der von OpenAI beschriebene festgehaltene Teilstand. | Der letzte Befehl allein dokumentiert weder offene Fragen noch nächste Schritte. |
| R23 | Leerzeichenzahl sagt nichts über die Verbreitung eines veralteten Musters. | Das Editor-Theme hat keinen Bezug zur Migration des Codes. |
| R24 | Neue Befunde können den Plan verändern; Ignorieren würde Annahmen ungeprüft lassen. | Ein unveränderlicher Plan widerspricht der beschriebenen Iteration. |
| R25 | Ein unprüfbarer Großpatch erschwert die gezielte Korrektur nach Diff-Review. | Die erste Agentenantwort ist keine überprüfte Umsetzung. |
| R26 | Phasentrennung ist eine Kontextempfehlung; sie wird nicht als Voraussetzung für die Kompilierung beschrieben. | Die Phasen benötigen keinen jeweils anderen Git-Server. |
| R27 | Die Quelle warnt davor, das teuerste Reasoning-Modell unabhängig von der Phase einzusetzen. | Formatierungsaufgaben erfordern nicht dieselbe Analyse wie Architektur- und Planungsentscheidungen. |
| R28 | Ungefilterte Historie ist gerade die Quelle unnötigen Kontexts. | Das vollständige Repository in jedem Prompt würde den Kontext vergrößern statt fokussieren. |
| S01 | test-only ist kein in der Quelle genanntes eingebautes Standardschema. | deploy-first ist nicht die Bezeichnung des dokumentierten Standardablaufs. |
| S02 | tasks.md entsteht später und enthält Umsetzungsschritte statt der Begründung. | design.md beschreibt technische Entscheidungen und ist nicht das erste Warum-Artefakt. |
| S03 | Der Lockfile hält Abhängigkeiten fest, aber keine beobachtbaren Verhaltensanforderungen. | Ein Konsolenprotokoll ist kein versioniertes Delta-Spec-Artefakt. |
| S04 | proposal.md begründet die Änderung und legt nicht vorrangig ihre technische Umsetzung fest. | README.md ist kein Design-Artefakt des beschriebenen Änderungsordners. |
| S05 | package-lock.json verwaltet npm-Abhängigkeiten und keine Umsetzungsliste. | proposal.md beschreibt Zweck und Umfang, nicht die abhakbaren Tasks. |
| S06 | Tasks setzen im Standardablauf Proposal, Specs und Design voraus und stehen nicht am Anfang. | Design wird vor Apply entworfen, sofern es für die Änderung nötig ist. |
| S07 | Das Schema erlaubt Specs und Design in beiden Reihenfolgen. | Beide Artefakte werden vor Apply und Tasks entworfen. |
| S08 | Neue Abhängigkeiten sind ein möglicher Grund für ein Design, nicht für sein pauschales Weglassen. | Architekturänderungen können ein Design erforderlich machen. |
| S09 | Vorhandene Tests setzen die Spec-Pflicht nicht automatisch außer Kraft. | Die Kürze eines Prompts ist kein skip_specs-Kriterium. |
| S10 | package.json ist keine Ablage für Delta-Anforderungen einer Capability. | Nur im Chat gehaltene Anforderungen sind nicht das dokumentierte Spec-Artefakt. |
| S11 | Interne Klassennamen können sich ohne Verhaltensänderung ändern und gehören eher ins Design. | Eine Schrittfolge beschreibt das Wie und gehört in Tasks oder Design. |
| S12 | Eine Bibliothek benennt keine beobachtbare Bedingung und kein erwartetes Ergebnis. | Die Arbeitszeit ist keine WHEN/THEN-Aussage über Systemverhalten. |
| S13 | Ein sichtbares Fehlerergebnis ist Teil des Verhaltensvertrags und gehört in die Spec. | Eine externe Sicherheitsgrenze betrifft beobachtbare Anforderungen und kann Spec-Inhalt sein. |
| S14 | Ein interner Stacktrace ist keine geeignete verlässliche Beschreibung des Nutzerverhaltens. | Die Codezeilenzahl beschreibt kein Ergebnis im Fehlerfall. |
| S15 | Eine reine Umbenennung verwendet RENAMED statt ADDED. | Das Löschen von Tests ist keine neue fachliche Anforderung. |
| S16 | Nur eine geänderte Zeile kann übrige Szenarien beim Archivieren verlieren. | Eine neue Überschrift allein enthält keinen vollständigen Anforderungsblock. |
| S17 | Eine Versionsnummer erklärt nicht, warum eine Anforderung entfällt und wie migriert wird. | Ein Autorenname ersetzt weder Grund noch Migrationshinweis. |
| S18 | Eine Verhaltensänderung gehört unter MODIFIED und ist keine reine Umbenennung. | RENAMED ist eine Delta-Markierung und kein Teststartbefehl. |
| S19 | Ein einzelnes Hash markiert eine Hauptüberschrift, nicht die geforderte Szenarioebene. | Ein Bullet ist keine Szenarioüberschrift im verlangten Format. |
| S20 | Apply setzt die Taskliste voraus und startet nicht vor dem Proposal. | Das Archivieren folgt der Umsetzung, es löst Apply nicht aus. |
| S21 | Private Chats sind nicht das im Schema angegebene Tracking-Artefakt. | Die Kommentarzahl eines PR zeigt keinen abgehakten Task an. |
| S22 | Ein Stichwort ohne Nachweis lässt die Fertigstellung unklar. | Eine unbegrenzte Sammelaufgabe widerspricht kleinen verifizierbaren Tasks. |
| S23 | Archivieren führt Delta-Anforderungen in Haupt-Specs über, es verwirft sie nicht. | Ein npm-Lockfile ist kein Ziel für fachliche Anforderungen. |
| S24 | Der aktive Änderungsordner wird beim Archivieren verschoben. | Der Ordner wird nicht in ausführbaren Quellcode umgewandelt. |
| S25 | OpenSpec organisiert Änderungsartefakte, ersetzt aber nicht Git als Versionsverwaltung. | Der Quickstart beschreibt Commits weiterhin als getrennten Teil des Workflows. |
