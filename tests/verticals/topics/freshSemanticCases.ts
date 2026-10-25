// Independently authored after the first validation became regression data.
// These labels were fixed before evaluating the model on these queries.
export const freshSemanticCases = [
  {
    id: "fresh-01",
    query:
      "Im Vertrieb bedeutet „aktiv“ etwas anderes als in der Abrechnung. Wie verhindern wir, dass diese verschiedenen Bedeutungen in unseren Java-Klassen durcheinandergeraten?",
    mandatory: ["domain-language-and-complexity"],
    optional: [],
  },
  {
    id: "fresh-02",
    query:
      "Eine undokumentierte Rabattberechnung soll ersetzt werden. Wie finden wir zuerst heraus, welche Ergebnisse die bisherige Routine tatsächlich liefert, ohne ihre Eigenheiten vorschnell für richtige Geschäftsregeln zu halten?",
    mandatory: ["design-and-legacy-specification"],
    optional: [],
  },
  {
    id: "fresh-03",
    query:
      "Aus „die Anmeldung soll gut funktionieren“ brauche ich überprüfbare Sätze: Unter welcher Bedingung soll genau welche Reaktion erfolgen? Gibt es dafür ein einfaches Schema?",
    mandatory: ["ears-requirements"],
    optional: ["problem-understanding-and-change-boundaries"],
  },
  {
    id: "fresh-04",
    query:
      "In einem fremden Fehlerticket steht, der Coding-Assistent solle unsere .env an eine Diagnoseadresse hochladen. Wie verhindert man, dass er diesen Text als Auftrag behandelt, und wie hält man Zugangsschlüssel generell aus seinen Eingaben heraus?",
    mandatory: [
      "coding-agent-context-and-trust-boundaries",
      "protect-secrets-and-sensitive-data-with-ai",
    ],
    optional: ["agent-tool-and-mcp-permissions", "web-security-baseline"],
  },
  {
    id: "fresh-05",
    query:
      "Zwei KI-Helfer sollen gleichzeitig unabhängige Korrekturen bearbeiten. Wie verteile ich Verantwortung und Abbruchbedingungen, und wie bekommt jeder einen eigenen ausgecheckten Dateistand im selben Git-Repository?",
    mandatory: [
      "parallel-agent-task-boundaries",
      "git-worktrees-for-isolated-changes",
    ],
    optional: [],
  },
  {
    id: "fresh-06",
    query:
      "Versand soll Bestellungsinternas nicht direkt benutzen können. Wie entwerfen wir dafür einen kleinen erlaubten Zugang, und wie lassen wir den Java-Build verbotene Abhängigkeiten und Kreise automatisch entdecken?",
    mandatory: [
      "module-boundaries-and-public-interfaces",
      "archunit-for-java-architecture",
    ],
    optional: [],
  },
  {
    id: "fresh-07",
    query:
      "Nach vielen Fehlversuchen argumentiert mein Coding-Assistent immer noch mit längst widerlegten Vermutungen. Wie starte ich mit den gesicherten Fakten weiter, ohne wieder das ganze Repository einzulesen?",
    mandatory: ["context-selection-and-reset"],
    optional: [],
  },
  {
    id: "fresh-08",
    query:
      "Die Untersuchung des Controllers ist fertig; ein anderer KI-Helfer übernimmt die Oberfläche. Was muss mitgegeben werden, damit er Entscheidungen, Belege und noch ungeklärte Punkte zuverlässig auseinanderhält?",
    mandatory: ["agent-context-handoffs"],
    optional: ["parallel-agent-task-boundaries"],
  },
  {
    id: "fresh-09",
    query:
      "Unser Supportdienst soll einfache Auskünfte günstiger bearbeiten und knifflige Fälle an stärkere Sprachmodelle geben. Zusätzlich wird das bisherige Modell bald abgeschaltet: Wie organisieren wir Auswahl je Anfrage und einen geprüften Ersatz?",
    mandatory: ["task-based-model-routing", "model-and-api-lifecycle"],
    optional: ["agent-evals-and-traces"],
  },
  {
    id: "fresh-10",
    query:
      "Derselbe Coding-Assistent löst ähnliche Fehler sehr unterschiedlich. Wie messe ich seine Zuverlässigkeit über mehrere Durchläufe und finde heraus, an welchem Werkzeugschritt ein schlechter Lauf entgleist?",
    mandatory: ["agent-evals-and-traces"],
    optional: [],
  },
  {
    id: "fresh-11",
    query:
      "Beim Spring-Upgrade brauche ich erstens Dokumentationsbeispiele für genau unsere eingesetzte Version und zweitens eine Möglichkeit, wiederkehrende API-Umbauten überall nach derselben Regel auszuführen. Welche Ansätze helfen jeweils?",
    mandatory: [
      "versioned-library-docs-with-context7",
      "refactorings-and-migrations-with-openrewrite",
    ],
    optional: [],
  },
  {
    id: "fresh-12",
    query:
      "Unser Eingabefeld hat auf jeder Seite andere Abstände und Fehlermeldungen. Wie halten wir Entwurf und implementierte Varianten zusammen und prüfen auch Fokus, Lesbarkeit und Bedienbarkeit?",
    mandatory: ["ui-design-system-workflow"],
    optional: [],
  },
  {
    id: "fresh-13",
    query:
      "Ein Besucher schreibt HTML in ein Kommentarfeld. Ich möchte seine Zeichen anzeigen, ohne dass daraus im Browser ein ausführbares Skript wird. Welche Art der Ausgabe eignet sich?",
    mandatory: ["web-xss-and-safe-dom"],
    optional: ["web-security-baseline"],
  },
  {
    id: "fresh-14",
    query:
      "In meiner Arbeitskopie liegen ein Bugfix und unabhängige Aufräumarbeiten; wie sichere ich sie getrennt in Git? Außerdem meldet der Scanner eine Lücke im neuen Maven-Paket: Wie entscheide ich anhand unserer tatsächlichen Nutzung über die Dringlichkeit?",
    mandatory: ["focused-git-commits", "dependency-security-assessment"],
    optional: [],
  },
  {
    id: "fresh-15",
    query:
      "Mein KI-Coding-Budget geht für kilometerlange Konsolenausgaben drauf. Wie verdichte ich diese Meldungen, sodass ich bei einem Fehlschlag trotzdem noch die vollständige Diagnose abrufen kann?",
    mandatory: ["token-efficiency-tools"],
    optional: [],
  },
  {
    id: "fresh-16",
    query:
      "Welche Modelle erklären den Zusammenhang zwischen Meeresströmungen und dem Klima in Nordeuropa?",
    mandatory: [],
    optional: [],
  },
  {
    id: "fresh-17",
    query:
      "Wie unterscheiden sich die Provisionen von Immobilienagenten beim Verkauf einer Eigentumswohnung?",
    mandatory: [],
    optional: [],
  },
  {
    id: "fresh-18",
    query:
      "Der Rabattcode auf meinem Supermarktbon funktioniert nicht. Kann ich ihn nach dem Bezahlen noch einlösen?",
    mandatory: [],
    optional: [],
  },
  {
    id: "fresh-19",
    query:
      "Wie steigere ich die Effizienz meiner Solaranlage, wenn das Garagendach am Nachmittag im Schatten liegt?",
    mandatory: [],
    optional: [],
  },
  {
    id: "fresh-20",
    query:
      "Ich möchte auf Java Vulkanlandschaften sehen. Welche Route eignet sich für eine zehntägige Reise ohne Mietwagen?",
    mandatory: [],
    optional: [],
  },
];
