import { useEffect } from "react";
import { afriSocket } from "../afriAI.socket";
import { cinematicCamera } from "./cameraDirector";
import { narrativeEngine } from "./narrativeEngine";

export function useCinematicSystem({ setCamera, setNarrative }) {
  useEffect(() => {
    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;
      const sim = payload?.simulation;

      if (sim) setCamera(cinematicCamera(sim));
      setNarrative(narrativeEngine(event));
    });

    return () => afriSocket.off("afriai-event");
  }, []);
}
