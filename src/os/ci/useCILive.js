import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/ci/evaluate";

export function useCILive() {
  const [ci, setCI] = useState({});

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setCI);

    load();
    const t = setInterval(load, 2000);

    return () => clearInterval(t);
  }, []);

  return ci;
}
