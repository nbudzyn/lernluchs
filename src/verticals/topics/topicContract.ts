export type EditorialStatus = "active" | "watching" | "archived" | "replaced";

export type SourceType =
  | "official-publication"
  | "official-guide"
  | "reference-site"
  | "conference-paper"
  | "repository"
  | "audio-summary"
  | "learning-video";

export type TopicSource = {
  readonly title: string;
  readonly url: string;
  readonly type: SourceType;
  readonly mediaType: "text" | "audio" | "video";
  readonly duration?: string;
  readonly learningSegment?: { readonly start: string; readonly end: string };
  readonly origin: "primary" | "secondary";
  readonly language: "de" | "en";
  readonly checkedAt: string;
};

export type TopicContent = {
  readonly language: "de";
  readonly problem: string;
  readonly coreConcept: string;
  readonly javaWebUse: string;
  readonly boundary: string;
};

export type EditorialMetadata = {
  readonly publishedAt: string;
  readonly reviewedAt: string;
  readonly reviewDueAt: string;
  readonly status: EditorialStatus;
};

export type Topic = {
  readonly id: string;
  readonly title: string;
  readonly everydayAnchor: string;
  readonly content: TopicContent;
  readonly editorial: EditorialMetadata;
  readonly sources: readonly TopicSource[];
};

export type Topics = {
  readonly version: string;
  readonly items: readonly Topic[];
  readonly paths?: readonly LearningPath[];
};

export type LearningPathId = string;

export type LearningPath = {
  readonly id: LearningPathId;
  readonly name: string;
  readonly topicIds: readonly string[];
};

export type TopicValidation = {
  readonly valid: boolean;
  readonly errors: string[];
};
