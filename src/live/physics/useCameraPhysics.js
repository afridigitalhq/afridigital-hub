import { useEffect } from "react";
import { afriSocket } from "../afriAI.socket";
import { cameraPhysics } from "./cameraPhysics";

export function useCameraPhysics(setViewport) {
  useEffect(() => {
    const applyPhysics = cameraPhysics(setViewport);

    afriSocket.on("afriai-event", (payload) => {
      const event = payload?.event;
      applyPhysics(event);
    });

    return () => afriSocket.off("afriai-event");
  }, []);
}
