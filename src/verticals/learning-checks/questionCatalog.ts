import type { Question } from "../../shared/question";
import { agentHandoffQuestions } from "./agentHandoffQuestions";
import { agentPermissionQuestions } from "./agentPermissionQuestions";
import { agentVerificationQuestions } from "./agentVerificationQuestions";
import { firstFourMissingQuestions } from "./firstFourMissingQuestions";
import { firstFourRemainingQuestions } from "./firstFourRemainingQuestions";
import {
  domainLanguageQuestions,
  projectDocumentationQuestions,
} from "./firstTwoQuestions";
import { fiveNewQuestions } from "./fiveNewQuestions";
import foundationQuestions from "./foundationQuestions.json" with { type: "json" };
import { harnessDesignQuestions } from "./harnessDesignQuestions";
import { newFourQuestions } from "./newFourQuestions";
import { nextFourMissingQuestions } from "./nextFourMissingQuestions";
import { openRewriteQuestions } from "./openRewriteQuestions";
import { parallelComparisonQuestions } from "./parallelComparisonQuestions";
import { remainingQuestions } from "./remainingQuestions";
import { secondPathQuestions } from "./secondPathQuestions";
import { subagentOwnershipQuestions } from "./subagentOwnershipQuestions";

const questionPools: Record<string, Question[]> = {
  ...foundationQuestions,
  ...secondPathQuestions,
  ...remainingQuestions,
  ...fiveNewQuestions,
  ...firstFourMissingQuestions,
  ...firstFourRemainingQuestions,
  ...nextFourMissingQuestions,
  ...newFourQuestions,
  "specialized-subagents-and-ownership": subagentOwnershipQuestions,
  "agent-context-handoffs": agentHandoffQuestions,
  "agent-tool-and-mcp-permissions": agentPermissionQuestions,
  "deterministic-agent-verification-gates": agentVerificationQuestions,
  "domain-language-and-complexity": domainLanguageQuestions,
  "project-documentation-and-checklists": projectDocumentationQuestions,
  "refactorings-and-migrations-with-openrewrite": openRewriteQuestions,
  "compare-parallel-and-serial-agent-work": parallelComparisonQuestions,
  "coding-harness-design": harnessDesignQuestions,
};

export const availableLearningCheckTopicIds = Object.keys(questionPools);

export function questionsForTopic(topicId: string): Question[] | undefined {
  return questionPools[topicId];
}
