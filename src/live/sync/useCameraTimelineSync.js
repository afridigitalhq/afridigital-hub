import { useEffect, useState } from "react";

export function useCameraTimelineSync(frame) {
  const [camera, setCamera] = useState({
    zoom: 1,
    mode: "idle",
    motion: "stable"
  });

  useEffect(() => {
    if (!frame?.simulation) return;

    const sim = frame.simulation;

    setCamera({
      zoom: sim.camera === "cinematic_focus" ? 2.2 :
             sim.camera === "wide_pan" ? 0.8 : 1,
      mode: sim.camera,
      motion: "timeline-sync"
    });

  }, [frame]);

  return camera;
}
