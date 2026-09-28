import type { Question } from "../../shared/question";

type Answer = [text: string, explanation: string];
type Row = [
  id: string,
  prompt: string,
  sourceUrl: string,
  correct: Answer,
  wrongA: Answer,
  wrongB: Answer,
];

function pool(rows: Row[]): Question[] {
  return rows.map(([id, prompt, sourceUrl, ...answers]) => ({
    id,
    prompt,
    options: answers.map(([text, explanation], index) => ({
      id: `${id}-${index + 1}`,
      text,
      correct: index === 0,
      explanation,
      sourceUrl,
    })),
  }));
}

const storyDocs = "https://storybook.js.org/docs/writing-docs";
const stories = "https://storybook.js.org/docs/writing-stories";
const args = "https://storybook.js.org/docs/writing-stories/args";
const interactions =
  "https://storybook.js.org/docs/writing-tests/interaction-testing";
const accessibility =
  "https://storybook.js.org/docs/writing-tests/accessibility-testing";
const visual = "https://storybook.js.org/docs/writing-tests/visual-testing";
const penpot = "https://help.penpot.app/user-guide/design-systems/components/";
const variants = "https://help.penpot.app/user-guide/design-systems/variants/";
const javadocGuide =
  "https://docs.oracle.com/en/java/javase/26/javadoc/javadoc-guide.pdf";
const javadocComments =
  "https://docs.oracle.com/en/java/javase/26/docs/specs/javadoc/doc-comment-spec.html";
const javadocCommand =
  "https://docs.oracle.com/en/java/javase/26/docs/specs/man/javadoc.html";
const copilotTasks =
  "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results";
const createIssue =
  "https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue";
const searchIssues =
  "https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests";
const improveProject =
  "https://docs.github.com/en/copilot/tutorials/cloud-agent/improve-a-project";
const reviewPr =
  "https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request";
const qwen = "https://github.com/QwenLM/Qwen3";
const hermes = "https://github.com/NousResearch/hermes-agent";
const bionic = "https://github.com/bionic-gpt/bionic-gpt";

