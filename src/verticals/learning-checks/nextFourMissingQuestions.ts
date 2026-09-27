import type { Question } from "../../shared/question";

type Answer = [text: string, explanation: string];

function q(
  id: string,
  sourceUrl: string,
  prompt: string,
  correct: Answer,
  distractorA: Answer,
  distractorB: Answer,
): Question {
  return {
    id,
    prompt,
    options: [correct, distractorA, distractorB].map(
      ([text, explanation], index) => ({
        id: `${id}-${index + 1}`,
        text,
        correct: index === 0,
        explanation,
        sourceUrl,
      }),
    ),
  };
}

const skills = "https://developers.openai.com/plugins/concepts/skills";
const buildSkills = "https://developers.openai.com/plugins/build/skills";
const skillSecurity =
  "https://developers.openai.com/plugins/guides/security-privacy";
const skillEvals = "https://developers.openai.com/blog/eval-skills";
const openSpec = "https://openspec.dev/docs/schemas/spec-driven";
const specKit = "https://github.com/github/spec-kit/blob/main/docs/index.md";
const kiroSpecs = "https://kiro.dev/docs/specs/";
const agentReview =
  "https://developers.openai.com/api/docs/guides/agents/guardrails-approvals";
const githubTasks =
  "https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results";
const webTop = "https://top10.owasp.org/2025/";
const access = "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/";
const config =
  "https://top10.owasp.org/2025/A02_2025-Security_Misconfiguration/";
const injection = "https://top10.owasp.org/2025/A05_2025-Injection/";
const mdnSecurity =
  "https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides";
const llmRisks = "https://genai.owasp.org/llm-top-10/";
const promptInjection =
  "https://genai.owasp.org/llmrisk/llm01-prompt-injection/";
const excessiveAgency =
  "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/";

