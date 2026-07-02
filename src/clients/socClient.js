import API from "../config/api";

export const socCommandClient = {
  async send(payload) {
    const res = await fetch(`${API.base}/soc/command`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return res.json();
  },

  async query(id) {
    const res = await fetch(`${API.base}/soc/query/${id}`);
    return res.json();
  },

  async stream(onMessage) {
    const ws = new WebSocket(`${WS.base}/soc/stream`);

    ws.onmessage = (event) => {
      try {
        onMessage(JSON.parse(event.data));
      } catch (e) {
        console.error("SOC stream parse error", e);
      }
    };

    return ws;
  }
};
