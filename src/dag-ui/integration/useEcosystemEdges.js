import { useEffect, useState } from "react";

export function useEcosystemEdges(flowNetwork) {
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (!flowNetwork) return;

    const interval = setInterval(() => {
      setEdges(flowNetwork.getFlows?.() || []);
    }, 400);

    return () => clearInterval(interval);
  }, [flowNetwork]);

  return edges;
}
