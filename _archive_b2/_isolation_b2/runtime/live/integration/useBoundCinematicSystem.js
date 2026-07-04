import { useEffect } from "react";
import { afriSocket } from "../afriAI.socket";

import { cinematicCamera } from "../cinematic/cameraDirector";
import { narrativeEngine } from "../cinematic/narrativeEngine";

import { cameraPhysics } from "../physics/cameraPhysics";

export function useBoundCinematicSystem({
  setNodes,
  setEdges,
  setViewport,
  setNarrative
}) {
  useEffect(() => {
    const applyPhysics = cameraPhysics(setViewport);

    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;
      const sim = payload?.simulation;

      // 🎬 Narrative layer
      setNarrative(narrativeEngine(event));

      // 🎮 DAG reaction layer
      const type = event?.intent || event?.type;

      if (type === "diagnostic") {
        setNodes((nodes) =>
          nodes.map((n) => ({
            ...n,
            style: { ...n.style, background: "#ff4d4d" }
          }))
        );
      }

      if (type === "deploy") {
        setNodes((nodes) =>
          nodes.map((n) => ({
            ...n,
            style: { ...n.style, background: "#4dff88" }
          }))
        );
      }

      // 🎥 CAMERA PHYSICS LAYER (REAL MOTION)
      if (event) {
        applyPhysics(event);
      }

      // 🎬 optional cinematic camera state (for UI overlay/debug)
      if (sim) {
        cinematicCamera(sim);
      }
    });

    return () => afriSocket.off("afriai-event");
  }, []);
}
