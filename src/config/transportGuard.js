import WS from "./ws.js";

function assertWSBase() {
  const base = WS.WS_BASE || WS.base;

  if (!base) throw new Error("WS.base missing");

  if (!base.startsWith("ws://") && !base.startsWith("wss://")) {
    throw new Error("INVALID WS.base — must be ws:// or wss://");
  }

  return true;
}

function safeSocket(path = "") {
  assertWSBase();
  const base = WS.WS_BASE || WS.base;
  return new WebSocket(`${base}${path}`);
}

export { assertWSBase, safeSocket };
