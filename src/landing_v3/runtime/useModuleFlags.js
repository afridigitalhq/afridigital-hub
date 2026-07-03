import { useEffect, useState } from "react";

const API_URL = "https://afridigital-api.onrender.com/api/feature-flags/landing";

export default function useModuleFlags() {
  const [flags, setFlags] = useState({});

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        if (active) setFlags(json?.flags || {});
      } catch (e) {
        setFlags({});
      }
    }

    load();
    return () => { active = false; };
  }, []);

  return flags;
}
