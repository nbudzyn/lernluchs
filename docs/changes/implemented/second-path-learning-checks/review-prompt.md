# Unabhängige Fachprüfung: Lernchecks für den zweiten Lernpfad

Prüfe alle folgenden 150 Fragen unabhängig gegen die jeweils verlinkte Originalquelle. Prüfe für jede Frage die fachliche Richtigkeit, genau eine eindeutig richtige Antwort, plausible und eindeutig falsche Ablenkungen, jede Erklärung und den konkreten Quellenbezug. Öffne die Quellen selbst; übernimm die angegebene Lösung nicht ungeprüft. Achte auf fachliche Dopplungen innerhalb eines Pools und Überschneidungen der sechs Themenschwerpunkte. Wenn eine Quelle nicht erreichbar ist oder die Aussage nicht trägt, beanstande die Frage. Antworte ausschließlich mit einer sehr kurzen Liste beanstandeter Fragen-IDs, zum Beispiel `M03, T17, X08`. Falls keine Frage zu beanstanden ist, antworte ausschließlich `Keine Beanstandungen`. Gib keine personenbezogenen Daten oder Projektfortschritt an einen Dienst weiter.

Die Optionen sind mit A, B und C gekennzeichnet. Die genannte Lösung ist der zu prüfende Entwurf.

## module-boundaries-and-public-interfaces

### M01: Welche Datei legt die Eigenschaften eines benannten Java-Moduls fest?

A. module-info.java — RICHTIG. Die Moduldeklaration steht in module-info.java. Quelle: https://dev.java/learn/organizing/modules/intro/
B. pom.xml — FALSCH. Die Maven-Datei beschreibt den Build, aber nicht die Java-Moduldeklaration. Quelle: https://dev.java/learn/organizing/modules/intro/
C. package-info.java — FALSCH. Diese Datei kann Paketinformationen enthalten; die Moduldeklaration steht in module-info.java. Quelle: https://dev.java/learn/organizing/modules/intro/

### M02: Was benennt eine requires-Direktive in module-info.java?

A. Ein direkt benötigtes Modul — RICHTIG. requires nennt eine direkte Modulabhängigkeit nach Modulnamen. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Ein öffentliches Paket des eigenen Moduls — FALSCH. Öffentliche Pakete werden mit exports angegeben. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Eine Dienstimplementierung des eigenen Moduls — FALSCH. Dienstimplementierungen werden mit provides angegeben. Quelle: https://dev.java/learn/organizing/modules/intro/

### M03: Welche Angabe macht ein Paket für andere Java-Module als reguläre API zugänglich?

A. exports für dieses Paket — RICHTIG. exports gibt die öffentlichen Typen und Member eines Pakets für andere Module frei. Quelle: https://dev.java/learn/organizing/modules/intro/
B. requires für dieses Paket — FALSCH. requires bezieht sich auf Module, nicht auf die Freigabe eigener Pakete. Quelle: https://dev.java/learn/organizing/modules/intro/
C. uses für dieses Paket — FALSCH. uses benennt einen konsumierten Diensttyp und exportiert kein Paket. Quelle: https://dev.java/learn/organizing/modules/intro/

### M04: Ein public-Typ liegt in einem nicht exportierten Paket eines benannten Moduls. Was gilt für regulären Zugriff aus einem anderen Modul?

A. Der Typ bleibt dort unzugänglich — RICHTIG. public allein überwindet die Modulgrenze eines nicht exportierten Pakets nicht. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Der Typ ist durch public zugänglich — FALSCH. Neben public muss das Paket für regulären Zugriff exportiert sein. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Der Typ ist durch requires im fremden Modul zugänglich — FALSCH. Lesbarkeit durch requires exportiert das Paket des Zielmoduls nicht. Quelle: https://dev.java/learn/organizing/modules/intro/

### M05: Welche Wirkung hat exports eines Pakets in einem benannten Java-Modul?

A. Öffentliche Typen und Member sind zur Compile- und Laufzeit zugänglich — RICHTIG. Die Einführung beschreibt genau diese Wirkung eines exportierten Pakets. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Alle privaten Member werden per Reflection zugänglich — FALSCH. Dafür ist die Öffnung eines Pakets relevant, nicht exports. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Das Paket wird automatisch zu einem eigenen Modul — FALSCH. exports gibt ein Paket frei, erzeugt aber kein neues Modul. Quelle: https://dev.java/learn/organizing/modules/intro/

### M06: Wofür dient opens bei einem Java-Paket vor allem?

A. Reflektiver Zugriff zur Laufzeit — RICHTIG. Ein geöffnetes Paket erlaubt Laufzeitzugriff per Reflection auch auf sonst gekapselte Member. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Deklaration einer direkten Modulabhängigkeit — FALSCH. Direkte Abhängigkeiten werden mit requires benannt. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Freigabe der regulären Compile-Zeit-API — FALSCH. Dafür dient exports; opens ist auf reflektiven Laufzeitzugriff gerichtet. Quelle: https://dev.java/learn/organizing/modules/intro/

### M07: Was erreicht exports ... to ... gegenüber einem unqualifizierten exports?

A. Die Freigabe wird auf benannte Zielmodule begrenzt — RICHTIG. Die qualifizierte Variante exportiert das Paket nur an bestimmte Module. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Die Freigabe gilt nur für Unterpakete — FALSCH. Die Zielangabe benennt Module, keine Unterpakete. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Die Freigabe wird in eine optionale Abhängigkeit umgewandelt — FALSCH. Optionale Abhängigkeiten betreffen requires static. Quelle: https://dev.java/learn/organizing/modules/intro/

### M08: Ein Framework benötigt Reflection auf Entitäten eines Java-Moduls. Welche Deklaration passt zum betroffenen Paket?

A. opens für das Entitätenpaket — RICHTIG. Die Einführung nennt ein für Reflection geöffnetes Entitätenpaket als Beispiel. Quelle: https://dev.java/learn/organizing/modules/intro/
B. uses für das Entitätenpaket — FALSCH. uses bezeichnet einen Diensttyp und öffnet keine Klassen für Reflection. Quelle: https://dev.java/learn/organizing/modules/intro/
C. requires für das Entitätenpaket — FALSCH. requires nennt ein anderes Modul und erlaubt keinen reflektiven Zugriff auf eigene Pakete. Quelle: https://dev.java/learn/organizing/modules/intro/

### M09: Warum sollte ein Java-Modul möglichst wenige Pakete exportieren?

A. Um die von außen sichtbare Fläche und Kopplung klein zu halten — RICHTIG. Die Quelle empfiehlt wenige Exporte, weil geringere Sichtbarkeit die Komplexität senkt. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Damit alle internen Klassen automatisch privat werden — FALSCH. Die Sichtbarkeit einzelner Klassen ändert exports nicht. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Damit keine Modulabhängigkeiten mehr deklariert werden müssen — FALSCH. Auch ein Modul mit kleiner API benötigt seine direkten requires-Angaben. Quelle: https://dev.java/learn/organizing/modules/intro/

### M10: Welche Information gehört bei Java zur öffentlichen Modulbeschreibung?

A. Welche Pakete exportiert werden — RICHTIG. Die Moduldeklaration beschreibt die öffentliche API über exportierte Pakete. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Welche Methoden intern am häufigsten aufgerufen werden — FALSCH. Laufzeitnutzung ist keine Eigenschaft der Moduldeklaration. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Welche Tests zuletzt grün waren — FALSCH. Testergebnisse gehören nicht zur Modulbeschreibung. Quelle: https://dev.java/learn/organizing/modules/intro/

### M11: Welche Deklaration nennt einen Dienst, den ein Java-Modul nutzen will?

A. uses mit dem vollqualifizierten Diensttyp — RICHTIG. uses benennt den verwendeten Diensttyp in der Moduldeklaration. Quelle: https://dev.java/learn/organizing/modules/intro/
B. exports mit der Implementierungsklasse — FALSCH. exports gibt ein Paket frei; es benennt keinen konsumierten Dienst. Quelle: https://dev.java/learn/organizing/modules/intro/
C. opens mit dem Dienstnamen — FALSCH. opens steuert Reflection auf ein Paket, nicht Dienstnutzung. Quelle: https://dev.java/learn/organizing/modules/intro/

### M12: Welche Deklaration ordnet in einem Java-Modul eine eigene Implementierung einem Dienst zu?

A. provides ... with ... — RICHTIG. Die Provider-Seite nennt Dienst und eigene Implementierung in der Moduldeklaration. Quelle: https://dev.java/learn/organizing/modules/intro/
B. uses ... with ... — FALSCH. uses markiert den Konsum eines Dienstes, nicht seine Bereitstellung. Quelle: https://dev.java/learn/organizing/modules/intro/
C. requires ... with ... — FALSCH. requires benennt eine Modulabhängigkeit ohne Dienstimplementierung. Quelle: https://dev.java/learn/organizing/modules/intro/

### M13: Was ermöglicht ServiceLoader in einem modularen Java-System?

A. Einen Dienstanbieter zur Laufzeit zu finden, ohne ihn im Nutzer fest zu verdrahten — RICHTIG. uses und provides entkoppeln laut Quelle Dienstnutzer und Anbieter. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Alle Pakete des Anbieters automatisch zu exportieren — FALSCH. Dienstregistrierung exportiert nicht automatisch sämtliche Pakete. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Die Moduldeklaration des Anbieters beim Build zu ersetzen — FALSCH. ServiceLoader nutzt deklarierte Dienste zur Laufzeit und ersetzt module-info.java nicht. Quelle: https://dev.java/learn/organizing/modules/intro/

### M14: Was enthält ein modularer JAR im Unterschied zu einem gewöhnlichen JAR?

A. Einen kompilierten Moduldeskriptor module-info.class — RICHTIG. Ein JAR mit Moduldeskriptor wird als modularer JAR beschrieben. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Zwingend die Quellen aller Abhängigkeiten — FALSCH. Die Quellen anderer Module gehören nicht zum modularen JAR. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Zwingend eine eigene JVM-Laufzeit — FALSCH. Ein modulares JAR braucht keine eingebettete JVM. Quelle: https://dev.java/learn/organizing/modules/intro/

### M15: Wie behandelt Java JARs auf dem Klassenpfad hinsichtlich Modulen?

A. Sie gehören zum unbenannten Modul — RICHTIG. Auch modulare JARs werden auf dem Klassenpfad Teil des unbenannten Moduls. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Jeder JAR wird automatisch ein benanntes Modul — FALSCH. Automatische Module entstehen bei einfachen JARs auf dem Modulpfad. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Sie können von keinem Modul geladen werden — FALSCH. Der Klassenpfad bleibt nutzbar und gehört zum unbenannten Modul. Quelle: https://dev.java/learn/organizing/modules/intro/

### M16: Was geschieht mit einem einfachen JAR auf dem Modulpfad?

