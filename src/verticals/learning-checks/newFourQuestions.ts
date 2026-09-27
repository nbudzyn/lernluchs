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

const openAiAgents =
  "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/";
const anthropicAgents =
  "https://www.anthropic.com/engineering/multi-agent-research-system";
const gitWorktree = "https://git-scm.com/docs/git-worktree";
const vscodeNavigation =
  "https://code.visualstudio.com/docs/editing/editingevolved";
const intellijUsages =
  "https://www.jetbrains.com/help/idea/find-highlight-usages.html";
const context7 = "https://github.com/upstash/context7";
const context7Api =
  "https://github.com/upstash/context7/blob/master/docs/api-guide.mdx";
const springBoot35 =
  "https://docs.spring.io/spring-boot/3.5/reference/index.html";

export const newFourQuestions: Record<string, Question[]> = {
  "parallel-agent-task-boundaries": pool([
    [
      "PA01",
      "Eine Recherche zu zwei unabhängigen Java- und Web-Aspekten soll parallel laufen. Welche Aufteilung vermeidet doppelte Arbeit?",
      anthropicAgents,
      [
        "Jedem Agenten einen eigenen Aspekt mit erwartetem Ergebnis geben.",
        "Getrennte Ziele und Ergebnisformate begrenzen Überschneidungen.",
      ],
      [
        "Beiden Agenten denselben offenen Gesamtauftrag geben.",
        "Vage gleiche Aufträge führten laut Quelle zu doppelten Suchen und Lücken.",
      ],
      [
        "Beide Agenten nur nach ihrer bevorzugten Programmiersprache wählen lassen.",
        "Die Sprachpräferenz grenzt Untersuchungsgegenstand und Ergebnis nicht ab.",
      ],
    ],
    [
      "PA02",
      "Ein Teilauftrag lautet nur „Untersuche den Fehler“. Welche Ergänzung macht die Übergabe an einen parallelen Agenten prüfbar?",
      anthropicAgents,
      [
        "Ziel, Ausgabeformat, Quellen und Grenze des Teilauftrags festlegen.",
        "Die Quelle nennt diese Angaben für klare Delegation.",
      ],
      [
        "Nur die Höchstzahl der Agenten angeben.",
        "Die Anzahl definiert weder Aufgabe noch brauchbares Ergebnis.",
      ],
      [
        "Nur den bisherigen Chatverlauf weiterreichen.",
        "Verlauf ersetzt keine konkrete Aufgabe mit Ausgabegrenze.",
      ],
    ],
    [
      "PA03",
      "Zwei Agenten sollen gleichzeitig dieselbe öffentliche Schnittstelle ändern. Was spricht gegen diese Aufteilung?",
      anthropicAgents,
      [
        "Die gemeinsame Entscheidung erzeugt Abhängigkeit und Koordinationsbedarf.",
        "Stark voneinander abhängige Arbeit eignet sich schlechter für Parallelisierung.",
      ],
      [
        "Mehr Agenten beseitigen den Bedarf nach einer gemeinsamen Entscheidung.",
        "Die Quelle beschreibt Koordinationsprobleme gerade bei vielen Abhängigkeiten.",
      ],
      [
        "Geteilte Schnittstellen beschleunigen jede Teilaufgabe automatisch.",
        "Eine gemeinsam zu ändernde Schnittstelle ist keine unabhängige Teilaufgabe.",
      ],
    ],
    [
      "PA04",
      "Eine kleine, klar umrissene Aufgabe ließe sich mit einem Agenten lösen. Welches Vorgehen passt zur Ressourcengrenze?",
      openAiAgents,
      [
        "Zunächst einen Agenten mit passenden Werkzeugen einsetzen.",
        "Der Leitfaden empfiehlt, einzelne Agenten vor zusätzlicher Orchestrierung auszureizen.",
      ],
      [
        "Mehrere Manager-Ebenen für die kleine Aufgabe anlegen.",
        "Zusätzliche Ebenen erhöhen Koordination ohne erkennbaren Bedarf.",
      ],
      [
        "Den Auftrag in identische Teilaufträge zerlegen.",
        "Identische Aufgaben liefern keine unabhängige Arbeitsteilung.",
      ],
    ],
    [
      "PA05",
      "Ein Agentenprompt enthält viele verzweigte Bedingungen, die sich kaum pflegen lassen. Was kann die Aufgabengrenze verbessern?",
      openAiAgents,
      [
        "Logisch getrennte Aufgaben auf passende Agenten aufteilen.",
        "Der Leitfaden nennt komplexe Bedingungslogik als Anlass für eine Aufteilung.",
      ],
      [
        "Alle Bedingungen in jeden Teilauftrag kopieren.",
        "Damit bleibt die Verzweigung in jedem Agenten bestehen.",
      ],
      [
        "Die Bedingungen durch eine höhere Agentenzahl ersetzen.",
        "Die Anzahl allein definiert keine logischen Zuständigkeiten.",
      ],
    ],
    [
      "PA06",
      "Mehrere ähnlich benannte Werkzeuge führen wiederholt zu Fehlwahlen. Wann kann eine Agentenaufteilung helfen?",
      openAiAgents,
      [
        "Wenn getrennte Rollen jeweils klar beschriebene Werkzeuge erhalten.",
        "Werkzeugüberlappung kann durch getrennte Zuständigkeiten reduziert werden.",
      ],
      [
        "Wenn alle Agenten dieselbe unklare Werkzeugliste bekommen.",
        "Das reproduziert die Auswahlunsicherheit bei jedem Agenten.",
      ],
      [
        "Wenn die Werkzeugbeschreibungen entfernt werden.",
        "Ohne Beschreibung wird die passende Auswahl schwieriger.",
      ],
    ],
    [
      "PA07",
      "Ein Team möchte eine Instanz behalten, die Ergebnisse mehrerer Spezialisten zusammenführt. Welches Muster beschreibt das?",
      openAiAgents,
      [
        "Manager-Muster mit einer koordinierenden Instanz.",
        "Ein Manager ruft spezialisierte Agenten als Werkzeuge auf und bündelt Ergebnisse.",
      ],
      [
        "Dezentrale Übergabe ohne koordinierende Instanz.",
        "Bei diesem Muster geht die Ausführung zwischen gleichrangigen Agenten weiter.",
      ],
      [
        "Mehrere unabhängige Hauptaufträge ohne Synthese.",
        "Ohne Koordination wird das gemeinsame Ergebnis nicht zusammengeführt.",
      ],
    ],
    [
      "PA08",
      "Wer entscheidet im beschriebenen Manager-Muster, welcher Spezialist einen Teilauftrag erhält?",
      openAiAgents,
      [
        "Der koordinierende Manager-Agent.",
        "Der Manager steuert den Ablauf und delegiert an passende Spezialisten.",
      ],
      [
        "Jeder Spezialist bestimmt die Aufgaben aller anderen.",
        "Das widerspricht der zentralen Koordination des Musters.",
      ],
      [
        "Die Reihenfolge der Werkzeugnamen allein.",
        "Namen ordnen den Ablauf nicht fachlich zu.",
      ],
    ],
    [
      "PA09",
      "Eine Untersuchung hat mehrere unabhängige Richtungen. Welcher Vorteil paralleler Agenten wird für solche Aufgaben beschrieben?",
      anthropicAgents,
      [
        "Sie erkunden getrennte Richtungen mit eigenen Kontextfenstern gleichzeitig.",
        "Getrennte Kontexte erlauben parallele Exploration und verdichtete Rückgaben.",
      ],
      [
        "Sie teilen automatisch ein unbegrenztes gemeinsames Kontextfenster.",
        "Die Quelle beschreibt eigene Kontextfenster je Subagent.",
      ],
      [
        "Sie beseitigen die fachliche Prüfung der gesammelten Befunde.",
        "Der koordinierende Agent muss Befunde weiterhin zusammenführen und prüfen.",
      ],
    ],
    [
      "PA10",
      "Wann ist Parallelisierung nach den Erfahrungen des Recherchesystems besonders passend?",
      anthropicAgents,
      [
        "Bei mehreren unabhängigen Suchrichtungen mit großem Informationsumfang.",
        "Die interne Auswertung sah Vorteile bei breiten, trennbaren Rechercheaufgaben.",
      ],
      [
        "Bei einer Folge von Schritten, die jeweils das vorige Ergebnis braucht.",
        "Viele Abhängigkeiten erschweren unabhängige Parallelaufträge.",
      ],
      [
        "Bei einer einzelnen kurzen Faktenfrage mit geringem Aufwand.",
        "Für einfache Fragen beschränkt die Quelle den Agentenaufwand.",
      ],
    ],
    [
      "PA11",
      "Ein Team überträgt Erfolgszahlen eines parallelen Recherchesystems auf Coding-Aufgaben. Welche Bewertung ist fachlich haltbar?",
      anthropicAgents,
      [
        "Die Übertragbarkeit muss für Coding-Aufgaben gesondert geprüft werden.",
        "Die Quelle hält Coding-Aufgaben für weniger gut parallelisierbar als Recherche.",
      ],
      [
        "Die Recherchezahl gilt als gemessener Coding-Vorteil.",
        "Die interne Messung betraf Recherche, nicht Coding.",
      ],
      [
        "Die Zahl legt die optimale Zahl von Coding-Agenten fest.",
        "Sie beschreibt keinen allgemeinen Agentenplan für Codeänderungen.",
      ],
    ],
    [
      "PA12",
      "Ein paralleler Ablauf liefert gute Ergebnisse, verbraucht aber viel mehr Tokens. Welche Abwägung gehört vor die Delegation?",
      anthropicAgents,
      [
        "Ob der Wert der Aufgabe den zusätzlichen Aufwand rechtfertigt.",
        "Die Quelle nennt Tokenkosten als Grenze wirtschaftlicher Mehragentenarbeit.",
      ],
      [
        "Ob die Agenten unterschiedliche Namen tragen.",
        "Namen sagen nichts über Aufwand und Wert aus.",
      ],
      [
        "Ob alle Agenten denselben Prompt sehen.",
        "Gleiche Prompts begründen die Mehrkosten nicht.",
      ],
    ],
    [
      "PA13",
      "Ein einfacher Auftrag startet immer wieder zu viele Subagenten. Welche Abbruch- und Skalierungsregel hilft?",
      anthropicAgents,
      [
        "Den Aufwand an der Komplexität der Aufgabe begrenzen.",
        "Die Quelle beschreibt explizite Skalierungsregeln gegen Überinvestition.",
      ],
      [
        "Für einfache Aufträge mehr Agenten als für komplexe einsetzen.",
        "Das verstärkt den beobachteten Fehlmodus.",
      ],
      [
        "Die Agentenzahl erst nach Abschluss aller Teilaufträge festlegen.",
        "Die Ressourcengrenze muss vor oder während der Delegation wirken.",
      ],
    ],
    [
      "PA14",
      "Subagenten suchen wiederholt nach einer nicht vorhandenen Quelle. Welche Grenze fehlte im beschriebenen Fehlmodus?",
      anthropicAgents,
      [
        "Ein Stopp bei fehlender Evidenz nach angemessenem Suchaufwand.",
        "Die Quelle beschreibt endloses Suchen nach nicht existierenden Quellen als Fehlmodus.",
      ],
      [
        "Ein zusätzliches identisches Suchteam.",
        "Mehr gleiche Suche behebt fehlende Stoppkriterien nicht.",
      ],
      [
        "Eine längere Zusammenfassung ohne Quellenlage.",
        "Mehr Text liefert keine Evidenz und beendet die Suche nicht.",
      ],
    ],
    [
      "PA15",
      "Wann sollte ein koordinierender Agent nach Rückgaben weiterer Teilaufträge entscheiden?",
      anthropicAgents,
      [
        "Nach Prüfung, ob die Befunde schon genügen oder Lücken bleiben.",
        "Der Lead-Agent synthetisiert Ergebnisse und entscheidet dann über weitere Recherche.",
      ],
      [
        "Sobald ein Teilagent die erste Quelle gefunden hat.",
        "Ein einzelner Fund belegt nicht, dass alle Aspekte abgedeckt sind.",
      ],
      [
        "Vor Sichtung der zurückgegebenen Befunde.",
        "Ohne Befundprüfung lässt sich weiterer Bedarf nicht beurteilen.",
      ],
    ],
    [
      "PA16",
      "Ein Teilagent meldet nur „fertig“. Welche Rückgabe macht sein Ergebnis für die Koordination nutzbar?",
      anthropicAgents,
      [
        "Verdichtete Befunde zu seinem abgegrenzten Aspekt mit Fundstellen.",
        "Subagenten sollen relevante Ergebnisse an die koordinierende Instanz zurückgeben.",
      ],
      [
        "Die komplette rohe Werkzeugausgabe ohne Auswahl.",
        "Das nimmt dem Teilagenten seine Filter- und Verdichtungsaufgabe.",
      ],
      [
        "Eine weitere offene Aufgabenbeschreibung.",
        "Eine Aufgabenbeschreibung ersetzt die verlangten Befunde nicht.",
      ],
    ],
    [
      "PA17",
      "Warum muss bei paralleler Recherche der Werkzeugzugriff im Teilauftrag beschrieben sein?",
      anthropicAgents,
      [
        "Ein passender Zugang verhindert erfolglose Suche im falschen System.",
        "Die Quelle nennt falsche Werkzeugwahl als konkreten Fehlmodus.",
      ],
      [
        "Jedes Werkzeug liefert dieselben Informationen.",
        "Quellen und Werkzeuge haben unterschiedliche Datenbestände.",
      ],
      [
        "Werkzeuge ordnen sich von selbst nach dem Thema.",
        "Die Auswahl benötigt klare Zweckbeschreibungen.",
      ],
    ],
    [
      "PA18",
      "Ein Agent untersucht einen Aspekt bereits tief, während ein zweiter denselben Bereich anfängt. Welche Korrektur passt zur Delegation?",
      anthropicAgents,
      [
        "Den zweiten Auftrag auf einen noch offenen Aspekt begrenzen.",
        "Klare Teilgrenzen vermeiden doppelte Arbeit und Abdeckungslücken.",
      ],
      [
        "Den zweiten Agenten mit demselben offenen Auftrag weiterarbeiten lassen.",
        "Gerade gleiche unklare Aufträge führten zu Doppelarbeit.",
      ],
      [
        "Die Ergebnisse beider Agenten ohne Prüfung zusammenkopieren.",
        "Zusammenkopieren löst die Zuständigkeitsüberschneidung nicht.",
      ],
    ],
    [
      "PA19",
      "Ein Teilagent sendet ständig Zwischenmeldungen und lenkt die übrigen ab. Welche Kommunikationsgrenze ist sinnvoll?",
      anthropicAgents,
      [
        "Ergebnisformat und sinnvolle Rückgabezeitpunkte festlegen.",
        "Übermäßige Updates werden als Koordinationsfehlmodus beschrieben.",
      ],
      [
        "Jeden Zwischengedanken an alle Agenten senden.",
        "Das vergrößert den beschriebenen Ablenkungs- und Koordinationsaufwand.",
      ],
      [
        "Erst nach einer unbegrenzten Recherche eine Nachricht erlauben.",
        "Ohne Stoppgrenze kann ein Agent unnötig lange weiterarbeiten.",
      ],
    ],
    [
      "PA20",
      "Zwei Untersuchungen benötigen alle denselben laufend geänderten Projektzustand. Was bedeutet das für die Aufteilung?",
      anthropicAgents,
      [
        "Die starke Kontextabhängigkeit spricht gegen getrennte parallele Teilaufträge.",
        "Die Quelle nennt gemeinsamen Kontext als Grenze für Mehragentensysteme.",
      ],
      [
        "Getrennte Kontextfenster synchronisieren den Zustand automatisch.",
        "Eigene Fenster schaffen gerade keinen gemeinsamen aktuellen Zustand.",
      ],
      [
        "Mehr Teilagenten verringern die Abhängigkeit der Befunde.",
        "Die fachliche Abhängigkeit bleibt bestehen.",
      ],
    ],
    [
      "PA21",
      "Ein koordinierender Agent bekommt widersprüchliche Befunde zu einer Java-API. Was gehört zur Synthese?",
      anthropicAgents,
      [
        "Die Befunde an den Quellen prüfen und den Konflikt auflösen.",
        "Der Lead-Agent bewertet Rückgaben und entscheidet über weitere Untersuchung.",
      ],
      [
        "Den zuerst eintreffenden Befund als Entscheidung übernehmen.",
        "Die Ankunftszeit sagt nichts über fachliche Richtigkeit.",
      ],
      [
        "Beide Aussagen ungeklärt in die Schlussfolgerung schreiben.",
        "Widersprüchliche Befunde brauchen eine geprüfte Einordnung.",
      ],
    ],
    [
      "PA22",
      "Ein Team möchte parallele Agenten trotz unklaren Nutzens dauerhaft einsetzen. Welche erste Prüfung passt zur Aufgabengrenze?",
      openAiAgents,
      [
        "Prüfen, ob ein einzelner Agent den Ablauf bereits zuverlässig schafft.",
        "Der Leitfaden rät, Mehragentenkomplexität erst bei erkennbarem Bedarf einzuführen.",
      ],
      [
        "Die Zahl der Agenten vor der Problemprüfung verdoppeln.",
        "Mehr Agenten erzeugen zusätzlichen Aufwand ohne Bedarfsnachweis.",
      ],
      [
        "Den Ausgang jedes Teilauftrags offenlassen.",
        "Ohne Ergebnisgrenze ist ein Vergleich nicht prüfbar.",
      ],
    ],
    [
      "PA23",
      "Ein Teilauftrag endet nach fünf geprüften Quellen mit ausreichender Evidenz. Was sollte die Stoppregel bewirken?",
      anthropicAgents,
      [
        "Die Suche beenden und den Befund zurückgeben.",
        "Weiterarbeit trotz ausreichender Ergebnisse war ein beobachteter Fehlmodus.",
      ],
      [
        "Weitere gleichartige Suchen ohne neue Fragestellung auslösen.",
        "Das erhöht Aufwand ohne identifizierte Lücke.",
      ],
      [
        "Die Quellen verwerfen und mit identischem Auftrag neu starten.",
        "Ein Neustart ist ohne fehlende Evidenz unbegründet.",
      ],
    ],
    [
      "PA24",
      "Zwei Agenten bearbeiten getrennte Aspekte einer Änderung. Was muss vor dem Zusammenführen feststehen?",
      anthropicAgents,
      [
        "Welche Ergebnisse jeder liefert und wer die Synthese verantwortet.",
        "Koordination braucht getrennte Teilziele und eine Instanz zur Zusammenführung.",
      ],
      [
        "Dass beide dieselbe Schlussfolgerung formulieren.",
        "Getrennte Aspekte liefern unterschiedliche Befunde.",
      ],
      [
        "Dass jede Antwort ungeprüft übernommen wird.",
        "Die koordinierende Instanz muss die Befunde bewerten.",
      ],
    ],
    [
      "PA25",
      "Eine Teilaufgabe verlangt Zugriff auf ein nicht vorhandenes internes Werkzeug. Was ist die passende Grenze?",
      anthropicAgents,
      [
        "Den fehlenden Zugriff melden und die Aufgabe gezielt neu zuschneiden.",
        "Die Quelle zeigt, dass Suche im falschen Werkzeug keine passende Evidenz liefert.",
      ],
      [
        "Mit Websuche einen internen Datenbestand ersetzen.",
        "Ein externes Werkzeug enthält die internen Daten nicht.",
      ],
      [
        "Die Untersuchung ohne zugängliche Belege als abgeschlossen melden.",
        "Ohne Belege ist das erwartete Ergebnis nicht erreicht.",
      ],
    ],
  ]),
  "git-worktrees-for-isolated-changes": pool([
    [
      "GW01",
      "Eine Spring-Migration soll neben einer React-Korrektur laufen, ohne den aktuellen Checkout umzuschalten. Was bietet Git dafür?",
      gitWorktree,
      [
        "Einen zusätzlichen verknüpften Worktree anlegen.",
        "Git erlaubt mehrere Arbeitsverzeichnisse desselben Repositorys.",
      ],
      [
        "Beide Änderungen im selben Arbeitsverzeichnis stapeln.",
        "Das trennt unvollständige Dateistände nicht.",
      ],
      [
        "Die Migration nur in einem zweiten Chat beschreiben.",
        "Ein zweiter Chat erzeugt keinen getrennten Checkout.",
      ],
    ],
    [
      "GW02",
      "Was teilen zwei verknüpfte Git-Worktrees desselben Repositorys?",
      gitWorktree,
      [
        "Den gemeinsamen Git-Objektbestand und die meisten Referenzen.",
        "Verknüpfte Worktrees gehören zum selben Repository.",
      ],
      [
        "Den jeweiligen Index für gestagte Dateien.",
        "Der Index ist pro Worktree getrennt.",
      ],
      [
        "Den jeweiligen HEAD als identischen Checkout-Zustand.",
        "Jeder Worktree besitzt einen eigenen HEAD.",
      ],
    ],
    [
      "GW03",
      "Ein Branch ist bereits in einem Worktree ausgecheckt. Was macht ein weiterer regulärer Checkout desselben Branches per `git worktree add`?",
      gitWorktree,
      [
        "Git verweigert ihn standardmäßig.",
        "Die Branch-Schutzregel verhindert denselben Branch in zwei Worktrees ohne Force.",
      ],
      [
        "Git erstellt automatisch eine zweite unabhängige Kopie des Branches.",
        "Branches sind im Repository gemeinsam; Git erstellt keine gleichnamige Kopie.",
      ],
      [
        "Git führt beide Arbeitsstände automatisch zusammen.",
        "Ein Worktree-Checkout ist kein Merge.",
      ],
    ],
    [
      "GW04",
      "Mit `git worktree add ../hotfix` wird kein Branch angegeben. Was geschieht im einfachen dokumentierten Fall?",
      gitWorktree,
      [
        "Ein neuer Branch namens `hotfix` wird angelegt und ausgecheckt.",
        "Ohne Commit-Angabe nutzt Git den letzten Pfadteil als Branchnamen.",
      ],
      [
        "Der aktuelle Branch wird in beiden Worktrees ausgecheckt.",
        "Git vermeidet den gleichen Branch in zwei Worktrees.",
      ],
      [
        "Ein verwaister Worktree ohne Branch wird angelegt.",
        "Das verlangt eine entsprechende Option wie `--orphan`.",
      ],
    ],
    [
      "GW05",
      "Ein Experiment soll in einem zusätzlichen Worktree ohne eigenen Branch starten. Welche Option passt?",
      gitWorktree,
      [
        "`git worktree add --detach <pfad>`",
        "`--detach` startet den neuen Worktree mit abgelöstem HEAD.",
      ],
      [
        "`git worktree add --lock <pfad>`",
        "`--lock` schützt Verwaltungsdaten, löst HEAD aber nicht ab.",
      ],
      [
        "`git worktree list --porcelain`",
        "Dieser Befehl listet Worktrees und legt keinen an.",
      ],
    ],
    [
      "GW06",
      "Ein Team braucht für eine isolierte Änderung einen ausdrücklich benannten neuen Branch. Welche Add-Option erstellt ihn?",
      gitWorktree,
      [
        "`-b <neuer-branch>`",
        "`-b` erstellt beim Hinzufügen den angegebenen neuen Branch.",
      ],
      ["`--porcelain`", "`--porcelain` betrifft die maschinenlesbare Liste."],
      [
        "`--prune`",
        "Prune verwaltet verwaiste Metadaten, keinen neuen Branch.",
      ],
    ],
    [
      "GW07",
      "Welche Information zeigt `git worktree list` für vorhandene Worktrees?",
      gitWorktree,
      [
        "Pfad, ausgecheckte Revision und Branch oder detached HEAD.",
        "Die Liste beschreibt die vorhandenen Arbeitsbäume und ihren Checkout.",
      ],
      [
        "Die offenen Ports aller gestarteten Entwicklungsserver.",
        "Git verwaltet keine Laufzeitports.",
      ],
      [
        "Die Anzahl bestandener Tests pro Worktree.",
        "Testergebnisse sind keine Worktree-Metadaten.",
      ],
    ],
    [
      "GW08",
      "Ein Skript muss Worktree-Pfade robust auslesen. Welches Ausgabeformat empfiehlt die Git-Dokumentation?",
      gitWorktree,
      [
        "`git worktree list --porcelain -z`",
        "Porcelain ist stabil für Skripte; `-z` trennt Datensätze auch bei Sonderzeichen sicher.",
      ],
      [
        "Die gewöhnliche Liste anhand von Leerzeichen zerlegen.",
        "Pfadzeichen und Anzeigeformat machen die menschenlesbare Liste ungeeignet.",
      ],
      [
        "`git worktree list --verbose` als freie Prosa parsen.",
        "Verbose ergänzt Details, bietet aber nicht das empfohlene Skriptformat.",
      ],
    ],
    [
      "GW09",
      "Ein verknüpfter Worktree wird auf einem zeitweise nicht gemounteten Laufwerk aufbewahrt. Welche Git-Funktion schützt seine Verwaltungsdaten vor Prune?",
      gitWorktree,
      [
        "Den Worktree sperren (`git worktree lock`).",
        "Lock verhindert die automatische Bereinigung zeitweise fehlender Worktrees.",
      ],
      [
        "Den Worktree mit `prune` vormerken.",
        "Prune entfernt gerade verwaiste Verwaltungsdaten.",
      ],
      [
        "Den Worktree nur aus der Liste ausblenden.",
        "Ein Ausblenden schützt Verwaltungsdaten nicht.",
      ],
    ],
    [
      "GW10",
      "Was bewirkt `git worktree remove <pfad>` im vorgesehenen Normalfall?",
      gitWorktree,
      [
        "Es entfernt einen sauberen verknüpften Worktree.",
        "Die normale Remove-Variante akzeptiert nur unveränderte verknüpfte Worktrees.",
      ],
      [
        "Es entfernt den Haupt-Worktree des Repositorys.",
        "Der Haupt-Worktree kann damit nicht entfernt werden.",
      ],
      [
        "Es merged Änderungen des Worktrees in den Hauptbranch.",
        "Remove ist kein Merge-Vorgang.",
      ],
    ],
    [
      "GW11",
      "Ein verknüpfter Worktree enthält noch unversionierte Dateien. Was tut `git worktree remove` ohne Force?",
      gitWorktree,
      [
        "Es verweigert die Entfernung des unsauberen Worktrees.",
        "Unversionierte Dateien machen den Worktree für die normale Entfernung unsauber.",
      ],
      [
        "Es commitet diese Dateien vor dem Entfernen.",
        "Remove erzeugt keine Commits.",
      ],
      [
        "Es übernimmt sie in den Haupt-Worktree.",
        "Es verschiebt persönliche Arbeitsdateien nicht in andere Worktrees.",
      ],
    ],
    [
      "GW12",
      "Ein verknüpfter Worktree wurde im Dateimanager gelöscht. Welcher Befehl bereinigt die verwaisten Git-Metadaten?",
      gitWorktree,
      [
        "`git worktree prune`",
        "Prune entfernt Verwaltungsdaten fehlender Worktrees.",
      ],
      [
        "`git worktree list --verbose`",
        "Die Liste zeigt Zustände, bereinigt sie aber nicht.",
      ],
      [
        "`git worktree repair`",
        "Repair stellt Verknüpfungen zu verschobenen Worktrees wieder her.",
      ],
    ],
    [
      "GW13",
      "Ein verknüpfter Worktree wurde außerhalb von Git an einen neuen Pfad verschoben. Welche Funktion stellt die Verbindung wieder her?",
      gitWorktree,
      [
        "`git worktree repair` mit dem neuen Pfad.",
        "Repair repariert Verknüpfungsdateien nach externem Verschieben.",
      ],
      [
        "`git worktree prune` ohne Prüfung.",
        "Prune kann verwaiste Daten entfernen statt die Verbindung wiederherzustellen.",
      ],
      [
        "`git worktree remove` am alten Pfad.",
        "Remove entfernt den Worktree-Eintrag, statt den neuen Pfad zu verbinden.",
      ],
    ],
    [
      "GW14",
      "Ein verknüpfter Worktree soll mit Git an einen anderen Ort umziehen. Welcher Befehl ist dafür vorgesehen?",
      gitWorktree,
      [
        "`git worktree move <alt> <neu>`",
        "Move verlegt den Worktree und aktualisiert die Verknüpfung.",
      ],
      [
        "`git worktree prune <alt>`",
        "Prune bereinigt fehlende Einträge und verlegt keine Dateien.",
      ],
      [
        "`git worktree lock <alt>`",
        "Lock schützt den vorhandenen Ort, statt ihn zu verschieben.",
      ],
    ],
    [
      "GW15",
      "Welcher Worktree kann laut Git-Handbuch nicht mit `git worktree move` verschoben werden?",
      gitWorktree,
      [
        "Der Haupt-Worktree.",
        "Das Handbuch schließt den Haupt-Worktree für `move` aus.",
      ],
      [
        "Ein sauberer verknüpfter Worktree ohne Submodule.",
        "Dieser ist der normale Anwendungsfall für `move`.",
      ],
      [
        "Ein verknüpfter Worktree auf einem anderen Branch.",
        "Ein anderer Branch verhindert `move` nicht grundsätzlich.",
      ],
    ],
    [
      "GW16",
      "Welche Datei besitzt ein verknüpfter Worktree an seiner Wurzel typischerweise anstelle eines eigenen vollständigen `.git`-Verzeichnisses?",
      gitWorktree,
      [
        "Eine `.git`-Datei mit Verweis auf seine Verwaltungsdaten.",
        "Die Datei verweist auf den privaten Eintrag im gemeinsamen Repository.",
      ],
      [
        "Eine Kopie der gesamten Git-Objektdatenbank.",
        "Objekte gehören zum gemeinsamen Repository.",
      ],
      [
        "Ein eigenes `.git`-Verzeichnis mit vollständiger Objektdatenbank.",
        "Der verknüpfte Worktree verweist auf gemeinsame Repository-Daten.",
      ],
    ],
    [
      "GW17",
      "Welche Git-Daten sind für verknüpfte Worktrees jeweils getrennt?",
      gitWorktree,
      [
        "HEAD und Index.",
        "Diese Checkout-bezogenen Daten sind pro Worktree vorhanden.",
      ],
      [
        "Alle Git-Objekte und gewöhnlichen Branch-Refs.",
        "Objekte und die meisten Refs werden gemeinsam genutzt.",
      ],
      [
        "Die gesamte Historie als eigene Kopie.",
        "Verknüpfte Worktrees teilen die Repository-Historie.",
      ],
    ],
    [
      "GW18",
      "Eine Konfiguration soll speziell für einen Worktree gelten. Welche Git-Erweiterung ermöglicht getrennte Konfigurationsdateien?",
      gitWorktree,
      [
        "`extensions.worktreeConfig`",
        "Mit dieser Erweiterung wird `config.worktree` pro Worktree gelesen.",
      ],
      [
        "`worktree.guessRemote`",
        "Diese Einstellung beeinflusst die Branch-Wahl beim Hinzufügen.",
      ],
      [
        "`core.quotePath`",
        "Diese Einstellung betrifft die Darstellung ungewöhnlicher Pfadzeichen.",
      ],
    ],
    [
      "GW19",
      "Ein Skript sucht den Git-Pfad zu `HEAD` in einem verknüpften Worktree. Welche Vorgehensweise ist robust?",
      gitWorktree,
      [
        "`git rev-parse --git-path HEAD` verwenden.",
        "Git löst damit private und gemeinsame Git-Pfade korrekt auf.",
      ],
      [
        "Den Pfad `.git/HEAD` als Verzeichnis im Worktree annehmen.",
        "`.git` ist dort typischerweise eine Verweisdatei.",
      ],
      [
        "Den HEAD des Haupt-Worktrees direkt lesen.",
        "Jeder Worktree besitzt seinen eigenen HEAD.",
      ],
    ],
    [
      "GW20",
      "Was gilt für gewöhnliche Branch-Referenzen mehrerer Worktrees eines Repositorys?",
      gitWorktree,
      [
        "Sie werden im gemeinsamen Repository verwaltet.",
        "Gewöhnliche `refs/` sind zwischen Worktrees geteilt.",
      ],
      [
        "Jeder Worktree hält eine unabhängige Kopie gleicher Branchnamen.",
        "Verknüpfte Worktrees teilen die meisten Referenzen.",
      ],
      [
        "Branch-Referenzen existieren nur im Haupt-Worktree.",
        "Verknüpfte Worktrees können eigene Branches auschecken.",
      ],
    ],
    [
      "GW21",
      "Woran erkennt man in `git worktree list` einen Worktree ohne ausgecheckten Branch?",
      gitWorktree,
      [
        "An der Angabe `detached HEAD`.",
        "Die Liste kennzeichnet einen abgelösten HEAD ausdrücklich.",
      ],
      [
        "An der Angabe `locked`.",
        "Locked bezeichnet die Sperre der Verwaltungsdaten.",
      ],
      [
        "An der Angabe `prunable`.",
        "Prunable bezeichnet einen bereinigbaren fehlenden Worktree.",
      ],
    ],
    [
      "GW22",
      "Ein zusätzlicher Worktree soll vor dem Checkout für Sparse Checkout vorbereitet werden. Welche Add-Option ist dafür vorgesehen?",
      gitWorktree,
      [
        "`--no-checkout` unterdrückt zunächst das Auschecken.",
        "So kann der neue Worktree vor dem Checkout angepasst werden.",
      ],
      [
        "`--detach` unterdrückt den Checkout und richtet Sparse Checkout ein.",
        "Detach löst HEAD ab; der Checkout findet weiterhin statt.",
      ],
      [
        "`--lock` unterdrückt den Checkout und wählt Dateien aus.",
        "Lock schützt die Verwaltung des Worktrees, nicht die Checkout-Auswahl.",
      ],
    ],
    [
      "GW23",
      "Beim Anlegen eines Worktrees soll ein passender Remote-Tracking-Branch anhand des Pfadnamens gewählt werden. Welche Option ist dafür dokumentiert?",
      gitWorktree,
      [
        "`--guess-remote`",
        "Git kann bei genau einem passenden Remote-Branch diesen als Ausgangspunkt verwenden.",
      ],
      [
        "`--orphan`",
        "Orphan erstellt einen neuen Branch ohne bisherigen Commit-Verlauf.",
      ],
      ["`--porcelain`", "Porcelain formatiert die Worktree-Liste für Skripte."],
    ],
    [
      "GW24",
      "Ein Worktree fehlt vorübergehend. Was zeigt die Liste gegebenenfalls, wenn seine Metadaten bereinigt werden können?",
      gitWorktree,
      [
        "Die Kennzeichnung `prunable`.",
        "Git markiert fehlende, bereinigbare Worktrees so in der Liste.",
      ],
      [
        "Die Kennzeichnung `detached HEAD`.",
        "Detached beschreibt den Checkout ohne Branch, nicht fehlende Dateien.",
      ],
      [
        "Die Kennzeichnung `bare` für jeden fehlenden Worktree.",
        "Bare bezeichnet ein Repository ohne Arbeitsverzeichnis.",
      ],
    ],
    [
      "GW25",
      "Ein Worktree ist gesperrt, weil sein Datenträger zeitweise fehlt. Wie wird er wieder für normale Worktree-Verwaltung freigegeben?",
      gitWorktree,
      [
        "Mit `git worktree unlock <pfad>`.",
        "Unlock hebt den Schutz vor Prune, Move und Remove auf.",
      ],
      [
        "Mit `git worktree list <pfad>`.",
        "List zeigt Worktrees, entfernt aber keine Sperre.",
      ],
      [
        "Mit `git worktree add --detach <pfad>`.",
        "Add legt einen weiteren Worktree an und entsperrt keinen vorhandenen.",
      ],
    ],
  ]),
  "code-navigation-with-symbols-and-references": pool([
    [
      "CN01",
      "Vor dem Ändern einer Java-Methode sollen ihre tatsächlichen Verwendungen gefunden werden. Welche IDE-Funktion passt?",
      intellijUsages,
      [
        "Find Usages für das aufgelöste Methodensymbol.",
        "Die IDE sucht Referenzen des gewählten Codeelements im Projekt.",
      ],
      [
        "Eine Textsuche nach jedem Vorkommen des Methodennamens.",
        "Gleiche Zeichenfolgen können andere Symbole oder Kommentare treffen.",
      ],
      [
        "Nur die Datei mit der Methodendeklaration öffnen.",
        "Die Deklaration zeigt nicht alle Verwendungen.",
      ],
    ],
    [
      "CN02",
      "Ein TypeScript-Ausdruck verwendet ein Symbol. Welche Navigation führt zur Deklaration dieses Symbols?",
      vscodeNavigation,
      [
        "Go to Definition.",
        "Die Funktion öffnet die Definition des ausgewählten Symbols.",
      ],
      [
        "Go to Implementation.",
        "Diese Funktion sucht konkrete Implementierungen, nicht die Deklaration jedes Symbols.",
      ],
      [
        "Peek References.",
        "Diese Ansicht zeigt Verwendungen statt der Definition.",
      ],
    ],
    [
      "CN03",
      "Eine Java-Schnittstelle hat mehrere Implementierungen. Welche Symbolnavigation sucht die konkreten Implementierer?",
      vscodeNavigation,
      [
        "Go to Implementation.",
        "Die Dokumentation nennt Implementierer einer Schnittstelle als Anwendungsfall.",
      ],
      [
        "Go to Type Definition.",
        "Diese Funktion springt zur Typdefinition eines Symbols.",
      ],
      [
        "Go to Symbol in File.",
        "Diese Funktion listet Symbole der aktuellen Datei.",
      ],
    ],
    [
      "CN04",
      "Eine Variable hat einen deklarierten Typ. Welche VS-Code-Funktion kann zur Definition dieses Typs führen?",
      vscodeNavigation,
      [
        "Go to Type Definition.",
        "Sie navigiert zur Definition des Typs des gewählten Symbols.",
      ],
      [
        "Go to References.",
        "Referenzen sind Verwendungsstellen, keine Typdefinition.",
      ],
      [
        "Open symbol by name.",
        "Die Namenssuche kennt den Typ der gewählten Variable nicht automatisch.",
      ],
    ],
    [
      "CN05",
      "In einer großen Datei soll die Deklaration einer bestimmten Funktion gefunden werden. Welche Suche ist darauf zugeschnitten?",
      vscodeNavigation,
      [
        "Go to Symbol in File.",
        "Diese Funktion navigiert zu Symbolen innerhalb der aktuellen Datei.",
      ],
      [
        "Open symbol by name im gesamten Workspace.",
        "Die Workspace-Suche ist breiter als für diese Datei nötig.",
      ],
      [
        "Find Usages im Projekt.",
        "Verwendungen führen nicht gezielt zur gesuchten Deklaration in dieser Datei.",
      ],
    ],
    [
      "CN06",
      "Der Name einer Klasse ist bekannt, ihre Datei aber nicht. Welche VS-Code-Navigation sucht Symbole über Dateien hinweg?",
      vscodeNavigation,
      [
        "Open symbol by name im Workspace.",
        "Die Funktion kann Symbole anhand des Namens unabhängig von der Datei öffnen.",
      ],
      [
        "Go to Symbol in File.",
        "Diese Suche beschränkt sich auf die aktuelle Datei.",
      ],
      [
        "Bracket matching.",
        "Klammerabgleich lokalisiert keine Klasse über Dateien hinweg.",
      ],
    ],
    [
      "CN07",
      "Ein Entwickler möchte Referenzen sehen, ohne den aktuellen Editor dauerhaft zu verlassen. Welche Ansicht bietet VS Code?",
      vscodeNavigation,
      [
        "Peek References.",
        "Die Verwendungsstellen erscheinen in einem eingebetteten Editor.",
      ],
      [
        "Rename Symbol.",
        "Umbenennen ändert Code und ist keine reine Vorschau.",
      ],
      [
        "Go to Type Definition.",
        "Das zeigt einen Typ, nicht die Referenzliste.",
      ],
    ],
    [
      "CN08",
      "Eine Projektmethode hat gleichnamige Texttreffer in Kommentaren. Warum ist Symbolreferenzsuche für die Auswirkungsanalyse gezielter?",
      intellijUsages,
      [
        "Sie untersucht Verwendungen des gewählten Codeelements.",
        "Find Usages knüpft die Suche an das Codeelement statt an bloße Zeichenfolgen.",
      ],
      [
        "Sie ersetzt alle Kommentare mit gleichem Text.",
        "Referenzsuche bearbeitet keine Kommentare.",
      ],
      [
        "Sie führt automatisch Tests aller Aufrufer aus.",
        "Die Suche liefert Verwendungsstellen, keine Testergebnisse.",
      ],
    ],
    [
      "CN09",
      "In IntelliJ sollen Verwendungen zunächst nur in der geöffneten Datei hervorgehoben werden. Welche Funktion passt?",
      intellijUsages,
      [
        "Find Usages in File oder die lokale Hervorhebung.",
        "Die Dokumentation unterscheidet lokale Hervorhebung von der projektweiten Suche.",
      ],
      [
        "Find Usages mit gesamtem Projekt als Scope.",
        "Der Projekt-Scope ist breiter als die gewünschte Datei.",
      ],
      [
        "Go to Implementation.",
        "Implementierungen sind nicht alle lokalen Verwendungen.",
      ],
    ],
    [
      "CN10",
      "Für eine API-Änderung sollen Verwendungen im gesamten Projekt statt nur in einer Datei gefunden werden. Welche Einstellung ist entscheidend?",
      intellijUsages,
      [
        "Den Suchbereich der Find-Usages-Abfrage auf das Projekt setzen.",
        "Der Scope bestimmt, welche Dateien die Verwendungssuche umfasst.",
      ],
      [
        "Die Treffer nach Paketnamen gruppieren, ohne den Such-Scope zu erweitern.",
        "Eine Gruppierung ändert den Umfang der durchsuchten Dateien nicht.",
      ],
      [
        "Nur das Symbol im Editor markieren.",
        "Eine Markierung begrenzt oder erweitert den Suchbereich nicht.",
      ],
    ],
    [
      "CN11",
      "Ein Find-Usages-Ergebnis scheint zu wenige Treffer zu enthalten. Was sollte vor einer Schlussfolgerung geprüft werden?",
      intellijUsages,
      [
        "Scope und aktive Filter der Suchansicht.",
        "Suchbereich und Filter können sichtbare Verwendungen einschränken.",
      ],
      [
        "Nur die alphabetische Sortierung der Treffer.",
        "Sortierung erklärt keine ausgeschlossenen Treffer.",
      ],
      [
        "Nur die Farbe des Suchsymbols.",
        "Die Darstellung ändert die Treffermenge nicht.",
      ],
    ],
    [
      "CN12",
      "Ein Java-Projekt hat viele Verwendungsstellen. Wie kann IntelliJ die Treffer zur Auswertung ordnen?",
      intellijUsages,
      [
        "Nach Dateien, Paketen oder Verzeichnissen gruppieren.",
        "Die Find-Ansicht bietet solche Gruppierungen.",
      ],
      [
        "Die Verwendungen in neue Pakete verschieben.",
        "Gruppieren in der Ansicht verändert den Code nicht.",
      ],
      [
        "Nur den ersten Treffer behalten.",
        "Das würde mögliche Auswirkungen ausblenden.",
      ],
    ],
    [
      "CN13",
      "Bei einer Nutzungsstelle soll der umgebende Code geprüft werden, ohne die Trefferliste zu verlieren. Welche IntelliJ-Funktion hilft?",
      intellijUsages,
      [
        "Preview Source in der Find-Ansicht.",
        "Die Vorschau zeigt den Quellkontext eines Treffers neben der Liste.",
      ],
      [
        "Den Treffertext als endgültigen Befund behandeln.",
        "Der Treffer allein zeigt den fachlichen Kontext nicht vollständig.",
      ],
      [
        "Alle Treffer in einer Datei zusammenkopieren.",
        "Das zerstört den tatsächlichen Codekontext der Verwendungen.",
      ],
    ],
    [
      "CN14",
      "Welche zusätzliche Beziehung kann die IntelliJ-Vorschau bei Methodenverwendungen zeigen?",
      intellijUsages,
      [
        "Die Aufrufhierarchie einer Methode.",
        "Die Dokumentation nennt Call Hierarchy in der Ergebnisvorschau.",
      ],
      [
        "Die Laufzeit jedes Methodenaufrufs.",
        "Find Usages misst keine Laufzeiten.",
      ],
      [
        "Die fachliche Korrektheit jedes Aufrufers.",
        "Eine Navigationsansicht bewertet Verhalten nicht automatisch.",
      ],
    ],
    [
      "CN15",
      "Ein Entwickler will projektweite Verwendungen eines Java-Symbols prüfen. Welche IntelliJ-Aktion beschreibt die Dokumentation?",
      intellijUsages,
      [
        "Find Usages am ausgewählten Symbol.",
        "Die Aktion sucht Referenzen des gewählten Elements im Codebestand.",
      ],
      [
        "Rename Symbol als erste Suchaktion.",
        "Umbenennen ändert potenziell Code und ist keine reine Suche.",
      ],
      [
        "Find in File für den Symbolnamen.",
        "Eine lokale Textsuche deckt projektweite Symbolverwendungen nicht ab.",
      ],
    ],
    [
      "CN16",
      "Eine wiederholte Verwendungsanalyse soll mit demselben Suchstand geöffnet werden. Was bietet IntelliJ dafür?",
      intellijUsages,
      [
        "Recent Find Usages.",
        "Die IDE merkt sich frühere Verwendungsabfragen.",
      ],
      [
        "Den Git-Branch duplizieren.",
        "Ein Branch dupliziert keine gespeicherte Suchansicht.",
      ],
      [
        "Die Symboldefinition neu schreiben.",
        "Eine neue Definition stellt den früheren Suchstand nicht wieder her.",
      ],
    ],
    [
      "CN17",
      "Ein Symbol soll projektweit umbenannt werden. Welche VS-Code-Funktion berücksichtigt unterstützte Verwendungen über Dateien?",
      vscodeNavigation,
      [
        "Rename Symbol.",
        "Die sprachgestützte Umbenennung ändert Verwendungen über Dateien hinweg.",
      ],
      [
        "Eine reine Vorschau der Definition.",
        "Eine Definitionvorschau führt keine Umbenennung aus.",
      ],
      ["Go to Symbol in File.", "Diese Navigation ändert keinen Code."],
    ],
    [
      "CN18",
      "Unter welcher Bedingung kann VS Code ein Symbol mit `Rename Symbol` über Dateien hinweg umbenennen?",
      vscodeNavigation,
      [
        "Wenn die verwendete Sprache diese Symbolfunktion unterstützt.",
        "Die VS-Code-Dokumentation nennt Rename Symbol über Dateien für unterstützte Sprachen.",
      ],
      [
        "Wenn derselbe Bezeichner in mehreren Dateien als Text vorkommt.",
        "Gleiche Zeichenfolgen stellen keine Sprachunterstützung für Rename Symbol bereit.",
      ],
      [
        "Wenn die Definition des Symbols in einer Vorschau geöffnet werden kann.",
        "Eine Definitionsvorschau belegt keine Unterstützung der Umbenennungsfunktion.",
      ],
    ],
    [
      "CN19",
      "In VS Code erscheinen Referenzzahlen direkt über einer Methode. Welche Funktion kann zur Referenzansicht führen?",
      vscodeNavigation,
      [
        "Die CodeLens-Referenzinformation anklicken.",
        "CodeLens kann Referenzzahlen anzeigen und Peek References öffnen.",
      ],
      [
        "Die Methode mit F2 umbenennen.",
        "Rename Symbol ändert Code statt die Referenzansicht zu öffnen.",
      ],
      [
        "Go to Type Definition aufrufen.",
        "Das führt zum Typ des Symbols, nicht zu seinen Verwendungen.",
      ],
    ],
    [
      "CN20",
      "Eine Symbolnavigation findet in einer Datei keine Definition. Welche Grenze nennt die VS-Code-Dokumentation?",
      vscodeNavigation,
      [
        "Die jeweilige Sprache muss die Funktion unterstützen.",
        "Go to Definition und andere Symbolfunktionen hängen vom Language Support ab.",
      ],
      [
        "Alle Dateien müssen denselben Namen tragen.",
        "Gleiche Dateinamen sind keine Voraussetzung der Funktion.",
      ],
      [
        "Es muss bereits eine Find-Usages-Abfrage vorliegen.",
        "Eine Referenzsuche ist keine Voraussetzung für Go to Definition.",
      ],
    ],
    [
      "CN21",
      "IntelliJ zeigt für ein Symbol keine Usages. Welche Möglichkeit bietet die Ergebnisansicht zur erneuten Eingrenzung?",
      intellijUsages,
      [
        "Die Suchoptionen und den Scope erneut öffnen.",
        "Die Dokumentation bietet bei leerem Ergebnis einen Weg zu den Find-Usages-Optionen.",
      ],
      [
        "Die Methode ohne weitere Prüfung als unbenutzt entfernen.",
        "Ein leerer Trefferbereich rechtfertigt noch keine Codeänderung.",
      ],
      [
        "Nur die Ergebnisreihenfolge umkehren.",
        "Eine Sortierung verändert den Suchbereich nicht.",
      ],
    ],
    [
      "CN22",
      "Eine IntelliJ-Suche zeigt ähnliche Verwendungen als Cluster. Wozu dient diese Darstellung?",
      intellijUsages,
      [
        "Häufige strukturelle Nutzungsmuster leichter zu sichten.",
        "Die IDE gruppiert Ergebnisse nach struktureller Ähnlichkeit.",
      ],
      [
        "Den Code automatisch nach Clustern aufzuteilen.",
        "Die Cluster sind eine Suchansicht, keine Codeänderung.",
      ],
      [
        "Jedes Cluster als fachlich identisches Verhalten zu beweisen.",
        "Strukturelle Ähnlichkeit ersetzt keine fachliche Prüfung.",
      ],
    ],
    [
      "CN23",
      "Ein Symbol erscheint in mehreren Paketen. Wie lässt sich die Auswirkung nach einem Paket eingrenzen?",
      intellijUsages,
      [
        "Einen passenden Scope oder eine Gruppierung der Usages wählen.",
        "Die Find-Ansicht kann nach Bereichen suchen und nach Paketen gliedern.",
      ],
      [
        "Die Deklaration vor der Suche verschieben.",
        "Das verändert den Code, bevor die Verwendungen geklärt sind.",
      ],
      [
        "Alle Referenzen auf denselben Paketnamen umbenennen.",
        "Umbenennen klärt den Suchbereich nicht.",
      ],
    ],
    [
      "CN24",
      "Eine Methode hat in IntelliJ mehr Verwendungen als zunächst in der kleinen Ergebnisansicht sichtbar. Was ist zu beachten?",
      intellijUsages,
      [
        "Die Ansicht kann zunächst nur die ersten Treffer zeigen und weitere nachladen.",
        "Die Dokumentation beschreibt eine Grenze der kompakten Usages-Ansicht.",
      ],
      [
        "Die zuerst sichtbaren Treffer sind automatisch alle Verwendungen.",
        "Die Ergebnisansicht kann weitere Treffer anbieten.",
      ],
      [
        "Die Methode darf nur in einer Datei verwendet werden.",
        "Die sichtbare Teilmenge belegt keinen solchen Umfang.",
      ],
    ],
    [
      "CN25",
      "Eine Änderung betrifft eine TypeScript-Prop. Welche Reihenfolge nutzt Symbolnavigation für die konkrete Auswirkungsprüfung?",
      vscodeNavigation,
      [
        "Definition klären, Referenzen ansehen und Treffer im Kontext prüfen.",
        "Definition und Peek References verbinden das Symbol mit seinen Verwendungen.",
      ],
      [
        "Den Prop-Namen als Text ersetzen und die Treffer ignorieren.",
        "Reine Textersetzung kann gleichnamige fremde Stellen treffen.",
      ],
      [
        "Nur die Typdefinition lesen und Aufrufstellen auslassen.",
        "Die Typdefinition zeigt nicht die Verwendungskontexte.",
      ],
    ],
  ]),
  "versioned-library-docs-with-context7": pool([
    [
      "C701",
      "Ein Agent soll mit Context7 eine API für die im Projekt verwendete Bibliotheksversion suchen. Welche Angabe macht die Abfrage gezielt?",
      context7Api,
      [
        "Die im Build ermittelte Bibliotheksversion als Versions-Hinweis verwenden.",
        "Context7 unterstützt Versions-Hinweise bei einem Bibliotheksbezug.",
      ],
      [
        "Die neueste von Context7 angebotene Version.",
        "Die neueste dokumentierte Fassung muss nicht im Projekt eingebunden sein.",
      ],
      [
        "Die zuletzt geöffnete Browserseite des Agenten.",
        "Eine Browserseite ist kein Beleg für den Projektstand.",
      ],
    ],
    [
      "C702",
      "Context7 liefert ein Beispiel für eine andere Spring-Boot-Version als das Projekt. Was ist die fachlich passende Prüfung?",
      springBoot35,
      [
        "Mit der Referenz der tatsächlich verwendeten Spring-Boot-Version abgleichen.",
        "Die Originalreferenz der Projektversion ist maßgeblich für die API-Aussage.",
      ],
      [
        "Das Beispiel wegen seiner Aktualität ungeprüft übernehmen.",
        "Ein neueres Beispiel kann für die ältere Projektversion unpassend sein.",
      ],
      [
        "Die Bibliothek im Build stillschweigend auf die Beispielversion ändern.",
        "Eine Abhängigkeitsänderung ist keine Dokumentationsprüfung.",
      ],
    ],
    [
      "C703",
      "Eine Bibliothek hat mehrere ähnlich benannte Context7-Einträge. Wie lässt sich die Auswahl präzisieren?",
      context7,
      [
        "Die konkrete Context7-Bibliotheks-ID im Auftrag angeben.",
        "Mit einer ID kann Context7 das mehrdeutige Bibliotheksmatching überspringen.",
      ],
      [
        "Den Bibliotheksnamen aus dem Auftrag entfernen.",
        "Ohne Kennung steigt die Mehrdeutigkeit.",
      ],
      [
        "Alle gefundenen Beispiele als gleichwertig behandeln.",
        "Die Einträge können verschiedene Bibliotheken oder Versionen meinen.",
      ],
    ],
    [
      "C704",
      "Welchen Zweck hat eine Context7-Bibliotheks-ID wie `/vercel/next.js`?",
      context7Api,
      [
        "Sie identifiziert die Dokumentationsquelle für Such- und Kontextabfragen.",
        "Die API verwendet die ID zum Zuordnen einer Bibliothek.",
      ],
      [
        "Sie ist eine lokale Java-Paketbezeichnung.",
        "Die ID stammt aus Context7, nicht aus dem Java-Paketsystem.",
      ],
      [
        "Sie ist ein Beweis für die Version im Projekt-Build.",
        "Die ID allein sagt nichts über die lokale Abhängigkeitsversion.",
      ],
    ],
    [
      "C705",
      "Woher kann eine Context7-ID für eine bereits bekannte Bibliotheksseite abgelesen werden?",
      context7Api,
      [
        "Aus dem URL-Pfad der Bibliotheksseite auf context7.com.",
        "Der API-Guide definiert diesen Pfad als Bibliotheks-ID.",
      ],
      [
        "Aus der vom Agenten vermuteten Paketabkürzung.",
        "Eine Abkürzung muss nicht dem Context7-Pfad entsprechen.",
      ],
      [
        "Aus der Reihenfolge im lokalen Lockfile.",
        "Die Position im Lockfile ist keine Context7-Kennung.",
      ],
    ],
    [
      "C706",
      "Welche ID-Form kann laut Context7 eine konkrete GitHub-Repository-Version eingrenzen?",
      context7Api,
      [
        "`/owner/repo@version`",
        "Der Guide unterstützt Versions-Pinning mit `@` oder einem weiteren Pfadsegment.",
      ],
      [
        "`/owner/repo?latest=true`",
        "Diese Form pinnt keine konkrete Version im dokumentierten ID-Format.",
      ],
      [
        "`/owner/repo#project-build`",
        "Ein lokaler Build-Hash ist keine dokumentierte Context7-Versionsform.",
      ],
    ],
    [
      "C707",
      "Eine natürlichsprachliche Context7-Suche soll passende versionsbezogene Treffer priorisieren. Welche Zusatzangabe ist laut API-Guide möglich?",
      context7Api,
      [
        "Eine Version zusammen mit mindestens einem Bibliothekshinweis.",
        "Der Guide beschreibt `version` nur zusammen mit einem Library-Hint.",
      ],
      [
        "Eine Version ohne Bibliothek und ohne Frage.",
        "Die Versionsangabe braucht einen Bibliotheksbezug.",
      ],
      [
        "Ein Repository-Pfad statt jeder Suchfrage.",
        "Der Such-API wird eine Frage übergeben.",
      ],
    ],
    [
      "C708",
      "Bei einer Context7-Suchabfrage ist der Bibliotheksname eindeutig. Wie sollen Hints laut Guide verwendet werden?",
      context7Api,
      [
        "Mit der Frage beginnen und Hints nur bei zusätzlichem Nutzen ergänzen.",
        "Der Guide empfiehlt Hinweise bei Mehrdeutigkeit oder mehreren Produkten.",
      ],
      [
        "Vorsorglich vier beliebige Bibliotheken nennen.",
        "Irrelevante Hints können die Trefferwahl verschlechtern.",
      ],
      [
        "Den Bibliotheksnamen durch einen Sprach-Hint ersetzen.",
        "Die Sprache wählt keine konkrete Bibliothek.",
      ],
    ],
    [
      "C709",
      "Eine Context7-Suche soll TypeScript-Beispiele höher einstufen. Welcher Parameter ist dafür gedacht?",
      context7Api,
      [
        "`language=TypeScript`",
        "Der Language-Hint beeinflusst die Rangfolge sprachspezifischer Beispiele.",
      ],
      [
        "`version=TypeScript`",
        "Version bezeichnet einen Bibliotheksstand, keine Programmiersprache.",
      ],
      [
        "`libraryId=TypeScript`",
        "Die Bibliotheks-ID identifiziert eine Dokumentationsquelle.",
      ],
    ],
    [
      "C710",
      "Ein Agent kennt die Bibliotheks-ID bereits. Welcher CLI-Befehl fragt dafür Dokumentation ab?",
      context7,
      [
        "`ctx7 docs <libraryId> <query>`",
        "Der dokumentierte CLI-Befehl holt Dokumentation für die angegebene ID.",
      ],
      [
        "`ctx7 library <libraryId> <query>`",
        "`library` sucht zuerst nach Bibliotheken und IDs.",
      ],
      [
        "`ctx7 setup <libraryId> <query>`",
        "Setup richtet Context7 ein, ruft aber nicht die konkrete Passage ab.",
      ],
    ],
    [
      "C711",
      "Eine Bibliothek ist noch nicht eindeutig identifiziert. Welcher Context7-CLI-Schritt liefert passende IDs?",
      context7,
      [
        "`ctx7 library <name> <query>`",
        "Die Bibliothekssuche liefert Treffer samt IDs.",
      ],
      [
        "`ctx7 docs <name> <query>` ohne geklärte ID.",
        "Docs nutzt eine passende Context7-ID für die konkrete Quelle.",
      ],
      [
        "`ctx7 remove <name>`",
        "Remove entfernt eine Einrichtung statt Bibliotheken zu suchen.",
      ],
    ],
    [
      "C712",
      "Welche zwei MCP-Werkzeuge bilden im dokumentierten Context7-Ablauf Identifikation und Dokumentationsabfrage?",
      context7,
      [
        "`resolve-library-id` und danach `query-docs`.",
        "Das erste löst die ID auf, das zweite fragt Dokumentation ab.",
      ],
      [
        "Zweimal `query-docs` mit unbestimmtem Namen.",
        "Die ID-Auflösung ist damit nicht ausdrücklich durchgeführt.",
      ],
      [
        "`ctx7 setup` und `ctx7 remove`.",
        "Diese CLI-Befehle betreffen Installation und Entfernung.",
      ],
    ],
    [
      "C713",
      "Eine Anwendung muss eine bestimmte Bibliotheksquelle selbst auswählen. Welche REST-Folge beschreibt der API-Guide?",
      context7Api,
      [
        "Search Library und anschließend Get Context mit der gewählten ID.",
        "Der zweistufige Ablauf trennt Bibliothekswahl und Dokumentationsabruf.",
      ],
      [
        "Refresh Library und danach Update Policies.",
        "Diese Endpunkte wählen keine Quelle für eine Antwort aus.",
      ],
      [
        "Get Metrics und danach Add Website.",
        "Metriken und Quellenanlage ersetzen die Kontextabfrage nicht.",
      ],
    ],
    [
      "C714",
      "Eine Frage ohne feste Bibliotheks-ID soll direkt passende Dokumentation suchen. Welchen REST-Endpunkt nennt Context7 dafür?",
      context7Api,
      [
        "Search Documentation (`GET /api/v3/search`).",
        "Dieser Endpunkt wählt und durchsucht relevante Bibliotheken anhand der Frage.",
      ],
      [
        "Get Context (`GET /api/v2/context`) ohne Quellenangabe.",
        "Get Context ist für eine gewählte Bibliotheksquelle gedacht.",
      ],
      [
        "Refresh Library (`POST /api/v1/refresh`).",
        "Refresh stößt eine Aktualisierung an und beantwortet die Frage nicht.",
      ],
    ],
    [
      "C715",
      "Eine Context7-Suche findet keine Dokumentation. Welches Ergebnis beschreibt der API-Guide für diesen Fall?",
      context7Api,
      [
        "`404 no_documentation_found` als leeres Ergebnis behandeln.",
        "Der Guide grenzt fehlende Dokumentation von temporären Suchfehlern ab.",
      ],
      [
        "`503 search_failed` als Beleg für fehlende Dokumentation werten.",
        "503 bezeichnet einen vorübergehenden Suchfehler.",
      ],
      [
        "Einen passenden API-Beleg aus dem Fehlertext ableiten.",
        "Ein Fehler liefert keine fachliche Dokumentationspassage.",
      ],
    ],
    [
      "C716",
      "Eine Context7-Suche scheitert vorübergehend mit `503 search_failed`. Welche Reaktion entspricht dem Guide?",
      context7Api,
      [
        "Die Abfrage später erneut versuchen.",
        "Der Guide nennt 503 als temporären Suchfehler.",
      ],
      [
        "Den Fehler als dauerhaft fehlende Bibliotheksdokumentation deuten.",
        "Das wäre die Bedeutung eines anderen Fehlertyps.",
      ],
      [
        "Das letzte ungeprüfte Modellwissen als Quelle ausgeben.",
        "Ein Suchausfall macht eine unbelegte Antwort nicht zu Dokumentation.",
      ],
    ],
    [
      "C717",
      "Eine Context7-Bibliothek ist noch nicht fertig verarbeitet und liefert HTTP 202. Was bedeutet das?",
      context7Api,
      [
        "Die Verarbeitung ist angenommen; später erneut abfragen.",
        "Der Guide beschreibt 202 als noch nicht finalisierte Bibliothek.",
      ],
      [
        "Die angeforderte API-Passage ist vollständig bestätigt.",
        "202 signalisiert gerade keine fertigen Dokumentationsdaten.",
      ],
      [
        "Der Bibliothekseintrag wurde endgültig gelöscht.",
        "Ein gelöschter Eintrag wird damit nicht beschrieben.",
      ],
    ],
    [
      "C718",
      "Eine Context7-ID liefert eine Weiterleitung mit `redirectUrl`. Wie soll der Client laut Guide reagieren?",
      context7Api,
      [
        "Die neue Bibliotheks-ID aus `redirectUrl` verwenden.",
        "HTTP 301 bezeichnet einen verschobenen Bibliothekseintrag.",
      ],
      [
        "Die alte ID als fest angepinnte Version behandeln.",
        "Die Weiterleitung ist keine Versionsangabe.",
      ],
      [
        "Die Frage ohne Bibliotheksbezug fortsetzen.",
        "Der neue Zielpfad ist gerade der geklärte Bezug.",
      ],
    ],
    [
      "C719",
      "Ein API-Aufruf mit festem Context7-ID-Pfad ergibt 404 `library_not_found`. Was wird zuerst geprüft?",
      context7Api,
      [
        "Die ID und gegebenenfalls die Zugriffsberechtigung.",
        "Der Guide nennt ungültige ID oder fehlenden Zugriff als Ursachen.",
      ],
      [
        "Die Antwort als gültige Passage der Bibliothek auswerten.",
        "Ein Not-Found-Fehler enthält keine Passage.",
      ],
      [
        "Die lokale Bibliotheksversion ungeprüft wechseln.",
        "Ein API-Fehler begründet keinen Versionswechsel im Projekt.",
      ],
    ],
    [
      "C720",
      "Warum empfiehlt Context7 bei einem festen Bibliotheksstand eine versionierte ID?",
      context7Api,
      [
        "Für konsistente Treffer zur gezielt gewählten Fassung.",
        "Der Guide empfiehlt Version-Pinning für reproduzierbare Ergebnisse.",
      ],
      [
        "Damit die Projektabhängigkeit automatisch aktualisiert wird.",
        "Eine Dokumentations-ID ändert keinen Build.",
      ],
      [
        "Damit jede Suchanfrage ohne Quellenprüfung richtig ist.",
        "Pinning ersetzt den Abgleich mit Originaldokumentation nicht.",
      ],
    ],
    [
      "C721",
      "Eine Abfrage nach `auth` liefert zu breite Treffer. Welche Verbesserung empfiehlt Context7?",
      context7Api,
      [
        "Eine konkrete natürlichsprachliche Frage zum benötigten Verhalten stellen.",
        "Spezifische Queries liefern relevantere Passagen als ein vages Stichwort.",
      ],
      [
        "Die Query vollständig weglassen.",
        "Ohne Frage kann der gesuchte Aspekt nicht eingegrenzt werden.",
      ],
      [
        "Nur die Programmiersprache als Query verwenden.",
        "Die Sprache beschreibt den fachlichen API-Bedarf nicht.",
      ],
    ],
    [
      "C722",
      "Ein Agent erhält Code-Snippets und erklärende Passagen von Context7. Was ist vor einer Implementierung zu prüfen?",
      context7Api,
      [
        "Bibliotheks-ID, Version und Aussage der relevanten Originaldokumentation.",
        "Context7 liefert Treffer; deren Passung zum Projekt muss geprüft werden.",
      ],
      [
        "Nur ob der Snippet syntaktisch plausibel aussieht.",
        "Plausible Syntax belegt keine passende Version oder API.",
      ],
      [
        "Nur ob der Treffer aus einem ähnlichen Framework stammt.",
        "Ein ähnliches Framework ersetzt die konkrete Bibliotheksquelle nicht.",
      ],
    ],
    [
      "C723",
      "Eine Context7-Abfrage überschreitet ihr Limit und liefert HTTP 429. Was sieht die dokumentierte Fehlerbehandlung vor?",
      context7Api,
      [
        "`Retry-After` beachten und mit Backoff erneut versuchen.",
        "Der Guide beschreibt Rate-Limit-Header und wiederholte Versuche mit Abstand.",
      ],
      [
        "Sofort ohne Pause dieselbe Anfrage vervielfachen.",
        "Das verschärft die Limitüberschreitung.",
      ],
      [
        "Den Rate-Limit-Fehler als Fachquelle für die API-Frage verwenden.",
        "Ein 429 enthält keine Bibliotheksdokumentation.",
      ],
    ],
    [
      "C724",
      "Warum kann ein Team häufig verwendete Context7-Antworten zeitlich begrenzt zwischenspeichern?",
      context7Api,
      [
        "Dokumentation ändert sich vergleichsweise selten und Cache spart API-Aufrufe.",
        "Der Guide empfiehlt Caching über Stunden oder Tage zur Schonung des Limits.",
      ],
      [
        "Damit die Originaldokumentation dauerhaft entbehrlich wird.",
        "Ein Cache ersetzt keinen fachlichen Abgleich.",
      ],
      [
        "Damit unterschiedliche Bibliotheksversionen denselben Treffer teilen.",
        "Versionsbezogene Abfragen dürfen nicht vermischt werden.",
      ],
    ],
    [
      "C725",
      "Eine Context7-Passage widerspricht der Spring-Boot-3.5-Referenz für ein Spring-Boot-3.5-Projekt. Welche Quelle entscheidet die konkrete API-Aussage?",
      springBoot35,
      [
        "Die offizielle Spring-Boot-3.5-Referenz.",
        "Für die eingesetzte Fassung ist die Herstellerdokumentation die maßgebliche Originalquelle.",
      ],
      [
        "Die zuerst geladene Context7-Passage.",
        "Die Trefferreihenfolge ist kein fachlicher Vorrang.",
      ],
      [
        "Ein Treffer aus einer anderen Spring-Boot-Version.",
        "Eine andere Version trägt die Aussage für 3.5 nicht zuverlässig.",
      ],
    ],
  ]),
};
