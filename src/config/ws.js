const API_BASE = import.meta.env.VITE_API_BASE || "https://afridigital-api.onrender.com";

const WS_BASE = API_BASE
  .replace(/^https:/, "wss:")
  .replace(/^http:/, "ws:");

export const WS = {
  base: WS_BASE,
  ingest: `${WS_BASE}/ws`,
  flags: `${WS_BASE}/ws/flags`,
  graph: WS_BASE,
  control: WS_BASE
};

export default WS;
