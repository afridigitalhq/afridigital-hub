import { useEffect } from "react";
import { afriSocket } from "./afriAI.socket";
import { createDagReactionEngine } from "./engines/dagReactionEngine";
import { propagate } from "./engines/physicsEngine";
import { cameraDirector } from "./engines/cameraDirector";

export function useLivingSystem({ setNodes, setEdges, setCamera }) {
  useEffect(() => {
    const dag = createDagReactionEngine({ setNodes, setEdges });

    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;
      const sim = payload?.simulation;

      dag(event);

      if (sim?.camera) {
        setCamera(cameraDirector(sim));
      }
    });

    return () => afriSocket.off("afriai-event");
  }, []);
}
