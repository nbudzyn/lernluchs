import type { Question } from "../../shared/question";

const ddd =
  "https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf";
const tutorial = "https://diataxis.fr/tutorials/";
const howTo = "https://diataxis.fr/how-to-guides/";
const reference = "https://diataxis.fr/reference/";
const explanation = "https://diataxis.fr/explanation/";
const map = "https://diataxis.fr/map/";
const scrum = "https://scrumguides.org/scrum-guide.html";

type Answer = [text: string, explanation: string];

function question(
  id: string,
  prompt: string,
  sourceUrl: string,
  correct: Answer,
  wrongA: Answer,
  wrongB: Answer,
): Question {
  return {
    id,
    prompt,
    options: [correct, wrongA, wrongB].map(([text, explanation], index) => ({
      id: `${id}-${index + 1}`,
      text,
      correct: index === 0,
      explanation,
      sourceUrl,
    })),
  };
}

export const domainLanguageQuestions: Question[] = [
  question(
    "DL01",
    "Zwei Fachbereiche verwenden das Wort „Kunde“ mit unterschiedlichen Regeln. Was hilft, ohne beide Modelle künstlich zu vereinheitlichen?",
    `${ddd}#page=9`,
    [
      "Die Grenzen der beiden Modelle ausdrücklich festlegen.",
      "Ein Bounded Context begrenzt die Gültigkeit eines Modells und seiner Begriffe.",
    ],
    [
      "Eine gemeinsame Klasse für beide Bedeutungen erzwingen.",
      "Eine Klasse würde die unterschiedlichen Regeln vermischen; die Kontextgrenze erlaubt getrennte Modelle.",
    ],
    [
      "Beide Bedeutungen nur in Kommentaren unterscheiden.",
      "Kommentare begrenzen die Gültigkeit der Modelle nicht und verhindern begriffliche Verwechslungen nicht.",
    ],
  ),
  question(
    "DL02",
    "Fachleute sagen „Reservierung“, der Java-Code nennt denselben Vorgang „Booking“. Welche Änderung stärkt eine gemeinsame Fachsprache?",
    `${ddd}#page=10`,
    [
      "Einen gemeinsam geklärten Begriff in Gespräch und Code verwenden.",
      "Die Ubiquitous Language soll in Gesprächen und Implementierung dieselben Modellbegriffe tragen.",
    ],
    [
      "Die beiden Wörter dauerhaft je nach Rolle beibehalten.",
      "Getrennte Vokabulare verdecken Unterschiede im Modell statt sie gemeinsam zu klären.",
    ],
    [
      "Den Fachbegriff nur in einer Übersetzungstabelle dokumentieren.",
      "Eine Tabelle ersetzt nicht den laufenden Gebrauch der gemeinsamen Sprache im Code und Gespräch.",
    ],
  ),
  question(
    "DL03",
    "Ein Modell beschreibt Bestellungen korrekt, aber nicht Abrechnung. Was bedeutet die ausdrücklich festgelegte Kontextgrenze?",
    `${ddd}#page=9`,
    [
      "Die Modellregeln gelten innerhalb ihres benannten Bereichs.",
      "Ein Bounded Context definiert, wo ein bestimmtes Modell konsistent angewendet wird.",
    ],
    [
      "Die Modellregeln gelten automatisch für alle Fachbereiche.",
      "Gerade die Grenze verhindert eine unbegründete Ausdehnung auf andere Bereiche.",
    ],
    [
      "Das Modell darf nur von einem Team implementiert werden.",
      "Der Kontext beschreibt die Gültigkeit des Modells, nicht eine feste Teamgröße.",
    ],
  ),
  question(
    "DL04",
    "Bei der Modellierung widersprechen sich Fachannahmen von Entwicklern und Domänenkundigen. Was ist der passende nächste Schritt?",
    `${ddd}#page=8`,
    [
      "Das Modell gemeinsam an den fachlichen Beispielen klären.",
      "DDD verlangt die Zusammenarbeit von Domänen- und Softwarepraktikern zur Modellbildung.",
    ],
    [
      "Die technische Benennung allein verbindlich machen.",
      "Technische Namen belegen fachliche Regeln nicht und umgehen die nötige Zusammenarbeit.",
    ],
    [
      "Die Fachregeln bis zur Implementierung offen lassen.",
      "Ungeklärte Annahmen würden sonst als scheinbar fertiges Modell in den Code gelangen.",
    ],
  ),
  question(
    "DL05",
    "Im Fachgespräch entsteht ein neuer Unterschied zwischen Auftrag und Bestellung. Wie sollte die gemeinsame Sprache reagieren?",
    `${ddd}#page=10`,
    [
      "Den Unterschied im Modell und den verwendeten Namen nachvollziehen.",
      "Die Ubiquitous Language entwickelt sich mit den fachlichen Einsichten weiter.",
    ],
    [
      "Die alten Namen trotz des neuen Unterschieds unverändert lassen.",
      "So würden zwei nun unterschiedliche Konzepte sprachlich wieder zusammenfallen.",
    ],
    [
      "Den Unterschied nur in einem einmaligen Meeting erwähnen.",
      "Die gemeinsame Sprache muss im fortlaufenden Modellgebrauch sichtbar bleiben.",
    ],
  ),
  question(
    "DL06",
    "Ein Architekturdiagramm spricht von „Zahlung“, der Code nur von „TransactionData“. Was wäre im Sinne der gemeinsamen Sprache zu prüfen?",
    `${ddd}#page=10`,
    [
      "Ob Diagramm und Code dasselbe Fachkonzept konsistent benennen.",
      "Evans bindet die gemeinsame Sprache auch an Diagramme und Code.",
    ],
    [
      "Ob das Diagramm unabhängig vom Code mehr Kästen hat.",
      "Die Anzahl der Kästen klärt die abweichenden Fachbegriffe nicht.",
    ],
    [
      "Ob der technische Name kürzer geschrieben werden kann.",
      "Kürze allein beseitigt die mögliche Abweichung des Modells nicht.",
    ],
  ),
  question(
    "DL07",
    "Mehrere Entwickler ändern dasselbe Fachmodell und erzeugen widersprüchliche Begriffe. Welche Praxis hilft, die Fragmentierung früh zu erkennen?",
    `${ddd}#page=12`,
    [
      "Änderungen häufig integrieren und Widersprüche mit Tests sichtbar machen.",
      "Continuous Integration im DDD-Sinn hilft, Modellfragmentierung rasch zu erkennen.",
    ],
    [
      "Änderungen erst nach langer getrennter Arbeit zusammenführen.",
      "Lange Trennung lässt abweichende Modellannahmen wachsen.",
    ],
    [
      "Nur die Dateinamen vor dem Merge vergleichen.",
      "Dateinamen zeigen fachliche Widersprüche im Modell nicht zuverlässig.",
    ],
  ),
  question(
    "DL08",
    "Wer sollte bei einer fachlich anspruchsvollen Java-Implementierung das Modell mitentwickeln?",
    `${ddd}#page=14`,
    [
      "Auch die Personen, die den Code schreiben.",
      "Hands-on Modelers verbindet Modellierung mit den Menschen, die das Modell implementieren.",
    ],
    [
      "Nur eine vom Code getrennte Modellierungsgruppe.",
      "Die Trennung erschwert, dass Modell und Implementierung sich gegenseitig korrigieren.",
    ],
    [
      "Nur die spätere Testabteilung.",
      "Tests helfen, ersetzen aber die Beteiligung der Implementierenden an der Modellbildung nicht.",
    ],
  ),
  question(
    "DL09",
    "Ein fachliches Modell ist dokumentiert, der Code setzt aber eine andere Regel um. Welche Leitidee spricht dagegen?",
    `${ddd}#page=13`,
    [
      "Modell und Implementierung eng aufeinander beziehen.",
      "Model-Driven Design verlangt, dass der Code dem fachlichen Modell Bedeutung gibt.",
    ],
    [
      "Das Modell nur als unverbindliche Illustration behandeln.",
      "Dann trägt es die Implementierungsentscheidungen nicht mehr.",
    ],
    [
      "Den Code ausschließlich nach technischen Schichten benennen.",
      "Technische Schichten allein stellen keinen engen Bezug zum Fachmodell her.",
    ],
  ),
  question(
    "DL10",
    "Ein Refactoring zeigt, dass „Freigabe“ fachlich zwei verschiedene Vorgänge meint. Was ist der fachlich passende Umgang?",
    `${ddd}#page=15`,
    [
      "Das Modell und seine Sprache anhand der neuen Einsicht überarbeiten.",
      "Refactoring Toward Deeper Insight nutzt Implementierungserfahrung für ein präziseres Modell.",
    ],
    [
      "Nur Methoden kürzen und die Bedeutung unverändert lassen.",
      "Kürzere Methoden lösen die entdeckte fachliche Mehrdeutigkeit nicht.",
    ],
    [
      "Die Beobachtung als rein technisches Problem ablegen.",
      "Die Unterscheidung betrifft das Fachmodell selbst.",
    ],
  ),
  question(
    "DL11",
    "Ein Modul enthält Preisfindung, Versandetiketten und Rollenprüfung ohne gemeinsamen Fachzweck. Welche Umgruppierung passt zu DDD-Modulen?",
    `${ddd}#page=22`,
    [
      "Zusammengehörige Fachkonzepte in kohärenten Modulen bündeln.",
      "Module sollen eine zusammenhängende Geschichte des Modells erzählen.",
    ],
    [
      "Alle Klassen allein nach Dateilänge aufteilen.",
      "Dateilänge ist keine fachliche Kohäsionsgrenze.",
    ],
    [
      "Alle Funktionen in einem gemeinsamen Modul belassen.",
      "Das belässt unterschiedliche Verantwortungen als undifferenzierte Sammlung.",
    ],
  ),
  question(
    "DL12",
    "Wie sollte ein Modulname für eine fachliche Verantwortlichkeit gewählt werden?",
    `${ddd}#page=22`,
    [
      "Er soll einen Begriff der gemeinsamen Fachsprache ausdrücken.",
      "Evans beschreibt Modulnamen als Teil der Ubiquitous Language.",
    ],
    [
      "Er soll nur den verwendeten Framework-Typ nennen.",
      "Ein Framework-Typ erklärt die fachliche Bedeutung des Moduls nicht.",
    ],
    [
      "Er soll ausschließlich die Anzahl enthaltener Klassen codieren.",
      "Eine Klassenzahl beschreibt keine Fachverantwortung.",
    ],
  ),
  question(
    "DL13",
    "Zwei fachlich benannte Module hängen bei jeder kleinen Änderung eng voneinander ab. Welche Untersuchung ist sinnvoll?",
    `${ddd}#page=22`,
    [
      "Prüfen, ob ein übersehenes Konzept die Elemente sinnvoller trennt oder bündelt.",
      "Evans empfiehlt bei hoher Kopplung eine erneute Suche nach passenden Modellgrenzen.",
    ],
    [
      "Nur zusätzliche Schnittstellen zwischen den Modulen anlegen.",
      "Mehr Schnittstellen können die zugrunde liegende begriffliche Kopplung unverändert lassen.",
    ],
    [
      "Die Abhängigkeit als Beweis für zwei perfekte Grenzen betrachten.",
      "Starke Kopplung ist Anlass, die konzeptionelle Trennung zu prüfen.",
    ],
  ),
  question(
    "DL14",
    "Ein Team will die Pakete allein nach Controller, Service und Repository ordnen. Was könnte dadurch im Modell weniger sichtbar werden?",
    `${ddd}#page=22`,
    [
      "Die zusammengehörigen Fachkonzepte und ihre Modulnamen.",
      "DDD-Module sollen fachliche Kohäsion und Begriffe sichtbar machen.",
    ],
    [
      "Die verwendete Programmiersprache.",
      "Die technische Schichtung verbirgt nicht die Programmiersprache.",
    ],
    [
      "Die Anzahl der Build-Schritte.",
      "Build-Schritte sind nicht die hier gemeinte fachliche Modellstruktur.",
    ],
  ),
  question(
    "DL15",
    "Eine Methode heißt `process()`, obwohl sie eine Bestellung fachlich bestätigt. Was verbessert ihre Schnittstelle?",
    `${ddd}#page=27`,
    [
      "Ein Name, der die fachliche Absicht der Operation offenlegt.",
      "Intention-Revealing Interfaces sollen die beabsichtigte Wirkung im Modell ausdrücken.",
    ],
    [
      "Ein kürzerer Name ohne Fachbezug.",
      "Bloße Kürze macht die Absicht für Aufrufer nicht deutlicher.",
    ],
    [
      "Ein zusätzlicher Kommentar statt eines aussagekräftigen Vertrags.",
      "Der Aufruf selbst bleibt trotz Kommentar unklar.",
    ],
  ),
  question(
    "DL16",
    "Eine Berechnung verändert nebenbei den Bestellstatus. Warum erschwert dies das fachliche Verständnis?",
    `${ddd}#page=28`,
    [
      "Aufrufer müssen neben dem Ergebnis versteckte Zustandsänderungen beachten.",
      "Side-Effect-Free Functions verringern die gedankliche Last durch unbeabsichtigte Wirkungen.",
    ],
    [
      "Jede Berechnung muss deshalb in ein eigenes Deployment.",
      "Die Quelle fordert keine solche Deployment-Grenze.",
    ],
    [
      "Die Rückgabe kann dadurch nicht typisiert werden.",
      "Ein Rückgabetyp ist trotz Seiteneffekt möglich; das Problem ist die zusätzliche Wirkung.",
    ],
  ),
  question(
    "DL17",
    "Eine Domänenoperation verändert ein Aggregat. Welche fachliche Zusicherung sollten Assertions nach der Operation sichtbar machen?",
    `${ddd}#page=29`,
    [
      "Die Nachbedingung der Operation und weiter geltende Invarianten.",
      "Evans nennt Postconditions von Operationen und Invarianten von Klassen und Aggregaten.",
    ],
    [
      "Nur, dass der Aufruf ohne Exception beendet wurde.",
      "Ein fehlerfreier Ablauf belegt die fachliche Nachbedingung und Invarianten noch nicht.",
    ],
    [
      "Nur, dass die Datenbanktransaktion begonnen hat.",
      "Der technische Transaktionsbeginn sichert den fachlich gültigen Endzustand nicht zu.",
    ],
  ),
  question(
    "DL18",
    "Nach mehreren Änderungen wandern Preisregeln gemeinsam, Versandregeln aber unabhängig. Worauf kann dies bei einer Modellschnittstelle hinweisen?",
    `${ddd}#page=34`,
    [
      "Auf unterschiedliche konzeptionelle Konturen entlang der Änderungsachsen.",
      "Conceptual Contours nutzt Muster von Änderung und Stabilität für Modellgrenzen.",
    ],
    [
      "Auf eine zwingende Aufteilung nach gleicher Dateigröße.",
      "Gleiche Dateigröße folgt nicht aus fachlichen Änderungsmustern.",
    ],
    [
      "Auf die Pflicht, alle Regeln in einer Klasse zu halten.",
      "Unabhängige Änderungsachsen können gerade getrennte Fachkonzepte anzeigen.",
    ],
  ),
  question(
    "DL19",
    "Warum sollte ein Team bei komplexer Domäne dem fachlichen Kern besondere Modellierungszeit geben?",
    `${ddd}#page=47`,
    [
      "Weil der Kern die wesentliche fachliche Unterscheidung und Schwierigkeit trägt.",
      "Core Domain richtet die Modellierungsarbeit auf den besonderen geschäftlichen Wert.",
    ],
    [
      "Weil dort zwangsläufig die meisten Dateien liegen.",
      "Dateizahl bestimmt nicht die fachliche Bedeutung des Kerns.",
    ],
    [
      "Weil generische Teilbereiche keine Tests brauchen.",
      "Die Abgrenzung zum Kern hebt keine Qualitätspflicht für andere Bereiche auf.",
    ],
  ),
  question(
    "DL20",
    "Ein allgemeiner E-Mail-Versand beansprucht mehr Modellierungszeit als die einzigartige Preislogik. Welche Priorisierung legt DDD nahe?",
    `${ddd}#page=48`,
    [
      "Die einzigartige Preislogik als Kern gesondert stärken.",
      "Generische Teilbereiche sind vom Core Domain zu unterscheiden und erhalten andere Priorität.",
    ],
    [
      "Beide Bereiche allein nach Zeilenzahl priorisieren.",
      "Zeilenzahl ist kein Maß für fachliche Besonderheit.",
    ],
    [
      "Den E-Mail-Versand zum Kern erklären, weil er verbreitet ist.",
      "Verbreitung macht einen generischen Dienst nicht zum besonderen Fachkern.",
    ],
  ),
  question(
    "DL21",
    "Zwei Teams teilen einen kleinen Ausschnitt ihres Fachmodells. Was verlangt ein Shared Kernel besonders?",
    `${ddd}#page=38`,
    [
      "Änderungen am gemeinsamen Modell zwischen den Teams abstimmen.",
      "Ein Shared Kernel setzt enge Koordination für den geteilten Modellteil voraus.",
    ],
    [
      "Den gemeinsamen Teil ohne Rücksprache je Team verändern.",
      "Dann wäre der gemeinsame Kern nicht mehr verlässlich gemeinsam.",
    ],
    [
      "Sämtliche Modelle der beiden Teams zusammenlegen.",
      "Ein Shared Kernel umfasst nur einen bewusst kleinen gemeinsamen Ausschnitt.",
    ],
  ),
  question(
    "DL22",
    "Ein externes System verwendet „Account“ für etwas anderes als das eigene Abrechnungsmodell. Welche Grenze schützt das eigene Modell?",
    `${ddd}#page=41`,
    [
      "Eine Übersetzung an der Schnittstelle zum fremden Modell.",
      "Eine Anticorruption Layer übersetzt zwischen Modellen und schützt die eigene Sprache.",
    ],
    [
      "Die fremde Bedeutung ungeprüft im gesamten Code übernehmen.",
      "Damit würde die fremde Modellannahme das eigene Fachmodell verunreinigen.",
    ],
    [
      "Alle Abrechnungsregeln aus dem eigenen Modell entfernen.",
      "Das beseitigt Fachlogik, statt die externe Begriffsdifferenz zu übersetzen.",
    ],
  ),
  question(
    "DL23",
    "Mehrere Bounded Contexts tauschen Daten aus. Was macht eine Context Map sichtbar?",
    `${ddd}#page=36`,
    [
      "Die Kontexte und die Beziehungen ihrer Modelle zueinander.",
      "Context Mapping beschreibt Grenzen und Integrationsbeziehungen der Modelle.",
    ],
    [
      "Nur die physische Anordnung der Server.",
      "Eine Serverkarte erklärt keine fachlichen Modellbeziehungen.",
    ],
    [
      "Ausschließlich die Reihenfolge einzelner Datenbankabfragen.",
      "Abfragefolgen sind nicht die Beziehungen zwischen Fachkontexten.",
    ],
  ),
  question(
    "DL24",
    "Ein Begriff ist innerhalb eines Kontexts mehrdeutig. Was ist die erste fachliche Reaktion?",
    `${ddd}#page=10`,
    [
      "Die unterschiedlichen Bedeutungen mit Domänenkundigen klären und benennen.",
      "Die gemeinsame Sprache soll Mehrdeutigkeiten im Modell durch Gespräch sichtbar machen.",
    ],
    [
      "Die Mehrdeutigkeit durch einen generischen Typ verbergen.",
      "Ein generischer Typ klärt die fachlichen Unterschiede nicht.",
    ],
    [
      "Die bisherige Bezeichnung ohne Prüfung überall kopieren.",
      "Das verbreitet den unklaren Begriff über weitere Stellen.",
    ],
  ),
  question(
    "DL25",
    "Eine feste Maximalzahl an Klassen pro Modul soll Komplexität automatisch begrenzen. Welche fachliche Prüfung ist tragfähiger?",
    `${ddd}#page=22`,
    [
      "Ob die Modulgrenze zusammengehörige Fachkonzepte kohärent hält.",
      "DDD beurteilt Module nach fachlicher Kohäsion und verständlicher Modellgeschichte.",
    ],
    [
      "Ob jedes Modul exakt dieselbe Klassenzahl hat.",
      "Eine gleiche Zahl sagt nichts über fachlichen Zusammenhalt aus.",
    ],
    [
      "Ob alle Modulnamen technische Abkürzungen verwenden.",
      "Technische Kürzel machen die Fachverantwortung weniger sichtbar.",
    ],
  ),
];

