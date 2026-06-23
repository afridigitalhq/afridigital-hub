import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/ci/live";

export function useLiveCI() {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const load = () => fetch(API).then(r => r.json()).then(setGraph);

    load();
    const t = setInterval(load, 2000);

    return () => clearInterval(t);
  }, []);

  return graph;
}
