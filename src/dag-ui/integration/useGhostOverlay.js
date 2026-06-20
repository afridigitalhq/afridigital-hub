import { useEffect, useState } from "react";

export function useGhostOverlay(ghostEngine) {
  const [ghostEdges, setGhostEdges] = useState([]);

  useEffect(() => {
    if (!ghostEngine) return;

    const interval = setInterval(() => {
      setGhostEdges(ghostEngine.getGhosts());
    }, 500);

    return () => clearInterval(interval);
  }, [ghostEngine]);

  return ghostEdges;
}
