import { useEffect, useState } from "react";
import { timelineEngine } from "./timelineEngine";

export function useControlRoomSync(socket) {
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    if (!socket) return;

    const handler = (payload) => {
      const event = payload?.event;

      timelineEngine.push(event);

      setFrame({
        event,
        frame: timelineEngine.events.length,
        simulation: payload?.simulation
      });
    };

    socket.on("afriai-event", handler);

    return () => socket.off("afriai-event", handler);
  }, [socket]);

  return frame;
}
