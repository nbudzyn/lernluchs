import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks/questionCatalog";
import { validateQuestionCatalog } from "../../../src/verticals/learning-checks/validateQuestionCatalog";
import { topics } from "../../../src/verticals/topics/topics";

describe("validateQuestionCatalog", () => {
  it("validates every pool against its topic sources", () => {
    expect(validateQuestionCatalog(topics.items)).toEqual([]);
  });

  it("reports every missing topic without stopping at the first pool", () => {
    expect(validateQuestionCatalog([])).toEqual(
      availableLearningCheckTopicIds.map(
        (id) => `Missing topic for question pool: ${id}`,
      ),
    );
  });

  it("reports invalid sources from every affected pool", () => {
    const errors = validateQuestionCatalog(
      topics.items.map((topic) => ({ ...topic, sources: [] })),
    );
    expect(errors).toEqual(
      availableLearningCheckTopicIds.flatMap((topicId) =>
        questionsForTopic(topicId)!.flatMap((question) =>
          question.options.map(
            (option) =>
              `${question.id}/${option.id}: source is not attached to card`,
          ),
        ),
      ),
    );
  });
});
