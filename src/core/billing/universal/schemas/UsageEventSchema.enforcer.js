
export function enforce(schemaName, event) {

  if (!event || typeof event !== "object") return false;

  // Required universal fields
  const required = ["type", "timestamp", "source"];

  for (let key of required) {
    if (!event[key]) return false;
  }

  // Normalize timestamp if missing format consistency
  if (typeof event.timestamp === "string") {
    const t = Date.parse(event.timestamp);
    if (isNaN(t)) return false;
    event.timestamp = t;
  }

  // Type safety normalization
  event.type = String(event.type).toUpperCase();

  // Source validation (must exist in system)
  if (typeof event.source !== "string") return false;

  return true;
}

