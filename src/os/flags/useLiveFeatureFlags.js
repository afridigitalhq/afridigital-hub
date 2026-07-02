import WS from "../config/ws"
import { useEffect, useState } from "react";

const WS = "WS.base/ws/flags";
const API = "API.base/api/flags";

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
