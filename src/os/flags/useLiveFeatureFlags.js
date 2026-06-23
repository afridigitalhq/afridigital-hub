import { useEffect, useState } from "react";

const WS = "wss://afridigital-api.onrender.com/ws/flags";
const API = "https://afridigital-api.onrender.com/api/flags";

export function useLiveFeatureFlags() {
  const [flags, setFlags] = useState({});

  useEffect(() => {
    fetch(API).then(r => r.json()).then(setFlags);

    const socket = new WebSocket(WS);

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "FLAGS_UPDATE") {
        setFlags(msg.data);
      }
    };

    return () => socket.close();
  }, []);

  return flags;
}
