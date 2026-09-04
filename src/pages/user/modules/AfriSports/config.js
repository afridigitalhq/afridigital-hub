const LOCAL_API_ORIGIN = "http://localhost:10000";
const PRODUCTION_API_ORIGIN = "https://afridigital-api.onrender.com";

const API_ORIGIN =
  import.meta.env.VITE_AFRISPORTS_API_ORIGIN ||
  (window.location.hostname === "localhost" ||
   window.location.hostname === "127.0.0.1"
    ? LOCAL_API_ORIGIN
    : PRODUCTION_API_ORIGIN);

export const AFRISPORTS_API = `${API_ORIGIN}/api/afrisports`;

export default Object.freeze({
  origin: API_ORIGIN,
  base: AFRISPORTS_API
});
