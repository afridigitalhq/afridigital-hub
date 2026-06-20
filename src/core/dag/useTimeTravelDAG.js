export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// TIME_TRAVEL_KERNEL_CONTROLLED
// DETERMINISTIC_RENDERER_V2_ACTIVE
import { useState, useEffect } from "react";

export function useTimeTravelDAG(dag, debuggerEngine) {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const interval = setInterval(() => {
      const snap = debuggerEngine.snapshot("auto");

      setGraph({
        nodes: snap.nodes,
        edges: snap.edges
      });
    }, 500);

    return () => clearInterval(interval);
  }, [dag]);

  return graph;
}
