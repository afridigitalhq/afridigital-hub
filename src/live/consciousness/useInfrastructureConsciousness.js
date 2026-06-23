import { useEffect } from "react";
import { afriSocket } from "../afriAI.socket";

import { recordEvent, getTimeline } from "./eventMemory";
import { predictNextState } from "./predictiveEngine";
import { multiCameraDirector } from "./multiCameraDirector";

export function useInfrastructureConsciousness({
  setNodes,
  setEdges,
  setViewport,
  setNarrative,
  setCameraState
}) {
  useEffect(() => {
    const driveCamera = multiCameraDirector(setViewport, setCameraState);

    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;

      // 🧠 1. store event in timeline
      recordEvent(event);

      const timeline = getTimeline();

      // 🔮 2. predict next system state
      const prediction = predictNextState(timeline);

      // 🎬 3. camera reacts to prediction
      driveCamera(prediction, event);

      // 🧠 narrative upgrade
      setNarrative(
        `Next predicted state: ${prediction.next} (${Math.round(prediction.confidence * 100)}%)`
      );

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
    });

    return () => afriSocket.off("afriai-event");
  }, []);
}
