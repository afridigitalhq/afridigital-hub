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
      console.log("🔎 AFRITRANSPORT WS RAW MESSAGE →", e.data);
      try {
        const parsed = JSON.parse(e.data);
        console.log("🔎 AFRITRANSPORT WS PARSED →", parsed);
        onMessage(parsed);
      } catch (error) {
        console.error("🔴 AFRITRANSPORT WS PARSE ERROR", error);
      }
    };

    return ws;
  },

  soc: socCommandClient
};
