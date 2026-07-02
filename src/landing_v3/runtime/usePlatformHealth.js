import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com";

export default function usePlatformHealth() {
  const [health, setHealth] = useState({
    loading: true,
    online: false,
    data: null
  });

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch(`${API}/api/soc/health`);
        const json = await res.json();

        if (mounted) {
          setHealth({
            loading: false,
            online: true,
            data: json
          });
        }
      } catch {
        if (mounted) {
          setHealth({
            loading: false,
            online: false,
            data: null
          });
        }
      }
    }

    load();
    const timer = setInterval(load, 10000);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, []);

  return health;
}
