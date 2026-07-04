export const scoreEvent = (event) => {
  let score = 10;

  if (event.type?.includes("CCTV")) score += 30;
  if (event.type?.includes("FALLBACK")) score += 5;

  if (event.payload?.motion) score += 20;
  if (event.priority === "HIGH") score += 40;
  if (event.priority === "MEDIUM") score += 20;

  if (event.category === "SYSTEM") score += 10;

  return {
    ...event,
    score: Math.min(score, 100),
    load: score > 70 ? "HIGH" : score > 40 ? "MEDIUM" : "LOW"
  };
};