A. Er kann als automatisches Modul eingebunden werden — RICHTIG. Der Modulpfad macht auch aus einfachen JARs Module für schrittweise Modularisierung. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Er wird Teil des unbenannten Moduls — FALSCH. Das unbenannte Modul umfasst JARs auf dem Klassenpfad. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Er erhält automatisch eine handgeschriebene module-info.java — FALSCH. Ein automatisches Modul benötigt keine erzeugte Quelldatei module-info.java. Quelle: https://dev.java/learn/organizing/modules/intro/

### M17: Wozu nutzt das Modulsystem den Modulpfad?

A. Um benötigte Module außerhalb der Laufzeit zu finden — RICHTIG. Der Modulpfad nennt Artefakte und Verzeichnisse, aus denen Module aufgelöst werden. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Um nur Ressourcen ohne Bytecode zu finden — FALSCH. Auf dem Modulpfad liegen gerade Modul-Artefakte mit Bytecode. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Um Quelltextdateien zur Laufzeit umzubenennen — FALSCH. Modulauflösung sucht Module, nicht Umbenennungen von Quellen. Quelle: https://dev.java/learn/organizing/modules/intro/

### M18: Womit beginnt die Auflösung einer modular gestarteten Java-Anwendung?

A. Mit dem initialen Modul und seinen requires-Abhängigkeiten — RICHTIG. Die Auflösung folgt vom Startmodul aus rekursiv den requires-Direktiven. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Mit allen JARs des Dateisystems — FALSCH. Nur relevante Module des Modulpfads und der Laufzeit werden aufgelöst. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Mit allen exportierten Paketen aller Module — FALSCH. Die Auflösung folgt Modulabhängigkeiten, nicht einer globalen Paketliste. Quelle: https://dev.java/learn/organizing/modules/intro/

### M19: Was stellt eine Kante im Java-Modulgraphen aus requires grundsätzlich dar?

A. Lesbarkeit des benötigten Moduls — RICHTIG. requires erzeugt eine Lesbarkeitsbeziehung zwischen Modulen. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Vererbung einer Java-Klasse — FALSCH. Klassenvererbung ist keine Kante des Modulgraphen. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Eine exportierte Paketdatei — FALSCH. Eine Kante steht für Modul-Lesbarkeit, nicht für eine Datei. Quelle: https://dev.java/learn/organizing/modules/intro/

### M20: Welche Abhängigkeit braucht ein Java-Modul nicht ausdrücklich mit requires zu nennen?

A. java.base — RICHTIG. Jedes Modul liest java.base implizit. Quelle: https://dev.java/learn/organizing/modules/intro/
B. Jedes verwendete Anwendungsmodul — FALSCH. Direkte Anwendungsmodul-Abhängigkeiten werden grundsätzlich mit requires deklariert. Quelle: https://dev.java/learn/organizing/modules/intro/
C. Jedes genutzte Bibliotheksmodul — FALSCH. Direkte Bibliotheksmodul-Abhängigkeiten werden grundsätzlich benannt. Quelle: https://dev.java/learn/organizing/modules/intro/

### M21: Wann behandelt TypeScript eine Datei als Modul?

A. Wenn sie einen top-level import oder export enthält — RICHTIG. Ein import oder export auf oberster Ebene macht die Datei zum Modul. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
B. Wenn sie eine Klasse deklariert — FALSCH. Eine Klasse allein macht eine Datei noch nicht zum Modul. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
C. Wenn ihr Dateiname auf .ts endet — FALSCH. Die Endung allein entscheidet nicht über Modul- oder Skript-Scope. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html

### M22: Wie lässt sich eine TypeScript-Datei ohne importierte oder exportierte Werte ausdrücklich zum Modul machen?

A. Mit export {} — RICHTIG. export {} erzeugt einen Modul-Scope ohne Wert-Export. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
B. Mit einem Kommentar module — FALSCH. Ein Kommentar ändert den Scope der Datei nicht. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
C. Mit einem lokalen const — FALSCH. Eine lokale Deklaration allein ist kein top-level import oder export. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html

### M23: Was gilt für eine nicht exportierte Deklaration innerhalb eines TypeScript-Moduls?

A. Sie ist außerhalb des Moduls nicht direkt sichtbar — RICHTIG. Module haben einen eigenen Scope; für fremde Nutzung ist ein Export erforderlich. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
B. Sie wird automatisch global sichtbar — FALSCH. Globale Sichtbarkeit betrifft Skriptdateien, nicht interne Moduldeklarationen. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
C. Sie ist über jeden beliebigen Importpfad erreichbar — FALSCH. Ein Import kann nur exportierte Bindungen des Moduls beziehen. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html

### M24: Wofür steht import type bei TypeScript?

A. Für einen Import, der nur als Typ benutzt werden kann — RICHTIG. Die Dokumentation beschränkt import type auf Typverwendung. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
B. Für einen Import, der erst bei einem Klick ausgeführt wird — FALSCH. import type steuert Typverwendung, keine Browserinteraktion. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
C. Für einen Import sämtlicher Laufzeitwerte — FALSCH. Laufzeitwerte können über import type nicht als Werte verwendet werden. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html

### M25: Was bewirkt import "./file" ohne importierte Bindung?

A. Das Modul wird ausgewertet, ohne Namen zu binden — RICHTIG. Ein Side-Effect-Import führt den Modulcode aus, bindet aber keine exportierten Werte. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
B. Der Import wird vollständig übersprungen — FALSCH. Auch ohne gebundene Namen wird der Modulcode ausgewertet. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html
C. Alle Exporte werden global verfügbar — FALSCH. Ein Side-Effect-Import macht Exporte nicht global sichtbar. Quelle: https://www.typescriptlang.org/docs/handbook/2/modules.html

## tdd-for-domain-behavior

### T01: Womit beginnt TDD für eine geplante Verhaltensänderung nach Kent Becks Ablauf?

A. Mit einer Liste erwarteter Verhaltensvarianten — RICHTIG. Die Testliste sammelt zuerst Fälle der gewünschten Verhaltensänderung. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Mit der endgültigen Implementierungsklasse — FALSCH. Implementierungsentscheidungen sollen die erste Verhaltensanalyse nicht dominieren. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Mit dem Refactoring des bisherigen Codes — FALSCH. Refactoring folgt im Zyklus erst nach einem bestandenen Test. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T02: Welche Art von Fällen gehört neben dem Normalfall auf eine TDD-Testliste?

A. Fehler- und Grenzfälle des Verhaltens — RICHTIG. Beck nennt unter anderem Timeouts und fehlende Daten als Varianten. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Nur Fälle mit derselben Eingabe wie der Normalfall — FALSCH. Die Liste soll gerade unterschiedliche Verhaltensvarianten erfassen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Nur interne Methodenaufrufe — FALSCH. Die Liste richtet sich auf erwartetes Verhalten, nicht bloß Implementierungsdetails. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T03: Was sollte eine TDD-Testliste bei einer Änderung zusätzlich beachten?

A. Bisheriges Verhalten, das nicht kaputtgehen darf — RICHTIG. Beck empfiehlt auch mögliche Regressionen in die Testliste aufzunehmen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Nur neue Klassennamen — FALSCH. Klassennamen ersetzen keine Beschreibung zu bewahrenden Verhaltens. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Nur die Zahl geänderter Dateien — FALSCH. Dateizahlen zeigen keine fachliche Regression an. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T04: Welche Verwechslung soll bei der ersten TDD-Testliste vermieden werden?

A. Verhaltensfälle mit Entwurfsentscheidungen vermischen — RICHTIG. Die erste Liste dient der Verhaltensanalyse; interne Gestaltung kommt später. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Fehlerfälle zusammen mit Normalfällen erfassen — FALSCH. Gerade diese Varianten gehören auf die Testliste. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Bestehendes Verhalten als Prüfpunkt aufnehmen — FALSCH. Auch zu bewahrendes Verhalten darf auf der Liste stehen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T05: Wie viele konkrete Tests schreibt Beck im nächsten TDD-Schritt zunächst?

A. Einen Test — RICHTIG. Nach der Liste wird ein einzelner Test geschrieben und zum Laufen gebracht. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Alle Tests der Liste — FALSCH. Alle spekulativen Tests vor dem ersten GREEN zu schreiben bezeichnet Beck als Fehler. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Keinen Test, solange der Code noch fehlt — FALSCH. Der Test geht der Implementierung voraus. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T06: Welche Bestandteile nennt Beck für einen echten automatisierten Test?

A. Setup, Aufruf und Assertions — RICHTIG. Der Test soll Vorbereitung, Ausführung und überprüfbare Aussagen enthalten. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Nur einen Testnamen und einen Kommentar — FALSCH. Ohne Ausführung und Assertions prüft der Test kein Verhalten. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Nur die gemessene Codeabdeckung — FALSCH. Abdeckung ersetzt keine überprüfbare Erwartung. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T07: Warum reicht ein Test ohne Assertion im TDD-Zyklus nicht aus?

A. Er kann das erwartete Verhalten nicht prüfen — RICHTIG. Beck nennt assertionslose Tests für bloße Coverage als Fehler. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Er kann nicht von JUnit gestartet werden — FALSCH. Ein Test kann technisch laufen und dennoch nichts prüfen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Er macht Refactoring grundsätzlich unmöglich — FALSCH. Das Problem ist fehlende Prüfung, nicht eine technische Refactoring-Sperre. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T08: Welche Entwurfsentscheidung wird beim Schreiben des ersten Verhaltenstests vor allem sichtbar?

A. Die Schnittstelle zum geprüften Code — RICHTIG. Beim Testschreiben werden laut Beck primär Interface-Entscheidungen getroffen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Die endgültige interne Datenstruktur — FALSCH. Interne Implementierungsdetails sollen zunächst offen bleiben. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Die spätere Paketierungsdatei — FALSCH. Der Verhaltenstest richtet den Blick auf die nutzbare Schnittstelle. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T09: Welchen zusätzlichen Nutzen hat ein zuerst geschriebener Test neben der automatisierten Rückmeldung?

A. Er zwingt zur frühen Auseinandersetzung mit der Schnittstelle — RICHTIG. Fowler nennt das Nachdenken über das Interface als zweiten Nutzen von Test First. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
B. Er legt jede spätere Implementierungsentscheidung fest — FALSCH. Ein Test beschreibt erwartetes Verhalten, nicht den gesamten Entwurf. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
C. Er ersetzt die Auswahl fachlicher Testfälle — FALSCH. Die Fallliste und Auswahl bleiben eigene Schritte. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html

### T10: Warum schreibt man die gesamte TDD-Testliste nicht sofort als fertige Tests aus?

A. Frühe Erkenntnisse können spätere Testannahmen ändern — RICHTIG. Beck warnt vor Nacharbeit an spekulativen Tests, wenn der erste GREEN Entscheidungen ändert. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Weil automatisierte Tests erst nach dem Release erlaubt sind — FALSCH. Die Tests werden schrittweise vor dem jeweiligen Implementierungsschritt geschrieben. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Weil nur ein Test pro Projekt zulässig ist — FALSCH. Nach jedem Zyklus wird der nächste Fall bearbeitet. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T11: Was beeinflusst die Reihenfolge der nächsten Tests im TDD-Prozess?

