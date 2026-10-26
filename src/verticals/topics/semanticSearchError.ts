export function semanticSearchError(error: unknown): string {
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    const name =
      "name" in error && typeof error.name === "string" ? error.name : "Error";
    return `${name}: ${error.message}`;
  }
  if (typeof error === "string" || typeof error === "number")
    return String(error);
  return "Unbekannter Fehler ohne weitere Angaben";
}
