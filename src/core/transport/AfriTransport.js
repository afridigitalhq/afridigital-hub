import API from "../../config/api";
import WS from "../../config/ws";
import { socCommandClient } from "../../clients/socClient";

export const AfriTransport = {
  async request(path, options = {}) {
    const res = await fetch(`${API.base}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options
    });
    return res.json();
  },

  stream(path, onMessage) {
    const ws = new WebSocket(`${WS.base}${path}`);

    ws.onmessage = (e) => {
      try {
        onMessage(JSON.parse(e.data));
      } catch {}
    };

    return ws;
  },

  soc: socCommandClient
};
