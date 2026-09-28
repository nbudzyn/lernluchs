import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const github =
  "https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/custom-agents";
const anthropic =
  "https://www.anthropic.com/engineering/multi-agent-research-system";

export const subagentOwnershipQuestions: Question[] = [
  q(
    "subagent-ownership-01",
    anthropic,
    "Zwei Subagents recherchieren denselben Teil einer Java-Migration. Was sollte die koordinierende Instanz zuerst verbessern?",
    [
      "Teilaufträge mit getrennten Zielen und Grenzen formulieren.",
      "Klare Teilaufträge verringern laut Anthropic doppelte Arbeit und Lücken.",
    ],
    [
      "Beide Agenten länger nach derselben Information suchen lassen.",
      "Mehr Suche behebt die überlappenden Zuständigkeiten nicht.",
    ],
    [
      "Die Ergebnisse ohne Abgleich zusammenfügen.",
      "Eine Zusammenführung ohne Abgleich kann widersprüchliche oder doppelte Befunde übernehmen.",
    ],
  ),
  q(
    "subagent-ownership-02",
    anthropic,
    "Welche Angabe gehört zu einem brauchbaren Rechercheauftrag für einen spezialisierten Subagent?",
    [
      "Ein erwartetes Ausgabeformat für die Befunde.",
      "Anthropic nennt das Ausgabeformat als Teil eines klaren Teilauftrags.",
    ],
    [
      "Ein möglichst offenes Ziel ohne Ergebnisform.",
      "Vage Aufträge führten im beschriebenen System zu Missverständnissen und Dopplungen.",
    ],
    [
      "Die Anweisung, jeden Fund sofort als Endergebnis zu behandeln.",
      "Der koordinierende Agent muss Befunde bewerten und bei Bedarf weiter recherchieren.",
    ],
  ),
  q(
    "subagent-ownership-03",
    anthropic,
    "Wie nutzt ein koordinierender Agent im beschriebenen Research-System die Ergebnisse seiner Subagents?",
    [
      "Er führt Befunde zusammen und entscheidet über weiteren Recherchebedarf.",
      "Der LeadResearcher synthetisiert Ergebnisse und kann seine Strategie anpassen.",
    ],
    [
      "Er überlässt jedem Subagent die endgültige Gesamtaussage.",
      "Die Gesamtsynthese liegt beim koordinierenden Agenten.",
    ],
    [
      "Er behandelt die erste Rückgabe als vollständige Prüfung.",
      "Das System kann zusätzliche Subagents starten oder weiter recherchieren.",
    ],
  ),
  q(
    "subagent-ownership-04",
    anthropic,
    "Wann ist parallele Arbeit mehrerer Agenten nach der beschriebenen Erfahrung besonders passend?",
    [
      "Bei weitgehend unabhängigen, umfangreichen Teilaufgaben.",
      "Anthropic nennt schwere Parallelisierung und große Informationsmengen als geeignete Fälle.",
    ],
    [
      "Bei eng voneinander abhängigen Änderungen an derselben Datei.",
      "Starke Abhängigkeiten erschweren Koordination und Parallelisierung.",
    ],
    [
      "Bei einer kleinen, klaren Faktenfrage mit wenig Recherche.",
      "Für einfache Aufgaben soll der Aufwand kleiner ausfallen.",
    ],
  ),
  q(
    "subagent-ownership-05",
    anthropic,
    "Welches Problem beobachtete Anthropic bei zu vagen Teilaufträgen?",
    [
      "Subagents bearbeiteten dieselbe Recherche oder verfehlten Teilaspekte.",
      "Ohne klare Grenzen kam es zu doppelter Arbeit und Lücken.",
    ],
    [
      "Die Suchwerkzeuge lieferten grundsätzlich keine Ergebnisse mehr.",
      "Der geschilderte Fehler lag bei der Aufgabenzerlegung, nicht bei einem generellen Werkzeugausfall.",
    ],
    [
      "Die Hauptinstanz konnte keine Ergebnisse mehr lesen.",
      "Der Bericht beschreibt weiterhin Rückgaben an die Hauptinstanz.",
    ],
  ),
  q(
    "subagent-ownership-06",
    github,
    "Welche Aufgabe übernimmt die Parent-Session bei GitHubs Subagent-Orchestrierung?",
    [
      "Sie erhält Ereignisse und bindet das Subagent-Ergebnis in ihre Antwort ein.",
      "GitHub beschreibt Ereignisstrom und Ergebnisintegration in die Parent-Session.",
    ],
    [
      "Sie wird durch den Subagent dauerhaft ersetzt.",
      "Der Subagent arbeitet für einen Teilauftrag innerhalb der Parent-Session.",
    ],
    [
      "Sie führt jeden Werkzeugaufruf des Subagent selbst aus.",
      "Der Subagent läuft mit eigenem Kontext und zugewiesenen Werkzeugen.",
    ],
  ),
  q(
    "subagent-ownership-07",
    github,
    "Was trennt beim beschriebenen GitHub-Copilot-SDK einen Subagent von der Parent-Session?",
    [
      "Ein eigener Kontext und eine eigene Agentendefinition.",
      "GitHub beschreibt isolierte Ausführung mit eigenem Prompt und Werkzeugumfang.",
    ],
    [
      "Eine eigene, dauerhaft unabhängige Benutzeranfrage.",
      "Die Delegation bleibt Teil der bestehenden Sitzung und Anfrage.",
    ],
    [
      "Ein automatisch eigener Git-Commit.",
      "Die Dokumentation beschreibt Agentenkontext, nicht automatische Commits.",
    ],
  ),
  q(
    "subagent-ownership-08",
    github,
    "Wofür hilft eine präzise `description` in einer Custom-Agent-Definition?",
    [
      "Sie hilft der Laufzeit, passende Aufgaben dem Agenten zuzuordnen.",
      "Die Beschreibung wird bei der Auswahl nach Nutzerabsicht berücksichtigt.",
    ],
    [
      "Sie garantiert die Korrektheit jedes Agentenergebnisses.",
      "Die Beschreibung steuert Auswahl, nicht fachliche Qualität.",
    ],
    [
      "Sie legt automatisch Dateisperren im Repository an.",
      "Eine Rollenbeschreibung richtet keine technische Dateisperre ein.",
    ],
  ),
  q(
    "subagent-ownership-09",
    github,
    "Welche beiden Angaben benötigt eine Custom-Agent-Definition im gezeigten Copilot SDK mindestens?",
    [
      "Einen Namen und einen Prompt.",
      "Die SDK-Dokumentation bezeichnet `name` und `prompt` als erforderlich.",
    ],
    [
      "Einen Worktree und einen Commit-Hash.",
      "Beides gehört nicht zu den erforderlichen Agentenfeldern.",
    ],
    [
      "Eine Datenbank und einen MCP-Server.",
      "MCP-Server sind optional; eine Datenbank ist keine Pflichtangabe.",
    ],
  ),
  q(
    "subagent-ownership-10",
    github,
    "Was bewirkt `infer: false` bei einem Custom Agent im beschriebenen SDK?",
    [
      "Die automatische Auswahl dieses Agenten wird unterbunden.",
      "GitHub zeigt `infer: false` für Agenten, die gezielt aufgerufen werden sollen.",
    ],
    [
      "Der Agent verliert seine definierten Werkzeuge.",
      "Die Werkzeugliste wird separat konfiguriert.",
    ],
    [
      "Die Parent-Session verwirft seine Ergebnisse.",
      "Die Option betrifft Auswahl, nicht Ergebnisintegration.",
    ],
  ),
  q(
    "subagent-ownership-11",
    github,
    "Welche Ereignisse eignen sich, um Beginn und Abschluss eines delegierten Teilauftrags zu erkennen?",
    [
      "`subagent.started` und `subagent.completed`.",
      "GitHub dokumentiert diese beiden Lebenszyklusereignisse.",
    ],
    [
      "`file.opened` und `file.closed`.",
      "Dateiereignisse zeigen den Lebenszyklus eines Subagent-Auftrags nicht an.",
    ],
    [
      "`build.started` und `build.completed`.",
      "Build-Ereignisse sind kein Ersatz für Subagent-Lebenszyklusereignisse.",
    ],
  ),
  q(
    "subagent-ownership-12",
    github,
    "Wie lässt sich im dokumentierten Ereignisstrom ein Subagent-Ergebnis seinem Start zuordnen?",
    [
      "Über die gemeinsame `toolCallId` der Lebenszyklusereignisse.",
      "Das Beispiel nutzt `toolCallId`, um den Agentenbaum zu rekonstruieren.",
    ],
    [
      "Über die Reihenfolge sämtlicher Textausgaben.",
      "Bei mehreren Delegationen ist die reine Ausgabereihenfolge keine stabile Zuordnung.",
    ],
    [
      "Über den Dateinamen der ersten geänderten Datei.",
      "Die Lebenszyklusereignisse verwenden eine Aufrufkennung, keinen Dateinamen.",
    ],
  ),
  q(
    "subagent-ownership-13",
    github,
    "Warum ist ein lesender Rechercheagent neben einem schreibenden Editoragenten ein sinnvolles Muster?",
    [
      "Exploration und Änderung bekommen unterschiedliche Aufgaben und Werkzeugmengen.",
      "GitHub zeigt genau dieses Paar als Spezialisierungsmuster.",
    ],
    [
      "Beide Agenten bearbeiten dadurch automatisch verschiedene Dateien.",
      "Die Rollenaufteilung erzwingt keine Dateizuständigkeit.",
    ],
    [
      "Jeder Befund wird dadurch ohne Review korrekt.",
      "Spezialisierung ersetzt keine Prüfung der Ergebnisse.",
    ],
  ),
  q(
    "subagent-ownership-14",
    anthropic,
    "Welche zusätzliche Angabe verhindert bei parallelen Recherchen eher eine inhaltliche Lücke?",
    [
      "Der ausdrücklich zu prüfende Teilaspekt und seine Grenze.",
      "Anthropic verlangt klare Teilaufgaben, damit Bereiche nicht übersehen werden.",
    ],
    [
      "Ein identischer allgemeiner Suchauftrag für alle Agenten.",
      "Identische vage Aufträge begünstigen Überschneidungen.",
    ],
    [
      "Die gewünschte Anzahl der Textabsätze ohne Sachziel.",
      "Eine reine Längenvorgabe grenzt den Recherchegegenstand nicht ab.",
    ],
  ),
  q(
    "subagent-ownership-15",
    anthropic,
    "Wie sollte die Zahl der Subagents für eine einfache Faktenfrage gewählt werden?",
    [
      "Am geringen tatsächlichen Aufwand der Frage ausgerichtet.",
      "Anthropic empfiehlt, den Agenteneinsatz an die Aufgabenkomplexität anzupassen.",
    ],
    [
      "Nach dem Maximum verfügbarer Agentenplätze.",
      "Maximale Parallelität kann bei kleinen Aufgaben unnötige Kosten erzeugen.",
    ],
    [
      "Nach der Anzahl aller Dateien im Repository.",
      "Die Dateizahl allein sagt wenig über die Zerlegbarkeit der Frage aus.",
    ],
  ),
  q(
    "subagent-ownership-16",
    anthropic,
    "Welche Kostenfolge beschreibt Anthropic für sein Multi-Agent-Research-System?",
    [
      "Es verbraucht deutlich mehr Tokens als eine einfache Chat-Interaktion.",
      "Der Bericht nennt erheblich höheren Tokenverbrauch und verlangt ausreichenden Aufgabennutzen.",
    ],
    [
      "Parallelität senkt den Tokenverbrauch zwangsläufig.",
      "Der Bericht beschreibt gerade einen höheren Tokenverbrauch.",
    ],
    [
      "Koordination hat keinen messbaren Ressourcenbedarf.",
      "Koordination und zusätzliche Agenten erhöhen den Aufwand.",
    ],
  ),
  q(
    "subagent-ownership-17",
    anthropic,
    "Warum eignet sich eine stark voneinander abhängige Coding-Aufgabe schlechter zur parallelen Aufteilung?",
    [
      "Die Agenten brauchen denselben Kontext und müssen Zwischenstände eng abstimmen.",
      "Anthropic nennt gemeinsame Kontexte und viele Abhängigkeiten als Hindernis.",
    ],
    [
      "Coding-Aufgaben besitzen grundsätzlich keine prüfbaren Teilaufgaben.",
      "Der Bericht beschreibt geringere, nicht fehlende Parallelisierbarkeit.",
    ],
    [
      "Parallele Agenten können keine Dateien lesen.",
      "Die Grenze ist die Koordination, nicht eine allgemeine Lesesperre.",
    ],
  ),
  q(
    "subagent-ownership-18",
    anthropic,
    "Welche Rolle hat der CitationAgent im beschriebenen Research-System?",
    [
      "Er ordnet Aussagen konkrete Fundstellen in den recherchierten Quellen zu.",
      "Anthropic beschreibt eine eigene Zitierprüfung nach der Recherche.",
    ],
    [
      "Er wählt vor jeder Suche die Zahl der Subagents fest.",
      "Die Planung und Delegation übernimmt der LeadResearcher.",
    ],
    [
      "Er ersetzt die ursprünglichen Quellen durch eigene Zusammenfassungen.",
      "Der CitationAgent soll Aussagen den Originalfundstellen zuordnen.",
    ],
  ),
  q(
    "subagent-ownership-19",
    anthropic,
    "Ein Team vermutet, dass seine Subagents unnötig lange suchen oder falsche Werkzeuge wählen. Wie untersuchte Anthropic solche Fehlmuster beim Prompt-Design?",
    [
      "Mit Simulationen unter Verwendung der tatsächlichen Prompts und Werkzeuge.",
      "Anthropic beobachtete simulierte Agentenläufe mit den Prompts und Tools des Systems Schritt für Schritt.",
    ],
    [
      "Mit einem Vergleich der Schlussberichte ohne Betrachtung der Zwischenschritte.",
      "Die beschriebenen Simulationen machten gerade die einzelnen Entscheidungen und Fehlwege sichtbar.",
    ],
    [
      "Mit einer Auswertung des Tokenverbrauchs ohne Beobachtung der Werkzeugwahl.",
      "Die Werkzeugwahl wurde in den simulierten Abläufen direkt beobachtet.",
    ],
  ),
  q(
    "subagent-ownership-20",
    anthropic,
    "Welchen Nachteil synchroner Subagent-Ausführung nennt der Bericht?",
    [
      "Die Hauptinstanz kann beim Warten auf einen Subagent blockiert sein.",
      "Synchrones Warten erzeugt Engpässe im Informationsfluss.",
    ],
    [
      "Die Teilaufträge verlieren dadurch ihre Ziele.",
      "Die Ziele sind eine Frage der Delegationsbeschreibung.",
    ],
    [
      "Quellen können dadurch nicht mehr zitiert werden.",
      "Das Zitieren ist von der Synchronität der Ausführung getrennt.",
    ],
  ),
  q(
    "subagent-ownership-21",
    anthropic,
    "Welche Schwierigkeit würde eine asynchrone Subagent-Ausführung zusätzlich schaffen?",
    [
      "Ergebnisse, Zustand und Fehler müssten überlappend koordiniert werden.",
      "Anthropic nennt Koordination, Zustandskonsistenz und Fehlerweitergabe.",
    ],
    [
      "Jeder Agent müsste denselben Prompt verwenden.",
      "Asynchronität verlangt keine identischen Rollenprompts.",
    ],
    [
      "Die ursprüngliche Frage dürfte nicht mehr geändert werden.",
      "Diese Einschränkung folgt nicht aus asynchroner Ausführung.",
    ],
  ),
  q(
    "subagent-ownership-22",
    anthropic,
    "Warum können dauerhaft gespeicherte Subagent-Artefakte die Ergebnisübergabe verbessern?",
    [
      "Die Hauptinstanz kann auf das Originalartefakt zugreifen statt auf eine verkürzte Nacherzählung.",
      "Anthropic schlägt Artefakte und leichte Verweise gegen Informationsverlust vor.",
    ],
    [
      "Sie machen die fachliche Prüfung der Befunde überflüssig.",
      "Ein persistiertes Artefakt kann weiterhin fehlerhafte Aussagen enthalten.",
    ],
    [
      "Sie erlauben jedem Agenten dieselbe Datei gleichzeitig zu überschreiben.",
      "Artefaktablage löst keine Schreibkonflikte im Projekt.",
    ],
  ),
  q(
    "subagent-ownership-23",
    github,
    "Ein Custom Agent soll im Copilot SDK bestimmte Skills bereits beim Start im Kontext haben. Was muss konfiguriert werden?",
    [
      "Die Skills ausdrücklich in seiner Agentendefinition aufführen.",
      "Skills sind je Agent opt-in; Subagents erben sie nicht vom Parent.",
    ],
    [
      "Das Skill-Verzeichnis auf Sitzungsebene angeben, ohne Skills am Agenten einzutragen.",
      "Das Verzeichnis stellt Skills bereit, lädt sie aber nicht automatisch in jeden Agentenkontext.",
    ],
    [
      "Die Skills beim Parent Agent eintragen und an den Subagent vererben lassen.",
      "Subagents übernehmen die Skills des Parent Agents laut Dokumentation nicht automatisch.",
    ],
  ),
  q(
    "subagent-ownership-24",
    anthropic,
    "Welcher Fehler kann entstehen, wenn ein Koordinator für eine kleine Aufgabe sehr viele Subagents startet?",
    [
      "Koordinations- und Rechercheaufwand übersteigen den Nutzen.",
      "Der Bericht beschreibt übermäßige Delegation bei einfachen Anfragen als Fehlverhalten.",
    ],
    [
      "Die Aufgabe wird dadurch automatisch genauer abgegrenzt.",
      "Mehr Agenten ersetzen keine klaren Teilaufträge.",
    ],
    [
      "Alle Subagents erhalten dadurch automatisch neue Quellen.",
      "Die Agentenzahl erzeugt keine zusätzlichen relevanten Quellen.",
    ],
  ),
  q(
    "subagent-ownership-25",
    anthropic,
    "Was sollte ein Subagent zu einer abgegrenzten Recherche neben dem Ziel erhalten?",
    [
      "Hinweise auf geeignete Werkzeuge und Quellen sowie eine Ergebnisform.",
      "Anthropic nennt Werkzeug- und Quellenhinweise und Ausgabeformat im Teilauftrag.",
    ],
    [
      "Einen unbeschränkten Auftrag zur Gesamtentscheidung.",
      "Eine unbegrenzte Gesamtaufgabe nimmt dem Koordinator die Aufgabenaufteilung.",
    ],
    [
      "Die Anweisung, andere Teilaufträge stillschweigend zu übernehmen.",
      "Das würde Zuständigkeiten verwischen und Doppelarbeit fördern.",
    ],
  ),
];
