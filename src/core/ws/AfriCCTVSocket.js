export const AFRI_WS = "wss://afridigital-api.onrender.com/ws/africctv";

export default class AfriCCTVSocket {

  constructor() {
    this.ws = new WebSocket(AFRI_WS);

    this.ws.onopen = () => console.log("CCTV_WS_CONNECTED");
    this.ws.onerror = (e) => console.log("CCTV_WS_ERROR", e);
    this.ws.onclose = () => console.log("CCTV_WS_CLOSED");
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
