import { useEffect } from "react";
import { io } from "socket.io-client";

export function useAfriAILive(onEvent) {
  useEffect(() => {
    const socket = io("https://afridigital-fmdash.onrender.com");

    socket.on("afriai-event", (data) => {
      onEvent?.(data);
    });

    return () => socket.disconnect();
  }, []);
}
