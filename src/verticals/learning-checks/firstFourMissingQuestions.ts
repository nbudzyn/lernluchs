import type { Question } from "../../shared/question";

export const firstFourMissingQuestions: Record<string, Question[]> = {
  "context-selection-and-reset": [
    {
      id: "CX01",
      prompt:
        "Ein Agent soll einen Fehler an einem Spring-Endpunkt untersuchen. Welche erste Kontextwahl ist am gezieltesten?",
      options: [
        {
          id: "CX01-1",
          text: "Repository und Arbeitsumgebung des betroffenen Dienstes wählen.",
          correct: true,
          explanation:
            "Der Remote Guide verlangt vor der Aufgabe die passende Arbeitsumgebung und das Repository.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX01-2",
          text: "Eine beliebige frühere Unterhaltung fortsetzen.",
          correct: false,
          explanation:
            "Ein alter Chat sichert weder das richtige Repository noch die passende Umgebung.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX01-3",
          text: "Alle erreichbaren Repositories gleichzeitig anhängen.",
          correct: false,
          explanation:
            "Mehr Dateien ersetzen die bewusste Wahl der zuständigen Arbeitsumgebung nicht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX02",
      prompt:
        "Eine Änderung soll bestehende Arbeit im aktuellen Checkout nicht beeinflussen. Welche technische Kontextgrenze passt?",
      options: [
        {
          id: "CX02-1",
          text: "Einen eigenen Worktree für die Änderung wählen.",
          correct: true,
          explanation:
            "Ein separater Worktree ist eine dokumentierte Möglichkeit für isolierte Arbeit.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX02-2",
          text: "Nur einen zweiten Chat im selben Checkout eröffnen.",
          correct: false,
          explanation: "Ein Chat trennt den Arbeitsbaum nicht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX02-3",
          text: "Nur auf einen anderen Branch im selben Checkout wechseln.",
          correct: false,
          explanation:
            "Das schafft keinen gleichzeitig getrennten Arbeitsbaum.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX03",
      prompt:
        "Ein Agent analysiert eine bestimmte Java-Klasse. Was entfernt Mehrdeutigkeit über die gemeinte Datei?",
      options: [
        {
          id: "CX03-1",
          text: "Die konkrete Datei an die Aufgabe anhängen oder verweisen.",
          correct: true,
          explanation:
            "Der Guide empfiehlt Datei-Anhänge, wenn eine bestimmte Datei analysiert werden soll.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX03-2",
          text: "Nur den Projektnamen nennen.",
          correct: false,
          explanation:
            "Der Projektname identifiziert die Klasse nicht eindeutig.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX03-3",
          text: "Den gesamten bisherigen Chat ungefiltert kopieren.",
          correct: false,
          explanation: "Gesprächshistorie ist kein eindeutiger Dateiverweis.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX04",
      prompt:
        "Während einer laufenden Aufgabe fällt eine falsche Annahme über den betroffenen Service auf. Welche Nachricht passt zur Korrektur der laufenden Arbeit?",
      options: [
        {
          id: "CX04-1",
          text: "Eine steuernde Nachricht mit der korrigierten Grenze senden.",
          correct: true,
          explanation:
            "Steer lenkt eine aktive Aufgabe bei einer falschen Richtung um.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX04-2",
          text: "Die Korrektur für den nächsten Antwortabschluss in die Queue legen.",
          correct: false,
          explanation:
            "Queue wartet, während die laufende Arbeit falsch weitergehen kann.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX04-3",
          text: "Die Annahme in einem Side Chat erklären lassen.",
          correct: false,
          explanation: "Ein Side Chat ändert die aktive Hauptrichtung nicht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX05",
      prompt:
        "Eine Zusatzanweisung zur selben laufenden Aufgabe soll erst nach der aktuellen Antwort verarbeitet werden. Welche Nachrichtenart passt?",
      options: [
        {
          id: "CX05-1",
          text: "Als nachgelagerte Nachricht in die Queue legen.",
          correct: true,
          explanation:
            "Queue wartet bis die aktuelle Antwort abgeschlossen ist.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX05-2",
          text: "Die Anweisung als Steer an die aktive Antwort geben.",
          correct: false,
          explanation:
            "Steer würde die laufende Antwort noch vor ihrem Abschluss umlenken.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX05-3",
          text: "Die laufende Antwort für eine neue Hauptaufgabe forken.",
          correct: false,
          explanation:
            "Ein Fork ist eine eigene Arbeitsrichtung statt einer nachgelagerten Nachricht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX06",
      prompt:
        "Ein Detail im laufenden Auftrag soll erklärt werden, ohne die Hauptaufgabe zu unterbrechen. Welche Gesprächsform ist dafür beschrieben?",
      options: [
        {
          id: "CX06-1",
          text: "Einen Side Chat zur gezielten Rückfrage öffnen.",
          correct: true,
          explanation:
            "Der Side Chat dient einer Nebenfrage zum bestehenden Arbeitskontext.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX06-2",
          text: "Die Rückfrage als Steer in den Hauptchat senden.",
          correct: false,
          explanation: "Steer kann die aktive Implementierung umlenken.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX06-3",
          text: "Einen Fork als zweite Hauptaufgabe beginnen.",
          correct: false,
          explanation:
            "Ein Fork ist für eine neue Richtung gedacht, nicht für eine kurze Nebenfrage.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX07",
      prompt:
        "Eine neue Aufgabe soll mit bisheriger Chat-Historie in eigener Richtung weiterlaufen. Welche Funktion passt?",
      options: [
        {
          id: "CX07-1",
          text: "Den bestehenden Chat forken.",
          correct: true,
          explanation:
            "Ein Fork erzeugt einen neuen Hauptchat mit übernommener Historie.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX07-2",
          text: "Nur die bestehende Aufgabe kompaktieren.",
          correct: false,
          explanation:
            "Kompaktierung schafft keine eigenständige neue Richtung.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX07-3",
          text: "Einen Side Chat für die gesamte neue Hauptaufgabe nutzen.",
          correct: false,
          explanation: "Der Side Chat dient leichten Nebenfragen.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX08",
      prompt:
        "Ein langes Agentengespräch bleibt beim selben Ziel, verliert aber Übersicht. Welche Maßnahme erhält den Arbeitsstand kompakt?",
      options: [
        {
          id: "CX08-1",
          text: "Den Chat nach Statusprüfung kompaktieren.",
          correct: true,
          explanation:
            "Kompaktierung verdichtet den Arbeitsstand für die fortlaufende Aufgabe.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX08-2",
          text: "Ohne Zusammenfassung eine neue Hauptaufgabe beginnen.",
          correct: false,
          explanation:
            "So geht der bereits geprüfte Arbeitsstand leichter verloren.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX08-3",
          text: "Nur einen Side Chat für den restlichen Hauptauftrag nutzen.",
          correct: false,
          explanation: "Der Side Chat ist für Nebenfragen vorgesehen.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX09",
      prompt:
        "Nach einer Kontextkompaktierung soll eine frühere genaue Codeaussage übernommen werden. Welche Grenze ist zu beachten?",
      options: [
        {
          id: "CX09-1",
          text: "Die Zusammenfassung kann feine Details der Historie auslassen.",
          correct: true,
          explanation:
            "Die GitHub-Dokumentation nennt den unvermeidlichen Verlust von Einzelheiten.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX09-2",
          text: "Die Zusammenfassung als vollständiges Transkript behandeln.",
          correct: false,
          explanation:
            "Feine Details und genaue Wortlaute können ausgelassen werden.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX09-3",
          text: "Nur die letzte Antwort als vollständigen Beleg verwenden.",
          correct: false,
          explanation: "Eine Antwort ersetzt die ursprünglichen Daten nicht.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX10",
      prompt:
        "Welche Information belegt neben Nachrichten und Dateien das Kontextfenster einer Agentensitzung?",
      options: [
        {
          id: "CX10-1",
          text: "Werkzeugaufrufe und deren Ergebnisse.",
          correct: true,
          explanation: "Aufruf und Ausgabe gelangen in das Kontextfenster.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX10-2",
          text: "Nur die letzte Nutzernachricht.",
          correct: false,
          explanation:
            "Auch andere Nachrichten und Werkzeugdaten belegen Kontext.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX10-3",
          text: "Nur Dateien mit Änderungen.",
          correct: false,
          explanation: "Kontext umfasst weit mehr als geänderte Dateien.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX11",
      prompt:
        "Ein Testlauf erzeugt eine riesige Ausgabe. Warum kann sie den Agentenkontext belasten?",
      options: [
        {
          id: "CX11-1",
          text: "Werkzeugergebnisse gelangen ebenfalls in das Kontextfenster.",
          correct: true,
          explanation:
            "GitHub nennt gerade lange Werkzeugausgaben als Kontextverbraucher.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX11-2",
          text: "Nur den Befehl, nicht dessen Ausgabe als Kontext rechnen.",
          correct: false,
          explanation: "Die Dokumentation zählt Aufruf und Ergebnis.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX11-3",
          text: "Alle Testausgaben als modellunabhängig außerhalb des Fensters annehmen.",
          correct: false,
          explanation:
            "Das Ergebnis kann das begrenzte Kontextfenster belegen.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX12",
      prompt:
        "Ein Agent verliert nach langer Sitzung eine frühere genaue Fehlermeldung. Welche Erklärung ist plausibel?",
      options: [
        {
          id: "CX12-1",
          text: "Eine Kompaktierungszusammenfassung kann den exakten Wortlaut ausgelassen haben.",
          correct: true,
          explanation:
            "Feingranulare Originaldetails werden beim Zusammenfassen nicht garantiert erhalten.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX12-2",
          text: "Die Kompaktierungszusammenfassung als wortgetreues Protokoll verstehen.",
          correct: false,
          explanation: "Sie kann exakte frühere Ausgaben auslassen.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX12-3",
          text: "Annehmen, ein Checkpoint enthalte automatisch jeden Log-Byte.",
          correct: false,
          explanation:
            "Checkpoints speichern die Zusammenfassung, nicht das komplette Original.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX13",
      prompt:
        "Eine konkrete frühere Entscheidung ist nach Kompaktierung unklar. Was bietet Copilot CLI zur Rückprüfung?",
      options: [
        {
          id: "CX13-1",
          text: "Den gespeicherten Kompaktierungs-Checkpoint ansehen.",
          correct: true,
          explanation:
            "Checkpoints enthalten die jeweilige Zusammenfassung und sind abrufbar.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX13-2",
          text: "Nur die aktuelle Chat-Zusammenfassung ansehen.",
          correct: false,
          explanation:
            "Sie kann die fragliche frühere Entscheidung gekürzt haben.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX13-3",
          text: "Nur die neueste Quellcodedatei lesen.",
          correct: false,
          explanation:
            "Eine Quelldatei erklärt eine frühere Gesprächsentscheidung nicht zwingend.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX14",
      prompt:
        "Welche Aussage über die Größe eines Kontextfensters ist durch GitHubs Erklärung gedeckt?",
      options: [
        {
          id: "CX14-1",
          text: "Die verfügbare Tokenmenge hängt vom gewählten Modell ab.",
          correct: true,
          explanation:
            "Die Dokumentation beschreibt ein festes, modellabhängiges Fenster.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX14-2",
          text: "Alle Modelle haben dieselbe feste Tokenzahl.",
          correct: false,
          explanation: "Die Größe variiert nach Modell.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX14-3",
          text: "Nur Quelldateien zählen gegen das Fenster.",
          correct: false,
          explanation: "Auch Nachrichten und Werkzeuge zählen.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX15",
      prompt:
        "Ein Agent hat viele Werkzeugdefinitionen geladen. Warum kann das für Kontextauswahl relevant sein?",
      options: [
        {
          id: "CX15-1",
          text: "Auch System- und Werkzeugbeschreibungen belegen Kontext.",
          correct: true,
          explanation:
            "GitHub zählt diese festen Bestandteile des Kontextfensters auf.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX15-2",
          text: "Werkzeugdefinitionen werden erst bei einem Fehler gezählt.",
          correct: false,
          explanation: "Sie sind laut Quelle dauerhaft präsent.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX15-3",
          text: "Nur menschliche Texte belegen Tokens.",
          correct: false,
          explanation: "Auch System- und Werkzeuginformationen belegen Tokens.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX16",
      prompt:
        "Nach einer Kompaktierung widerspricht die Zusammenfassung einer geprüften Quelldatei. Was ist der passende nächste Schritt?",
      options: [
        {
          id: "CX16-1",
          text: "Die aktuelle Quelldatei und den relevanten früheren Nachweis erneut prüfen.",
          correct: true,
          explanation:
            "Eine Zusammenfassung kann Details verlieren und ersetzt die Belegprüfung nicht.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX16-2",
          text: "Die Verdichtung als aktuellere Wahrheit behandeln.",
          correct: false,
          explanation:
            "Sie kann Details auslassen und muss gegen Originale geprüft werden.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX16-3",
          text: "Nur einen neuen Side Chat nach seiner Vermutung fragen.",
          correct: false,
          explanation:
            "Ohne Belege löst eine zusätzliche Vermutung den Widerspruch nicht.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX17",
      prompt:
        "Ein GitHub-Copilot-CLI-Lauf überschreitet die Grenze für große Ausgaben. Was erhält das Modell standardmäßig?",
      options: [
        {
          id: "CX17-1",
          text: "Dateipfad und Vorschau statt der gesamten Ausgabe.",
          correct: true,
          explanation:
            "Die Dokumentation beschreibt das Auslagern großer Ergebnisse mit Vorschau.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX17-2",
          text: "Nur eine vom Modell erzeugte Kurzdiagnose erhalten.",
          correct: false,
          explanation:
            "Der Mechanismus liefert zunächst Pfad und Vorschau, keine fachliche Diagnose.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX17-3",
          text: "Nur die erste Fehlermeldungszeile ohne Zugriff auf die Gesamtausgabe erhalten.",
          correct: false,
          explanation:
            "Die vollständige Ausgabe wird in einer Datei referenziert.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX18",
      prompt:
        "Warum kann gezieltes Lesen einzelner Dateien hilfreicher sein als ungefiltertes Einlesen vieler Dateien?",
      options: [
        {
          id: "CX18-1",
          text: "Werkzeugergebnisse konkurrieren mit dem übrigen Gespräch um Kontext.",
          correct: true,
          explanation:
            "Dateileseausgaben gehören zum begrenzten Kontextfenster.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX18-2",
          text: "Alle Dateien vor der ersten Suche vollständig einlesen.",
          correct: false,
          explanation:
            "Das kann das begrenzte Kontextfenster mit irrelevanter Ausgabe belasten.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
        {
          id: "CX18-3",
          text: "Den Dateiumfang allein nach Dateinamen schätzen.",
          correct: false,
          explanation:
            "Dateinamen ersetzen die Auswahl passender Inhalte nicht.",
          sourceUrl:
            "https://docs.github.com/en/copilot/concepts/agents/copilot-cli/context-management",
        },
      ],
    },
    {
      id: "CX19",
      prompt:
        "Vor einem neuen Coding-Chat muss die Änderung von einem bestimmten Git-Stand ausgehen. Welche Wahl gehört zur Vorbereitung?",
      options: [
        {
          id: "CX19-1",
          text: "Den vorgesehenen Branch oder Ausgangszustand wählen.",
          correct: true,
          explanation:
            "Der Guide nennt Branch und Ausgangszustand als Teil der Arbeitsgrenze.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX19-2",
          text: "Nur die letzte Chat-Nachricht als Ausgangszustand verwenden.",
          correct: false,
          explanation: "Sie legt keinen Git-Ausgangszustand fest.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX19-3",
          text: "Die Branchwahl bis nach den ersten Änderungen offenlassen.",
          correct: false,
          explanation: "Dann kann Arbeit bereits im falschen Checkout liegen.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX20",
      prompt:
        "Ein Diff braucht Erklärung mit exakter Stelle. Wie lässt sich der Review-Kontext präzise zurückgeben?",
      options: [
        {
          id: "CX20-1",
          text: "Einen Inline-Kommentar an der betreffenden Zeile anfügen.",
          correct: true,
          explanation:
            "Der Guide beschreibt Zeilenkommentare als präzises Review-Signal.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX20-2",
          text: "Eine allgemeine Nachricht mit nur dem Dateinamen senden.",
          correct: false,
          explanation: "Sie zeigt die betroffene Stelle nicht eindeutig.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX20-3",
          text: "Nur die Zusammenfassung des ganzen Commits kommentieren.",
          correct: false,
          explanation:
            "Sie bindet den Befund nicht an die konkrete Diff-Zeile.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX21",
      prompt:
        "Eine aktive Aufgabe ist unverändert, aber der Chat enthält zunehmend Wiederholungen. Wann passt ein neuer Fork weniger gut als Kompaktierung?",
      options: [
        {
          id: "CX21-1",
          text: "Wenn dasselbe Ziel mit verdichtetem Arbeitsstand fortgesetzt werden soll.",
          correct: true,
          explanation:
            "Der Guide unterscheidet gleiches Ziel mit Kompaktierung von neuer Richtung mit Fork.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX21-2",
          text: "Wenn eine eigenständige neue Richtung verfolgt werden soll.",
          correct: false,
          explanation: "Für eine neue Richtung ist der Fork beschrieben.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX21-3",
          text: "Wenn ein anderer Checkout technisch isoliert werden soll.",
          correct: false,
          explanation: "Dateiisolation wird über einen Worktree gewählt.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX22",
      prompt:
        "Ein Agent soll zu einer konkreten früheren Aussage befragt werden. Wie lässt sich die Rückfrage präzisieren?",
      options: [
        {
          id: "CX22-1",
          text: "Die betreffende Textstelle auswählen und in einen Side Chat übernehmen.",
          correct: true,
          explanation:
            "Ausgewählter Text kann Startkontext des Side Chats werden.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX22-2",
          text: "Nur den ganzen bisherigen Chat als neue Aufgabe kopieren.",
          correct: false,
          explanation: "Das übermittelt die fragliche Stelle weniger gezielt.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX22-3",
          text: "Nur die Datei verlinken, in der eventuell gearbeitet wurde.",
          correct: false,
          explanation: "Die Frage betrifft eine bestimmte Gesprächsaussage.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX23",
      prompt:
        "Eine mobile Agentenoberfläche steuert Arbeit auf einem verbundenen Rechner. Wo läuft der Code bei diesem Ablauf?",
      options: [
        {
          id: "CX23-1",
          text: "Auf dem ausgewählten verbundenen Host.",
          correct: true,
          explanation:
            "Die mobile Oberfläche steuert Arbeit auf dem Entwicklungsrechner.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX23-2",
          text: "Annehmen, der mobile Client führe den Build lokal aus.",
          correct: false,
          explanation: "Er ist laut Guide die Steuerfläche.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX23-3",
          text: "Annehmen, jeder Chat starte automatisch auf demselben Cloud-Host.",
          correct: false,
          explanation: "Der ausführende Host wird bewusst ausgewählt.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX24",
      prompt:
        "Warum reicht ein Kontext-Reset nach einem falschen Ansatz für sich allein nicht zur technischen Isolation?",
      options: [
        {
          id: "CX24-1",
          text: "Er verändert den Gesprächsstand, aber wählt keine getrennten Dateien oder Rechte.",
          correct: true,
          explanation:
            "Der Guide behandelt Kontextpflege und Umgebungs-/Berechtigungsgrenzen getrennt.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX24-2",
          text: "Nur die Chat-Zusammenfassung als Dateitrennung behandeln.",
          correct: false,
          explanation: "Eine Zusammenfassung ändert keine Arbeitsdateien.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX24-3",
          text: "Nur eine neue Unterhaltung als Rechtebegrenzung behandeln.",
          correct: false,
          explanation: "Werkzeugrechte sind separat festzulegen.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "CX25",
      prompt:
        "Ein Agent soll eine riskante Aktion ausführen. Welche Grenze gehört zur Vorbereitung der Freigabe?",
      options: [
        {
          id: "CX25-1",
          text: "Die erforderliche Freigabe eng auf Aktion und Kontext beziehen.",
          correct: true,
          explanation:
            "Der Guide beschreibt gezielte Genehmigungen als Teil der Steuerung.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX25-2",
          text: "Eine pauschale Freigabe für alle späteren Aktionen erteilen.",
          correct: false,
          explanation: "Das überschreitet den nötigen Umfang.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "CX25-3",
          text: "Die Aktion allein wegen eines vollständigen Chatverlaufs erlauben.",
          correct: false,
          explanation: "Gesprächskontext ersetzt keine Freigabeprüfung.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
  ],
  "codebase-memory-for-large-repos": [
    {
      id: "CG01",
      prompt:
        "Ein Team will Aufrufbeziehungen eines großen Java-Repositories erkunden. Welche Datenbasis liefert Codebase Memory MCP?",
      options: [
        {
          id: "CG01-1",
          text: "Einen aus dem Code gebildeten Graphen mit Symbolen und Beziehungen.",
          correct: true,
          explanation:
            "Das Werkzeug indexiert Strukturen und Referenzen als Knowledge Graph.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG01-2",
          text: "Nur eine Liste der zuletzt geänderten Dateien.",
          correct: false,
          explanation: "Sie bildet Aufrufbeziehungen nicht ab.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG01-3",
          text: "Nur eine Sammlung natürlicher Sprachzusammenfassungen.",
          correct: false,
          explanation:
            "Der beschriebene Index modelliert Codeelemente und Kanten.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG02",
      prompt:
        "Ein Codegraph soll Syntaxstrukturen vieler Programmiersprachen erschließen. Welche Analysetechnik passt?",
      options: [
        {
          id: "CG02-1",
          text: "Tree-sitter-basierte Syntaxanalyse.",
          correct: true,
          explanation: "Die README nennt Tree-sitter für die AST-Analyse.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG02-2",
          text: "Ausschließlich Textsuche über Funktionsnamen.",
          correct: false,
          explanation: "Sie liefert keine AST-Struktur.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG02-3",
          text: "Ausschließlich Laufzeit-Tracing jeder Programmausführung.",
          correct: false,
          explanation: "Die Grundlage ist statische Syntaxanalyse.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG03",
      prompt:
        "Ein Java-Service enthält Klassen, Methoden und Aufrufketten. Welche Graphdaten helfen bei der Suche nach einem Einstiegspunkt?",
      options: [
        {
          id: "CG03-1",
          text: "Klassen, Funktionen und ihre Aufrufbeziehungen.",
          correct: true,
          explanation:
            "Diese Knoten und Kanten gehören zum beschriebenen Graphmodell.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG03-2",
          text: "Nur eine Gliederung einzelner Dateien.",
          correct: false,
          explanation: "Sie zeigt die übergreifenden Aufrufbeziehungen nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG03-3",
          text: "Nur die Git-Änderungshistorie.",
          correct: false,
          explanation: "Die Historie ist kein Aufrufgraph.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG04",
      prompt:
        "Vor Graphabfragen zu einem Repository ist noch kein Index vorhanden. Welches Werkzeug schafft die Grundlage?",
      options: [
        {
          id: "CG04-1",
          text: "index_repository für dieses Repository ausführen.",
          correct: true,
          explanation: "Der Befehl baut den abfragbaren Graphen auf.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG04-2",
          text: "search_graph unmittelbar ohne Projektindex verwenden.",
          correct: false,
          explanation: "Ohne Index fehlt die abfragbare Graphbasis.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG04-3",
          text: "compare_graphs ohne zwei Indexstände verwenden.",
          correct: false,
          explanation: "Der Vergleich baut keinen ersten Projektgraphen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG05",
      prompt:
        "Nach der Indexierung soll geprüft werden, ob das Projekt eingetragen ist. Welche Abfrage passt?",
      options: [
        {
          id: "CG05-1",
          text: "list_projects mit Projektstatistiken verwenden.",
          correct: true,
          explanation:
            "Die Liste zeigt indizierte Projekte und Knoten-/Kantenzahlen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG05-2",
          text: "index_status für einen bereits geratenen Projektnamen nutzen.",
          correct: false,
          explanation:
            "Der Status ersetzt die Liste der vorhandenen Projekte nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG05-3",
          text: "get_architecture ohne ausgewähltes Projekt abfragen.",
          correct: false,
          explanation: "Die Architekturübersicht ist projektbezogen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG06",
      prompt:
        "Eine Graphantwort nennt eine Datei, die kürzlich geändert wurde. Welche gezielte Prüfung unterstützt das Tool?",
      options: [
        {
          id: "CG06-1",
          text: "check_index_coverage für den Pfad aufrufen.",
          correct: true,
          explanation:
            "Die Abfrage prüft erfasste Lücken und Frische für Pfade.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG06-2",
          text: "Alle positiven Funde als vollständig behandeln.",
          correct: false,
          explanation: "Ein Fund belegt keine aktuelle Abdeckung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG06-3",
          text: "Nur die Anzahl der Graphknoten betrachten.",
          correct: false,
          explanation: "Knotenzahlen prüfen den konkreten Pfad nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG07",
      prompt:
        "check_index_coverage meldet für einen Bereich keine bekannte Lücke. Welche Aussage ist damit zulässig?",
      options: [
        {
          id: "CG07-1",
          text: "Es wurde keine erfasste Lücke gefunden, Vollständigkeit ist unbewiesen.",
          correct: true,
          explanation:
            "Die README warnt ausdrücklich vor einer Vollständigkeitsdeutung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG07-2",
          text: "Alle dynamischen Beziehungen sind sicher enthalten.",
          correct: false,
          explanation:
            "Abdeckung beweist keine vollständige Laufzeitbeziehung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG07-3",
          text: "Die Quelldateien müssen nicht mehr angesehen werden.",
          correct: false,
          explanation: "Abdeckung ersetzt die Quellenprüfung nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG08",
      prompt:
        "Ein Entwickler sucht sowohl strukturelle Namen als auch semantisch ähnliche Codeelemente. Welches Werkzeug vereint diese Sucharten?",
      options: [
        {
          id: "CG08-1",
          text: "search_graph.",
          correct: true,
          explanation:
            "Die Abfrage bietet strukturelle, BM25- und semantische Suche.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG08-2",
          text: "search_code für reine Texttreffer einsetzen.",
          correct: false,
          explanation:
            "Das kombiniert nicht strukturelle und semantische Graphsuche.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG08-3",
          text: "get_architecture für eine Gesamtübersicht nutzen.",
          correct: false,
          explanation: "Die Übersicht ist keine kombinierte Suchschnittstelle.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG09",
      prompt:
        "Vor einer Änderung an einer Java-Methode werden Aufrufer und Aufgerufene gesucht. Welcher Graphaufruf ist dafür beschrieben?",
      options: [
        {
          id: "CG09-1",
          text: "trace_path mit passender Richtung.",
          correct: true,
          explanation:
            "Die Pfadverfolgung untersucht Beziehungen in beiden Richtungen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG09-2",
          text: "get_file_outline für eine beliebige Datei.",
          correct: false,
          explanation: "Eine Dateigliederung zeigt keine ganze Aufrufkette.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG09-3",
          text: "list_projects.",
          correct: false,
          explanation: "Die Projektliste enthält keine Methodenpfade.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG10",
      prompt:
        "Eine Java-Änderung liegt als Git-Diff vor. Welches Werkzeug ordnet sie betroffenen Symbolen und einem möglichen Wirkbereich zu?",
      options: [
        {
          id: "CG10-1",
          text: "detect_changes.",
          correct: true,
          explanation:
            "Das Tool verbindet Diff und betroffene Symbole mit Risiko-/Wirkbereichseinschätzung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG10-2",
          text: "search_code allein.",
          correct: false,
          explanation:
            "Textsuche ordnet den Diff nicht automatisch einem Wirkbereich zu.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG10-3",
          text: "manage_adr.",
          correct: false,
          explanation:
            "Ein Architekturentscheidungsdatensatz analysiert keinen Diff.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG11",
      prompt:
        "Ein Team benötigt eine eigene lesende Graphabfrage nach Klassenbeziehungen. Welche Schnittstelle passt?",
      options: [
        {
          id: "CG11-1",
          text: "query_graph mit einer unterstützten Cypher-Teilmenge.",
          correct: true,
          explanation: "Die Schnittstelle führt lesende Graphabfragen aus.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG11-2",
          text: "search_code für Cypher-Muster verwenden.",
          correct: false,
          explanation: "Textsuche verarbeitet keine Graphmuster.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG11-3",
          text: "compare_graphs als frei formulierbare Graphabfrage verwenden.",
          correct: false,
          explanation:
            "Der Snapshot-Vergleich ist auf Änderungen zwischen Ständen ausgerichtet.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG12",
      prompt:
        "Vor einer eigenen query_graph-Abfrage sind Knoten- und Beziehungstypen unklar. Welcher Schritt hilft zuerst?",
      options: [
        {
          id: "CG12-1",
          text: "get_graph_schema lesen.",
          correct: true,
          explanation:
            "Das Schema zeigt Labels, Kanten und Eigenschaften für Abfragen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG12-2",
          text: "search_graph mit geratenen Labelnamen starten.",
          correct: false,
          explanation:
            "Ohne Schema können Label und Beziehungen falsch angesetzt sein.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG12-3",
          text: "Nur get_architecture als vollständiges Abfrageschema ansehen.",
          correct: false,
          explanation:
            "Die Übersicht ersetzt die Typ- und Beziehungsliste nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG13",
      prompt:
        "Zwischen zwei Indexständen soll sichtbar werden, welche Knoten und Kanten hinzugekommen sind. Welches Werkzeug passt?",
      options: [
        {
          id: "CG13-1",
          text: "compare_graphs.",
          correct: true,
          explanation: "Es vergleicht zwei indizierte Snapshots.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG13-2",
          text: "get_code_snippet.",
          correct: false,
          explanation: "Ein Quellausschnitt zeigt keinen Snapshot-Unterschied.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG13-3",
          text: "index_status.",
          correct: false,
          explanation: "Der Status beschreibt Indexierung, keinen Kanten-Diff.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG14",
      prompt:
        "Ein Graphfund nennt eine Funktion. Wie kann die zugehörige Implementierung gezielt nachgelesen werden?",
      options: [
        {
          id: "CG14-1",
          text: "get_code_snippet mit qualifiziertem Namen.",
          correct: true,
          explanation: "Das Tool liest den Quellausschnitt einer Funktion.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG14-2",
          text: "get_file_outline als vollständigen Funktionskörper behandeln.",
          correct: false,
          explanation:
            "Die Gliederung listet Deklarationen, nicht den gezielten Ausschnitt.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG14-3",
          text: "search_graph als endgültigen Quelltext behandeln.",
          correct: false,
          explanation:
            "Ein Suchfund ersetzt das Nachlesen der Implementierung nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG15",
      prompt:
        "Für eine Java-Datei soll die Reihenfolge ihrer Deklarationen überblickt werden. Welche Abfrage ist dafür beschrieben?",
      options: [
        {
          id: "CG15-1",
          text: "get_file_outline.",
          correct: true,
          explanation:
            "Sie liefert die Deklarationsgliederung einer Datei in Quellreihenfolge.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG15-2",
          text: "trace_path.",
          correct: false,
          explanation:
            "Die Pfadverfolgung folgt Beziehungen statt Dateideklarationen aufzulisten.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG15-3",
          text: "compare_graphs.",
          correct: false,
          explanation: "Ein Snapshot-Vergleich liefert keine Dateigliederung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG16",
      prompt:
        "Ein Team sucht Sprachen, Pakete, Routen und Schwerpunkte eines indizierten Projekts. Welche Abfrage bietet eine Übersicht?",
      options: [
        {
          id: "CG16-1",
          text: "get_architecture.",
          correct: true,
          explanation:
            "Die Architekturübersicht fasst diese Strukturmerkmale zusammen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG16-2",
          text: "get_file_outline einer einzelnen Datei als Projektübersicht nehmen.",
          correct: false,
          explanation: "Eine Datei beschreibt nicht alle Pakete und Routen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG16-3",
          text: "get_graph_schema als fertige Architekturinterpretation ansehen.",
          correct: false,
          explanation:
            "Das Schema beschreibt Typen und Eigenschaften, nicht die Projektübersicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG17",
      prompt:
        "Eine konkrete Zeichenfolge in indizierten Dateien wird gesucht, unabhängig von Graphbeziehungen. Welches Werkzeug ist passend?",
      options: [
        {
          id: "CG17-1",
          text: "search_code.",
          correct: true,
          explanation:
            "Die Schnittstelle bietet grep-artige Textsuche in Projektdateien.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG17-2",
          text: "trace_path.",
          correct: false,
          explanation: "Es verfolgt Beziehungswege, nicht beliebigen Text.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG17-3",
          text: "compare_graphs.",
          correct: false,
          explanation: "Es vergleicht Indexstände statt Text zu suchen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG18",
      prompt:
        "Warum sollte ein Befund über fehlende Aufrufer mit besonderer Vorsicht formuliert werden?",
      options: [
        {
          id: "CG18-1",
          text: "Ein Index kann Beziehungen übersehen; Abdeckung und Quellen sind zusätzlich zu prüfen.",
          correct: true,
          explanation:
            "Die README unterscheidet vorläufige Treffer von belastbaren Negativaussagen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG18-2",
          text: "Ein fehlender Graphaufruf beweist die Laufzeitunerreichbarkeit.",
          correct: false,
          explanation: "Das folgt aus einer statischen Abfrage nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG18-3",
          text: "Eine einzelne Suchseite enthält automatisch alle Treffer.",
          correct: false,
          explanation: "Paginierung und Abdeckung können fehlen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG19",
      prompt:
        "Ein Treffer im Codegraphen widerspricht einer aktuellen Quelldatei. Welcher Stand trägt die Implementierungsentscheidung?",
      options: [
        {
          id: "CG19-1",
          text: "Die aktuelle Quelldatei nach Prüfung des Indexstands.",
          correct: true,
          explanation:
            "Der Graph ist ein Such- und Analysehilfsmittel, dessen Frische zu prüfen ist.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG19-2",
          text: "Den Graphfund ohne Frischeprüfung vorziehen.",
          correct: false,
          explanation:
            "Ein alter Index kann der aktuellen Datei widersprechen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG19-3",
          text: "Nur das Architekturdiagramm zur Entscheidung heranziehen.",
          correct: false,
          explanation:
            "Eine Übersicht ersetzt den aktuellen Implementierungsstand nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG20",
      prompt:
        "Wofür eignet sich ein lokaler Codegraph bei einem Java-Web-Repository?",
      options: [
        {
          id: "CG20-1",
          text: "Er unterstützt Struktur- und Wirkungsfragen über Codebeziehungen.",
          correct: true,
          explanation:
            "Die README beschreibt Funktions-, Klassen-, Routen- und Beziehungsabfragen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG20-2",
          text: "Er bestätigt das fachliche Verhalten des Endpunkts.",
          correct: false,
          explanation: "Strukturelle Beziehungen sind keine Verhaltensprüfung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG20-3",
          text: "Er ersetzt die Prüfung aktueller Quelldateien.",
          correct: false,
          explanation:
            "Graphbefunde müssen bei Bedarf am Code bestätigt werden.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG21",
      prompt:
        "Wie kann eine HTTP-Route im Graphmodell mit Codeelementen verknüpft sein?",
      options: [
        {
          id: "CG21-1",
          text: "Über Route-Knoten und zugehörige Beziehungen.",
          correct: true,
          explanation:
            "Die README nennt Routen sowie HANDLES- und HTTP_CALLS-Beziehungen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG21-2",
          text: "Nur über die Importbeziehung des Controllers.",
          correct: false,
          explanation: "Ein Import bildet nicht direkt die HTTP-Route ab.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG21-3",
          text: "Nur über identische Dateinamen von Frontend und Backend.",
          correct: false,
          explanation: "Namensgleichheit ist keine modellierte Routebeziehung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG22",
      prompt:
        "Das Team möchte einen abfragbaren Codegraphen ohne zusätzlichen gehosteten Modelldienst nutzen. Welche Architektur passt?",
      options: [
        {
          id: "CG22-1",
          text: "Die bestehenden Agentenwerkzeuge fragen einen lokalen MCP-Server ab.",
          correct: true,
          explanation:
            "Die README beschreibt lokale Verarbeitung ohne eigenen API-Key für das Tool.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG22-2",
          text: "Jede Graphabfrage benötigt einen neuen Cloud-LLM-Key.",
          correct: false,
          explanation:
            "Das Projekt nennt gerade keinen eigenen Modellschlüssel.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG22-3",
          text: "Der gesamte Quellcode muss zuvor in einen öffentlichen Index geladen werden.",
          correct: false,
          explanation: "Die Projektbeschreibung sieht lokale Indexierung vor.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG23",
      prompt:
        "Eine vermutete Beziehung wurde nur durch strukturelle Indexierung gefunden. Was fehlt zur Absicherung eines konkreten Laufzeitverhaltens?",
      options: [
        {
          id: "CG23-1",
          text: "Die Prüfung am aktuellen Code und gegebenenfalls Laufzeit-/Testnachweise.",
          correct: true,
          explanation:
            "Der Graph liefert strukturelle Hinweise, keine vollständige Laufzeitgarantie.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG23-2",
          text: "Nur einen zweiten statischen Graph-Screenshot.",
          correct: false,
          explanation: "Er prüft keine tatsächliche Ausführung.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG23-3",
          text: "Nur ein zusätzliches Hersteller-Benchmarkbeispiel.",
          correct: false,
          explanation: "Es belegt das Verhalten dieses Dienstes nicht.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG24",
      prompt:
        "Wie sollte ein Herstellerwert zur Tokenersparnis beim Einsatz in einem fremden Repository eingeordnet werden?",
      options: [
        {
          id: "CG24-1",
          text: "Als Herstellerergebnis, das am eigenen Ablauf gemessen werden muss.",
          correct: true,
          explanation:
            "Die Projektwerte sind keine übertragbare Garantie für andere Aufgaben.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG24-2",
          text: "Als garantierte Ersparnis für jedes Repository.",
          correct: false,
          explanation: "Die Messbedingungen unterscheiden sich.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG24-3",
          text: "Als Beweis für fehlerfreie Antworten.",
          correct: false,
          explanation: "Tokenmenge belegt keine fachliche Korrektheit.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
    {
      id: "CG25",
      prompt:
        "Vor einem Urteil, dass eine Klasse im ganzen Projekt unbenutzt ist, welche Graphprüfung ist besonders wichtig?",
      options: [
        {
          id: "CG25-1",
          text: "Scope, Indexfrische und relevante Suchabdeckung prüfen.",
          correct: true,
          explanation:
            "Negative Vollständigkeitsaussagen brauchen mehr als einen vorläufigen Treffer.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG25-2",
          text: "Nur einen lokalen Dateiausschnitt lesen.",
          correct: false,
          explanation:
            "Ein Ausschnitt kann andere Verwendungen nicht ausschließen.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
        {
          id: "CG25-3",
          text: "Eine einzelne Suche ohne Paginierung als vollständig ansehen.",
          correct: false,
          explanation:
            "Trefferlisten und Indexbereiche können unvollständig sein.",
          sourceUrl: "https://github.com/DeusData/codebase-memory-mcp",
        },
      ],
    },
  ],
  "token-efficiency-tools": [
    {
      id: "TK01",
      prompt:
        "Ein Agent erhält sehr lange Ausgaben aus Java- und npm-Tests. An welcher Stelle setzt RTK an?",
      options: [
        {
          id: "TK01-1",
          text: "Bei der Shell-Ausgabe, bevor sie in den Modellkontext gelangt.",
          correct: true,
          explanation:
            "RTK filtert Kommandoausgaben vor dem Lesen durch den Agenten.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK01-2",
          text: "Bei der Auswahl eines günstigeren Modells.",
          correct: false,
          explanation: "RTK verändert die Shell-Ausgabe, nicht die Modellwahl.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK01-3",
          text: "Bei der Kürzung aller vorhandenen Quelldateien.",
          correct: false,
          explanation: "Der Filter schreibt den Projektcode nicht um.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK02",
      prompt:
        "Ein Agent prüft mit RTK die jüngsten Git-Commits. Welche Angaben bleiben in der verdichteten git-log-Ausgabe?",
      options: [
        {
          id: "TK02-1",
          text: "Hash, Autor und Betreff des Commits.",
          correct: true,
          explanation: "RTK reduziert git log auf genau diese Angaben.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK02-2",
          text: "Hash, Datum und vollständiger Patch.",
          correct: false,
          explanation:
            "Der Patch gehört nicht zur beschriebenen kompakten Logausgabe.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK02-3",
          text: "Nur die Anzahl der Commits pro Autor.",
          correct: false,
          explanation:
            "Die Ausgabe zeigt einzelne Commits mit Hash und Betreff.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK03",
      prompt:
        "RTK meldet 80 Prozent weniger Shell-Ausgabetext. Welche Folgerung ist fachlich zulässig?",
      options: [
        {
          id: "TK03-1",
          text: "Die Shell-Ausgabe wurde in diesem Messrahmen reduziert.",
          correct: true,
          explanation:
            "Die README sagt ausdrücklich, dass dies keine gleiche Rechnungssenkung bedeutet.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK03-2",
          text: "Die gesamte Modellrechnung sinkt entsprechend.",
          correct: false,
          explanation:
            "Weitere Eingaben und Ausgaben bleiben abrechnungsrelevant.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK03-3",
          text: "Die Bearbeitungszeit sinkt entsprechend.",
          correct: false,
          explanation:
            "Weniger Shelltext garantiert keine gleich große Zeitersparnis.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK04",
      prompt: "Warum kann ein kurzer Testbericht die Fehlersuche erschweren?",
      options: [
        {
          id: "TK04-1",
          text: "Gefilterte Details können für die Diagnose fehlen.",
          correct: true,
          explanation:
            "RTK fasst erfolgreiche Tests zusammen und kürzt Ausgaben.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK04-2",
          text: "Jeden erfolgreichen Test vollständig ausgeben lassen.",
          correct: false,
          explanation: "So ginge die geplante Verdichtung verloren.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK04-3",
          text: "Fehlerdetails ohne Rückgriff auf das Original allein aus der Kurzfassung ableiten.",
          correct: false,
          explanation:
            "Die gekürzte Ausgabe kann diagnostische Details verlieren.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK05",
      prompt:
        "Ein fehlgeschlagener npm-Test soll mit aktivem RTK ausgewertet werden. Welche Ausgabe sollte der Filter priorisieren?",
      options: [
        {
          id: "TK05-1",
          text: "Fehlgeschlagene Tests statt aller erfolgreichen Einzelfälle.",
          correct: true,
          explanation:
            "Testfilter zeigen Fehler und verdichten erfolgreiche Fälle.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK05-2",
          text: "Alle erfolgreichen Tests ausführlich zeigen, Fehler zusammenzählen.",
          correct: false,
          explanation: "Die dokumentierte Priorität ist umgekehrt.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK05-3",
          text: "Nur die Gesamtdauer ohne Fehlernamen zeigen.",
          correct: false,
          explanation: "So fehlten die für die Diagnose wichtigen Fehlschläge.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK06",
      prompt:
        "Ein Entwickler sucht mit rg in vielen Dateien. Welche Verdichtung wendet RTK auf die Treffer an?",
      options: [
        {
          id: "TK06-1",
          text: "Treffer nach Datei gruppieren und lange Zeilen kürzen.",
          correct: true,
          explanation: "Die README nennt diese Behandlung für grep und rg.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK06-2",
          text: "Nur die Gesamtzahl der Treffer ohne Fundstellen zeigen.",
          correct: false,
          explanation: "Der Dateibezug ginge verloren.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK06-3",
          text: "Jede lange Trefferzeile vollständig wiederholen.",
          correct: false,
          explanation: "RTK kürzt lange Zeilen und gruppiert Treffer.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK07",
      prompt:
        "Ein Agent betrachtet einen großen Git-Diff. Wie verdichtet RTK dessen Ausgabe?",
      options: [
        {
          id: "TK07-1",
          text: "Weniger Kontext und gekürzte Header im angezeigten Diff.",
          correct: true,
          explanation: "Die README beschreibt die Diff-Verdichtung so.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK07-2",
          text: "Nur die Zahl geänderter Dateien statt der Diff-Hunks zeigen.",
          correct: false,
          explanation:
            "Das wäre stärker als die beschriebene Kontextreduktion.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK07-3",
          text: "Den Diff ungefiltert mitsamt allen Headern wiedergeben.",
          correct: false,
          explanation: "RTK kürzt Kontext und Header.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK08",
      prompt:
        "Ein Team möchte wissen, ob eine RTK-Integration tatsächlich greift. Welche technische Grenze ist relevant?",
      options: [
        {
          id: "TK08-1",
          text: "Nur abgefangene Shell-Aufrufe werden automatisch umgeschrieben.",
          correct: true,
          explanation:
            "Die README grenzt Hooks von eingebauten Read-/Grep-Werkzeugen ab.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK08-2",
          text: "Auch eingebaute Read-Aufrufe als Bash-Hooks zählen.",
          correct: false,
          explanation: "Sie umgehen den Shell-Hook.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK08-3",
          text: "Eine nachträgliche Änderung alter Chatnachrichten erwarten.",
          correct: false,
          explanation: "RTK filtert vor dem Lesen, nicht rückwirkend.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK09",
      prompt:
        "Ein Agent nutzt ein eingebautes Read-Werkzeug statt eines Shell-Befehls. Was gilt für den RTK-Bash-Hook?",
      options: [
        {
          id: "TK09-1",
          text: "Dieser Aufruf passiert den Bash-Hook nicht.",
          correct: true,
          explanation:
            "Die README nennt Read, Grep und Glob als nicht automatisch umgeschrieben.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK09-2",
          text: "Den eingebauten Read-Aufruf als automatisch umgeschrieben ansehen.",
          correct: false,
          explanation: "Er ist kein Bash-Aufruf.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK09-3",
          text: "Die bereits gelesene Ausgabe nachträglich durch RTK ersetzen lassen.",
          correct: false,
          explanation: "Der Hook wirkt vor einem Shell-Aufruf.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK10",
      prompt:
        "Ein Ausgabefilter schätzt gesparte Tokens aus Bytes. Welche Grenze hat diese absolute Tokenzahl?",
      options: [
        {
          id: "TK10-1",
          text: "Sie beruht auf einer Byte-Schätzung statt einem eingebauten Tokenizer.",
          correct: true,
          explanation: "Die README beschreibt bytes durch vier als Näherung.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK10-2",
          text: "Die Schätzung als exakte Providerabrechnung behandeln.",
          correct: false,
          explanation: "Ein Byte-Verhältnis ist kein Provider-Tokenizer.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK10-3",
          text: "Die Schätzung als Messung des gesamten Gesprächs behandeln.",
          correct: false,
          explanation:
            "RTK berichtet vor allem über gefilterte Kommandoausgabe.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK11",
      prompt:
        "Ein Team setzt RTK vor dem Git-Status eines Agenten ein. Welche Ausgabeform ist vorgesehen?",
      options: [
        {
          id: "TK11-1",
          text: "Eine knappe, nach Zustand gruppierte Statusanzeige.",
          correct: true,
          explanation: "Die README nennt gruppierte Statusinformationen.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK11-2",
          text: "Den Status als vollständigen Diff aller Dateien ausgeben.",
          correct: false,
          explanation: "Status gruppiert Zustände statt Dateiinhalte.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK11-3",
          text: "Den Status durch eine Liste früherer Commits ersetzen.",
          correct: false,
          explanation:
            "Die Commit-Historie ist kein aktueller Arbeitsbaumstatus.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK12",
      prompt:
        "Ein Agent liest Java-Dateien über einen unterstützten RTK-Shellaufruf. Was kann RTK hervorheben?",
      options: [
        {
          id: "TK12-1",
          text: "Signaturen und Struktur statt vollständiger Funktionskörper.",
          correct: true,
          explanation:
            "Die README beschreibt ein strukturiertes Smart Reading.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK12-2",
          text: "Den vollständigen Funktionskörper jeder Datei wiederholen.",
          correct: false,
          explanation: "Smart Reading priorisiert Signaturen und Struktur.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK12-3",
          text: "Nur die Zahl der Dateien anzeigen.",
          correct: false,
          explanation: "Damit fehlen die strukturellen Informationen.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK13",
      prompt:
        "Ein Agent führt einen unterstützten git-push-Befehl über RTK aus. Welche Rückmeldung erhält er in der kompakten Ausgabe?",
      options: [
        {
          id: "TK13-1",
          text: "Eine Bestätigungszeile statt der vollen Fortschrittsausgabe.",
          correct: true,
          explanation:
            "Für git add, commit und push nennt RTK eine Bestätigungszeile.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK13-2",
          text: "Den vollständigen Fortschritt samt jeder übertragenen Einheit.",
          correct: false,
          explanation: "RTK verdichtet diese Fortschrittsausgabe.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK13-3",
          text: "Nur den Inhalt der geänderten Dateien.",
          correct: false,
          explanation:
            "Die Rückmeldung bestätigt die Git-Aktion und ist kein Dateidiff.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK14",
      prompt: "Was verändert die Caveman-Skill-Variante hauptsächlich?",
      options: [
        {
          id: "TK14-1",
          text: "Die sprachliche Länge von Agentenantworten.",
          correct: true,
          explanation:
            "Die README beschreibt den Skill als knappe Antwortregel.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK14-2",
          text: "Nur die Shell-Ausgabe des Agenten kürzen.",
          correct: false,
          explanation:
            "Das ist die Rolle eines Ausgabeproxy, nicht des Stils des Skills.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK14-3",
          text: "Nur Quellcodekommentare umformulieren.",
          correct: false,
          explanation: "Der Skill steuert primär die Prosa der Agentenantwort.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK15",
      prompt:
        "Ein Agent nutzt Caveman Proxy. Welche Eingaben werden dabei verdichtet?",
      options: [
        {
          id: "TK15-1",
          text: "Eingehende Werkzeugdaten wie Logs, JSON und Diffs.",
          correct: true,
          explanation: "Der Proxy kürzt Daten, die der Agent liest.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK15-2",
          text: "Nur die sichtbare Antwortprosa des Agenten kürzen.",
          correct: false,
          explanation: "Das ist die Skill-Variante, nicht der Eingabeproxy.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK15-3",
          text: "Nur den ursprünglichen Systemprompt löschen.",
          correct: false,
          explanation: "Der Proxy verdichtet Werkzeugdaten.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK16",
      prompt:
        "Wie kann bei Caveman Proxy ein herausgefiltertes Detail geprüft werden?",
      options: [
        {
          id: "TK16-1",
          text: "Das lokal gespeicherte Original über den Rückholbezug abrufen.",
          correct: true,
          explanation:
            "Die README beschreibt eine Sicherung des ursprünglichen Bytestrings.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK16-2",
          text: "Den komprimierten Text als vollständiges Original behandeln.",
          correct: false,
          explanation: "Die Kurzfassung kann etwas ausgelassen haben.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK16-3",
          text: "Den Java-Build ohne Einsicht in die Ausgabe wiederholen.",
          correct: false,
          explanation:
            "Ein Wiederholungslauf allein erklärt den ausgelassenen Inhalt nicht.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK17",
      prompt:
        "Welche Inhalte sollen nach Cavemans eigener Regel nicht in verkürzte Umgangssprache umgeformt werden?",
      options: [
        {
          id: "TK17-1",
          text: "Code, Pfade und exakte Fehlermeldungen.",
          correct: true,
          explanation:
            "Die Projektbeschreibung nimmt diese präzisen Inhalte ausdrücklich aus.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK17-2",
          text: "Die genaue Fehlermeldung in verkürzte Umgangssprache übertragen.",
          correct: false,
          explanation: "Exakte Fehlertexte sind ausdrücklich ausgenommen.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK17-3",
          text: "Pfade und Codebezeichner als freie Synonyme wiedergeben.",
          correct: false,
          explanation: "Technische Bezeichner sollen erhalten bleiben.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK18",
      prompt:
        "Ein Sicherheitsdialog erscheint während einer knappen Caveman-Antwort. Wie sollte die Warnung ausgegeben werden?",
      options: [
        {
          id: "TK18-1",
          text: "Die Warnung in vollständigen Sätzen ausgeben.",
          correct: true,
          explanation:
            "Die README nennt Sicherheitswarnungen und Bestätigungen als Ausnahme vom Kurzstil.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK18-2",
          text: "Die Warnung in den allgemeinen Kurzstil pressen.",
          correct: false,
          explanation: "Sicherheitswarnungen sind ausdrücklich ausgenommen.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK18-3",
          text: "Die Warnung nur im versteckten Original speichern.",
          correct: false,
          explanation: "Sie soll dem Menschen vollständig gezeigt werden.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK19",
      prompt:
        "Ein Team rechnet pro Anfrage statt pro Token ab und nutzt kaum Prosa. Wie sollte es den Caveman-Einsatz beurteilen?",
      options: [
        {
          id: "TK19-1",
          text: "Den Einsatz kritisch prüfen oder auslassen.",
          correct: true,
          explanation:
            "Für solche Arbeitslasten kann der Skill keinen Kostenvorteil bieten.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK19-2",
          text: "Eine garantierte Ersparnis annehmen.",
          correct: false,
          explanation: "Die Quelle nennt ausdrücklich Gegenfälle.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK19-3",
          text: "Das Werkzeug ohne Messung verbindlich machen.",
          correct: false,
          explanation: "Der Nutzen hängt vom eigenen Ablauf ab.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK20",
      prompt:
        "Warum kann ein Kürzungs-Skill bei einer sehr kurzen Frage sogar mehr Tokens kosten?",
      options: [
        {
          id: "TK20-1",
          text: "Seine Regeln werden zusätzlich als Eingabekontext mitgeführt.",
          correct: true,
          explanation:
            "Die README nennt den Regelumfang als möglichen Mehraufwand.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK20-2",
          text: "Die Antwortprosa ohne zusätzliches Regelwerk kürzen.",
          correct: false,
          explanation:
            "Der installierte Skill bringt seine Regeln als Eingabe mit.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK20-3",
          text: "Nur die Größe der Quelldateien als Kostenfaktor ansehen.",
          correct: false,
          explanation: "Auch Instruktionen belegen Modellkontext.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK21",
      prompt:
        "Welche ältere Caveman-Variante ist eingefroren, während Skill und Proxy aktiv sind?",
      options: [
        {
          id: "TK21-1",
          text: "caveman-code als vollständigen Agenten.",
          correct: true,
          explanation: "Die README kennzeichnet diesen Zweig als frozen.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK21-2",
          text: "Den aktuellen Hauptzweig caveman als eingefroren ansehen.",
          correct: false,
          explanation: "Er ist in der Übersicht als live markiert.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK21-3",
          text: "RTK als Teil des eingefrorenen Caveman-Code-Zweigs ansehen.",
          correct: false,
          explanation: "RTK ist ein anderes Projekt.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK22",
      prompt:
        "Ein Team will die Einsparungen von Caveman für eigene Aufgaben bewerten. Welche Evidenz hat Vorrang?",
      options: [
        {
          id: "TK22-1",
          text: "Ein A/B-Vergleich der eigenen Aufgabe mit Anbieterabrechnung.",
          correct: true,
          explanation: "Die README empfiehlt den eigenen Messvergleich.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK22-2",
          text: "Ein einzelner Social-Media-Kommentar.",
          correct: false,
          explanation: "Er misst den eigenen Ablauf nicht.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK22-3",
          text: "Die größte veröffentlichte Einsparungszahl.",
          correct: false,
          explanation: "Sie ist nicht auf alle Arbeitslasten übertragbar.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK23",
      prompt:
        "Ein Team verbietet Telemetrie für neue Werkzeuge. Welche konkrete Prüfung ist bei RTK nötig?",
      options: [
        {
          id: "TK23-1",
          text: "Den Opt-in-Zustand der RTK-Telemetrie prüfen.",
          correct: true,
          explanation:
            "Die README beschreibt Telemetrie als standardmäßig aus und ausdrücklich aktivierbar.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK23-2",
          text: "Die Werkseinstellung ohne Prüfung als dauerhafte Teamrichtlinie behandeln.",
          correct: false,
          explanation:
            "Opt-in und lokale Konfiguration können den Zustand ändern.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK23-3",
          text: "Nur die README-Lizenz als Datenschutznachweis lesen.",
          correct: false,
          explanation:
            "Die Lizenz sagt nichts über den aktivierten Telemetriezustand.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
    {
      id: "TK24",
      prompt:
        "Warum ist bei Caveman CLI eine Datenschutzentscheidung vor der Nutzung nötig?",
      options: [
        {
          id: "TK24-1",
          text: "Anonyme Nutzungsstatistik ist laut README standardmäßig aktiv und abschaltbar.",
          correct: true,
          explanation:
            "Die Projektbeschreibung nennt das Standardverhalten und den Abschaltbefehl.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK24-2",
          text: "Die Standardeinstellung von RTK auf Caveman übertragen.",
          correct: false,
          explanation:
            "Die beiden Werkzeuge dokumentieren unterschiedliche Telemetrie-Defaults.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
        {
          id: "TK24-3",
          text: "Nur auf die lokalen Proxy-Sicherungen achten.",
          correct: false,
          explanation: "Die CLI-Nutzungsstatistik ist ein eigener Datenpfad.",
          sourceUrl: "https://github.com/JuliusBrussee/caveman",
        },
      ],
    },
    {
      id: "TK25",
      prompt:
        "Eine strukturelle ast-grep-Suche liefert sehr viele Treffer. Wie verdichtet RTK diese Ausgabe?",
      options: [
        {
          id: "TK25-1",
          text: "Treffer nach Datei gruppieren und überzählige Treffer begrenzen.",
          correct: true,
          explanation:
            "Für ast-grep nennt RTK Dateigruppierung und eine Obergrenze für Überlauf.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK25-2",
          text: "Treffer nur als eine globale Gesamtzahl ausgeben.",
          correct: false,
          explanation:
            "Die Gruppierung bewahrt konkrete Treffer und Dateibezüge.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
        {
          id: "TK25-3",
          text: "Alle Treffer ohne Obergrenze in ursprünglicher Reihenfolge ausgeben.",
          correct: false,
          explanation: "RTK begrenzt überlaufende Treffer.",
          sourceUrl: "https://github.com/rtk-ai/rtk",
        },
      ],
    },
  ],
  "coding-agent-interface-selection": [
    {
      id: "UI01",
      prompt:
        "Ein Team will vom Telefon aus einen Coding-Auftrag auf einem verbundenen Entwicklungsrechner beginnen und später dessen Diff prüfen. Welche Oberfläche passt zum beschriebenen Ablauf?",
      options: [
        {
          id: "UI01-1",
          text: "Codex Remote in der mobilen ChatGPT-App.",
          correct: true,
          explanation:
            "Der Guide beschreibt die mobile Steuerung von Arbeit auf verbundenen Hosts.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI01-2",
          text: "Copilot Chat im lokalen Editor.",
          correct: false,
          explanation:
            "Die beschriebene mobile Steuerung eines verbundenen Codex-Hosts ist kein lokaler IDE-Chat.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI01-3",
          text: "Claude Code nur als lokaler Terminalprozess.",
          correct: false,
          explanation:
            "Ein lokaler Terminalprozess ist nicht die beschriebene mobile Steuerfläche.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI02",
      prompt:
        "Ein Codex-Auftrag soll in einem separaten Checkout beginnen. Welche Wahl passt vor dem Start?",
      options: [
        {
          id: "UI02-1",
          text: "Einen neuen Worktree für die Aufgabe.",
          correct: true,
          explanation: "Der Guide nennt die Worktree-Wahl im Startdialog.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI02-2",
          text: "Einen weiteren Chat im selben Checkout öffnen.",
          correct: false,
          explanation:
            "Ein zweiter Chat isoliert die Dateien des Checkouts nicht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI02-3",
          text: "Nur zu einem neuen Branch im selben Checkout wechseln.",
          correct: false,
          explanation:
            "Der Branchwechsel bietet keinen gleichzeitig getrennten Arbeitsbaum.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI03",
      prompt:
        "Eine mobile Review-Person möchte Feedback auf eine konkrete Diff-Zeile geben. Welche Funktion passt?",
      options: [
        {
          id: "UI03-1",
          text: "Inline-Kommentar an der betroffenen Zeile.",
          correct: true,
          explanation: "Der Guide beschreibt zeilenbezogene Review-Kommentare.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI03-2",
          text: "Eine allgemeine Chatnachricht mit dem Dateinamen senden.",
          correct: false,
          explanation: "Sie bezeichnet die kritisierte Zeile nicht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI03-3",
          text: "Eine Notiz zum gesamten Commit abgeben.",
          correct: false,
          explanation:
            "Sie bindet das Feedback nicht an die konkrete Diff-Stelle.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI04",
      prompt:
        "Ein Team will einen Agentenauftrag vom Telefon aus beginnen, der Code aber auf dem Windows-Host ausführen soll. Welche Trennung ist wichtig?",
      options: [
        {
          id: "UI04-1",
          text: "Mobile Steuerung und ausführenden Host getrennt betrachten.",
          correct: true,
          explanation:
            "Der Guide bezeichnet das Telefon als Steuerfläche und den Host als Ausführungsort.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI04-2",
          text: "Die mobile Ansicht als Ausführungsort einplanen.",
          correct: false,
          explanation: "Sie dient hier der Steuerung des verbundenen Hosts.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI04-3",
          text: "Ohne Hostwahl einen beliebigen Cloud-Lauf voraussetzen.",
          correct: false,
          explanation: "Der Guide fordert die Wahl der Ausführungsumgebung.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI05",
      prompt:
        "Ein Agentenlauf braucht für eine einzelne Aktion eine Freigabe. Welche Fähigkeit ist dafür nötig?",
      options: [
        {
          id: "UI05-1",
          text: "Eine konkrete Berechtigungsanfrage mobil prüfen.",
          correct: true,
          explanation:
            "Der Guide beschreibt mobile Freigaben für Kommandos und Zugriffe.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI05-2",
          text: "Auf eine allgemeine Freigabe aller späteren Befehle vertrauen.",
          correct: false,
          explanation:
            "Der Guide beschreibt die Prüfung konkreter Berechtigungsanfragen.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI05-3",
          text: "Die Aktion allein aufgrund der Agentenbegründung freigeben.",
          correct: false,
          explanation:
            "Eine Begründung ersetzt die angezeigte Berechtigungsprüfung nicht.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI06",
      prompt:
        "In GitHub Copilot Chat soll vor Codeänderungen ein detaillierter Implementierungsweg geprüft werden. Welcher Modus passt?",
      options: [
        {
          id: "UI06-1",
          text: "Plan mode.",
          correct: true,
          explanation:
            "GitHub beschreibt Plan als Modus für einen prüfbaren Implementierungsplan.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI06-2",
          text: "Ask mode für die technische Vorplanung verwenden.",
          correct: false,
          explanation:
            "Ask beantwortet Fragen, liefert aber nicht den beschriebenen prüfbaren Planablauf.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI06-3",
          text: "Agent mode mit sofortiger Dateibearbeitung starten.",
          correct: false,
          explanation:
            "Agent kann Änderungen ausführen, bevor der Plan geprüft wurde.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
      ],
    },
    {
      id: "UI07",
      prompt:
        "In Copilot Chat soll der Agent einen mehrstufigen Coding-Auftrag selbständig bearbeiten. Welcher Modus ist dafür beschrieben?",
      options: [
        {
          id: "UI07-1",
          text: "Agent mode.",
          correct: true,
          explanation:
            "Agent mode kann Dateien bearbeiten und Werkzeuge iterativ verwenden.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI07-2",
          text: "Plan mode ohne Übergang in die Umsetzung.",
          correct: false,
          explanation:
            "Plan mode erstellt zunächst den Plan, bearbeitet aber nicht selbständig die Dateien.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI07-3",
          text: "Ask mode für den gesamten Änderungsauftrag.",
          correct: false,
          explanation: "Ask mode ist für Fragen und Erklärungen vorgesehen.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
      ],
    },
    {
      id: "UI08",
      prompt:
        "Ein Entwickler möchte in Copilot eine Codefrage beantworten lassen, ohne automatisch Dateien zu ändern. Welcher Modus passt?",
      options: [
        {
          id: "UI08-1",
          text: "Ask mode.",
          correct: true,
          explanation:
            "GitHub beschreibt Ask für Fragen und Erklärungen zum Code.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI08-2",
          text: "Agent mode mit dem Auftrag zur Korrektur.",
          correct: false,
          explanation:
            "Agent mode kann den Code verändern, obwohl nur eine Erklärung gefragt ist.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI08-3",
          text: "Plan mode für eine vollständige Implementierungsplanung.",
          correct: false,
          explanation: "Ein Plan ist für die konkrete Lese-Frage nicht nötig.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
      ],
    },
    {
      id: "UI09",
      prompt:
        "Ein Copilot-Agent soll einen externen Dienst über ein Werkzeug einbinden. Welche Erweiterung passt?",
      options: [
        {
          id: "UI09-1",
          text: "Einen MCP-Server als Werkzeug anbinden.",
          correct: true,
          explanation: "Die Quelle beschreibt MCP-Server für Copilot Chat.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI09-2",
          text: "Eine Projektdatei als Chat-Anhang mitgeben.",
          correct: false,
          explanation:
            "Ein Anhang liefert Kontext, aber keine Verbindung zu einem externen Dienst.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI09-3",
          text: "Eine zusätzliche Prompt-Datei mit Anweisungen schreiben.",
          correct: false,
          explanation: "Anweisungen allein stellen keinen Werkzeugzugang her.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
      ],
    },
    {
      id: "UI10",
      prompt:
        "Wovon kann die Verfügbarkeit des Copilot-Agentenmodus in einer Organisation abhängen?",
      options: [
        {
          id: "UI10-1",
          text: "Von organisatorischen Richtlinien für den IDE-Agentenmodus.",
          correct: true,
          explanation:
            "GitHub nennt die mögliche Deaktivierung durch Administratoren.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI10-2",
          text: "Nur von der gewählten Modell-Kontextgröße.",
          correct: false,
          explanation:
            "Der Administrationsstatus des Modus ist davon unabhängig.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI10-3",
          text: "Nur von einer lokalen Prompteinstellung.",
          correct: false,
          explanation:
            "Eine Promptvorgabe hebt eine organisatorische Deaktivierung nicht auf.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
      ],
    },
    {
      id: "UI11",
      prompt:
        "Ein Team möchte Claude Code wahlweise im Terminal oder in der IDE nutzen. Welche Bereitstellung passt?",
      options: [
        {
          id: "UI11-1",
          text: "Claude Code auf mehreren Oberflächen einschließlich Terminal und IDE.",
          correct: true,
          explanation: "Die Übersicht nennt beide Oberflächen.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI11-2",
          text: "Claude Code ausschließlich als IDE-Erweiterung betrachten.",
          correct: false,
          explanation:
            "Die Übersicht nennt auch Terminal, Desktop und Browser.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI11-3",
          text: "Claude Code ausschließlich als Terminalprogramm betrachten.",
          correct: false,
          explanation: "Die Übersicht nennt mehrere weitere Oberflächen.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
      ],
    },
    {
      id: "UI12",
      prompt:
        "Ein Team braucht eine Claude-Code-Oberfläche mit visueller Diff-Prüfung und mehreren Sitzungen. Welche Oberfläche passt?",
      options: [
        {
          id: "UI12-1",
          text: "Die eigenständige Desktop-App.",
          correct: true,
          explanation:
            "Die Übersicht nennt visuelles Review und mehrere Sitzungen.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI12-2",
          text: "Nur die Terminal-CLI auswählen.",
          correct: false,
          explanation:
            "Die Frage verlangt die dokumentierte visuelle Desktop-Review-Ansicht.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI12-3",
          text: "Nur den IDE-Chat ohne Sitzungsübersicht auswählen.",
          correct: false,
          explanation:
            "Die Desktop-App beschreibt zusätzlich mehrere parallel sichtbare Sitzungen.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
      ],
    },
    {
      id: "UI13",
      prompt:
        "Ein Team will Claude Code in einem JetBrains-Editor einsetzen. Welche zusätzliche Installation wird benötigt?",
      options: [
        {
          id: "UI13-1",
          text: "Das JetBrains-Plugin benötigt zusätzlich die Claude-Code-CLI.",
          correct: true,
          explanation: "Die Quelle beschreibt diese Installation ausdrücklich.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI13-2",
          text: "Nur das JetBrains-Plugin ohne CLI installieren.",
          correct: false,
          explanation: "Anthropic nennt die CLI als zusätzliche Voraussetzung.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI13-3",
          text: "Nur die Desktop-App neben JetBrains öffnen.",
          correct: false,
          explanation:
            "Das installiert nicht die beschriebene IDE-Integration.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
      ],
    },
    {
      id: "UI14",
      prompt:
        "Eine Aufgabe soll ohne lokales Repository in Claude Code bearbeitet werden. Welche Oberfläche passt?",
      options: [
        {
          id: "UI14-1",
          text: "Die Browseroberfläche für Cloud-Aufgaben.",
          correct: true,
          explanation:
            "Die Anthropic-Seite nennt Web-Aufgaben auf Repositories ohne lokale Einrichtung.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI14-2",
          text: "Die lokale Terminal-CLI ohne Repositoryzugriff starten.",
          correct: false,
          explanation:
            "Sie kann die nicht lokal verfügbare Codebasis nicht direkt bearbeiten.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
        {
          id: "UI14-3",
          text: "Das JetBrains-Plugin auf einem leeren Projekt öffnen.",
          correct: false,
          explanation: "Das Plugin ersetzt den fehlenden Projektzugriff nicht.",
          sourceUrl: "https://code.claude.com/docs/en/overview",
        },
      ],
    },
    {
      id: "UI15",
      prompt:
        "Ein Team will wiederkehrende Kiro-Projektrichtlinien im Repository halten. Welche Funktion passt?",
      options: [
        {
          id: "UI15-1",
          text: "Steering-Dateien im Projekt.",
          correct: true,
          explanation:
            "Kiro nutzt Steering für Produkt-, Struktur- und Konventionskontext.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI15-2",
          text: "Nur den einmaligen aktuellen Chatprompt nutzen.",
          correct: false,
          explanation:
            "Der Prompt ist kein gepflegter Projektkontext über Sitzungen hinweg.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI15-3",
          text: "Nur temporären Sitzungskontext anhängen.",
          correct: false,
          explanation:
            "Temporärer Kontext erfüllt die dauerhafte Projektvorgabe nicht.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
      ],
    },
    {
      id: "UI16",
      prompt:
        "Eine Kiro-Aufgabe soll von Anforderungen über Design zu einzelnen Schritten geführt werden. Welche Funktion passt?",
      options: [
        {
          id: "UI16-1",
          text: "Eine Spec mit Requirements, Design und Tasks.",
          correct: true,
          explanation: "Die Quelle nennt diese drei Phasen.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI16-2",
          text: "Steering-Dateien als Aufgabenplan verwenden.",
          correct: false,
          explanation:
            "Steering hält Projektkontext statt der drei Spec-Phasen.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI16-3",
          text: "Hooks als Aufgabenplan verwenden.",
          correct: false,
          explanation:
            "Hooks automatisieren Ereignisse statt Anforderungen und Design zu gliedern.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
      ],
    },
    {
      id: "UI17",
      prompt:
        "Ein Team will in Kiro wiederkehrende Abläufe bei Entwicklungsereignissen auslösen. Welche Erweiterung passt?",
      options: [
        {
          id: "UI17-1",
          text: "Hooks für automatisierte Workflows.",
          correct: true,
          explanation: "Der Einstiegsguide nennt Hooks ausdrücklich.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI17-2",
          text: "Steering-Dateien für jeden Ereignisauslöser schreiben.",
          correct: false,
          explanation:
            "Steering liefert Projektkontext, keine ereignisgebundene Automation.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI17-3",
          text: "Nur eine Spec ohne Auslöser anlegen.",
          correct: false,
          explanation:
            "Eine Spec strukturiert Arbeit, löst aber keinen wiederkehrenden Hook aus.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
      ],
    },
    {
      id: "UI18",
      prompt:
        "Eine Kiro-Aufgabe benötigt zusätzliche externe Werkzeuge. Welche Erweiterung passt?",
      options: [
        {
          id: "UI18-1",
          text: "MCP-Server anbinden.",
          correct: true,
          explanation:
            "Der Guide führt MCP als Erweiterung der Fähigkeiten auf.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI18-2",
          text: "Nur Steering-Dateien erweitern.",
          correct: false,
          explanation:
            "Steering fügt Kontext hinzu, keinen externen Werkzeugserver.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI18-3",
          text: "Nur weitere Spec-Tasks formulieren.",
          correct: false,
          explanation: "Tasks allein stellen keine Werkzeugverbindung her.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
      ],
    },
    {
      id: "UI19",
      prompt:
        "Kiro soll ein bestehendes Java-/Web-Projekt bearbeiten. Welcher Schritt stellt den Projektkontext her?",
      options: [
        {
          id: "UI19-1",
          text: "Das konkrete Projektverzeichnis auswählen.",
          correct: true,
          explanation:
            "Die Anleitung beginnt mit Öffnen des bestehenden oder neuen Projekts.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI19-2",
          text: "Zuerst nur ein Modell auswählen.",
          correct: false,
          explanation:
            "Die Modellwahl identifiziert das gewünschte Projektverzeichnis nicht.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI19-3",
          text: "Nur eine Steering-Datei ohne geöffneten Arbeitsbereich schreiben.",
          correct: false,
          explanation:
            "Sie öffnet den betreffenden Repository-Arbeitsbereich nicht.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
      ],
    },
    {
      id: "UI20",
      prompt:
        "Warum kann für eine Kiro-Aufgabe eine Spec geeigneter sein als ein unstrukturierter Einmalprompt?",
      options: [
        {
          id: "UI20-1",
          text: "Sie trennt prüfbare Anforderungen, Entwurf und umsetzbare Tasks.",
          correct: true,
          explanation: "Der Guide beschreibt diese Phasen als Spec-Ablauf.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI20-2",
          text: "Steering allein als Änderungsnachweis verwenden.",
          correct: false,
          explanation:
            "Steering beschreibt dauerhaften Projektkontext statt Aufgabenphasen.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
        {
          id: "UI20-3",
          text: "Hooks allein als Änderungsnachweis verwenden.",
          correct: false,
          explanation:
            "Hooks automatisieren Abläufe statt die konkrete Spec zu strukturieren.",
          sourceUrl: "https://kiro.dev/docs/getting-started/first-project/",
        },
      ],
    },
    {
      id: "UI21",
      prompt:
        "Ein Team möchte eine wiederverwendbare Gemini-Antwortvorgabe für Routinefragen. Welches Produkt passt?",
      options: [
        {
          id: "UI21-1",
          text: "Ein Gem als angepasste Gemini-Version.",
          correct: true,
          explanation:
            "Google beschreibt Gems für wiederholte Ziele und Richtlinien.",
          sourceUrl: "https://support.google.com/gemini/answer/15236321?hl=en",
        },
        {
          id: "UI21-2",
          text: "Eine einzelne, nicht gespeicherte Chat-Anweisung.",
          correct: false,
          explanation:
            "Sie ist keine wiederverwendbare angepasste Gemini-Version.",
          sourceUrl: "https://support.google.com/gemini/answer/15236321?hl=en",
        },
        {
          id: "UI21-3",
          text: "Eine IDE-Erweiterung zur Codebearbeitung.",
          correct: false,
          explanation:
            "Die Gem-Hilfe beschreibt angepasste Antworten, keine IDE-Codebearbeitung.",
          sourceUrl: "https://support.google.com/gemini/answer/15236321?hl=en",
        },
      ],
    },
    {
      id: "UI22",
      prompt:
        "Warum ist ein Gem nach der verlinkten Google-Hilfe keine hinreichende Wahl für einen vollständigen Coding-Workflow?",
      options: [
        {
          id: "UI22-1",
          text: "Die Hilfe belegt angepasste Antworten, aber keinen Repository-, Test- und Diff-Ablauf.",
          correct: true,
          explanation:
            "Der dokumentierte Schwerpunkt liegt auf wiederverwendbaren Antwortanweisungen.",
          sourceUrl: "https://support.google.com/gemini/answer/15236321?hl=en",
        },
        {
          id: "UI22-2",
          text: "Ein Gem führt laut Hilfe automatisch lokale Tests aus.",
          correct: false,
          explanation: "Die Hilfe belegt eine solche Build-Funktion nicht.",
          sourceUrl: "https://support.google.com/gemini/answer/15236321?hl=en",
        },
        {
          id: "UI22-3",
          text: "Ein Gem prüft laut Hilfe selbständig Repository-Diffs.",
          correct: false,
          explanation: "Die Hilfe beschreibt keine Diff-Prüfung.",
          sourceUrl: "https://support.google.com/gemini/answer/15236321?hl=en",
        },
      ],
    },
    {
      id: "UI23",
      prompt:
        "Ein Coding-Auftrag soll über mehrere Iterationen hinweg als dauerhaftes Ziel verfolgt werden. Welche Codex-Funktion passt?",
      options: [
        {
          id: "UI23-1",
          text: "Ein Goal mit konkretem Erfolgskriterium anlegen.",
          correct: true,
          explanation:
            "Der Remote-Guide unterscheidet dauerhafte Goals von der einmaligen Planungsphase.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI23-2",
          text: "Nur Plan mode für einen einmaligen Umsetzungsvorschlag öffnen.",
          correct: false,
          explanation:
            "Ein Plan beschreibt den Weg, hält aber das fortlaufende Ziel nicht selbst fest.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI23-3",
          text: "Nur einen Side Chat für eine einzelne Rückfrage öffnen.",
          correct: false,
          explanation:
            "Ein Side Chat dient einer Nebenfrage statt der dauerhaften Zielverfolgung.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI24",
      prompt:
        "Ein Team prüft eine Agentenoberfläche für sensible Projektdaten. Welche Frage zum Datenzugriff sollte zuerst beantwortet werden?",
      options: [
        {
          id: "UI24-1",
          text: "Welcher Host, welche Dateien und welche Rechte für den Lauf gewählt werden.",
          correct: true,
          explanation:
            "Der Guide behandelt Umgebung und Berechtigungen als konkrete Grenzen.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI24-2",
          text: "Zuerst nur Modell-Benchmarks vergleichen.",
          correct: false,
          explanation:
            "Benchmarks beantworten nicht, wo sensible Dateien verarbeitet werden.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
        {
          id: "UI24-3",
          text: "Zuerst nur Abonnementpreise vergleichen.",
          correct: false,
          explanation: "Kosten ersetzen keine Prüfung von Host und Rechten.",
          sourceUrl:
            "https://developers.openai.com/blog/mastering-codex-remote-for-engineering",
        },
      ],
    },
    {
      id: "UI25",
      prompt:
        "Ein Java-Team nutzt eine JetBrains-IDE und möchte Copilot Chat direkt im Editor verwenden. Welche Produktannahme trifft zu?",
      options: [
        {
          id: "UI25-1",
          text: "Copilot Chat bietet eine JetBrains-IDE-Integration.",
          correct: true,
          explanation:
            "Die GitHub-Dokumentation führt JetBrains-Editoren als unterstützte IDE-Oberfläche auf.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI25-2",
          text: "Copilot Chat ist nur im Browser verfügbar.",
          correct: false,
          explanation: "Die IDE-Dokumentation nennt ausdrücklich JetBrains.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
        {
          id: "UI25-3",
          text: "Copilot Chat ist auf Visual Studio Code als einzige IDE begrenzt.",
          correct: false,
          explanation: "GitHub führt mehrere weitere IDEs auf.",
          sourceUrl:
            "https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide",
        },
      ],
    },
  ],
};
