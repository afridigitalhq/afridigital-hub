export function predictNextState(timeline = []) {
  const last = timeline[timeline.length - 1];
  if (!last) return { confidence: 0 };

  const type = last.intent || last.type;

  // simple behavioral forecasting model (upgrade point later)
  if (type === "diagnostic") {
    return {
      next: "deploy_recovery",
      camera: "zoom_cluster",
      confidence: 0.72
    };
  }

  if (type === "deploy") {
    return {
      next: "stabilization",
      camera: "wide_pan",
      confidence: 0.65
    };
  }

  return {
    next: "idle_state",
    camera: "cinematic_focus",
    confidence: 0.4
  };
}