A. Wie schnell wichtige Entwurfsfragen sichtbar werden — RICHTIG. Beck betont, dass Testauswahl und Reihenfolge Ergebnis und Arbeitsverlauf beeinflussen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Nur die alphabetische Sortierung der Methoden — FALSCH. Die Wahl des nächsten Tests ist eine fachliche Entwurfsentscheidung. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Nur die Reihenfolge der Quelldateien — FALSCH. Dateireihenfolge bestimmt keinen sinnvollen Verhaltenstest. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T12: Welche Reihenfolge beschreibt den Kern eines TDD-Zyklus?

A. Fehlschlagender Test, lauffähige Lösung, Refactoring — RICHTIG. Fowler beschreibt Red, Green und Refactor als Kernschritte. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
B. Refactoring, fertige Lösung, erster Test — FALSCH. Der Test steht am Anfang des Zyklus und Refactoring folgt GREEN. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
C. Fertige Lösung, Fehlerbehandlung, optionaler Test — FALSCH. TDD beginnt mit einem prüfbaren erwarteten Verhalten. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html

### T13: Worauf zielt der GREEN-Schritt nach einem roten TDD-Test?

A. Den Test durch eine echte Systemänderung bestehen lassen — RICHTIG. Beck fordert, das System so zu ändern, dass der Test tatsächlich grün wird. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Die fehlschlagende Assertion entfernen — FALSCH. Das Löschen der Prüfung würde den Test nur scheinbar bestehen lassen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Sofort eine vollständige Architektur neu bauen — FALSCH. GREEN konzentriert sich zunächst auf das Bestehen des aktuellen Tests. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T14: Warum soll man einen tatsächlichen berechneten Wert nicht einfach als erwarteten Testwert übernehmen?

A. Damit die unabhängige Gegenprüfung erhalten bleibt — RICHTIG. Beck warnt, dass Kopieren des Istwerts die Prüfleistung des Tests entwertet. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Weil Testframeworks keine Literale akzeptieren — FALSCH. Literale sind technisch möglich; entscheidend ist ihre fachliche Herleitung. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Weil der Test dann nicht mehr automatisiert läuft — FALSCH. Der Test kann laufen, prüft aber womöglich nur die aktuelle Implementierung. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T15: Welche Tätigkeit soll beim GREEN-Schritt zunächst getrennt bleiben?

A. Größeres Refactoring — RICHTIG. Beck trennt das Bestehen des Tests von anschließenden Strukturverbesserungen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Die minimale fachliche Implementierung — FALSCH. Gerade sie ist erforderlich, um den Test echt grün zu machen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Das erneute Ausführen des Tests — FALSCH. Die Ausführung zeigt, ob GREEN erreicht wurde. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T16: Ein neuer Grenzfall fällt während RED → GREEN auf. Wo wird er zunächst festgehalten?

A. Auf der Testliste — RICHTIG. Beck empfiehlt neu entdeckte Fälle der Liste hinzuzufügen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Nur im endgültigen Release-Text — FALSCH. Die Testliste steuert den nächsten überprüfbaren Fall. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Als Ersatz für die aktuelle Assertion — FALSCH. Der neue Fall sollte die laufende Prüfung nicht verdecken. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T17: Was empfiehlt Beck, wenn ein neuer Testfall die bisherige Implementierung grundlegend infrage stellt?

A. Den Zyklus gegebenenfalls mit anderer Testreihenfolge neu beginnen — RICHTIG. Er rät im beschriebenen Fall eher zum Neustart mit anderer Reihenfolge. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Den Grenzfall grundsätzlich streichen — FALSCH. Ein wichtiger Grenzfall soll nicht wegen der bisherigen Lösung verschwinden. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Alle bisherigen Erwartungen unverändert einfrieren — FALSCH. Das verhindert die notwendige Korrektur des Entwurfs. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T18: Wann wird ein erledigter Fall auf der TDD-Testliste abgehakt?

A. Wenn sein Test bestanden ist — RICHTIG. Beck beschreibt das Abhaken nach einem erfolgreichen Test. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Sobald eine Implementierungsidee formuliert ist — FALSCH. Eine Idee zeigt noch nicht, dass das Verhalten funktioniert. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Sobald der Test erstmals rot ist — FALSCH. RED weist nur nach, dass die Erwartung derzeit nicht erfüllt ist. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T19: Welche Rolle hat Refactoring nach GREEN in Becks Ablauf?

A. Es verbessert bei weiterhin bestandenem Test die interne Gestaltung — RICHTIG. Die optionale Refactoring-Phase trifft Implementierungsentscheidungen nach GREEN. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Es ersetzt die fachliche Assertion durch eine leichtere — FALSCH. Refactoring soll das geprüfte Verhalten erhalten. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Es definiert rückwirkend einen anderen Testfall — FALSCH. Ein neuer Verhaltenstest gehört in den nächsten Zyklus. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T20: Was bezeichnet Beck als Risiko in der Refactoring-Phase?

A. Weiter zu refaktorieren als für die aktuelle Arbeit nötig — RICHTIG. Er warnt ausdrücklich vor übermäßigem Aufräumen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Die Tests nach dem Umbau erneut auszuführen — FALSCH. Grüne Tests sichern die Strukturverbesserung ab. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Lokale Duplikation als mögliches Signal wahrzunehmen — FALSCH. Duplikation darf geprüft werden, verlangt aber nicht automatisch eine Abstraktion. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T21: Wie soll man eine kleine Duplikation im TDD-Refactoring einordnen?

A. Als Hinweis, nicht als automatischen Befehl zur Abstraktion — RICHTIG. Beck nennt Duplikation einen Hinweis und warnt vor zu früher Abstraktion. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Als Beweis, dass der Verhaltenstest falsch ist — FALSCH. Duplikation allein widerlegt keine fachliche Erwartung. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Als Grund, den GREEN-Test zu löschen — FALSCH. Das würde den Verhaltensnachweis entfernen. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T22: Wann wird nach einem abgeschlossenen TDD-Zyklus der nächste Fall gewählt?

A. Nach dem Refactoring beziehungsweise Abschluss des aktuellen Zyklus — RICHTIG. Fowler beschreibt den nächsten Listenfall nach Red, Green und Refactor. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
B. Vor der ersten Ausführung des aktuellen Tests — FALSCH. Die Testfälle werden nacheinander durch einen vollständigen Zyklus geführt. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
C. Erst nach der Auslieferung aller Änderungen — FALSCH. Die Liste wird während der Entwicklung schrittweise bearbeitet. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html

### T23: Welche Beobachtung zeigt im RED-Schritt den Nutzen des neuen Tests?

A. Er scheitert an der noch fehlenden erwarteten Verhaltensweise — RICHTIG. Der rote Test macht die Lücke vor der Systemänderung sichtbar. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
B. Er scheitert wegen eines Tippfehlers im Testimport — FALSCH. Ein Testfehler belegt die fachliche Lücke nicht. Quelle: https://newsletter.kentbeck.com/p/canon-tdd
C. Er ist grün, bevor das Verhalten implementiert wurde — FALSCH. Ein sofort grüner Test zeigt die beabsichtigte Lücke nicht. Quelle: https://newsletter.kentbeck.com/p/canon-tdd

### T24: Was geschieht laut Fowler häufig, wenn die Refactoring-Phase im TDD-Zyklus ausgelassen wird?

A. Gut getesteter Code sammelt dennoch unaufgeräumte Fragmente an — RICHTIG. Fowler beschreibt fehlendes Refactoring als häufige Ursache für schlecht strukturierten, wenn auch getesteten Code. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
B. Die Tests verlieren automatisch sämtliche Assertions — FALSCH. Ausgelassenes Refactoring entfernt nicht automatisch bestehende Prüfungen. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
C. Der Code wird dadurch automatisch besser gekapselt — FALSCH. Ohne Strukturverbesserung können sich unaufgeräumte Teile gerade ansammeln. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html

### T25: Welche Grenze hat eine grüne TDD-Suite für eine Fachregel?

A. Sie bestätigt nur die durch Tests beschriebenen Fälle — RICHTIG. TDD arbeitet die ausgewählten Testfälle ab; nicht beschriebene Varianten bleiben ungeprüft. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
B. Sie bestätigt automatisch alle denkbaren Varianten — FALSCH. Auch eine selbsttestende Codebasis kann fehlende Fachfälle nicht abdecken. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html
C. Sie sagt nichts über die tatsächlich getesteten Fälle — FALSCH. Für die formulierten Erwartungen liefert die Suite sehr wohl Rückmeldung. Quelle: https://martinfowler.com/bliki/TestDrivenDevelopment.html

## archunit-for-java-architecture

### A01: Welche Eingabe verarbeitet ArchUnit im Kern für Architekturprüfungen?

A. Importierten Java-Bytecode — RICHTIG. ArchUnit importiert Bytecode in Java-Strukturen und prüft darauf Regeln. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Nur die README-Datei des Projekts — FALSCH. Dokumentation allein liefert nicht die geprüften Klassenbeziehungen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Nur Laufzeit-HTTP-Anfragen — FALSCH. ArchUnit analysiert Klassenstruktur statt Browseranfragen. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A02: Womit importiert ein einfacher ArchUnit-Test Klassen aus einem Java-Paket?

A. Mit ClassFileImporter.importPackages(...) — RICHTIG. Der Einstieg nutzt ClassFileImporter zum Import eines Pakets. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Mit ServiceLoader.load(...) — FALSCH. ServiceLoader findet Dienste und importiert keine Klassen für ArchUnit-Regeln. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Mit ArchRuleDefinition.classes(...) — FALSCH. ArchRuleDefinition formuliert Regeln, importiert aber keine Java-Klassen. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A03: Welcher Aufruf wertet eine formulierte ArchRule gegen importierte Klassen aus?

A. rule.check(importedClasses) — RICHTIG. Die ArchUnit-Anleitung prüft eine Regel mit check gegen JavaClasses. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. rule.export(importedClasses) — FALSCH. Der gezeigte Prüfschritt heißt check, nicht export. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. rule.navigate(importedClasses) — FALSCH. Navigation ist keine Auswertung einer ArchRule. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A04: Was beschreibt noClasses().that().resideInAPackage(...).should().dependOnClassesThat()...?

A. Ein Verbot bestimmter Paketabhängigkeiten — RICHTIG. Die Regel verbietet Abhängigkeiten ausgewählter Klassen zu Zielklassen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Die fachlichen Rückgabewerte aller Methoden — FALSCH. Die Regel betrachtet Strukturbeziehungen, nicht fachliche Ergebnisse. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Die Startreihenfolge von Web-Controllern — FALSCH. Die Regel trifft eine statische Abhängigkeitsaussage. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A05: Was kann onlyHaveDependentClassesThat() an einer Paketgrenze prüfen?

A. Welche Pakete Klassen des Zielpakets benutzen dürfen — RICHTIG. Die Beispielregel begrenzt eingehende Abhängigkeiten auf erlaubte Pakete. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Welche Testfälle zuerst laufen — FALSCH. Testreihenfolge wird damit nicht festgelegt. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Welche Methoden zur Laufzeit schnell genug sind — FALSCH. Laufzeitperformance ist keine statische Abhängigkeitsregel. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A06: Welche Regelart prüft, ob Klassen mit bestimmtem Namensanfang in einem vorgesehenen Paket liegen?

