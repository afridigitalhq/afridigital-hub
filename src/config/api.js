const API_BASE = import.meta.env.VITE_API_BASE || "https://afridigital-api.onrender.com";

export const API = {
  base: API_BASE,
  kernel: `${API_BASE}/api/kernel`,
  ci: `${API_BASE}/api/ci`,
  flags: `${API_BASE}/api/flags`,
  ui: `${API_BASE}/api/ui`,
  whatsapp: `${API_BASE}/api/whatsapp`,
  auth: `${API_BASE}/api/auth`,
  afriai: `${API_BASE}/api/afriai`
};

export default API;
