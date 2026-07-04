import { useEffect } from "react";
import { afriSocket } from "../afriAI.socket";
import { autonomousCameraDirector } from "./autonomousCameraDirector";

export function useAutonomousDirector({
  nodes,
  edges,
  setViewport
}) {
  useEffect(() => {
    const drive = autonomousCameraDirector(setViewport);

    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;

      drive(nodes, edges, event);
    });

    return () => afriSocket.off("afriai-event");
  }, [nodes, edges]);
}
