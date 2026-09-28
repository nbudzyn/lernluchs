import type { Question } from "../../shared/question";
import foundationQuestions from "./foundationQuestions.json" with { type: "json" };
import {
  domainLanguageQuestions,
  projectDocumentationQuestions,
} from "./firstTwoQuestions";
import { fiveNewQuestions } from "./fiveNewQuestions";
import { firstFourMissingQuestions } from "./firstFourMissingQuestions";
import { firstFourRemainingQuestions } from "./firstFourRemainingQuestions";
import { nextFourMissingQuestions } from "./nextFourMissingQuestions";
import { newFourQuestions } from "./newFourQuestions";
import { subagentOwnershipQuestions } from "./subagentOwnershipQuestions";
import { agentHandoffQuestions } from "./agentHandoffQuestions";
import { agentPermissionQuestions } from "./agentPermissionQuestions";
import { agentVerificationQuestions } from "./agentVerificationQuestions";
import { remainingQuestions } from "./remainingQuestions";
import { secondPathQuestions } from "./secondPathQuestions";

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
};

export const availableLearningCheckTopicIds = Object.keys(questionPools);

export function questionsForTopic(topicId: string): Question[] | undefined {
  return questionPools[topicId];
}