A. Class and Package Containment — RICHTIG. Die Anleitung zeigt dafür haveSimpleNameStartingWith und resideInAPackage. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Cycle Check — FALSCH. Eine Zyklusregel prüft Abhängigkeitskreise zwischen Slices. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Layer Check — FALSCH. Eine Schichtregel steuert erlaubte Beziehungen zwischen Schichten. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A07: Welche Eigenschaft lässt sich mit einer ArchUnit-Vererbungsregel prüfen?

A. Eine Namenskonvention für Implementierungen eines Interfaces — RICHTIG. Das Beispiel verknüpft implement(Connection.class) mit einem Namenssuffix. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Ob eine Instanz zur Laufzeit genügend Arbeitsspeicher hat — FALSCH. Das ist kein Vererbungs- oder Strukturmerkmal. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Ob ein Browser die Klasse rendert — FALSCH. ArchUnit prüft Java-Klassen, keine Browserdarstellung. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A08: Welche Beziehung kann eine ArchUnit-Annotationsregel einschränken?

A. Welche annotierten Klassen auf bestimmte Typen zugreifen dürfen — RICHTIG. Das Beispiel fordert eine Annotation an abhängigen Klassen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Welche CSS-Klassen ein Element besitzt — FALSCH. Eine Java-Annotation ist keine CSS-Klasse. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Welche Benutzer eine Annotation sehen — FALSCH. Die Regel betrifft statische Java-Codebeziehungen. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A09: Was definiert layeredArchitecture().layer(...).definedBy(...)?

A. Eine Schicht anhand eines Paketmusters — RICHTIG. ArchUnit ordnet in der Beispielregel Controller, Service und Persistence über Pakete zu. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Eine fachliche Antwortoption — FALSCH. Eine Schichtdefinition ist kein Lerncheck-Ergebnis. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Eine Laufzeitdatenbank-Tabelle — FALSCH. definedBy benennt hier Paketbereiche im Code. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A10: Welche Beziehung kann whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service") absichern?

A. Nur die Service-Schicht darf die Persistence-Schicht nutzen — RICHTIG. Das Beispiel begrenzt eingehende Abhängigkeiten der Persistence-Schicht. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Persistence darf nur Service aufrufen — FALSCH. Die Regel beschreibt, wer Persistence aufrufen darf, nicht ihre ausgehenden Zugriffe. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Alle Schichten dürfen Persistence direkt nutzen — FALSCH. mayOnlyBeAccessedByLayers begrenzt gerade die zugelassenen Nutzer. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A11: Welche ArchUnit-Regel sucht Zyklen zwischen aus Paketen gebildeten Slices?

A. slices().matching(...).should().beFreeOfCycles() — RICHTIG. Die Anleitung zeigt beFreeOfCycles für Paket-Slices. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. classes().should().bePublic() — FALSCH. Sichtbarkeit prüft keine Zyklen zwischen Slices. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. layeredArchitecture().layer(...) allein — FALSCH. Eine Schichtdefinition ohne passende Beziehung ist keine Zyklusprüfung. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A12: Was markieren (*) in einem ArchUnit-Slice-Paketmuster?

A. Den erfassten Paketabschnitt als Slice-Kennung — RICHTIG. Die Slice-Regeln verwenden Klammern für erfasste Segmente. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Eine Java-Methode mit beliebigem Namen — FALSCH. Das Muster arbeitet auf Paketsegmenten, nicht Methodennamen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Eine Testannotation für JUnit — FALSCH. Die Klammern gehören zur Slice-Mustersyntax. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A13: Welche Ebene von ArchUnit stellt ClassFileImporter bereit?

A. Core — RICHTIG. Die Core-Ebene importiert Bytecode in Java-Objekte. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Library — FALSCH. Die Library-Ebene liefert höherwertige vorbereitete Regeln. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Lang — FALSCH. Die Lang-Ebene formuliert Regeln aus den importierten Strukturen. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A14: Wofür dient die Lang-API von ArchUnit?

A. Architekturregeln lesbar und deklarativ formulieren — RICHTIG. Die Lang-API bietet die flüssige Regelsyntax über der Core-Information. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Java-Bytecode ausführen, um Fachwerte zu berechnen — FALSCH. Die Lang-API formuliert Strukturregeln; sie führt keine Fachfälle aus. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Maven-Abhängigkeiten automatisch aktualisieren — FALSCH. Abhängigkeitsupdates sind keine Aufgabe der Regelsyntax. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A15: Welche Ebene liefert vordefinierte Regeln für komplexere Architekturen wie Schichten?

A. Library — RICHTIG. ArchUnit ordnet komplexere vorbereitete Regeln der Library-Ebene zu. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Core — FALSCH. Core liefert den Import und die strukturellen Java-Objekte. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Lang — FALSCH. Lang stellt die allgemeine Sprache für Regelbedingungen bereit. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A16: Was bedeutet ..service.. in einem ArchUnit-Paketmuster?

A. Ein Paketsegment service mit beliebigen Paketabschnitten davor und danach — RICHTIG. Die zwei Punkte stehen für beliebig viele Pakete um service herum. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Eine Klasse mit dem einfachen Namen service — FALSCH. Paketmuster werden gegen Paketnamen statt Klassennamen geprüft. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Genau das Paket service ohne Ober- oder Unterpakete — FALSCH. Die Platzhalter erlauben weitere Paketabschnitte. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A17: Warum trifft ein Paketmuster ..SomeService nicht die Klasse SomeService?

A. Paketmuster prüfen den Paketnamen, nicht den Klassennamen — RICHTIG. Die Anleitung warnt ausdrücklich vor dieser Verwechslung. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Weil Java-Klassen nie Namen mit Service tragen dürfen — FALSCH. Der Klassenname ist zulässig; nur das gewählte Prädikat passt nicht. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Weil SomeService nur per Reflection sichtbar wäre — FALSCH. Reflection ist für die Erklärung des Paketmusters unerheblich. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A18: Womit prüft ArchUnit den einfachen Namen einer Klasse statt ihres Pakets?

A. Mit haveSimpleName(...) — RICHTIG. Die Anleitung nennt ein namensbasiertes Prädikat für Klassennamen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Mit resideInAPackage(...) — FALSCH. Dieses Prädikat bezieht sich auf den Paketnamen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Mit slices().matching(...) allein — FALSCH. Das Slice-Muster bildet Paketgruppen und prüft keinen einfachen Klassennamen. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A19: Was melden ArchUnit-Regelverletzungen im gezeigten Abhängigkeitsbeispiel?

A. Betroffene Klassen, Aufruf und Quellzeile — RICHTIG. Die Beispielmeldung nennt den verbotenen Methodenaufruf und die Zeile. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Nur die Anzahl aller HTTP-Anfragen — FALSCH. Eine Architekturverletzung beschreibt die Codebeziehung. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Nur den letzten Browser-Screenshot — FALSCH. ArchUnit arbeitet nicht auf Browserbildern. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A20: Welchen Vorteil bietet die ArchUnit-JUnit-Unterstützung beim Import gleicher Klassen in mehreren Tests?

A. Sie kann importierte Klassen zwischen Tests zwischenspeichern — RICHTIG. Die Anleitung nennt automatisches Caching und weniger Boilerplate. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Sie ersetzt jede Architekturregel durch eine Standardregel — FALSCH. Die Regeln müssen weiterhin definiert werden. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Sie führt automatisch Browser-Assertions aus — FALSCH. JUnit-Unterstützung importiert Klassen und wertet ArchTest-Regeln aus. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A21: Welche Annotation gibt in der ArchUnit-JUnit-Unterstützung die zu analysierenden Pakete an?

A. @AnalyzeClasses — RICHTIG. Die Anleitung zeigt @AnalyzeClasses(packages = ...). Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. @ArchTest — FALSCH. @ArchTest markiert die auszuwertende Regel. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. @Override — FALSCH. @Override betrifft Java-Methoden, nicht die Paketwahl für ArchUnit. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A22: Welche Annotation markiert eine Regel für die automatische Auswertung mit ArchUnit-JUnit?

A. @ArchTest — RICHTIG. JUnit-Support wertet mit @ArchTest markierte Regeln aus. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. @AnalyzeClasses — FALSCH. Diese Annotation bestimmt den Importbereich, nicht die einzelne Regel. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. @Deprecated — FALSCH. @Deprecated markiert veraltete Java-Elemente und startet keine ArchUnit-Regel. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A23: Was ist ein sinnvoller ArchUnit-Test für Controller und Persistenz?

A. Ein Verbot direkter Controller-Abhängigkeiten auf Persistenzklassen — RICHTIG. Paket- und Schichtregeln können die gewünschte Trennung prüfen. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Ein Vergleich der HTTP-Antworttexte im Browser — FALSCH. Das prüft Verhalten, nicht die Java-Abhängigkeitsstruktur. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Ein Screenshot jedes Controllers — FALSCH. Screenshots erfassen keine statischen Klassenabhängigkeiten. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A24: Was gilt für die Aussagekraft einer grünen ArchUnit-Regel?

A. Die formulierte Strukturbedingung gilt für die importierten Klassen — RICHTIG. ArchUnit prüft konkrete Regeln auf einem gewählten Importbereich. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Alle nicht formulierten Architekturregeln gelten ebenfalls — FALSCH. Nicht definierte Bedingungen werden nicht automatisch geprüft. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Das Fachverhalten aller Klassen ist korrekt — FALSCH. Strukturprüfungen ersetzen keine Verhaltenstests. Quelle: https://www.archunit.org/userguide/html/000_Index.html

### A25: Was prüft die Onion-Architecture-Regel laut ArchUnit für Adapter?

A. Adapter dürfen nicht voneinander abhängen — RICHTIG. Die Anleitung beschreibt Adapter als Verbindungen zu Infrastruktur ohne Adapter-zu-Adapter-Abhängigkeit. Quelle: https://www.archunit.org/userguide/html/000_Index.html
B. Jeder Adapter muss direkt von jedem anderen Adapter abhängen — FALSCH. Die Onion-Regel verbietet gerade solche Abhängigkeiten. Quelle: https://www.archunit.org/userguide/html/000_Index.html
C. Adapter müssen sämtliche Domänenregeln selbst enthalten — FALSCH. Domänenmodelle und -dienste liegen im Kern, nicht in den Adaptern. Quelle: https://www.archunit.org/userguide/html/000_Index.html

## playwright-for-web-flows

### P01: Was repräsentiert ein Playwright-Locator?

A. Eine Möglichkeit, Elemente zum jeweiligen Zeitpunkt auf der Seite zu finden — RICHTIG. Locators bilden die Grundlage für wiederholbares Finden und automatisches Warten. Quelle: https://playwright.dev/docs/locators
B. Eine dauerhaft gespeicherte DOM-Elementinstanz — FALSCH. Ein Locator sucht Elemente bei seiner Nutzung erneut. Quelle: https://playwright.dev/docs/locators
C. Ein Screenshot der gesamten Seite — FALSCH. Ein Locator beschreibt Elemente, nicht ein Bild der Seite. Quelle: https://playwright.dev/docs/locators

