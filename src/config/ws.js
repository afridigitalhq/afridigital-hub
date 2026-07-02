const WS_BASE = "wss://API.base";

export const WS = {
  base: WS_BASE,
  ingest: `${WS_BASE}/ws`,
  flags: `${WS_BASE}/ws/flags`,
  graph: WS_BASE,
  control: WS_BASE
};

export default WS;
