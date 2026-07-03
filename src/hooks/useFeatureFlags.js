import { useEffect, useState } from "react";

const API_URL = "https://afridigital-api.onrender.com/api/feature-flags/landing";

export default function useFeatureFlags() {
  const [flags, setFlags] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchFlags() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (mounted && json?.flags) {
          setFlags(json.flags);
        }
      } catch (err) {
        console.error("Feature flags fetch failed:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchFlags();

    return () => {
      mounted = false;
    };
  }, []);

  return { flags, loading };
}
