import type { TopicContent } from "./topicContract";

export const topicSections = [
  { key: "problem", heading: "Problem" },
  { key: "coreConcept", heading: "Kernkonzept" },
  { key: "javaWebUse", heading: "Anwendung in der Java- und Webentwicklung" },
  { key: "boundary", heading: "Grenzen des Konzepts" },
] as const satisfies readonly { key: keyof TopicContent; heading: string }[];
