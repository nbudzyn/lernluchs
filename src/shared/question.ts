export type AnswerOption = {
  id: string;
  text: string;
  correct: boolean;
  explanation: string;
  sourceUrl: string;
};

export type Question = {
  id: string;
  prompt: string;
  options: AnswerOption[];
};
