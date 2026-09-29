import type { TopicSource } from "./topicContract";

function podcast(
  topicId: string,
  title: string,
  notebookId: string,
  artifactId: string,
  duration: string,
): { topicId: string; source: TopicSource } {
  return {
    topicId,
    source: {
      title,
      url: `https://notebook.google.com/notebook/${notebookId}/artifact/${artifactId}`,
      type: "audio-summary",
      mediaType: "audio",
      duration,
      origin: "secondary",
      language: "de",
      checkedAt: "2026-09-29",
    },
  };
}

export const notebookPodcasts = [
  podcast(
    "human-ai-responsibility",
    "KI Risikomanagement jenseits grüner Pipelines",
    "6470b468-6d6c-4ea0-9821-72a65333ca1e",
    "c491b8f8-3908-4f43-b7ac-2a70dd286b2e",
    "25:00",
  ),
  podcast(
    "agents-md",
    "KI-Agenten bändigen mit AGENTS.md",
    "6db9ba12-5e83-4a5a-a3a7-a99aa94671e1",
    "9597ecbc-e414-42fd-9d83-03c1e27aeca8",
    "24:49",
  ),
  podcast(
    "ears-requirements",
    "Eindeutige Anforderungen mit EARS",
    "804b6663-97d7-4be6-824b-24b54eff63b1",
    "7336accd-68bd-41de-845d-690f4f1ff314",
    "18:48",
  ),
  podcast(
    "problem-understanding-and-change-boundaries",
    "Spezifikationen sind der neue Quellcode",
    "6e538076-e980-4471-a351-01d34903567f",
    "0a86fe92-0c28-46d5-b30e-10349a67802a",
    "17:05",
  ),
  podcast(
    "research-plan-tasks",
    "Vom Senior-Entwickler zum kritischen KI-Verifier",
    "e8f2213d-6d4e-4a47-a523-fd9163a6a96e",
    "afab811e-4bd2-4fb2-96fc-59406ac984be",
    "20:37",
  ),
  podcast(
    "domain-language-and-complexity",
    "Nie wieder Stille Post im Code",
    "554500c6-8784-4fe6-80bd-815b5693330c",
    "f3673123-fc05-4a90-bc8c-fd368f7415d1",
    "23:57",
  ),
  podcast(
    "spec-driven-development-openspec",
    "Spec-Driven Development statt Vibe Coding",
    "b660f74e-9aa5-422a-bfca-f4b5935c11c0",
    "fe6aa068-4945-4013-a02f-52cc1db8b771",
    "19:28",
  ),
  podcast(
    "coding-agent-context-and-trust-boundaries",
    "Vektor-Rotation stoppt bösartige Befehle in READMEs",
    "b48701c3-1b7f-47f7-9725-242e0a8f22e8",
    "eb2c1bae-2423-483a-b5ad-2289bd1afca4",
    "23:50",
  ),
  podcast(
    "tdd-for-domain-behavior",
    "KI bremst Senior-Devs ohne TDD aus",
    "86d98751-a331-480c-9e9e-41a66f3b0d0a",
    "76d53329-bc1e-4184-8e4c-e52e581703ce",
    "22:15",
  ),
  podcast(
    "review-and-accept-ai-generated-changes",
    "KI-Code sicher prüfen statt blind absegnen",
    "2200aa61-91d2-4de3-9aab-8b25c22404af",
    "706621fe-3e55-41b7-9329-2c35c63d6068",
    "23:01",
  ),
  podcast(
    "protect-secrets-and-sensitive-data-with-ai",
    "Deterministische Java-Architekturen für stochastische KI-Agenten",
    "ffcf3f8a-7112-4ece-a5d0-7ca0440b8eda",
    "eb19995d-ec09-4d27-8736-7f5266fd741d",
    "17:40",
  ),
];
