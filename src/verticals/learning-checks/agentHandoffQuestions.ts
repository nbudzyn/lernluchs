import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const sdk = "https://openai.github.io/openai-agents-python/handoffs/";
const guide =
  "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/";

export const agentHandoffQuestions: Question[] = [
  q(
    "agent-handoff-01",
    guide,
    "Ein Spezialagent soll die Unterhaltung und weitere Bearbeitung übernehmen. Welches Orchestrierungsmuster passt?",
    [
      "Eine dezentrale Übergabe an den Spezialagenten.",
      "Bei einem Handoff wechselt die Ausführung zum empfangenden Agenten.",
    ],
    [
      "Ein Manager, der den Spezialagenten als Werkzeug aufruft.",
      "Im Manager-Muster behält die zentrale Instanz die Ausführungskontrolle.",
    ],
    [
      "Ein zusätzlicher Toolaufruf ohne Übergabe der Ausführung.",
      "Ein Toolaufruf allein überträgt die Unterhaltung nicht an den Spezialagenten.",
    ],
  ),
  q(
    "agent-handoff-02",
    guide,
    "Die Hauptinstanz soll Nutzerkontakt und Gesamtsynthese behalten. Wie bindet sie einen Spezialagenten ein?",
    [
      "Sie ruft ihn im Manager-Muster als Werkzeug auf.",
      "Der Manager delegiert Teilaufgaben und synthetisiert die Rückgaben.",
    ],
    [
      "Sie übergibt die Gesprächsführung dauerhaft an ihn.",
      "Das wäre das dezentrale Handoff-Muster.",
    ],
    [
      "Sie lässt beide Agenten ohne koordinierende Instanz antworten.",
      "Das erfüllt den gewünschten zentralen Nutzerkontakt nicht.",
    ],
  ),
  q(
    "agent-handoff-03",
    sdk,
    "Wie erscheint ein Handoff zu einem spezialisierten Agenten im OpenAI Agents SDK für das Modell?",
    [
      "Als aufrufbares Werkzeug für die Übergabe.",
      "Das SDK repräsentiert Handoffs als Tools, etwa `transfer_to_refund_agent`.",
    ],
    [
      "Als Änderung des Modells ohne Toolaufruf.",
      "Das Modell ruft für die Übergabe ein Handoff-Werkzeug auf.",
    ],
    [
      "Als neue unabhängige Browser-Sitzung.",
      "Die Dokumentation beschreibt einen Agentenwechsel im laufenden Ablauf.",
    ],
  ),
  q(
    "agent-handoff-04",
    sdk,
    "Was sieht der empfangende Agent bei einem Handoff standardmäßig vom bisherigen Gespräch?",
    [
      "Die bisherige Gesprächshistorie.",
      "Ohne Filter übernimmt der neue Agent standardmäßig die gesamte vorherige Historie.",
    ],
    [
      "Den letzten Satz des sendenden Agenten.",
      "Die Historie wird standardmäßig umfassender weitergegeben.",
    ],
    [
      "Eine automatisch bereinigte Liste aller Geheimnisse.",
      "Eine automatische Redaktion sensibler Daten wird nicht zugesagt.",
    ],
  ),
  q(
    "agent-handoff-05",
    sdk,
    "Welcher SDK-Mechanismus verändert gezielt die Historie, die der empfangende Agent erhält?",
    [
      "Ein `input_filter` für das Handoff.",
      "Der Filter kann die Eingabe für den nächsten Agenten neu zusammensetzen.",
    ],
    [
      "Eine längere `handoff_description`.",
      "Die Beschreibung hilft bei der Auswahl, filtert aber keine Historie.",
    ],
    [
      "Ein neuer Name für das Handoff-Werkzeug.",
      "Ein anderer Toolname ändert nicht den übertragenen Kontext.",
    ],
  ),
  q(
    "agent-handoff-06",
    sdk,
    "Welche Angabe transportiert `input_type` beim Handoff passend?",
    [
      "Eine kleine, vom Modell erzeugte Begründung für die Weitergabe.",
      "Das Schema ist für Metadaten wie Grund oder Priorität gedacht.",
    ],
    [
      "Die bereits lokal vorhandene Datenbankverbindung.",
      "Bestehende Anwendungsabhängigkeiten gehören in den Laufzeitkontext.",
    ],
    [
      "Die vollständige neue Gesprächshistorie.",
      "Für die sichtbare Historie sind Filter oder History-Mapping zuständig.",
    ],
  ),
  q(
    "agent-handoff-07",
    sdk,
    "Wohin gehören beim SDK-Handoff bereits vorhandene Anwendungsdaten und Abhängigkeiten?",
    [
      "In den Laufzeitkontext (`RunContextWrapper.context`).",
      "Die Dokumentation trennt vorhandenen Anwendungszustand von modellgenerierten Handoff-Metadaten.",
    ],
    [
      "In `input_type` als Modellentscheidung.",
      "`input_type` ist für vom Modell erzeugte Metadaten beim Handoff.",
    ],
    [
      "In den Namen des empfangenden Agenten.",
      "Ein Agentenname ist kein Speicher für Anwendungszustand.",
    ],
  ),
  q(
    "agent-handoff-08",
    sdk,
    "Zwei Spezialagenten sind mögliche Handoff-Ziele. Wie werden sie mit `handoff()` angeboten?",
    [
      "Mit einem eigenen Handoff je Ziel.",
      "Der Helfer `handoff()` bindet ein konkretes Ziel; mehrere Ziele brauchen mehrere Handoffs.",
    ],
    [
      "Mit einem Handoff und einer beliebigen Ziel-ID in `input_type`.",
      "`input_type` wählt beim Helfer kein anderes Ziel.",
    ],
    [
      "Mit einem gemeinsamen Handoff ohne Zielagenten.",
      "Der Helfer benötigt den Zielagenten.",
    ],
  ),
  q(
    "agent-handoff-09",
    sdk,
    "Wozu dient `handoff_description` bei einem direkt eingetragenen Agenten?",
    [
      "Sie gibt dem Modell einen Hinweis, wann dieser Handoff passend ist.",
      "Die Beschreibung ergänzt die Standardbeschreibung des Handoff-Tools.",
    ],
    [
      "Sie ersetzt die Eingabefilterung für vertrauliche Daten.",
      "Eine Beschreibung verändert die übertragene Historie nicht.",
    ],
    [
      "Sie bestätigt den Erfolg des nachfolgenden Agentenlaufs.",
      "Die Beschreibung hilft bei der Auswahl, nicht bei der Ergebnisprüfung.",
    ],
  ),
  q(
    "agent-handoff-10",
    sdk,
    "Wann wird `on_handoff` im SDK aufgerufen?",
    [
      "Wenn das Handoff ausgelöst wird, vor der weiteren Bearbeitung durch den Zielagenten.",
      "Der Callback wird beim Handoff ausgeführt und kann Vorarbeiten anstoßen.",
    ],
    [
      "Erst nach dem endgültigen Ergebnis des Zielagenten.",
      "Der Callback gehört zur Übergabe selbst.",
    ],
    [
      "Bei jeder Ausgabe des sendenden Agenten.",
      "Er wird durch die Handoff-Ausführung ausgelöst.",
    ],
  ),
  q(
    "agent-handoff-11",
    sdk,
    "Wofür kann `is_enabled` bei einem Handoff verwendet werden?",
    [
      "Um das Handoff vor der Modellauswahl dynamisch anzubieten oder auszublenden.",
      "Die Einstellung wird beim Vorbereiten verfügbarer Handoffs ausgewertet.",
    ],
    [
      "Um die Felder eines bereits erzeugten Handoff-Arguments zu genehmigen.",
      "Zu diesem Zeitpunkt liegen die Argumentwerte noch nicht vor.",
    ],
    [
      "Um die vollständige Eingabe des Zielagenten zu anonymisieren.",
      "Die Option steuert Verfügbarkeit, nicht Eingabebereinigung.",
    ],
  ),
  q(
    "agent-handoff-12",
    sdk,
    "Ein Handoff darf von einem erzeugten Feld `priority` abhängen. Wo muss die Berechtigung vor Nebenwirkungen geprüft werden?",
    [
      "Zu Beginn von `on_handoff` anhand der geparsten Felder.",
      "`is_enabled` kennt die späteren Argumentwerte noch nicht; der Callback muss bei Ablehnung abbrechen.",
    ],
    [
      "In `is_enabled` anhand des künftigen Feldwerts.",
      "Die Feldwerte sind bei der Vorbereitung von `is_enabled` noch unbekannt.",
    ],
    [
      "Erst nach erfolgreichem Wechsel beim Zielagenten.",
      "Dann könnten Nebenwirkungen bereits erfolgt sein.",
    ],
  ),
  q(
    "agent-handoff-13",
    sdk,
    "Was passiert mit `input_type`-Daten vor dem Aufruf von `on_handoff`?",
    [
      "Das SDK validiert das JSON lokal und übergibt den geparsten Wert.",
      "Das Schema wird als Toolparameter angeboten und das Ergebnis vor dem Callback validiert.",
    ],
    [
      "Das SDK ersetzt damit automatisch die gesamte Gesprächshistorie.",
      "Handoff-Metadaten und Historie sind getrennte Eingaben.",
    ],
    [
      "Das SDK behandelt die Daten als frei wählbaren Zielagenten.",
      "Der Zielagent bleibt bei `handoff()` festgelegt.",
    ],
  ),
  q(
    "agent-handoff-14",
    sdk,
    "Was leistet `input_type` allein ausdrücklich nicht?",
    [
      "Es ändert weder das Handoff-Ziel noch die sichtbare Gesprächshistorie.",
      "Das Schema beschreibt Toolargumente, nicht Routing oder History-Filterung.",
    ],
    [
      "Es erlaubt eine strukturierte Handoff-Begründung.",
      "Gerade dafür ist `input_type` gedacht.",
    ],
    [
      "Es lässt sich an `on_handoff` übergeben.",
      "Der Callback kann die validierten Daten erhalten.",
    ],
  ),
  q(
    "agent-handoff-15",
    sdk,
    "Welche Eingabe ist sinnvoll, wenn ein Spezialagent strukturiert helfen, aber die Gesprächsführung nicht übernehmen soll?",
    [
      "Der Spezialagent als Tool mit Parametern (`Agent.as_tool`).",
      "Die SDK-Dokumentation empfiehlt dies für verschachtelte Spezialarbeit ohne Kontrollübergabe.",
    ],
    [
      "Ein Handoff mit vollständiger Historie.",
      "Ein Handoff überträgt die Ausführung an den Spezialagenten.",
    ],
    [
      "Ein Handoff mit anderem Werkzeugnamen.",
      "Der Name ändert die Übergabesemantik nicht.",
    ],
  ),
  q(
    "agent-handoff-16",
    sdk,
    "Was enthält `HandoffInputData.new_items`?",
    [
      "Elemente des aktuellen Turns einschließlich Handoff-Aufruf und dessen Ausgabe.",
      "Die SDK-Dokumentation beschreibt diese Bestandteile ausdrücklich.",
    ],
    [
      "Die gesamte Historie vor Beginn des Runs.",
      "Dieser Teil steht in `input_history`.",
    ],
    [
      "Die globalen Abhängigkeiten der Anwendung.",
      "Anwendungsabhängigkeiten liegen im Laufzeitkontext.",
    ],
  ),
  q(
    "agent-handoff-17",
    sdk,
    "Wozu dient `HandoffInputData.input_items`?",
    [
      "Es kann ausgewählte Elemente an das Modell des Zielagenten weitergeben.",
      "`input_items` kann `new_items` für die nächste Modelleingabe ersetzen.",
    ],
    [
      "Es ersetzt den Zielagenten durch einen anderen.",
      "Die Zielwahl liegt nicht bei diesem Eingabefeld.",
    ],
    [
      "Es aktiviert automatisch alle abgeschalteten Handoffs.",
      "Die Verfügbarkeit wird separat konfiguriert.",
    ],
  ),
  q(
    "agent-handoff-18",
    sdk,
    "Welche Gefahr bleibt bei einer kompakten, verschachtelten Handoff-Historie?",
    [
      "Sensible Daten können in generierten Zusammenfassungen erhalten bleiben.",
      "Die Dokumentation warnt, dass kompakte Historie keine Redaktion ist.",
    ],
    [
      "Die Zusammenfassung verhindert jede Übergabe.",
      "Die Funktion verändert die Darstellung der Historie, nicht die Möglichkeit der Übergabe.",
    ],
    [
      "Toolausgaben werden damit zwangsläufig korrekt geprüft.",
      "Eine Zusammenfassung prüft den Wahrheitsgehalt nicht.",
    ],
  ),
  q(
    "agent-handoff-19",
    sdk,
    "Wie lässt sich bei clientseitig verwalteter Historie verhindern, dass der nächste Agent vertrauliche Toolausgaben sieht?",
    [
      "Mit einem ausdrücklich auswählenden oder redigierenden Handoff-Filter.",
      "Die Dokumentation empfiehlt explizite Filter für Inhalte der Empfängereingabe.",
    ],
    [
      "Durch Umbenennen des Zielagenten.",
      "Ein neuer Name entfernt keine Daten aus der Historie.",
    ],
    [
      "Durch eine kürzere Handoff-Beschreibung.",
      "Eine Beschreibung filtert keine Toolausgaben.",
    ],
  ),
  q(
    "agent-handoff-20",
    sdk,
    "Welcher Filter gilt, wenn sowohl das Handoff als auch der Run einen Eingabefilter festlegen?",
    [
      "Der Filter des konkreten Handoffs.",
      "Die SDK-Dokumentation gibt dem Handoff-spezifischen Filter Vorrang.",
    ],
    [
      "Der Filter des Runs in jedem Fall.",
      "Die dokumentierte Vorrangregel ist umgekehrt.",
    ],
    [
      "Beide Filter werden in beliebiger Reihenfolge angewendet.",
      "Die Dokumentation nennt eine klare Vorrangregel.",
    ],
  ),
  q(
    "agent-handoff-21",
    sdk,
    "Welche Grenze gilt für Handoff-Eingabefilter bei serverseitig verwalteten Konversationen?",
    [
      "Diese Konversationsform unterstützt die Filter nicht.",
      "Für eine gefilterte Übergabe ist ein separater Run mit expliziter Eingabe nötig.",
    ],
    [
      "Sie filtern zusätzlich automatisch gespeicherte Serverhistorie.",
      "Die SDK-Dokumentation weist gerade auf die fehlende Unterstützung hin.",
    ],
    [
      "Sie wechseln automatisch zu clientseitiger Verwaltung.",
      "Ein solcher automatischer Wechsel ist nicht beschrieben.",
    ],
  ),
  q(
    "agent-handoff-22",
    sdk,
    "Ein Handoff soll für den delegierenden Agenten einen aufgabenspezifischen Werkzeugnamen erhalten. Welche SDK-Einstellung passt?",
    [
      "Den Werkzeugnamen mit `tool_name_override` setzen.",
      "Diese Handoff-Option überschreibt den Namen des für das Modell sichtbaren Übergabewerkzeugs.",
    ],
    [
      "Die Werkzeugbeschreibung mit `tool_description_override` setzen.",
      "Diese Option ändert die Beschreibung, nicht den Werkzeugnamen.",
    ],
    [
      "Das Eingabeschema des Handoffs mit `input_type` setzen.",
      "`input_type` definiert Übergabedaten und benennt das Werkzeug nicht um.",
    ],
  ),
  q(
    "agent-handoff-23",
    guide,
    "Wann kann eine Aufteilung in weitere Agenten laut praktischem Leitfaden sinnvoll werden?",
    [
      "Wenn komplexe Anweisungen oder ähnliche Werkzeuge trotz Klärung wiederholt fehlgeleitet werden.",
      "Der Leitfaden nennt komplexe Logik und Werkzeugüberladung als Gründe.",
    ],
    [
      "Sobald ein Agent mehr als eine Funktion besitzt.",
      "Ein einzelner Agent kann viele Aufgaben mit geeigneten Werkzeugen bewältigen.",
    ],
    [
      "Sobald ein Gespräch mehr als einen Turn dauert.",
      "Die Gesprächslänge allein begründet keine Aufteilung.",
    ],
  ),
  q(
    "agent-handoff-24",
    sdk,
    "Was muss ein `input_filter` im Agents SDK zurückgeben?",
    [
      "Ein neu zusammengestelltes `HandoffInputData`.",
      "Der Filter erhält und liefert diese Eingabestruktur.",
    ],
    [
      "Einen beliebigen Namen für den Zielagenten.",
      "Der Filter gestaltet Eingabe, nicht Zielwahl.",
    ],
    [
      "Eine Bestätigung der fachlichen Korrektheit.",
      "Der Filter prüft nicht automatisch die Arbeit des Agenten.",
    ],
  ),
  q(
    "agent-handoff-25",
    sdk,
    "Welche Guardrail-Grenze ist bei einer Agentenkette mit Handoffs zu beachten?",
    [
      "Input-Guardrails greifen für den ersten Agenten, Output-Guardrails für den finalen Ausgeber.",
      "Die SDK-Dokumentation beschreibt diese Geltung innerhalb eines Runs.",
    ],
    [
      "Jeder Handoff erhält automatisch dieselben Tool-Input-Guardrails wie Funktionstools.",
      "Tool-Input-Guardrails gelten dort für Funktionstools, nicht für Handoffs.",
    ],
    [
      "Ein Handoff prüft selbständig alle späteren Toolaufrufe.",
      "Werkzeugaufrufe benötigen eigene passende Guardrails.",
    ],
  ),
];
