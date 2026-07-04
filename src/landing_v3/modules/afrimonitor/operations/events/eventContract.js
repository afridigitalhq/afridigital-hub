export const normalizeEvent = (event) => {
  return {
    id: event.id || `${Date.now()}-${Math.random()}`,
    type: event.type || "UNKNOWN",
    timestamp: event.timestamp || Date.now(),
    payload: event.payload || {},
    category: event.category || "SYSTEM",
    priority: event.priority || "LOW"
  };
};
