export const topicAliases = {
  scope: "problem-understanding-and-change-boundaries",
  domain: "domain-language-and-complexity",
  projectDocs: "project-documentation-and-checklists",
  context7: "versioned-library-docs-with-context7",
  harness: "coding-harness-design",
  handoffs: "agent-context-handoffs",
  webBaseline: "web-security-baseline",
  legacy: "design-and-legacy-specification",
  migration: "refactorings-and-migrations-with-openrewrite",
  javaAi: "java-ai-applications",
  tokens: "token-efficiency-tools",
  protocols: "agent-protocol-integration",
  permissions: "agent-tool-and-mcp-permissions",
  spec: "spec-driven-development-openspec",
  automation: "automation-value-and-gates",
  routing: "task-based-model-routing",
  parallelCompare: "compare-parallel-and-serial-agent-work",
  secrets: "protect-secrets-and-sensitive-data-with-ai",
  agentsMd: "agents-md",
  requirements: "ears-requirements",
  context: "context-selection-and-reset",
  graph: "codegraphs-for-large-repos",
  subagents: "parallel-agent-task-boundaries",
  worktrees: "git-worktrees-for-isolated-changes",
  evals: "agent-evals-and-traces",
  browserTests: "playwright-for-web-flows",
  tdd: "tdd-for-domain-behavior",
  architectureTests: "archunit-for-java-architecture",
  modules: "module-boundaries-and-public-interfaces",
  docs: "technical-documentation-generation",
  dependencies: "dependency-security-assessment",
  xss: "web-xss-and-safe-dom",
  review: "review-and-accept-ai-generated-changes",
  local: "local-model-stack-evaluation",
  lifecycle: "model-and-api-lifecycle",
  commits: "focused-git-commits",
};

export const allowedTopics: Record<string, (keyof typeof topicAliases)[]> = {
  "cal-01": ["legacy", "migration", "automation", "harness"],
  "cal-02": ["javaAi"],
  "cal-03": ["tokens", "protocols", "domain"],
  "cal-04": ["spec", "requirements", "scope"],
  "cal-05": ["tokens", "automation", "routing", "parallelCompare"],
  "cal-06": ["protocols", "permissions", "javaAi", "graph", "context7"],
  "cal-07": ["requirements", "scope"],
  "cal-08": ["agentsMd", "projectDocs"],
  "cal-09": ["graph", "context"],
  "cal-10": ["javaAi", "secrets"],
  "cal-11": ["evals"],
  "cal-12": ["browserTests"],
  "cal-13": ["architectureTests", "modules"],
  "cal-14": ["permissions", "harness"],
  "cal-15": ["lifecycle", "evals"],
  "val-01": ["legacy", "migration", "automation", "harness", "tdd"],
  "val-02": ["javaAi"],
  "val-03": ["tokens", "protocols", "domain"],
  "val-04": ["spec"],
  "val-05": ["tokens", "context"],
  "val-06": ["subagents", "worktrees", "handoffs"],
  "val-07": ["context"],
  "val-08": ["local"],
  "val-09": ["routing"],
  "val-10": ["xss", "webBaseline"],
  "val-11": ["dependencies"],
  "val-12": ["tdd"],
  "val-13": ["review", "commits"],
  "val-14": ["docs"],
  "val-15": ["modules", "architectureTests", "domain"],
};

export type SemanticCase = {
  id: string;
  query: string;
  must?: (keyof typeof topicAliases)[];
  any?: (keyof typeof topicAliases)[];
  exclude?: (keyof typeof topicAliases)[];
  none?: boolean;
};

// Fixed before model measurements. Calibration and validation remain separate.
export const calibrationCases: SemanticCase[] = [
  {
    id: "cal-01",
    query:
      "Ich möchte eine Altanwendung von Cobol automatisiert nach Java migrieren.",
    must: ["legacy", "migration"],
  },
  {
    id: "cal-02",
    query: "Ich suche Ideen für die Integration von Java in eine Webanwendung.",
    must: ["javaAi"],
  },
  {
    id: "cal-03",
    query: "Was ist besser, Ponytail oder MCP?",
    must: ["tokens", "protocols"],
  },
  {
    id: "cal-04",
    query: "Was weißt du über Spec-driven-Development?",
    must: ["spec"],
    exclude: ["xss"],
  },
  {
    id: "cal-05",
    query: "Effizienz",
    any: ["tokens", "automation", "routing", "parallelCompare"],
  },
  { id: "cal-06", query: "MCP", must: ["protocols"] },
  {
    id: "cal-07",
    query:
      "Meine Anforderungen sind unklar. Wie formuliere ich eindeutige Bedingungen und erwartetes Verhalten?",
    must: ["requirements"],
  },
  {
    id: "cal-08",
    query: "Der Agent soll sich dauerhaft an unsere Projektregeln erinnern.",
    must: ["agentsMd"],
  },
  {
    id: "cal-09",
    query:
      "Die KI verliert sich in unserem riesigen Repository. Wie findet sie die relevanten Beziehungen im Code?",
    must: ["graph"],
  },
  {
    id: "cal-10",
    query:
      "Unser Spring-Supportdienst soll Fragen über interne Dokumente beantworten, ohne Zugangsschlüssel preiszugeben.",
    must: ["javaAi", "secrets"],
  },
  {
    id: "cal-11",
    query:
      "Bei jedem Lauf antwortet der Agent anders. Wie messe ich seine Qualität systematisch?",
    must: ["evals"],
  },
  {
    id: "cal-12",
    query:
      "Die Unit-Tests sind grün, aber im Browser scheitert der komplette Ablauf.",
    must: ["browserTests"],
  },
  {
    id: "cal-13",
    query: "Ich will Java-Architekturregeln automatisch prüfen.",
    must: ["architectureTests"],
    exclude: ["tokens"],
  },
  {
    id: "cal-14",
    query:
      "Mein Agent hat echte Daten verändert. Wie begrenze ich seine Werkzeugrechte?",
    must: ["permissions"],
  },
  {
    id: "cal-15",
    query:
      "Der bisherige Modellanbieter kündigt die verwendete API ab. Wie sichere ich den Wechsel ab?",
    must: ["lifecycle"],
  },
  { id: "cal-16", query: "Wie backt man einen Pfannkuchen?", none: true },
  {
    id: "cal-17",
    query: "Welche Zugverbindung fährt morgen nach Hamburg?",
    none: true,
  },
  {
    id: "cal-18",
    query: "Wie pflege ich einen Olivenbaum im Winter?",
    none: true,
  },
  { id: "cal-19", query: "Welche Frisur passt zu einem Ponytail?", none: true },
  {
    id: "cal-20",
    query: "Wie spare ich beim Heizen meiner Wohnung Energie?",
    none: true,
  },
];

