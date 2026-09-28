import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const github =
  "https://docs.github.com/en/copilot/reference/custom-agents-configuration";
const openai =
  "https://developers.openai.com/api/docs/guides/agents-api/environments/security";

export const agentPermissionQuestions: Question[] = [
  q(
    "agent-permissions-01",
    github,
    "Ein Copilot-Custom-Agent-Profil lässt `tools` weg. Welcher Zugriff ergibt sich daraus?",
    [
      "Alle für diesen Agenten verfügbaren Werkzeuge sind aktiviert.",
      "GitHub dokumentiert den unbeschränkten Werkzeugumfang als Standard bei fehlender Liste.",
    ],
    [
      "Der Agent erhält einen Lesezugriff ohne Schreibrechte.",
      "Ohne Werkzeugliste gilt keine automatische Lesebeschränkung.",
    ],
    [
      "Der Agent kann kein konfiguriertes MCP-Werkzeug verwenden.",
      "Auch verfügbare MCP-Werkzeuge können ohne Beschränkung freigegeben sein.",
    ],
  ),
  q(
    "agent-permissions-02",
    github,
    "Ein Rechercheagent soll Dateien lesen und suchen, aber nichts ändern. Welche Werkzeugkonfiguration passt?",
    [
      "Eine explizite Liste mit `read` und `search`.",
      "Eine Allowlist beschränkt den Agenten auf die benannten Lesewerkzeuge.",
    ],
    [
      "Eine leere `tools`-Liste.",
      "Damit wären auch Lesen und Suchen deaktiviert.",
    ],
    [
      "Eine fehlende `tools`-Eigenschaft.",
      "Dann wären standardmäßig alle verfügbaren Werkzeuge aktiv.",
    ],
  ),
  q(
    "agent-permissions-03",
    github,
    "Was bewirkt `tools: []` im Profil eines Copilot-Custom-Agents?",
    [
      "Es deaktiviert sämtliche Werkzeuge für diesen Agenten.",
      "Die GitHub-Konfiguration verwendet die leere Liste zum Abschalten aller Tools.",
    ],
    [
      "Es aktiviert die Standardwerkzeuge der Laufzeit.",
      "Das geschieht bei fehlender `tools`-Eigenschaft, nicht bei leerer Liste.",
    ],
    [
      "Es aktiviert alle MCP-Werkzeuge des Repositories.",
      "Eine leere Liste gibt keine Werkzeuge frei.",
    ],
  ),
  q(
    "agent-permissions-04",
    github,
    "Ein Agent braucht aus einem MCP-Server genau ein Werkzeug. Welche Form begrenzt die Freigabe?",
    [
      "Den qualifizierten Namen `server/werkzeug` in `tools` eintragen.",
      "GitHub unterstützt MCP-Werkzeugnamen mit Serverpräfix.",
    ],
    [
      "Den Server mit `server/*` freigeben.",
      "Das Sternchen gibt alle Werkzeuge dieses Servers frei.",
    ],
    [
      "Die `tools`-Eigenschaft weglassen.",
      "Damit würden alle verfügbaren Werkzeuge freigegeben.",
    ],
  ),
  q(
    "agent-permissions-05",
    github,
    "Was bedeutet `server/*` in der Werkzeugliste eines Custom Agents?",
    [
      "Alle Werkzeuge des benannten MCP-Servers werden freigegeben.",
      "Die GitHub-Dokumentation beschreibt diese serverweite Schreibweise.",
    ],
    [
      "Ein einzelnes Werkzeug namens Sternchen wird freigegeben.",
      "Das Muster bezeichnet den gesamten Server-Werkzeugumfang.",
    ],
    [
      "Alle Werkzeuge sämtlicher MCP-Server werden freigegeben.",
      "Der Präfix begrenzt die Freigabe auf einen benannten Server.",
    ],
  ),
  q(
    "agent-permissions-06",
    github,
    "Welche Konfiguration erhöht den Werkzeugumfang eines Custom Agents auf alle verfügbaren Tools?",
    [
      '`tools: ["*"]`.',
      "GitHub dokumentiert den Stern als Freigabe sämtlicher verfügbarer Werkzeuge.",
    ],
    ["`tools: []`.", "Eine leere Liste deaktiviert Werkzeuge."],
    [
      '`tools: ["read"]`.',
      "Damit ist nur die benannte Werkzeugklasse freigegeben.",
    ],
  ),
  q(
    "agent-permissions-07",
    github,
    "Welche Werkzeugklasse passt zu einem Agenten, der Dateien ändern darf?",
    [
      "`edit`.",
      "Der GitHub-Alias `edit` umfasst Schreib- und Bearbeitungswerkzeuge.",
    ],
    [
      "`read`.",
      "`read` bezeichnet Dateilesen und gibt keine Bearbeitung frei.",
    ],
    [
      "`search`.",
      "`search` findet Dateien oder Text, bearbeitet sie aber nicht.",
    ],
  ),
  q(
    "agent-permissions-08",
    github,
    "Welche Werkzeugklasse gibt einem Custom Agent Shell-Ausführung?",
    [
      "`execute`.",
      "GitHub ordnet Shell-, Bash- und PowerShell-Werkzeuge dem Alias `execute` zu.",
    ],
    ["`search`.", "Dieser Alias ist für Suchen zuständig."],
    ["`read`.", "Dieser Alias erlaubt Dateiansicht, keine Shell-Ausführung."],
  ),
  q(
    "agent-permissions-09",
    github,
    "Ein Agent soll einen anderen Custom Agent aufrufen dürfen. Welcher Alias ist dafür relevant?",
    ["`agent`.", "GitHub ordnet Delegationswerkzeuge dem Alias `agent` zu."],
    ["`edit`.", "Bearbeitungswerkzeuge rufen keinen anderen Agenten auf."],
    [
      "`todo`.",
      "Dieser Alias verwaltet Aufgabenlisten, keine Agentendelegation.",
    ],
  ),
  q(
    "agent-permissions-10",
    github,
    "Was geschieht mit einem unbekannten Werkzeugnamen in der `tools`-Liste?",
    [
      "Er wird ignoriert.",
      "GitHub dokumentiert dieses Verhalten für produktübergreifende Agentenprofile.",
    ],
    [
      "Er schaltet automatisch alle Werkzeuge frei.",
      "Ein unbekannter Name ist keine Wildcard.",
    ],
    [
      "Er wird als Shell-Befehl interpretiert.",
      "Werkzeugnamen sind keine auszuführenden Befehle.",
    ],
  ),
  q(
    "agent-permissions-11",
    github,
    "Ein MCP-Server benötigt ein Geheimnis für den Copilot-Cloud-Agent. Wo wird es passend verwaltet?",
    [
      "Als Agents Secret auf Organisations- oder Repository-Ebene.",
      "GitHub verlangt dafür Agents Secrets oder Variables außerhalb des Profils.",
    ],
    [
      "Als Klartext im Agentenprompt.",
      "Ein Prompt ist kein geeigneter Speicher für Zugangsdaten.",
    ],
    [
      "Als Teil des Werkzeugnamens.",
      "Werkzeugnamen steuern Freigaben, nicht geheime Zugangsdaten.",
    ],
  ),
  q(
    "agent-permissions-12",
    github,
    "Welche Herkunft können MCP-Werkzeuge im Copilot-Custom-Agent-Profil haben?",
    [
      "Aus dem Profil und aus Repository-Einstellungen.",
      "GitHub beschreibt beide Konfigurationswege für MCP-Server.",
    ],
    [
      "Aus dem Prompttext des Agenten.",
      "MCP-Server werden technisch konfiguriert, nicht durch Freitext erzeugt.",
    ],
    [
      "Aus lokalen Browser-Erweiterungen.",
      "Die Dokumentation nennt Profil- und Repository-Konfiguration.",
    ],
  ),
  q(
    "agent-permissions-13",
    github,
    "Welche Einschränkung nennt GitHub für den eingebauten Playwright-MCP-Server des Cloud Agent?",
    [
      "Er ist auf localhost-Zugriffe konfiguriert.",
      "Die Dokumentation beschreibt diesen Netzwerkumfang für den eingebauten Server.",
    ],
    [
      "Er kann jede öffentliche Website als Browserziel öffnen.",
      "Die dokumentierte Voreinstellung begrenzt ihn auf localhost.",
    ],
    [
      "Er hat denselben Zugriff wie alle fremden MCP-Server.",
      "Für den eingebauten Server ist eine eigene Einschränkung dokumentiert.",
    ],
  ),
  q(
    "agent-permissions-14",
    github,
    "Wie ist das Token des eingebauten GitHub-MCP-Servers im Copilot-Cloud-Agent eingegrenzt?",
    [
      "Auf das Quell-Repository.",
      "GitHub beschreibt ein Token mit Repository-bezogenem Umfang.",
    ],
    [
      "Auf sämtliche Repositories der Organisation.",
      "Die Dokumentation nennt den engeren Bezug zum Quell-Repository.",
    ],
    [
      "Auf die lokale Browserhistorie.",
      "Das Token betrifft GitHub-Zugriff, nicht Browserhistorie.",
    ],
  ),
  q(
    "agent-permissions-15",
    openai,
    "Ein Agent führt generierten Code aus. Wovon hängt ab, welche Dateien er erreichen kann?",
    [
      "Von den Zugriffen seiner Ausführungsumgebung.",
      "OpenAI weist darauf hin, dass generierter Code Dateien, Zugangsdaten und Netzwerk der Umgebung nutzen kann.",
    ],
    [
      "Vom Wortlaut seiner Rollenbeschreibung allein.",
      "Ein Prompt begrenzt technische Umgebungsrechte nicht.",
    ],
    [
      "Von der Anzahl seiner bisherigen Antworten.",
      "Antwortzahl bestimmt keine Dateirechte.",
    ],
  ),
  q(
    "agent-permissions-16",
    openai,
    "Zwei Agenten-Workloads dürfen keine Daten teilen. Welche technische Maßnahme passt?",
    [
      "Getrennte isolierte Ausführungsumgebungen.",
      "Die Sandbox-Dokumentation empfiehlt separate Umgebungen für Workloads ohne gemeinsamen Datenzugriff.",
    ],
    [
      "Unterschiedliche Agentennamen im selben ungetrennten Prozess.",
      "Namen erzeugen keine technische Isolation.",
    ],
    [
      "Verschiedene Formulierungen im Prompt.",
      "Prompts trennen weder Dateien noch Prozesszugriff.",
    ],
  ),
  q(
    "agent-permissions-17",
    openai,
    "Wie sollte ausgehender Netzwerkverkehr einer Agenten-Sandbox begrenzt werden?",
    [
      "Auf freigegebene Zieladressen einschließlich nötiger Infrastrukturhosts.",
      "OpenAI empfiehlt eine Allowlist für ausgehende Verbindungen.",
    ],
    [
      "Durch einen Hinweis im Prompt bei unverändert offenem Netzwerk.",
      "Ein Hinweis ist keine Netzwerkregel.",
    ],
    [
      "Durch eine größere Kontextlänge des Modells.",
      "Kontextlänge steuert keinen Netzwerkzugriff.",
    ],
  ),
  q(
    "agent-permissions-18",
    openai,
    "Von wo verbinden sich Executor-MCPs in der Agents API?",
    [
      "Aus der eigenen Ausführungsumgebung.",
      "Die Dokumentation unterscheidet Executor-MCP-Verbindungen aus der Umgebung von Remote-MCPs.",
    ],
    [
      "Aus dem Browser des Lernenden.",
      "Der Executor nutzt die konfigurierte Laufzeitumgebung.",
    ],
    [
      "Aus dem Git-Verlauf des Repositories.",
      "Git-Historie ist keine Verbindungsquelle.",
    ],
  ),
  q(
    "agent-permissions-19",
    openai,
    "Von wo verbinden sich Remote-MCPs in der Agents API zu ihren Endpunkten?",
    [
      "Aus dem OpenAI-Dienst.",
      "Die Endpunkte müssen für den Dienst erreichbar sein.",
    ],
    [
      "Aus jedem lokalen Worktree des Nutzers.",
      "Ein Worktree ist nicht der dokumentierte Verbindungsort.",
    ],
    [
      "Aus dem Quelltext der Anwendung.",
      "Quelltext stellt keine Netzwerkverbindung her.",
    ],
  ),
  q(
    "agent-permissions-20",
    openai,
    "Wo sollte der Anwendungs-API-Schlüssel relativ zur Agenten-Sandbox liegen?",
    [
      "Außerhalb der Ausführungsumgebung.",
      "Generierter Code könnte Schlüssel innerhalb der Umgebung lesen; OpenAI empfiehlt Trennung.",
    ],
    [
      "In einer Textdatei im sichtbaren Arbeitsverzeichnis.",
      "Damit wäre er für Agentencode lesbar.",
    ],
    [
      "Im Agentenprompt, damit er bei Bedarf verfügbar ist.",
      "Ein Prompt schützt keinen geheimen Schlüssel.",
    ],
  ),
  q(
    "agent-permissions-21",
    openai,
    "Was ist beim Umgebungsschlüssel der Agents-API-Ausführung zu beachten?",
    [
      "Agentengenerierter Code kann ihn lesen; sein API-Umfang muss deshalb eng sein.",
      "Der Executor-Schlüssel ist lesbar und auf Umgebungsverbindung begrenzt.",
    ],
    [
      "Er besitzt automatisch sämtliche Anwendungs-API-Rechte.",
      "Der dokumentierte Executor-Schlüssel autorisiert keine anderen API-Aktionen.",
    ],
    [
      "Er wird vor dem generierten Code unsichtbar gehalten.",
      "Die Dokumentation warnt ausdrücklich vor seiner Lesbarkeit.",
    ],
  ),
  q(
    "agent-permissions-22",
    openai,
    "Wie lassen sich Zugangsdaten für Drittdienste bei Sandbox-Anfragen besser schützen?",
    [
      "Ein vertrauenswürdiger Proxy ergänzt sie für genehmigte Ziele außerhalb der Sandbox.",
      "OpenAI beschreibt diesen Broker-Ansatz für externe Zugriffe.",
    ],
    [
      "Der Agent schreibt sie vor jedem Aufruf in den Quelltext.",
      "Das würde die Zugangsdaten dem Agentencode offenlegen.",
    ],
    [
      "Der Agent sendet sie über beliebige ausgehende Verbindungen.",
      "Das unterläuft die begrenzten Netzwerk- und Geheimnisrechte.",
    ],
  ),
  q(
    "agent-permissions-23",
    openai,
    "Wo sollten Zugangsdaten eines anwendungsseitigen Function Tools verbleiben?",
    [
      "In der Anwendung, die den Funktionsaufruf bearbeitet.",
      "Die Sandbox-Sicherheitsanleitung empfiehlt, dem Agenten nur das Ergebnis zurückzugeben.",
    ],
    [
      "Im Antworttext des Tools an den Agenten.",
      "Dann könnte der Agent den Schlüssel weiterverwenden oder offenlegen.",
    ],
    [
      "In der Frage des Endnutzers.",
      "Nutzereingaben sind kein sicherer Geheimnisspeicher.",
    ],
  ),
  q(
    "agent-permissions-24",
    openai,
    "Was bleibt riskant, wenn ein gespeichertes Secret als Umgebungsvariable direkt in die Sandbox injiziert wird?",
    [
      "Agentengenerierter Code kann den Wert weiterhin lesen.",
      "Die Dokumentation warnt vor der Offenlegung injizierter Secrets an den Code.",
    ],
    [
      "Die Sandbox verliert dadurch ihre Netzwerkkonfiguration.",
      "Eine Secret-Injektion ändert die Netzwerkregeln nicht automatisch.",
    ],
    [
      "Die Variable ist für jeden Prozess unsichtbar.",
      "Gerade ihre Lesbarkeit ist das beschriebene Risiko.",
    ],
  ),
  q(
    "agent-permissions-25",
    openai,
    "Ein Zugangsschlüssel könnte offengelegt worden sein. Welche Reaktion gehört zur technischen Absicherung?",
    [
      "Den Schlüssel widerrufen oder rotieren.",
      "OpenAI empfiehlt bei Verdacht auf Offenlegung sofortiges Widerrufen und regelmäßige Rotation.",
    ],
    [
      "Den Agenten um eine vertrauliche Behandlung bitten und den Schlüssel beibehalten.",
      "Ein Prompt stellt die Vertraulichkeit eines möglichen Lecks nicht wieder her.",
    ],
    [
      "Den Agentennamen ändern.",
      "Ein anderer Name macht einen kompromittierten Schlüssel nicht ungültig.",
    ],
  ),
];
