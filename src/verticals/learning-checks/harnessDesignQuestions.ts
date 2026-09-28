import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const architecture =
  "https://developers.openai.com/api/docs/guides/agents-api/architecture";
const hosted =
  "https://developers.openai.com/api/docs/guides/agents-api/environments/self-hosted";
const security =
  "https://developers.openai.com/api/docs/guides/agents-api/environments/security";
const mcp =
  "https://developers.openai.com/api/docs/guides/agents-api/tools/mcp";
const sessions =
  "https://developers.openai.com/api/docs/guides/agents-api/sessions";

export const harnessDesignQuestions: Question[] = [
  q(
    "harness-design-01",
    architecture,
    "Welche Aufgabe hat das Harness in der beschriebenen Agents-API-Architektur?",
    [
      "Modell- und Werkzeugschleife ausführen und die Agentensitzung halten.",
      "Die Architektur ordnet diese Aufgaben dem Harness zu.",
    ],
    [
      "Build-Artefakte als Maven-Repository ausliefern.",
      "Artefaktverwaltung gehört nicht zum beschriebenen Harness.",
    ],
    [
      "Den Java-Anwendungscode statt der Umgebung kompilieren.",
      "Befehle laufen in einer Umgebung.",
    ],
  ),
  q(
    "harness-design-02",
    architecture,
    "Welche Rolle übernimmt eine Agentenumgebung?",
    [
      "Sie stellt Rechenleistung und Dateien für Befehle bereit.",
      "Die Umgebung führt Kommandos aus und hält Arbeitsdateien.",
    ],
    [
      "Sie bewertet jede fachliche Änderung automatisch.",
      "Die Umgebung stellt Ressourcen bereit, keine vollständige Abnahme.",
    ],
    [
      "Sie ersetzt den Anwendungsserver bei allen Funktionswerkzeugen.",
      "Der Anwendungsserver kann Funktionsaufrufe bearbeiten.",
    ],
  ),
  q(
    "harness-design-03",
    architecture,
    "Was macht der Anwendungsserver in der beschriebenen Architektur?",
    [
      "Er sendet Aufträge, empfängt Ereignisse und bearbeitet Funktionswerkzeuge.",
      "Diese Verantwortlichkeiten nennt die Architektur.",
    ],
    [
      "Er führt die Modellschleife im Sandbox-Prozess aus.",
      "Die Modellschleife liegt beim Harness.",
    ],
    [
      "Er ist der Speicherort für sämtliche Workspace-Dateien.",
      "Dateien liegen in der jeweiligen Umgebung.",
    ],
  ),
  q(
    "harness-design-04",
    architecture,
    "Ein Agent beantwortet Fragen ohne Shell und Dateien. Welche Umgebungswahl beschreibt die Doku?",
    [
      "`environment.type: none`",
      "Für reine Antwort- oder externe Toolaufgaben kann eine Umgebung entfallen.",
    ],
    [
      "`self_hosted` mit schreibbarem Checkout.",
      "Ein Checkout ist für diese Aufgabe nicht erforderlich.",
    ],
    [
      "`openai_hosted` mit Java-Build.",
      "Ein Build ist für eine reine Antwort nicht nötig.",
    ],
  ),
  q(
    "harness-design-05",
    architecture,
    "Welche Werkzeuge fehlen ohne Agentenumgebung im beschriebenen API-Modell?",
    [
      "Eingebaute Shell, apply-patch, Workspace-Dateien und Executor-MCPs.",
      "Die Architekturseite nennt diese Grenzen ausdrücklich.",
    ],
    [
      "Remote-MCP-Werkzeuge.",
      "Remote MCP kann das Harness auch ohne Umgebung erreichen.",
    ],
    [
      "Funktionswerkzeuge des Anwendungsservers.",
      "Diese können auch ohne Umgebung genutzt werden.",
    ],
  ),
  q(
    "harness-design-06",
    architecture,
    "Wann ist eine selbst betriebene Umgebung gegenüber einer gehosteten im Beispiel naheliegend?",
    [
      "Wenn eigene Infrastruktur, ein privates Netz oder spezielle Software nötig ist.",
      "Die Architekturseite nennt diese Gründe für `self_hosted`.",
    ],
    [
      "Wenn keinerlei Dateien oder Rechenleistung benötigt werden.",
      "Dann beschreibt die Doku `none` als Möglichkeit.",
    ],
    [
      "Wenn der Agent keine externen Werkzeuge nutzen darf.",
      "Die Umgebungswahl allein ist keine Werkzeugverbotsregel.",
    ],
  ),
  q(
    "harness-design-07",
    hosted,
    "Welche Komponente verbindet eine selbst betriebene Umgebung mit der Agentensitzung?",
    [
      "Der Executor `codex exec-server`.",
      "Der Executor nimmt Harness-Aufträge in der Umgebung entgegen.",
    ],
    [
      "Der Spring-Boot-Application-Context.",
      "Er ist keine Agents-API-Verbindungskomponente.",
    ],
    [
      "Ein Maven-Repository-Proxy.",
      "Er löst Build-Artefakte auf, verbindet aber keine Agentensitzung.",
    ],
  ),
  q(
    "harness-design-08",
    hosted,
    "Was kann der Executor in einer selbst betriebenen Umgebung tun?",
    [
      "Shellbefehle ausführen sowie Dateien und lokale MCPs verwenden.",
      "Die Doku beschreibt diese Fähigkeiten des Executors.",
    ],
    [
      "Den Anwendungs-API-Schlüssel sicher vor Agentencode verbergen.",
      "Der Anwendungsschlüssel soll außerhalb der Umgebung bleiben.",
    ],
    [
      "Den Modellanbieter ohne Harness ersetzen.",
      "Das Harness bleibt die steuernde Komponente.",
    ],
  ),
  q(
    "harness-design-09",
    hosted,
    "Wie baut der selbst betriebene Executor laut Doku die Verbindung auf?",
    [
      "Ausgehend über WebSocket nach Registrierung bei der API.",
      "Die Verbindung wird vom Executor ausgehend aufgebaut.",
    ],
    [
      "Durch eingehende Shell-Ports aus dem öffentlichen Internet.",
      "Die Doku beschreibt ausgehende Verbindungen.",
    ],
    [
      "Durch ein Git-Push-Ereignis pro Werkzeugaufruf.",
      "Git-Push ist kein Executor-Transport.",
    ],
  ),
  q(
    "harness-design-10",
    hosted,
    "Was soll eine selbst betriebene Umgebung vor dem Start des Agenten enthalten?",
    [
      "Die für die Aufgabe nötigen Dateien und Abhängigkeiten.",
      "Die Doku fordert die Vorbereitung der Umgebung.",
    ],
    [
      "Sämtliche Unternehmensdaten als Standardabbild.",
      "Die Vorbereitung soll auf benötigte Ressourcen begrenzt sein.",
    ],
    [
      "Den Anwendungsschlüssel im Git-Repository.",
      "Die Doku verlangt die Trennung dieses Schlüssels.",
    ],
  ),
  q(
    "harness-design-11",
    security,
    "Warum sollen unterschiedliche Kunden- oder Arbeitslasten isolierte Umgebungen nutzen?",
    [
      "Gemeinsam genutzte Umgebungen können Dateien und Zugangsdaten gegenseitig zugänglich machen.",
      "Die Sicherheitsdoku fordert Trennung, wenn Daten nicht geteilt werden sollen.",
    ],
    [
      "Weil ein Modell sonst keine Werkzeuge aufrufen kann.",
      "Isolation regelt Zugriff, nicht die grundsätzliche Toolfähigkeit.",
    ],
    [
      "Weil jede Umgebung einen anderen Java-Compiler braucht.",
      "Der Compiler ist nicht der angegebene Trennungsgrund.",
    ],
  ),
  q(
    "harness-design-12",
    security,
    "Welche Netzregel empfiehlt die Sandbox-Sicherheitsdoku?",
    [
      "Ausgehenden Zugriff auf genehmigte Endpunkte begrenzen.",
      "Die Doku empfiehlt eine Allowlist für ausgehenden Verkehr.",
    ],
    [
      "Jede Zieladresse für Build-Komfort freischalten.",
      "Das widerspricht der empfohlenen Begrenzung.",
    ],
    [
      "Netzregeln durch einen Warnsatz im Prompt ersetzen.",
      "Ein Prompt erzwingt keine Netzbegrenzung.",
    ],
  ),
  q(
    "harness-design-13",
    security,
    "Wo soll der Anwendungsschlüssel bei Agentencode-Ausführung bleiben?",
    [
      "Außerhalb der ausführbaren Agentenumgebung.",
      "Agentencode kann Werte in seiner Umgebung lesen.",
    ],
    [
      "Als Klartext in einer Workspace-Datei.",
      "Workspace-Dateien sind für den Agenten zugänglich.",
    ],
    [
      "Im Container-Image des Executors.",
      "Images können von Agentencode gelesen werden.",
    ],
  ),
  q(
    "harness-design-14",
    security,
    "Welche Eigenschaft soll ein Umgebungsschlüssel besitzen?",
    [
      "Auf das Verbinden der Umgebung begrenzte Rechte.",
      "Die Doku unterscheidet ihn vom breiter berechtigten Anwendungsschlüssel.",
    ],
    [
      "Rechte zum Verwalten aller Anwendungssitzungen.",
      "Diese Rechte gehören nicht in den Executor.",
    ],
    [
      "Zugriff auf sämtliche Drittanbieter-Datenquellen.",
      "Drittanbieter-Zugänge werden getrennt behandelt.",
    ],
  ),
  q(
    "harness-design-15",
    security,
    "Ein Agent braucht eine Drittanbieter-API. Wie können Zugangsdaten geschützt werden?",
    [
      "Ein vertrauenswürdiger Proxy ergänzt das Secret für genehmigte Ziele.",
      "Die Doku beschreibt einen Proxy außerhalb der Ausführungsumgebung.",
    ],
    [
      "Das Secret als Toolbeschreibung an den Agenten senden.",
      "Toolbeschreibungen können vom Agenten gelesen werden.",
    ],
    [
      "Das Secret in die vom Agenten bearbeitete Build-Datei schreiben.",
      "Damit gelangt es in den Arbeitsbereich.",
    ],
  ),
  q(
    "harness-design-16",
    security,
    "Welche Grenze hat das Injizieren eines Secrets als Umgebungsvariable?",
    [
      "Agentencode kann die Variable weiterhin lesen.",
      "Die Sicherheitsdoku nennt diese Exposition ausdrücklich.",
    ],
    [
      "Es macht den Schlüssel automatisch schreibgeschützt.",
      "Eine Umgebungsvariable schützt ihren Wert nicht vor Prozesscode.",
    ],
    [
      "Es ersetzt die Rechtebegrenzung des Schlüssels.",
      "Rechte müssen gesondert begrenzt werden.",
    ],
  ),
  q(
    "harness-design-17",
    mcp,
    "Welche Aufgabe übernimmt ein MCP-Server in der beschriebenen Werkzeugarchitektur?",
    [
      "Werkzeugdefinitionen veröffentlichen und Aufrufe ausführen.",
      "Die MCP-Doku nennt beides als Serveraufgabe.",
    ],
    [
      "Den Modellkontext als Git-Commit archivieren.",
      "Das ist keine MCP-Serveraufgabe.",
    ],
    [
      "Die Ergebnisbewertung ohne Testkriterien garantieren.",
      "Ein Werkzeugserver ersetzt keine Abnahme.",
    ],
  ),
  q(
    "harness-design-18",
    mcp,
    "Ein HTTP-MCP-Server ist öffentlich für den Dienst erreichbar. Welcher Verbindungsort ist beschrieben?",
    [
      "`connection_origin: service`",
      "Bei diesem Wert verbindet sich der OpenAI-Dienst direkt.",
    ],
    [
      "`connection_origin: environment`",
      "Dieser Wert verbindet aus der Session-Umgebung.",
    ],
    [
      "`transport: stdio`",
      "Stdio startet einen Prozess in der Umgebung statt HTTP zu verwenden.",
    ],
  ),
  q(
    "harness-design-19",
    mcp,
    "Ein MCP-Server liegt im privaten Netz der Agentenumgebung. Was passt laut Doku?",
    [
      "Eine Verbindung mit `connection_origin: environment`.",
      "Executor-MCPs verbinden aus der Umgebung zum privaten Server.",
    ],
    [
      "Eine Service-Verbindung zu `localhost` des OpenAI-Dienstes.",
      "Der private Server liegt nicht am Localhost des Dienstes.",
    ],
    [
      "Den Server als Modellinstruktion ohne Werkzeugverbindung beschreiben.",
      "Eine Instruktion stellt keinen MCP-Aufruf bereit.",
    ],
  ),
  q(
    "harness-design-20",
    mcp,
    "Was bedeutet `stdio` bei einer MCP-Verbindung in der Agents API?",
    [
      "Ein Serverprozess wird in der Agentenumgebung gestartet.",
      "Die Doku beschreibt stdio als Prozess in der Umgebung.",
    ],
    [
      "Eine HTTP-Verbindung des OpenAI-Dienstes.",
      "Das ist der Service-HTTP-Fall.",
    ],
    [
      "Eine Datei mit statischen Toolantworten.",
      "Stdio verbindet einen laufenden Prozess.",
    ],
  ),
  q(
    "harness-design-21",
    mcp,
    "Was ist bei einem lokalen MCP-Werkzeug vor Agentennutzung vorzubereiten?",
    [
      "Server und Abhängigkeiten in der Umgebung installieren.",
      "Die Doku fordert dies für den stdio-Server.",
    ],
    [
      "Den Anwendungsschlüssel in den Serverquelltext kopieren.",
      "Zugangsdaten gehören nicht in Quellcode.",
    ],
    [
      "Die Agentensitzung durch einen Git-Tag ersetzen.",
      "Ein Git-Tag stellt kein MCP-Werkzeug bereit.",
    ],
  ),
  q(
    "harness-design-22",
    sessions,
    "Was hält eine Agents-API-Sitzung für spätere Arbeit zusammen?",
    [
      "Agentenkonfiguration, Konversation und gespeicherte Arbeit.",
      "Die Sitzungsdoku nennt diese Bestandteile.",
    ],
    [
      "Nur den letzten Shell-Ausgabepuffer.",
      "Die Sitzung umfasst mehr als ein einzelnes Toolergebnis.",
    ],
    [
      "Ausschließlich den Build-Cache des Projekts.",
      "Ein Build-Cache ist nicht die Sitzungsdefinition.",
    ],
  ),
  q(
    "harness-design-23",
    sessions,
    "Was geschieht laut Sitzungsdoku mit einer Nachricht während eines aktiven Turns?",
    [
      "Sie steuert den laufenden Turn.",
      "Die Doku unterscheidet aktive von inaktiven Sitzungen.",
    ],
    [
      "Sie startet automatisch eine zweite unabhängige Sitzung.",
      "Die Nachricht bleibt in derselben Sitzung.",
    ],
    [
      "Sie wird als Git-Commit gespeichert.",
      "Ein Turn ist keine Git-Operation.",
    ],
  ),
  q(
    "harness-design-24",
    sessions,
    "Wie kann eine Anwendung asynchronen Agentenfortschritt verfolgen?",
    [
      "Über Streaming oder Zustandsänderungen per Webhook.",
      "Die Sitzungsdoku nennt beide Wege.",
    ],
    [
      "Über die Anzahl lokaler Java-Klassen.",
      "Klassenzahl zeigt keinen Turn-Fortschritt.",
    ],
    [
      "Über einen neuen Maven-Release pro Turn.",
      "Ein Release ist kein Fortschrittskanal.",
    ],
  ),
  q(
    "harness-design-25",
    hosted,
    "Eine Executor-Verbindung bricht kurz ab. Welches Verhalten beschreibt die Self-hosted-Doku?",
    [
      "Der Executor versucht erneut, die ausgehende Verbindung herzustellen.",
      "Die Doku beschreibt Reconnect bei Verbindungsabbruch.",
    ],
    [
      "Die Anwendung muss alle Repository-Dateien neu erzeugen.",
      "Ein Verbindungsabbruch verlangt keine solche Neuerstellung.",
    ],
    [
      "Das Harness verwirft alle Sitzungsdaten als Sicherheitsregel.",
      "Die Doku nennt Reconnect statt pauschalem Verwerfen.",
    ],
  ),
];
