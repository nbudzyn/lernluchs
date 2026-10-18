export type AnswerOption = {
  readonly id: string;
  readonly text: string;
  readonly correct: boolean;
  readonly explanation: string;
  readonly sourceUrl: string;
};

export type Question = {
  readonly id: string;
  readonly prompt: string;
  readonly options: readonly AnswerOption[];
};
