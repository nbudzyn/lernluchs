import type { Question } from "../../shared/question";

const injection = "https://genai.owasp.org/llmrisk/llm01-prompt-injection/";
const cloudAgent =
  "https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/risks-and-mitigations";
const disclosure =
  "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/";
const credentials =
  "https://docs.github.com/en/rest/authentication/keeping-your-api-credentials-secure";
const review =
  "https://docs.github.com/en/copilot/tutorials/review-ai-generated-code";
const staging = "https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging";
const commit = "https://git-scm.com/docs/git-commit";

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

export const remainingQuestions: Record<string, Question[]> = {
  "coding-agent-context-and-trust-boundaries": [
    question(
      "CT01",
      injection,
      "Ein Agent liest einen fremden Issue-Kommentar mit einer Anweisung zum Ändern von Berechtigungen. Wie ist diese Anweisung einzuordnen?",
      [
        "Als unvertrauenswürdiger Inhalt",
        "Der Issue-Kommentar ist externe Eingabe und kein autorisierter Arbeitsauftrag.",
      ],
      [
        "Als neue Projektvorgabe",
        "Eine fremde Eingabe erhält durch das Lesen keine Weisungsbefugnis.",
      ],
      [
        "Als bestandene Sicherheitsprüfung",
        "Das Lesen des Kommentars prüft keine Berechtigungsänderung.",
      ],
    ),
    question(
      "CT02",
      injection,
      "Wann liegt eine indirekte Prompt Injection vor?",
      [
        "Wenn eine externe Datei das Modellverhalten umlenkt",
        "OWASP nennt Dateien und Webseiten als externe Träger indirekter Anweisungen.",
      ],
      [
        "Wenn der Auftraggeber seine eigene Eingabe präzisiert",
        "Eine direkte Nutzereingabe ist kein externer Träger einer indirekten Injection.",
      ],
      [
        "Wenn ein Test einen Fehler meldet",
        "Ein Testfehler ist für sich noch keine verhaltenslenkende Anweisung.",
      ],
    ),
    question(
      "CT03",
      injection,
      "Welche Eingabe kann eine direkte Prompt Injection auslösen?",
      [
        "Ein unmittelbar eingegebener Prompt",
        "Direkte Injection verändert das Verhalten über die Eingabe an das Modell.",
      ],
      [
        "Eine nur abgelegte Webseite",
        "Ohne Einlesen erreicht die Webseite das Modell nicht.",
      ],
      [
        "Ein nicht ausgeführter Build",
        "Ein Build ohne Modellkontext ist keine Prompt-Eingabe.",
      ],
    ),
    question(
      "CT04",
      injection,
      "Ein Agent soll eine Webseite zusammenfassen. Sie enthält versteckte Befehle. Welche Grenze ist entscheidend?",
      [
        "Webseiteninhalt bleibt Daten",
        "Die fremde Seite darf den Auftrag des Nutzers nicht überschreiben.",
      ],
      [
        "Webseiteninhalt ersetzt den Auftrag",
        "Die Seite ist eine Quelle, keine autorisierte Anweisung.",
      ],
      [
        "Unsichtbarer Text wird automatisch verworfen",
        "OWASP beschreibt auch für Menschen unsichtbare Eingaben als wirksam.",
      ],
    ),
    question(
      "CT05",
      injection,
      "Warum genügt ein Hinweis im Systemprompt gegen Injection nicht als alleinige Kontrolle?",
      [
        "Modellverhalten ist nicht zuverlässig erzwingbar",
        "OWASP beschreibt keine narrensichere rein promptbasierte Abwehr.",
      ],
      [
        "Weil Systemprompts keine Aufgaben beschreiben können",
        "Sie können Verhalten eingrenzen, verhindern Injection aber nicht sicher.",
      ],
      [
        "Weil nur Binärdateien Injection tragen",
        "Auch Text aus Webseiten oder Dateien kann Anweisungen enthalten.",
      ],
    ),
    question(
      "CT06",
      injection,
      "Welche Maßnahme begrenzt die Folgen einer umgelenkten Agentenentscheidung?",
      [
        "Werkzeugrechte auf das Nötige begrenzen",
        "Least Privilege verkleinert die möglichen unerwünschten Aktionen.",
      ],
      [
        "Alle Werkzeuge dauerhaft freigeben",
        "Breitere Rechte vergrößern die Wirkung eines Angriffs.",
      ],
      [
        "Nur den Prompt länger formulieren",
        "Zusätzlicher Prompttext ersetzt keine technische Rechtebegrenzung.",
      ],
    ),
    question(
      "CT07",
      injection,
      "Ein Agent möchte nach einem fremden Dokument einen privilegierten Schritt ausführen. Welche Kontrolle empfiehlt OWASP?",
      [
        "Menschliche Freigabe vor dem Schritt",
        "Für hochriskante privilegierte Aktionen empfiehlt OWASP Human-in-the-loop.",
      ],
      [
        "Freigabe durch dieselbe fremde Seite",
        "Die externe Seite kann keine vertrauenswürdige Freigabe erteilen.",
      ],
      [
        "Freigabe allein durch die Modellausgabe",
        "Die potenziell beeinflusste Ausgabe ersetzt keine menschliche Kontrolle.",
      ],
    ),
    question(
      "CT08",
      injection,
      "Wie sollten externe Fundstellen im Kontext eines Coding-Agenten erscheinen?",
      [
        "Getrennt und mit erkennbarer Herkunft",
        "OWASP empfiehlt, unvertrauenswürdige Inhalte zu trennen und kenntlich zu machen.",
      ],
      [
        "Vermischt mit den Kernanweisungen",
        "Eine Vermischung verschleiert die Vertrauensgrenze.",
      ],
      [
        "Als neue Systemrolle markiert",
        "Eine Rollenaufwertung gibt externen Daten unverdiente Autorität.",
      ],
    ),
    question(
      "CT09",
      injection,
      "Was kann eine deterministische Prüfung des erwarteten Ausgabeformats leisten?",
      [
        "Abweichende Ausgaben erkennen",
        "OWASP empfiehlt feste Formate und Validierung durch Code als zusätzliche Kontrolle.",
      ],
      [
        "Jede Injection sicher verhindern",
        "Formatvalidierung ist eine Minderung, keine vollständige Prävention.",
      ],
      [
        "Werkzeugrechte automatisch verringern",
        "Die Validierung einer Ausgabe ändert keine Berechtigungen.",
      ],
    ),
    question(
      "CT10",
      injection,
      "Welche Aussage zu Retrieval Augmented Generation und Prompt Injection trifft zu?",
      [
        "RAG beseitigt das Risiko nicht vollständig",
        "OWASP hält fest, dass RAG Injection nicht vollständig abwehrt.",
      ],
      [
        "RAG macht alle Fundstellen vertrauenswürdig",
        "Abgerufene Dokumente können manipulierte Anweisungen enthalten.",
      ],
      [
        "RAG ersetzt Zugriffskontrollen",
        "RAG steuert Kontext, nicht die technische Rechtevergabe.",
      ],
    ),
    question(
      "CT11",
      injection,
      "Welche Aussage zu Fine-Tuning und Prompt Injection ist belegt?",
      [
        "Fine-Tuning beseitigt das Risiko nicht vollständig",
        "OWASP nennt Fine-Tuning ausdrücklich als unvollständige Minderung.",
      ],
      [
        "Fine-Tuning macht externe Dateien autoritativ",
        "Die Herkunft einer Datei ändert sich durch Modelltraining nicht.",
      ],
      [
        "Fine-Tuning validiert jeden Werkzeugaufruf",
        "Ein Trainingsverfahren prüft keine konkreten Laufzeitaktionen.",
      ],
    ),
    question(
      "CT12",
      injection,
      "Ein manipuliertes Dokument gelangt in einen RAG-Index. Was kann beim Abruf passieren?",
      [
        "Das Modell übernimmt irreführende Anweisungen",
        "OWASP beschreibt manipulierte abgerufene Dokumente als Angriffsszenario.",
      ],
      [
        "Der Index bestätigt den Inhalt als Auftrag",
        "Ein Index speichert Dokumente, er autorisiert keine Anweisungen.",
      ],
      [
        "Nur die Suchreihenfolge ändert sich",
        "Der abgerufene Inhalt kann auch die Antwort beeinflussen.",
      ],
    ),
    question(
      "CT13",
      injection,
      "Kann ein Bild mit harmloser Bildunterschrift eine Injection tragen?",
      [
        "Ja, versteckte Bildinhalte können wirken",
        "OWASP beschreibt multimodale Injection über Inhalte im Bild.",
      ],
      [
        "Nur wenn die Bildunterschrift Befehle enthält",
        "Der Angriff kann im Bild selbst verborgen sein.",
      ],
      [
        "Nur wenn die Bilddatei ausführbar ist",
        "Das Modell kann Bildinhalt ohne Ausführung als Eingabe verarbeiten.",
      ],
    ),
    question(
      "CT14",
      injection,
      "Warum sind Base64-kodierte Anweisungen in externem Text relevant?",
      [
        "Sie können Filter umgehen und das Modell beeinflussen",
        "OWASP nennt kodierte und verschleierte Anweisungen als Angriffsszenario.",
      ],
      [
        "Sie sind durch die Kodierung vertrauenswürdig",
        "Kodierung ändert weder Herkunft noch Berechtigung.",
      ],
      [
        "Sie können nur Build-Artefakte verändern",
        "Die Gefahr betrifft die Interpretation durch das Modell.",
      ],
    ),
    question(
      "CT15",
      injection,
      "Wovon hängt die Auswirkung einer erfolgreichen Injection besonders ab?",
      [
        "Vom Geschäftskontext und den Handlungsmöglichkeiten des Agenten",
        "OWASP nennt Kontext und Agency als maßgeblich für die Schwere.",
      ],
      [
        "Nur von der Länge des Angreifertexts",
        "Länge allein beschreibt die möglichen Folgen nicht.",
      ],
      [
        "Nur vom Dateiformat der Quelle",
        "Auch Text und Bilder können Angriffe tragen; die Rechte sind entscheidend.",
      ],
    ),
    question(
      "CT16",
      injection,
      "Ein Agent gibt nach Lektüre einer Seite einen Link aus, der private Konversationsteile überträgt. Welches Angriffsziel zeigt das Beispiel?",
      [
        "Datenabfluss über manipulierte Ausgabe",
        "OWASP beschreibt einen Link in der Ausgabe als Weg zur Exfiltration.",
      ],
      [
        "Bessere Quellenzitierung",
        "Der Link dient im Beispiel dem Abfluss statt der Belegführung.",
      ],
      [
        "Lokale Formatvalidierung",
        "Das Beispiel betrifft einen externen Zielserver, keine lokale Formatprüfung.",
      ],
    ),
    question(
      "CT17",
      injection,
      "Was leisten Eingabe- und Ausgabefilter gegen manipulative Inhalte?",
      [
        "Sie können auffällige Inhalte erkennen und behandeln",
        "OWASP empfiehlt Regeln und Prüfungen für unerlaubte oder schädliche Inhalte.",
      ],
      [
        "Sie machen externe Quellen automatisch vertrauenswürdig",
        "Ein Filter ändert nicht die Herkunft einer Quelle.",
      ],
      [
        "Sie ersetzen Rechtebegrenzung bei Werkzeugen",
        "Filter sind eine zusätzliche Maßnahme und setzen keine Werkzeugrechte durch.",
      ],
    ),
    question(
      "CT18",
      injection,
      "Welche Prüfung untersucht gezielt die Widerstandsfähigkeit der Vertrauensgrenzen?",
      [
        "Adversarial Tests mit Angriffssimulationen",
        "OWASP empfiehlt regelmäßige Angriffs- und Penetrationstests.",
      ],
      [
        "Nur ein erfolgreicher Produktionsbuild",
        "Ein Build prüft nicht die Reaktion auf manipulative Inhalte.",
      ],
      [
        "Nur das Zählen von Quelldateien",
        "Die Dateizahl sagt nichts über Grenzverletzungen aus.",
      ],
    ),
    question(
      "CT19",
      injection,
      "Was ist Jailbreaking im Verhältnis zu Prompt Injection?",
      [
        "Eine Form von Prompt Injection",
        "OWASP beschreibt Jailbreaking als Injection zur Umgehung von Schutzvorgaben.",
      ],
      [
        "Ein Verfahren zur Quellenprüfung",
        "Jailbreaking zielt auf die Umgehung von Schutzvorgaben.",
      ],
      [
        "Eine technische Rollenfreigabe",
        "Der Angriff erteilt keine legitime Berechtigung.",
      ],
    ),
    question(
      "CT20",
      cloudAgent,
      "Wer darf den GitHub Copilot Cloud Agent laut GitHub mit einer Aufgabe auslösen?",
      [
        "Personen mit Schreibzugriff",
        "GitHub begrenzt das Auslösen auf Nutzer mit Schreibzugriff im Repository.",
      ],
      [
        "Alle Leser des Repositories",
        "Kommentare ohne Schreibzugriff werden dem Agenten dafür nicht vorgelegt.",
      ],
      [
        "Jede Person mit einem öffentlichen Link",
        "Ein Link gewährt keinen Schreibzugriff und keine Auslöseberechtigung.",
      ],
    ),
    question(
      "CT21",
      cloudAgent,
      "Wie begrenzt GitHub den Push-Bereich seines Cloud Agents?",
      [
        "Auf einen einzelnen Branch",
        "GitHub beschränkt den Agenten auf den Branch seiner Aufgabe.",
      ],
      [
        "Auf alle Branches des Repositories",
        "Der Agent erhält gerade keinen allgemeinen Push-Zugriff.",
      ],
      [
        "Auf lokale Dateien ohne Branch",
        "Der Cloud Agent kann Änderungen in einem begrenzten Branch bereitstellen.",
      ],
    ),
    question(
      "CT22",
      cloudAgent,
      "Was geschieht mit versteckten HTML-Kommentaren in Issues für den Cloud Agent?",
      [
        "Sie werden vor der Übergabe herausgefiltert",
        "GitHub nennt versteckte Zeichen und HTML-Kommentare als gefilterte Eingaben.",
      ],
      [
        "Sie erhalten Systempriorität",
        "Ein Kommentar ist keine Systemanweisung.",
      ],
      [
        "Sie werden zu Repository-Secrets",
        "Filtern ändert keine Speicherung als Secret.",
      ],
    ),
    question(
      "CT23",
      cloudAgent,
      "Wer entscheidet über das Mergen eines vom Cloud Agent erstellten Draft-PR?",
      [
        "Ein Mensch nach Review",
        "GitHub verlangt menschliche Prüfung und Merge-Entscheidung.",
      ],
      [
        "Der Agent durch Selbstfreigabe",
        "Der Agent kann seinen Draft-PR nicht selbst freigeben oder mergen.",
      ],
      [
        "Ein beliebiger Issue-Kommentar",
        "Ein Kommentar ersetzt die erforderliche Review- und Merge-Berechtigung nicht.",
      ],
    ),
    question(
      "CT24",
      cloudAgent,
      "Welche Kontrolle gilt standardmäßig für Workflows aus einem Cloud-Agent-PR?",
      [
        "Freigabe durch Schreibberechtigte vor dem Lauf",
        "GitHub beschreibt die manuelle Approve-and-run-Freigabe als Standard.",
      ],
      [
        "Sofortiger Lauf ohne Prüfung",
        "Standardmäßig warten die Workflows auf eine berechtigte Freigabe.",
      ],
      [
        "Freigabe durch den PR-Text",
        "Der PR-Inhalt autorisiert keinen Workflow-Lauf.",
      ],
    ),
    question(
      "CT25",
      cloudAgent,
      "Wie lassen sich ereignisgesteuerte Agentenaufgaben gegen ungewollte Werkzeugnutzung eingrenzen?",
      [
        "Nur benötigte Werkzeuge zulassen",
        "GitHub empfiehlt die Werkzeugauswahl passend zur Aufgabe, weil Ereigniseingaben unvertrauenswürdig sein können.",
      ],
      [
        "Alle verfügbaren Werkzeuge anbieten",
        "Breite Werkzeugrechte erhöhen die mögliche Wirkung fremder Eingaben.",
      ],
      [
        "Ereigniseingaben als Systemanweisung setzen",
        "Ein Ereignis verleiht fremden Inhalten keine höhere Vertrauensstufe.",
      ],
    ),
  ],
  "protect-secrets-and-sensitive-data-with-ai": [
    question(
      "PS01",
      disclosure,
      "Welche Daten in einem Spring-Fehlerlog gelten vor der Weitergabe an ein KI-Werkzeug als sensibel?",
      [
        "Personenbeziehbare Angaben und Zugangsdaten",
        "OWASP zählt PII und Sicherheitszugangsdaten ausdrücklich zu sensiblen Informationen.",
      ],
      [
        "Nur kompilierte Klassendateien",
        "Sensibilität hängt vom enthaltenen Inhalt ab, nicht von dieser Dateiform.",
      ],
      [
        "Nur bereits veröffentlichte Dokumentation",
        "Öffentliches Material ist hier nicht der typische Schutzgegenstand; PII und Tokens sind es.",
      ],
    ),
    question(
      "PS02",
      disclosure,
      "Welches Risiko entsteht, wenn vertrauliche Kundendaten in eine KI-Anfrage kopiert werden?",
      [
        "Unbeabsichtigte Offenlegung über Ein- oder Ausgabe",
        "OWASP warnt sowohl vor sensibler Eingabe als auch vor späterer Ausgabe.",
      ],
      [
        "Automatische Anonymisierung durch das Modell",
        "Die Eingabe wird nicht schon durch Modellverarbeitung anonymisiert.",
      ],
      [
        "Garantierte Beschränkung auf den lokalen Rechner",
        "Die Quelle gibt keine solche Garantie für KI-Anwendungen.",
      ],
    ),
    question(
      "PS03",
      disclosure,
      "Was sollte vor der Nutzung echter Kundendaten als Trainingsmaterial geschehen?",
      [
        "Sensible Inhalte bereinigen oder maskieren",
        "OWASP empfiehlt Sanitization, bevor Nutzerdaten in das Training gelangen.",
      ],
      [
        "Kundendaten unverändert übernehmen",
        "Das erhöht die Gefahr späterer Offenlegung.",
      ],
      [
        "Nur die Dateiendung ändern",
        "Eine andere Endung entfernt keine sensiblen Inhalte.",
      ],
    ),
    question(
      "PS04",
      disclosure,
      "Warum reicht eine Systemanweisung ‚Keine Geheimnisse ausgeben‘ nicht aus?",
      [
        "Sie kann umgangen oder missachtet werden",
        "OWASP nennt Promptvorgaben eine mögliche Minderung, aber keine verlässliche Sperre.",
      ],
      [
        "Sie löscht Geheimnisse aus allen Eingaben",
        "Eine Anweisung entfernt keine bereits übergebenen Daten.",
      ],
      [
        "Sie ersetzt die Zugriffsrechte des Systems",
        "Prompttext setzt keine technischen Berechtigungen durch.",
      ],
    ),
    question(
      "PS05",
      disclosure,
      "Welche Eingabeprüfung mindert sensible Offenlegung in einer KI-Anwendung?",
      [
        "Erkennung und Filterung sensibler Inhalte",
        "OWASP empfiehlt strikte Eingabevalidierung für schädliche oder sensible Daten.",
      ],
      [
        "Prüfung nur auf gültiges JSON",
        "Syntaktisch gültiges JSON kann weiterhin Geheimnisse enthalten.",
      ],
      [
        "Prüfung nur nach der Veröffentlichung",
        "Späte Prüfung verhindert die vorherige Weitergabe nicht.",
      ],
    ),
    question(
      "PS06",
      disclosure,
      "Wie sollte ein Modell Zugriff auf interne Datenspeicher erhalten?",
      [
        "Nur auf für die Aufgabe nötige Daten",
        "OWASP empfiehlt Least Privilege und begrenzte Datenquellen.",
      ],
      [
        "Auf alle Daten zur Vermeidung von Lücken",
        "Breiter Zugriff vergrößert die Gefahr unerwünschter Offenlegung.",
      ],
      [
        "Über einen gemeinsamen Administratorschlüssel",
        "Ein umfassender Schlüssel widerspricht der beschränkten Rechtevergabe.",
      ],
    ),
    question(
      "PS07",
      disclosure,
      "Welche Art von Unternehmensinformation kann eine LLM-Ausgabe unbeabsichtigt preisgeben?",
      [
        "Vertrauliche Geschäftsdaten",
        "OWASP nennt geschäftliche Geheimnisse als mögliches Offenlegungsziel.",
      ],
      [
        "Nur die öffentliche Versionsnummer",
        "Die Gefahr ist nicht auf öffentlich bekannte Kennungen begrenzt.",
      ],
      [
        "Nur den Namen des verwendeten Browsers",
        "Auch vertrauliche Geschäftsinhalte können in Ausgaben erscheinen.",
      ],
    ),
    question(
      "PS08",
      disclosure,
      "Was sollten Nutzende über gespeicherte KI-Eingaben erfahren können?",
      [
        "Regeln zu Aufbewahrung, Nutzung und Löschung",
        "OWASP empfiehlt Transparenz über Datenverwendung und Aufbewahrung.",
      ],
      [
        "Nur die Modellbezeichnung",
        "Der Modellname erklärt nicht, wie Eingaben aufbewahrt und genutzt werden.",
      ],
      [
        "Nur die Größe des Eingabefelds",
        "Die Feldgröße beschreibt keine Datenverarbeitung.",
      ],
    ),
    question(
      "PS09",
      disclosure,
      "Welche Möglichkeit nennt OWASP im Zusammenhang mit Trainingsdaten?",
      [
        "Eine Abwahl der Einbeziehung eigener Daten",
        "OWASP empfiehlt eine Opt-out-Möglichkeit für Training mit Nutzerdaten.",
      ],
      [
        "Eine Pflicht zur Veröffentlichung aller Prompts",
        "Öffentliche Prompts würden Schutzinteressen eher verletzen.",
      ],
      [
        "Eine automatische Weitergabe an andere Nutzer",
        "Das ist ein Offenlegungsrisiko und keine Schutzmaßnahme.",
      ],
    ),
    question(
      "PS10",
      disclosure,
      "Was leisten Tokenisierung und Redaction vor der Modellverarbeitung?",
      [
        "Sie ersetzen oder entfernen sensible Werte",
        "OWASP beschreibt diese Verfahren als Vorverarbeitung vertraulicher Inhalte.",
      ],
      [
        "Sie verleihen dem Modell weitere Datenrechte",
        "Vorverarbeitung vergibt keine Zugriffsrechte.",
      ],
      [
        "Sie bestätigen jede Modellantwort fachlich",
        "Datenbereinigung ist keine inhaltliche Antwortprüfung.",
      ],
    ),
    question(
      "PS11",
      disclosure,
      "Welche Art von Unterlagen nennt OWASP ausdrücklich als sensible Information?",
      [
        "Gesundheits- und Rechtsunterlagen",
        "OWASP führt Health Records und rechtliche Dokumente auf.",
      ],
      [
        "Nur öffentliches HTML und CSS",
        "Öffentliche Oberflächendateien sind nicht die genannte sensible Kategorie.",
      ],
      [
        "Nur Paketnamen aus einer öffentlichen Registry",
        "Öffentliche Paketnamen sind nicht das angeführte Schutzgut.",
      ],
    ),
    question(
      "PS12",
      disclosure,
      "Was kann bei unzureichender Bereinigung zwischen Nutzenden einer KI-Anwendung passieren?",
      [
        "Antworten enthalten persönliche Daten anderer Personen",
        "OWASP beschreibt dies als Beispiel unbeabsichtigter Offenlegung.",
      ],
      [
        "Alle Antworten werden automatisch anonym",
        "Gerade unzureichende Bereinigung kann personenbezogene Daten offenlegen.",
      ],
      [
        "Nur lokale Build-Logs werden verändert",
        "Das Beispiel betrifft die Ausgabe an einen anderen Nutzer.",
      ],
    ),
    question(
      "PS13",
      credentials,
      "Welche GitHub-Authentifizierung passt zu einem API-Aufruf im Namen einer Organisation oder anderer Personen?",
      [
        "Eine GitHub App",
        "GitHub empfiehlt für diesen Anwendungsfall eine GitHub App.",
      ],
      [
        "Ein persönlicher Token eines beliebigen Teammitglieds",
        "Ein persönlicher Token repräsentiert dessen individuelle Rechte und ist dafür nicht die empfohlene Wahl.",
      ],
      [
        "Der öffentliche Repository-Link",
        "Ein Link ist keine API-Authentifizierung.",
      ],
    ),
    question(
      "PS14",
      credentials,
      "Welche GitHub-Authentifizierung ist für einen Actions-Workflow vorgesehen?",
      [
        "Das eingebaute GITHUB_TOKEN",
        "GitHub nennt GITHUB_TOKEN für API-Zugriffe aus Workflows.",
      ],
      [
        "Ein im Workflowtext veröffentlichter persönlicher Token",
        "Veröffentlichte Zugangsdaten sind unsicher und nicht der empfohlene Workflow-Mechanismus.",
      ],
      [
        "Ein Token aus einem fremden Issue",
        "Ein fremder Issue ist keine vertrauenswürdige Quelle für Zugangsdaten.",
      ],
    ),
    question(
      "PS15",
      credentials,
      "Wie sollten Berechtigungen eines neuen persönlichen GitHub-Tokens gewählt werden?",
      [
        "Nur die benötigten Scopes oder Rechte",
        "GitHub empfiehlt die kleinsten erforderlichen Berechtigungen.",
      ],
      [
        "Alle Rechte für spätere Aufgaben",
        "Vorratsrechte erhöhen die Auswirkungen eines Lecks.",
      ],
      [
        "Die Rechte des ältesten vorhandenen Tokens",
        "Ein vorhandener Token bestimmt nicht den tatsächlichen Bedarf der neuen Aufgabe.",
      ],
    ),
    question(
      "PS16",
      credentials,
      "Wie sollte die Gültigkeitsdauer eines persönlichen Tokens festgelegt werden?",
      [
        "So kurz wie für die Aufgabe nötig",
        "GitHub empfiehlt eine Ablaufzeit entsprechend dem erforderlichen Zeitraum.",
      ],
      [
        "Unbegrenzt für jede Kurzaufgabe",
        "Unnötig lange Gültigkeit verlängert das Risiko bei Offenlegung.",
      ],
      [
        "Gleich der Lebensdauer des Repositories",
        "Die Repository-Lebensdauer sagt nichts über die nötige Tokendauer aus.",
      ],
    ),
    question(
      "PS17",
      credentials,
      "Welche persönliche Tokenart empfiehlt GitHub gegenüber dem klassischen PAT?",
      [
        "Fine-grained personal access token",
        "GitHub empfiehlt fein abgestufte persönliche Tokens statt klassischer PATs.",
      ],
      [
        "Ein Token ohne Scopes und Ablaufdatum",
        "Fehlende Begrenzung widerspricht den Empfehlungen.",
      ],
      [
        "Ein gemeinsam genutzter klassischer PAT",
        "Geteilte persönliche Tokens erschweren die Begrenzung und sind nicht empfohlen.",
      ],
    ),
    question(
      "PS18",
      credentials,
      "Kann ein GitHub-Token Rechte verleihen, die sein Besitzer nicht hat?",
      [
        "Nein, er bleibt auf Besitzerrechte begrenzt",
        "GitHub erklärt, dass Tokenrechte zusätzlich durch Scopes oder Permissions eingegrenzt werden.",
      ],
      [
        "Ja, sobald ein Scope gesetzt ist",
        "Scopes erweitern die Rechte des Besitzers nicht.",
      ],
      [
        "Ja, wenn er in Actions liegt",
        "Der Speicherort verleiht keine zusätzlichen Besitzerrechte.",
      ],
    ),
    question(
      "PS19",
      credentials,
      "Darf ein unverschlüsselter API-Token in ein privates Repository eingecheckt werden?",
      [
        "Nein, auch private Repositories sind ungeeignet",
        "GitHub warnt ausdrücklich vor unverschlüsselten Credentials in jedem Repository.",
      ],
      [
        "Ja, wenn das Repository privat ist",
        "Privatheit ersetzt keinen Secret-Speicher.",
      ],
      [
        "Ja, wenn die Datei selten geändert wird",
        "Eine seltene Änderung schützt den Token nicht vor Zugriff.",
      ],
    ),
    question(
      "PS20",
      credentials,
      "Wie sollten Zugangsdaten in einem GitHub-Actions-Workflow abgelegt werden?",
      [
        "Als verschlüsseltes Actions-Secret",
        "GitHub nennt verschlüsselte Secrets für Workflow-Zugangsdaten.",
      ],
      [
        "Als Klartext im Workflow-YAML",
        "Klartext im Repository ist keine sichere Ablage.",
      ],
      [
        "Als Wert in einem öffentlichen Issue",
        "Ein Issue ist kein geschützter Credential-Speicher.",
      ],
    ),
    question(
      "PS21",
      credentials,
      "Warum sollte ein persönlicher Token nicht als Klartext in der Kommandozeile stehen?",
      [
        "Er wird dadurch unnötig offengelegt",
        "GitHub rät ausdrücklich vom Klartext-Token in Befehlszeilen ab.",
      ],
      [
        "Weil GitHub solche Tokens nicht akzeptiert",
        "Das Problem ist die unsichere Verwendung, nicht eine generelle Ungültigkeit.",
      ],
      [
        "Weil nur SSH in Skripten funktioniert",
        "GitHub beschreibt auch sichere API-Authentifizierung für Skripte.",
      ],
    ),
    question(
      "PS22",
      credentials,
      "Wie sollten Zugangsdaten in Anwendungscode gehalten werden?",
      [
        "Außerhalb des Codes in einem Secret Manager",
        "GitHub warnt vor Hardcoding und nennt Secret Manager als Alternative.",
      ],
      [
        "Direkt in einer Konstante der Quellklasse",
        "Hardcoding gibt Geheimnisse mit dem Code weiter.",
      ],
      [
        "In einem Kommentar neben der API-Methode",
        "Ein Kommentar ist ebenfalls Teil des offengelegten Codes.",
      ],
    ),
    question(
      "PS23",
      credentials,
      "Ein Team braucht denselben Zugangswert. Welche Ablage beschreibt GitHub?",
      [
        "Ein sicheres gemeinsames Geheimnissystem",
        "GitHub nennt geschützte Team-Speicher für gemeinsam benötigte Credentials.",
      ],
      [
        "Eine unverschlüsselte Rundmail",
        "GitHub rät vom unverschlüsselten Versand ab.",
      ],
      [
        "Ein persönlicher Token in der README",
        "Eine README ist kein geeigneter gemeinsamer Geheimnisspeicher.",
      ],
    ),
    question(
      "PS24",
      credentials,
      "Was ist nach einem bekannt gewordenen GitHub-Token erforderlich?",
      [
        "Neuen Wert erzeugen, ersetzen und alten löschen",
        "GitHub beschreibt genau diese Schritte im Wiederherstellungsplan.",
      ],
      [
        "Nur die Fundstelle aus dem letzten Commit entfernen",
        "Der kompromittierte Token bleibt bis zur Sperrung nutzbar.",
      ],
      [
        "Nur die Ablaufzeit verlängern",
        "Eine längere Gültigkeit behebt die Kompromittierung nicht.",
      ],
    ),
    question(
      "PS25",
      credentials,
      "Wozu dient GitHubs Secret Scanning im Umgang mit Zugangsdaten?",
      [
        "Bereits gepushte Geheimnisse finden oder künftige Pushes blockieren",
        "GitHub nennt Erkennung und Push-Schutz als Einsatzzwecke.",
      ],
      [
        "Alle kompromittierten Tokens automatisch neu ausstellen",
        "Secret Scanning ersetzt keinen Token und rotiert ihn nicht selbst.",
      ],
      [
        "Jede KI-Eingabe vor der Übertragung bereinigen",
        "Secret Scanning in GitHub ersetzt keine Bereinigung von KI-Eingaben.",
      ],
    ),
  ],
  "review-and-accept-ai-generated-changes": [
    question(
      "RV01",
      review,
      "Was sollte beim Review eines KI-generierten Patches zuerst geprüft werden?",
      [
        "Funktion durch Tests und statische Analyse",
        "GitHub empfiehlt automatisierte Tests und statische Analyse als ersten Schritt.",
      ],
      [
        "Nur die sprachliche Qualität der Zusammenfassung",
        "Eine gute Beschreibung belegt kein korrektes Verhalten.",
      ],
      [
        "Nur die Anzahl geänderter Zeilen",
        "Die Zeilenzahl prüft weder Funktion noch Sicherheit.",
      ],
    ),
    question(
      "RV02",
      review,
      "Der generierte Spring-Code kompiliert. Welche zusätzliche Prüfung empfiehlt GitHub?",
      [
        "Tests ausführen und Warnungen beachten",
        "Kompilierung und bestandene Tests ohne neue Warnungen gehören zur funktionalen Prüfung.",
      ],
      [
        "Alle bestehenden Tests überspringen",
        "Übersprungene Tests nehmen der Prüfung Aussagekraft.",
      ],
      [
        "Nur das generierte Diff verkleinern",
        "Ein kleines Diff sagt nichts über die geprüfte Funktion aus.",
      ],
    ),
    question(
      "RV03",
      review,
      "Was wird beim Abgleich eines KI-Patches mit dem Auftrag geprüft?",
      [
        "Ob Zweck und Anforderungen getroffen sind",
        "GitHub empfiehlt, Kontext und Intent gegen Anforderungen und Design abzugleichen.",
      ],
      [
        "Ob der Patch besonders viele Dateien berührt",
        "Die Dateizahl ersetzt keine Prüfung des beabsichtigten Verhaltens.",
      ],
      [
        "Ob der Agent dieselben Wörter wie im Prompt nutzt",
        "Gleiche Wörter beweisen keine fachliche Umsetzung.",
      ],
    ),
    question(
      "RV04",
      review,
      "Warum sind Architekturkonventionen im Review relevant?",
      [
        "Der Patch muss zum Projektdesign passen",
        "GitHub nennt die Übereinstimmung mit Architektur und Konventionen als Reviewpunkt.",
      ],
      [
        "Sie beweisen automatisch Fehlerfreiheit",
        "Auch konformer Code kann fachlich falsch sein.",
      ],
      [
        "Sie gelten nur für handgeschriebenen Code",
        "Die Reviewregeln gelten ebenso für KI-generierten Code.",
      ],
    ),
    question(
      "RV05",
      review,
      "Welche Frage hilft, verdeckte Annahmen eines Agenten im Patch aufzudecken?",
      [
        "Welche Geschäftsregeln oder Nutzungsszenarien wurden angenommen?",
        "GitHub empfiehlt, Annahmen über Logik, Design und Nutzerverhalten offenzulegen.",
      ],
      [
        "Wie viele Tokens wurden erzeugt?",
        "Der Tokenverbrauch zeigt keine fachlichen Annahmen.",
      ],
      [
        "Welche Schriftart hatte der Editor?",
        "Die Darstellung des Editors betrifft die Annahmen im Code nicht.",
      ],
    ),
    question(
      "RV06",
      review,
      "Welche Qualität sollte ein Reviewer bei generiertem Code zusätzlich zu grünen Tests beurteilen?",
      [
        "Lesbarkeit und Wartbarkeit",
        "GitHub nennt menschliche Qualitätsmaßstäbe über automatische Prüfungen hinaus.",
      ],
      [
        "Nur Laufzeit auf dem Rechner des Agenten",
        "Eine einzelne Laufzeit ersetzt keine Wartbarkeitsprüfung.",
      ],
      [
        "Nur die Anzahl der Kommentare",
        "Viele Kommentare machen schwer verständlichen Code nicht automatisch wartbar.",
      ],
    ),
    question(
      "RV07",
      review,
      "Wann sollte KI-generierter Code eher neu gestaltet als übernommen werden?",
      [
        "Wenn Refactoring aufwendiger als Neuschreiben wäre",
        "GitHub warnt vor schwer nachvollziehbarem Code mit unverhältnismäßigem Refactoring-Aufwand.",
      ],
      [
        "Sobald ein Kommentar enthalten ist",
        "Kommentare sind für sich kein Grund zur Verwerfung.",
      ],
      [
        "Sobald der Code mehrere Dateien betrifft",
        "Ein zusammenhängender Patch darf mehrere Dateien berühren.",
      ],
    ),
    question(
      "RV08",
      review,
      "Ein KI-Patch enthält komplizierte, kaum erklärte Logik. Welche Qualitätsfrage ist angebracht?",
      [
        "Ist die Logik für spätere Wartung ausreichend dokumentiert?",
        "GitHub nennt verständlichen, gut dokumentierten Code als Reviewziel.",
      ],
      [
        "Ist die Datei kürzer als die bisherige Version?",
        "Eine kürzere Datei kann trotzdem schwer verständlich sein.",
      ],
      [
        "Hat der Agent die Logik selbst vorgeschlagen?",
        "Die Herkunft des Vorschlags belegt keine Wartbarkeit.",
      ],
    ),
    question(
      "RV09",
      review,
      "Ein Agent fügt eine neue npm-Abhängigkeit hinzu. Was sollte vor Übernahme geprüft werden?",
      [
        "Existenz und aktive Pflege des Pakets",
        "GitHub warnt vor erfundenen oder ungepflegten Paketen.",
      ],
      [
        "Nur die Kürze des Paketnamens",
        "Ein kurzer Name sagt nichts über Existenz oder Pflege.",
      ],
      [
        "Nur die Zustimmung des Agenten",
        "Die Empfehlung des Erzeugers ist keine unabhängige Prüfung.",
      ],
    ),
    question(
      "RV10",
      review,
      "Warum wird die Herkunft einer neuen Bibliothek geprüft?",
      [
        "Um verdächtige oder unpassende Anbieter zu erkennen",
        "GitHub empfiehlt, Ursprung und Mitwirkende auf Seriosität zu prüfen.",
      ],
      [
        "Um die Anzahl der Imports zu erhöhen",
        "Die Herkunftsprüfung dient der Risikobewertung, nicht mehr Imports.",
      ],
      [
        "Um die fachlichen Tests zu ersetzen",
        "Paketherkunft und Verhaltenstests prüfen unterschiedliche Risiken.",
      ],
    ),
    question(
      "RV11",
      review,
      "Welche Lizenzfrage gehört zum Review einer neuen Abhängigkeit?",
      [
        "Ist die Lizenz mit dem Projekt vereinbar?",
        "GitHub nennt Lizenzverträglichkeit als Prüfung vor Übernahme.",
      ],
      [
        "Hat die Lizenz möglichst viele Seiten?",
        "Umfang ist kein Kriterium für Kompatibilität.",
      ],
      [
        "Ist die Lizenz dieselbe wie die README-Sprache?",
        "Dokumentsprache entscheidet nicht über Nutzungsrechte.",
      ],
    ),
    question(
      "RV12",
      review,
      "Was ist Slopsquatting im Kontext KI-generierter Paketnamen?",
      [
        "Ausnutzen erfundener oder verdächtiger Paketvorschläge",
        "GitHub warnt vor nicht existierenden oder bösartigen Paketen aus KI-Vorschlägen.",
      ],
      [
        "Eine Form von Codeformatierung",
        "Das Risiko betrifft Paketnamen und Bezugsquellen.",
      ],
      [
        "Ein Ersatz für Lizenzprüfung",
        "Slopsquatting ist ein Risiko, keine Prüfmethode.",
      ],
    ),
    question(
      "RV13",
      review,
      "Ein KI-Patch verwendet eine scheinbar passende Bibliotheksfunktion. Was ist zu verifizieren?",
      [
        "Dass die API tatsächlich existiert und richtig genutzt wird",
        "GitHub nennt halluzinierte APIs als typische Fehlerquelle.",
      ],
      [
        "Nur dass der Funktionsname gut klingt",
        "Ein plausibler Name belegt keine reale API.",
      ],
      [
        "Nur dass die Datei gespeichert wurde",
        "Speichern prüft keine Schnittstelle.",
      ],
    ),
    question(
      "RV14",
      review,
      "Ein fehlschlagender Test wurde im KI-Patch deaktiviert. Wie sollte das Review reagieren?",
      [
        "Die Ursache beheben statt den Test zu überspringen",
        "GitHub hebt gelöschte oder übersprungene statt reparierte Tests als Warnsignal hervor.",
      ],
      [
        "Den übersprungenen Test als bestanden zählen",
        "Ein nicht ausgeführter Test liefert keinen grünen Nachweis.",
      ],
      [
        "Nur die Testdatei umbenennen",
        "Ein neuer Name behebt den Fehler nicht.",
      ],
    ),
    question(
      "RV15",
      review,
      "Was ist an Code problematisch, der plausibel aussieht, aber den Auftrag verfehlt?",
      [
        "Oberflächliche Plausibilität ersetzt Intent-Prüfung nicht",
        "GitHub fordert Skepsis gegenüber richtig wirkendem, aber unpassendem Code.",
      ],
      [
        "Plausibler Code ist automatisch korrekt",
        "Das Erscheinungsbild belegt keine Anforderungserfüllung.",
      ],
      [
        "Der Auftrag wird durch den Code rückwirkend geändert",
        "Der Patch darf den vereinbarten Zweck nicht stillschweigend ersetzen.",
      ],
    ),
    question(
      "RV16",
      review,
      "Welche Sicherheitstools nennt GitHub beispielhaft für die Patchprüfung?",
      [
        "CodeQL und Dependabot",
        "GitHub nennt diese Werkzeuge für Schwachstellen und Abhängigkeitsprobleme.",
      ],
      [
        "Nur den visuellen Diff-Viewer",
        "Ein Diff-Viewer entdeckt Sicherheitsprobleme nicht systematisch.",
      ],
      [
        "Nur einen Markdown-Formatter",
        "Formatierung prüft keine Schwachstellen.",
      ],
    ),
    question(
      "RV17",
      review,
      "Welche zusätzliche Aussage liefert ein Qualitätswerkzeug laut GitHub?",
      [
        "Hinweise zu Zuverlässigkeit, Wartbarkeit und Testabdeckung",
        "GitHub nennt diese Merkmale als Beispiele für Code-Quality-Prüfungen.",
      ],
      [
        "Eine verbindliche fachliche Freigabe",
        "Qualitätsmetriken ersetzen die menschliche Bewertung des Auftrags nicht.",
      ],
      [
        "Eine Garantie für alle Laufzeitfälle",
        "Qualitätswerkzeuge decken nur die analysierten Merkmale ab.",
      ],
    ),
    question(
      "RV18",
      review,
      "Warum ist menschliche Prüfung trotz automatisierter Checks erforderlich?",
      [
        "Tools erfassen Kontext und Absicht nicht vollständig",
        "GitHub verbindet automatisierte Werkzeuge ausdrücklich mit menschlicher Expertise.",
      ],
      [
        "Weil automatische Checks keine Dateien lesen können",
        "Sie prüfen durchaus Code, aber nicht alle fachlichen Fragen.",
      ],
      [
        "Weil grüne Tests einen Fehler beweisen",
        "Grüne Tests sind hilfreich, aber kein Beweis vollständiger Korrektheit.",
      ],
    ),
    question(
      "RV19",
      review,
      "Welche KI-spezifische Abweichung sollte im Diff gezielt gesucht werden?",
      [
        "Ignorierte Vorgaben",
        "GitHub nennt ignorierte Constraints neben falscher Logik und erfundenen APIs.",
      ],
      [
        "Jede zusätzliche Leerzeile",
        "Eine Leerzeile ist nicht die genannte KI-spezifische Abweichung.",
      ],
      [
        "Jede bestehende Typdefinition",
        "Bestehende Typen sind nicht an sich ein Fehler des Patches.",
      ],
    ),
    question(
      "RV20",
      review,
      "Welche Frage hilft, eine Lücke in der Funktionsprüfung des KI-Patches zu finden?",
      [
        "Welche nötigen Verhaltenstests fehlen noch?",
        "GitHub schlägt ausdrücklich vor, nach fehlenden funktionalen Tests zu fragen.",
      ],
      [
        "Welche Quellcodedatei wurde zuletzt gespeichert?",
        "Die Speicherreihenfolge identifiziert keine fehlenden Verhaltensfälle.",
      ],
      [
        "Welche Methode ist am längsten?",
        "Methodenlänge zeigt keine konkrete Lücke in der Funktionsprüfung.",
      ],
    ),
    question(
      "RV21",
      review,
      "Welche Frage hilft beim Review von Randfällen eines Spring-Endpunkts?",
      [
        "Welche Fehler- und Grenzfälle behandelt der Patch nicht?",
        "GitHub empfiehlt, fehlende Szenarien und Edge Cases zu suchen.",
      ],
      [
        "Wie viele Wörter enthält der Methodenname?",
        "Die Wortzahl untersucht keine Randfälle.",
      ],
      [
        "Welche IDE wurde verwendet?",
        "Die Entwicklungsumgebung zeigt die Fehlerfallabdeckung nicht.",
      ],
    ),
    question(
      "RV22",
      review,
      "Wozu dient kollaboratives Review bei komplexen Änderungen?",
      [
        "Weitere Fachperspektiven finden subtile Probleme",
        "GitHub empfiehlt Teamreview für komplexe oder sensible Änderungen.",
      ],
      [
        "Die Verantwortung vollständig an ein Tool abgeben",
        "Zusammenarbeit ergänzt menschliche Verantwortung.",
      ],
      [
        "Tests durch Abstimmung ersetzen",
        "Auch Teamreview macht funktionale Prüfungen nicht überflüssig.",
      ],
    ),
    question(
      "RV23",
      review,
      "Was ist ein sinnvoller Einsatz von Automatisierung im Review?",
      [
        "Wiederholbare Stil-, Sicherheits- und Qualitätschecks",
        "GitHub empfiehlt CI und Scanner für wiederholbare Prüfungen.",
      ],
      [
        "Automatisches Überspringen roter Tests",
        "Das verdeckt Fehler statt sie zu prüfen.",
      ],
      [
        "Automatische Freigabe ohne Kontextprüfung",
        "Fachliche Bewertung bleibt eine menschliche Aufgabe.",
      ],
    ),
    question(
      "RV24",
      review,
      "Wozu kann Code Referencing im Review einer KI-Änderung dienen?",
      [
        "Übereinstimmungen mit öffentlichem Code prüfen",
        "GitHub nennt Code Referencing zur Prüfung von Treffern mit öffentlich verfügbarem Code.",
      ],
      [
        "Die Funktion des Patches automatisch beweisen",
        "Ein Code-Treffer belegt kein korrektes Verhalten im Projekt.",
      ],
      [
        "Die Laufzeit jedes Tests verkürzen",
        "Code Referencing untersucht Übereinstimmungen, nicht Testlaufzeiten.",
      ],
    ),
    question(
      "RV25",
      review,
      "Wann ist ein KI-generierter Patch zur Übernahme fachlich bereit?",
      [
        "Nach Funktions-, Kontext-, Qualitäts- und Risikoprüfung",
        "GitHub empfiehlt eine Kombination aus Tests, Intent-Abgleich, Qualitätsprüfung und menschlicher Aufsicht.",
      ],
      [
        "Schon nach einer fehlerfreien Textzusammenfassung",
        "Eine Beschreibung belegt weder Funktion noch Sicherheit.",
      ],
      [
        "Sobald der Agent seine eigene Lösung empfiehlt",
        "Die Selbsteinschätzung des Erzeugers ersetzt keine unabhängige Prüfung.",
      ],
    ),
  ],
  "focused-git-commits": [
    question(
      "GC01",
      staging,
      "Im Arbeitsstand liegen eine API-Änderung und unabhängige Formatkorrekturen. Wie entstehen gut prüfbare Commits?",
      [
        "Logisch getrennte Änderungen gezielt stagen",
        "Pro Git empfiehlt, umfangreiche Arbeit in logisch getrennte Changesets aufzuteilen.",
      ],
      [
        "Alle Änderungen nach Dateigröße gruppieren",
        "Die Dateigröße erklärt den fachlichen Zusammenhang nicht.",
      ],
      [
        "Alles in einem Commit belassen",
        "Unabhängige Änderungen erschweren gemeinsam die Prüfung.",
      ],
    ),
    question(
      "GC02",
      staging,
      "Welche Rolle hat die Staging Area vor einem Commit?",
      [
        "Sie bestimmt die aufzunehmende Momentaufnahme",
        "Pro Git zeigt, wie Änderungen gezielt in den Index übernommen werden.",
      ],
      [
        "Sie veröffentlicht den Commit bereits",
        "Staging bereitet einen Commit vor, veröffentlicht ihn aber nicht.",
      ],
      [
        "Sie löscht alle nicht gewählten Änderungen",
        "Nicht gestagte Änderungen bleiben im Arbeitsverzeichnis.",
      ],
    ),
    question(
      "GC03",
      staging,
      "Mit welchem Befehl öffnet sich die interaktive Staging-Ansicht?",
      ["git add -i", "Pro Git nennt git add -i beziehungsweise --interactive."],
      [
        "git commit --dry-run",
        "Das zeigt eine Vorschau, öffnet aber nicht die interaktive Add-Ansicht.",
      ],
      [
        "git diff --cached",
        "Das zeigt den Index-Diff, bietet aber keine interaktive Auswahl.",
      ],
    ),
    question(
      "GC04",
      staging,
      "Was zeigen die zwei Änderungsspalten in git add -i?",
      [
        "Gestagte und ungestagte Änderungen",
        "Die interaktive Statusansicht stellt beide Zustände nebeneinander dar.",
      ],
      [
        "Lokale und entfernte Branches",
        "Branchlisten sind nicht die beiden Änderungsspalten.",
      ],
      [
        "Autoren und Reviewer",
        "Die Ansicht vergleicht Änderungen im Index und Arbeitsverzeichnis.",
      ],
    ),
    question(
      "GC05",
      staging,
      "Welche interaktive Aktion nimmt ausgewählte ganze Dateien in den Index auf?",
      [
        "Update",
        "Im interaktiven Add-Modus stage't Update ausgewählte Dateien.",
      ],
      ["Diff", "Diff zeigt gestagte Änderungen, nimmt aber nichts auf."],
      ["Status", "Status zeigt den Stand, ändert ihn jedoch nicht."],
    ),
    question(
      "GC06",
      staging,
      "Welche interaktive Aktion entfernt eine Datei wieder aus dem Index, ohne die Arbeitsänderung zu verwerfen?",
      [
        "Revert im interaktiven Add-Modus",
        "Pro Git zeigt das Unstaging über die Revert-Auswahl.",
      ],
      [
        "Patch für eine andere Datei",
        "Patch wählt Teiländerungen und entfernt nicht die ganze ausgewählte Datei.",
      ],
      [
        "Diff für die Datei",
        "Diff zeigt Änderungen an, ohne den Index zu ändern.",
      ],
    ),
    question(
      "GC07",
      staging,
      "Wie lässt sich der bereits gestagte Diff im interaktiven Modus ansehen?",
      [
        "Mit der Diff-Auswahl",
        "Pro Git beschreibt die d- oder 6-Auswahl für den gestagten Diff.",
      ],
      ["Mit der Update-Auswahl", "Update nimmt Änderungen in den Index auf."],
      [
        "Mit der Quit-Auswahl",
        "Quit verlässt den Modus und zeigt nicht den Diff.",
      ],
    ),
    question(
      "GC08",
      staging,
      "Zwei unabhängige Änderungen liegen in derselben Datei. Was ermöglicht git add -p?",
      [
        "Nur passende Hunks stagen",
        "Patch-Staging kann einzelne Teile einer Datei auswählen.",
      ],
      [
        "Die Datei automatisch in zwei Commits zerlegen",
        "Das Staging wählt Hunks aus; Commits müssen anschließend bewusst erstellt werden.",
      ],
      [
        "Alle Hunks der Datei zwingend zusammen stagen",
        "Gerade die Teilauswahl ist Zweck des Patch-Modus.",
      ],
    ),
    question(
      "GC09",
      staging,
      "Welche Eingabe im Patch-Modus nimmt den aktuellen Hunk in den Index auf?",
      ["y", "Pro Git zeigt y als Zustimmung zum aktuellen Hunk."],
      ["n", "n lehnt den aktuellen Hunk ab."],
      ["?", "? zeigt Hilfe zu den verfügbaren Eingaben."],
    ),
    question(
      "GC10",
      staging,
      "Welche Eingabe im Patch-Modus lässt den aktuellen Hunk ungestagt?",
      ["n", "Pro Git zeigt n als Ablehnung des aktuellen Hunks."],
      ["y", "y stage't den aktuellen Hunk."],
      ["a", "a stage't den aktuellen und alle folgenden Hunks."],
    ),
    question(
      "GC11",
      staging,
      "Wozu dient s bei der Hunk-Auswahl?",
      [
        "Den aktuellen Hunk weiter aufteilen",
        "Pro Git nennt s zum Splitten eines Hunks.",
      ],
      ["Alle folgenden Hunks stagen", "Dafür ist a vorgesehen."],
      [
        "Den gesamten Index anzeigen",
        "s verändert die Aufteilung der Patch-Auswahl.",
      ],
    ),
    question(
      "GC12",
      staging,
      "Wie lässt sich ein passender späterer Hunk suchen?",
      [
        "Mit / und einem Suchmuster",
        "Pro Git nennt die Suchfunktion / im Patch-Modus.",
      ],
      [
        "Mit a für alle Hunks",
        "a übernimmt alle folgenden Hunks und sucht nicht.",
      ],
      ["Mit q für den nächsten Hunk", "q beendet den interaktiven Modus."],
    ),
    question(
      "GC13",
      staging,
      "Welche Eingabe erlaubt, einen Hunk zunächst unentschieden zu lassen und weiterzugehen?",
      [
        "j",
        "Pro Git beschreibt j als Sprung zum nächsten unentschiedenen Hunk.",
      ],
      ["y", "y entscheidet den Hunk durch Staging."],
      ["n", "n entscheidet den Hunk gegen Staging."],
    ),
    question(
      "GC14",
      staging,
      "Wie kann Patch-Staging ohne den gesamten interaktiven Menümodus gestartet werden?",
      [
        "git add -p",
        "Pro Git nennt git add -p als direkten Einstieg in die Teilauswahl.",
      ],
      [
        "git status -p",
        "Der genannte Direkteinstieg ist add -p, nicht status -p.",
      ],
      [
        "git log -p",
        "log -p zeigt Historien-Patches, statt Arbeitsänderungen zu stagen.",
      ],
    ),
    question(
      "GC15",
      commit,
      "Was bewirkt git commit --interactive bei der Inhaltsauswahl?",
      [
        "Es lässt Dateien oder Hunks für den Commit auswählen",
        "Die git-commit-Dokumentation nennt --interactive zur Auswahl der aufzunehmenden Teile.",
      ],
      [
        "Es übernimmt zwingend alle Arbeitsänderungen",
        "Die Option dient gerade der bewussten Auswahl.",
      ],
      [
        "Es zeigt nur die Commit-Historie an",
        "Die Option steuert den aktuellen Commitinhalt, nicht die Historienanzeige.",
      ],
    ),
    question(
      "GC16",
      staging,
      "Was ist vor einem Commit mit teilweise gestagten Dateien zu prüfen?",
      [
        "Den gestagten Diff",
        "Pro Git zeigt den Index-Diff, damit die tatsächlich ausgewählten Teile überprüft werden.",
      ],
      [
        "Nur den gesamten Arbeitsverzeichnis-Diff",
        "Der Arbeitsdiff enthält auch Teile, die nicht im nächsten Commit liegen.",
      ],
      [
        "Nur die Dateinamen im Explorer",
        "Dateinamen zeigen nicht die ausgewählten Hunks.",
      ],
    ),
    question(
      "GC17",
      commit,
      "Was enthält ein normaler git commit ohne Dateipfade?",
      [
        "Den aktuellen Inhalt des Index",
        "Die git-commit-Dokumentation beschreibt den Commit als Momentaufnahme des Index.",
      ],
      [
        "Alle Änderungen im Arbeitsverzeichnis",
        "Ungestagte Änderungen werden nicht automatisch aufgenommen.",
      ],
      [
        "Nur die zuletzt geöffnete Datei",
        "Der Editorfokus bestimmt den Indexinhalt nicht.",
      ],
    ),
    question(
      "GC18",
      commit,
      "Eine verfolgte Datei wurde nach dem letzten git add weiter bearbeitet. Welche Fassung nimmt git commit ohne -a und ohne Pfadangabe auf?",
      [
        "Die zuvor gestagte Fassung",
        "Ohne -a oder Pfadangabe erstellt git commit die Momentaufnahme aus dem Index.",
      ],
      [
        "Die aktuelle Fassung des Arbeitsverzeichnisses",
        "Die weiteren Bearbeitungen wurden noch nicht in den Index übernommen.",
      ],
      [
        "Beide Fassungen als getrennte Änderungen",
        "Ein Commit enthält für die Datei einen Indexstand, nicht zwei Fassungen nebeneinander.",
      ],
    ),
    question(
      "GC19",
      commit,
      "Was bewirkt git commit --dry-run?",
      [
        "Eine Vorschau auf den vorgesehenen Commitinhalt",
        "Die Dokumentation beschreibt eine Zusammenfassung ohne Commit-Erstellung.",
      ],
      [
        "Einen Commit ohne Nachricht veröffentlichen",
        "Dry-run erstellt keinen Commit.",
      ],
      [
        "Das Staging aller Arbeitsdateien",
        "Die Option dient der Vorschau und wählt keine Dateien aus.",
      ],
    ),
    question(
      "GC20",
      commit,
      "Was passiert bei git commit mit explizit genannten verfolgten Dateipfaden ohne --interactive oder --patch?",
      [
        "Der Arbeitsstand dieser Pfade wird verwendet",
        "Die Dokumentation erklärt, dass diese Form den bisherigen Index für die genannten Pfade übergeht.",
      ],
      [
        "Nur bereits gestagte Hunks dieser Pfade werden verwendet",
        "Explizite Pfade ohne diese Modi verwenden den aktuellen Arbeitsstand.",
      ],
      [
        "Alle nicht genannten Dateien werden gelöscht",
        "Die Pfadangabe begrenzt den Commitinhalt, löscht aber keine Dateien.",
      ],
    ),
    question(
      "GC21",
      commit,
      "Wozu dient --include bei git commit mit Pfaden?",
      [
        "Die genannten Pfade vor dem Commit zusätzlich stagen",
        "Die Dokumentation beschreibt --include als Aufnahme der angegebenen Pfade zusätzlich zum Index.",
      ],
      [
        "Andere gestagte Pfade ignorieren",
        "Das wäre die --only-Richtung, nicht --include.",
      ],
      [
        "Nur die Commit-Nachricht ergänzen",
        "--include beeinflusst den Inhalt, nicht bloß die Nachricht.",
      ],
    ),
    question(
      "GC22",
      commit,
      "Welche Wirkung hat git commit --only mit Pfaden?",
      [
        "Es nimmt die angegebenen Pfade statt anderer gestagter Inhalte",
        "Die Dokumentation beschreibt --only als Commit des Arbeitsstands der Pfade unabhängig vom übrigen Index.",
      ],
      [
        "Es nimmt den gesamten Index zusätzlich auf",
        "--only ignoriert andere gestagte Inhalte für diesen Commit.",
      ],
      [
        "Es prüft lediglich den Diff",
        "--only erstellt einen Commit, sofern nicht dry-run genutzt wird.",
      ],
    ),
    question(
      "GC23",
      commit,
      "Welche Aufgabe hat die Log-Nachricht eines git commit laut Referenz?",
      [
        "Die aufgenommenen Änderungen beschreiben",
        "Die git-commit-Referenz nennt eine Log-Nachricht, die die Änderungen beschreibt.",
      ],
      [
        "Die Auswahl im Index ersetzen",
        "Die Nachricht legt den Dateiinhalt nicht fest.",
      ],
      [
        "Ungestagte Dateien automatisch aufnehmen",
        "Der Text der Nachricht ändert das Staging nicht.",
      ],
    ),
    question(
      "GC24",
      staging,
      "Welche Patch-Eingabe erlaubt eine manuelle Bearbeitung des angezeigten Hunks?",
      ["e", "Pro Git nennt e für die manuelle Bearbeitung des Hunks."],
      [
        "s",
        "s versucht den Hunk aufzuteilen, öffnet aber keine manuelle Bearbeitung.",
      ],
      ["g", "g wählt einen Hunk zum Navigieren aus, bearbeitet ihn nicht."],
    ),
    question(
      "GC25",
      staging,
      "Warum ist eine bloße Größenregel kein ausreichendes Kriterium für einen guten Commit?",
      [
        "Der logische Zusammenhang bestimmt die Prüfbarkeit",
        "Pro Git empfiehlt getrennte, logisch geschlossene Changesets; eine starre Größe bildet sie nicht ab.",
      ],
      [
        "Ein Commit ist nur bei einer Datei prüfbar",
        "Zusammengehörige Änderungen können mehrere Dateien benötigen.",
      ],
      [
        "Jede kleine Änderung ist fachlich korrekt",
        "Kleine Größe belegt weder fachliche Korrektheit noch Zusammenhang.",
      ],
    ),
  ],
};