### P02: Welcher Locator wählt einen Button über Rolle und zugänglichen Namen?

A. getByRole('button', { name: 'Speichern' }) — RICHTIG. getByRole verbindet die semantische Rolle mit dem zugänglichen Namen. Quelle: https://playwright.dev/docs/locators
B. getByText('button') — FALSCH. Textinhalt allein bezeichnet weder die Rolle noch den Namen Speichern. Quelle: https://playwright.dev/docs/locators
C. locator('button').first() — FALSCH. Die erste Position ist kein stabiler zugänglicher Name. Quelle: https://playwright.dev/docs/locators

### P03: Warum sind Rolle und zugänglicher Name für viele Webtests gute Selektoren?

A. Sie entsprechen der für Nutzende sichtbaren Bedienbedeutung — RICHTIG. Playwright empfiehlt nutzernahe Attribute wie Rolle und Namen. Quelle: https://playwright.dev/docs/locators
B. Sie ignorieren jede Änderung am angezeigten Inhalt — FALSCH. Ein veränderter zugänglicher Name kann den Test bewusst scheitern lassen. Quelle: https://playwright.dev/docs/locators
C. Sie wählen auch ohne passende Rolle stets genau ein Element — FALSCH. Die Rolle muss zum Element passen und Eindeutigkeit bleibt nötig. Quelle: https://playwright.dev/docs/locators

### P04: Welcher Locator passt zu einem Eingabefeld mit sichtbarer Beschriftung E-Mail?

A. getByLabel('E-Mail') — RICHTIG. getByLabel nutzt die verknüpfte Beschriftung eines Eingabefelds. Quelle: https://playwright.dev/docs/locators
B. getByRole('heading', { name: 'E-Mail' }) — FALSCH. Ein Eingabefeld ist keine Überschrift. Quelle: https://playwright.dev/docs/locators
C. getByAltText('E-Mail') — FALSCH. Alternativtext richtet sich vor allem an Bilder, nicht an Formularlabels. Quelle: https://playwright.dev/docs/locators

### P05: Welchen Locator bietet Playwright für den Placeholder eines Eingabefelds?

A. getByPlaceholder(...)  — RICHTIG. Die Locator-Dokumentation zeigt getByPlaceholder für Platzhaltertext. Quelle: https://playwright.dev/docs/locators
B. getByTitle(...)  — FALSCH. getByTitle sucht das title-Attribut statt den Placeholder. Quelle: https://playwright.dev/docs/locators
C. getByRole('placeholder') — FALSCH. placeholder ist keine ARIA-Rolle. Quelle: https://playwright.dev/docs/locators

### P06: Wann ist getByTestId gegenüber Rolle oder Label besonders passend?

A. Wenn keine geeignete nutzernahe Kennzeichnung zur stabilen Auswahl vorhanden ist — RICHTIG. Playwright nennt Test-IDs als ausdrücklich vereinbarten Selektor, während nutzernahe Locators bevorzugt werden. Quelle: https://playwright.dev/docs/locators
B. Wenn ein Element bereits einen eindeutigen zugänglichen Namen besitzt — FALSCH. Dann kann die Nutzerperspektive direkt über Rolle oder Label geprüft werden. Quelle: https://playwright.dev/docs/locators
C. Wenn beliebige CSS-Positionen im DOM eingefroren werden sollen — FALSCH. Test-IDs sind stabile Kennungen und kein Ersatz für Positionsannahmen. Quelle: https://playwright.dev/docs/locators

### P07: Wie grenzt man einen 'Hinzufügen'-Button in einer bestimmten Produktzeile ein?

A. Die Zeile nach Produkttext filtern und darin den Button suchen — RICHTIG. Das Beispiel kombiniert listitem.filter({ hasText }) mit getByRole('button'). Quelle: https://playwright.dev/docs/locators
B. Immer den ersten Hinzufügen-Button der Seite anklicken — FALSCH. Die erste Position kann zu einem anderen Produkt gehören. Quelle: https://playwright.dev/docs/locators
C. Alle Hinzufügen-Buttons gleichzeitig anklicken — FALSCH. Der Ablauf soll die eine beabsichtigte Produktzeile bedienen. Quelle: https://playwright.dev/docs/locators

### P08: Was prüft locator.filter({ has: innerLocator })?

A. Ob ein Treffer ein passendes untergeordnetes Element enthält — RICHTIG. has filtert die äußeren Treffer anhand eines relativen inneren Locators. Quelle: https://playwright.dev/docs/locators
B. Ob der gesamte Browser eine zweite Seite geöffnet hat — FALSCH. filter untersucht passende Elemente innerhalb des Locators. Quelle: https://playwright.dev/docs/locators
C. Ob der Locator exakt eine CSS-Klasse besitzt — FALSCH. has erwartet einen inneren Locator, keine CSS-Klassenliste. Quelle: https://playwright.dev/docs/locators

### P09: Von wo aus wird ein innerer Locator in filter({ has: ... }) ausgewertet?

A. Relativ zum äußeren Treffer — RICHTIG. Die Dokumentation betont die relative Auswertung ab dem äußeren Locator. Quelle: https://playwright.dev/docs/locators
B. Immer vom Dokumentstamm — FALSCH. Gerade diese Annahme kann laut Beispiel zu keinem Treffer führen. Quelle: https://playwright.dev/docs/locators
C. Immer vom Browserfenster der letzten Aktion — FALSCH. Die Suche bezieht sich auf den äußeren Locator im DOM. Quelle: https://playwright.dev/docs/locators

### P10: Welcher Aufruf grenzt eine Suche auf einen bestimmten Dialog ein?

A. dialog.getByRole('button', { name: 'Speichern' }) — RICHTIG. Verkettete Locators suchen innerhalb des Dialogtreffers. Quelle: https://playwright.dev/docs/locators
B. page.getByRole('button').first() — FALSCH. Eine globale erste Position gehört nicht zwingend zum Dialog. Quelle: https://playwright.dev/docs/locators
C. page.getByText('Dialog').last() — FALSCH. Text und letzte Position bezeichnen nicht den gewünschten Button im Dialog. Quelle: https://playwright.dev/docs/locators

### P11: Was passiert bei einer Locator-Aktion, die mehrere DOM-Elemente trifft?

A. Eine Strictness-Verletzung wird ausgelöst — RICHTIG. Aktionen mit einem erwarteten Ziel verlangen einen eindeutigen Treffer. Quelle: https://playwright.dev/docs/locators
B. Alle Treffer werden automatisch angeklickt — FALSCH. Eine einzelne click-Aktion bedient nicht stillschweigend alle Treffer. Quelle: https://playwright.dev/docs/locators
C. Stets der erste Treffer wird verwendet — FALSCH. Die erste Position muss ausdrücklich gewählt werden. Quelle: https://playwright.dev/docs/locators

### P12: Warum ist locator.first() bei mehreren Treffern häufig riskant?

A. Eine Seitenänderung kann ein anderes Element an die erste Stelle rücken — RICHTIG. Die Anleitung empfiehlt stattdessen einen eindeutigen Locator. Quelle: https://playwright.dev/docs/locators
B. first() schaltet alle Assertions ab — FALSCH. first() wählt ein Element, verändert aber keine Assertions. Quelle: https://playwright.dev/docs/locators
C. first() klickt jedes Element nacheinander — FALSCH. first() bezeichnet nur den ersten Treffer. Quelle: https://playwright.dev/docs/locators

### P13: Was bewirkt locator.and(otherLocator)?

A. Es verlangt, dass ein Element beide Locator-Bedingungen erfüllt — RICHTIG. and schränkt auf die Schnittmenge der Locators ein. Quelle: https://playwright.dev/docs/locators
B. Es sucht ein Element mit einer der beiden Bedingungen — FALSCH. Für alternative Treffer gibt es or. Quelle: https://playwright.dev/docs/locators
C. Es wartet ausschließlich auf eine Netzwerkantwort — FALSCH. and kombiniert Element-Locators, keine Netzwerkwartebedingung. Quelle: https://playwright.dev/docs/locators

### P14: Was kann locator.or(otherLocator) ergeben, wenn beide Alternativen sichtbar sind?

A. Mehrere Treffer und damit bei Einzelaktionen einen Strictness-Fehler — RICHTIG. Die Dokumentation warnt bei or vor zwei Treffern. Quelle: https://playwright.dev/docs/locators
B. Automatisch nur den zuerst geschriebenen Locator — FALSCH. or kann beide Alternativen liefern. Quelle: https://playwright.dev/docs/locators
C. Einen Testabbruch ohne Prüfung der Trefferzahl — FALSCH. Der konkrete Fehler entsteht erst bei einer Operation mit Einzelelement-Erwartung. Quelle: https://playwright.dev/docs/locators

### P15: Wie kann ein Locator nach einer DOM-Aktualisierung weiter funktionieren?

A. Er sucht das Element bei der Nutzung erneut — RICHTIG. Locators beschreiben eine Suche und werden zur Aktion neu aufgelöst. Quelle: https://playwright.dev/docs/locators
B. Er hält die alte DOM-Instanz dauerhaft fest — FALSCH. Das würde nach einem Re-Render zu veralteten Elementen führen. Quelle: https://playwright.dev/docs/locators
C. Er verhindert grundsätzlich jede DOM-Änderung — FALSCH. Locators blockieren die Anwendung nicht. Quelle: https://playwright.dev/docs/locators

### P16: Was unterscheidet Playwrights auto-retrying Assertions von einem einmaligen Wertvergleich?

A. Sie wiederholen die Prüfung bis Erfolg oder Timeout — RICHTIG. Die dokumentierten Web-Assertions warten wiederholt auf den erwarteten Zustand. Quelle: https://playwright.dev/docs/test-assertions
B. Sie ändern selbständig den Anwendungscode — FALSCH. Assertions beobachten Zustände und implementieren keine Anwendung. Quelle: https://playwright.dev/docs/test-assertions
C. Sie bestehen unabhängig vom Seitenzustand — FALSCH. Nach dem Timeout schlägt eine unerfüllte Erwartung fehl. Quelle: https://playwright.dev/docs/test-assertions

### P17: Warum muss eine wiederholende Playwright-Assertion mit await aufgerufen werden?

A. Weil die asynchrone Prüfung auf ihren Abschluss gewartet werden muss — RICHTIG. Die Dokumentation weist bei auto-retrying Assertions ausdrücklich auf await hin. Quelle: https://playwright.dev/docs/test-assertions
B. Weil await den Browser neu startet — FALSCH. await wartet auf die Assertion und startet keinen Browser. Quelle: https://playwright.dev/docs/test-assertions
C. Weil sonst jeder Locator global wird — FALSCH. await verändert den Suchbereich des Locators nicht. Quelle: https://playwright.dev/docs/test-assertions

### P18: Welche Assertion prüft, dass eine Überschrift für Nutzende sichtbar ist?

