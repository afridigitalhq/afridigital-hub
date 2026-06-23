export function mapEventToSimulation(event) {
  const type = event.intent || event.type;

  if (type === "diagnostic") {
    return {
      camera: "zoom_cluster",
      effect: "red_heatwave",
      narration: "System instability detected in cluster"
    };
  }

  if (type === "deploy") {
    return {
      camera: "wide_pan",
      effect: "green_wave",
      narration: "Deployment in progress"
    };
  }

  if (type === "simulation") {
    return {
      camera: "cinematic_focus",
      effect: "physics_ripple",
      narration: "Simulation mode active"
    };
  }

  return {
    camera: "idle",
    effect: "soft_glow",
    narration: "System stable"
  };
}
