export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class BinaryWS {
  constructor(ws) {
    this.ws = ws;
  }

  encode(event) {
    return new TextEncoder().encode(JSON.stringify(event));
  }

  decode(buffer) {
    return JSON.parse(new TextDecoder().decode(buffer));
  }

  send(event) {
    this.ws.send(this.encode(event));
  }
}
