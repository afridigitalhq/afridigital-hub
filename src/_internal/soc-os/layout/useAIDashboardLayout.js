export function generateLayout(context = []) {
  // 🧠 SAFE AI LAYOUT SUGGESTION ENGINE
  const layout = [];

  const hasIncidents = context.includes("incident");
  const hasAttack = context.includes("attack");
  const hasForecast = context.includes("forecast");

  layout.push({ panel: "dag", size: hasAttack ? "large" : "medium" });

  if (hasIncidents) {
    layout.push({ panel: "incident-cluster", size: "medium" });
  }

  if (hasForecast) {
    layout.push({ panel: "ai-forecast", size: "medium" });
  }

  layout.push({ panel: "terminal", size: "small" });

  return layout;
}