A. await expect(heading).toBeVisible() — RICHTIG. toBeVisible ist eine wiederholende Locator-Assertion. Quelle: https://playwright.dev/docs/test-assertions
B. expect(heading).toBeEmpty() — FALSCH. Leerheit sagt nichts darüber, ob die Überschrift sichtbar ist. Quelle: https://playwright.dev/docs/test-assertions
C. expect(page).toHaveURL('/heading') — FALSCH. Eine URL-Prüfung belegt die Sichtbarkeit der Überschrift nicht. Quelle: https://playwright.dev/docs/test-assertions

### P19: Welche Assertion prüft den Text eines gefundenen Elements mit automatischem Retry?

A. await expect(locator).toHaveText('Fertig') — RICHTIG. toHaveText gehört zu den wiederholenden Locator-Assertions. Quelle: https://playwright.dev/docs/test-assertions
B. expect(await locator.textContent()).toBe('Fertig') — FALSCH. Der einmal gelesene Wert wird ohne automatisches Retry verglichen. Quelle: https://playwright.dev/docs/test-assertions
C. await locator.click() — FALSCH. Ein Klick ist eine Aktion und keine Textassertion. Quelle: https://playwright.dev/docs/test-assertions

### P20: Worin liegt bei asynchroner Webanzeige ein Risiko einfacher, nicht wiederholender Assertions?

A. Sie können vor dem erwarteten DOM-Zustand fehlschlagen — RICHTIG. Die Playwright-Dokumentation warnt hier vor instabilen Tests. Quelle: https://playwright.dev/docs/test-assertions
B. Sie machen den DOM-Zustand unsichtbar — FALSCH. Die Aussage betrifft Timing, nicht die Sichtbarkeit der Seite. Quelle: https://playwright.dev/docs/test-assertions
C. Sie verhindern jede Navigation — FALSCH. Ein einmaliger Vergleich sperrt keine Navigation. Quelle: https://playwright.dev/docs/test-assertions

### P21: Welche Möglichkeit bietet Playwright für komplexere wiederholte Prüfungen jenseits fertiger Locator-Assertions?

A. expect.poll(...) oder expect.toPass(...)  — RICHTIG. Die Assertions-Dokumentation nennt diese APIs für komplexere Retry-Bedingungen. Quelle: https://playwright.dev/docs/test-assertions
B. locator.first() als Ersatz für jede Prüfung — FALSCH. first wählt einen Treffer, führt aber keine komplexe Assertion aus. Quelle: https://playwright.dev/docs/test-assertions
C. Einmaliges Auslesen ohne weitere Prüfung — FALSCH. Das bietet gerade kein Retry. Quelle: https://playwright.dev/docs/test-assertions

### P22: Was bewirkt expect.soft bei einer fehlgeschlagenen Assertion?

A. Der Test läuft weiter, wird aber als fehlgeschlagen markiert — RICHTIG. Soft Assertions beenden die Ausführung nicht sofort, halten den Fehler aber fest. Quelle: https://playwright.dev/docs/test-assertions
B. Der Fehlschlag wird als Erfolg gezählt — FALSCH. Die Testwertung bleibt fehlgeschlagen. Quelle: https://playwright.dev/docs/test-assertions
C. Der Browser schließt sofort — FALSCH. Soft Assertions erlauben weitere Testschritte. Quelle: https://playwright.dev/docs/test-assertions

### P23: Wofür kann expect.configure({ timeout: 10000 }) eingesetzt werden?

A. Für eine Expect-Variante mit geändertem Standard-Timeout — RICHTIG. Die Dokumentation zeigt eine vorkonfigurierte Expect-Instanz. Quelle: https://playwright.dev/docs/test-assertions
B. Zum Umschalten der Anwendung auf Produktionsdaten — FALSCH. expect.configure stellt Assertion-Vorgaben ein, keine Datenquelle. Quelle: https://playwright.dev/docs/test-assertions
C. Zum festen Sortieren aller DOM-Elemente — FALSCH. Ein Timeout ändert keine DOM-Reihenfolge. Quelle: https://playwright.dev/docs/test-assertions

### P24: Was lässt sich mit locator.filter({ hasNotText: 'Ausverkauft' }) ausdrücken?

A. Nur Treffer ohne diesen Text weiterverwenden — RICHTIG. hasNotText filtert äußere Treffer nach fehlendem Text. Quelle: https://playwright.dev/docs/locators
B. Den Text Ausverkauft aus der Anwendung löschen — FALSCH. Ein Locator filtert die Suche, verändert aber keinen DOM-Text. Quelle: https://playwright.dev/docs/locators
C. Alle Treffer mit diesem Text bevorzugen — FALSCH. hasNotText schließt solche Treffer gerade aus. Quelle: https://playwright.dev/docs/locators

### P25: Welche Aussage trifft ein grüner Browser-Test für einen Webablauf?

A. Der geprüfte Ablauf erfüllt die formulierten Assertions unter den Testbedingungen — RICHTIG. Die Assertions belegen nur beobachtete Zustände des ausgeführten Ablaufs. Quelle: https://playwright.dev/docs/test-assertions
B. Jede fachliche Regel der Anwendung ist geprüft — FALSCH. Nicht durchlaufene Fachfälle sind durch diesen Test nicht abgedeckt. Quelle: https://playwright.dev/docs/test-assertions
C. Jede Browser- und Gerätekombination ist geprüft — FALSCH. Ein Testlauf betrifft die tatsächlich ausgeführten Projekte und Umgebungen. Quelle: https://playwright.dev/docs/test-assertions

## web-xss-and-safe-dom

### X01: Welche Voraussetzung benötigt ein erfolgreicher XSS-Angriff?

A. Angreiferkontrollierter Inhalt wird in der Seite ausgeführt — RICHTIG. OWASP beschreibt das Einbringen und Ausführen schädlichen Inhalts als Kern von XSS. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Ein bloß angezeigter Text ohne Codeausführung — FALSCH. Reine Textanzeige erfüllt die Ausführungsbedingung nicht. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Ein fehlender CSS-Kommentar — FALSCH. Ein CSS-Kommentar allein ist keine Ausführung eingeschleusten Inhalts. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X02: Wie sollte ein Web-Frontend einen untrusted Hinweis als reinen Text in ein DOM-Element schreiben?

A. Mit textContent — RICHTIG. OWASP nennt textContent als sicheren Sink für Text. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Mit innerHTML aus dem Rohwert — FALSCH. innerHTML interpretiert den Wert als HTML und kann gefährliche Inhalte verarbeiten. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Mit document.write aus dem Rohwert — FALSCH. document.write fügt Inhalt in einen gefährlichen HTML-Kontext ein. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X03: Warum reicht eine einzige allgemeine Escape-Funktion nicht für alle XSS-Ausgabestellen?

A. HTML, Attribute, JavaScript, CSS und URLs haben verschiedene Kontexte — RICHTIG. OWASP fordert zum jeweiligen Ausgabekontext passende Behandlung. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Weil jeder Kontext dieselben Zeichen ausführt — FALSCH. Gerade die Unterschiede der Kontexte verlangen verschiedene Kodierung. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Weil nur die Eingabedatei kodiert werden darf — FALSCH. Entscheidend ist die Stelle, an der Daten ausgegeben werden. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X04: Welche Maßnahme passt für einen untrusted String zwischen HTML-Tags?

A. HTML-Entity-Encoding bei der Ausgabe — RICHTIG. OWASP empfiehlt Entity-Encoding für den HTML-Textkontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Nur URL-Encoding — FALSCH. URL-Encoding ist auf URL-Teile zugeschnitten, nicht HTML-Text. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Nur CSS-Encoding — FALSCH. CSS-Encoding schützt CSS-Werte, nicht HTML-Text. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X05: Welche Zeichenfolge steht nach HTML-Entity-Encoding für ein öffnendes Winkelzeichen?

A. &lt; — RICHTIG. OWASP zeigt die Kodierung von < zu &lt; im HTML-Kontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. %3C — FALSCH. Das ist URL-Percent-Encoding, nicht die gezeigte HTML-Entity. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. \3C — FALSCH. Das ist eine CSS-artige Escapeform, nicht HTML-Entity-Encoding. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X06: Welche zusätzliche Begrenzung gilt bei setAttribute als Safe Sink für untrusted Werte?

A. Der Attributname muss fest und ungefährlich sein — RICHTIG. OWASP nennt etwa id oder class als sichere fest gewählte Attributnamen. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Der Attributname darf frei aus Nutzereingaben stammen — FALSCH. Ein dynamischer gefährlicher Attributname kann Codeausführung ermöglichen. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Das Attribut muss ein Eventhandler wie onclick sein — FALSCH. Eventhandler-Attribute sind für untrusted Werte gerade gefährlich. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X07: Warum sind Anführungszeichen um dynamische HTML-Attributwerte wichtig?

A. Sie erschweren den Wechsel in einen anderen HTML-Kontext — RICHTIG. OWASP empfiehlt vollständiges Quoting der Attributwerte. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Sie ersetzen jede Prüfung einer untrusted URL — FALSCH. Quoting validiert weder Schema noch Ziel einer URL. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Sie führen den Attributwert automatisch als Text im Body aus — FALSCH. Quoting begrenzt den Attributkontext und erzeugt keinen Body-Text. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X08: Wohin darf untrusted Dateninhalt laut OWASP im JavaScript-Kontext höchstens gesetzt werden?

A. In einen passend kodierten, zitierten Datenwert — RICHTIG. OWASP beschreibt nur quoted data values als geeignete Stelle für Variablen in JavaScript. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Direkt in ausführbaren JavaScript-Code — FALSCH. Dynamische Werte außerhalb eines Datenwerts können Code bilden. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Direkt in den Namen eines Eventhandlers — FALSCH. Eventhandler sind gefährliche Ausgabekontexte. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X09: Welche Content-Type-Angabe empfiehlt OWASP für ausgelieferte JSON-Daten?

A. application/json — RICHTIG. Die Quelle nennt application/json statt text/html zum Vermeiden einer HTML-Interpretation. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. text/html — FALSCH. Gerade diese Angabe kann JSON in einem HTML-Kontext interpretierbar machen. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. text/css — FALSCH. CSS ist nicht der Medientyp für JSON-Daten. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X10: Wo sollten dynamische Werte in einem CSS-Kontext unter geeigneter Kodierung stehen?

A. In einem CSS-Property-Wert — RICHTIG. OWASP begrenzt dynamische CSS-Werte auf Property-Werte. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Als frei erzeugter Selektor — FALSCH. Dynamische Selektoren gehören zu unsicheren CSS-Kontexten. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Als frei erzeugter style-Tag-Name — FALSCH. Ein Tag-Name ist kein sicherer CSS-Property-Wert. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X11: Welche DOM-Zuweisung nennt OWASP als Safe Sink für einen CSS-Property-Wert?

A. element.style.property = wert — RICHTIG. Die Zuweisung an eine konkrete Style-Eigenschaft wird als Safe Sink genannt. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. element.innerHTML = wert — FALSCH. innerHTML interpretiert HTML und ist kein CSS-Property-Sink. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. document.write(wert) — FALSCH. document.write schreibt in HTML statt in eine sichere CSS-Eigenschaft. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X12: Welche Kodierung passt zu untrusted Daten in einem URL-Parameter?

