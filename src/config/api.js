const isProd = typeof window !== "undefined" &&
  window.location.hostname !== "localhost";

export const API_BASE = isProd
  ? "https://afridigital-fmdash.onrender.com"
  : "http://localhost:4000";

export const WS_URL = API_BASE;
