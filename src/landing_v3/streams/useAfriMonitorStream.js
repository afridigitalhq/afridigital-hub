import { useEffect, useState } from "react";

const WS_URL = "wss://afridigital-api.onrender.com/ws/afrivision";

export default function useAfriMonitorStream() {
  const [frame, setFrame] = useState(0);
  const [status, setStatus] = useState("connecting");

  useEffect(() => {
    const socket = new WebSocket(WS_URL);

    socket.onopen = () => {
      setStatus("live");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "frame") {
          setFrame(data.frame);
        }
      } catch (e) {}
    };

    socket.onclose = () => {
      setStatus("disconnected");
    };

    socket.onerror = () => {
      setStatus("error");
    };

    return () => socket.close();
  }, []);

  return { frame, status };
}
