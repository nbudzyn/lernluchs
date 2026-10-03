export function LearningStateNotice({ notice }: { notice: string | null }) {
  return notice ? <p role="alert">{notice}</p> : null;
}
