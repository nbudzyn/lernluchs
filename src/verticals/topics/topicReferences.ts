import { topics } from "./topics";

// Öffentlicher, schmaler Katalog für die Verbindung zu Lernchecks und Inhaltsprüfung.
export const topicReferences: readonly {
  readonly id: string;
  readonly title: string;
  readonly sources: readonly { readonly url: string }[];
}[] = Object.freeze(
  topics.items.map(({ id, title, sources }) =>
    Object.freeze({
      id,
      title,
      sources: Object.freeze(sources.map(({ url }) => Object.freeze({ url }))),
    }),
  ),
);
