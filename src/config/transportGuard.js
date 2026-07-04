import WS from "./ws.js";

function assertWSBase() {
  const base = WS.WS_BASE || WS.base;

  if (!base) throw new Error("WS.base missing");

  if (!base.startsWith("AFRI_WS_GATEWAY") && !base.startsWith("wss://")) {
    throw new Error("INVALID WS.base — must be AFRI_WS_GATEWAY or wss://");
  }

  return true;
}

function safeSocket(path = "") {
  assertWSBase();
  const base = WS.WS_BASE || WS.base;
  return new WebSocket(`${base}${path}`);
}

export { assertWSBase, safeSocket };