A. URL-Percent-Encoding des Parameterwerts — RICHTIG. OWASP empfiehlt URL-Encoding für Daten in einem URL-Kontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Nur HTML-Text-Encoding — FALSCH. Das ist nicht die Kodierung für einen URL-Parameter. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Nur JavaScript-Hex-Encoding — FALSCH. JavaScript-Encoding richtet sich an einen anderen Ausgabekontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X13: Ein kodierter URL-Parameter wird in ein href-Attribut eingefügt. Was ist zusätzlich zu beachten?

A. Den fertigen URL-Wert für den HTML-Attributkontext kodieren — RICHTIG. OWASP nennt URL-Encoding gefolgt von Attribut-Encoding für diesen verschachtelten Kontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Den URL-Parameter nachträglich als JavaScript ausführen — FALSCH. Das würde aus Daten ausführbaren Code machen. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Auf Attribut-Quoting verzichten — FALSCH. OWASP empfiehlt gerade vollständig zitierte Attributwerte. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X14: Welche Browserfunktion nennt OWASP für das Kodieren eines URL-Query-Werts in JavaScript?

A. encodeURIComponent(...) — RICHTIG. encodeURIComponent kodiert den dynamischen Query-Wert. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. eval(...) — FALSCH. eval führt JavaScript aus und kodiert keinen Query-Wert. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. innerHTML — FALSCH. innerHTML ist ein HTML-Sink und keine URL-Kodierfunktion. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X15: Wie ist eine vollständig von Nutzenden gelieferte href-URL zu behandeln?

A. Schema und Ziel validieren sowie passende Attributkodierung anwenden — RICHTIG. OWASP fordert bei untrusted URLs Validierung und sichere http/https-Schemata. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Nur Leerzeichen entfernen — FALSCH. Das verhindert weder gefährliche Schemata noch Attributkontextfehler. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Nur den Linktext kodieren — FALSCH. Der href-Wert selbst bleibt sonst unkontrolliert. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X16: Warum sollte untrusted Inhalt nicht direkt in einen script-Block gesetzt werden?

A. Der Kontext bleibt selbst mit einfacher Ausgabe-Kodierung gefährlich — RICHTIG. OWASP nennt direkte Skriptinhalte als gefährlichen Kontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Weil script-Blöcke grundsätzlich kein JavaScript enthalten dürfen — FALSCH. Das Problem ist die untrusted dynamische Einfügung, nicht JavaScript an sich. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Weil dort nur CSS verarbeitet wird — FALSCH. Ein script-Block ist JavaScript-Kontext. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X17: Was ist passend, wenn Nutzende tatsächlich formatiertes HTML verfassen dürfen?

A. HTML vor der Wiedergabe mit einem geeigneten Sanitizer bereinigen — RICHTIG. Kodierung würde gewünschtes Markup unterdrücken; OWASP empfiehlt Sanitization. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Ungeprüftes HTML direkt über innerHTML einsetzen — FALSCH. Rohes HTML kann schädliche Elemente oder Attribute enthalten. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Den HTML-Wert nur als URL-Parameter kodieren — FALSCH. URL-Kodierung entfernt keine gefährliche HTML-Struktur für die Anzeige. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X18: Warum kann eine nachträgliche Änderung an bereits bereinigtem HTML problematisch sein?

A. Sie kann die Wirkung der Bereinigung aufheben — RICHTIG. OWASP warnt vor Mutation nach der Sanitization. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Sie macht HTML immer zu reinem Text — FALSCH. Eine Änderung kann gefährliche Struktur wieder einführen statt sie zu neutralisieren. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Sie deaktiviert automatisch alle Browser-Cookies — FALSCH. Cookie-Zustand ist nicht die hier beschriebene Wirkung. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X19: Was sollte bei einer eingesetzten HTML-Sanitizer-Bibliothek regelmäßig geschehen?

A. Sicherheitsupdates einspielen — RICHTIG. OWASP weist auf neue Browserfunktionen und mögliche Sanitizer-Bypasses hin. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Jede neue Version ungeprüft in Produktion übernehmen — FALSCH. Aktualisierung braucht weiterhin Prüfung im Projekt. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Die Bibliothek nach dem ersten Einsatz nie mehr ändern — FALSCH. Bekannte Umgehungen erfordern Pflege. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X20: Welche weitere Safe-Sink-Methode setzt untrusted Inhalt ausdrücklich als Text ein?

A. insertAdjacentText(...) — RICHTIG. OWASP listet insertAdjacentText unter sicheren Text-Sinks. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. insertAdjacentHTML(...) — FALSCH. Diese Methode interpretiert HTML statt bloß Text. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. document.write(...) — FALSCH. document.write fügt in einen gefährlichen HTML-Kontext ein. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X21: Welche Wirkung hat eine Content Security Policy im XSS-Schutz nach OWASP?

A. Sie ergänzt die kontextgerechte Ausgabeabsicherung — RICHTIG. CSP ist eine zusätzliche Verteidigungsschicht, keine primäre Ersatzmaßnahme. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Sie ersetzt sichere DOM-Sinks vollständig — FALSCH. OWASP empfiehlt weiterhin sichere Sinks und Kontextkodierung. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Sie bereinigt eingegebenes HTML automatisch — FALSCH. CSP ist keine HTML-Sanitization. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X22: Was bewirken Trusted Types bei unterstützten Browsern für bestimmte DOM-XSS-Sinks?

A. Sie weisen rohe Strings zurück und verlangen eine geprüfte Policy — RICHTIG. OWASP beschreibt die Ablehnung einfacher Strings an DOM-XSS-Sinks. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Sie ersetzen sämtliche serverseitigen Sicherheitsprüfungen — FALSCH. Trusted Types adressieren bestimmte DOM-Sinks im Browser. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Sie kodieren jeden URL-Parameter automatisch — FALSCH. URL-Parameterkodierung ist ein anderer Schutzschritt. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X23: Warum ist ein pauschaler HTTP-Interceptor für XSS-Encoding oft unzureichend?

A. Er kennt den späteren Ausgabekontext der Daten nicht zuverlässig — RICHTIG. OWASP kritisiert kontextloses Encoding vor der eigentlichen Ausgabe. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Er wird grundsätzlich erst nach dem Browser-Rendering aufgerufen — FALSCH. Das Problem ist fehlende Kenntnis von HTML-, JS- oder anderen Zielkontexten. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Er kann keinerlei Eingabedaten sehen — FALSCH. Interceptoren sehen teils Eingaben, aber nicht unbedingt alle und deren Verwendung. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X24: Warum ist eine Web Application Firewall keine verlässliche alleinige XSS-Abwehr?

A. Sie kann Umgehungen und rein clientseitige DOM-XSS-Fälle übersehen — RICHTIG. OWASP nennt WAFs unzuverlässig und ohne Wirkung auf die Wurzel der Lücke. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Sie wandelt sämtliche DOM-Sinks in sichere Text-Sinks um — FALSCH. Eine WAF verändert nicht die DOM-API der Anwendung. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Sie verhindert die Ausführung aller Browser-Skripte — FALSCH. Eine WAF ist kein vollständiger Skriptblocker im Browser. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

### X25: Welcher React-Ausweg aus automatischer Textbehandlung braucht besondere Vorsicht?

A. dangerouslySetInnerHTML mit unbereinigtem HTML — RICHTIG. OWASP nennt diesen Escape Hatch ohne Sanitization als XSS-Risiko. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
B. Normale Textdarstellung per JSX — FALSCH. Die übliche Framework-Ausgabe nutzt automatische Schutzmechanismen. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
C. Ein festes aria-label ohne Nutzereingabe — FALSCH. Ein statisches Label ist nicht der genannte HTML-Escape-Hatch. Quelle: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

## dependency-security-assessment

### D01: Was sollte vor der Aufnahme einer neuen Open-Source-Abhängigkeit zuerst geprüft werden?

A. Ob vorhandene Komponenten den Bedarf bereits decken — RICHTIG. OpenSSF empfiehlt die Notwendigkeit der neuen Abhängigkeit zu hinterfragen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Ob der Paketname möglichst kurz ist — FALSCH. Die Namenslänge belegt keinen Bedarf oder Nutzen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Ob die Bibliothek die meisten indirekten Abhängigkeiten mitbringt — FALSCH. Jede zusätzliche Abhängigkeit vergrößert die Angriffsfläche. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D02: Warum erhöht eine neue direkte Bibliothek auch über ihre transitiven Pakete das Risiko?

A. Jedes zusätzliche Paket kann kompromittiert werden — RICHTIG. OpenSSF nennt Angriffsflächen durch direkte und transitive Abhängigkeiten. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Transitive Pakete können nie produktiv geladen werden — FALSCH. Das hängt vom konkreten Dependency-Graph ab und ist kein allgemeiner Schutz. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Die Lizenz der direkten Bibliothek gilt automatisch für alle Pakete — FALSCH. Transitive Komponenten können eigene Lizenzen und Risiken haben. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D03: Worauf zielt die Prüfung der Echtheit einer Open-Source-Bibliothek?

A. Auf das autorisierte Projekt statt eines Nachahmerpakets — RICHTIG. OpenSSF nennt Echtheit als Schutz gegen Typosquatting und fremde Forks. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Auf eine möglichst ähnliche Schreibweise zu einem populären Namen — FALSCH. Gerade ähnlich geschriebene Namen können Angriffe sein. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Auf das automatische Vertrauen in jedes Suchergebnis — FALSCH. Suchtreffer ersetzen die Prüfung des Ursprungs nicht. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D04: Welches Signal kann bei der Echtheitsprüfung auf Typosquatting hinweisen?

A. Ein sehr ähnlicher Name wie bei einem bekannteren Paket — RICHTIG. Die OpenSSF empfiehlt den Vergleich ähnlicher Namen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Eine dokumentierte Original-Projektwebsite — FALSCH. Eine zuordenbare Projektwebsite hilft bei der Echtheitsprüfung. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Ein nachvollziehbarer Link zum offiziellen Repository — FALSCH. Ein verifizierbarer Ursprung spricht für Authentizität. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D05: Welche Beobachtung spricht für laufende Wartung eines Kandidaten?

A. Bedeutsame aktuelle Projektaktivität — RICHTIG. OpenSSF schlägt aktuelle Commits als Wartungssignal vor. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Ausschließlich das Alter des ersten Commits — FALSCH. Ein altes Projekt kann trotzdem seit langem ungewartet sein. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Ein unveränderter Downloadname — FALSCH. Der Name belegt keine aktuelle Pflege. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D06: Was ergänzt die Prüfung von Commits bei der Beurteilung der Wartung?

A. Aktuelle Releases oder Mitteilungen der Maintainer — RICHTIG. OpenSSF nennt Kommunikation und Releases als getrennte Signale. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Nur die Anzahl der Sterne im Repository — FALSCH. Beliebtheit zeigt keine aktuellen Releases oder Kommunikation. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Nur die Größe des Downloadarchivs — FALSCH. Archivgröße sagt nichts über Wartung aus. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D07: Warum ist Maintainer-Vielfalt bei einer Abhängigkeit ein Prüfpunkt?

