import { useEffect, useState } from "react";

export function useFeatureFlags() {
  const [flags, setFlags] = useState({});

  async function loadFlags() {
    const res = await fetch("API.base/api/flags");
    const data = await res.json();
    setFlags(data);
  }

  async function toggleFlag(key, value) {
    await fetch("API.base/api/flags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value })
    });
    loadFlags();
  }

  useEffect(() => {
    loadFlags();
  }, []);

  return { flags, toggleFlag };
}
