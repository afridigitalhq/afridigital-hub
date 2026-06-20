// DETERMINISTIC_RENDERER_V2_ACTIVE
// EVENT_SOURCED_KERNEL_ONLY
// AFRIKERNEL_RUNTIME_V1 (EVENT LOG → DAG → RENDER ONLY)
// AFRIKERNEL_V1_ACTIVE
// DETERMINISTIC_RENDER_PIPELINE_ENABLED
// AFRIKERNEL_V1_SINGLE_SOURCE_OF_TRUTH
// AFRIKERNEL_V1_SINGLE_RUNTIME_ACTIVE
// AFRIKERNEL_RENDER_PIPELINE_ACTIVE (NO DIRECT STATE, ONLY KERNEL PROJECTION)
// AFRIKERNEL_RUNTIME_ACTIVE (EVENT LOG → DAG → RENDER ONLY)
// AFRISYNC_V2_CLUSTER_REPLICATION_ACTIVE
// AFRIDIGITAL_CAUSAL_DAG_CONTROL_PLANE_V5
// AFRIDIGITAL_TRUE_DAG_SYSTEM_V4_ACTIVE
// AFRIDIGITAL_DAG_GRAPH_V3_FORCE_SIMULATION_ACTIVE
import React, { useEffect, useState } from "react";

export default function GraphRenderer({ graph }) {
  const [state, setState] = useState(graph);

  useEffect(() => {
    let frame;

    const loop = () => {
      const next = sim.tick();
      setState({ ...next });
      frame = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(frame);
  }, [graph]);

  return (
    <svg width="500" height="400" style={{ border: "1px solid #0ff3" }}>
      {state.edges.map((e, i) => (
        <line key={i} x1={e.sourceX || 50} y1={e.sourceY || 50} x2={e.targetX || 200} y2={e.targetY || 200} stroke="#0ff" />
      ))}
      {state.nodes.map((n, i) => (
        <circle key={i} cx={n.x || 100 + i * 20} cy={n.y || 100} r={6} fill="#0ff" />
      ))}
    </svg>
  );
}
