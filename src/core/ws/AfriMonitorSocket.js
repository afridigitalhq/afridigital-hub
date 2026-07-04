export const AFRI_WS = "wss://afridigital-api.onrender.com/ws";

export class StreamClient {
  constructor() {
    this.ws = new WebSocket(AFRI_WS);
  }

  subscribe(cb) {
    this.ws.onmessage = (e) => cb(JSON.parse(e.data));
  }

  graph() {}
  inspectDAG() {}
  frames() {}
  rollback() {}
  timeline() {}
  explain() {}
}
