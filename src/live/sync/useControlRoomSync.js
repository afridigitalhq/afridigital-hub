import { useEffect, useState } from "react";
import { useSOCTimeline() } from "./useSOCTimeline()";

export function useControlRoomSync(socket) {
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    if (!socket) return;

    const handler = (payload) => {
      const event = payload?.event;

      useSOCTimeline().push(event);

      setFrame({
        event,
        frame: useSOCTimeline().events.length,
        simulation: payload?.simulation
      });
    };

    socket.on("afriai-event", handler);

    return () => socket.off("afriai-event", handler);
  }, [socket]);

  return frame;
}
