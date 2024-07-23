export function removeEmpty(obj: object) {
  return Object.entries(obj)
    .filter(([, v]) => v || typeof v === "boolean" || typeof v === "number")
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
}
