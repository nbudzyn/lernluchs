export type EditorialStatus = "active" | "watching" | "archived" | "replaced";

export type SourceType =
  | "official-publication"
  | "official-guide"
  | "reference-site"
  | "conference-paper"
  | "repository";

export type CatalogSource = {
  title: string;
  url: string;
  type: SourceType;
  language: string;
  checkedAt: string;
};

export type LearningCard = {
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
  contentVersion: string;
  status: EditorialStatus;
};

export type CatalogItem = {
  id: string;
  title: string;
  learningCard: LearningCard;
  editorial: EditorialMetadata;
  sources: CatalogSource[];
};

export type Catalog = {
  version: string;
  items: CatalogItem[];
};

export type CatalogValidation = {
  valid: boolean;
  errors: string[];
};