export const projectDocumentationQuestions: Question[] = [
  question(
    "PD01",
    "Ein neuer Entwickler soll anhand einer Übung die Anwendung kennenlernen. Welche Dokumentform passt zu diesem Lernziel?",
    tutorial,
    [
      "Ein geführtes Tutorial mit einem erreichbaren Ergebnis.",
      "Diátaxis beschreibt Tutorials als angeleitete Lernerfahrung durch sinnvolle Tätigkeit.",
    ],
    [
      "Eine alphabetische API-Referenz als alleiniger Einstieg.",
      "Referenz hilft beim Nachschlagen, führt aber nicht durch eine Lernerfahrung.",
    ],
    [
      "Eine Sammlung offener Architekturfragen ohne Handlungsschritte.",
      "Eine Diskussion kann Verständnis fördern, bietet aber keine angeleitete Übung.",
    ],
  ),
  question(
    "PD02",
    "Ein Tutorial führt durch einen Spring-Endpunkt. Was sollte der Lernende früh sehen können?",
    tutorial,
    [
      "Ein kleines, verständliches Zwischenergebnis der eigenen Schritte.",
      "Frühe sichtbare Resultate verbinden Handlung und Wirkung in der Lernerfahrung.",
    ],
    [
      "Nur ein abstraktes Ziel ohne beobachtbares Ergebnis.",
      "Das erschwert, den Erfolg einzelner Schritte zu erkennen.",
    ],
    [
      "Sämtliche denkbaren Erweiterungen vor dem ersten Schritt.",
      "Zu viele Alternativen lenken von der geführten Lernerfahrung ab.",
    ],
  ),
  question(
    "PD03",
    "Im Tutorial folgt ein Schritt auf den anderen. Welche Rückmeldung stärkt die Verlässlichkeit?",
    tutorial,
    [
      "Die erwartete Ausgabe oder ein erkennbares Zeichen des Erfolgs nennen.",
      "Diátaxis empfiehlt, erwartete Beobachtungen entlang des Tutorials sichtbar zu machen.",
    ],
    [
      "Nur eine lange Liste möglicher Fehler am Ende anbieten.",
      "Sie ersetzt die unmittelbare Rückmeldung nach einem Schritt nicht.",
    ],
    [
      "Den Ausgang jedes Schritts offenlassen, damit Lernende raten.",
      "Ein Tutorial soll einen nachvollziehbaren und erfolgreichen Lernweg führen.",
    ],
  ),
  question(
    "PD04",
    "Ein Tutorial unterbricht jeden kleinen Schritt mit langen theoretischen Exkursen. Welche Verbesserung entspricht seinem Zweck?",
    tutorial,
    [
      "Die Übung konkret halten und vertiefende Erklärung verlinken.",
      "Diátaxis trennt die geführte Tätigkeit von ausführlicher Erklärung.",
    ],
    [
      "Die Übung durch eine reine Begriffsliste ersetzen.",
      "Eine Begriffsliste vermittelt keine praktische Lernerfahrung.",
    ],
    [
      "Alle Schritte entfernen und nur Designentscheidungen diskutieren.",
      "Das wäre Erklärung statt eines Tutorials.",
    ],
  ),
  question(
    "PD05",
    "Ein erfahrener Entwickler muss eine konkrete Datenbankkonfiguration deployen. Welche Form unterstützt ihn unmittelbar?",
    howTo,
    [
      "Eine am gewünschten Ergebnis ausgerichtete Handlungsanleitung.",
      "How-to guides führen durch ein reales Ziel und richten sich an der Aufgabe aus.",
    ],
    [
      "Ein Einstiegskurs ohne Bezug zum konkreten Ziel.",
      "Ein Tutorial dient vor allem dem Lernen, nicht der unmittelbaren Arbeitserledigung.",
    ],
    [
      "Eine reine Liste aller Konfigurationsfelder ohne Ablauf.",
      "Referenzdaten helfen beim Nachschlagen, führen aber nicht durch dieses Vorhaben.",
    ],
  ),
  question(
    "PD06",
    "Eine Anleitung beschreibt nur, wo die Schaltfläche „Deploy“ liegt. Was fehlt für einen brauchbaren How-to-Guide?",
    howTo,
    [
      "Die Verbindung zwischen Optionen und dem konkreten Nutzerziel.",
      "Diátaxis richtet How-to-Guides am menschlichen Vorhaben statt an bloßen Toolbewegungen aus.",
    ],
    [
      "Eine vollständige Einführung in die Programmiersprache.",
      "Eine solche Einführung wäre für das konkrete Deployment-Ziel ein anderes Format.",
    ],
    [
      "Eine bloße Aufzählung aller Menüs der Oberfläche.",
      "Eine Menüreferenz erklärt nicht, wie das Ziel sicher erreicht wird.",
    ],
  ),
  question(
    "PD07",
    "Ein Wartungsziel verlangt Änderungen an Build, Deployment und Datenbank. Darf ein How-to-Guide mehrere Werkzeuge verbinden?",
    howTo,
    [
      "Ja, wenn die Schritte gemeinsam dem Nutzerziel dienen.",
      "Die Aufgabe kann über mehrere Werkzeuge und Systemteile hinweg führen.",
    ],
    [
      "Nur, wenn alle Schritte im selben Menü liegen.",
      "Diátaxis leitet den Zuschnitt aus dem Ziel ab, nicht aus einer Menügrenze.",
    ],
    [
      "Nein, jede Werkzeugaktion muss ein eigenes Tutorial sein.",
      "Ein How-to-Guide kann gerade mehrere Mittel zu einem Ergebnis verbinden.",
    ],
  ),
  question(
    "PD08",
    "Ein API-Nutzer sucht den genauen Typ eines Parameters. Welche Dokumentform sollte diese Angabe knapp und verlässlich liefern?",
    reference,
    [
      "Eine technische Referenz des API-Vertrags.",
      "Referenzmaterial beschreibt Schnittstellen genau, geordnet und nachschlagbar.",
    ],
    [
      "Ein Erfahrungsbericht über die Projektgeschichte.",
      "Eine Erzählung garantiert keine präzise Vertragsangabe.",
    ],
    [
      "Ein Tutorial, das den Parameter nur beiläufig verwendet.",
      "Beiläufige Verwendung ersetzt eine verlässliche Referenz nicht.",
    ],
  ),
  question(
    "PD09",
    "Eine API-Referenz ist nach persönlichen Lieblingsaufgaben statt nach der API strukturiert. Welche Struktur liegt für Referenzmaterial näher?",
    reference,
    [
      "Eine konsistente Ordnung entlang der beschriebenen Schnittstellen.",
      "Diátaxis beschreibt Referenz als produkt- bzw. maschinengeleitet.",
    ],
    [
      "Eine Reihenfolge nach zufälligen Supportfällen.",
      "Sie erschwert das gezielte Nachschlagen technischer Fakten.",
    ],
    [
      "Eine lineare Übungsfolge für Neulinge.",
      "Eine Übungsfolge gehört zum Lernzweck eines Tutorials.",
    ],
  ),
  question(
    "PD10",
    "Eine automatisch erzeugte API-Referenz ist korrekt. Reicht sie deshalb als gesamte Projektdokumentation?",
    reference,
    [
      "Nein, sie deckt andere Bedürfnisse wie Anleitung und Erklärung nicht allein ab.",
      "Diátaxis nennt generierte Referenz wertvoll, aber nicht ausreichend für alle Dokumentzwecke.",
    ],
    [
      "Ja, weil jede Nutzeraufgabe aus Typangaben ableitbar ist.",
      "Typangaben führen nicht zwingend durch konkrete Aufgaben oder Lernwege.",
    ],
    [
      "Ja, wenn die Referenz alphabetisch sortiert ist.",
      "Alphabetische Ordnung ergänzt keine fehlende Anleitung oder Einordnung.",
    ],
  ),
  question(
    "PD11",
    "In einer technischen Referenz stehen lange Wertungen zwischen Parameterdefinitionen. Was hilft der Nachschlagbarkeit?",
    reference,
    [
      "Fakten neutral beschreiben und die Diskussion getrennt verlinken.",
      "Referenz soll präzise beschreiben; Erklärung und Meinung haben einen anderen Zweck.",
    ],
    [
      "Die Wertungen an jede Parameterzeile kopieren.",
      "Das macht Fakten schwerer auffindbar und vermischt Zwecke.",
    ],
    [
      "Alle Parameterdefinitionen zugunsten der Wertungen entfernen.",
      "Dann erfüllt die Referenz ihren technischen Informationszweck nicht.",
    ],
  ),
  question(
    "PD12",
    "Ein Team möchte erklären, warum eine Architekturentscheidung sinnvoll war und welche Grenzen sie hat. Welche Dokumentform passt?",
    explanation,
    [
      "Eine begrenzte fachliche Erklärung mit Kontext und Abwägung.",
      "Explanation dient dem Verständnis, der Einordnung und Reflexion eines Themas.",
    ],
    [
      "Eine reine Signaturliste aller Klassen.",
      "Signaturen beschreiben Technik, begründen aber keine Entscheidung.",
    ],
    [
      "Eine Schrittfolge ohne Begründung für eine Einzelaufgabe.",
      "Ein How-to-Guide hilft bei der Aufgabe, erklärt aber nicht unbedingt das Warum.",
    ],
  ),
  question(
    "PD13",
    "Eine Erklärung soll ein Konzept vertiefen. Muss sie denselben unmittelbaren Arbeitsablauf wie ein How-to-Guide liefern?",
    explanation,
    [
      "Nein, ihr Schwerpunkt ist Verständnis und Zusammenhang.",
      "Diátaxis trennt reflektierende Erklärung von unmittelbar zielgerichteter Anleitung.",
    ],
    [
      "Ja, sonst ist die Erklärung keine Dokumentation.",
      "Erklärung ist eine eigenständige Dokumentform für Verständnis.",
    ],
    [
      "Ja, sie muss ausschließlich Befehle enthalten.",
      "Befehle allein vermitteln die beabsichtigte Einordnung nicht.",
    ],
  ),
  question(
    "PD14",
    "Eine Seite mischt Lernübung, API-Tabelle und lange Begründung. Welcher erste redaktionelle Schritt erleichtert die Nutzung?",
    map,
    [
      "Die unterschiedlichen Zwecke erkennen und passend trennen oder verlinken.",
      "Diátaxis gibt jeder Dokumentform eine erkennbare Aufgabe und Erwartung.",
    ],
    [
      "Alle Teile ohne Gliederung beibehalten.",
      "Die verschiedenen Nutzererwartungen bleiben dann vermischt.",
    ],
    [
      "Nur den längsten Teil als verbindliche Referenz deklarieren.",
      "Länge bestimmt weder Zweck noch Verlässlichkeit eines Abschnitts.",
    ],
  ),
  question(
    "PD15",
    "Jemand fragt „Wie erreiche ich genau dieses Deployment-Ziel?“. Welche Diátaxis-Perspektive beantwortet das direkt?",
    map,
    [
      "Zielorientierte Anleitung.",
      "Die Diátaxis-Karte ordnet „How do I?“ den How-to-Guides zu.",
    ],
    [
      "Begriffliche Referenz allein.",
      "Referenz beantwortet vor allem „Was ist?“ und beschreibt die Technik.",
    ],
    [
      "Allgemeine Reflexion allein.",
      "Erklärung beantwortet eher ein „Warum?“ als eine konkrete Zielroute.",
    ],
  ),
  question(
    "PD16",
    "Ein Leser fragt „Warum ist diese Sicherheitsgrenze nötig?“. Welche Dokumentform sollte die Begründung tragen?",
    map,
    [
      "Eine Erklärung, die Gründe und Zusammenhänge beleuchtet.",
      "Die Diátaxis-Karte ordnet das „Warum?“ dem Verständniszweck zu.",
    ],
    [
      "Nur eine Tabelle aller API-Endpunkte.",
      "Eine Endpunkttabelle beschreibt Verträge, nicht die Begründung der Grenze.",
    ],
    [
      "Nur eine Liste der Klicks zum Aktivieren.",
      "Eine Klickfolge zeigt die Handlung, nicht den Grund.",
    ],
  ),
  question(
    "PD17",
    "Ein Team baut einen Doku-Index für neue und erfahrene Beteiligte. Was liefert Diátaxis als Ordnungsprinzip?",
    map,
    [
      "Dokumente nach Lern-, Ziel-, Informations- und Verständniszweck auffindbar machen.",
      "Die Karte unterscheidet vier Bedürfnisse und deren passende Dokumentformen.",
    ],
    [
      "Jedes Thema zwingend in genau eine riesige Datei pressen.",
      "Eine Datei kann die verschiedenen Zwecke nicht automatisch gut erfüllen.",
    ],
    [
      "Nur nach dem Erstellungsdatum sortieren.",
      "Das Datum hilft nicht, das passende Dokument für ein Nutzerbedürfnis zu finden.",
    ],
  ),
  question(
    "PD18",
    "Ein How-to-Guide wiederholt lange technische Details aus der API-Referenz. Welche Pflegeentscheidung ist sinnvoll?",
    reference,
    [
      "Für exakte Details auf die Referenz verweisen und den Zielablauf knapp halten.",
      "Diátaxis empfiehlt, andere Dokumentzwecke bei Bedarf zu verlinken statt zu vermischen.",
    ],
    [
      "Die API-Details an jeder Stelle unabhängig duplizieren.",
      "Doppelte Fakten erschweren konsistente Pflege und Nachschlagen.",
    ],
    [
      "Alle technischen Angaben aus beiden Formen streichen.",
      "Der Guide braucht nötige Hinweise, die Referenz präzise Fakten.",
    ],
  ),
  question(
    "PD19",
    "Ein Scrum-Team fragt, woran alle erkennen, ob ein Increment die nötige Produktqualität hat. Was schafft diese Transparenz?",
    scrum,
    [
      "Eine gemeinsam geltende Definition of Done.",
      "Sie beschreibt den Zustand des Increments bei erfüllten Qualitätsmaßen.",
    ],
    [
      "Eine private Aufgabenliste nur eines Entwicklers.",
      "Private Kriterien liefern kein gemeinsames Verständnis des fertigen Ergebnisses.",
    ],
    [
      "Eine bloße Schätzung der verbleibenden Stunden.",
      "Zeitaufwand beschreibt nicht den erfüllten Qualitätszustand.",
    ],
  ),
  question(
    "PD20",
    "Ein Product-Backlog-Eintrag ist programmiert, erfüllt aber die Definition of Done nicht. Wie wird er im Scrum Guide behandelt?",
    scrum,
    [
      "Er ist noch kein fertiges Increment und geht zur weiteren Arbeit zurück.",
      "Ohne erfüllte Definition of Done ist der Eintrag nicht als fertiges Increment vorzeigbar.",
    ],
    [
      "Er gilt bereits durch den Code-Commit als Increment.",
      "Ein Commit ersetzt die vereinbarten Qualitätsmaße der Definition of Done nicht.",
    ],
    [
      "Er wird automatisch beim Sprint Review als fertig freigegeben.",
      "Der Scrum Guide schließt unfertige Einträge von dieser Präsentation aus.",
    ],
  ),
  question(
    "PD21",
    "Eine Organisation gibt eine Definition of Done für Increments vor. Welche Mindestregel gilt für Scrum-Teams?",
    scrum,
    [
      "Sie übernehmen den Organisationsstandard mindestens als Untergrenze.",
      "Der Scrum Guide verlangt die organisationsweite Definition of Done als Minimum.",
    ],
    [
      "Jedes Team darf darunterliegende Kriterien frei wählen.",
      "Der Organisationsstandard ist gerade der verbindliche Mindestmaßstab.",
    ],
    [
      "Nur das erste Scrum-Team muss ihn beachten.",
      "Die Vorgabe gilt für alle Scrum-Teams der Organisation.",
    ],
  ),
  question(
    "PD22",
    "Es gibt keinen Organisationsstandard für die Definition of Done. Wer legt sie im Scrum-Rahmen passend zum Produkt fest?",
    scrum,
    [
      "Das Scrum-Team selbst.",
      "Ohne Organisationsstandard erstellt das Scrum-Team eine produktgerechte Definition of Done.",
    ],
    [
      "Ausschließlich ein externes Framework automatisch.",
      "Der Guide weist die Festlegung dem Scrum-Team zu.",
    ],
    [
      "Allein ein einzelner Implementierender ohne Teamabgleich.",
      "Die Definition soll ein gemeinsames Qualitätsverständnis schaffen.",
    ],
  ),
  question(
    "PD23",
    "Mehrere Scrum-Teams arbeiten an einem Produkt-Increment. Was verlangt der Scrum Guide für die Definition of Done?",
    scrum,
    [
      "Sie wird gemeinsam definiert und eingehalten.",
      "Bei mehreren Teams am Produkt ist eine gemeinsame Definition of Done nötig.",
    ],
    [
      "Jedes Team bewertet dasselbe Increment nach völlig eigenen Maßstäben.",
      "Das würde den gemeinsamen Qualitätszustand des Produkts unklar machen.",
    ],
    [
      "Nur das letzte Team legt nachträglich die Kriterien fest.",
      "Die Kriterien sollen vorab für alle beteiligten Teams gelten.",
    ],
  ),
  question(
    "PD24",
    "Was unterscheidet eine Definition of Done von einer Liste noch zu erledigender Einzelschritte?",
    scrum,
    [
      "Sie beschreibt den erreichten Qualitätszustand des Increments.",
      "Die Definition of Done ist eine formale Beschreibung erfüllter Produktqualitätsmaße.",
    ],
    [
      "Sie ist nur eine Reihenfolge individueller Tätigkeiten.",
      "Tätigkeitsreihenfolge allein beschreibt keinen gemeinsam erreichten Qualitätszustand.",
    ],
    [
      "Sie schätzt ausschließlich die Kosten des nächsten Sprints.",
      "Kostenschätzung ist ein anderes Thema als die Qualität des fertigen Increments.",
    ],
  ),
  question(
    "PD25",
    "Ein Team möchte eine unfertige Funktion beim Sprint Review als abgeschlossen präsentieren und später testen. Welche Grenze gilt?",
    scrum,
    [
      "Ohne erfüllte Definition of Done darf sie nicht als fertiges Increment präsentiert werden.",
      "Der Scrum Guide knüpft Vorführung als fertiges Ergebnis an die Definition of Done.",
    ],
    [
      "Die Vorführung macht fehlende Qualitätsprüfungen automatisch überflüssig.",
      "Ein Review ersetzt die vorab verlangten Produktqualitätsmaße nicht.",
    ],
    [
      "Ein Kommentar „Tests folgen“ erfüllt die Definition of Done.",
      "Ein Hinweis auf spätere Arbeit ist kein erfülltes Qualitätskriterium.",
    ],
  ),
];
