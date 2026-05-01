import API from "./api";

/**
 * FULL SAFE API CLIENT
 * All frontend requests must go through this layer
 */

export const request = async (path, options = {}) => {
  const res = await fetch(`${API}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
};

export const get = (path) =>
  request(path, { method: "GET" });

export const post = (path, data) =>
  request(path, {
    method: "POST",
    body: JSON.stringify(data),
  });
