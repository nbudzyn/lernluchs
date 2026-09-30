import { expect, it } from "vitest";

import { topics } from "../../../src/verticals/topics/topics";
import { validateTopics } from "../../../src/verticals/topics/validateTopics";

const fourthPathIds = [
  "git-worktrees-for-isolated-changes",
  "code-navigation-with-symbols-and-references",
  "versioned-library-docs-with-context7",
  "module-boundaries-and-public-interfaces",
  "tdd-for-domain-behavior",
  "archunit-for-java-architecture",
  "java-spring-migrations-with-openrewrite",
  "playwright-for-web-flows",
];

it("adds the fourth path with four sourced topics in path order", () => {
  const path = topics.paths?.find((item) => item.name === pathName(3));
  expect(path?.topicIds).toEqual(fourthPathIds);
  expect(
    topics.items
      .map((item) => item.id)
      .filter((id) => fourthPathIds.includes(id)),
  ).toEqual(fourthPathIds);

  for (const id of [
    fourthPathIds[0],
    fourthPathIds[1],
    fourthPathIds[2],
    fourthPathIds[6],
  ]) {
    const item = topics.items.find((candidate) => candidate.id === id);
    expect(item).toBeDefined();
    expect(item?.sources.some((source) => source.origin === "primary")).toBe(
      true,
    );
    expect(item?.editorial.reviewedAt).toBe("2026-09-27");
  }
  expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
});

const fifthPathIds = [
  "parallel-agent-task-boundaries",
  "git-worktrees-for-isolated-changes",
  "specialized-subagents-and-ownership",
  "agent-context-handoffs",
  "agent-tool-and-mcp-permissions",
  "deterministic-agent-verification-gates",
  "review-and-accept-ai-generated-changes",
  "compare-parallel-and-serial-agent-work",
];

it("adds the fifth path with six sourced topics in path order", () => {
  const path = topics.paths?.find((item) => item.name === pathName(4));
  expect(path?.topicIds).toEqual(fifthPathIds);
  expect(
    topics.items
      .map((item) => item.id)
      .filter((id) => fifthPathIds.includes(id)),
  ).toEqual(fifthPathIds);

  for (const id of fifthPathIds.filter(
    (candidate) =>
      candidate !== "git-worktrees-for-isolated-changes" &&
      candidate !== "review-and-accept-ai-generated-changes",
  )) {
    const item = topics.items.find((candidate) => candidate.id === id);
    expect(item).toBeDefined();
    expect(item?.sources.some((source) => source.origin === "primary")).toBe(
      true,
    );
    expect(item?.editorial.reviewedAt).toBe(
      id === "agent-tool-and-mcp-permissions" ? "2026-09-28" : "2026-09-27",
    );
  }
  expect(validateTopics(topics)).toEqual({ valid: true, errors: [] });
});

function pathName(index: number) {
  return topics.paths![index].name;
}
