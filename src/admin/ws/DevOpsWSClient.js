class DevOpsWSClient {
  constructor() {
    this.ws = null;
    this.listeners = [];
  }

  connect() {
    try {
      this.ws = new WebSocket("wss://afridigital-api.onrender.com");

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this.listeners.forEach(fn => fn(data));
      };

      this.ws.onerror = () => {
        console.log("⚠️ WS fallback to polling mode");
      };

    } catch (e) {
      console.log("WS init failed:", e);
    }
  }

  subscribe(fn) {
    this.listeners.push(fn);
  }
}

export default new DevOpsWSClient();
