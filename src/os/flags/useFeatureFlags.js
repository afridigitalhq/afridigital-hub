import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api";

export function useFeatureFlags() {
  const [flags, setFlags] = useState({});

  async function refresh() {
    const res = await fetch(`${API}/flags`);
    const data = await res.json();
    setFlags(data);
  }

  async function toggle(key, value) {
    await fetch(`${API}/flags/set`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value })
    });
    await refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return { flags, toggle, refresh };
}
