import { expect, it } from "vitest";

import type { Topic } from "../../../src/verticals/topics/topicContract";
import { topics } from "../../../src/verticals/topics/topics";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

it("rejects missing, empty and non-text everyday anchors with the topic ID", () => {
  for (const everydayAnchor of [undefined, "", "   ", 42]) {
    const item = {
      ...topics.items[0],
      id: `invalid-anchor-${String(everydayAnchor)}`,
      everydayAnchor,
    } as unknown as Topic;
    expect
      .soft(validateTopics({ version: "1", items: [item] }), item.id)
      .toEqual({
        valid: false,
        errors: [`Incomplete topic: ${item.id}`],
      });
  }
});
