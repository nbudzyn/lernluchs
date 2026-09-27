import type { Question } from "../../shared/question";

export type EditorialStatus = "active" | "watching" | "archived" | "replaced";

export type SourceType =
  | "official-publication"
  | "official-guide"
  | "reference-site"
  | "conference-paper"
  | "repository";

export type TopicSource = {
  title: string;
  url: string;
  type: SourceType;
  origin: "primary" | "secondary";
  language: "de" | "en";
  checkedAt: string;
};

export type TopicContent = {
  language: "de";
  problem: string;
  coreConcept: string;
  javaWebUse: string;
  boundary: string;
};

export type EditorialMetadata = {
  publishedAt: string;
  reviewedAt: string;
  reviewDueAt: string;
  status: EditorialStatus;
};

export type Topic = {
  id: string;
  title: string;
  questions?: Question[];
  content: TopicContent;
  editorial: EditorialMetadata;
  sources: TopicSource[];
};

export type TopicCollection = {
  version: string;
  items: Topic[];
  paths?: LearningPath[];
};

export type LearningPath = {
  name: string;
  topicIds: string[];
};

export type TopicValidation = {
  valid: boolean;
  errors: string[];
};
