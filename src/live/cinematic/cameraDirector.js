export function cinematicCamera(simulation) {
  if (!simulation) return { zoom: 1, mode: "idle" };

  switch (simulation.camera) {
    case "zoom_cluster":
      return { zoom: 1.8, mode: "focus-cluster", motion: "smooth-in" };
    case "wide_pan":
      return { zoom: 0.7, mode: "system-view", motion: "slow-pan" };
    case "cinematic_focus":
      return { zoom: 2.3, mode: "drill-down", motion: "snap-focus" };
    default:
      return { zoom: 1, mode: "neutral", motion: "stable" };
  }
}
