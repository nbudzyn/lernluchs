import type { Question } from "../../shared/question";
import { q } from "./questionFactory";

const research =
  "https://www.anthropic.com/engineering/multi-agent-research-system";
const evals = "https://developers.openai.com/api/docs/guides/agent-evals";

export const parallelComparisonQuestions: Question[] = [
  q(
    "parallel-comparison-01",
    research,
    "Für welche Art von Recherche nennt Anthropic parallele Subagenten besonders geeignet?",
    [
      "Breite Fragen mit unabhängigen Suchrichtungen.",
      "Der Bericht nennt breadth-first Fragen mit trennbaren Richtungen.",
    ],
    [
      "Eine kurze Faktenabfrage mit festem Suchpfad.",
      "Dafür empfiehlt der Bericht weniger Aufwand.",
    ],
    [
      "Aufgaben, bei denen alle Agenten denselben Zustand fortlaufend ändern.",
      "Gemeinsamer Zustand erhöht die Koordination.",
    ],
  ),
  q(
    "parallel-comparison-02",
    research,
    "Welche Funktion haben getrennte Kontextfenster der Subagenten im beschriebenen Research-System?",
    [
      "Verschiedene Aspekte unabhängig untersuchen und Ergebnisse verdichten.",
      "Der Bericht beschreibt Subagenten als Filter und Verdichter.",
    ],
    [
      "Einen gemeinsamen Kontext ohne Übergaben synchron halten.",
      "Die Subagenten arbeiten mit getrennten Kontexten.",
    ],
    [
      "Die Ergebnisse ohne Leitagent direkt veröffentlichen.",
      "Ein Lead Agent führt die Ergebnisse zusammen.",
    ],
  ),
  q(
    "parallel-comparison-03",
    research,
    "Welche Rolle übernimmt der Lead Agent im beschriebenen Mehragentensystem?",
    [
      "Aufteilen, koordinieren und Ergebnisse zusammenführen.",
      "Der Lead Agent plant und synthetisiert die Subagenten-Ergebnisse.",
    ],
    [
      "Jede Subagenten-Suche identisch wiederholen.",
      "Die Subagenten bearbeiten verschiedene Teilrichtungen.",
    ],
    [
      "Die Quellenprüfung durch zusätzliche Agentenanzahl ersetzen.",
      "Der Bericht behandelt Quellenqualität als eigenes Prüfkriterium.",
    ],
  ),
  q(
    "parallel-comparison-04",
    research,
    "Was spricht laut Anthropic bei stark voneinander abhängigen Teilaufgaben gegen Parallelisierung?",
    [
      "Der gemeinsame Kontext und die nötige Koordination begrenzen den Nutzen.",
      "Der Bericht nennt Abhängigkeiten und geteilten Kontext als Schwäche.",
    ],
    [
      "Die Aufgaben benötigen zwangsläufig verschiedene Modelle.",
      "Die Modellwahl ist nicht die beschriebene Abhängigkeitsgrenze.",
    ],
    [
      "Parallele Agenten können keine Werkzeuge verwenden.",
      "Das System nutzt Werkzeuge in den Subagenten.",
    ],
  ),
  q(
    "parallel-comparison-05",
    research,
    "Welche Einordnung gilt für Anthropic-Messwerte zur Mehragentenleistung?",
    [
      "Es sind interne Ergebnisse für Research-Aufgaben, kein allgemeiner Coding-Nachweis.",
      "Der Bericht beschreibt Research-Evals und grenzt Coding als weniger parallelisierbar ab.",
    ],
    [
      "Sie gelten gleichermaßen für jedes Java-Upgrade.",
      "Ein Research-Benchmark misst kein konkretes Java-Upgrade.",
    ],
    [
      "Sie beweisen, dass mehrere Agenten geringere Kosten verursachen.",
      "Der Bericht nennt höhere Tokenkosten.",
    ],
  ),
  q(
    "parallel-comparison-06",
    research,
    "Welche Kostenbeobachtung macht Anthropic zu seinem Mehragentenansatz?",
    [
      "Er kann erheblich mehr Tokens verbrauchen als ein Chat-Ablauf.",
      "Anthropic berichtet für sein System deutlich höheren Tokenverbrauch.",
    ],
    [
      "Parallele Arbeit senkt den Tokenverbrauch proportional zur Laufzeit.",
      "Der Bericht meldet höhere, nicht proportional sinkende Tokenkosten.",
    ],
    [
      "Tokenverbrauch entfällt, wenn Subagenten eigene Kontexte haben.",
      "Getrennte Kontexte kosten zusätzliche Tokens.",
    ],
  ),
  q(
    "parallel-comparison-07",
    research,
    "Was unterscheidet parallele Subagenten von parallelen Werkzeugaufrufen im Anthropic-Bericht?",
    [
      "Subagenten verfolgen Teilaufgaben; Werkzeugaufrufe beschleunigen Schritte innerhalb eines Agenten.",
      "Der Bericht nennt beide Parallelisierungsebenen getrennt.",
    ],
    [
      "Beide Begriffe bezeichnen dieselbe zusätzliche Agenteninstanz.",
      "Werkzeugaufrufe sind eine andere Ebene.",
    ],
    [
      "Werkzeugaufrufe ersetzen den Leitagenten.",
      "Der Leitagent bleibt für Koordination zuständig.",
    ],
  ),
  q(
    "parallel-comparison-08",
    research,
    "Welche Schwierigkeit nennt Anthropic für synchrone Subagenten-Ausführung?",
    [
      "Ein langsamer Subagent kann den wartenden Leitagenten blockieren.",
      "Der Bericht beschreibt diesen Koordinationsengpass.",
    ],
    [
      "Der Leitagent kann Subagenten währenddessen beliebig umsteuern.",
      "Gerade das wird bei synchronem Warten als Grenze genannt.",
    ],
    [
      "Synchronität beseitigt die Fehlerweitergabe.",
      "Sie vereinfacht Koordination, löst aber Fehler nicht automatisch.",
    ],
  ),
  q(
    "parallel-comparison-09",
    research,
    "Welchen zusätzlichen Aufwand würde asynchrone Subagenten-Arbeit laut Bericht schaffen?",
    [
      "Koordination von Ergebnissen, Zustand und Fehlern.",
      "Diese drei Punkte nennt Anthropic als Herausforderungen.",
    ],
    [
      "Eine feste Reihenfolge für alle Suchanfragen.",
      "Asynchronität lockert die feste Wartefolge.",
    ],
    [
      "Den Wegfall aller Übergaben.",
      "Asynchrone Ergebnisse müssen weiterhin integriert werden.",
    ],
  ),
  q(
    "parallel-comparison-10",
    research,
    "Wie soll die Agentenzahl bei unterschiedlich komplexen Aufgaben gewählt werden?",
    [
      "Den Aufwand an die Komplexität und unabhängigen Teilrichtungen anpassen.",
      "Anthropic beschreibt Skalierungsregeln nach Aufgabenkomplexität.",
    ],
    [
      "Für jeden Auftrag dieselbe Agentenzahl verwenden.",
      "Feste Überbesetzung einfacher Aufgaben wurde als Problem genannt.",
    ],
    [
      "Die Agentenzahl aus der Zahl der Repository-Dateien ableiten.",
      "Dateizahl ist nicht die genannte Entscheidungsgröße.",
    ],
  ),
  q(
    "parallel-comparison-11",
    research,
    "Mit welcher Stichprobe begann Anthropic frühe Evaluierungen seines Research-Systems?",
    [
      "Mit etwa 20 repräsentativen Rechercheanfragen.",
      "Der Bericht nennt ungefähr 20 Beispiele aus realen Nutzungsmustern.",
    ],
    [
      "Mit sämtlichen späteren Produktionsanfragen.",
      "Der frühe Test begann mit einer kleinen, ausgewählten Stichprobe.",
    ],
    [
      "Mit einer festen Liste identischer Werkzeugaufrufe.",
      "Die Fälle waren Anfragen; Agenten konnten unterschiedliche Wege nehmen.",
    ],
  ),
  q(
    "parallel-comparison-12",
    research,
    "Ein paralleler Ablauf ist schneller, liefert aber mehr Defekte. Welche Aussage ist belastbar?",
    [
      "Zeit und Ergebnisqualität müssen getrennt ausgewiesen werden.",
      "Der Bericht bewertet Genauigkeit und andere Ergebnisdimensionen getrennt.",
    ],
    [
      "Die kürzere Laufzeit belegt bereits den besseren Ablauf.",
      "Geschwindigkeit allein deckt Qualitätsmängel nicht ab.",
    ],
    [
      "Defekte zählen bei paralleler Arbeit weniger.",
      "Der Bericht macht keine solche Ausnahme.",
    ],
  ),
  q(
    "parallel-comparison-13",
    research,
    "Ein Research-Bericht enthält zutreffende Fakten, doch mehrere Quellenangaben belegen die jeweiligen Aussagen nicht. Welches Prüfkriterium erfasst diesen Fehler direkt?",
    [
      "Zitiergenauigkeit: Stützen die angegebenen Quellen die Aussagen?",
      "Anthropic bewertet citation accuracy als eigenes Kriterium für den Bezug zwischen Aussage und Quelle.",
    ],
    [
      "Vollständigkeit: Sind alle angefragten Aspekte enthalten?",
      "Vollständigkeit betrifft fehlende Inhalte; hier tragen einzelne Belege ihre Aussagen nicht.",
    ],
    [
      "Werkzeugeffizienz: Wurden passende Suchwerkzeuge eingesetzt?",
      "Die Werkzeugwahl erklärt nicht, ob ein Quellenverweis die konkrete Aussage trägt.",
    ],
  ),
  q(
    "parallel-comparison-14",
    research,
    "Ein einzelner Parallelversuch war erfolgreich. Was lässt sich daraus ableiten?",
    [
      "Ein Ergebnis für diese Aufgabe; weitere Stichproben sind für Verallgemeinerung nötig.",
      "Anthropic empfiehlt repräsentative Testfälle und wiederholte Evaluation.",
    ],
    [
      "Ein allgemeiner Vorteil für alle Coding-Aufgaben.",
      "Der Bericht nennt Coding sogar als begrenzt parallelisierbar.",
    ],
    [
      "Eine stabile Kostenersparnis für jede Modellwahl.",
      "Modell und Tokenverbrauch beeinflussen das Ergebnis.",
    ],
  ),
  q(
    "parallel-comparison-15",
    research,
    "Was erfasste Anthropic neben Tokenverbrauch als erklärende Größe für Research-Leistung?",
    [
      "Zahl der Werkzeugaufrufe und Modellwahl.",
      "Der Bericht nennt diese Faktoren in seiner internen Analyse.",
    ],
    [
      "Den Namen der Agentenrollen.",
      "Rollennamen sind keine genannte Leistungsgröße.",
    ],
    [
      "Die Zahl der Markdown-Überschriften im Ergebnis.",
      "Diese Darstellungsgröße ist nicht die beschriebene Analyse.",
    ],
  ),
  q(
    "parallel-comparison-16",
    research,
    "Welche Art der Bewertung empfiehlt der Bericht für variable Agentenpfade?",
    [
      "Das erreichte Ergebnis und sinnvolle Prozesskriterien prüfen.",
      "Mehrere gültige Wege können zum selben Ergebnis führen.",
    ],
    [
      "Eine einzige feste Schrittfolge als Erfolgskriterium verlangen.",
      "Der Bericht warnt vor starrer Pfadbewertung.",
    ],
    [
      "Die Agentenanzahl als Qualitätsmaß verwenden.",
      "Agentenanzahl belegt kein gutes Ergebnis.",
    ],
  ),
  q(
    "parallel-comparison-17",
    research,
    "Was kann eine menschliche Probeprüfung entdecken, das automatische Evals übersehen?",
    [
      "Ungewöhnliche Fehlerfälle und schwache Quellenauswahl.",
      "Anthropic nennt solche Beobachtungen aus menschlichen Tests.",
    ],
    [
      "Die exakte Anzahl aller zukünftigen Fehlantworten.",
      "Eine Probeprüfung prognostiziert nicht alle künftigen Fehler.",
    ],
    [
      "Die vollständige Sicherheit des Agentensystems.",
      "Manuelle Tests sind ein Baustein, keine Garantie.",
    ],
  ),
  q(
    "parallel-comparison-18",
    research,
    "Welche Quelle sollte eine Ergebnisbewertung laut Anthropic bevorzugen?",
    [
      "Autoritative Primärquellen gegenüber SEO-optimierten Inhaltsfarmen.",
      "Der Bericht beschreibt Quellenqualität als Bewertungskriterium.",
    ],
    [
      "Das zuerst gefundene Suchergebnis unabhängig von Herkunft.",
      "Herkunft und Qualität werden ausdrücklich bewertet.",
    ],
    [
      "Die längste Seite unabhängig von Belegen.",
      "Länge ersetzt keine Autorität oder Zitiergenauigkeit.",
    ],
  ),
  q(
    "parallel-comparison-19",
    evals,
    "Wozu dient ein Trace bei der Bewertung eines Agentenablaufs?",
    [
      "Er zeigt Modell-, Werkzeug-, Guardrail- und Handoff-Ereignisse eines Laufs.",
      "Die OpenAI-Doku beschreibt den End-to-End-Trace so.",
    ],
    [
      "Er ersetzt das Ergebnis des Laufs durch eine feste Antwort.",
      "Ein Trace protokolliert den Ablauf, er erzeugt keine Sollantwort.",
    ],
    [
      "Er misst die Bildschirmdarstellung des Agenten.",
      "Der Trace umfasst Workflow-Ereignisse.",
    ],
  ),
  q(
    "parallel-comparison-20",
    evals,
    "Ein Agent wählt im Parallelversuch das falsche Werkzeug. Welche Eval-Fläche hilft bei der Diagnose?",
    [
      "Trace-Grading mit einem Kriterium zur Werkzeugwahl.",
      "Die Doku nennt die Werkzeugwahl als Beispiel für Trace-Grading.",
    ],
    [
      "Nur ein Vergleich der Antwortlänge.",
      "Antwortlänge zeigt die konkrete Werkzeugwahl nicht.",
    ],
    [
      "Ein neues Thema im Katalog ohne Workflowdaten.",
      "Das erklärt den fehlerhaften Werkzeugschritt nicht.",
    ],
  ),
  q(
    "parallel-comparison-21",
    evals,
    "Wofür eignet sich ein Dataset mit Eval-Runs besonders?",
    [
      "Für wiederholbare Vergleiche von Workflow-Änderungen.",
      "Die Doku empfiehlt Datasets und Eval-Runs für Benchmarks über Zeit.",
    ],
    [
      "Für die Ersetzung aller realen Nutzerprüfungen.",
      "Wiederholbare Daten decken nicht alle unbekannten Fälle ab.",
    ],
    [
      "Für eine pauschale Freigabe jeder neuen Toolverbindung.",
      "Ein Dataset prüft definierte Fälle, keine pauschale Berechtigung.",
    ],
  ),
  q(
    "parallel-comparison-22",
    evals,
    "Was macht ein Grader in der Trace-Auswertung?",
    [
      "Er bewertet ausgewählte Abläufe anhand strukturierter Kriterien.",
      "OpenAI beschreibt Grader für skalierte Trace-Bewertung.",
    ],
    [
      "Er führt alle Toolaufrufe des Agenten selbst erneut aus.",
      "Grading bewertet aufgezeichnete Läufe, statt sie zu wiederholen.",
    ],
    [
      "Er garantiert die fachliche Korrektheit jeder Antwort.",
      "Ein Grader bewertet nur seine festgelegten Kriterien.",
    ],
  ),
  q(
    "parallel-comparison-23",
    evals,
    "Ein Team will testen, ob ein neuer Routing-Prompt die Handoffs verbessert. Wo beginnt die Diagnose?",
    [
      "Repräsentative Traces ansehen und Handoff-Kriterien bewerten.",
      "OpenAI empfiehlt Traces bei Workflowproblemen und Routing-Änderungen.",
    ],
    [
      "Die Zahl der Agentennamen im Prompt zählen.",
      "Namen zählen belegt kein korrektes Routing.",
    ],
    [
      "Nur die kürzeste Endantwort auswählen.",
      "Die Antwortlänge zeigt die Handoff-Qualität nicht.",
    ],
  ),
  q(
    "parallel-comparison-24",
    research,
    "Bei einem zustandsverändernden Agentenworkflow: Was sollte ein Vergleich besonders prüfen?",
    [
      "Den erreichten Endzustand und passende Zwischen-Checkpoints.",
      "Anthropic empfiehlt Endzustandsprüfung und diskrete Checkpoints.",
    ],
    [
      "Die exakte Reihenfolge aller internen Gedanken.",
      "Verschiedene gültige Wege sind möglich.",
    ],
    [
      "Nur die Anzahl der gesendeten Nachrichten.",
      "Nachrichtenanzahl belegt keinen korrekten Zustand.",
    ],
  ),
  q(
    "parallel-comparison-25",
    research,
    "Welche Verzerrung entsteht, wenn nur die Laufzeit zweier Agentenabläufe verglichen wird?",
    [
      "Zusätzliche Tokenkosten, Fehler und Review-Arbeit bleiben unsichtbar.",
      "Der Bericht beschreibt höhere Tokenkosten und nötige Qualitätsprüfung.",
    ],
    [
      "Die Laufzeit enthält bereits sämtliche Kosten- und Qualitätsgrößen.",
      "Diese Größen sind unabhängig zu erfassen.",
    ],
    [
      "Der serielle Ablauf wird automatisch fachlich richtiger.",
      "Der Bericht behauptet keinen solchen Automatismus.",
    ],
  ),
];
