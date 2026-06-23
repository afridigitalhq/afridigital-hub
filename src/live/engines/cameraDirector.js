export function cameraDirector(sim) {
  if (!sim) return { zoom: 1 };

  switch (sim.camera) {
    case "zoom_cluster":
      return { zoom: 1.8 };
    case "wide_pan":
      return { zoom: 0.8 };
    case "cinematic_focus":
      return { zoom: 2.2 };
    default:
      return { zoom: 1 };
  }
}