export const firstFourRemainingQuestions: Record<string, Question[]> = {
  "ui-design-system-workflow": pool([
    [
      "UIW01",
      "Was beschreibt eine Story für eine React-Eingabekomponente in Storybook?",
      stories,
      [
        "Einen gerenderten Zustand mit festgelegten Eingaben.",
        "Eine Story beschreibt Darstellung und Verhalten einer Komponente unter ihren Args.",
      ],
      [
        "Eine Liste aller möglichen Props ohne konkrete Werte.",
        "Eine Story zeigt eine bestimmte gerenderte Ausprägung mit Eingabewerten.",
      ],
      [
        "Eine Sammlung von Assertions ohne gerenderte Komponente.",
        "Assertions können eine Story ergänzen, definieren aber ihren Zustand nicht allein.",
      ],
    ],
    [
      "UIW02",
      "In welcher Datei werden Zustände einer Komponente nach dem Storybook-Muster definiert?",
      stories,
      [
        "In einer Story-Datei nahe der Komponentendatei.",
        "Storybook zeigt eine Komponentendatei und die zugehörige *.stories-Datei nebeneinander.",
      ],
      [
        "In der projektweiten Storybook-Konfiguration.",
        "Die Konfiguration richtet Storybook ein; Zustände stehen in Story-Dateien.",
      ],
      [
        "Im React-Komponentenmodul als festes Produktions-Markup.",
        "Storybook definiert die einzelnen Zustände in eigenen Story-Dateien.",
      ],
    ],
    [
      "UIW03",
      "Welche Rolle hat der Default-Export einer Storybook-CSF-Datei?",
      stories,
      [
        "Er enthält Metadaten zur dokumentierten Komponente.",
        "Der Default-Export beschreibt die Komponente und steuert ihre Einordnung.",
      ],
      [
        "Er ist die einzelne Story für den Fehlerzustand.",
        "Einzelne Stories werden als benannte Exporte definiert.",
      ],
      [
        "Er enthält die Play-Funktion jeder einzelnen Story.",
        "Interaktionen gehören zu den jeweiligen Stories und nicht zum Metadatenexport als Ersatz für Stories.",
      ],
    ],
    [
      "UIW04",
      "Wie legt eine CSF-Datei mehrere sichtbare Zustände derselben React-Komponente an?",
      stories,
      [
        "Durch mehrere benannte Story-Exporte.",
        "Benannte Exporte definieren einzelne Stories wie Primary oder Secondary.",
      ],
      [
        "Durch mehrere Default-Exporte in derselben Datei.",
        "Der Default-Export enthält die Metadaten der Datei.",
      ],
      [
        "Durch wechselnde Args ohne eigene Story-Exporte.",
        "Interaktive Controls ändern eine Story, definieren aber keine mehreren benannten Zustände.",
      ],
    ],
    [
      "UIW05",
      "Eine Button-Story soll die Beschriftung und den visuellen Stil festlegen. Wo passen diese Eingaben hin?",
      args,
      [
        "In die Args der betreffenden Story.",
        "Args liefern der gerenderten Komponente die Eingabewerte.",
      ],
      [
        "In den Titel des Story-Metadatenexports.",
        "Der Titel ordnet die Story ein, legt aber keine Button-Props fest.",
      ],
      [
        "In den Testparameter für Accessibility-Regeln.",
        "Der Testparameter steuert Prüfungen statt der Button-Eingaben.",
      ],
    ],
    [
      "UIW06",
      "Zwei Storybook-Stories teilen die meisten Args. Was unterstützt die Dokumentation zur Wiederverwendung?",
      args,
      [
        "Args einer bestehenden Story in einer weiteren Story zusammensetzen.",
        "Storybook zeigt die Wiederverwendung von Primary.args in Secondary.",
      ],
      [
        "Die gerenderte DOM-Ausgabe einer Story als Args kopieren.",
        "Args sind Eingaben, nicht das fertige DOM.",
      ],
      [
        "Die gleichen Werte in beiden Stories von Hand duplizieren.",
        "Das funktioniert, nutzt aber nicht die dokumentierte Wiederverwendung von Args.",
      ],
    ],
    [
      "UIW07",
      "Warum sollte eine eigene Story-Renderfunktion die Args an die Komponente weitergeben?",
      stories,
      [
        "Damit Storybook Controls die Eingaben weiterhin verändern können.",
        "Die Storybook-Dokumentation nennt das Weiterreichen der Args für Controls.",
      ],
      [
        "Damit der Metadatenexport die Werte als Titel anzeigt.",
        "Der Titel hängt nicht vom Weiterreichen der Render-Args ab.",
      ],
      [
        "Damit die Play-Funktion ohne gerenderte Komponente läuft.",
        "Die Play-Funktion arbeitet mit der gerenderten Story.",
      ],
    ],
    [
      "UIW08",
      "Was bietet Storybook als Ausgangspunkt für eine Dokumentationsseite einer neuen Komponente?",
      storyDocs,
      [
        "Autodocs aus Stories und Metadaten.",
        "Autodocs erzeugt eine Basisdokumentation bei den Stories.",
      ],
      [
        "Eine vollständige freie MDX-Seite ohne redaktionelle Arbeit.",
        "Autodocs ist eine generierte Basis, während freie Seiten eigens erstellt werden.",
      ],
      [
        "Eine visuell geprüfte Referenzabbildung jeder Story.",
        "Autodocs dokumentiert Stories; visuelle Prüfung ist ein eigener Ablauf.",
      ],
    ],
    [
      "UIW09",
      "Ein Team braucht eine frei gestaltete Anleitung neben den Storybook-Stories. Welche Möglichkeit nennt Storybook?",
      storyDocs,
      [
        "Eine Dokumentationsseite mit MDX erstellen.",
        "Storybook unterstützt MDX für frei gestaltete Komponentendokumentation.",
      ],
      [
        "Alle Erläuterungen als Args einer einzelnen Story hinterlegen.",
        "Args steuern die Komponente; MDX ist für freie Dokumentationsseiten vorgesehen.",
      ],
      [
        "Die Story-Titel als Ersatz für eine ausführliche Anleitung verwenden.",
        "Titel ordnen Stories, bilden aber keine frei gestaltete Anleitung.",
      ],
    ],
    [
      "UIW10",
      "Welche Aufgabe hat eine Penpot-Hauptkomponente in einem Design-System?",
      penpot,
      [
        "Sie ist die wiederverwendbare Vorlage für verknüpfte Kopien.",
        "Die Hauptkomponente definiert gemeinsame Eigenschaften ihrer Instanzen.",
      ],
      [
        "Sie ist eine unabhängige Kopie ohne Bezug zu weiteren Instanzen.",
        "Gerade der Bezug der Kopien zur Hauptkomponente macht Wiederverwendung aus.",
      ],
      [
        "Sie ist eine einzelne Override-Eigenschaft einer Kopie.",
        "Overrides sind lokale Abweichungen von der Hauptkomponente.",
      ],
    ],
    [
      "UIW11",
      "Eine Penpot-Komponentenkopie soll einen anderen Text zeigen, aber mit der Hauptkomponente verbunden bleiben. Was passt?",
      penpot,
      [
        "Die Eigenschaft der Kopie als Override ändern.",
        "Overrides erlauben lokale Abweichungen und erhalten die Verbindung.",
      ],
      [
        "Die Kopie detachen und als Gruppe weiterführen.",
        "Detach löst die Verbindung zur Hauptkomponente.",
      ],
      [
        "Die Änderung in die Hauptkomponente zurückschreiben.",
        "Damit würde die Änderung für die gemeinsame Vorlage gelten.",
      ],
    ],
    [
      "UIW12",
      "Wann ist Penpots „Detach instance“ fachlich passend?",
      penpot,
      [
        "Wenn eine Kopie ihre Verbindung zur Hauptkomponente verlieren soll.",
        "Detach wandelt die Instanz in eine unabhängige Gruppe um.",
      ],
      [
        "Wenn eine lokale Abweichung später zurückgesetzt werden soll.",
        "Dafür gibt es das Zurücksetzen von Overrides.",
      ],
      [
        "Wenn alle verknüpften Kopien die neue Hauptversion erhalten sollen.",
        "Eine globale Änderung gehört an die Hauptkomponente.",
      ],
    ],
    [
      "UIW13",
      "Eine Änderung an einer Penpot-Kopie soll künftig für die Hauptkomponente gelten. Welche Funktion passt?",
      penpot,
      [
        "„Update main component“ von der Kopie aus.",
        "Penpot kann Änderungen einer Kopie in die Hauptkomponente übernehmen.",
      ],
      [
        "„Detach instance“ für jede betroffene Kopie.",
        "Detach trennt Kopien, statt die Hauptkomponente zu aktualisieren.",
      ],
      [
        "Overrides der Kopie zurücksetzen.",
        "Das verwirft lokale Änderungen statt sie zur Hauptkomponente zu übertragen.",
      ],
    ],
    [
      "UIW14",
      "Wo kann ein Team in Penpot Hinweise zur Nutzung einer Hauptkomponente anbringen, die auch bei Kopien sichtbar sind?",
      penpot,
      [
        "Als Annotationen an der Hauptkomponente.",
        "Penpot zeigt Annotationen auch an Kopien und im Inspect-Bereich.",
      ],
      [
        "Als lokal umbenannte Kopie ohne Annotation.",
        "Ein Kopienname wird nicht als gemeinsame Erläuterung an allen Instanzen gezeigt.",
      ],
      [
        "Als Override auf einer einzelnen Instanz.",
        "Overrides betreffen die jeweilige Kopie und sind keine geteilte Nutzungsanweisung.",
      ],
    ],
    [
      "UIW15",
      "Ein Button-Entwurf braucht Zustände wie Größe und Stil innerhalb einer Penpot-Komponentenfamilie. Welches Konzept passt?",
      variants,
      [
        "Varianten mit Eigenschaften und deren Werten.",
        "Penpot-Varianten gruppieren zusammengehörige Ausprägungen einer Komponente.",
      ],
      [
        "Overrides einer einzelnen Kopie für alle Zustände.",
        "Lokale Overrides bilden keine geordnete Variantenfamilie.",
      ],
      [
        "Gruppen gleich benannter, aber unverknüpfter Ebenen.",
        "Gleiche Namen liefern keine Variantenbeziehung mit Eigenschaften.",
      ],
    ],
    [
      "UIW16",
      "Eine Eingabekomponente soll in Storybook nach einem Klick ihren Fehlerzustand zeigen. Womit wird die Interaktion in einer Story geprüft?",
      interactions,
      [
        "Mit einer Play-Funktion, die die Aktion ausführt und das Ergebnis prüft.",
        "Storybook-Interaktionstests verwenden die Play-Funktion für Aktionen und Assertions.",
      ],
      [
        "Mit Args für den Endzustand ohne simulierten Klick.",
        "Das zeigt den Endzustand, prüft aber den Übergang nach dem Klick nicht.",
      ],
      [
        "Mit einem visuellen Snapshot des Anfangszustands.",
        "Ein Anfangsbild prüft die Interaktion und ihren Endzustand nicht.",
      ],
    ],
    [
      "UIW17",
      "Was liefert die Story einem Storybook-Interaktionstest vor der Play-Funktion?",
      interactions,
      [
        "Einen gerenderten Anfangszustand mit passenden Props und Kontext.",
        "Die Story stellt den Startzustand bereit; die Play-Funktion simuliert dann Verhalten.",
      ],
      [
        "Das Ergebnis einer zuvor gelaufenen Story als Pflichtvoraussetzung.",
        "Die aktuelle Story richtet ihren eigenen Anfangszustand ein.",
      ],
      [
        "Eine fertige Pixel-Diff-Prüfung aller Anwendungsseiten.",
        "Visuelle Tests sind ein anderer Prüfschritt als die Play-Funktion.",
      ],
    ],
    [
      "UIW18",
      "Wie lässt sich ein Storybook-Interaktionstest während der Entwicklung untersuchen?",
      interactions,
      [
        "Im Interactions-Panel die Schritte und Ergebnisse ansehen.",
        "Storybook beschreibt das Panel zum Anzeigen und Debuggen der Tests.",
      ],
      [
        "Über die Dokumentationsseite die Args als Beweis des Klickablaufs lesen.",
        "Args beschreiben den Startzustand und ersetzen keine Prüfung der Testschritte.",
      ],
      [
        "Den Interaktionstest allein anhand des Story-Namens beurteilen.",
        "Der Name zeigt nicht, wo ein simulierter Schritt fehlschlug.",
      ],
    ],
    [
      "UIW19",
      "Welche Aussage zur automatischen Accessibility-Prüfung einer Story ist zutreffend?",
      accessibility,
      [
        "Sie findet regelbasierte Verstöße im gerenderten DOM, aber nicht jedes Nutzungsproblem.",
        "Das Addon prüft heuristisch; unvollständige Fälle brauchen manuelle Prüfung.",
      ],
      [
        "Sie beweist die vollständige Barrierefreiheit aller Seiten der App.",
        "Die dokumentierte Prüfung deckt nicht sämtliche Probleme und Seiten ab.",
      ],
      [
        "Sie prüft die Story anhand ihrer Args statt des gerenderten DOM.",
        "Das Addon analysiert das gerenderte DOM.",
      ],
    ],
    [
      "UIW20",
      "Das Storybook-Accessibility-Panel meldet „Incomplete“. Wie ist das Ergebnis zu behandeln?",
      accessibility,
      [
        "Den markierten Fall manuell prüfen.",
        "Incomplete bezeichnet Fälle, die die automatische Analyse nicht abschließend bewertet.",
      ],
      [
        "Als bestandenes Accessibility-Ergebnis verbuchen.",
        "Incomplete ist kein Pass-Nachweis.",
      ],
      [
        "Als sicheren Codefehler ohne weitere Prüfung behandeln.",
        "Der Status zeigt gerade einen Bedarf an manueller Bewertung.",
      ],
    ],
    [
      "UIW21",
      "Eine Accessibility-Verletzung soll den Storybook-Test in CI fehlschlagen lassen. Welche Einstellung beschreibt die Dokumentation?",
      accessibility,
      [
        "Für die Story `parameters.a11y.test` auf `error` setzen.",
        "`error` führt bei Verstößen zu einem fehlschlagenden Test.",
      ],
      [
        "Für die Story `parameters.a11y.test` auf `todo` setzen.",
        "`todo` warnt, lässt den Test aber nicht wie `error` scheitern.",
      ],
      [
        "Die Prüfung mit `parameters.a11y.test` auf `off` setzen.",
        "`off` deaktiviert die automatische Prüfung der Story.",
      ],
    ],
    [
      "UIW22",
      "Ein visuelles Storybook-Testergebnis zeigt eine Änderung nach einem CSS-Patch. Was ist der nächste sinnvolle Schritt?",
      visual,
      [
        "Den Bildunterschied prüfen und die beabsichtigte Änderung bewusst bestätigen.",
        "Visuelle Tests zeigen Diffs, die auf gewollte oder ungewollte Änderungen geprüft werden.",
      ],
      [
        "Den Unterschied allein wegen eines grünen Funktionstests verwerfen.",
        "Funktionstests bewerten visuelle Abweichungen nicht abschließend.",
      ],
      [
        "Jede Abweichung ungeprüft als neue Baseline akzeptieren.",
        "Die Quelle unterscheidet gewollte von ungewollten Änderungen.",
      ],
    ],
    [
      "UIW23",
      "Mehrere Button-Stories sollen denselben Standardwert für `primary` erhalten, einzelne Stories ihn aber überschreiben können. Wo gehört der gemeinsame Arg hin?",
      args,
      [
        "In `args` des Default-Exports der Komponente.",
        "Storybook wendet Args auf Komponentenebene auf alle zugehörigen Stories an, sofern eine Story sie nicht überschreibt.",
      ],
      [
        "In `args` einer einzelnen Story.",
        "Story-Args gelten zunächst nur für diese Story, nicht automatisch für alle Stories der Komponente.",
      ],
      [
        "In `args` der globalen Preview-Konfiguration.",
        "Globale Args gelten auch für Stories anderer Komponenten und sind damit zu weit gefasst.",
      ],
    ],
    [
      "UIW24",
      "Die Penpot-Bibliothek enthält viele Hauptkomponenten für verschiedene Bereiche. Wie lassen sich zusammengehörige Komponenten dort gruppieren?",
      penpot,
      [
        "Im Assets-Bereich die Funktion „Group“ verwenden oder den Komponentennamen mit `Ordner/Name` strukturieren.",
        "Penpot dokumentiert beide Wege zur Gruppierung von Komponenten in der Bibliothek.",
      ],
      [
        "Jede Instanz von ihrer Hauptkomponente lösen.",
        "Detach trennt eine Kopie von ihrer Hauptkomponente und organisiert keine Bibliothek.",
      ],
      [
        "Alle Komponenten als Overrides einer einzigen Instanz speichern.",
        "Overrides ändern einzelne Kopien und erzeugen keine Bibliotheksgruppen.",
      ],
    ],
    [
      "UIW25",
      "Eine Penpot-Variante hat die Eigenschaft `Disabled` mit den Werten `true` und `false`. Wie kann Penpot diese Eigenschaft bei einer Kopie anzeigen?",
      variants,
      [
        "Als Umschalter statt als Auswahlliste.",
        "Bei genau zwei gegensätzlichen Werten wie `true` und `false` zeigt Penpot an Kopien einen Boolean-Umschalter.",
      ],
      [
        "Als Auswahl zwischen eigenständigen, unverknüpften Hauptkomponenten.",
        "Die Werte gehören zu einer Varianteneigenschaft der verbundenen Komponentenfamilie.",
      ],
      [
        "Als Umschalter bei drei oder mehr definierten Werten.",
        "Der Boolean-Umschalter setzt genau zwei gegensätzliche Werte voraus.",
      ],
    ],
  ]),
  "technical-documentation-generation": pool([
    [
      "JAD01",
      "Ein Java-Team erzeugt API-Dokumentation aus Quellcode. Welche Aufgabe hat das Werkzeug `javadoc`?",
      javadocGuide,
      [
        "Es liest Java-Deklarationen und Dokumentationskommentare für ein Doclet.",
        "Javadoc analysiert Quellen und Kommentare und übergibt sie an ein Doclet.",
      ],
      [
        "Es übersetzt die dokumentierten Typen in ausführbare Klassendateien.",
        "Das ist die Aufgabe des Java-Compilers, nicht der API-Dokumentationsgenerierung.",
      ],
      [
        "Es prüft den fachlichen Inhalt aller Kommentare gegen das Programmverhalten.",
        "Javadoc verarbeitet Kommentare, garantiert aber nicht deren fachliche Richtigkeit.",
      ],
    ],
    [
      "JAD02",
      "Welches Doclet verwendet `javadoc`, wenn kein anderes angegeben wird?",
      javadocGuide,
      [
        "Das Standard-Doclet.",
        "Laut Oracle wird das Standard-Doclet ohne explizite Doclet-Angabe benutzt.",
      ],
      [
        "Ein projektspezifisches Doclet aus dem Klassenpfad.",
        "Ein eigenes Doclet muss explizit gewählt werden.",
      ],
      [
        "Das Compiler-Doclet von `javac`.",
        "`javac` ist ein anderes Werkzeug; Javadoc hat ein eigenes Standard-Doclet.",
      ],
    ],
    [
      "JAD03",
      "Welche Ausgabe erzeugt das Standard-Doclet von JDK 26?",
      javadocGuide,
      [
        "HTML-Seiten der API-Dokumentation.",
        "Das Standard-Doclet ist laut JavaDoc Guide für HTML-Ausgabe zuständig.",
      ],
      [
        "Markdown-Dateien als Standardausgabe statt HTML.",
        "Markdown ist als Kommentareingabe möglich; die Standardausgabe bleibt HTML.",
      ],
      [
        "PDF-Seiten als Standardausgabe statt HTML.",
        "Das Standard-Doclet erzeugt HTML, auch wenn ein Guide als PDF vorliegt.",
      ],
    ],
    [
      "JAD04",
      "Wo muss ein Java-Dokumentationskommentar stehen, damit er zu einer Deklaration gehört?",
      javadocComments,
      [
        "Unmittelbar vor der Deklaration und ihren Modifikatoren.",
        "Die Spezifikation erkennt Kommentare direkt vor der zugehörigen Deklaration.",
      ],
      [
        "Erst nach der öffnenden Klammer der Methode.",
        "Ein Kommentar im Methodenrumpf dokumentiert nicht die Deklaration.",
      ],
      [
        "Beliebig später in derselben Quelldatei.",
        "Die Zuordnung hängt von der Position vor der Deklaration ab.",
      ],
    ],
    [
      "JAD05",
      "Woran erkennt JDK 26 einen traditionellen Javadoc-Kommentar?",
      javadocComments,
      [
        "Am Beginn mit `/**`.",
        "Traditionelle Dokumentationskommentare verwenden diesen öffnenden Trenner.",
      ],
      [
        "Am Beginn mit `/*` ohne weiteres Sternchen.",
        "Das ist ein gewöhnlicher Blockkommentar, kein traditioneller Dokumentationskommentar.",
      ],
      [
        "Am Beginn mit `//` vor einer Methode.",
        "Ein gewöhnlicher Zeilenkommentar ist keine Javadoc-Dokumentation.",
      ],
    ],
    [
      "JAD06",
      "Welche Zeilenform erlaubt JDK 26 für Markdown-Dokumentationskommentare?",
      javadocComments,
      [
        "Aufeinanderfolgende Zeilen mit `///`.",
        "Die Spezifikation erkennt Markdown-Dokumentationskommentare an drei Schrägstrichen je Zeile.",
      ],
      [
        "Zeilen mit `//` und einem folgenden Markdown-Titel.",
        "Zwei Schrägstriche allein bilden keinen Markdown-Dokumentationskommentar.",
      ],
      [
        "Einen Block mit `/**` ohne Markdown-Regeln.",
        "Das ist die traditionelle Kommentarform und nicht die `///`-Form.",
      ],
    ],
    [
      "JAD07",
      "Ein Java-Paket braucht eine eigene kurze API-Einführung. Welche Datei empfiehlt die Javadoc-Spezifikation dafür?",
      javadocComments,
      [
        "`package-info.java` mit einem Dokumentationskommentar.",
        "Die Spezifikation empfiehlt diese Datei für Paketdokumentation.",
      ],
      [
        "`module-info.class` mit Laufzeitdaten.",
        "Eine kompilierte Klassendatei ist keine Paketdokumentation.",
      ],
      [
        "`README.md` im Repository-Root als automatische Paketbeschreibung.",
        "Die Spezifikation bindet Paketdokumentation nicht automatisch aus dieser Datei ein.",
      ],
    ],
    [
      "JAD08",
      "Was sollte der erste Satz der Hauptbeschreibung eines Javadoc-Kommentars leisten?",
      javadocComments,
      [
        "Die deklarierte API knapp und vollständig zusammenfassen.",
        "Die Spezifikation empfiehlt einen prägnanten Summary-Satz.",
      ],
      [
        "Alle Block-Tags noch einmal wortgleich auflisten.",
        "Block-Tags ergänzen Details; der erste Satz fasst die Deklaration zusammen.",
      ],
      [
        "Die Parameterliste ohne Beschreibung wiederholen.",
        "Der erste Satz soll die Deklaration erklären, nicht bloß ihre Signatur abschreiben.",
      ],
    ],
    [
      "JAD09",
      "Wie werden Javadoc-Block-Tags in einem Kommentar eingeleitet?",
      javadocComments,
      [
        "Mit `@` am Anfang einer Kommentarzeile.",
        "Block-Tags beginnen nach optionalem Leerraum und Sternchen mit @.",
      ],
      [
        "Mit `{@` mitten im Beschreibungssatz.",
        "Diese Form kennzeichnet Inline-Tags.",
      ],
      [
        "Mit einem Markdown-Link am Ende des Kommentars.",
        "Ein Link allein ist kein Block-Tag.",
      ],
    ],
    [
      "JAD10",
      "Welche Javadoc-Tag-Form steht innerhalb eines Beschreibungssatzes?",
      javadocComments,
      [
        "Ein Inline-Tag der Form `{@...}`.",
        "Inline-Tags erscheinen innerhalb beschreibenden Textes.",
      ],
      [
        "Ein Block-Tag `@param` mitten im Satz.",
        "Block-Tags beginnen eine eigene Kommentarzeile.",
      ],
      [
        "Ein `@see`-Block innerhalb der laufenden Beschreibung.",
        "`@see` gehört zu den Block-Tags nach der Hauptbeschreibung.",
      ],
    ],
    [
      "JAD11",
      "Welches Tag dokumentiert die Bedeutung eines Methodenparameters?",
      javadocComments,
      [
        "`@param`.",
        "Die Spezifikation ordnet `@param` einem Parameter oder Typparameter zu.",
      ],
      [
        "`@return`.",
        "`@return` beschreibt den Rückgabewert, keinen Eingabeparameter.",
      ],
      [
        "`@since`.",
        "`@since` nennt die Version, seit der ein Element besteht.",
      ],
    ],
    [
      "JAD12",
      "Welches Tag erläutert den Rückgabewert einer Java-Methode?",
      javadocComments,
      [
        "`@return`.",
        "Dieses Tag beschreibt den Wert, den die Methode zurückgibt.",
      ],
      ["`@throws`.", "`@throws` beschreibt eine Ausnahmebedingung."],
      [
        "`@see`.",
        "`@see` stellt einen Verweis auf ergänzende Informationen her.",
      ],
    ],
    [
      "JAD13",
      "Ein API-Aufruf kann bei ungültigem Zustand eine bestimmte Ausnahme auslösen. Welches Tag beschreibt diese Bedingung?",
      javadocComments,
      [
        "`@throws` mit Ausnahme und Auslösebedingung.",
        "`@throws` beziehungsweise `@exception` dokumentiert geworfene Ausnahmen.",
      ],
      [
        "`@param` mit dem Namen der Ausnahme.",
        "`@param` ist für Eingabeparameter oder Typparameter vorgesehen.",
      ],
      [
        "`@since` mit der Klasse der Ausnahme.",
        "`@since` beschreibt den Einführungszeitpunkt.",
      ],
    ],
    [
      "JAD14",
      "Ein Javadoc-Kommentar soll im Fließtext auf eine andere Java-Klasse verlinken. Welches Tag passt?",
      javadocComments,
      [
        "`{@link ...}`.",
        "Das Inline-Tag erzeugt einen Verweis im Beschreibungstext.",
      ],
      [
        "`@see` mitten im Satz.",
        "`@see` ist ein Block-Tag für einen separaten Verweisbereich.",
      ],
      [
        "`{@code ...}` als Navigationslink.",
        "`{@code}` markiert Text als Code und erzeugt keinen solchen Verweis.",
      ],
    ],
    [
      "JAD15",
      "Eine Java-Deklaration soll unter JDK 26 mit Markdown-Javadoc als veraltet markiert werden. Welche Aussage zu Annotation und Javadoc-Tag trifft zu?",
      javadocComments,
      [
        "`@Deprecated` markiert die Deklaration; `@deprecated` kann ergänzend die Ablösung erläutern.",
        "In Markdown-Javadoc ist die Annotation für die Kennzeichnung erforderlich; das Tag liefert bei Bedarf beschreibende Details.",
      ],
      [
        "`@deprecated` im Markdown-Kommentar markiert die Deklaration auch ohne `@Deprecated`.",
        "Anders als bei traditionellen Doc-Kommentaren wird das Tag ohne Annotation in Markdown-Javadoc ignoriert.",
      ],
      [
        "`@Deprecated` und `@deprecated` sind beide erforderlich, damit die Deklaration als veraltet gilt.",
        "Die Annotation reicht für die Kennzeichnung in Markdown-Javadoc; das Tag ergänzt sie optional um eine Erklärung.",
      ],
    ],
    [
      "JAD16",
      "Welches Tag hilft Lesenden zu erkennen, seit welcher Version ein API-Element besteht?",
      javadocComments,
      [
        "`@since`.",
        "Die Spezifikation nutzt `@since` für die Version der Einführung.",
      ],
      ["`@deprecated`.", "Dieses Tag kennzeichnet eine abgekündigte API."],
      ["`@see`.", "Dieses Tag verweist auf andere Elemente oder Ressourcen."],
    ],
    [
      "JAD17",
      "Eine überschriebene Methode soll die Dokumentation ihrer Obermethode übernehmen. Welches Inline-Tag ist dafür vorgesehen?",
      javadocComments,
      [
        "`{@inheritDoc}`.",
        "Das Tag übernimmt passende Dokumentation der geerbten Methode.",
      ],
      [
        "`{@literal}`.",
        "`{@literal}` gibt Text ohne Tag-Interpretation wieder.",
      ],
      [
        "`{@value}`.",
        "`{@value}` setzt einen konstanten Wert in die Dokumentation ein.",
      ],
    ],
    [
      "JAD18",
      "Ein kurzes Java-Codebeispiel soll im JDK-26-Javadoc-Kommentar als Snippet erscheinen. Welches Tag ist dafür vorgesehen?",
      javadocComments,
      [
        "`{@snippet ...}`.",
        "Das Snippet-Tag ist für hervorgehobene Codebeispiele vorgesehen.",
      ],
      [
        "`{@link ...}`.",
        "Das Link-Tag verweist auf ein Ziel, zeigt aber kein Snippet an.",
      ],
      ["`@since`.", "Das Block-Tag nennt die Einführungs-Version."],
    ],
    [
      "JAD19",
      "Warum können externe Snippet-Dateien für API-Beispiele nützlich sein?",
      javadocGuide,
      [
        "Sie lassen Beispielcode getrennt pflegen und gezielt testen.",
        "Der Guide beschreibt externe Snippets und ihre Testbarkeit.",
      ],
      [
        "Das Standard-Doclet kompiliert jede Snippet-Datei automatisch.",
        "Der Guide sagt ausdrücklich, dass das Doclet Snippets nicht selbst testet.",
      ],
      [
        "Externe Snippets lassen sich schlechter testen als Inline-Snippets.",
        "Externe Quelldateien können mit üblichen Werkzeugen kompiliert und getestet werden.",
      ],
    ],
    [
      "JAD20",
      "Welcher `javadoc`-Parameter legt das Ausgabeverzeichnis fest?",
      javadocCommand,
      ["`-d`.", "Die Befehlsreferenz verwendet `-d` für das Zielverzeichnis."],
      ["`-link`.", "`-link` verknüpft mit externer API-Dokumentation."],
      [
        "`-sourcepath`.",
        "`-sourcepath` bestimmt den Suchpfad der Quelldateien.",
      ],
    ],
    [
      "JAD21",
      "Eine API-Dokumentation soll auf eine bereits veröffentlichte externe Java-API verweisen. Welche `javadoc`-Option hilft dabei?",
      javadocCommand,
      [
        "`-link` mit der URL der externen API-Dokumentation.",
        "Die Option bindet Verweise auf externe API-Dokumentation ein.",
      ],
      [
        "`-d` mit der URL der externen API-Dokumentation.",
        "`-d` wählt das lokale Ausgabeverzeichnis.",
      ],
      [
        "`-quiet` mit der URL der externen API-Dokumentation.",
        "`-quiet` begrenzt Konsolenausgaben und ist keine Linkoption.",
      ],
    ],
    [
      "JAD22",
      "Welche Javadoc-Prüfung meldet beispielsweise fehlerhafte Referenzen oder HTML-Probleme in Kommentaren?",
      javadocCommand,
      [
        "DocLint mit passenden Prüfgruppen.",
        "DocLint prüft unter anderem Referenzen und HTML-Struktur.",
      ],
      [
        "Die Option zum Festlegen des Ausgabeverzeichnisses.",
        "Das Ausgabeverzeichnis ist keine Kommentarprüfung.",
      ],
      [
        "Die Option zum Unterdrücken regulärer Konsolenausgaben.",
        "Weniger Ausgabe ist keine gezielte Kommentarprüfung.",
      ],
    ],
    [
      "JAD23",
      "Was ist eine Grenze generierter Javadoc-Seiten bei einem veralteten Kommentar?",
      javadocGuide,
      [
        "Die Generierung übernimmt den fachlichen Fehler aus dem Kommentar.",
        "Das Werkzeug verarbeitet vorhandene Beschreibungen; fachliche Richtigkeit muss geprüft werden.",
      ],
      [
        "Das Standard-Doclet korrigiert die API-Semantik automatisch.",
        "Ein Doclet kann die fachliche Bedeutung nicht aus dem Code garantieren.",
      ],
      [
        "Die Generierung blockiert jeden veralteten Kommentar automatisch.",
        "Strukturelle Prüfungen erkennen nicht jeden fachlich veralteten Inhalt.",
      ],
    ],
    [
      "JAD24",
      "Was bleibt von einer generierten Javadoc-Suchfunktion bei deaktiviertem JavaScript zugänglich?",
      javadocGuide,
      [
        "Der HTML-basierte A-bis-Z-Index.",
        "Der Guide nennt den Index als JavaScript-unabhängigen Zugang zu den Inhalten.",
      ],
      [
        "Die interaktive Suche mit identischem Verhalten.",
        "Die Suche selbst benötigt JavaScript.",
      ],
      [
        "Eine gleichwertige interaktive Suche aus einer Offline-Java-Datei.",
        "Der Guide nennt stattdessen den reinen HTML-A-bis-Z-Index.",
      ],
    ],
    [
      "JAD25",
      "Welche Zusatzseite kann das Standard-Doclet für eine abgekündigte API bereitstellen?",
      javadocGuide,
      [
        "Eine Übersicht abgekündigter API-Elemente.",
        "Der Guide nennt Seiten zu deprecated APIs unter den möglichen Zusammenfassungen.",
      ],
      [
        "Eine Übersicht neuer API-Elemente als Ersatz für die Abkündigungsliste.",
        "Neue APIs und abgekündigte APIs haben getrennte mögliche Übersichten.",
      ],
      [
        "Eine Übersicht konstanter Werte als Abkündigungsliste.",
        "Konstante Werte bilden eine andere Zusammenfassung.",
      ],
    ],
  ]),
  "bug-triage-and-pr-automation": pool([
    [
      "BTP01",
      "Ein neuer Bugbericht ähnelt einer früheren Meldung. Was sollte vor einem zusätzlichen Issue geprüft werden?",
      createIssue,
      [
        "Die vorgeschlagenen ähnlichen Issues öffnen und auf Duplikate prüfen.",
        "GitHub zeigt bei der Issue-Erstellung mögliche Duplikate zur Prüfung an.",
      ],
      [
        "Den neuen Bericht unmittelbar als unabhängigen Fix behandeln.",
        "Ohne Vergleich kann ein vorhandenes Issue übersehen werden.",
      ],
      [
        "Den vermuteten Patch direkt im neuen Issue veröffentlichen.",
        "Ein Patch ersetzt die Prüfung ähnlicher Meldungen nicht.",
      ],
    ],
    [
      "BTP02",
      "Die Triage sucht ältere Meldungen zum selben Spring-Fehler. Welche GitHub-Funktion passt?",
      searchIssues,
      [
        "Issues nach passenden Begriffen und Filtern durchsuchen.",
        "GitHub unterstützt Suche und Filter für relevante Issues und Pull Requests.",
      ],
      [
        "Die offenen Pull Requests ohne Issue-Suche durchsehen.",
        "Ähnliche Bugs können in Issues dokumentiert sein, auch wenn kein PR offen ist.",
      ],
      [
        "Die letzten eigenen Issues ohne Suchbegriffe durchgehen.",
        "Die Repository-Suche erfasst auch Meldungen anderer Beteiligter.",
      ],
    ],
    [
      "BTP03",
      "Ein Bug lässt sich nur mit einer bestimmten Java-Klasse verstehen. Wie kann das Issue den Fundort präzise festhalten?",
      createIssue,
      [
        "Das Issue aus den betroffenen Codezeilen mit Kontextverweis erstellen.",
        "GitHub kann ein Issue direkt aus ausgewählten Codezeilen erzeugen.",
      ],
      [
        "Den Klassennamen ohne Pfad als vollständigen Fundort verwenden.",
        "Ein bloßer Name identifiziert die konkrete Stelle nicht zuverlässig.",
      ],
      [
        "Den Issue-Titel durch die gesamte Quelldatei ersetzen.",
        "Eine Dateikopie ist kein präziser Verweis auf die betroffenen Zeilen.",
      ],
    ],
    [
      "BTP04",
      "Eine Agentenaufgabe zum Bug lautet „Mach es besser“. Was fehlt nach GitHubs Aufgabenleitfaden zuerst?",
      copilotTasks,
      [
        "Eine klare Beschreibung des konkreten Problems.",
        "Der Leitfaden verlangt einen verständlichen, begrenzten Auftrag.",
      ],
      [
        "Eine Liste möglicher Implementierungsdateien ohne Fehlerbeschreibung.",
        "Dateihinweise helfen erst im Zusammenhang mit dem konkreten Problem.",
      ],
      [
        "Eine Schätzung des Patchumfangs ohne Sollverhalten.",
        "Der Umfang sagt nicht, welcher Fehler behoben werden soll.",
      ],
    ],
    [
      "BTP05",
      "Woran erkennt ein Agent, ob der beauftragte Bugfix fachlich fertig ist?",
      copilotTasks,
      [
        "An vollständigen Akzeptanzkriterien für das gewünschte Ergebnis.",
        "Der Leitfaden nennt Akzeptanzkriterien als Bestandteil gut abgegrenzter Aufgaben.",
      ],
      [
        "An der Meldung des Agenten, dass die Aufgabe erledigt sei.",
        "Eine Statusmeldung ersetzt die Überprüfung am Kriterium nicht.",
      ],
      [
        "Am Vorhandensein eines geöffneten Pull Requests.",
        "Ein PR kann die fachlichen Kriterien noch verfehlen.",
      ],
    ],
    [
      "BTP06",
      "Ein Bugfix soll einen bekannten Spring-Endpunkt betreffen. Welche Zusatzangabe begrenzt den Agentenauftrag sinnvoll?",
      copilotTasks,
      [
        "Hinweise auf betroffene Dateien oder Codebereiche.",
        "GitHub nennt Datei-Hinweise als nützlichen Teil eines klaren Auftrags.",
      ],
      [
        "Eine Liste sämtlicher Repositories der Organisation.",
        "Die Gesamtübersicht grenzt den betroffenen Code nicht ein.",
      ],
      [
        "Ein pauschaler Auftrag für alle Endpunkte desselben Produkts.",
        "Das weitet die Änderung statt den fehlerhaften Endpunkt einzugrenzen.",
      ],
    ],
    [
      "BTP07",
      "Welche Aufgabe empfiehlt GitHub eher für einen ersten Piloten mit Copilot cloud agent?",
      copilotTasks,
      [
        "Einen klar eingegrenzten Bug beheben und Tests ergänzen.",
        "GitHub empfiehlt zunächst einfachere, gut definierte Änderungen wie Bugfixes und Testabdeckung.",
      ],
      [
        "Eine ungeklärte Architekturentscheidung über mehrere Repositories treffen.",
        "Breite Aufgaben mit viel Kontext empfiehlt GitHub eher menschlich zu bearbeiten.",
      ],
      [
        "Einen sicherheitskritischen Produktionsvorfall allein übernehmen.",
        "Sensible und kritische Aufgaben gehören laut Leitfaden nicht zu den einfachen Piloten.",
      ],
    ],
    [
      "BTP08",
      "Ein Bugbericht berührt Authentifizierung und Kundendaten. Welche Entscheidung passt zum GitHub-Leitfaden?",
      copilotTasks,
      [
        "Die menschliche Verantwortung und Prüfung vor einer Delegation klären.",
        "GitHub nennt sicherheits- und personenbezogene Aufgaben als besonders sensibel.",
      ],
      [
        "Den Agenten wegen des klaren Dateipfads ohne Review mergen lassen.",
        "Ein Dateipfad mindert die Sicherheitsfolgen nicht.",
      ],
      [
        "Die Sicherheitswirkung allein aus einem grünen UI-Test ableiten.",
        "Ein UI-Test deckt Authentifizierungs- und Datenschutzrisiken nicht vollständig ab.",
      ],
    ],
    [
      "BTP09",
      "Die Fehlerursache ist noch unklar. Welche Vorstufe vor einem PR beschreibt GitHub für Copilot cloud agent?",
      copilotTasks,
      [
        "Das Repository untersuchen und einen Plan erarbeiten lassen.",
        "Der Leitfaden beschreibt Recherche und Planung vor einem Pull Request.",
      ],
      [
        "Sofort einen breiten PR ohne Ursachenklärung öffnen.",
        "Der beschriebene Ablauf erlaubt bewusst eine Recherchephase vor dem PR.",
      ],
      [
        "Den Bericht als dupliziert markieren, ohne Vergleichsfälle zu prüfen.",
        "Eine Markierung löst die unklare Ursache nicht auf.",
      ],
    ],
    [
      "BTP10",
      "Warum ist ein begrenzter Branch vor dem Öffnen eines Bugfix-PR nützlich?",
      copilotTasks,
      [
        "Der Diff kann vor dem PR geprüft und iterativ korrigiert werden.",
        "GitHub nennt Änderungen auf einem Branch mit Review vor dem PR als möglichen Ablauf.",
      ],
      [
        "Der Branch beweist bereits das Bestehen sämtlicher Regressionstests.",
        "Die Existenz eines Branches führt keine Tests aus.",
      ],
      [
        "Der Branch ersetzt die Entscheidung über riskante Änderungen.",
        "Die branchbasierte Arbeit lässt den fachlichen Review weiterhin nötig.",
      ],
    ],
    [
      "BTP11",
      "Ein Bot schlägt eine Fehlerkorrektur ohne Test vor. Welches Akzeptanzkriterium macht den Fix überprüfbarer?",
      copilotTasks,
      [
        "Ein reproduzierender Test schlägt vor dem Fix fehl und besteht danach.",
        "GitHub nennt Unit-Tests als mögliches Akzeptanzkriterium; ein Regressionstest prüft den konkreten Bug.",
      ],
      [
        "Der PR enthält mindestens eine zusätzliche Datei.",
        "Eine neue Datei belegt die Fehlerbehebung nicht.",
      ],
      [
        "Der Agent erzeugt einen besonders langen Lösungstext.",
        "Textlänge ist kein Nachweis für korrigiertes Verhalten.",
      ],
    ],
    [
      "BTP12",
      "Vor der Beauftragung eines Agenten soll das Repository seinen Build- und Testablauf erklären. Wo prüft man solche dauerhaften Hinweise?",
      improveProject,
      [
        "In den Repository-Anweisungen wie `AGENTS.md` oder Copilot-Instructions.",
        "GitHub empfiehlt aktuelle Anweisungen mit Build-, Test- und Projektprinzipien.",
      ],
      [
        "In einer einzelnen früheren Chatantwort ohne Repository-Bezug.",
        "Eine Antwort ist keine dauerhaft gepflegte Projektanweisung.",
      ],
      [
        "Im Kurztext eines beliebigen alten Pull Requests.",
        "Ein PR-Text beschreibt eine Änderung, nicht verlässlich die geltenden Projektbefehle.",
      ],
    ],
    [
      "BTP13",
      "Warum kann eine vorbereitete Agentenumgebung bei wiederkehrenden Bugfixes helfen?",
      improveProject,
      [
        "Projektabhängigkeiten stehen vor der Bearbeitung bereit.",
        "GitHub beschreibt `copilot-setup-steps.yml` für die Vorbereitung der benötigten Abhängigkeiten.",
      ],
      [
        "Sie beweist allein, dass die neuen Regressionstests bestanden sind.",
        "Vorinstallierte Abhängigkeiten führen den konkreten Test nicht automatisch aus.",
      ],
      [
        "Sie legt die fachlichen Akzeptanzkriterien des Issues fest.",
        "Setup-Schritte richten die Umgebung ein; Kriterien gehören zur Aufgabe.",
      ],
    ],
    [
      "BTP14",
      "Ein gefundener Problembereich ist zu groß für einen gut prüfbaren PR. Wie schlägt GitHubs Projektanleitung die Aufteilung vor?",
      improveProject,
      [
        "Ein Haupt-Issue und kleinere Sub-Issues für separat prüfbare PRs anlegen.",
        "GitHub empfiehlt bei umfangreicher Arbeit handhabbare Teilaufgaben mit jeweils eigenem Review.",
      ],
      [
        "Den gesamten Problembereich in einem einzigen PR ohne Teilaufgaben bearbeiten.",
        "Die Anleitung rät bei umfangreicher Arbeit ausdrücklich von einem einzigen großen Issue ab.",
      ],
      [
        "Den Issue-Titel kürzen und die Arbeitsgröße beibehalten.",
        "Ein kürzerer Titel teilt die Arbeit nicht in separat prüfbare Einheiten auf.",
      ],
    ],
    [
      "BTP15",
      "Ein Team will den gefundenen Bug zur Bearbeitung an Copilot cloud agent übergeben. Was beschreibt GitHubs Projektablauf?",
      improveProject,
      [
        "Ein ausreichend beschriebenes Issue dem Agenten zuweisen.",
        "Der Ablauf delegiert die Coding-Arbeit über die Zuweisung des Issues.",
      ],
      [
        "Den Bug ohne konkrete Aufgabe in einem neuen Chat erwähnen.",
        "Die beschriebene Delegation knüpft an ein eingegrenztes Issue an.",
      ],
      [
        "Den PR-Review vor dem ersten Patch als abgeschlossen markieren.",
        "Ein Review kann den noch nicht erstellten Fix nicht bewerten.",
      ],
    ],
    [
      "BTP16",
      "Ein PR soll für die Triage sichtbar zum ursprünglichen Bugbericht führen. Was hilft im GitHub-Review?",
      reviewPr,
      [
        "Das verknüpfte Issue in der PR-Seitenleiste prüfen.",
        "Die Seitenleiste zeigt verknüpfte Issues und damit Problem und Ziel.",
      ],
      [
        "Den PR-Titel als einzigen Beleg der Fehlerursache verwenden.",
        "Der Titel ersetzt den Kontext des Bug-Issues nicht.",
      ],
      [
        "Die Änderungen ohne Bezug zum Ausgangsproblem bewerten.",
        "GitHub empfiehlt, Motivation und Ziel des PR zuerst zu verstehen.",
      ],
    ],
    [
      "BTP17",
      "Ein automatisierter PR enthält mehrere Dateien. Wie empfiehlt GitHub den Review zu strukturieren?",
      reviewPr,
      [
        "Die geänderten Dateien einzeln prüfen und bereits geprüfte markieren.",
        "GitHub empfiehlt die dateiweise Prüfung und die Viewed-Markierung.",
      ],
      [
        "Den PR anhand der Dateianzahl pauschal genehmigen.",
        "Die Zahl der Dateien sagt nichts über ihre Korrektheit aus.",
      ],
      [
        "Die Dateien erst nach dem Merge sichten.",
        "Der Review soll vor der Übernahme stattfinden.",
      ],
    ],
    [
      "BTP18",
      "Eine konkrete Codezeile im Agenten-PR verletzt die Bugfix-Grenze. Wo passt Feedback am besten?",
      reviewPr,
      [
        "Als Kommentar direkt an der betroffenen Diff-Zeile.",
        "GitHub unterstützt zeilenbezogene Kommentare im Files-changed-Review.",
      ],
      [
        "Als allgemeine Bemerkung ohne Verweis auf die Änderung.",
        "Der konkrete Diff-Kommentar macht die betroffene Stelle nachvollziehbar.",
      ],
      [
        "Als neues Issue ohne Verbindung zum laufenden PR.",
        "Das Feedback gehört zum Review des bestehenden Patches.",
      ],
    ],
    [
      "BTP19",
      "Der Reviewer hat mehrere zusammenhängende Korrekturen am Agenten-PR. Wie sollen sie nach GitHubs Hinweis gesendet werden?",
      copilotTasks,
      [
        "In einem gemeinsamen Review gebündelt einreichen.",
        "GitHub empfiehlt Start a review, damit der Agent die Kommentare gemeinsam verarbeitet.",
      ],
      [
        "Jede Anmerkung als sofortige Einzelaktion absenden.",
        "Copilot beginnt nach jeder Einzelanmerkung schon mit der Bearbeitung.",
      ],
      [
        "Die Korrekturen in einem unverbundenen Entwurfs-Issue sammeln.",
        "Das Review ist für Feedback zum bestehenden PR vorgesehen.",
      ],
    ],
    [
      "BTP20",
      "Ein Agenten-PR erfüllt die Akzeptanzkriterien noch nicht. Welche Review-Aktion passt?",
      reviewPr,
      [
        "Änderungen mit konkreter Begründung anfordern.",
        "GitHub bietet Request changes als Review-Ergebnis vor dem Merge.",
      ],
      [
        "Den PR als genehmigt markieren und den Fehler später nachtragen.",
        "Approval signalisiert Abnahme, obwohl die Kriterien offen sind.",
      ],
      [
        "Die Viewed-Markierung als fachliche Freigabe ansehen.",
        "Viewed hält Dateifortschritt fest und ist keine PR-Genehmigung.",
      ],
    ],
    [
      "BTP21",
      "Wie kann ein Team den Agenten nach einem ersten Bugfix-PR weiterarbeiten lassen?",
      copilotTasks,
      [
        "Konkrete Hinweise im PR-Review geben und den neuen Commit erneut prüfen.",
        "Copilot kann auf PR-Kommentare reagieren und weitere Commits liefern.",
      ],
      [
        "Den ersten PR als endgültig behandeln, sobald er geöffnet ist.",
        "GitHub beschreibt Iteration auf dem PR als üblichen Ablauf.",
      ],
      [
        "Den ursprünglichen Bugbericht ohne Bezug zum Patch löschen.",
        "Das würde den Problemkontext aus der Reviewkette entfernen.",
      ],
    ],
    [
      "BTP22",
      "Ein Triage-Bot soll offene und abgeschlossene ähnliche Fälle vergleichen. Welche Suchgrenze ist relevant?",
      searchIssues,
      [
        "Den Statusfilter bewusst wählen, damit abgeschlossene Fälle nicht übersehen werden.",
        "GitHub bietet Filter für Issues und PRs; Status beeinflusst die Treffermenge.",
      ],
      [
        "Die Suche auf die standardmäßig sichtbaren offenen Fälle begrenzen.",
        "Ein früher geschlossener Duplikatfall könnte fehlen.",
      ],
      [
        "Die Suche allein auf selbst erstellte Issues begrenzen.",
        "Duplikate können von anderen Personen gemeldet worden sein.",
      ],
    ],
    [
      "BTP23",
      "Ein Copilot-Agent arbeitet an einem Bugfix. Woran lässt sich nach GitHubs Projektanleitung erkennen, dass der Entwurfs-PR für den eigenen Review bereit ist?",
      improveProject,
      [
        "Der Agent entfernt `[WIP]` aus dem PR-Titel und fügt die beauftragende Person als Reviewer hinzu.",
        "Die Anleitung nennt diese Signale nach Abschluss der Agentenarbeit und empfiehlt dann den eigenen Review.",
      ],
      [
        "Schon der Link zum neu geöffneten Entwurfs-PR im Issue bedeutet, dass der Review abgeschlossen ist.",
        "Der Link erscheint bereits kurz nach dem Start der Agentenarbeit.",
      ],
      [
        "Der Agent genehmigt den eigenen PR, sobald er den ersten Commit erstellt hat.",
        "Die Anleitung sieht nach der Agentenarbeit einen Review durch die beauftragende Person vor.",
      ],
    ],
    [
      "BTP24",
      "Ein PR enthält eine Änderung an einer neuen Abhängigkeit neben dem eigentlichen Bugfix. Was sieht der GitHub-Review ausdrücklich vor?",
      reviewPr,
      [
        "Die Abhängigkeitsänderung gesondert im Diff prüfen.",
        "Die Review-Anleitung führt Dependency Changes als eigenen Prüfschritt.",
      ],
      [
        "Die Abhängigkeit als automatisch durch den Bugbericht gedeckt werten.",
        "Eine zusätzliche Dependency benötigt eine eigene Beurteilung.",
      ],
      [
        "Den übrigen Diff als Ersatz für die Abhängigkeitsprüfung verwenden.",
        "Die Dependency-Ansicht kann Änderungen und mögliche Sicherheitslücken sichtbar machen; der übrige Diff ersetzt sie nicht.",
      ],
    ],
    [
      "BTP25",
      "Wann ist ein von einem Agenten geöffneter PR im Bug-Triage-Ablauf fertig zur Übernahme?",
      reviewPr,
      [
        "Nach Prüfung des Zielbezugs, der Änderungen und offener Review-Punkte.",
        "GitHub beschreibt Review und mögliche Änderungsanforderungen vor dem Merge.",
      ],
      [
        "Sobald der PR erstellt und damit für Review verfügbar ist.",
        "Die Erstellung startet die Prüfung und ist noch keine Abnahme.",
      ],
      [
        "Sobald ein grüner Einzeltest vorliegt, unabhängig vom Review.",
        "Ein Test deckt nicht alle Ziel- und Review-Fragen ab.",
      ],
    ],
  ]),
  "local-model-stack-evaluation": pool([
    [
      "LMS01",
      "Ein Java-Team sucht zuerst ein Sprachmodell und noch keine Agentenoberfläche. Was ist Qwen3 in dieser Auswahl?",
      qwen,
      [
        "Eine Familie von Sprachmodellen mit mehreren Modellgrößen.",
        "Die Qwen-Projektseite beschreibt Qwen3 als Modellfamilie.",
      ],
      [
        "Eine fertige Plattform für Teamrechte und Audit-Trails.",
        "Die Qwen-Seite beschreibt Modelle und Inferenz, keine solche Plattform.",
      ],
      [
        "Ein Agentenprogramm mit eigenen Werkzeug- und Chatabläufen.",
        "Qwen3 liefert Modellgewichte; ein Agentenprogramm ist eine andere Stack-Ebene.",
      ],
    ],
    [
      "LMS02",
      "Wo verweist das Qwen3-Projekt auf veröffentlichte Modell-Checkpoints?",
      qwen,
      [
        "Auf die Qwen3-Sammlungen bei Hugging Face oder ModelScope.",
        "Das Repository verweist für Checkpoints auf diese Sammlungen.",
      ],
      [
        "Auf die Textbeispiele im Qwen3-README als Gewichtsdateien.",
        "Die README erklärt das Projekt und verweist für Checkpoints auf Sammlungen.",
      ],
      [
        "Auf eine lokal erzeugte Inferenzantwort als Checkpoint.",
        "Eine Antwort ist kein veröffentlichter Modell-Checkpoint.",
      ],
    ],
    [
      "LMS03",
      "Ein Pilot will Qwen3 auf eigener Hardware ausführen. Welche Art Anleitung nennt das Projekt?",
      qwen,
      [
        "Lokale Inferenz auf CPU oder GPU mit passenden Laufzeit-Frameworks.",
        "Die Qwen-Dokumentation nennt lokale Ausführung etwa mit llama.cpp, Ollama und LM Studio.",
      ],
      [
        "Eine gehostete Chat-Oberfläche als einzigen Ausführungsweg.",
        "Das Projekt verlinkt ausdrücklich lokale Ausführungswege.",
      ],
      [
        "Einen Agenten-Workflow mit automatisch vergebenen Teamrechten.",
        "Die lokale Inferenzanleitung betrifft das Modell, keine Rechteverwaltung.",
      ],
    ],
    [
      "LMS04",
      "Worin unterscheidet die Qwen3-Dokumentation lokale Inferenz von größerem Deployment?",
      qwen,
      [
        "Sie nennt für Deployment zusätzliche Serving-Frameworks wie vLLM.",
        "Das Projekt führt lokale Laufzeiten und skalierte Deployment-Werkzeuge getrennt auf.",
      ],
      [
        "Sie verwendet für beide Fälle zwingend denselben Desktop-Chat.",
        "Die Dokumentation nennt verschiedene Frameworks für die Einsatzarten.",
      ],
      [
        "Sie beschreibt Deployment als Quantisierung ohne Serving-Frameworks.",
        "Die Dokumentation nennt eigene Serving-Frameworks für Deployment.",
      ],
    ],
    [
      "LMS05",
      "Welche Qwen3-Dokumentationsrubrik beschreibt Verfahren für kompaktere Modellgewichte?",
      qwen,
      [
        "Quantisierung.",
        "Das Qwen-Projekt dokumentiert Verfahren wie GPTQ, AWQ und GGUF.",
      ],
      [
        "Deployment.",
        "Diese Rubrik behandelt das Bereitstellen für Inferenz, nicht die Gewichtsquantisierung als Schwerpunkt.",
      ],
      [
        "Training.",
        "Diese Rubrik behandelt Modellanpassung statt kompaktere Gewichtsformate.",
      ],
    ],
    [
      "LMS06",
      "Ein Pilot soll bei Qwen3-2507 Thinking- und Instruct-Verhalten vergleichen. Was ist laut Projektseite zu wählen?",
      qwen,
      [
        "Die getrennt veröffentlichten Qwen3-2507-Checkpoints für Thinking und Instruct.",
        "Die Projektseite führt für Qwen3-2507 separate Thinking- und Instruct-Modelle auf.",
      ],
      [
        "Einen Modusschalter innerhalb eines einzigen Qwen3-2507-Checkpoints.",
        "Das Umschalten wird für frühere Qwen3-Modelle beschrieben; die 2507-Reihe trennt Thinking und Instruct.",
      ],
      [
        "Zwei verschiedene Serving-Frameworks für denselben Checkpoint.",
        "Das Framework ersetzt den Vergleich der getrennten Modellvarianten nicht.",
      ],
    ],
    [
      "LMS07",
      "Was sagt die Qwen3-Projektseite über die verfügbaren Modellarchitekturen?",
      qwen,
      [
        "Es gibt dichte Modelle und Mixture-of-Experts-Modelle.",
        "Das Repository nennt beide Architekturfamilien mit unterschiedlichen Größen.",
      ],
      [
        "Jeder Checkpoint hat dieselbe Architektur und Größe.",
        "Die Projektseite unterscheidet Architektur und Größe ausdrücklich.",
      ],
      [
        "Die Modellarchitektur entsteht erst aus dem Agenten-Harness.",
        "Die Architektur gehört zum Modell-Checkpoint.",
      ],
    ],
    [
      "LMS08",
      "Ein Pilot benötigt ein Modell für mehrsprachige Aufgaben. Welche Qwen3-Angabe ist ein Ausgangspunkt für die eigene Prüfung?",
      qwen,
      [
        "Die dokumentierte Unterstützung vieler Sprachen mit eigenen Testfällen nachprüfen.",
        "Das Projekt nennt Mehrsprachigkeit; tatsächliche Eignung muss der Pilot messen.",
      ],
      [
        "Aus der Sprachliste eine garantierte Qualität für jede Fachdomäne ableiten.",
        "Eine Modellbeschreibung garantiert keine Qualität für den konkreten Java-Fall.",
      ],
      [
        "Die Sprachauswahl allein als Berechtigungskonzept verwenden.",
        "Sprachfähigkeit steuert keine Datenzugriffe.",
      ],
    ],
    [
      "LMS09",
      "Ein Team hat bereits ein Modell, braucht aber einen Agenten mit Werkzeugen. Welche Rolle kann Hermes übernehmen?",
      hermes,
      [
        "Agentenlaufzeit mit Modellanbindung und Werkzeugsteuerung.",
        "Hermes beschreibt Agentenoberfläche, Provider- und Werkzeugkonfiguration.",
      ],
      [
        "Ein unveränderlicher Qwen3-Modell-Checkpoint.",
        "Hermes bindet Modelle an, ist selbst kein einzelner Checkpoint.",
      ],
      [
        "Ein reiner Modellserver ohne Agentenwerkzeuge.",
        "Hermes beschreibt zusätzlich Werkzeuge, Skills und Agentenabläufe.",
      ],
    ],
    [
      "LMS10",
      "Wie wird in Hermes laut Projektseite ein anderes Modell gewählt?",
      hermes,
      [
        "Über die Modellkonfiguration beziehungsweise `hermes model`.",
        "Hermes dokumentiert Provider- und Modellwahl ohne Codeänderung.",
      ],
      [
        "Durch Neubau des Hermes-Quellcodes für jeden Provider.",
        "Die README beschreibt Providerwechsel als Konfiguration.",
      ],
      [
        "Durch Umstellen des Terminal-Backends allein.",
        "Das Backend steuert die Ausführungsumgebung; die Modellwahl ist separat konfiguriert.",
      ],
    ],
    [
      "LMS11",
      "Weshalb muss ein Hermes-Pilot seinen Datenfluss trotz lokaler Installation prüfen?",
      hermes,
      [
        "Hermes kann externe Modellprovider und Werkzeugdienste anbinden.",
        "Die Projektseite nennt zahlreiche Provider und einen optionalen Tool Gateway.",
      ],
      [
        "Eine lokale Installation erzwingt die Nutzung eines Offline-Modells.",
        "Hermes unterstützt auch entfernte Provider.",
      ],
      [
        "Der Installationsort legt die Rechte aller verbundenen Dienste fest.",
        "Der Installationsort bestimmt externe Zugriffe nicht allein.",
      ],
    ],
    [
      "LMS12",
      "Ein Team möchte Hermes zunächst direkt im Terminal erproben. Welcher Einstieg ist dokumentiert?",
      hermes,
      [
        "Die interaktive CLI mit `hermes` starten.",
        "Die README nennt `hermes` als Terminaleinstieg.",
      ],
      [
        "Zuerst einen dauerhaften Messaging-Gateway erzwingen.",
        "Die CLI ist ein eigener Einstieg ohne Gateway-Pflicht.",
      ],
      [
        "Zuerst einen SSH-Backend auf einem entfernten Host auswählen.",
        "Die CLI kann auch im lokalen Terminal direkt starten.",
      ],
    ],
    [
      "LMS13",
      "Welchen zusätzlichen Kommunikationsweg bietet Hermes neben der CLI?",
      hermes,
      [
        "Einen Messaging-Gateway für angebundene Plattformen.",
        "Die README beschreibt Gateway-Kommunikation etwa über Telegram oder Discord.",
      ],
      [
        "Einen alternativen Modellprovider als Kommunikationskanal für Menschen.",
        "Ein Provider liefert Modellantworten, ist aber kein Messaging-Gateway.",
      ],
      [
        "Einen Terminal-Backend als Ersatz für angebundene Chatplattformen.",
        "Der Backend steuert Befehlsausführung, nicht die Nutzerkommunikation.",
      ],
    ],
    [
      "LMS14",
      "Welche Hermes-Einstellung ist für einen Pilot mit begrenzten Agentenrechten besonders relevant?",
      hermes,
      [
        "Die Auswahl und Konfiguration der aktivierten Werkzeuge.",
        "Hermes dokumentiert `hermes tools` und getrennte Toolsets.",
      ],
      [
        "Die Modellwahl als Ersatz für Tool-Berechtigungen.",
        "Ein anderes Modell begrenzt aktivierte Werkzeuge nicht automatisch.",
      ],
      [
        "Die Länge des letzten Chats als Zugriffsregel.",
        "Kontextlänge ist keine Werkzeugberechtigung.",
      ],
    ],
    [
      "LMS15",
      "Was zeigt Hermes mit mehreren Terminal-Backends für die Betriebsentscheidung?",
      hermes,
      [
        "Der Agent kann je nach Backend lokal, in Containern oder entfernt arbeiten.",
        "Die README nennt unter anderem lokale, Docker- und SSH-Backends.",
      ],
      [
        "Jeder Backend-Typ hält alle Ausgaben auf demselben Rechner.",
        "Entfernte Backends können Daten außerhalb des lokalen Rechners verarbeiten.",
      ],
      [
        "Ein Backend ist lediglich ein anderes Sprachmodell.",
        "Ein Terminal-Backend betrifft die Ausführungsumgebung.",
      ],
    ],
    [
      "LMS16",
      "Welche Hermes-Funktion erhöht bei einem Pilot die Bedeutung einer Datenhaltungsprüfung über Sitzungen hinweg?",
      hermes,
      [
        "Sitzungsübergreifende Erinnerung und wiederverwendbare Skills.",
        "Hermes beschreibt persistente Erinnerung und aus Erfahrungen erzeugte Skills.",
      ],
      [
        "Das Wechseln zwischen lokalen und entfernten Terminal-Backends.",
        "Das betrifft den Ausführungsort, nicht die dokumentierte Erinnerung.",
      ],
      [
        "Die Auswahl eines Modells für die aktuelle Sitzung.",
        "Die Modellwahl allein legt keine persistente Gesprächserinnerung an.",
      ],
    ],
    [
      "LMS17",
      "Ein Team braucht für interne KI-Workflows eine selbst gehostete Laufzeit mit Rollen. Welche Rolle beschreibt Bionic?",
      bionic,
      [
        "Eine Plattform mit Modellen, Werkzeugen und Berechtigungskontrollen.",
        "Bionic beschreibt eine selbst gehostete Agentenplattform mit Teams, Rechten und Laufzeit.",
      ],
      [
        "Ein einzelner unveränderlicher Modell-Checkpoint.",
        "Bionic kann verschiedene Modelle anbinden und ist selbst kein Checkpoint.",
      ],
      [
        "Ein reiner Chatclient ohne Werkzeug- oder Rechteverwaltung.",
        "Bionic nennt Werkzeuge, Teams und Berechtigungen als Plattformbestandteile.",
      ],
    ],
    [
      "LMS18",
      "Welche Modellquellen kann Bionic nach eigener Beschreibung anbinden?",
      bionic,
      [
        "Gehostete, private und lokale Modelle.",
        "Die README nennt diese drei Modellanschlussarten.",
      ],
      [
        "Ein fest eingebautes lokales Modell für alle Workflows.",
        "Bionic ist laut Projekt modellunabhängig.",
      ],
      [
        "Modelle eines einzelnen Cloud-Providers als feste Auswahl.",
        "Die README nennt private und lokale Anschlüsse neben gehosteten.",
      ],
    ],
    [
      "LMS19",
      "Ein interner Pilot braucht abrufbares Organisationswissen. Welche Bionic-Funktion ist dafür beschrieben?",
      bionic,
      [
        "RAG und datensatzgestütztes Wissen.",
        "Bionic nennt RAG und angebundene Datensätze als Wissensbasis.",
      ],
      [
        "Die Modellanschlussliste ohne eigene Datensätze.",
        "Modellanschlüsse stellen Inferenz bereit, aber keine eingebundene Wissensbasis.",
      ],
      [
        "Die Sandbox-Ausführung ohne Dokumentanbindung.",
        "Eine Sandbox führt Code aus; RAG erschließt die internen Wissensdaten.",
      ],
    ],
    [
      "LMS20",
      "Wie beschreibt Bionic die Ausführung von Modellaktionen mit Dateien und Befehlen?",
      bionic,
      [
        "Über eine eingebaute Werkzeuglaufzeit mit sandboxierter Ausführung.",
        "Die Plattform nennt Tool Runtime und sandboxierte Code- und Kommandoausführung.",
      ],
      [
        "Durch unmittelbare Freigabe aller Hostrechte an jedes Modell.",
        "Die README beschreibt eine kontrollierte Laufzeit, keine solche Pauschalfreigabe.",
      ],
      [
        "Durch reine Textausgabe ohne Werkzeuge.",
        "Bionic nennt Datei-, Kommando- und Integrationszugriff.",
      ],
    ],
    [
      "LMS21",
      "Welche Bionic-Eigenschaften sind für einen Pilot mit mehreren internen Teams relevant?",
      bionic,
      [
        "Identität, Teamrechte und Audit-Funktionen.",
        "Diese Kontrollen stehen ausdrücklich in der Bionic-Funktionsliste.",
      ],
      [
        "Modell- und Providerwahl ohne Teamzuordnung.",
        "Modellanschlüsse legen allein keine Teamrechte fest.",
      ],
      [
        "Die Sandbox als alleinige Identitätsprüfung.",
        "Sandbox-Ausführung begrenzt Prozesse, identifiziert aber nicht die Teammitglieder.",
      ],
    ],
    [
      "LMS22",
      "Welche Bionic-Installation empfiehlt die Projektseite für einen kleinen lokalen Pilot?",
      bionic,
      [
        "Docker Compose.",
        "Bionic nennt Compose für lokale Evaluierung und kleine Piloten.",
      ],
      [
        "Eine produktionsartige Kubernetes-Umgebung als ersten Pflichtschritt.",
        "Kubernetes wird für produktionsnahe lokale Tests genannt.",
      ],
      [
        "Eine produktionsartige Clusterinstallation vor jeder Erprobung.",
        "Die README nennt Compose ausdrücklich als einfacheren lokalen Piloteinstieg.",
      ],
    ],
    [
      "LMS23",
      "Ein Bionic-Pilot soll hochgeladene Dateien, Datensätze und erzeugte Ergebnisse im Arbeitskontext bereitstellen. Welche Plattformfunktion nennt das Projekt dafür?",
      bionic,
      [
        "Ein virtuelles Dateisystem für Uploads, Datensätze und generierte Ausgaben.",
        "Bionic nennt ein virtuelles Dateisystem für diese Inhalte als Teil seiner Plattform.",
      ],
      [
        "Eine Modell-Checkpoint-Datei ohne Dateizugriff.",
        "Ein Modell-Checkpoint allein stellt die genannten Arbeitsdateien nicht bereit.",
      ],
      [
        "Den RAG-Zugriff auf Datensätze als gemeinsame Ablage für alle Dateien und Ausgaben.",
        "RAG unterstützt wissensgestützte Abfragen; für Uploads und Ausgaben nennt Bionic das virtuelle Dateisystem.",
      ],
    ],
    [
      "LMS24",
      "Ein Team möchte Bionic selbst hosten, aber ein externes Modell anbinden. Was folgt aus der Projektbeschreibung?",
      bionic,
      [
        "Der Modell-Datenfluss muss trotz selbst gehosteter Plattform geprüft werden.",
        "Bionic unterstützt auch gehostete Modelle; der Plattform-Host allein begrenzt den Providerzugriff nicht.",
      ],
      [
        "Selbsthosting schließt externe Modellverbindungen technisch aus.",
        "Die README nennt gehostete Modelle ausdrücklich.",
      ],
      [
        "Ein lokaler Browser beweist, dass Prompts das Gerät nicht verlassen.",
        "Die Oberfläche zeigt den Ort der Modellverarbeitung nicht an.",
      ],
    ],
    [
      "LMS25",
      "Was kann ein Bionic-Pilot anhand der Projektseite selbst kontrollieren, statt es aus dem Wort „souverän“ abzuleiten?",
      bionic,
      [
        "Modellanschlüsse, Infrastruktur, Integrationen und Governance-Regeln.",
        "Die README nennt diese vom Team steuerbaren Bausteine ausdrücklich.",
      ],
      [
        "Die garantierte Fehlerfreiheit jeder Modellantwort.",
        "Die Projektseite bietet keine solche Qualitätsgarantie.",
      ],
      [
        "Die automatische rechtliche Freigabe sämtlicher Kundendaten.",
        "Eine technische Plattform ersetzt keine rechtliche Freigabe.",
      ],
    ],
  ]),
};
