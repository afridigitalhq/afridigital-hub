import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/ci/evaluate";

export function useCIGate() {
  const [gate, setGate] = useState({ deploy: false, issues: [] });

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setGate);

    load();
    const t = setInterval(load, 5000);

    return () => clearInterval(t);
  }, []);

  return gate;
}
