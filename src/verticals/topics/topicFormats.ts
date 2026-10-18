export function parseDuration(value: string): number | null {
  if (!/^(?:\d+:)?\d{1,2}:[0-5]\d$/.test(value)) return null;
  return value.split(":").reduce((total, part) => total * 60 + Number(part), 0);
}

export function isEditorialDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}
