import type { Question } from "../../shared/question";

const javaModules = "https://dev.java/learn/organizing/modules/intro/";
const tsModules = "https://www.typescriptlang.org/docs/handbook/2/modules.html";
const tdd = "https://newsletter.kentbeck.com/p/canon-tdd";
const fowlerTdd = "https://martinfowler.com/bliki/TestDrivenDevelopment.html";
const archunit = "https://www.archunit.org/userguide/html/000_Index.html";
const playwrightLocators = "https://playwright.dev/docs/locators";
const playwrightAssertions = "https://playwright.dev/docs/test-assertions";
const owaspXss =
  "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html";
const openssf =
  "https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html";
const dependencyReview =
  "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review";

type Answer = [text: string, explanation: string];

function question(
  id: string,
  sourceUrl: string,
  prompt: string,
  right: Answer,
  wrongOne: Answer,
  wrongTwo: Answer,
): Question {
  return {
    id,
    prompt,
    options: [right, wrongOne, wrongTwo].map(([text, explanation], index) => ({
      id: ["a", "b", "c"][index],
      text,
      correct: index === 0,
      explanation,
      sourceUrl,
    })),
  };
}

export const secondPathQuestions: Record<string, Question[]> = {
  "module-boundaries-and-public-interfaces": [
    question(
      "M01",
      javaModules,
      "Welche Datei legt die Eigenschaften eines benannten Java-Moduls fest?",
      ["module-info.java", "Die Moduldeklaration steht in module-info.java."],
      [
        "pom.xml",
        "Die Maven-Datei beschreibt den Build, aber nicht die Java-Moduldeklaration.",
      ],
      [
        "package-info.java",
        "Diese Datei kann Paketinformationen enthalten; die Moduldeklaration steht in module-info.java.",
      ],
    ),
    question(
      "M02",
      javaModules,
      "Was benennt eine requires-Direktive in module-info.java?",
      [
        "Ein direkt benötigtes Modul",
        "requires nennt eine direkte Modulabhängigkeit nach Modulnamen.",
      ],
      [
        "Ein öffentliches Paket des eigenen Moduls",
        "Öffentliche Pakete werden mit exports angegeben.",
      ],
      [
        "Eine Dienstimplementierung des eigenen Moduls",
        "Dienstimplementierungen werden mit provides angegeben.",
      ],
    ),
    question(
      "M03",
      javaModules,
      "Welche Angabe macht ein Paket für andere Java-Module als reguläre API zugänglich?",
      [
        "exports für dieses Paket",
        "exports gibt die öffentlichen Typen und Member eines Pakets für andere Module frei.",
      ],
      [
        "requires für dieses Paket",
        "requires bezieht sich auf Module, nicht auf die Freigabe eigener Pakete.",
      ],
      [
        "uses für dieses Paket",
        "uses benennt einen konsumierten Diensttyp und exportiert kein Paket.",
      ],
    ),
    question(
      "M04",
      javaModules,
      "Ein public-Typ liegt in einem nicht exportierten Paket eines benannten Moduls. Was gilt für regulären Zugriff aus einem anderen Modul?",
      [
        "Der Typ bleibt dort unzugänglich",
        "public allein überwindet die Modulgrenze eines nicht exportierten Pakets nicht.",
      ],
      [
        "Der Typ ist durch public zugänglich",
        "Neben public muss das Paket für regulären Zugriff exportiert sein.",
      ],
      [
        "Der Typ ist durch requires im fremden Modul zugänglich",
        "Lesbarkeit durch requires exportiert das Paket des Zielmoduls nicht.",
      ],
    ),
    question(
      "M05",
      javaModules,
      "Welche Wirkung hat exports eines Pakets in einem benannten Java-Modul?",
      [
        "Öffentliche Typen und Member sind zur Compile- und Laufzeit zugänglich",
        "Die Einführung beschreibt genau diese Wirkung eines exportierten Pakets.",
      ],
      [
        "Alle privaten Member werden per Reflection zugänglich",
        "Dafür ist die Öffnung eines Pakets relevant, nicht exports.",
      ],
      [
        "Das Paket wird automatisch zu einem eigenen Modul",
        "exports gibt ein Paket frei, erzeugt aber kein neues Modul.",
      ],
    ),
    question(
      "M06",
      javaModules,
      "Wofür dient opens bei einem Java-Paket vor allem?",
      [
        "Reflektiver Zugriff zur Laufzeit",
        "Ein geöffnetes Paket erlaubt Laufzeitzugriff per Reflection auch auf sonst gekapselte Member.",
      ],
      [
        "Deklaration einer direkten Modulabhängigkeit",
        "Direkte Abhängigkeiten werden mit requires benannt.",
      ],
      [
        "Freigabe der regulären Compile-Zeit-API",
        "Dafür dient exports; opens ist auf reflektiven Laufzeitzugriff gerichtet.",
      ],
    ),
    question(
      "M07",
      javaModules,
      "Was erreicht exports ... to ... gegenüber einem unqualifizierten exports?",
      [
        "Die Freigabe wird auf benannte Zielmodule begrenzt",
        "Die qualifizierte Variante exportiert das Paket nur an bestimmte Module.",
      ],
      [
        "Die Freigabe gilt nur für Unterpakete",
        "Die Zielangabe benennt Module, keine Unterpakete.",
      ],
      [
        "Die Freigabe wird in eine optionale Abhängigkeit umgewandelt",
        "Optionale Abhängigkeiten betreffen requires static.",
      ],
    ),
    question(
      "M08",
      javaModules,
      "Ein Framework benötigt Reflection auf Entitäten eines Java-Moduls. Welche Deklaration passt zum betroffenen Paket?",
      [
        "opens für das Entitätenpaket",
        "Die Einführung nennt ein für Reflection geöffnetes Entitätenpaket als Beispiel.",
      ],
      [
        "uses für das Entitätenpaket",
        "uses bezeichnet einen Diensttyp und öffnet keine Klassen für Reflection.",
      ],
      [
        "requires für das Entitätenpaket",
        "requires nennt ein anderes Modul und erlaubt keinen reflektiven Zugriff auf eigene Pakete.",
      ],
    ),
    question(
      "M09",
      javaModules,
      "Warum sollte ein Java-Modul möglichst wenige Pakete exportieren?",
      [
        "Um die von außen sichtbare Fläche und Kopplung klein zu halten",
        "Die Quelle empfiehlt wenige Exporte, weil geringere Sichtbarkeit die Komplexität senkt.",
      ],
      [
        "Damit alle internen Klassen automatisch privat werden",
        "Die Sichtbarkeit einzelner Klassen ändert exports nicht.",
      ],
      [
        "Damit keine Modulabhängigkeiten mehr deklariert werden müssen",
        "Auch ein Modul mit kleiner API benötigt seine direkten requires-Angaben.",
      ],
    ),
    question(
      "M10",
      javaModules,
      "Welche Information gehört bei Java zur öffentlichen Modulbeschreibung?",
      [
        "Welche Pakete exportiert werden",
        "Die Moduldeklaration beschreibt die öffentliche API über exportierte Pakete.",
      ],
      [
        "Welche Methoden intern am häufigsten aufgerufen werden",
        "Laufzeitnutzung ist keine Eigenschaft der Moduldeklaration.",
      ],
      [
        "Welche Tests zuletzt grün waren",
        "Testergebnisse gehören nicht zur Modulbeschreibung.",
      ],
    ),
    question(
      "M11",
      javaModules,
      "Welche Deklaration nennt einen Dienst, den ein Java-Modul nutzen will?",
      [
        "uses mit dem vollqualifizierten Diensttyp",
        "uses benennt den verwendeten Diensttyp in der Moduldeklaration.",
      ],
      [
        "exports mit der Implementierungsklasse",
        "exports gibt ein Paket frei; es benennt keinen konsumierten Dienst.",
      ],
      [
        "opens mit dem Dienstnamen",
        "opens steuert Reflection auf ein Paket, nicht Dienstnutzung.",
      ],
    ),
    question(
      "M12",
      javaModules,
      "Welche Deklaration ordnet in einem Java-Modul eine eigene Implementierung einem Dienst zu?",
      [
        "provides ... with ...",
        "Die Provider-Seite nennt Dienst und eigene Implementierung in der Moduldeklaration.",
      ],
      [
        "uses ... with ...",
        "uses markiert den Konsum eines Dienstes, nicht seine Bereitstellung.",
      ],
      [
        "requires ... with ...",
        "requires benennt eine Modulabhängigkeit ohne Dienstimplementierung.",
      ],
    ),
    question(
      "M13",
      javaModules,
      "Was ermöglicht ServiceLoader in einem modularen Java-System?",
      [
        "Einen Dienstanbieter zur Laufzeit zu finden, ohne ihn im Nutzer fest zu verdrahten",
        "uses und provides entkoppeln laut Quelle Dienstnutzer und Anbieter.",
      ],
      [
        "Alle Pakete des Anbieters automatisch zu exportieren",
        "Dienstregistrierung exportiert nicht automatisch sämtliche Pakete.",
      ],
      [
        "Die Moduldeklaration des Anbieters beim Build zu ersetzen",
        "ServiceLoader nutzt deklarierte Dienste zur Laufzeit und ersetzt module-info.java nicht.",
      ],
    ),
    question(
      "M14",
      javaModules,
      "Was enthält ein modularer JAR im Unterschied zu einem gewöhnlichen JAR?",
      [
        "Einen kompilierten Moduldeskriptor module-info.class",
        "Ein JAR mit Moduldeskriptor wird als modularer JAR beschrieben.",
      ],
      [
        "Zwingend die Quellen aller Abhängigkeiten",
        "Die Quellen anderer Module gehören nicht zum modularen JAR.",
      ],
      [
        "Zwingend eine eigene JVM-Laufzeit",
        "Ein modulares JAR braucht keine eingebettete JVM.",
      ],
    ),
    question(
      "M15",
      javaModules,
      "Wie behandelt Java JARs auf dem Klassenpfad hinsichtlich Modulen?",
      [
        "Sie gehören zum unbenannten Modul",
        "Auch modulare JARs werden auf dem Klassenpfad Teil des unbenannten Moduls.",
      ],
      [
        "Jeder JAR wird automatisch ein benanntes Modul",
        "Automatische Module entstehen bei einfachen JARs auf dem Modulpfad.",
      ],
      [
        "Sie können von keinem Modul geladen werden",
        "Der Klassenpfad bleibt nutzbar und gehört zum unbenannten Modul.",
      ],
    ),
    question(
      "M16",
      javaModules,
      "Was geschieht mit einem einfachen JAR auf dem Modulpfad?",
      [
        "Er kann als automatisches Modul eingebunden werden",
        "Der Modulpfad macht auch aus einfachen JARs Module für schrittweise Modularisierung.",
      ],
      [
        "Er wird Teil des unbenannten Moduls",
        "Das unbenannte Modul umfasst JARs auf dem Klassenpfad.",
      ],
      [
        "Er erhält automatisch eine handgeschriebene module-info.java",
        "Ein automatisches Modul benötigt keine erzeugte Quelldatei module-info.java.",
      ],
    ),
    question(
      "M17",
      javaModules,
      "Wozu nutzt das Modulsystem den Modulpfad?",
      [
        "Um benötigte Module außerhalb der Laufzeit zu finden",
        "Der Modulpfad nennt Artefakte und Verzeichnisse, aus denen Module aufgelöst werden.",
      ],
      [
        "Um nur Ressourcen ohne Bytecode zu finden",
        "Auf dem Modulpfad liegen gerade Modul-Artefakte mit Bytecode.",
      ],
      [
        "Um Quelltextdateien zur Laufzeit umzubenennen",
        "Modulauflösung sucht Module, nicht Umbenennungen von Quellen.",
      ],
    ),
    question(
      "M18",
      javaModules,
      "Womit beginnt die Auflösung einer modular gestarteten Java-Anwendung?",
      [
        "Mit dem initialen Modul und seinen requires-Abhängigkeiten",
        "Die Auflösung folgt vom Startmodul aus rekursiv den requires-Direktiven.",
      ],
      [
        "Mit allen JARs des Dateisystems",
        "Nur relevante Module des Modulpfads und der Laufzeit werden aufgelöst.",
      ],
      [
        "Mit allen exportierten Paketen aller Module",
        "Die Auflösung folgt Modulabhängigkeiten, nicht einer globalen Paketliste.",
      ],
    ),
    question(
      "M19",
      javaModules,
      "Was stellt eine Kante im Java-Modulgraphen aus requires grundsätzlich dar?",
      [
        "Lesbarkeit des benötigten Moduls",
        "requires erzeugt eine Lesbarkeitsbeziehung zwischen Modulen.",
      ],
      [
        "Vererbung einer Java-Klasse",
        "Klassenvererbung ist keine Kante des Modulgraphen.",
      ],
      [
        "Eine exportierte Paketdatei",
        "Eine Kante steht für Modul-Lesbarkeit, nicht für eine Datei.",
      ],
    ),
    question(
      "M20",
      javaModules,
      "Welche Abhängigkeit braucht ein Java-Modul nicht ausdrücklich mit requires zu nennen?",
      ["java.base", "Jedes Modul liest java.base implizit."],
      [
        "Jedes verwendete Anwendungsmodul",
        "Direkte Anwendungsmodul-Abhängigkeiten werden grundsätzlich mit requires deklariert.",
      ],
      [
        "Jedes genutzte Bibliotheksmodul",
        "Direkte Bibliotheksmodul-Abhängigkeiten werden grundsätzlich benannt.",
      ],
    ),
    question(
      "M21",
      tsModules,
      "Wann behandelt TypeScript eine Datei als Modul?",
      [
        "Wenn sie einen top-level import oder export enthält",
        "Ein import oder export auf oberster Ebene macht die Datei zum Modul.",
      ],
      [
        "Wenn sie eine Klasse deklariert",
        "Eine Klasse allein macht eine Datei noch nicht zum Modul.",
      ],
      [
        "Wenn ihr Dateiname auf .ts endet",
        "Die Endung allein entscheidet nicht über Modul- oder Skript-Scope.",
      ],
    ),
    question(
      "M22",
      tsModules,
      "Wie lässt sich eine TypeScript-Datei ohne importierte oder exportierte Werte ausdrücklich zum Modul machen?",
      [
        "Mit export {}",
        "export {} erzeugt einen Modul-Scope ohne Wert-Export.",
      ],
      [
        "Mit einem Kommentar module",
        "Ein Kommentar ändert den Scope der Datei nicht.",
      ],
      [
        "Mit einem lokalen const",
        "Eine lokale Deklaration allein ist kein top-level import oder export.",
      ],
    ),
    question(
      "M23",
      tsModules,
      "Was gilt für eine nicht exportierte Deklaration innerhalb eines TypeScript-Moduls?",
      [
        "Sie ist außerhalb des Moduls nicht direkt sichtbar",
        "Module haben einen eigenen Scope; für fremde Nutzung ist ein Export erforderlich.",
      ],
      [
        "Sie wird automatisch global sichtbar",
        "Globale Sichtbarkeit betrifft Skriptdateien, nicht interne Moduldeklarationen.",
      ],
      [
        "Sie ist über jeden beliebigen Importpfad erreichbar",
        "Ein Import kann nur exportierte Bindungen des Moduls beziehen.",
      ],
    ),
    question(
      "M24",
      tsModules,
      "Wofür steht import type bei TypeScript?",
      [
        "Für einen Import, der nur als Typ benutzt werden kann",
        "Die Dokumentation beschränkt import type auf Typverwendung.",
      ],
      [
        "Für einen Import, der erst bei einem Klick ausgeführt wird",
        "import type steuert Typverwendung, keine Browserinteraktion.",
      ],
      [
        "Für einen Import sämtlicher Laufzeitwerte",
        "Laufzeitwerte können über import type nicht als Werte verwendet werden.",
      ],
    ),
    question(
      "M25",
      tsModules,
      'Was bewirkt import "./file" ohne importierte Bindung?',
      [
        "Das Modul wird ausgewertet, ohne Namen zu binden",
        "Ein Side-Effect-Import führt den Modulcode aus, bindet aber keine exportierten Werte.",
      ],
      [
        "Der Import wird vollständig übersprungen",
        "Auch ohne gebundene Namen wird der Modulcode ausgewertet.",
      ],
      [
        "Alle Exporte werden global verfügbar",
        "Ein Side-Effect-Import macht Exporte nicht global sichtbar.",
      ],
    ),
  ],
  "tdd-for-domain-behavior": [
    question(
      "T01",
      tdd,
      "Womit beginnt TDD für eine geplante Verhaltensänderung nach Kent Becks Ablauf?",
      [
        "Mit einer Liste erwarteter Verhaltensvarianten",
        "Die Testliste sammelt zuerst Fälle der gewünschten Verhaltensänderung.",
      ],
      [
        "Mit der endgültigen Implementierungsklasse",
        "Implementierungsentscheidungen sollen die erste Verhaltensanalyse nicht dominieren.",
      ],
      [
        "Mit dem Refactoring des bisherigen Codes",
        "Refactoring folgt im Zyklus erst nach einem bestandenen Test.",
      ],
    ),
    question(
      "T02",
      tdd,
      "Welche Art von Fällen gehört neben dem Normalfall auf eine TDD-Testliste?",
      [
        "Fehler- und Grenzfälle des Verhaltens",
        "Beck nennt unter anderem Timeouts und fehlende Daten als Varianten.",
      ],
      [
        "Nur Fälle mit derselben Eingabe wie der Normalfall",
        "Die Liste soll gerade unterschiedliche Verhaltensvarianten erfassen.",
      ],
      [
        "Nur interne Methodenaufrufe",
        "Die Liste richtet sich auf erwartetes Verhalten, nicht bloß Implementierungsdetails.",
      ],
    ),
    question(
      "T03",
      tdd,
      "Was sollte eine TDD-Testliste bei einer Änderung zusätzlich beachten?",
      [
        "Bisheriges Verhalten, das nicht kaputtgehen darf",
        "Beck empfiehlt auch mögliche Regressionen in die Testliste aufzunehmen.",
      ],
      [
        "Nur neue Klassennamen",
        "Klassennamen ersetzen keine Beschreibung zu bewahrenden Verhaltens.",
      ],
      [
        "Nur die Zahl geänderter Dateien",
        "Dateizahlen zeigen keine fachliche Regression an.",
      ],
    ),
    question(
      "T04",
      tdd,
      "Welche Verwechslung soll bei der ersten TDD-Testliste vermieden werden?",
      [
        "Verhaltensfälle mit Entwurfsentscheidungen vermischen",
        "Die erste Liste dient der Verhaltensanalyse; interne Gestaltung kommt später.",
      ],
      [
        "Fehlerfälle zusammen mit Normalfällen erfassen",
        "Gerade diese Varianten gehören auf die Testliste.",
      ],
      [
        "Bestehendes Verhalten als Prüfpunkt aufnehmen",
        "Auch zu bewahrendes Verhalten darf auf der Liste stehen.",
      ],
    ),
    question(
      "T05",
      tdd,
      "Wie viele konkrete Tests schreibt Beck im nächsten TDD-Schritt zunächst?",
      [
        "Einen Test",
        "Nach der Liste wird ein einzelner Test geschrieben und zum Laufen gebracht.",
      ],
      [
        "Alle Tests der Liste",
        "Alle spekulativen Tests vor dem ersten GREEN zu schreiben bezeichnet Beck als Fehler.",
      ],
      [
        "Keinen Test, solange der Code noch fehlt",
        "Der Test geht der Implementierung voraus.",
      ],
    ),
    question(
      "T06",
      tdd,
      "Welche Bestandteile nennt Beck für einen echten automatisierten Test?",
      [
        "Setup, Aufruf und Assertions",
        "Der Test soll Vorbereitung, Ausführung und überprüfbare Aussagen enthalten.",
      ],
      [
        "Nur einen Testnamen und einen Kommentar",
        "Ohne Ausführung und Assertions prüft der Test kein Verhalten.",
      ],
      [
        "Nur die gemessene Codeabdeckung",
        "Abdeckung ersetzt keine überprüfbare Erwartung.",
      ],
    ),
    question(
      "T07",
      tdd,
      "Warum reicht ein Test ohne Assertion im TDD-Zyklus nicht aus?",
      [
        "Er kann das erwartete Verhalten nicht prüfen",
        "Beck nennt assertionslose Tests für bloße Coverage als Fehler.",
      ],
      [
        "Er kann nicht von JUnit gestartet werden",
        "Ein Test kann technisch laufen und dennoch nichts prüfen.",
      ],
      [
        "Er macht Refactoring grundsätzlich unmöglich",
        "Das Problem ist fehlende Prüfung, nicht eine technische Refactoring-Sperre.",
      ],
    ),
    question(
      "T08",
      tdd,
      "Welche Entwurfsentscheidung wird beim Schreiben des ersten Verhaltenstests vor allem sichtbar?",
      [
        "Die Schnittstelle zum geprüften Code",
        "Beim Testschreiben werden laut Beck primär Interface-Entscheidungen getroffen.",
      ],
      [
        "Die endgültige interne Datenstruktur",
        "Interne Implementierungsdetails sollen zunächst offen bleiben.",
      ],
      [
        "Die spätere Paketierungsdatei",
        "Der Verhaltenstest richtet den Blick auf die nutzbare Schnittstelle.",
      ],
    ),
    question(
      "T09",
      fowlerTdd,
      "Welchen zusätzlichen Nutzen hat ein zuerst geschriebener Test neben der automatisierten Rückmeldung?",
      [
        "Er zwingt zur frühen Auseinandersetzung mit der Schnittstelle",
        "Fowler nennt das Nachdenken über das Interface als zweiten Nutzen von Test First.",
      ],
      [
        "Er legt jede spätere Implementierungsentscheidung fest",
        "Ein Test beschreibt erwartetes Verhalten, nicht den gesamten Entwurf.",
      ],
      [
        "Er ersetzt die Auswahl fachlicher Testfälle",
        "Die Fallliste und Auswahl bleiben eigene Schritte.",
      ],
    ),
    question(
      "T10",
      tdd,
      "Warum schreibt man die gesamte TDD-Testliste nicht sofort als fertige Tests aus?",
      [
        "Frühe Erkenntnisse können spätere Testannahmen ändern",
        "Beck warnt vor Nacharbeit an spekulativen Tests, wenn der erste GREEN Entscheidungen ändert.",
      ],
      [
        "Weil automatisierte Tests erst nach dem Release erlaubt sind",
        "Die Tests werden schrittweise vor dem jeweiligen Implementierungsschritt geschrieben.",
      ],
      [
        "Weil nur ein Test pro Projekt zulässig ist",
        "Nach jedem Zyklus wird der nächste Fall bearbeitet.",
      ],
    ),
    question(
      "T11",
      tdd,
      "Was beeinflusst die Reihenfolge der nächsten Tests im TDD-Prozess?",
      [
        "Wie schnell wichtige Entwurfsfragen sichtbar werden",
        "Beck betont, dass Testauswahl und Reihenfolge Ergebnis und Arbeitsverlauf beeinflussen.",
      ],
      [
        "Nur die alphabetische Sortierung der Methoden",
        "Die Wahl des nächsten Tests ist eine fachliche Entwurfsentscheidung.",
      ],
      [
        "Nur die Reihenfolge der Quelldateien",
        "Dateireihenfolge bestimmt keinen sinnvollen Verhaltenstest.",
      ],
    ),
    question(
      "T12",
      fowlerTdd,
      "Welche Reihenfolge beschreibt den Kern eines TDD-Zyklus?",
      [
        "Fehlschlagender Test, lauffähige Lösung, Refactoring",
        "Fowler beschreibt Red, Green und Refactor als Kernschritte.",
      ],
      [
        "Refactoring, fertige Lösung, erster Test",
        "Der Test steht am Anfang des Zyklus und Refactoring folgt GREEN.",
      ],
      [
        "Fertige Lösung, Fehlerbehandlung, optionaler Test",
        "TDD beginnt mit einem prüfbaren erwarteten Verhalten.",
      ],
    ),
    question(
      "T13",
      tdd,
      "Worauf zielt der GREEN-Schritt nach einem roten TDD-Test?",
      [
        "Den Test durch eine echte Systemänderung bestehen lassen",
        "Beck fordert, das System so zu ändern, dass der Test tatsächlich grün wird.",
      ],
      [
        "Die fehlschlagende Assertion entfernen",
        "Das Löschen der Prüfung würde den Test nur scheinbar bestehen lassen.",
      ],
      [
        "Sofort eine vollständige Architektur neu bauen",
        "GREEN konzentriert sich zunächst auf das Bestehen des aktuellen Tests.",
      ],
    ),
    question(
      "T14",
      tdd,
      "Warum soll man einen tatsächlichen berechneten Wert nicht einfach als erwarteten Testwert übernehmen?",
      [
        "Damit die unabhängige Gegenprüfung erhalten bleibt",
        "Beck warnt, dass Kopieren des Istwerts die Prüfleistung des Tests entwertet.",
      ],
      [
        "Weil Testframeworks keine Literale akzeptieren",
        "Literale sind technisch möglich; entscheidend ist ihre fachliche Herleitung.",
      ],
      [
        "Weil der Test dann nicht mehr automatisiert läuft",
        "Der Test kann laufen, prüft aber womöglich nur die aktuelle Implementierung.",
      ],
    ),
    question(
      "T15",
      tdd,
      "Welche Tätigkeit soll beim GREEN-Schritt zunächst getrennt bleiben?",
      [
        "Größeres Refactoring",
        "Beck trennt das Bestehen des Tests von anschließenden Strukturverbesserungen.",
      ],
      [
        "Die minimale fachliche Implementierung",
        "Gerade sie ist erforderlich, um den Test echt grün zu machen.",
      ],
      [
        "Das erneute Ausführen des Tests",
        "Die Ausführung zeigt, ob GREEN erreicht wurde.",
      ],
    ),
    question(
      "T16",
      tdd,
      "Ein neuer Grenzfall fällt während RED → GREEN auf. Wo wird er zunächst festgehalten?",
      [
        "Auf der Testliste",
        "Beck empfiehlt neu entdeckte Fälle der Liste hinzuzufügen.",
      ],
      [
        "Nur im endgültigen Release-Text",
        "Die Testliste steuert den nächsten überprüfbaren Fall.",
      ],
      [
        "Als Ersatz für die aktuelle Assertion",
        "Der neue Fall sollte die laufende Prüfung nicht verdecken.",
      ],
    ),
    question(
      "T17",
      tdd,
      "Was empfiehlt Beck, wenn ein neuer Testfall die bisherige Implementierung grundlegend infrage stellt?",
      [
        "Den Zyklus gegebenenfalls mit anderer Testreihenfolge neu beginnen",
        "Er rät im beschriebenen Fall eher zum Neustart mit anderer Reihenfolge.",
      ],
      [
        "Den Grenzfall grundsätzlich streichen",
        "Ein wichtiger Grenzfall soll nicht wegen der bisherigen Lösung verschwinden.",
      ],
      [
        "Alle bisherigen Erwartungen unverändert einfrieren",
        "Das verhindert die notwendige Korrektur des Entwurfs.",
      ],
    ),
    question(
      "T18",
      tdd,
      "Wann wird ein erledigter Fall auf der TDD-Testliste abgehakt?",
      [
        "Wenn sein Test bestanden ist",
        "Beck beschreibt das Abhaken nach einem erfolgreichen Test.",
      ],
      [
        "Sobald eine Implementierungsidee formuliert ist",
        "Eine Idee zeigt noch nicht, dass das Verhalten funktioniert.",
      ],
      [
        "Sobald der Test erstmals rot ist",
        "RED weist nur nach, dass die Erwartung derzeit nicht erfüllt ist.",
      ],
    ),
    question(
      "T19",
      tdd,
      "Welche Rolle hat Refactoring nach GREEN in Becks Ablauf?",
      [
        "Es verbessert bei weiterhin bestandenem Test die interne Gestaltung",
        "Die optionale Refactoring-Phase trifft Implementierungsentscheidungen nach GREEN.",
      ],
      [
        "Es ersetzt die fachliche Assertion durch eine leichtere",
        "Refactoring soll das geprüfte Verhalten erhalten.",
      ],
      [
        "Es definiert rückwirkend einen anderen Testfall",
        "Ein neuer Verhaltenstest gehört in den nächsten Zyklus.",
      ],
    ),
    question(
      "T20",
      tdd,
      "Was bezeichnet Beck als Risiko in der Refactoring-Phase?",
      [
        "Weiter zu refaktorieren als für die aktuelle Arbeit nötig",
        "Er warnt ausdrücklich vor übermäßigem Aufräumen.",
      ],
      [
        "Die Tests nach dem Umbau erneut auszuführen",
        "Grüne Tests sichern die Strukturverbesserung ab.",
      ],
      [
        "Lokale Duplikation als mögliches Signal wahrzunehmen",
        "Duplikation darf geprüft werden, verlangt aber nicht automatisch eine Abstraktion.",
      ],
    ),
    question(
      "T21",
      tdd,
      "Wie soll man eine kleine Duplikation im TDD-Refactoring einordnen?",
      [
        "Als Hinweis, nicht als automatischen Befehl zur Abstraktion",
        "Beck nennt Duplikation einen Hinweis und warnt vor zu früher Abstraktion.",
      ],
      [
        "Als Beweis, dass der Verhaltenstest falsch ist",
        "Duplikation allein widerlegt keine fachliche Erwartung.",
      ],
      [
        "Als Grund, den GREEN-Test zu löschen",
        "Das würde den Verhaltensnachweis entfernen.",
      ],
    ),
    question(
      "T22",
      fowlerTdd,
      "Wann wird nach einem abgeschlossenen TDD-Zyklus der nächste Fall gewählt?",
      [
        "Nach dem Refactoring beziehungsweise Abschluss des aktuellen Zyklus",
        "Fowler beschreibt den nächsten Listenfall nach Red, Green und Refactor.",
      ],
      [
        "Vor der ersten Ausführung des aktuellen Tests",
        "Die Testfälle werden nacheinander durch einen vollständigen Zyklus geführt.",
      ],
      [
        "Erst nach der Auslieferung aller Änderungen",
        "Die Liste wird während der Entwicklung schrittweise bearbeitet.",
      ],
    ),
    question(
      "T23",
      tdd,
      "Welche Beobachtung zeigt im RED-Schritt den Nutzen des neuen Tests?",
      [
        "Er scheitert an der noch fehlenden erwarteten Verhaltensweise",
        "Der rote Test macht die Lücke vor der Systemänderung sichtbar.",
      ],
      [
        "Er scheitert wegen eines Tippfehlers im Testimport",
        "Ein Testfehler belegt die fachliche Lücke nicht.",
      ],
      [
        "Er ist grün, bevor das Verhalten implementiert wurde",
        "Ein sofort grüner Test zeigt die beabsichtigte Lücke nicht.",
      ],
    ),
    question(
      "T24",
      fowlerTdd,
      "Was geschieht laut Fowler häufig, wenn die Refactoring-Phase im TDD-Zyklus ausgelassen wird?",
      [
        "Gut getesteter Code sammelt dennoch unaufgeräumte Fragmente an",
        "Fowler beschreibt fehlendes Refactoring als häufige Ursache für schlecht strukturierten, wenn auch getesteten Code.",
      ],
      [
        "Die Tests verlieren automatisch sämtliche Assertions",
        "Ausgelassenes Refactoring entfernt nicht automatisch bestehende Prüfungen.",
      ],
      [
        "Der Code wird dadurch automatisch besser gekapselt",
        "Ohne Strukturverbesserung können sich unaufgeräumte Teile gerade ansammeln.",
      ],
    ),
    question(
      "T25",
      fowlerTdd,
      "Welche Grenze hat eine grüne TDD-Suite für eine Fachregel?",
      [
        "Sie bestätigt nur die durch Tests beschriebenen Fälle",
        "TDD arbeitet die ausgewählten Testfälle ab; nicht beschriebene Varianten bleiben ungeprüft.",
      ],
      [
        "Sie bestätigt automatisch alle denkbaren Varianten",
        "Auch eine selbsttestende Codebasis kann fehlende Fachfälle nicht abdecken.",
      ],
      [
        "Sie sagt nichts über die tatsächlich getesteten Fälle",
        "Für die formulierten Erwartungen liefert die Suite sehr wohl Rückmeldung.",
      ],
    ),
  ],
  "archunit-for-java-architecture": [
    question(
      "A01",
      archunit,
      "Welche Eingabe verarbeitet ArchUnit im Kern für Architekturprüfungen?",
      [
        "Importierten Java-Bytecode",
        "ArchUnit importiert Bytecode in Java-Strukturen und prüft darauf Regeln.",
      ],
      [
        "Nur die README-Datei des Projekts",
        "Dokumentation allein liefert nicht die geprüften Klassenbeziehungen.",
      ],
      [
        "Nur Laufzeit-HTTP-Anfragen",
        "ArchUnit analysiert Klassenstruktur statt Browseranfragen.",
      ],
    ),
    question(
      "A02",
      archunit,
      "Womit importiert ein einfacher ArchUnit-Test Klassen aus einem Java-Paket?",
      [
        "Mit ClassFileImporter.importPackages(...)",
        "Der Einstieg nutzt ClassFileImporter zum Import eines Pakets.",
      ],
      [
        "Mit ServiceLoader.load(...)",
        "ServiceLoader findet Dienste und importiert keine Klassen für ArchUnit-Regeln.",
      ],
      [
        "Mit ArchRuleDefinition.classes(...)",
        "ArchRuleDefinition formuliert Regeln, importiert aber keine Java-Klassen.",
      ],
    ),
    question(
      "A03",
      archunit,
      "Welcher Aufruf wertet eine formulierte ArchRule gegen importierte Klassen aus?",
      [
        "rule.check(importedClasses)",
        "Die ArchUnit-Anleitung prüft eine Regel mit check gegen JavaClasses.",
      ],
      [
        "rule.export(importedClasses)",
        "Der gezeigte Prüfschritt heißt check, nicht export.",
      ],
      [
        "rule.navigate(importedClasses)",
        "Navigation ist keine Auswertung einer ArchRule.",
      ],
    ),
    question(
      "A04",
      archunit,
      "Was beschreibt noClasses().that().resideInAPackage(...).should().dependOnClassesThat()...?",
      [
        "Ein Verbot bestimmter Paketabhängigkeiten",
        "Die Regel verbietet Abhängigkeiten ausgewählter Klassen zu Zielklassen.",
      ],
      [
        "Die fachlichen Rückgabewerte aller Methoden",
        "Die Regel betrachtet Strukturbeziehungen, nicht fachliche Ergebnisse.",
      ],
      [
        "Die Startreihenfolge von Web-Controllern",
        "Die Regel trifft eine statische Abhängigkeitsaussage.",
      ],
    ),
    question(
      "A05",
      archunit,
      "Was kann onlyHaveDependentClassesThat() an einer Paketgrenze prüfen?",
      [
        "Welche Pakete Klassen des Zielpakets benutzen dürfen",
        "Die Beispielregel begrenzt eingehende Abhängigkeiten auf erlaubte Pakete.",
      ],
      [
        "Welche Testfälle zuerst laufen",
        "Testreihenfolge wird damit nicht festgelegt.",
      ],
      [
        "Welche Methoden zur Laufzeit schnell genug sind",
        "Laufzeitperformance ist keine statische Abhängigkeitsregel.",
      ],
    ),
    question(
      "A06",
      archunit,
      "Welche Regelart prüft, ob Klassen mit bestimmtem Namensanfang in einem vorgesehenen Paket liegen?",
      [
        "Class and Package Containment",
        "Die Anleitung zeigt dafür haveSimpleNameStartingWith und resideInAPackage.",
      ],
      [
        "Cycle Check",
        "Eine Zyklusregel prüft Abhängigkeitskreise zwischen Slices.",
      ],
      [
        "Layer Check",
        "Eine Schichtregel steuert erlaubte Beziehungen zwischen Schichten.",
      ],
    ),
    question(
      "A07",
      archunit,
      "Welche Eigenschaft lässt sich mit einer ArchUnit-Vererbungsregel prüfen?",
      [
        "Eine Namenskonvention für Implementierungen eines Interfaces",
        "Das Beispiel verknüpft implement(Connection.class) mit einem Namenssuffix.",
      ],
      [
        "Ob eine Instanz zur Laufzeit genügend Arbeitsspeicher hat",
        "Das ist kein Vererbungs- oder Strukturmerkmal.",
      ],
      [
        "Ob ein Browser die Klasse rendert",
        "ArchUnit prüft Java-Klassen, keine Browserdarstellung.",
      ],
    ),
    question(
      "A08",
      archunit,
      "Welche Beziehung kann eine ArchUnit-Annotationsregel einschränken?",
      [
        "Welche annotierten Klassen auf bestimmte Typen zugreifen dürfen",
        "Das Beispiel fordert eine Annotation an abhängigen Klassen.",
      ],
      [
        "Welche CSS-Klassen ein Element besitzt",
        "Eine Java-Annotation ist keine CSS-Klasse.",
      ],
      [
        "Welche Benutzer eine Annotation sehen",
        "Die Regel betrifft statische Java-Codebeziehungen.",
      ],
    ),
    question(
      "A09",
      archunit,
      "Was definiert layeredArchitecture().layer(...).definedBy(...)?",
      [
        "Eine Schicht anhand eines Paketmusters",
        "ArchUnit ordnet in der Beispielregel Controller, Service und Persistence über Pakete zu.",
      ],
      [
        "Eine fachliche Antwortoption",
        "Eine Schichtdefinition ist kein Lerncheck-Ergebnis.",
      ],
      [
        "Eine Laufzeitdatenbank-Tabelle",
        "definedBy benennt hier Paketbereiche im Code.",
      ],
    ),
    question(
      "A10",
      archunit,
      'Welche Beziehung kann whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service") absichern?',
      [
        "Nur die Service-Schicht darf die Persistence-Schicht nutzen",
        "Das Beispiel begrenzt eingehende Abhängigkeiten der Persistence-Schicht.",
      ],
      [
        "Persistence darf nur Service aufrufen",
        "Die Regel beschreibt, wer Persistence aufrufen darf, nicht ihre ausgehenden Zugriffe.",
      ],
      [
        "Alle Schichten dürfen Persistence direkt nutzen",
        "mayOnlyBeAccessedByLayers begrenzt gerade die zugelassenen Nutzer.",
      ],
    ),
    question(
      "A11",
      archunit,
      "Welche ArchUnit-Regel sucht Zyklen zwischen aus Paketen gebildeten Slices?",
      [
        "slices().matching(...).should().beFreeOfCycles()",
        "Die Anleitung zeigt beFreeOfCycles für Paket-Slices.",
      ],
      [
        "classes().should().bePublic()",
        "Sichtbarkeit prüft keine Zyklen zwischen Slices.",
      ],
      [
        "layeredArchitecture().layer(...) allein",
        "Eine Schichtdefinition ohne passende Beziehung ist keine Zyklusprüfung.",
      ],
    ),
    question(
      "A12",
      archunit,
      "Was markieren (*) in einem ArchUnit-Slice-Paketmuster?",
      [
        "Den erfassten Paketabschnitt als Slice-Kennung",
        "Die Slice-Regeln verwenden Klammern für erfasste Segmente.",
      ],
      [
        "Eine Java-Methode mit beliebigem Namen",
        "Das Muster arbeitet auf Paketsegmenten, nicht Methodennamen.",
      ],
      [
        "Eine Testannotation für JUnit",
        "Die Klammern gehören zur Slice-Mustersyntax.",
      ],
    ),
    question(
      "A13",
      archunit,
      "Welche Ebene von ArchUnit stellt ClassFileImporter bereit?",
      ["Core", "Die Core-Ebene importiert Bytecode in Java-Objekte."],
      [
        "Library",
        "Die Library-Ebene liefert höherwertige vorbereitete Regeln.",
      ],
      [
        "Lang",
        "Die Lang-Ebene formuliert Regeln aus den importierten Strukturen.",
      ],
    ),
    question(
      "A14",
      archunit,
      "Wofür dient die Lang-API von ArchUnit?",
      [
        "Architekturregeln lesbar und deklarativ formulieren",
        "Die Lang-API bietet die flüssige Regelsyntax über der Core-Information.",
      ],
      [
        "Java-Bytecode ausführen, um Fachwerte zu berechnen",
        "Die Lang-API formuliert Strukturregeln; sie führt keine Fachfälle aus.",
      ],
      [
        "Maven-Abhängigkeiten automatisch aktualisieren",
        "Abhängigkeitsupdates sind keine Aufgabe der Regelsyntax.",
      ],
    ),
    question(
      "A15",
      archunit,
      "Welche Ebene liefert vordefinierte Regeln für komplexere Architekturen wie Schichten?",
      [
        "Library",
        "ArchUnit ordnet komplexere vorbereitete Regeln der Library-Ebene zu.",
      ],
      ["Core", "Core liefert den Import und die strukturellen Java-Objekte."],
      [
        "Lang",
        "Lang stellt die allgemeine Sprache für Regelbedingungen bereit.",
      ],
    ),
    question(
      "A16",
      archunit,
      "Was bedeutet ..service.. in einem ArchUnit-Paketmuster?",
      [
        "Ein Paketsegment service mit beliebigen Paketabschnitten davor und danach",
        "Die zwei Punkte stehen für beliebig viele Pakete um service herum.",
      ],
      [
        "Eine Klasse mit dem einfachen Namen service",
        "Paketmuster werden gegen Paketnamen statt Klassennamen geprüft.",
      ],
      [
        "Genau das Paket service ohne Ober- oder Unterpakete",
        "Die Platzhalter erlauben weitere Paketabschnitte.",
      ],
    ),
    question(
      "A17",
      archunit,
      "Warum trifft ein Paketmuster ..SomeService nicht die Klasse SomeService?",
      [
        "Paketmuster prüfen den Paketnamen, nicht den Klassennamen",
        "Die Anleitung warnt ausdrücklich vor dieser Verwechslung.",
      ],
      [
        "Weil Java-Klassen nie Namen mit Service tragen dürfen",
        "Der Klassenname ist zulässig; nur das gewählte Prädikat passt nicht.",
      ],
      [
        "Weil SomeService nur per Reflection sichtbar wäre",
        "Reflection ist für die Erklärung des Paketmusters unerheblich.",
      ],
    ),
    question(
      "A18",
      archunit,
      "Womit prüft ArchUnit den einfachen Namen einer Klasse statt ihres Pakets?",
      [
        "Mit haveSimpleName(...)",
        "Die Anleitung nennt ein namensbasiertes Prädikat für Klassennamen.",
      ],
      [
        "Mit resideInAPackage(...)",
        "Dieses Prädikat bezieht sich auf den Paketnamen.",
      ],
      [
        "Mit slices().matching(...) allein",
        "Das Slice-Muster bildet Paketgruppen und prüft keinen einfachen Klassennamen.",
      ],
    ),
    question(
      "A19",
      archunit,
      "Was melden ArchUnit-Regelverletzungen im gezeigten Abhängigkeitsbeispiel?",
      [
        "Betroffene Klassen, Aufruf und Quellzeile",
        "Die Beispielmeldung nennt den verbotenen Methodenaufruf und die Zeile.",
      ],
      [
        "Nur die Anzahl aller HTTP-Anfragen",
        "Eine Architekturverletzung beschreibt die Codebeziehung.",
      ],
      [
        "Nur den letzten Browser-Screenshot",
        "ArchUnit arbeitet nicht auf Browserbildern.",
      ],
    ),
    question(
      "A20",
      archunit,
      "Welchen Vorteil bietet die ArchUnit-JUnit-Unterstützung beim Import gleicher Klassen in mehreren Tests?",
      [
        "Sie kann importierte Klassen zwischen Tests zwischenspeichern",
        "Die Anleitung nennt automatisches Caching und weniger Boilerplate.",
      ],
      [
        "Sie ersetzt jede Architekturregel durch eine Standardregel",
        "Die Regeln müssen weiterhin definiert werden.",
      ],
      [
        "Sie führt automatisch Browser-Assertions aus",
        "JUnit-Unterstützung importiert Klassen und wertet ArchTest-Regeln aus.",
      ],
    ),
    question(
      "A21",
      archunit,
      "Welche Annotation gibt in der ArchUnit-JUnit-Unterstützung die zu analysierenden Pakete an?",
      [
        "@AnalyzeClasses",
        "Die Anleitung zeigt @AnalyzeClasses(packages = ...).",
      ],
      ["@ArchTest", "@ArchTest markiert die auszuwertende Regel."],
      [
        "@Override",
        "@Override betrifft Java-Methoden, nicht die Paketwahl für ArchUnit.",
      ],
    ),
    question(
      "A22",
      archunit,
      "Welche Annotation markiert eine Regel für die automatische Auswertung mit ArchUnit-JUnit?",
      ["@ArchTest", "JUnit-Support wertet mit @ArchTest markierte Regeln aus."],
      [
        "@AnalyzeClasses",
        "Diese Annotation bestimmt den Importbereich, nicht die einzelne Regel.",
      ],
      [
        "@Deprecated",
        "@Deprecated markiert veraltete Java-Elemente und startet keine ArchUnit-Regel.",
      ],
    ),
    question(
      "A23",
      archunit,
      "Was ist ein sinnvoller ArchUnit-Test für Controller und Persistenz?",
      [
        "Ein Verbot direkter Controller-Abhängigkeiten auf Persistenzklassen",
        "Paket- und Schichtregeln können die gewünschte Trennung prüfen.",
      ],
      [
        "Ein Vergleich der HTTP-Antworttexte im Browser",
        "Das prüft Verhalten, nicht die Java-Abhängigkeitsstruktur.",
      ],
      [
        "Ein Screenshot jedes Controllers",
        "Screenshots erfassen keine statischen Klassenabhängigkeiten.",
      ],
    ),
    question(
      "A24",
      archunit,
      "Was gilt für die Aussagekraft einer grünen ArchUnit-Regel?",
      [
        "Die formulierte Strukturbedingung gilt für die importierten Klassen",
        "ArchUnit prüft konkrete Regeln auf einem gewählten Importbereich.",
      ],
      [
        "Alle nicht formulierten Architekturregeln gelten ebenfalls",
        "Nicht definierte Bedingungen werden nicht automatisch geprüft.",
      ],
      [
        "Das Fachverhalten aller Klassen ist korrekt",
        "Strukturprüfungen ersetzen keine Verhaltenstests.",
      ],
    ),
    question(
      "A25",
      archunit,
      "Was prüft die Onion-Architecture-Regel laut ArchUnit für Adapter?",
      [
        "Adapter dürfen nicht voneinander abhängen",
        "Die Anleitung beschreibt Adapter als Verbindungen zu Infrastruktur ohne Adapter-zu-Adapter-Abhängigkeit.",
      ],
      [
        "Jeder Adapter muss direkt von jedem anderen Adapter abhängen",
        "Die Onion-Regel verbietet gerade solche Abhängigkeiten.",
      ],
      [
        "Adapter müssen sämtliche Domänenregeln selbst enthalten",
        "Domänenmodelle und -dienste liegen im Kern, nicht in den Adaptern.",
      ],
    ),
  ],
  "playwright-for-web-flows": [
    question(
      "P01",
      playwrightLocators,
      "Was repräsentiert ein Playwright-Locator?",
      [
        "Eine Möglichkeit, Elemente zum jeweiligen Zeitpunkt auf der Seite zu finden",
        "Locators bilden die Grundlage für wiederholbares Finden und automatisches Warten.",
      ],
      [
        "Eine dauerhaft gespeicherte DOM-Elementinstanz",
        "Ein Locator sucht Elemente bei seiner Nutzung erneut.",
      ],
      [
        "Ein Screenshot der gesamten Seite",
        "Ein Locator beschreibt Elemente, nicht ein Bild der Seite.",
      ],
    ),
    question(
      "P02",
      playwrightLocators,
      "Welcher Locator wählt einen Button über Rolle und zugänglichen Namen?",
      [
        "getByRole('button', { name: 'Speichern' })",
        "getByRole verbindet die semantische Rolle mit dem zugänglichen Namen.",
      ],
      [
        "getByText('button')",
        "Textinhalt allein bezeichnet weder die Rolle noch den Namen Speichern.",
      ],
      [
        "locator('button').first()",
        "Die erste Position ist kein stabiler zugänglicher Name.",
      ],
    ),
    question(
      "P03",
      playwrightLocators,
      "Warum sind Rolle und zugänglicher Name für viele Webtests gute Selektoren?",
      [
        "Sie entsprechen der für Nutzende sichtbaren Bedienbedeutung",
        "Playwright empfiehlt nutzernahe Attribute wie Rolle und Namen.",
      ],
      [
        "Sie ignorieren jede Änderung am angezeigten Inhalt",
        "Ein veränderter zugänglicher Name kann den Test bewusst scheitern lassen.",
      ],
      [
        "Sie wählen auch ohne passende Rolle stets genau ein Element",
        "Die Rolle muss zum Element passen und Eindeutigkeit bleibt nötig.",
      ],
    ),
    question(
      "P04",
      playwrightLocators,
      "Welcher Locator passt zu einem Eingabefeld mit sichtbarer Beschriftung E-Mail?",
      [
        "getByLabel('E-Mail')",
        "getByLabel nutzt die verknüpfte Beschriftung eines Eingabefelds.",
      ],
      [
        "getByRole('heading', { name: 'E-Mail' })",
        "Ein Eingabefeld ist keine Überschrift.",
      ],
      [
        "getByAltText('E-Mail')",
        "Alternativtext richtet sich vor allem an Bilder, nicht an Formularlabels.",
      ],
    ),
    question(
      "P05",
      playwrightLocators,
      "Welchen Locator bietet Playwright für den Placeholder eines Eingabefelds?",
      [
        "getByPlaceholder(...) ",
        "Die Locator-Dokumentation zeigt getByPlaceholder für Platzhaltertext.",
      ],
      [
        "getByTitle(...) ",
        "getByTitle sucht das title-Attribut statt den Placeholder.",
      ],
      ["getByRole('placeholder')", "placeholder ist keine ARIA-Rolle."],
    ),
    question(
      "P06",
      playwrightLocators,
      "Wann ist getByTestId gegenüber Rolle oder Label besonders passend?",
      [
        "Wenn keine geeignete nutzernahe Kennzeichnung zur stabilen Auswahl vorhanden ist",
        "Playwright nennt Test-IDs als ausdrücklich vereinbarten Selektor, während nutzernahe Locators bevorzugt werden.",
      ],
      [
        "Wenn ein Element bereits einen eindeutigen zugänglichen Namen besitzt",
        "Dann kann die Nutzerperspektive direkt über Rolle oder Label geprüft werden.",
      ],
      [
        "Wenn beliebige CSS-Positionen im DOM eingefroren werden sollen",
        "Test-IDs sind stabile Kennungen und kein Ersatz für Positionsannahmen.",
      ],
    ),
    question(
      "P07",
      playwrightLocators,
      "Wie grenzt man einen 'Hinzufügen'-Button in einer bestimmten Produktzeile ein?",
      [
        "Die Zeile nach Produkttext filtern und darin den Button suchen",
        "Das Beispiel kombiniert listitem.filter({ hasText }) mit getByRole('button').",
      ],
      [
        "Immer den ersten Hinzufügen-Button der Seite anklicken",
        "Die erste Position kann zu einem anderen Produkt gehören.",
      ],
      [
        "Alle Hinzufügen-Buttons gleichzeitig anklicken",
        "Der Ablauf soll die eine beabsichtigte Produktzeile bedienen.",
      ],
    ),
    question(
      "P08",
      playwrightLocators,
      "Was prüft locator.filter({ has: innerLocator })?",
      [
        "Ob ein Treffer ein passendes untergeordnetes Element enthält",
        "has filtert die äußeren Treffer anhand eines relativen inneren Locators.",
      ],
      [
        "Ob der gesamte Browser eine zweite Seite geöffnet hat",
        "filter untersucht passende Elemente innerhalb des Locators.",
      ],
      [
        "Ob der Locator exakt eine CSS-Klasse besitzt",
        "has erwartet einen inneren Locator, keine CSS-Klassenliste.",
      ],
    ),
    question(
      "P09",
      playwrightLocators,
      "Von wo aus wird ein innerer Locator in filter({ has: ... }) ausgewertet?",
      [
        "Relativ zum äußeren Treffer",
        "Die Dokumentation betont die relative Auswertung ab dem äußeren Locator.",
      ],
      [
        "Immer vom Dokumentstamm",
        "Gerade diese Annahme kann laut Beispiel zu keinem Treffer führen.",
      ],
      [
        "Immer vom Browserfenster der letzten Aktion",
        "Die Suche bezieht sich auf den äußeren Locator im DOM.",
      ],
    ),
    question(
      "P10",
      playwrightLocators,
      "Welcher Aufruf grenzt eine Suche auf einen bestimmten Dialog ein?",
      [
        "dialog.getByRole('button', { name: 'Speichern' })",
        "Verkettete Locators suchen innerhalb des Dialogtreffers.",
      ],
      [
        "page.getByRole('button').first()",
        "Eine globale erste Position gehört nicht zwingend zum Dialog.",
      ],
      [
        "page.getByText('Dialog').last()",
        "Text und letzte Position bezeichnen nicht den gewünschten Button im Dialog.",
      ],
    ),
    question(
      "P11",
      playwrightLocators,
      "Was passiert bei einer Locator-Aktion, die mehrere DOM-Elemente trifft?",
      [
        "Eine Strictness-Verletzung wird ausgelöst",
        "Aktionen mit einem erwarteten Ziel verlangen einen eindeutigen Treffer.",
      ],
      [
        "Alle Treffer werden automatisch angeklickt",
        "Eine einzelne click-Aktion bedient nicht stillschweigend alle Treffer.",
      ],
      [
        "Stets der erste Treffer wird verwendet",
        "Die erste Position muss ausdrücklich gewählt werden.",
      ],
    ),
    question(
      "P12",
      playwrightLocators,
      "Warum ist locator.first() bei mehreren Treffern häufig riskant?",
      [
        "Eine Seitenänderung kann ein anderes Element an die erste Stelle rücken",
        "Die Anleitung empfiehlt stattdessen einen eindeutigen Locator.",
      ],
      [
        "first() schaltet alle Assertions ab",
        "first() wählt ein Element, verändert aber keine Assertions.",
      ],
      [
        "first() klickt jedes Element nacheinander",
        "first() bezeichnet nur den ersten Treffer.",
      ],
    ),
    question(
      "P13",
      playwrightLocators,
      "Was bewirkt locator.and(otherLocator)?",
      [
        "Es verlangt, dass ein Element beide Locator-Bedingungen erfüllt",
        "and schränkt auf die Schnittmenge der Locators ein.",
      ],
      [
        "Es sucht ein Element mit einer der beiden Bedingungen",
        "Für alternative Treffer gibt es or.",
      ],
      [
        "Es wartet ausschließlich auf eine Netzwerkantwort",
        "and kombiniert Element-Locators, keine Netzwerkwartebedingung.",
      ],
    ),
    question(
      "P14",
      playwrightLocators,
      "Was kann locator.or(otherLocator) ergeben, wenn beide Alternativen sichtbar sind?",
      [
        "Mehrere Treffer und damit bei Einzelaktionen einen Strictness-Fehler",
        "Die Dokumentation warnt bei or vor zwei Treffern.",
      ],
      [
        "Automatisch nur den zuerst geschriebenen Locator",
        "or kann beide Alternativen liefern.",
      ],
      [
        "Einen Testabbruch ohne Prüfung der Trefferzahl",
        "Der konkrete Fehler entsteht erst bei einer Operation mit Einzelelement-Erwartung.",
      ],
    ),
    question(
      "P15",
      playwrightLocators,
      "Wie kann ein Locator nach einer DOM-Aktualisierung weiter funktionieren?",
      [
        "Er sucht das Element bei der Nutzung erneut",
        "Locators beschreiben eine Suche und werden zur Aktion neu aufgelöst.",
      ],
      [
        "Er hält die alte DOM-Instanz dauerhaft fest",
        "Das würde nach einem Re-Render zu veralteten Elementen führen.",
      ],
      [
        "Er verhindert grundsätzlich jede DOM-Änderung",
        "Locators blockieren die Anwendung nicht.",
      ],
    ),
    question(
      "P16",
      playwrightAssertions,
      "Was unterscheidet Playwrights auto-retrying Assertions von einem einmaligen Wertvergleich?",
      [
        "Sie wiederholen die Prüfung bis Erfolg oder Timeout",
        "Die dokumentierten Web-Assertions warten wiederholt auf den erwarteten Zustand.",
      ],
      [
        "Sie ändern selbständig den Anwendungscode",
        "Assertions beobachten Zustände und implementieren keine Anwendung.",
      ],
      [
        "Sie bestehen unabhängig vom Seitenzustand",
        "Nach dem Timeout schlägt eine unerfüllte Erwartung fehl.",
      ],
    ),
    question(
      "P17",
      playwrightAssertions,
      "Warum muss eine wiederholende Playwright-Assertion mit await aufgerufen werden?",
      [
        "Weil die asynchrone Prüfung auf ihren Abschluss gewartet werden muss",
        "Die Dokumentation weist bei auto-retrying Assertions ausdrücklich auf await hin.",
      ],
      [
        "Weil await den Browser neu startet",
        "await wartet auf die Assertion und startet keinen Browser.",
      ],
      [
        "Weil sonst jeder Locator global wird",
        "await verändert den Suchbereich des Locators nicht.",
      ],
    ),
    question(
      "P18",
      playwrightAssertions,
      "Welche Assertion prüft, dass eine Überschrift für Nutzende sichtbar ist?",
      [
        "await expect(heading).toBeVisible()",
        "toBeVisible ist eine wiederholende Locator-Assertion.",
      ],
      [
        "expect(heading).toBeEmpty()",
        "Leerheit sagt nichts darüber, ob die Überschrift sichtbar ist.",
      ],
      [
        "expect(page).toHaveURL('/heading')",
        "Eine URL-Prüfung belegt die Sichtbarkeit der Überschrift nicht.",
      ],
    ),
    question(
      "P19",
      playwrightAssertions,
      "Welche Assertion prüft den Text eines gefundenen Elements mit automatischem Retry?",
      [
        "await expect(locator).toHaveText('Fertig')",
        "toHaveText gehört zu den wiederholenden Locator-Assertions.",
      ],
      [
        "expect(await locator.textContent()).toBe('Fertig')",
        "Der einmal gelesene Wert wird ohne automatisches Retry verglichen.",
      ],
      [
        "await locator.click()",
        "Ein Klick ist eine Aktion und keine Textassertion.",
      ],
    ),
    question(
      "P20",
      playwrightAssertions,
      "Worin liegt bei asynchroner Webanzeige ein Risiko einfacher, nicht wiederholender Assertions?",
      [
        "Sie können vor dem erwarteten DOM-Zustand fehlschlagen",
        "Die Playwright-Dokumentation warnt hier vor instabilen Tests.",
      ],
      [
        "Sie machen den DOM-Zustand unsichtbar",
        "Die Aussage betrifft Timing, nicht die Sichtbarkeit der Seite.",
      ],
      [
        "Sie verhindern jede Navigation",
        "Ein einmaliger Vergleich sperrt keine Navigation.",
      ],
    ),
    question(
      "P21",
      playwrightAssertions,
      "Welche Möglichkeit bietet Playwright für komplexere wiederholte Prüfungen jenseits fertiger Locator-Assertions?",
      [
        "expect.poll(...) oder expect.toPass(...) ",
        "Die Assertions-Dokumentation nennt diese APIs für komplexere Retry-Bedingungen.",
      ],
      [
        "locator.first() als Ersatz für jede Prüfung",
        "first wählt einen Treffer, führt aber keine komplexe Assertion aus.",
      ],
      [
        "Einmaliges Auslesen ohne weitere Prüfung",
        "Das bietet gerade kein Retry.",
      ],
    ),
    question(
      "P22",
      playwrightAssertions,
      "Was bewirkt expect.soft bei einer fehlgeschlagenen Assertion?",
      [
        "Der Test läuft weiter, wird aber als fehlgeschlagen markiert",
        "Soft Assertions beenden die Ausführung nicht sofort, halten den Fehler aber fest.",
      ],
      [
        "Der Fehlschlag wird als Erfolg gezählt",
        "Die Testwertung bleibt fehlgeschlagen.",
      ],
      [
        "Der Browser schließt sofort",
        "Soft Assertions erlauben weitere Testschritte.",
      ],
    ),
    question(
      "P23",
      playwrightAssertions,
      "Wofür kann expect.configure({ timeout: 10000 }) eingesetzt werden?",
      [
        "Für eine Expect-Variante mit geändertem Standard-Timeout",
        "Die Dokumentation zeigt eine vorkonfigurierte Expect-Instanz.",
      ],
      [
        "Zum Umschalten der Anwendung auf Produktionsdaten",
        "expect.configure stellt Assertion-Vorgaben ein, keine Datenquelle.",
      ],
      [
        "Zum festen Sortieren aller DOM-Elemente",
        "Ein Timeout ändert keine DOM-Reihenfolge.",
      ],
    ),
    question(
      "P24",
      playwrightLocators,
      "Was lässt sich mit locator.filter({ hasNotText: 'Ausverkauft' }) ausdrücken?",
      [
        "Nur Treffer ohne diesen Text weiterverwenden",
        "hasNotText filtert äußere Treffer nach fehlendem Text.",
      ],
      [
        "Den Text Ausverkauft aus der Anwendung löschen",
        "Ein Locator filtert die Suche, verändert aber keinen DOM-Text.",
      ],
      [
        "Alle Treffer mit diesem Text bevorzugen",
        "hasNotText schließt solche Treffer gerade aus.",
      ],
    ),
    question(
      "P25",
      playwrightAssertions,
      "Welche Aussage trifft ein grüner Browser-Test für einen Webablauf?",
      [
        "Der geprüfte Ablauf erfüllt die formulierten Assertions unter den Testbedingungen",
        "Die Assertions belegen nur beobachtete Zustände des ausgeführten Ablaufs.",
      ],
      [
        "Jede fachliche Regel der Anwendung ist geprüft",
        "Nicht durchlaufene Fachfälle sind durch diesen Test nicht abgedeckt.",
      ],
      [
        "Jede Browser- und Gerätekombination ist geprüft",
        "Ein Testlauf betrifft die tatsächlich ausgeführten Projekte und Umgebungen.",
      ],
    ),
  ],
  "web-xss-and-safe-dom": [
    question(
      "X01",
      owaspXss,
      "Welche Voraussetzung benötigt ein erfolgreicher XSS-Angriff?",
      [
        "Angreiferkontrollierter Inhalt wird in der Seite ausgeführt",
        "OWASP beschreibt das Einbringen und Ausführen schädlichen Inhalts als Kern von XSS.",
      ],
      [
        "Ein bloß angezeigter Text ohne Codeausführung",
        "Reine Textanzeige erfüllt die Ausführungsbedingung nicht.",
      ],
      [
        "Ein fehlender CSS-Kommentar",
        "Ein CSS-Kommentar allein ist keine Ausführung eingeschleusten Inhalts.",
      ],
    ),
    question(
      "X02",
      owaspXss,
      "Wie sollte ein Web-Frontend einen untrusted Hinweis als reinen Text in ein DOM-Element schreiben?",
      [
        "Mit textContent",
        "OWASP nennt textContent als sicheren Sink für Text.",
      ],
      [
        "Mit innerHTML aus dem Rohwert",
        "innerHTML interpretiert den Wert als HTML und kann gefährliche Inhalte verarbeiten.",
      ],
      [
        "Mit document.write aus dem Rohwert",
        "document.write fügt Inhalt in einen gefährlichen HTML-Kontext ein.",
      ],
    ),
    question(
      "X03",
      owaspXss,
      "Warum reicht eine einzige allgemeine Escape-Funktion nicht für alle XSS-Ausgabestellen?",
      [
        "HTML, Attribute, JavaScript, CSS und URLs haben verschiedene Kontexte",
        "OWASP fordert zum jeweiligen Ausgabekontext passende Behandlung.",
      ],
      [
        "Weil jeder Kontext dieselben Zeichen ausführt",
        "Gerade die Unterschiede der Kontexte verlangen verschiedene Kodierung.",
      ],
      [
        "Weil nur die Eingabedatei kodiert werden darf",
        "Entscheidend ist die Stelle, an der Daten ausgegeben werden.",
      ],
    ),
    question(
      "X04",
      owaspXss,
      "Welche Maßnahme passt für einen untrusted String zwischen HTML-Tags?",
      [
        "HTML-Entity-Encoding bei der Ausgabe",
        "OWASP empfiehlt Entity-Encoding für den HTML-Textkontext.",
      ],
      [
        "Nur URL-Encoding",
        "URL-Encoding ist auf URL-Teile zugeschnitten, nicht HTML-Text.",
      ],
      ["Nur CSS-Encoding", "CSS-Encoding schützt CSS-Werte, nicht HTML-Text."],
    ),
    question(
      "X05",
      owaspXss,
      "Welche Zeichenfolge steht nach HTML-Entity-Encoding für ein öffnendes Winkelzeichen?",
      ["&lt;", "OWASP zeigt die Kodierung von < zu &lt; im HTML-Kontext."],
      ["%3C", "Das ist URL-Percent-Encoding, nicht die gezeigte HTML-Entity."],
      [
        "\\3C",
        "Das ist eine CSS-artige Escapeform, nicht HTML-Entity-Encoding.",
      ],
    ),
    question(
      "X06",
      owaspXss,
      "Welche zusätzliche Begrenzung gilt bei setAttribute als Safe Sink für untrusted Werte?",
      [
        "Der Attributname muss fest und ungefährlich sein",
        "OWASP nennt etwa id oder class als sichere fest gewählte Attributnamen.",
      ],
      [
        "Der Attributname darf frei aus Nutzereingaben stammen",
        "Ein dynamischer gefährlicher Attributname kann Codeausführung ermöglichen.",
      ],
      [
        "Das Attribut muss ein Eventhandler wie onclick sein",
        "Eventhandler-Attribute sind für untrusted Werte gerade gefährlich.",
      ],
    ),
    question(
      "X07",
      owaspXss,
      "Warum sind Anführungszeichen um dynamische HTML-Attributwerte wichtig?",
      [
        "Sie erschweren den Wechsel in einen anderen HTML-Kontext",
        "OWASP empfiehlt vollständiges Quoting der Attributwerte.",
      ],
      [
        "Sie ersetzen jede Prüfung einer untrusted URL",
        "Quoting validiert weder Schema noch Ziel einer URL.",
      ],
      [
        "Sie führen den Attributwert automatisch als Text im Body aus",
        "Quoting begrenzt den Attributkontext und erzeugt keinen Body-Text.",
      ],
    ),
    question(
      "X08",
      owaspXss,
      "Wohin darf untrusted Dateninhalt laut OWASP im JavaScript-Kontext höchstens gesetzt werden?",
      [
        "In einen passend kodierten, zitierten Datenwert",
        "OWASP beschreibt nur quoted data values als geeignete Stelle für Variablen in JavaScript.",
      ],
      [
        "Direkt in ausführbaren JavaScript-Code",
        "Dynamische Werte außerhalb eines Datenwerts können Code bilden.",
      ],
      [
        "Direkt in den Namen eines Eventhandlers",
        "Eventhandler sind gefährliche Ausgabekontexte.",
      ],
    ),
    question(
      "X09",
      owaspXss,
      "Welche Content-Type-Angabe empfiehlt OWASP für ausgelieferte JSON-Daten?",
      [
        "application/json",
        "Die Quelle nennt application/json statt text/html zum Vermeiden einer HTML-Interpretation.",
      ],
      [
        "text/html",
        "Gerade diese Angabe kann JSON in einem HTML-Kontext interpretierbar machen.",
      ],
      ["text/css", "CSS ist nicht der Medientyp für JSON-Daten."],
    ),
    question(
      "X10",
      owaspXss,
      "Wo sollten dynamische Werte in einem CSS-Kontext unter geeigneter Kodierung stehen?",
      [
        "In einem CSS-Property-Wert",
        "OWASP begrenzt dynamische CSS-Werte auf Property-Werte.",
      ],
      [
        "Als frei erzeugter Selektor",
        "Dynamische Selektoren gehören zu unsicheren CSS-Kontexten.",
      ],
      [
        "Als frei erzeugter style-Tag-Name",
        "Ein Tag-Name ist kein sicherer CSS-Property-Wert.",
      ],
    ),
    question(
      "X11",
      owaspXss,
      "Welche DOM-Zuweisung nennt OWASP als Safe Sink für einen CSS-Property-Wert?",
      [
        "element.style.property = wert",
        "Die Zuweisung an eine konkrete Style-Eigenschaft wird als Safe Sink genannt.",
      ],
      [
        "element.innerHTML = wert",
        "innerHTML interpretiert HTML und ist kein CSS-Property-Sink.",
      ],
      [
        "document.write(wert)",
        "document.write schreibt in HTML statt in eine sichere CSS-Eigenschaft.",
      ],
    ),
    question(
      "X12",
      owaspXss,
      "Welche Kodierung passt zu untrusted Daten in einem URL-Parameter?",
      [
        "URL-Percent-Encoding des Parameterwerts",
        "OWASP empfiehlt URL-Encoding für Daten in einem URL-Kontext.",
      ],
      [
        "Nur HTML-Text-Encoding",
        "Das ist nicht die Kodierung für einen URL-Parameter.",
      ],
      [
        "Nur JavaScript-Hex-Encoding",
        "JavaScript-Encoding richtet sich an einen anderen Ausgabekontext.",
      ],
    ),
    question(
      "X13",
      owaspXss,
      "Ein kodierter URL-Parameter wird in ein href-Attribut eingefügt. Was ist zusätzlich zu beachten?",
      [
        "Den fertigen URL-Wert für den HTML-Attributkontext kodieren",
        "OWASP nennt URL-Encoding gefolgt von Attribut-Encoding für diesen verschachtelten Kontext.",
      ],
      [
        "Den URL-Parameter nachträglich als JavaScript ausführen",
        "Das würde aus Daten ausführbaren Code machen.",
      ],
      [
        "Auf Attribut-Quoting verzichten",
        "OWASP empfiehlt gerade vollständig zitierte Attributwerte.",
      ],
    ),
    question(
      "X14",
      owaspXss,
      "Welche Browserfunktion nennt OWASP für das Kodieren eines URL-Query-Werts in JavaScript?",
      [
        "encodeURIComponent(...)",
        "encodeURIComponent kodiert den dynamischen Query-Wert.",
      ],
      ["eval(...)", "eval führt JavaScript aus und kodiert keinen Query-Wert."],
      [
        "innerHTML",
        "innerHTML ist ein HTML-Sink und keine URL-Kodierfunktion.",
      ],
    ),
    question(
      "X15",
      owaspXss,
      "Wie ist eine vollständig von Nutzenden gelieferte href-URL zu behandeln?",
      [
        "Schema und Ziel validieren sowie passende Attributkodierung anwenden",
        "OWASP fordert bei untrusted URLs Validierung und sichere http/https-Schemata.",
      ],
      [
        "Nur Leerzeichen entfernen",
        "Das verhindert weder gefährliche Schemata noch Attributkontextfehler.",
      ],
      [
        "Nur den Linktext kodieren",
        "Der href-Wert selbst bleibt sonst unkontrolliert.",
      ],
    ),
    question(
      "X16",
      owaspXss,
      "Warum sollte untrusted Inhalt nicht direkt in einen script-Block gesetzt werden?",
      [
        "Der Kontext bleibt selbst mit einfacher Ausgabe-Kodierung gefährlich",
        "OWASP nennt direkte Skriptinhalte als gefährlichen Kontext.",
      ],
      [
        "Weil script-Blöcke grundsätzlich kein JavaScript enthalten dürfen",
        "Das Problem ist die untrusted dynamische Einfügung, nicht JavaScript an sich.",
      ],
      [
        "Weil dort nur CSS verarbeitet wird",
        "Ein script-Block ist JavaScript-Kontext.",
      ],
    ),
    question(
      "X17",
      owaspXss,
      "Was ist passend, wenn Nutzende tatsächlich formatiertes HTML verfassen dürfen?",
      [
        "HTML vor der Wiedergabe mit einem geeigneten Sanitizer bereinigen",
        "Kodierung würde gewünschtes Markup unterdrücken; OWASP empfiehlt Sanitization.",
      ],
      [
        "Ungeprüftes HTML direkt über innerHTML einsetzen",
        "Rohes HTML kann schädliche Elemente oder Attribute enthalten.",
      ],
      [
        "Den HTML-Wert nur als URL-Parameter kodieren",
        "URL-Kodierung entfernt keine gefährliche HTML-Struktur für die Anzeige.",
      ],
    ),
    question(
      "X18",
      owaspXss,
      "Warum kann eine nachträgliche Änderung an bereits bereinigtem HTML problematisch sein?",
      [
        "Sie kann die Wirkung der Bereinigung aufheben",
        "OWASP warnt vor Mutation nach der Sanitization.",
      ],
      [
        "Sie macht HTML immer zu reinem Text",
        "Eine Änderung kann gefährliche Struktur wieder einführen statt sie zu neutralisieren.",
      ],
      [
        "Sie deaktiviert automatisch alle Browser-Cookies",
        "Cookie-Zustand ist nicht die hier beschriebene Wirkung.",
      ],
    ),
    question(
      "X19",
      owaspXss,
      "Was sollte bei einer eingesetzten HTML-Sanitizer-Bibliothek regelmäßig geschehen?",
      [
        "Sicherheitsupdates einspielen",
        "OWASP weist auf neue Browserfunktionen und mögliche Sanitizer-Bypasses hin.",
      ],
      [
        "Jede neue Version ungeprüft in Produktion übernehmen",
        "Aktualisierung braucht weiterhin Prüfung im Projekt.",
      ],
      [
        "Die Bibliothek nach dem ersten Einsatz nie mehr ändern",
        "Bekannte Umgehungen erfordern Pflege.",
      ],
    ),
    question(
      "X20",
      owaspXss,
      "Welche weitere Safe-Sink-Methode setzt untrusted Inhalt ausdrücklich als Text ein?",
      [
        "insertAdjacentText(...)",
        "OWASP listet insertAdjacentText unter sicheren Text-Sinks.",
      ],
      [
        "insertAdjacentHTML(...)",
        "Diese Methode interpretiert HTML statt bloß Text.",
      ],
      [
        "document.write(...)",
        "document.write fügt in einen gefährlichen HTML-Kontext ein.",
      ],
    ),
    question(
      "X21",
      owaspXss,
      "Welche Wirkung hat eine Content Security Policy im XSS-Schutz nach OWASP?",
      [
        "Sie ergänzt die kontextgerechte Ausgabeabsicherung",
        "CSP ist eine zusätzliche Verteidigungsschicht, keine primäre Ersatzmaßnahme.",
      ],
      [
        "Sie ersetzt sichere DOM-Sinks vollständig",
        "OWASP empfiehlt weiterhin sichere Sinks und Kontextkodierung.",
      ],
      [
        "Sie bereinigt eingegebenes HTML automatisch",
        "CSP ist keine HTML-Sanitization.",
      ],
    ),
    question(
      "X22",
      owaspXss,
      "Was bewirken Trusted Types bei unterstützten Browsern für bestimmte DOM-XSS-Sinks?",
      [
        "Sie weisen rohe Strings zurück und verlangen eine geprüfte Policy",
        "OWASP beschreibt die Ablehnung einfacher Strings an DOM-XSS-Sinks.",
      ],
      [
        "Sie ersetzen sämtliche serverseitigen Sicherheitsprüfungen",
        "Trusted Types adressieren bestimmte DOM-Sinks im Browser.",
      ],
      [
        "Sie kodieren jeden URL-Parameter automatisch",
        "URL-Parameterkodierung ist ein anderer Schutzschritt.",
      ],
    ),
    question(
      "X23",
      owaspXss,
      "Warum ist ein pauschaler HTTP-Interceptor für XSS-Encoding oft unzureichend?",
      [
        "Er kennt den späteren Ausgabekontext der Daten nicht zuverlässig",
        "OWASP kritisiert kontextloses Encoding vor der eigentlichen Ausgabe.",
      ],
      [
        "Er wird grundsätzlich erst nach dem Browser-Rendering aufgerufen",
        "Das Problem ist fehlende Kenntnis von HTML-, JS- oder anderen Zielkontexten.",
      ],
      [
        "Er kann keinerlei Eingabedaten sehen",
        "Interceptoren sehen teils Eingaben, aber nicht unbedingt alle und deren Verwendung.",
      ],
    ),
    question(
      "X24",
      owaspXss,
      "Warum ist eine Web Application Firewall keine verlässliche alleinige XSS-Abwehr?",
      [
        "Sie kann Umgehungen und rein clientseitige DOM-XSS-Fälle übersehen",
        "OWASP nennt WAFs unzuverlässig und ohne Wirkung auf die Wurzel der Lücke.",
      ],
      [
        "Sie wandelt sämtliche DOM-Sinks in sichere Text-Sinks um",
        "Eine WAF verändert nicht die DOM-API der Anwendung.",
      ],
      [
        "Sie verhindert die Ausführung aller Browser-Skripte",
        "Eine WAF ist kein vollständiger Skriptblocker im Browser.",
      ],
    ),
    question(
      "X25",
      owaspXss,
      "Welcher React-Ausweg aus automatischer Textbehandlung braucht besondere Vorsicht?",
      [
        "dangerouslySetInnerHTML mit unbereinigtem HTML",
        "OWASP nennt diesen Escape Hatch ohne Sanitization als XSS-Risiko.",
      ],
      [
        "Normale Textdarstellung per JSX",
        "Die übliche Framework-Ausgabe nutzt automatische Schutzmechanismen.",
      ],
      [
        "Ein festes aria-label ohne Nutzereingabe",
        "Ein statisches Label ist nicht der genannte HTML-Escape-Hatch.",
      ],
    ),
  ],
  "dependency-security-assessment": [
    question(
      "D01",
      openssf,
      "Was sollte vor der Aufnahme einer neuen Open-Source-Abhängigkeit zuerst geprüft werden?",
      [
        "Ob vorhandene Komponenten den Bedarf bereits decken",
        "OpenSSF empfiehlt die Notwendigkeit der neuen Abhängigkeit zu hinterfragen.",
      ],
      [
        "Ob der Paketname möglichst kurz ist",
        "Die Namenslänge belegt keinen Bedarf oder Nutzen.",
      ],
      [
        "Ob die Bibliothek die meisten indirekten Abhängigkeiten mitbringt",
        "Jede zusätzliche Abhängigkeit vergrößert die Angriffsfläche.",
      ],
    ),
    question(
      "D02",
      openssf,
      "Warum erhöht eine neue direkte Bibliothek auch über ihre transitiven Pakete das Risiko?",
      [
        "Jedes zusätzliche Paket kann kompromittiert werden",
        "OpenSSF nennt Angriffsflächen durch direkte und transitive Abhängigkeiten.",
      ],
      [
        "Transitive Pakete können nie produktiv geladen werden",
        "Das hängt vom konkreten Dependency-Graph ab und ist kein allgemeiner Schutz.",
      ],
      [
        "Die Lizenz der direkten Bibliothek gilt automatisch für alle Pakete",
        "Transitive Komponenten können eigene Lizenzen und Risiken haben.",
      ],
    ),
    question(
      "D03",
      openssf,
      "Worauf zielt die Prüfung der Echtheit einer Open-Source-Bibliothek?",
      [
        "Auf das autorisierte Projekt statt eines Nachahmerpakets",
        "OpenSSF nennt Echtheit als Schutz gegen Typosquatting und fremde Forks.",
      ],
      [
        "Auf eine möglichst ähnliche Schreibweise zu einem populären Namen",
        "Gerade ähnlich geschriebene Namen können Angriffe sein.",
      ],
      [
        "Auf das automatische Vertrauen in jedes Suchergebnis",
        "Suchtreffer ersetzen die Prüfung des Ursprungs nicht.",
      ],
    ),
    question(
      "D04",
      openssf,
      "Welches Signal kann bei der Echtheitsprüfung auf Typosquatting hinweisen?",
      [
        "Ein sehr ähnlicher Name wie bei einem bekannteren Paket",
        "Die OpenSSF empfiehlt den Vergleich ähnlicher Namen.",
      ],
      [
        "Eine dokumentierte Original-Projektwebsite",
        "Eine zuordenbare Projektwebsite hilft bei der Echtheitsprüfung.",
      ],
      [
        "Ein nachvollziehbarer Link zum offiziellen Repository",
        "Ein verifizierbarer Ursprung spricht für Authentizität.",
      ],
    ),
    question(
      "D05",
      openssf,
      "Welche Beobachtung spricht für laufende Wartung eines Kandidaten?",
      [
        "Bedeutsame aktuelle Projektaktivität",
        "OpenSSF schlägt aktuelle Commits als Wartungssignal vor.",
      ],
      [
        "Ausschließlich das Alter des ersten Commits",
        "Ein altes Projekt kann trotzdem seit langem ungewartet sein.",
      ],
      [
        "Ein unveränderter Downloadname",
        "Der Name belegt keine aktuelle Pflege.",
      ],
    ),
    question(
      "D06",
      openssf,
      "Was ergänzt die Prüfung von Commits bei der Beurteilung der Wartung?",
      [
        "Aktuelle Releases oder Mitteilungen der Maintainer",
        "OpenSSF nennt Kommunikation und Releases als getrennte Signale.",
      ],
      [
        "Nur die Anzahl der Sterne im Repository",
        "Beliebtheit zeigt keine aktuellen Releases oder Kommunikation.",
      ],
      [
        "Nur die Größe des Downloadarchivs",
        "Archivgröße sagt nichts über Wartung aus.",
      ],
    ),
    question(
      "D07",
      openssf,
      "Warum ist Maintainer-Vielfalt bei einer Abhängigkeit ein Prüfpunkt?",
      [
        "Sie kann das Risiko einer einzelnen Ausfallstelle verringern",
        "OpenSSF nennt mehrere Maintainer als wünschenswert, erkennt aber Ausnahmen an.",
      ],
      [
        "Weil ein einzelner Maintainer die Lizenz automatisch ungültig macht",
        "Die Quelle nennt Ein-Personen-Projekte nicht grundsätzlich unzulässig.",
      ],
      [
        "Weil die Zahl der Maintainer alle Schwachstellen aufdeckt",
        "Mehrere Maintainer garantieren keine Fehlerfreiheit.",
      ],
    ),
    question(
      "D08",
      openssf,
      "Welches Risiko kann ein instabiles API bei einer Sicherheitsaktualisierung erzeugen?",
      [
        "Der Wechsel auf eine sichere Version wird erschwert",
        "OpenSSF nennt API-Instabilität als Hindernis für notwendige Updates.",
      ],
      [
        "Es verhindert die Meldung von Schwachstellen automatisch",
        "Meldbarkeit und API-Kompatibilität sind unterschiedliche Fragen.",
      ],
      [
        "Es macht jede Version automatisch bösartig",
        "Instabilität ist ein Wartungsrisiko, kein Beweis für Schadcode.",
      ],
    ),
    question(
      "D09",
      openssf,
      "Was sollte an den Standardeinstellungen einer Sicherheitsbibliothek geprüft werden?",
      [
        "Ob die einfache Nutzung bereits sichere Defaults bietet",
        "OpenSSF nennt sichere Voreinstellungen und Beispiele als Auswahlkriterium.",
      ],
      [
        "Ob alle Schutzmechanismen zunächst deaktiviert sind",
        "Unsichere Defaults erhöhen Fehlbedienungsrisiken.",
      ],
      [
        "Ob die Beispiele nur komplexe Sonderfälle zeigen",
        "Einfache Beispiele sollten ebenfalls sicher sein.",
      ],
    ),
    question(
      "D10",
      openssf,
      "Warum ist eine Anleitung zur sicheren Nutzung für eine Abhängigkeit relevant?",
      [
        "Sie hilft, die API ohne vermeidbare Sicherheitsfehler einzusetzen",
        "OpenSSF fragt ausdrücklich nach Security Guidance.",
      ],
      [
        "Sie ersetzt alle Tests des eigenen Einsatzes",
        "Auch mit Anleitung müssen eigene Einsatzfälle geprüft werden.",
      ],
      [
        "Sie garantiert einen fehlerfreien Quellcode",
        "Dokumentation ist kein Beweis für Fehlerfreiheit.",
      ],
    ),
    question(
      "D11",
      openssf,
      "Welche Information gehört zur Lizenzprüfung eines Pakets?",
      [
        "Ob die Lizenz klar angegeben und mit dem eigenen Einsatz vereinbar ist",
        "OpenSSF fordert klare und passende Lizenzen für Komponenten.",
      ],
      [
        "Nur ob der Paketname eine Lizenzabkürzung enthält",
        "Der Name belegt keine wirksame Lizenzinformation.",
      ],
      [
        "Nur ob die direkte Abhängigkeit kostenlos herunterladbar ist",
        "Kostenloser Download ersetzt keine Lizenzklärung.",
      ],
    ),
    question(
      "D12",
      openssf,
      "Wie sollte ein bekanntes wichtiges Sicherheitsproblem in der gewählten Paketversion bewertet werden?",
      [
        "Als konkreter Prüf- und Behebungsbedarf vor Nutzung",
        "OpenSSF empfiehlt den Stand bekannter wichtiger Lücken zu prüfen.",
      ],
      [
        "Als unproblematisch, solange das Projekt beliebt ist",
        "Beliebtheit beseitigt keine bekannte Schwachstelle.",
      ],
      [
        "Als Beweis, dass jede frühere Version ebenfalls betroffen ist",
        "Betroffenheit hängt von den konkreten Versionen ab.",
      ],
    ),
    question(
      "D13",
      openssf,
      "Welche Beobachtung zeigt eine funktionierende Reaktion des Projekts auf Sicherheitsprobleme?",
      [
        "Zeitnahe Fehlerbehebung und geregelte Sicherheitsmeldungen",
        "OpenSSF nennt Reaktionszeit und Meldeweg als Bewertungspunkte.",
      ],
      [
        "Verschweigen aller bisherigen Sicherheitsmeldungen",
        "Das erschwert die Beurteilung des Umgangs mit Lücken.",
      ],
      [
        "Alle Releases ohne Changelog löschen",
        "Das macht Sicherheitskorrekturen schwerer nachvollziehbar.",
      ],
    ),
    question(
      "D14",
      openssf,
      "Wozu dient ein isolierter Probeeinsatz einer neuen Abhängigkeit?",
      [
        "Um Verhalten und mögliche schädliche Aktivitäten zu beobachten",
        "OpenSSF empfiehlt einen Testeinsatz, möglichst isoliert, auch auf Exfiltration.",
      ],
      [
        "Um ohne Prüfung sofort Produktionszugriff zu gewähren",
        "Ein isolierter Test begrenzt gerade mögliche Folgen.",
      ],
      [
        "Um alle transitiven Abhängigkeiten zu verbergen",
        "Der Probeeinsatz soll zusätzliche Effekte sichtbar machen.",
      ],
    ),
    question(
      "D15",
      openssf,
      "Was ist an unerwarteten indirekten Produktionsabhängigkeiten problematisch?",
      [
        "Sie erhöhen Angriffsfläche und Supportaufwand",
        "OpenSSF empfiehlt unnötige transitive Produktionspakete zu vermeiden.",
      ],
      [
        "Sie sind immer nur Testwerkzeuge ohne Laufzeitwirkung",
        "Gerade unerwartete Pakete können im Produktionsgraph landen.",
      ],
      [
        "Sie verbessern automatisch die Lizenzlage",
        "Zusätzliche Komponenten bringen eigene Lizenzfragen mit.",
      ],
    ),
    question(
      "D16",
      openssf,
      "Welche Codebereiche verdienen bei der Prüfung eines fremden Pakets besondere Aufmerksamkeit?",
      [
        "Installationsskripte und jüngste verdächtige Änderungen",
        "OpenSSF nennt Installationsroutinen, Exfiltrationshinweise und neue Commits.",
      ],
      [
        "Nur die Formatierung des README-Titels",
        "Ein Titel zeigt keine schädlichen Installationsroutinen.",
      ],
      [
        "Nur die Dateiendung der Lizenzdatei",
        "Der Prüfpunkt betrifft mögliche Schadfunktion im Code.",
      ],
    ),
    question(
      "D17",
      openssf,
      "Welches Signal kann auf absichtlich schädliches Verhalten in einem Paket hindeuten?",
      [
        "Verschleierter ausgeführter Code mit Zugriff auf sensible Umgebungsdaten",
        "OpenSSF nennt Obfuskation und Exfiltration etwa von Umgebungsvariablen.",
      ],
      [
        "Eine nachvollziehbare Dokumentation der API",
        "Dokumentation allein ist kein Schadcode-Signal.",
      ],
      [
        "Eine kleine, begründete Abhängigkeitsliste",
        "Die Liste allein deutet nicht auf Datenabfluss.",
      ],
    ),
    question(
      "D18",
      openssf,
      "Welche Bedeutung haben automatisierte Tests eines Abhängigkeitsprojekts bei der Auswahl?",
      [
        "Sie sind ein Signal für Pflege und prüfbares Verhalten",
        "OpenSSF empfiehlt CI-Tests und Testumfang zu bewerten.",
      ],
      [
        "Sie beweisen die Abwesenheit aller Sicherheitslücken",
        "Tests können Fehler übersehen und decken nur definierte Fälle ab.",
      ],
      [
        "Sie ersetzen die Lizenz- und Echtheitsprüfung",
        "Diese Auswahlaspekte bleiben eigenständig.",
      ],
    ),
    question(
      "D19",
      openssf,
      "Warum sollte die API eines Pakets auf sichere Benutzbarkeit geprüft werden?",
      [
        "Ein gut nutzbares Interface erleichtert sichere Anwendung",
        "OpenSSF nennt etwa parametrisierte Queries als Beispiel einer sicheren API.",
      ],
      [
        "Weil ein schweres Interface jede Schwachstelle verhindert",
        "Komplexität kann sichere Nutzung erschweren.",
      ],
      [
        "Weil nur der Paketname für Sicherheitsentscheidungen zählt",
        "Die konkrete API beeinflusst die Sicherheit im Einsatz.",
      ],
    ),
    question(
      "D20",
      dependencyReview,
      "Was zeigt GitHubs Dependency Review bei einem Pull Request?",
      [
        "Hinzugefügte, entfernte oder aktualisierte Abhängigkeiten",
        "Die Review visualisiert den Dependency-Diff eines Pull Requests.",
      ],
      [
        "Nur geänderte CSS-Regeln",
        "Das Feature betrachtet Paketabhängigkeiten, nicht Layoutdetails.",
      ],
      [
        "Nur Laufzeit-HTTP-Fehler",
        "HTTP-Laufzeitfehler sind kein Dependency-Diff.",
      ],
    ),
    question(
      "D21",
      dependencyReview,
      "Warum sollte bei einem Update auch die Lockdatei geprüft werden?",
      [
        "Sie kann unerwartete Änderungen indirekter Pakete zeigen",
        "GitHub weist auf transitive Änderungen in Lockdateien hin.",
      ],
      [
        "Sie enthält nie transitive Versionen",
        "Gerade diese werden dort sichtbar.",
      ],
      [
        "Sie ersetzt die Bewertung der verwendeten Bibliothek",
        "Der Diff zeigt Änderungen, aber die fachliche Bewertung bleibt nötig.",
      ],
    ),
    question(
      "D22",
      dependencyReview,
      "Welche Zusatzinformation kann Dependency Review zu einem neuen Paket liefern?",
      [
        "Bekannte Schwachstellen und Lizenzinformationen",
        "GitHub nennt Vulnerability-Daten und Lizenzen in der Review.",
      ],
      [
        "Einen Beweis für völlige Sicherheitsfreiheit",
        "Bekannte Daten können unbekannte Lücken nicht ausschließen.",
      ],
      [
        "Die fachliche Korrektheit aller Methoden",
        "Die Review analysiert Abhängigkeiten, nicht jedes Verhalten.",
      ],
    ),
    question(
      "D23",
      dependencyReview,
      "Worin unterscheidet sich Dependency Review von Dependabot Alerts im beschriebenen Einsatz?",
      [
        "Review prüft Änderungen vor Einführung, Alerts melden bestehende verwundbare Abhängigkeiten",
        "GitHub stellt den präventiven PR-Diff den Funden im Bestand gegenüber.",
      ],
      [
        "Review meldet nur bereits produktiv genutzte Lücken",
        "Die Review soll neue riskante Versionen vor Übernahme zeigen.",
      ],
      [
        "Alerts prüfen ausschließlich CSS-Dateien",
        "Alerts betreffen bekannte Lücken in Abhängigkeiten.",
      ],
    ),
    question(
      "D24",
      dependencyReview,
      "Wann kann die Dependency-Review-Action einen Pull Request blockieren?",
      [
        "Wenn ihre konfigurierten Sicherheitsregeln anschlagen und der Check verpflichtend ist",
        "Die Action kann bei verwundbaren Paketen fehlschlagen und über Branch-Regeln blockieren.",
      ],
      [
        "Bei jeder Änderung eines Quellcode-Kommentars",
        "Die Action bewertet Dependency-Änderungen und konfigurierte Regeln.",
      ],
      [
        "Nur nach einem bereits erfolgten Deployment",
        "Sie ist gerade für die Prüfung im Pull Request gedacht.",
      ],
    ),
    question(
      "D25",
      dependencyReview,
      "Welche Lücke kann bei getrennten Dependency-Submission- und Review-Workflows entstehen?",
      [
        "Eine Race Condition mit fehlenden Dependency-Snapshots",
        "GitHub empfiehlt passende Reihenfolge oder Retry bei Snapshot-Warnungen.",
      ],
      [
        "Jede Lizenz wird automatisch zu Apache-2.0",
        "Workflow-Reihenfolge ändert keine Lizenzen.",
      ],
      [
        "Alle direkten Abhängigkeiten verschwinden aus der Manifestdatei",
        "Das Problem betrifft die Verfügbarkeit von Snapshots zur Prüfung.",
      ],
    ),
  ],
};
