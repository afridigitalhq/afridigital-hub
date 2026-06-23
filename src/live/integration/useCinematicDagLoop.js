import { useEffect } from "react";
import { afriSocket } from "../afriAI.socket";

import { cinematicCamera } from "../cinematic/cameraDirector";
import { narrativeEngine } from "../cinematic/narrativeEngine";

export function useCinematicDagLoop({
  setNodes,
  setEdges,
  setCamera,
  setNarrative
}) {
  useEffect(() => {
    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;
      const sim = payload?.simulation;

      // 🎬 CAMERA LAYER
      if (sim) {
        setCamera(cinematicCamera(sim));
      }

      // 🧠 NARRATIVE LAYER
      setNarrative(narrativeEngine(event));

      // 🎮 DAG REACTION LAYER
      const type = event?.intent || event?.type;

      if (type === "diagnostic") {
        setNodes((nodes) =>
          nodes.map((n) => ({
            ...n,
            style: {
              ...n.style,
              background: "#ff4d4d",
              transition: "all 0.6s ease"
            }
          }))
        );

        setEdges((edges) =>
          edges.map((e) => ({
            ...e,
            animated: true,
            style: { stroke: "#ff4d4d" }
          }))
        );
      }

      if (type === "deploy") {
        setNodes((nodes) =>
          nodes.map((n) => ({
            ...n,
            style: {
              ...n.style,
              background: "#4dff88",
              transition: "all 0.6s ease"
            }
          }))
        );

        setEdges((edges) =>
          edges.map((e) => ({
            ...e,
            animated: true,
            style: { stroke: "#4dff88" }
          }))
        );
      }

      if (type === "simulation") {
        setNodes((nodes) =>
          nodes.map((n) => ({
            ...n,
            style: {
              ...n.style,
              transform: "scale(1.02)",
              transition: "all 0.8s ease"
            }
          }))
        );
      }
    });

    return () => afriSocket.off("afriai-event");
  }, []);
}