export const nextFourMissingQuestions: Record<string, Question[]> = {
  "agent-skills-and-commands": [
    q(
      "AS01",
      skills,
      "Ein Team wiederholt denselben geprüften Agentenablauf. Was ist der passende Inhalt eines Skills?",
      [
        "Anweisungen und Ressourcen für diesen Ablauf.",
        "Skills bündeln wiederholbare Arbeitsabläufe.",
      ],
      [
        "Ein dauerhaftes Protokoll aller Nutzerdaten.",
        "Ein Skill beschreibt den Ablauf und ist kein Datenspeicher.",
      ],
      [
        "Ein Ersatz für die fachliche Abnahme.",
        "Der Skill liefert Anweisungen, keine Abnahmeentscheidung.",
      ],
    ),
    q(
      "AS02",
      buildSkills,
      "Welche Datei enthält die verpflichtenden Anweisungen eines Skills?",
      ["SKILL.md", "Die Skill-Datei enthält Metadaten und Anweisungen."],
      [
        "plugin.json",
        "Ein Plugin-Manifest beschreibt das Paket, nicht den einzelnen Skill-Ablauf.",
      ],
      ["tasks.md", "Eine Aufgabenliste ersetzt die Skill-Anweisungen nicht."],
    ),
    q(
      "AS03",
      buildSkills,
      "Wozu dient die Beschreibung im Kopf einer Skill-Datei?",
      [
        "Sie zeigt, bei welchen Anliegen der Skill berücksichtigt werden soll.",
        "Die Beschreibung steuert die Aktivierung.",
      ],
      [
        "Sie gewährt Dateisystemrechte für den Ablauf.",
        "Rechte werden außerhalb der Skill-Beschreibung kontrolliert.",
      ],
      [
        "Sie speichert die Ergebnisse früherer Durchläufe.",
        "Die Beschreibung dient der Auswahl, nicht der Speicherung.",
      ],
    ),
    q(
      "AS04",
      buildSkills,
      "Wo stehen die konkreten Schritte eines Skills?",
      ["Im Anweisungsteil von SKILL.md.", "Dort wird der Ablauf beschrieben."],
      [
        "Im Skill-Namen.",
        "Der Name identifiziert den Skill, beschreibt aber nicht den Ablauf.",
      ],
      [
        "In der Berechtigungsliste des MCP-Servers.",
        "Berechtigungen definieren Zugriff, nicht die Schrittfolge.",
      ],
    ),
    q(
      "AS05",
      buildSkills,
      "Ein Skill braucht ausführliche Hintergrundinformationen. Wo passen diese hin?",
      [
        "In verlinkte Dateien unter references/.",
        "Referenzen halten den Haupttext knapp und können gezielt geladen werden.",
      ],
      [
        "In eine längere Aktivierungsbeschreibung.",
        "Die Beschreibung soll Auslöser nennen, nicht Hintergrundmaterial tragen.",
      ],
      [
        "In die Liste erlaubter MCP-Werkzeuge.",
        "Werkzeugdeklarationen enthalten keine fachliche Referenz.",
      ],
    ),
    q(
      "AS06",
      buildSkills,
      "Ein Skill soll eine vorhandene Vorlage kopieren. Welcher unterstützende Ordner passt?",
      [
        "assets/",
        "Assets sind für Vorlagen und zu übernehmende Dateien vorgesehen.",
      ],
      ["scripts/", "Scripts sind für ausführbare Verarbeitung vorgesehen."],
      [
        "references/",
        "References sind für nachzuschlagende Informationen vorgesehen.",
      ],
    ),
    q(
      "AS07",
      buildSkills,
      "Wann ist ein Script als Skill-Ressource sinnvoll?",
      [
        "Wenn deterministische Berechnung oder Dateiverarbeitung gebraucht wird.",
        "Die Anleitung nennt Scripts für solche wiederholbaren Operationen.",
      ],
      [
        "Wenn eine kurze Anweisung denselben Schritt zuverlässig beschreibt.",
        "Dann ist laut Anleitung kein zusätzliches Script nötig.",
      ],
      [
        "Wenn die Aktivierungsbeschreibung zu lang ist.",
        "Eine lange Beschreibung wird gekürzt, nicht durch ein Script ersetzt.",
      ],
    ),
    q(
      "AS08",
      buildSkills,
      "Wie sollte ein Skill abgegrenzt werden?",
      [
        "Auf ein erkennbares Nutzerziel mit klaren Eingaben und Schritten.",
        "Die Anleitung fordert eine erkennbare Aufgabe und Workflow-Grenze.",
      ],
      [
        "Auf sämtliche Tätigkeiten eines Teams zugleich.",
        "Ein überbreiter Skill verliert eine erkennbare Aktivierungsgrenze.",
      ],
      [
        "Auf die bloße Rollenbezeichnung des Agenten.",
        "Eine Rolle definiert noch keinen überprüfbaren Ablauf.",
      ],
    ),
    q(
      "AS09",
      skills,
      "Was übernimmt ein MCP-Server im Zusammenspiel mit einem Skill?",
      [
        "Live-Daten, Autorisierung und kontrollierte Aktionen.",
        "Diese Aufgaben liegen beim Server.",
      ],
      [
        "Die Entscheidung, wann eine Anleitung fachlich nützlich ist.",
        "Die Skill-Beschreibung und der Auftrag steuern die Auswahl.",
      ],
      [
        "Die Formulierung aller wiederverwendbaren Workflow-Schritte.",
        "Dafür ist der Skill gedacht.",
      ],
    ),
    q(
      "AS10",
      skills,
      "Ein Ablauf braucht keine Live-Daten und keine fremden Werkzeuge. Was gilt für den Skill?",
      [
        "Er kann allein mit Anweisungen und Ressourcen arbeiten.",
        "Skills können ohne MCP-Server funktionieren.",
      ],
      [
        "Er benötigt dennoch einen MCP-Server für jede Ausführung.",
        "Der Server ist bei einem rein angeleiteten Ablauf optional.",
      ],
      [
        "Er muss als externes Skript veröffentlicht werden.",
        "Ein Script ist für reine Anweisungen nicht erforderlich.",
      ],
    ),
    q(
      "AS11",
      buildSkills,
      "Ein Skill deklariert eine MCP-Abhängigkeit. Was muss die Anleitung zusätzlich leisten?",
      [
        "Werkzeugreihenfolge und Verhalten bei fehlenden Ergebnissen erklären.",
        "Die Abhängigkeit stellt das Werkzeug bereit, ersetzt aber keine Workflow-Anweisung.",
      ],
      [
        "Die Autorisierung im Skill-Text selbst erteilen.",
        "Autorisierung liegt am Werkzeug beziehungsweise Server.",
      ],
      [
        "Jeden möglichen Werkzeugaufruf ungeprüft auslösen.",
        "Die Anleitung muss Auswahl und Fehlerfälle regeln.",
      ],
    ),
    q(
      "AS12",
      buildSkills,
      "Welche Anfrage prüft, ob ein Skill bei eindeutiger Nennung aktiviert wird?",
      [
        "Eine direkte Bitte um seinen beschriebenen Ablauf.",
        "Direkte Anfragen sind ein vorgesehener Aktivierungstest.",
      ],
      [
        "Eine Umschreibung des Ziels ohne Skill-Namen.",
        "Sie prüft die indirekte Aktivierung.",
      ],
      [
        "Eine Anfrage mit fehlenden Pflichteingaben.",
        "Sie prüft eher die nötige Rückfrage.",
      ],
    ),
    q(
      "AS13",
      buildSkills,
      "Wie prüft ein Team die Aktivierung ohne expliziten Skill-Namen?",
      [
        "Mit einer indirekten Anfrage, die dasselbe Ziel ausdrückt.",
        "Indirekte Anfragen gehören zu den empfohlenen Tests.",
      ],
      [
        "Mit einem Testprompt, der den Skill beim Namen aufruft.",
        "Das prüft nur die direkte Aktivierung.",
      ],
      [
        "Mit der Prüfung des Plugin-Manifests allein.",
        "Das Manifest zeigt keine Aktivierung bei einer Anfrage.",
      ],
    ),
    q(
      "AS14",
      buildSkills,
      "Ein Skill benötigt einen Projektpfad, die Anfrage nennt keinen. Welcher Testfall ist das?",
      [
        "Unvollständige Eingabe mit erwarteter Rückfrage.",
        "Die Anleitung empfiehlt Tests auf fehlende nötige Angaben.",
      ],
      [
        "Ein Lauf mit angenommenem Standardpfad.",
        "Der nötige Pfad fehlt; eine unbelegte Annahme wäre kein passender Testausgang.",
      ],
      [
        "Ein Test der Ausgabeformatierung nach vollständig gelieferter Eingabe.",
        "Hier fehlt eine nötige Eingabe, bevor eine Ausgabe geprüft werden kann.",
      ],
    ),
    q(
      "AS15",
      buildSkills,
      "Warum gehören themenfremde Anfragen in die Skill-Tests?",
      [
        "Sie zeigen, ob der Skill fälschlich aktiviert wird.",
        "Die Anleitung fordert Anfragen, bei denen der Skill nicht starten sollte.",
      ],
      [
        "Sie prüfen die Ergebnisqualität bei erfolgreichen Aufrufen.",
        "Eine themenfremde Anfrage soll gerade keinen Skill-Aufruf auslösen.",
      ],
      [
        "Sie messen die Laufzeit des vollständigen Skill-Ablaufs.",
        "Bei ausbleibender Aktivierung läuft dieser Ablauf nicht.",
      ],
    ),
    q(
      "AS16",
      buildSkills,
      "Bei einer unpassenden Anfrage startet der Skill häufig. Was wird zuerst geschärft?",
      [
        "Seine Beschreibung und Aktivierungsbedingungen.",
        "Die Anleitung nennt die Beschreibung als Hebel bei falscher Aktivierung.",
      ],
      [
        "Die Ausgabevorlage für erfolgreiche Durchläufe.",
        "Sie beeinflusst das Ergebnis nach der Aktivierung.",
      ],
      [
        "Die Schrittfolge für erfolgreich gestartete Durchläufe.",
        "Eine neue Schrittfolge korrigiert die falsche Auswahl vor dem Start nicht.",
      ],
    ),
    q(
      "AS17",
      buildSkills,
      "Der Skill startet korrekt, liefert aber uneinheitliche Ergebnisse. Was wird überarbeitet?",
      [
        "Die konkreten Anweisungen im Skill.",
        "Bei inkonsistentem Ablauf sollen die Anweisungen präzisiert werden.",
      ],
      [
        "Die Beschreibung der Aktivierungsbedingungen.",
        "Die Aktivierung funktioniert bereits; es fehlt Ablaufklarheit.",
      ],
      [
        "Die Liste indirekter Testanfragen.",
        "Weitere Tests allein korrigieren den Ablauf nicht.",
      ],
    ),
    q(
      "AS18",
      buildSkills,
      "Was ist bei einer MCP-importierten Skill-Version zu beachten?",
      [
        "Die importierten Dateien sind zunächst ein Snapshot.",
        "Die Plattform lädt sie nicht bei jedem Lauf neu vom Server.",
      ],
      [
        "Jeder Lauf liest automatisch die neuesten Serverdateien.",
        "Der Import ist ein Snapshot.",
      ],
      [
        "Der Import ersetzt die Prüfung des Skills.",
        "Ein Snapshot sagt nichts über fachliche Qualität aus.",
      ],
    ),
    q(
      "AS19",
      buildSkills,
      "Ein importierter Skill wurde auf dem Server geändert. Wie gelangt die Änderung in einen neuen Plugin-Entwurf?",
      [
        "Server bereitstellen und erneut scannen.",
        "Die Anleitung nennt erneutes Deployment und Scannen.",
      ],
      [
        "Die lokale Skill-Datei ohne erneuten Scan bearbeiten.",
        "Das aktualisiert den importierten Snapshot nicht.",
      ],
      [
        "Den vorhandenen Snapshot unverändert testen.",
        "Das prüft weiterhin die alte Fassung.",
      ],
    ),
    q(
      "AS20",
      skillSecurity,
      "Ein fremder Skill fordert Zugriff auf viele Konten. Welche Prüfung ist vor Nutzung passend?",
      [
        "Benötigte Berechtigungen und Datenzugriffe auf das Nutzerziel begrenzen.",
        "Die Sicherheitsanleitung verlangt minimale Rechte und Daten.",
      ],
      [
        "Alle angefragten Rechte vorsorglich erteilen.",
        "Breiter Zugriff widerspricht dem Prinzip minimaler Berechtigungen.",
      ],
      [
        "Die beworbene Funktion des Skills mit dem Bedarf vergleichen.",
        "Die Beschreibung allein zeigt weder tatsächlich angeforderte Rechte noch Datenfluss.",
      ],
    ),
    q(
      "AS21",
      skillSecurity,
      "Wo muss ein MCP-Werkzeug seine Eingaben prüfen?",
      [
        "Auch serverseitig bei jedem Aufruf.",
        "Die Sicherheitsanleitung verlangt Validierung am Server trotz Modellaufruf.",
      ],
      [
        "In einer Formulierung des Skill-Prompts.",
        "Prompt-Anweisungen ersetzen keine serverseitige Validierung.",
      ],
      [
        "Beim erstmaligen Installieren des Skills.",
        "Jeder Aufruf kann neue Eingaben enthalten.",
      ],
    ),
    q(
      "AS22",
      skillSecurity,
      "Ein Skill führt zu einer nicht rückgängig zu machenden Aktion. Welche Kontrolle ist passend?",
      [
        "Menschliche Bestätigung vor der Aktion.",
        "Die Sicherheitsanleitung fordert sie für irreversible Vorgänge.",
      ],
      [
        "Eine ausführliche Protokollierung nach der Aktion.",
        "Ein späteres Protokoll ersetzt die Entscheidung vor der Nebenwirkung nicht.",
      ],
      [
        "Eine automatische Freigabe nach erfolgreicher Aktivierung.",
        "Aktivierung ist keine Bestätigung der konkreten Aktion.",
      ],
    ),
    q(
      "AS23",
      skillEvals,
      "Was sollte vor dem Schreiben eines Skills für seine Evaluation festgelegt werden?",
      [
        "Messbare Kriterien für Erfolg und Verhalten.",
        "Der Leitfaden beginnt mit prüfbaren Erfolgszielen.",
      ],
      [
        "Die geplanten Werkzeugnamen.",
        "Werkzeugnamen allein definieren keinen Erfolg.",
      ],
      [
        "Die Zahl der Testprompts.",
        "Die Zahl sagt nichts über die geprüften Ergebnisse.",
      ],
    ),
    q(
      "AS24",
      skillEvals,
      "Eine Evaluation fragt, ob der Skill gestartet und die erwarteten Werkzeuge genutzt wurden. Welche Zielart prüft sie?",
      ["Prozessziele.", "Skill-Aufruf und Werkzeugschritte sind Prozessziele."],
      ["Stilziele.", "Stilziele betreffen Form und Konvention der Ausgabe."],
      [
        "Effizienzziele.",
        "Effizienz betrachtet beispielsweise unnötige Aufrufe.",
      ],
    ),
    q(
      "AS25",
      skillEvals,
      "Welche Kombination liefert bei Skill-Evaluierungen konkrete Hinweise auf Regressionen?",
      [
        "Aufgezeichnete Läufe mit gezielten deterministischen und rubrikbasierten Checks.",
        "Der Leitfaden kombiniert Traces, Artefakte und kleine Prüfungen.",
      ],
      [
        "Ein einmaliges subjektives Gesamturteil.",
        "Ein pauschales Urteil zeigt die Ursache eines Fehlers kaum.",
      ],
      [
        "Die erfolgreiche Installation des Skills.",
        "Installation prüft weder Aktivierung noch Ergebnisqualität.",
      ],
    ),
  ],
  "spec-framework-selection": [
    q(
      "SF01",
      openSpec,
      "Welches OpenSpec-Artefakt hält zuerst fest, warum eine Änderung nötig ist?",
      ["proposal.md", "Das Proposal beschreibt die Motivation."],
      ["tasks.md", "Tasks enthält die Umsetzungsschritte."],
      ["design.md", "Design beschreibt den technischen Weg."],
    ),
    q(
      "SF02",
      openSpec,
      "Wo beschreibt OpenSpec das geänderte Verhalten einer Fähigkeit?",
      [
        "In einer Delta-Spec unter specs/<capability-path>/spec.md.",
        "Dieses Artefakt beschreibt, was sich fachlich ändert.",
      ],
      [
        "Im Dateinamen des Change-Ordners.",
        "Der Ordnername ersetzt die Verhaltensbeschreibung nicht.",
      ],
      [
        "In der Aufgabenliste allein.",
        "Tasks planen Arbeit, definieren aber nicht den Verhaltensvertrag.",
      ],
    ),
    q(
      "SF03",
      openSpec,
      "Welches OpenSpec-Artefakt beschreibt den technischen Lösungsweg?",
      ["design.md", "Das Design legt dar, wie die Änderung gebaut wird."],
      ["proposal.md", "Das Proposal begründet die Änderung."],
      ["spec.md", "Die Spec beschreibt das gewünschte Verhalten."],
    ),
    q(
      "SF04",
      openSpec,
      "Welche Datei dient im OpenSpec-Standard als Implementierungscheckliste?",
      ["tasks.md", "Tasks sammelt die umzusetzenden Schritte."],
      ["proposal.md", "Das Proposal erklärt den Anlass."],
      [".openspec.yaml", "Diese Datei enthält Änderungsmetadaten."],
    ),
    q(
      "SF05",
      openSpec,
      "In welcher Reihenfolge beginnt der OpenSpec-Standardablauf?",
      [
        "Mit dem Proposal vor Specs und Design.",
        "Die dokumentierte Artefaktfolge startet mit dem Proposal.",
      ],
      [
        "Mit Tasks vor der Änderungsbegründung.",
        "Tasks bauen auf den vorangehenden Artefakten auf.",
      ],
      [
        "Mit der Implementierung vor den Artefakten.",
        "Apply folgt erst nach den erforderlichen Artefakten.",
      ],
    ),
    q(
      "SF06",
      openSpec,
      "Welche beiden OpenSpec-Artefakte können nach dem Proposal in beliebiger Reihenfolge entstehen?",
      ["Specs und Design.", "Der Standard erlaubt beide Reihenfolgen."],
      ["Proposal und Tasks.", "Das Proposal steht vor den Tasks."],
      ["Tasks und Apply.", "Apply folgt den Tasks."],
    ),
    q(
      "SF07",
      openSpec,
      "Wenn bei einer OpenSpec-Änderung weder Specs noch Design ausgelassen werden: Wann werden die Tasks vorbereitet?",
      [
        "Nachdem Proposal, Specs und Design vorliegen.",
        "Im vollständigen Standardablauf benötigen Tasks diese Artefakte; das Schema erlaubt bei anderen Änderungen Ausnahmen.",
      ],
      ["Schon vor dem Proposal.", "Die Änderungsbegründung steht zuerst."],
      [
        "Erst nach dem Archivieren.",
        "Archivieren folgt der umgesetzten Änderung.",
      ],
    ),
    q(
      "SF08",
      openSpec,
      "Was markiert im OpenSpec-Standard den Übergang zur Implementierung?",
      [
        "Apply nach der Aufgabenliste.",
        "Die dokumentierte Folge führt von Tasks zu Apply.",
      ],
      [
        "Proposal ohne weitere Prüfung.",
        "Ein Proposal ist noch kein Implementierungsstart.",
      ],
      [
        "Das Anlegen des Change-Ordners allein.",
        "Ein Ordner enthält noch keine umsetzbaren Artefakte.",
      ],
    ),
    q(
      "SF09",
      openSpec,
      "Eine kleine OpenSpec-Änderung braucht keinen eigenen Architekturentwurf. Was ist laut Schema möglich?",
      [
        "Design auslassen, wenn dessen Bedingungen nicht gelten.",
        "Das Standard-Schema erlaubt das Auslassen unter dieser Bedingung.",
      ],
      [
        "Den Grund für die Änderung auslassen.",
        "Das Proposal steht am Anfang.",
      ],
      [
        "Tasks vor jeder Verhaltensbeschreibung schreiben.",
        "Tasks benötigen die erforderlichen Vorarbeiten.",
      ],
    ),
    q(
      "SF10",
      openSpec,
      "Ein OpenSpec-Pilot betrifft zwei getrennte Fähigkeiten. Wie werden die Verhaltensänderungen abgelegt?",
      [
        "Je Fähigkeit in einer eigenen Delta-Spec.",
        "Das Schema sieht eine spec.md pro Capability-Pfad vor.",
      ],
      [
        "Alle Anforderungen in design.md.",
        "Design beschreibt den Bauweg, nicht alle Capability-Verträge.",
      ],
      [
        "Jede Fähigkeit als Dateiname in tasks.md.",
        "Aufgaben ersetzen keine Delta-Specs.",
      ],
    ),
    q(
      "SF11",
      specKit,
      "Welche Phase folgt im Kernablauf von GitHub Spec Kit direkt auf Specify?",
      [
        "Plan.",
        "Der dokumentierte Kernablauf ist Specify → Plan → Tasks → Implement → Converge.",
      ],
      ["Implement.", "Vor Implement liegen Plan und Tasks."],
      ["Converge.", "Converge schließt den Ablauf ab."],
    ),
    q(
      "SF12",
      specKit,
      "Was entsteht in Spec Kit vor der Implementierungsphase aus dem Plan?",
      [
        "Eine gegliederte Aufgabenfolge.",
        "Tasks baut auf Specify und Plan auf.",
      ],
      [
        "Ein automatischer Produktiv-Release.",
        "Der Ablauf setzt einen Release nicht als Folgeschritt voraus.",
      ],
      [
        "Eine Berechtigung für alle Agentenwerkzeuge.",
        "Planung erteilt keine Rechte.",
      ],
    ),
    q(
      "SF13",
      specKit,
      "Welcher Spec-Kit-Prozess kann als eigenständiger Einstieg dienen, ohne sofort eine Implementierung zu starten?",
      [
        "Idea Assessment.",
        "Die Dokumentation beschreibt Assessment als unabhängigen, optionalen Einstieg.",
      ],
      [
        "Der Implement-Schritt des SDD-Kernablaufs.",
        "Implement setzt die vorherigen SDD-Artefakte voraus.",
      ],
      [
        "Der Converge-Schritt des SDD-Kernablaufs.",
        "Converge steht am Ende des Umsetzungsablaufs.",
      ],
    ),
    q(
      "SF14",
      specKit,
      "Welches Format tragen die zentralen Spec-Kit-Artefakte?",
      [
        "Markdown-Dateien für die aufeinanderfolgenden Phasen.",
        "Die Dokumentation beschreibt Markdown-Artefakte.",
      ],
      [
        "Kompilierten Java-Code.",
        "Das Framework organisiert Spezifikationsartefakte.",
      ],
      [
        "Einträge in einer proprietären Datenbank.",
        "Die genannten Artefakte sind Dateien.",
      ],
    ),
    q(
      "SF15",
      specKit,
      "Ein Team möchte Spec Kit mit einem anderen Coding-Agenten erproben. Was unterstützt die Dokumentation?",
      [
        "Agentenspezifische Integrationen samt generischer Ausweichmöglichkeit.",
        "Spec Kit nennt Integrationen und eine generische Variante.",
      ],
      [
        "Eine Pflicht zur Nutzung eines einzelnen Agenten.",
        "Die Dokumentation beschreibt mehrere Integrationen.",
      ],
      [
        "Eine automatische fachliche Freigabe des gewählten Agenten.",
        "Integration ersetzt keine fachliche Prüfung.",
      ],
    ),
    q(
      "SF16",
      specKit,
      "Warum ist bei Spec Kit ein Pilot in einem bestehenden Repository sinnvoll abzugrenzen?",
      [
        "Es gibt eine eigene Anleitung für bestehende Codebasen.",
        "Der Einstieg unterscheidet bestehende Projekte.",
      ],
      [
        "Weil jede Codebasis zuerst neu erzeugt werden muss.",
        "Der Leitfaden sieht bestehende Projekte ausdrücklich vor.",
      ],
      [
        "Weil Specs dort keine Rolle mehr spielen.",
        "Der Ablauf bleibt spezifikationsgeführt.",
      ],
    ),
    q(
      "SF17",
      kiroSpecs,
      "Welche drei Kerndateien bilden eine Kiro-Feature-Spec?",
      [
        "requirements.md, design.md und tasks.md.",
        "Kiro nennt diese drei Dateien als Grundstruktur.",
      ],
      [
        "proposal.md, changelog.md und package.json.",
        "Das sind nicht die drei Kiro-Spec-Dateien.",
      ],
      [
        "README.md, Dockerfile und build.gradle.",
        "Diese Dateien gehören nicht zum Spec-Kernablauf.",
      ],
    ),
    q(
      "SF18",
      kiroSpecs,
      "Wofür nutzt Kiro bei einem Fehlerfall bugfix.md?",
      [
        "Für Analyse des aktuellen, erwarteten und unveränderten Verhaltens.",
        "Bugfix-Specs halten die Fehleranalyse fest.",
      ],
      [
        "Für die Liste aller installierten Plugins.",
        "Die Datei dient der Fehler-Spezifikation.",
      ],
      [
        "Für automatisch akzeptierte Codeänderungen.",
        "Eine Bugfix-Spec ist keine Freigabe.",
      ],
    ),
    q(
      "SF19",
      kiroSpecs,
      "Was beschreibt in Kiro design.md?",
      [
        "Architektur, Datenfluss und Implementierungsüberlegungen.",
        "Die Designphase hält den technischen Ansatz fest.",
      ],
      [
        "Das ursprüngliche Nutzerproblem.",
        "Das gehört in Requirements oder Bugfix-Analyse.",
      ],
      ["Den aktuellen Aufgabenstatus.", "Aufgabenstatus liegt bei Tasks."],
    ),
    q(
      "SF20",
      kiroSpecs,
      "Was enthält in Kiro tasks.md?",
      [
        "Diskrete, nachverfolgbare Umsetzungsschritte.",
        "Tasks ist die detaillierte Implementierungsplanung.",
      ],
      [
        "Den gesamten Originalquellcode.",
        "Tasks beschreibt Arbeiten, nicht den vollständigen Code.",
      ],
      [
        "Die endgültige fachliche Abnahme.",
        "Eine Aufgabenliste ersetzt keine Abnahme.",
      ],
    ),
    q(
      "SF21",
      kiroSpecs,
      "Eine Anforderung ist schon technisch klar. Welche Kiro-Variante kann mit dem Design beginnen?",
      [
        "Design-First.",
        "Kiro unterscheidet Requirements-First und Design-First.",
      ],
      ["Bugfix-Only für jedes neue Feature.", "Bugfix betrifft Fehleranalyse."],
      [
        "Tasks-Only als einzige Spec-Phase.",
        "Kiro beschreibt auch Anforderungen und Design.",
      ],
    ),
    q(
      "SF22",
      kiroSpecs,
      "Ein Team möchte zuerst Nutzerverhalten und Abnahme klären. Welche Kiro-Variante passt?",
      [
        "Requirements-First.",
        "Hier beginnt die Feature-Spec mit Anforderungen.",
      ],
      [
        "Design-First mit ausgelassenen Anforderungen.",
        "Die Frage priorisiert die Klärung des Nutzerverhaltens.",
      ],
      [
        "Task-Ausführung vor der Problemklärung.",
        "Tasks folgen aus den Spec-Phasen.",
      ],
    ),
    q(
      "SF23",
      kiroSpecs,
      "Wie behandelt Kiro unabhängige Aufgaben beim Ausführen aller Spec-Tasks?",
      [
        "Es kann Abhängigkeiten analysieren und unabhängige Tasks parallel ausführen.",
        "Die Dokumentation beschreibt Abhängigkeitswellen.",
      ],
      [
        "Es erklärt alle Tasks automatisch für unabhängig.",
        "Abhängigkeiten werden gerade berücksichtigt.",
      ],
      [
        "Es ersetzt die Tasks durch einen unstrukturierten Prompt.",
        "Die Tasks-Liste bleibt Grundlage.",
      ],
    ),
    q(
      "SF24",
      kiroSpecs,
      "Welcher Kiro-Ablauf erzeugt Anforderungen, Design und Tasks für ein klar verstandenes Feature in einem Durchgang?",
      [
        "Quick Spec.",
        "Kiro beschreibt Quick Spec für gut verstandene Features.",
      ],
      ["Bugfix-Spec.", "Dieser Ablauf beginnt mit Fehleranalyse."],
      [
        "Ein MCP-Server ohne Spec.",
        "Er erstellt die drei Spec-Artefakte nicht.",
      ],
    ),
    q(
      "SF25",
      openSpec,
      "Woran kann ein Java-/Web-Team in einem kleinen Framework-Pilot die Trennung von fachlichem Was und technischem Wie prüfen?",
      [
        "An getrennter Verhaltens-Spec und Design-Artefakt.",
        "OpenSpec ordnet Verhalten den Specs und den Bauweg dem Design zu.",
      ],
      [
        "An einer gemeinsamen Aufgabenliste für Verhalten und Bauweg.",
        "Tasks sind die Umsetzungscheckliste und ersetzen die getrennten Artefakte nicht.",
      ],
      [
        "An einem Proposal mit technischen Schritten allein.",
        "Das Proposal erklärt den Grund der Änderung, nicht beide Ebenen.",
      ],
    ),
  ],
  "automation-value-and-gates": [
    q(
      "AV01",
      githubTasks,
      "Ein Team erprobt einen Agenten für wiederkehrende Java-Bugfixes. Welche erste Aufgabe passt zum Einstieg?",
      [
        "Ein klar begrenzter Fehler mit prüfbarem Ergebnis.",
        "GitHub empfiehlt anfangs einfache, gut abgegrenzte Aufgaben.",
      ],
      [
        "Eine umfassende Architekturänderung über mehrere Repositories.",
        "Der Leitfaden nennt breite, kontextreiche Änderungen als schwierig.",
      ],
      [
        "Eine Änderung an kritischer Geschäftslogik ohne Fachkontext.",
        "Solche Aufgaben verlangen besondere menschliche Klärung.",
      ],
    ),
    q(
      "AV02",
      githubTasks,
      "Ein Agentenauftrag nennt bereits betroffene Dateien und Abnahmekriterien, aber nicht den Anlass der Änderung. Was fehlt?",
      [
        "Eine klare Beschreibung des zu lösenden Problems.",
        "Der Leitfaden nennt das Problem zusätzlich zu Dateien und Akzeptanzkriterien.",
      ],
      [
        "Die vermutete Implementierung ohne Fehlerbeschreibung.",
        "Ein Lösungsvorschlag erklärt den zu lösenden Fehler nicht vollständig.",
      ],
      [
        "Weitere Dateipfade ohne Fehlerbeschreibung.",
        "Dateihinweise sind bereits vorhanden und erklären den Anlass der Änderung nicht.",
      ],
    ),
    q(
      "AV03",
      githubTasks,
      "Woran erkennt ein Agent im Auftrag, was als gute Lösung gilt?",
      [
        "An vollständigen Akzeptanzkriterien.",
        "GitHub nennt Kriterien einschließlich erwarteter Tests.",
      ],
      [
        "An der Zahl der geänderten Dateien.",
        "Dateizahl bewertet die geforderte Wirkung nicht.",
      ],
      [
        "An der bloßen Meldung, dass ein Issue geschlossen wurde.",
        "Der Status ersetzt keine inhaltlichen Kriterien.",
      ],
    ),
    q(
      "AV04",
      githubTasks,
      "Was hilft einem Agenten, eine Änderung in einem großen Repository einzugrenzen?",
      [
        "Hinweise auf betroffene Dateien und Bereiche.",
        "Der Leitfaden empfiehlt Richtungen zu relevanten Dateien.",
      ],
      [
        "Zugriff auf alle Repositories des Unternehmens.",
        "Breiter Zugriff macht den Task nicht genauer.",
      ],
      [
        "Ein Auftrag ohne fachliche Grenze.",
        "Fehlende Grenzen erschweren die richtige Änderung.",
      ],
    ),
    q(
      "AV05",
      githubTasks,
      "Ein Entwickler möchte eine komplexe Legacy-Komponente selbst gründlich verstehen. Wie ordnet GitHub diesen Lernauftrag für einen Cloud-Agenten ein?",
      [
        "Als möglichen Fall für eigene Bearbeitung durch den Entwickler.",
        "GitHub nennt Aufgaben mit persönlichem Lernziel unter den Ausnahmen für Delegation.",
      ],
      [
        "Als reine Dokumentationsänderung ohne Lernbedarf.",
        "Der Auftrag zielt ausdrücklich auf das eigene Verständnis des Entwicklers.",
      ],
      [
        "Als automatische Freigabe einer Agentenänderung.",
        "Ein Lernziel ist keine Freigabe für Änderungen.",
      ],
    ),
    q(
      "AV06",
      githubTasks,
      "Ein Team möchte einen Agenten eine Änderung vorbereiten lassen, den Diff aber vor einem Pull Request prüfen. Welcher Ablauf passt?",
      [
        "Repository recherchieren, Plan und Branch-Änderungen prüfen, dann über den Pull Request entscheiden.",
        "GitHub beschreibt Forschung, Planung und Iteration vor dem PR.",
      ],
      [
        "Zuerst einen Pull Request öffnen und erst danach den Änderungsansatz klären.",
        "Die Quelle beschreibt ausdrücklich den Vorab-Ablauf.",
      ],
      [
        "Den Branch ohne Diff-Prüfung direkt zur Übernahme markieren.",
        "Der Vorab-Ablauf ermöglicht gerade die Diff-Prüfung.",
      ],
    ),
    q(
      "AV07",
      githubTasks,
      "Wie können Repository-Anweisungen einen Agenten bei der Verifikation unterstützen?",
      [
        "Sie nennen Build-, Test- und Validierungsbefehle.",
        "Der Leitfaden empfiehlt diese Angaben in Projektanweisungen.",
      ],
      [
        "Sie ersetzen die Ausführung aller Tests.",
        "Anweisungen sollen Tests ermöglichen, nicht ersetzen.",
      ],
      [
        "Sie gewähren automatisch Produktionszugriff.",
        "Projektanweisungen sind keine Zugriffsfreigabe.",
      ],
    ),
    q(
      "AV08",
      githubTasks,
      "Ein Bot soll Playwright-Tests bearbeiten. Wo können dafür dateispezifische Regeln liegen?",
      [
        "In pfadbezogenen Repository-Anweisungen.",
        "GitHub beschreibt Anweisungsdateien mit passenden Dateiglob-Mustern.",
      ],
      [
        "Im Dateinamen eines beliebigen Issues.",
        "Ein Issue-Name verteilt keine Dateiregeln.",
      ],
      [
        "Im generierten Testbericht.",
        "Ein Bericht steuert die Arbeit vor der Änderung nicht.",
      ],
    ),
    q(
      "AV09",
      githubTasks,
      "Ein Agent benötigt für Tests Projektabhängigkeiten. Was kann den Start seiner Umgebung stabilisieren?",
      [
        "Vorinstallation über definierte Setup-Schritte.",
        "GitHub beschreibt vorbereitete Abhängigkeiten in der Agentenumgebung.",
      ],
      [
        "Installation durch Versuch und Irrtum während jedes Laufs.",
        "Der Leitfaden bezeichnet diesen Weg als langsam und unzuverlässig.",
      ],
      [
        "Installationsbefehle im Tasktext ohne Umgebungs-Setup.",
        "Ein Tasktext bereitet die Abhängigkeiten noch nicht vor.",
      ],
    ),
    q(
      "AV10",
      githubTasks,
      "Welcher Nutzen entsteht, wenn der Agent seine Änderung in der eigenen Umgebung bauen und testen kann?",
      [
        "Fehler werden vor dem Pull Request sichtbarer.",
        "Der Leitfaden verbindet Build und Tests mit besser prüfbaren Vorschlägen.",
      ],
      [
        "Das menschliche Review entfällt.",
        "Automatische Tests ersetzen keine Prüfung.",
      ],
      [
        "Die Änderung gilt automatisch als produktionsreif.",
        "Ein grüner Agentenlauf ist keine Freigabe.",
      ],
    ),
    q(
      "AV11",
      agentReview,
      "Ein Agenten-Workflow soll unzulässige Nutzeranfragen vor der Hauptverarbeitung stoppen. Welche Kontrolle passt?",
      ["Input-Guardrail.", "Sie validiert die Eingabe vor dem Hauptmodell."],
      ["Output-Guardrail.", "Sie kontrolliert die Ausgabe am Ende."],
      ["Tool-Guardrail.", "Sie prüft Werkzeugaufrufe."],
    ),
    q(
      "AV12",
      agentReview,
      "Ein Workflow soll sensible Daten vor der Antwort aus dem Endergebnis entfernen. Welche Kontrolle passt?",
      ["Output-Guardrail.", "Sie validiert oder redigiert die finale Ausgabe."],
      ["Input-Guardrail.", "Sie prüft den Eingang, nicht das finale Ergebnis."],
      [
        "Tool-Guardrail an einem einzelnen Werkzeug.",
        "Sie sieht nicht zwingend die gesamte finale Antwort.",
      ],
    ),
    q(
      "AV13",
      agentReview,
      "Wo wird das Argument eines Funktionstools unmittelbar vor dem Aufruf geprüft?",
      [
        "An einer Tool-Guardrail.",
        "Sie prüft Argumente oder Ergebnisse am Werkzeug.",
      ],
      [
        "An der Formulierung des Nutzerauftrags.",
        "Ein Auftrag validiert keine konkreten Tool-Argumente.",
      ],
      [
        "Beim finalen Ausgabeformat.",
        "Eine Endausgabeprüfung liegt zu spät für den Werkzeugaufruf.",
      ],
    ),
    q(
      "AV14",
      agentReview,
      "Ein Agent möchte eine Bestellung stornieren. Welche Kontrolle hält die Nebenwirkung bis zur Entscheidung an?",
      [
        "Human-in-the-loop-Freigabe.",
        "Die Dokumentation empfiehlt eine Freigabepause vor sensiblen Aktionen.",
      ],
      [
        "Eine Input-Guardrail für den ersten Prompt.",
        "Sie entscheidet nicht über den konkreten Storno-Aufruf.",
      ],
      ["Eine Stilprüfung der Antwort.", "Stil verhindert keine Nebenwirkung."],
    ),
    q(
      "AV15",
      agentReview,
      "Was passiert bei einer ausstehenden Werkzeugfreigabe im beschriebenen SDK-Ablauf?",
      [
        "Der Lauf liefert eine Unterbrechung mit wiederaufnehmbarem Zustand.",
        "So ist der Approval-Lifecycle dokumentiert.",
      ],
      [
        "Die Aktion wird ausgeführt und anschließend bewertet.",
        "Die Freigabe steht vor der Ausführung.",
      ],
      [
        "Der gesamte Auftrag wird ohne Zustand neu gestartet.",
        "Der Zustand erlaubt die Fortsetzung desselben Laufs.",
      ],
    ),
    q(
      "AV16",
      agentReview,
      "Wie wird ein angehaltener Agentenlauf nach einer Freigabe fortgesetzt?",
      [
        "Mit dem gespeicherten Zustand desselben Laufs.",
        "Der Lifecycle nimmt den Run aus state wieder auf.",
      ],
      [
        "Mit einem neuen, unverbundenen Auftrag.",
        "Das würde den bisherigen Zustand verlieren.",
      ],
      [
        "Durch stilles Überspringen der geprüften Aktion.",
        "Die Freigabeentscheidung wird ausdrücklich verarbeitet.",
      ],
    ),
    q(
      "AV17",
      agentReview,
      "Eine Freigabeentscheidung dauert länger. Was kann der Workflow speichern?",
      [
        "Den serialisierten Laufzustand für die spätere Fortsetzung.",
        "Die Dokumentation nennt das Speichern von state.",
      ],
      [
        "Die bisher erzeugten Ergebnisartefakte.",
        "Artefakte enthalten nicht den vollständigen Wiederaufnahmezustand.",
      ],
      [
        "Die Argumente des wartenden Werkzeugs.",
        "Damit lässt sich der gesamte unterbrochene Lauf nicht fortsetzen.",
      ],
    ),
    q(
      "AV18",
      agentReview,
      "Was prüfen Guardrails laut SDK-Anleitung automatisch?",
      [
        "Eingaben, Ausgaben oder Werkzeugverhalten.",
        "Diese drei Kontrollpunkte sind beschrieben.",
      ],
      [
        "Die fachliche Richtigkeit jedes Geschäftsentscheids.",
        "Eine Guardrail garantiert keine vollständige Fachprüfung.",
      ],
      [
        "Die menschliche Zustimmung ohne Rückfrage.",
        "Freigaben sind eine eigene Entscheidung.",
      ],
    ),
    q(
      "AV19",
      agentReview,
      "Welche Guardrail gilt bei einer Kette mehrerer Agenten nur für den ersten Agenten?",
      [
        "Die agentenbezogene Input-Guardrail.",
        "Die Dokumentation nennt diese Laufgrenze ausdrücklich.",
      ],
      [
        "Jede Tool-Guardrail im Workflow.",
        "Tool-Guardrails sitzen an ihren Werkzeugen.",
      ],
      [
        "Die Freigabe eines sensiblen Werkzeugs.",
        "Sie gilt am konkreten Nebenwirkungspunkt.",
      ],
    ),
    q(
      "AV20",
      agentReview,
      "Welche agentenbezogene Guardrail läuft in einer Agentenkette nur beim finalen Ausgeber?",
      [
        "Output-Guardrail.",
        "Sie läuft laut Dokumentation beim Agenten mit der finalen Ausgabe.",
      ],
      ["Input-Guardrail.", "Sie läuft beim ersten Agenten."],
      [
        "Eine Tool-Guardrail.",
        "Sie hängt an einem Werkzeug, nicht an der finalen Rolle.",
      ],
    ),
    q(
      "AV21",
      agentReview,
      "Ein Manager-Agent nutzt mehrere Werkzeuge mit Nebenwirkungen. Wo gehört die Prüfung jedes Aufrufs hin?",
      [
        "An das jeweilige Werkzeug und den Nebenwirkungspunkt.",
        "Die Anleitung warnt vor alleinigen Agenten-Guardrails für alle Tool-Aufrufe.",
      ],
      [
        "In die anfängliche Eingabekontrolle.",
        "Sie sieht spätere konkrete Tool-Aufrufe nicht vollständig.",
      ],
      [
        "In den fertigen Bericht.",
        "Dann kann die Nebenwirkung bereits eingetreten sein.",
      ],
    ),
    q(
      "AV22",
      agentReview,
      "Welche Information gehört in eine Freigabeprüfung für einen sensiblen Werkzeugaufruf?",
      [
        "Ziel, Aktion, Argumente und genehmigter Umfang.",
        "Die Anleitung nennt diese Größen für die Scope-Prüfung.",
      ],
      ["Der Anzeigename des Agenten.", "Er beschreibt weder Ziel noch Aktion."],
      ["Die Länge der Modellantwort.", "Sie belegt keine erlaubte Aktion."],
    ),
    q(
      "AV23",
      agentReview,
      "Ein geplanter Werkzeugaufruf liegt außerhalb des genehmigten Bereichs. Was ist die passende Gate-Entscheidung?",
      [
        "Den Aufruf vor der Ausführung verweigern.",
        "Die Anleitung verlangt das Ablehnen von Aktionen außerhalb des Scopes.",
      ],
      [
        "Den Aufruf ausführen und nachträglich markieren.",
        "Das Gate soll vor der Nebenwirkung greifen.",
      ],
      [
        "Die Scope-Prüfung dem Modell allein überlassen.",
        "Die Grenze soll unabhängig durchgesetzt werden.",
      ],
    ),
    q(
      "AV24",
      agentReview,
      "Bei einem autorisierten Cybersicherheits-Workflow ist die Freigabestelle nicht erreichbar. Welches Verhalten schützt den sensiblen Übergang?",
      [
        "Ohne Freigabe nicht ausführen.",
        "Die Anleitung fordert ein geschlossenes Fehlerverhalten.",
      ],
      [
        "Die Aktion nach Zeitablauf automatisch zulassen.",
        "Das würde die Freigabegrenze umgehen.",
      ],
      [
        "Die Freigabe im Prompt als erteilt markieren.",
        "Prompttext ersetzt keine externe Freigabeentscheidung.",
      ],
    ),
    q(
      "AV25",
      agentReview,
      "Ein Team nutzt einen eigenen Agenten-Workflow mit Responses API. Welche Annahme über Codex-Auto-Review ist korrekt?",
      [
        "Der eigene Workflow muss seine Prüf- und Freigabegrenzen selbst einrichten.",
        "Die Dokumentation sagt, dass API- und SDK-Apps Auto-Review nicht automatisch erben.",
      ],
      [
        "Codex-Auto-Review schützt den fremden Workflow automatisch.",
        "Die API-Anwendung erbt diesen Mechanismus nicht.",
      ],
      [
        "Ein Prompt allein setzt alle technischen Grenzen durch.",
        "Freigabe und Werkzeuggates müssen im Workflow umgesetzt werden.",
      ],
    ),
  ],
  "web-security-baseline": [
    q(
      "WS01",
      webTop,
      "Welche Aufgabe erfüllt die OWASP Top 10:2025 für Webanwendungen?",
      [
        "Sie macht wichtige Risikoklassen für Entwicklung und Prüfung sichtbar.",
        "OWASP beschreibt sie als Awareness-Dokument für Webanwendungssicherheit.",
      ],
      [
        "Sie zertifiziert eine konkrete App nach einem grünen Scan.",
        "Die Risikoliste ist keine Produktzertifizierung.",
      ],
      [
        "Sie ersetzt die Prüfung der eigenen Zugriffsregeln.",
        "Die Liste benennt Risiken, testet keine konkrete Anwendung.",
      ],
    ),
    q(
      "WS02",
      llmRisks,
      "Eine Web-App erhält zusätzlich einen LLM-Agenten. Welcher neue Risikoaspekt folgt aus dessen Verarbeitung fremder Texte?",
      [
        "Prompt Injection über dem Agenten zugeführte Inhalte.",
        "OWASP führt Prompt Injection als LLM-spezifische Risikoklasse.",
      ],
      [
        "Fehlende CORS-Begrenzung für bestehende API-Antworten.",
        "CORS ist ein Webzugriffsrisiko; es erklärt keine Anweisungen im Modellkontext.",
      ],
      [
        "Fehlender TLS-Schutz beim Laden bestehender Webressourcen.",
        "TLS ist ein Transportrisiko; es erklärt keine Anweisungen im Modellkontext.",
      ],
    ),
    q(
      "WS03",
      access,
      "Ein Nutzer ändert im API-Pfad eine Datensatz-ID und sieht fremde Kundendaten. Welcher Kontrollpunkt fehlt?",
      [
        "Autorisierung anhand der Datensatz-Zugehörigkeit.",
        "OWASP nennt fremde Datensätze über IDs als Broken Access Control.",
      ],
      [
        "Eine Prüfung, ob der Nutzer angemeldet ist.",
        "Anmeldung allein prüft nicht den Besitz dieses Datensatzes.",
      ],
      [
        "Eine schwerer zu erratende Datensatz-ID.",
        "Unvorhersehbarkeit ersetzt keine Objektberechtigung.",
      ],
    ),
    q(
      "WS04",
      access,
      "Wo muss eine Spring-API die Berechtigung für einen geschützten Endpunkt durchsetzen?",
      [
        "In vertrauenswürdigem serverseitigem Code.",
        "OWASP warnt vor manipulierbaren Prüfungen im Frontend.",
      ],
      [
        "In einem React-Route-Guard vor dem API-Aufruf.",
        "Clientcode kann umgangen werden.",
      ],
      [
        "In einer clientseitigen Prüfung des Rollen-Tokens.",
        "Ein Angreifer kann Clientcode umgehen oder manipulieren.",
      ],
    ),
    q(
      "WS05",
      access,
      "Welcher Standardzugriff passt für nicht öffentliche API-Ressourcen?",
      [
        "Verweigern, bis eine konkrete Berechtigung erteilt ist.",
        "OWASP empfiehlt Deny by default.",
      ],
      [
        "Freigeben, solange keine Sperrliste existiert.",
        "Das widerspricht der Standardverweigerung.",
      ],
      [
        "Freigeben, wenn die ID schwer zu erraten ist.",
        "Unvorhersehbare IDs ersetzen keine Autorisierung.",
      ],
    ),
    q(
      "WS06",
      access,
      "Eine API schützt GET, aber POST und DELETE für denselben Datensatz nicht. Welche Prüfung ist nötig?",
      [
        "Autorisierung für jede betroffene Operation testen.",
        "OWASP nennt fehlende Kontrollen für POST, PUT und DELETE.",
      ],
      [
        "Die GET-Antwort erneut testen.",
        "Die Schreiboperationen bleiben ungeschützt.",
      ],
      [
        "Die Buttons im Browser verstecken.",
        "Direkte API-Aufrufe bleiben möglich.",
      ],
    ),
    q(
      "WS07",
      access,
      "Eine Web-API erlaubt Anfragen von einer unerwarteten fremden Origin. Welche Einstellung ist zu prüfen?",
      [
        "Die CORS-Freigabe der API.",
        "OWASP führt fehlkonfiguriertes CORS bei Zugriffskontrolle auf.",
      ],
      [
        "Die Passwortlänge der angemeldeten Nutzer.",
        "Sie begrenzt nicht erlaubte Browser-Origins.",
      ],
      [
        "Die Gültigkeitsdauer des Session-Cookies.",
        "Sie legt die CORS-Origin-Liste nicht fest.",
      ],
    ),
    q(
      "WS08",
      config,
      "Ein produktiver Dienst hat ein unverändertes Standardkonto. Welche Risikoklasse trifft zu?",
      [
        "Security Misconfiguration.",
        "OWASP nennt aktivierte Standardkonten mit unverändertem Passwort.",
      ],
      [
        "Fehlerhafte Datenintegrität.",
        "Das Problem liegt in der Sicherheitskonfiguration.",
      ],
      [
        "Mangelnde Ausgabeleistung.",
        "Leistung ist nicht die Ursache des Standardkontos.",
      ],
    ),
    q(
      "WS09",
      config,
      "Ein Spring-Endpunkt zeigt Nutzern vollständige Stacktraces. Was sollte die Sicherheitsbasis prüfen?",
      [
        "Die Fehlerbehandlung und Offenlegung interner Details.",
        "OWASP nennt zu ausführliche Fehler als Konfigurationsrisiko.",
      ],
      [
        "Die interne Protokollierung derselben Ausnahme.",
        "Logging kann sinnvoll sein, entfernt den Stacktrace aus der Antwort aber nicht.",
      ],
      [
        "Die Validierung des ursprünglichen Requests.",
        "Auch bei gültigen Requests können Ausnahmen interne Details offenlegen.",
      ],
    ),
    q(
      "WS10",
      config,
      "Ein Server sendet vorgesehene Sicherheitsheader nicht. Wo liegt der erste Prüfansatz?",
      [
        "Bei der tatsächlichen Server- und Header-Konfiguration.",
        "OWASP nennt fehlende oder unsichere Header als Fehlkonfiguration.",
      ],
      [
        "Bei einer zusätzlichen clientseitigen Warnmeldung.",
        "Eine Warnung ergänzt den fehlenden Response-Header nicht.",
      ],
      [
        "Bei einer Erklärung im Repository-README.",
        "Dokumentation verändert die ausgelieferten Header nicht.",
      ],
    ),
    q(
      "WS11",
      config,
      "Nach einem Upgrade bleiben neue Schutzfunktionen deaktiviert. Was verlangt eine Sicherheitsbasis?",
      [
        "Die wirksamen Einstellungen der neuen Version kontrollieren.",
        "OWASP nennt nicht aktivierte neue Schutzfunktionen als Konfigurationsrisiko.",
      ],
      [
        "Die Abhängigkeiten auf die neue Version aktualisieren.",
        "Das aktiviert und prüft die neue Schutzfunktion noch nicht.",
      ],
      [
        "Die vor dem Upgrade grünen Tests wiederholen.",
        "Sie belegen die neue Einstellung nicht.",
      ],
    ),
    q(
      "WS12",
      injection,
      "Eine Anwendung setzt ungeprüfte Eingaben in einen SQL-Befehl ein. Welche Risikoklasse ist betroffen?",
      ["Injection.", "Unvertrauenswürdige Daten beeinflussen den Interpreter."],
      [
        "Broken Access Control.",
        "Eine mögliche Folge ist Datenzugriff; der beschriebene Fehler ist die Befehlsinjektion.",
      ],
      [
        "Security Misconfiguration.",
        "Der konkrete Fehler ist die dynamisch beeinflusste Abfrage.",
      ],
    ),
    q(
      "WS13",
      injection,
      "Welche Änderung trennt in einer Datenbankabfrage Werte besser von der Befehlsstruktur?",
      [
        "Parameterisierte Abfragen statt String-Verkettung.",
        "OWASP nennt dynamische, nicht parametrisierte Aufrufe als Risiko.",
      ],
      [
        "Alle Eingabewerte vor der Verkettung auf Länge prüfen.",
        "Längenprüfung trennt Werte nicht von SQL-Syntax.",
      ],
      [
        "Die Abfrage aus dem Controller in einen Service verschieben.",
        "Ein Schichtenwechsel ändert die unsichere Verkettung nicht.",
      ],
    ),
    q(
      "WS14",
      injection,
      "Kann eine ORM-Suche ungeprüfte Eingaben sicherheitlich problematisch nutzen?",
      [
        "Ja, unsichere Suchparameter können zusätzliche Daten preisgeben.",
        "OWASP nennt ORM-Suchparameter ausdrücklich.",
      ],
      [
        "Nein, ORM schließt jede Form von Injection aus.",
        "OWASP nennt gerade diesen Fehlerfall.",
      ],
      [
        "Wenn gar keine Datenbank vorhanden ist.",
        "Der Fall betrifft eine ORM-Abfrage auf Daten.",
      ],
    ),
    q(
      "WS15",
      injection,
      "Welche Kombination empfiehlt OWASP zum Auffinden von Injection in einer Web-API?",
      [
        "Code-Review und automatisierte Tests über Eingabekanäle.",
        "OWASP nennt beide Ansätze einschließlich Fuzzing.",
      ],
      [
        "Unit-Tests für die erwarteten Standardwerte.",
        "Feindliche Eingaben und weitere Kanäle bleiben ungeprüft.",
      ],
      [
        "Ein Scan der bekannten Bibliotheksversionen.",
        "Ein Dependency-Scan findet keine selbst gebaute unsichere Abfrage.",
      ],
    ),
    q(
      "WS16",
      mdnSecurity,
      "Wie sollten aktive und passive Ressourcen einer HTTPS-Seite geladen werden?",
      [
        "Ebenfalls über HTTPS.",
        "MDN empfiehlt sichere Ressourcenladung für beide Arten.",
      ],
      [
        "Aktive Skripte über HTTP und Bilder über HTTPS.",
        "Auch aktive Ressourcen brauchen HTTPS.",
      ],
      [
        "Nach zufälliger Wahl des Browsers.",
        "Die Seite sollte die sichere Ressource festlegen.",
      ],
    ),
    q(
      "WS17",
      mdnSecurity,
      "Welche Wirkung hat HSTS für spätere Verbindungen?",
      [
        "Der Browser soll die Site über HTTPS kontaktieren.",
        "MDN beschreibt diese HSTS-Vorgabe.",
      ],
      [
        "Die App prüft damit Datensatzberechtigungen.",
        "HSTS betrifft Transport, nicht Autorisierung.",
      ],
      [
        "Der Browser führt damit geprüfte Skripte aus.",
        "Skriptausführung ist kein HSTS-Ziel.",
      ],
    ),
    q(
      "WS18",
      mdnSecurity,
      "Wofür dient eine Content Security Policy auf einer Weboberfläche?",
      [
        "Sie begrenzt ladbaren Code und dessen erlaubte Aktionen.",
        "MDN beschreibt CSP als fein abgestufte Kontrolle gegen unter anderem XSS.",
      ],
      [
        "Sie ersetzt jede sichere DOM-Verarbeitung.",
        "MDN beschreibt CSP als Maßnahme zur Risikominderung, nicht als vollständigen Ersatz.",
      ],
      [
        "Sie prüft die Identität jedes API-Nutzers.",
        "CSP steuert Browserressourcen, nicht API-Autorisierung.",
      ],
    ),
    q(
      "WS19",
      mdnSecurity,
      "Eine fremde Seite bettet die App in ein iframe ein und täuscht Klicks vor. Welche Schutzrichtung passt?",
      [
        "Steuern, wer die Seite einbetten darf.",
        "MDN nennt Framing-Kontrolle gegen Clickjacking.",
      ],
      [
        "Die Klickziele in React anders anordnen.",
        "Fremdes Framing bleibt möglich.",
      ],
      [
        "Den API-Zugriff mit CORS begrenzen.",
        "CORS regelt nicht die Einbettung der Oberfläche.",
      ],
    ),
    q(
      "WS20",
      mdnSecurity,
      "Welche Datenschutzwirkung kann eine passende Referrer-Policy haben?",
      [
        "Sie begrenzt die Weitergabe interner URLs über den Referer-Header.",
        "MDN nennt diese Leckage als Ziel.",
      ],
      [
        "Sie begrenzt externe Origins für API-Antworten.",
        "Das ist die Aufgabe von CORS.",
      ],
      [
        "Sie schränkt nachladbare Skripte ein.",
        "Das ist eine Aufgabe von CSP.",
      ],
    ),
    q(
      "WS21",
      promptInjection,
      "Ein Coding-Agent liest ein fremdes Issue mit der Anweisung, Geheimnisse hochzuladen. Wie ist der Inhalt zu behandeln?",
      [
        "Als unvertrauenswürdige Daten statt als neue Arbeitsanweisung.",
        "OWASP empfiehlt externe Inhalte zu trennen und zu kennzeichnen.",
      ],
      [
        "Als vorrangige Projektregel.",
        "Ein fremdes Issue darf die Auftragsgrenze nicht überschreiben.",
      ],
      [
        "Als automatische Freigabe für Werkzeugaktionen.",
        "Externer Text erteilt keine Berechtigung.",
      ],
    ),
    q(
      "WS22",
      promptInjection,
      "Eine Websuche liefert eine Seite mit versteckten Befehlen für den Agenten. Welche Angriffsklasse beschreibt das?",
      [
        "Indirekte Prompt Injection.",
        "Die Anweisung gelangt über fremden Seiteninhalt in den Modellkontext.",
      ],
      [
        "Eine reguläre Nutzerfreigabe.",
        "Die Seite stammt nicht vom berechtigten Nutzer.",
      ],
      [
        "Ein TLS-Konfigurationsfehler.",
        "Der Kern ist die eingeschleuste Anweisung.",
      ],
    ),
    q(
      "WS23",
      promptInjection,
      "Welche technische Prüfung hilft bei einem vom Agenten erzeugten strukturierten Ergebnis?",
      [
        "Das erwartete Format deterministisch validieren.",
        "OWASP empfiehlt definierte Ausgabeformate und Codevalidierung.",
      ],
      [
        "Dem Modell unbegrenzte Ausgabeformate erlauben.",
        "Damit entfällt die prüfbare Struktur.",
      ],
      [
        "Den Namen der Ergebnisdatei ansehen.",
        "Ein Dateiname validiert den Inhalt nicht.",
      ],
    ),
    q(
      "WS24",
      excessiveAgency,
      "Ein Agent soll nur Rechnungen lesen, besitzt aber Schreib- und Löschrechte. Welche Schwäche liegt vor?",
      [
        "Übermäßige Berechtigungen.",
        "OWASP nennt Rechte über den eigentlichen Zweck hinaus Excessive Agency.",
      ],
      [
        "Eine sichere Standardverweigerung.",
        "Zusätzliche Schreibrechte widersprechen minimalen Rechten.",
      ],
      [
        "Ein rein kosmetischer Fehler.",
        "Die Rechte erlauben unerwünschte Änderungen.",
      ],
    ),
    q(
      "WS25",
      excessiveAgency,
      "Ein Agent darf einen Beitrag vorbereiten und veröffentlichen. Was begrenzt die Veröffentlichung als risikoreiche Aktion?",
      [
        "Eine konkrete menschliche Freigabe vor dem Posten.",
        "OWASP empfiehlt Zustimmung vor folgenreichen Agentenaktionen.",
      ],
      [
        "Ein langer Systemprompt ohne Werkzeugkontrolle.",
        "Promptlänge ersetzt keine Freigabe.",
      ],
      [
        "Die automatische Veröffentlichung nach dem Entwurf.",
        "Das überspringt die risikoreiche Entscheidung.",
      ],
    ),
  ],
};
