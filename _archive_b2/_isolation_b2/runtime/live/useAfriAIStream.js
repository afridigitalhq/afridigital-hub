import { useEffect } from "react";
import { afriSocket } from "./afriAI.socket";

export function useAfriAIStream(setState) {
  useEffect(() => {
    afriSocket.on("afriai-event", (payload) => {
      setState((prev) => ({
        ...prev,
        lastEvent: payload.event,
        simulation: payload.simulation
      }));
    });

    return () => {
      afriSocket.off("afriai-event");
    };
  }, [setState]);
}