export const validationCases: SemanticCase[] = [
  {
    id: "val-01",
    query:
      "Unsere alte COBOL-Abrechnung soll nach Java umziehen. Wie halten wir ihr bisheriges Verhalten fest und ändern den Code wiederholbar?",
    must: ["legacy", "migration"],
  },
  {
    id: "val-02",
    query:
      "Spring AI oder LangChain4j: Wie baue ich eine Dokumentensuche mit KI in meinen Java-Webdienst ein?",
    must: ["javaAi"],
  },
  {
    id: "val-03",
    query:
      "Hilft Ponytail beim Tokensparen, und ist MCP dafür dieselbe Art Werkzeug?",
    must: ["tokens", "protocols"],
  },
  {
    id: "val-04",
    query:
      "Wie halten OpenSpec, Spec Kit und Kiro Anforderungen und Umsetzung zusammen?",
    must: ["spec"],
  },
  {
    id: "val-05",
    query:
      "RTK, Headroom und Caveman: Wie senke ich Tokenkosten, ohne wichtige Fehlerdetails zu verlieren?",
    must: ["tokens"],
    exclude: ["browserTests"],
  },
  {
    id: "val-06",
    query:
      "Wie teile ich eine Änderung auf mehrere Agenten auf und gebe jedem ein eigenes Arbeitsverzeichnis?",
    must: ["subagents", "worktrees"],
  },
  {
    id: "val-07",
    query:
      "Unser Agent hängt noch an längst verworfenen Annahmen. Wie ordne ich seinen Kontext neu?",
    must: ["context"],
  },
  {
    id: "val-08",
    query:
      "Qwen, Hermes, Bionic: Was brauche ich, um KI auf meinem eigenen Rechner zu betreiben?",
    must: ["local"],
  },
  {
    id: "val-09",
    query:
      "Muss jede einfache Supportanfrage an das größte und teuerste Modell gehen?",
    must: ["routing"],
    exclude: ["commits"],
  },
  {
    id: "val-10",
    query: "Wie erkenne und verhindere ich XSS durch unsichere DOM-Nutzung?",
    must: ["xss"],
  },
  {
    id: "val-11",
    query:
      "Welche Sicherheitslücken in unseren npm-Abhängigkeiten sollten wir zuerst beheben?",
    must: ["dependencies"],
  },
  {
    id: "val-12",
    query:
      "Der generierte Code verfehlt das Fachverhalten. Wie arbeite ich mit einem zuerst fehlschlagenden Test?",
    must: ["tdd"],
  },
  {
    id: "val-13",
    query:
      "Ein Agent liefert einen riesigen Patch. Wie prüfe ich ihn vor der Übernahme und schneide nachvollziehbare Commits?",
    must: ["review", "commits"],
  },
  { id: "val-14", query: "Javadoc", must: ["docs"], exclude: ["tokens"] },
  {
    id: "val-15",
    query:
      "Wie verhindern wir, dass ein kleines Fachmodul auf beliebige Interna anderer Module zugreift?",
    must: ["modules"],
  },
  {
    id: "val-16",
    query: "Wie gelingt ein Sauerteigbrot mit knuspriger Kruste?",
    none: true,
  },
  {
    id: "val-17",
    query: "Wie repariere ich einen platten Fahrradreifen?",
    none: true,
  },
  {
    id: "val-18",
    query: "Welche Sehenswürdigkeiten gibt es in Lissabon?",
    none: true,
  },
  {
    id: "val-19",
    query: "Wie bereite ich Kaffee aus Java in der French Press zu?",
    none: true,
  },
  {
    id: "val-20",
    query: "Wie verbessere ich meine Effizienz beim Kraulschwimmen?",
    none: true,
  },
];
