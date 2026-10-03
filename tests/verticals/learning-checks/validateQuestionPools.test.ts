import { describe, expect, it } from "vitest";

import {
  availableLearningCheckTopicIds,
  questionsForTopic,
} from "../../../src/verticals/learning-checks/questionPools";
import { validateQuestionPools } from "../../../src/verticals/learning-checks/validateQuestionPools";
import { topics } from "../../../src/verticals/topics/topics";

describe("validateQuestionPools", () => {
  it("validates every pool against its topic sources", () => {
    expect(validateQuestionPools(topics.items)).toEqual([]);
  });

  it("reports every missing topic without stopping at the first pool", () => {
    expect(validateQuestionPools([])).toEqual(
      availableLearningCheckTopicIds.map(
        (id) => `Missing topic for question pool: ${id}`,
      ),
    );
  });

  it("reports invalid sources from every affected pool", () => {
    const errors = validateQuestionPools(
      topics.items.map((topic) => ({ ...topic, sources: [] })),
    );
    expect(errors).toEqual(
      availableLearningCheckTopicIds.flatMap((topicId) =>
        questionsForTopic(topicId)!.flatMap((question) =>
          question.options.map(
            (option) =>
              `${question.id}/${option.id}: source is not attached to topic`,
          ),
        ),
      ),
    );
  });
});