A. Sie kann das Risiko einer einzelnen Ausfallstelle verringern — RICHTIG. OpenSSF nennt mehrere Maintainer als wünschenswert, erkennt aber Ausnahmen an. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Weil ein einzelner Maintainer die Lizenz automatisch ungültig macht — FALSCH. Die Quelle nennt Ein-Personen-Projekte nicht grundsätzlich unzulässig. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Weil die Zahl der Maintainer alle Schwachstellen aufdeckt — FALSCH. Mehrere Maintainer garantieren keine Fehlerfreiheit. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D08: Welches Risiko kann ein instabiles API bei einer Sicherheitsaktualisierung erzeugen?

A. Der Wechsel auf eine sichere Version wird erschwert — RICHTIG. OpenSSF nennt API-Instabilität als Hindernis für notwendige Updates. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Es verhindert die Meldung von Schwachstellen automatisch — FALSCH. Meldbarkeit und API-Kompatibilität sind unterschiedliche Fragen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Es macht jede Version automatisch bösartig — FALSCH. Instabilität ist ein Wartungsrisiko, kein Beweis für Schadcode. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D09: Was sollte an den Standardeinstellungen einer Sicherheitsbibliothek geprüft werden?

A. Ob die einfache Nutzung bereits sichere Defaults bietet — RICHTIG. OpenSSF nennt sichere Voreinstellungen und Beispiele als Auswahlkriterium. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Ob alle Schutzmechanismen zunächst deaktiviert sind — FALSCH. Unsichere Defaults erhöhen Fehlbedienungsrisiken. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Ob die Beispiele nur komplexe Sonderfälle zeigen — FALSCH. Einfache Beispiele sollten ebenfalls sicher sein. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D10: Warum ist eine Anleitung zur sicheren Nutzung für eine Abhängigkeit relevant?

A. Sie hilft, die API ohne vermeidbare Sicherheitsfehler einzusetzen — RICHTIG. OpenSSF fragt ausdrücklich nach Security Guidance. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Sie ersetzt alle Tests des eigenen Einsatzes — FALSCH. Auch mit Anleitung müssen eigene Einsatzfälle geprüft werden. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Sie garantiert einen fehlerfreien Quellcode — FALSCH. Dokumentation ist kein Beweis für Fehlerfreiheit. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D11: Welche Information gehört zur Lizenzprüfung eines Pakets?

A. Ob die Lizenz klar angegeben und mit dem eigenen Einsatz vereinbar ist — RICHTIG. OpenSSF fordert klare und passende Lizenzen für Komponenten. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Nur ob der Paketname eine Lizenzabkürzung enthält — FALSCH. Der Name belegt keine wirksame Lizenzinformation. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Nur ob die direkte Abhängigkeit kostenlos herunterladbar ist — FALSCH. Kostenloser Download ersetzt keine Lizenzklärung. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D12: Wie sollte ein bekanntes wichtiges Sicherheitsproblem in der gewählten Paketversion bewertet werden?

A. Als konkreter Prüf- und Behebungsbedarf vor Nutzung — RICHTIG. OpenSSF empfiehlt den Stand bekannter wichtiger Lücken zu prüfen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Als unproblematisch, solange das Projekt beliebt ist — FALSCH. Beliebtheit beseitigt keine bekannte Schwachstelle. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Als Beweis, dass jede frühere Version ebenfalls betroffen ist — FALSCH. Betroffenheit hängt von den konkreten Versionen ab. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D13: Welche Beobachtung zeigt eine funktionierende Reaktion des Projekts auf Sicherheitsprobleme?

A. Zeitnahe Fehlerbehebung und geregelte Sicherheitsmeldungen — RICHTIG. OpenSSF nennt Reaktionszeit und Meldeweg als Bewertungspunkte. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Verschweigen aller bisherigen Sicherheitsmeldungen — FALSCH. Das erschwert die Beurteilung des Umgangs mit Lücken. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Alle Releases ohne Changelog löschen — FALSCH. Das macht Sicherheitskorrekturen schwerer nachvollziehbar. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D14: Wozu dient ein isolierter Probeeinsatz einer neuen Abhängigkeit?

A. Um Verhalten und mögliche schädliche Aktivitäten zu beobachten — RICHTIG. OpenSSF empfiehlt einen Testeinsatz, möglichst isoliert, auch auf Exfiltration. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Um ohne Prüfung sofort Produktionszugriff zu gewähren — FALSCH. Ein isolierter Test begrenzt gerade mögliche Folgen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Um alle transitiven Abhängigkeiten zu verbergen — FALSCH. Der Probeeinsatz soll zusätzliche Effekte sichtbar machen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D15: Was ist an unerwarteten indirekten Produktionsabhängigkeiten problematisch?

A. Sie erhöhen Angriffsfläche und Supportaufwand — RICHTIG. OpenSSF empfiehlt unnötige transitive Produktionspakete zu vermeiden. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Sie sind immer nur Testwerkzeuge ohne Laufzeitwirkung — FALSCH. Gerade unerwartete Pakete können im Produktionsgraph landen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Sie verbessern automatisch die Lizenzlage — FALSCH. Zusätzliche Komponenten bringen eigene Lizenzfragen mit. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D16: Welche Codebereiche verdienen bei der Prüfung eines fremden Pakets besondere Aufmerksamkeit?

A. Installationsskripte und jüngste verdächtige Änderungen — RICHTIG. OpenSSF nennt Installationsroutinen, Exfiltrationshinweise und neue Commits. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Nur die Formatierung des README-Titels — FALSCH. Ein Titel zeigt keine schädlichen Installationsroutinen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Nur die Dateiendung der Lizenzdatei — FALSCH. Der Prüfpunkt betrifft mögliche Schadfunktion im Code. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D17: Welches Signal kann auf absichtlich schädliches Verhalten in einem Paket hindeuten?

A. Verschleierter ausgeführter Code mit Zugriff auf sensible Umgebungsdaten — RICHTIG. OpenSSF nennt Obfuskation und Exfiltration etwa von Umgebungsvariablen. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Eine nachvollziehbare Dokumentation der API — FALSCH. Dokumentation allein ist kein Schadcode-Signal. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Eine kleine, begründete Abhängigkeitsliste — FALSCH. Die Liste allein deutet nicht auf Datenabfluss. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D18: Welche Bedeutung haben automatisierte Tests eines Abhängigkeitsprojekts bei der Auswahl?

A. Sie sind ein Signal für Pflege und prüfbares Verhalten — RICHTIG. OpenSSF empfiehlt CI-Tests und Testumfang zu bewerten. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Sie beweisen die Abwesenheit aller Sicherheitslücken — FALSCH. Tests können Fehler übersehen und decken nur definierte Fälle ab. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Sie ersetzen die Lizenz- und Echtheitsprüfung — FALSCH. Diese Auswahlaspekte bleiben eigenständig. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D19: Warum sollte die API eines Pakets auf sichere Benutzbarkeit geprüft werden?

A. Ein gut nutzbares Interface erleichtert sichere Anwendung — RICHTIG. OpenSSF nennt etwa parametrisierte Queries als Beispiel einer sicheren API. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
B. Weil ein schweres Interface jede Schwachstelle verhindert — FALSCH. Komplexität kann sichere Nutzung erschweren. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html
C. Weil nur der Paketname für Sicherheitsentscheidungen zählt — FALSCH. Die konkrete API beeinflusst die Sicherheit im Einsatz. Quelle: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software.html

### D20: Was zeigt GitHubs Dependency Review bei einem Pull Request?

A. Hinzugefügte, entfernte oder aktualisierte Abhängigkeiten — RICHTIG. Die Review visualisiert den Dependency-Diff eines Pull Requests. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
B. Nur geänderte CSS-Regeln — FALSCH. Das Feature betrachtet Paketabhängigkeiten, nicht Layoutdetails. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
C. Nur Laufzeit-HTTP-Fehler — FALSCH. HTTP-Laufzeitfehler sind kein Dependency-Diff. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review

### D21: Warum sollte bei einem Update auch die Lockdatei geprüft werden?

A. Sie kann unerwartete Änderungen indirekter Pakete zeigen — RICHTIG. GitHub weist auf transitive Änderungen in Lockdateien hin. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
B. Sie enthält nie transitive Versionen — FALSCH. Gerade diese werden dort sichtbar. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
C. Sie ersetzt die Bewertung der verwendeten Bibliothek — FALSCH. Der Diff zeigt Änderungen, aber die fachliche Bewertung bleibt nötig. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review

### D22: Welche Zusatzinformation kann Dependency Review zu einem neuen Paket liefern?

A. Bekannte Schwachstellen und Lizenzinformationen — RICHTIG. GitHub nennt Vulnerability-Daten und Lizenzen in der Review. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
B. Einen Beweis für völlige Sicherheitsfreiheit — FALSCH. Bekannte Daten können unbekannte Lücken nicht ausschließen. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
C. Die fachliche Korrektheit aller Methoden — FALSCH. Die Review analysiert Abhängigkeiten, nicht jedes Verhalten. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review

### D23: Worin unterscheidet sich Dependency Review von Dependabot Alerts im beschriebenen Einsatz?

A. Review prüft Änderungen vor Einführung, Alerts melden bestehende verwundbare Abhängigkeiten — RICHTIG. GitHub stellt den präventiven PR-Diff den Funden im Bestand gegenüber. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
B. Review meldet nur bereits produktiv genutzte Lücken — FALSCH. Die Review soll neue riskante Versionen vor Übernahme zeigen. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
C. Alerts prüfen ausschließlich CSS-Dateien — FALSCH. Alerts betreffen bekannte Lücken in Abhängigkeiten. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review

### D24: Wann kann die Dependency-Review-Action einen Pull Request blockieren?

A. Wenn ihre konfigurierten Sicherheitsregeln anschlagen und der Check verpflichtend ist — RICHTIG. Die Action kann bei verwundbaren Paketen fehlschlagen und über Branch-Regeln blockieren. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
B. Bei jeder Änderung eines Quellcode-Kommentars — FALSCH. Die Action bewertet Dependency-Änderungen und konfigurierte Regeln. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
C. Nur nach einem bereits erfolgten Deployment — FALSCH. Sie ist gerade für die Prüfung im Pull Request gedacht. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review

### D25: Welche Lücke kann bei getrennten Dependency-Submission- und Review-Workflows entstehen?

A. Eine Race Condition mit fehlenden Dependency-Snapshots — RICHTIG. GitHub empfiehlt passende Reihenfolge oder Retry bei Snapshot-Warnungen. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
B. Jede Lizenz wird automatisch zu Apache-2.0 — FALSCH. Workflow-Reihenfolge ändert keine Lizenzen. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
C. Alle direkten Abhängigkeiten verschwinden aus der Manifestdatei — FALSCH. Das Problem betrifft die Verfügbarkeit von Snapshots zur Prüfung. Quelle: https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review
