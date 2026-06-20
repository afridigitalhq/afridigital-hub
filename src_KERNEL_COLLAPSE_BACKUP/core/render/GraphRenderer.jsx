// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// AFRIKERNEL_DAG_AUTHORITY_LOCKED (SINGLE SOURCE OF TRUTH)
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
// AFRIDIGITAL_COMPRESSED_DAG_PIPELINE_ACTIVE
import React, { useEffect, useState } from "react";

export default function GraphRenderer({ dag }) {

  useEffect(() => {
    const interval = setInterval(() => {
      setGraph(dag.getGraph());
    }, 500);

    return () => clearInterval(interval);
  }, [dag]);

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <h3>🌐 Live DAG Stream (Compressed)</h3>

      <svg width="500" height="300" style={{ border: "1px solid #0ff3" }}>
        {graph.edges?.map((e, i) => (
          <line
            key={i}
            x1={50 + i * 10}
            y1={50}
            x2={200}
            y2={200}
            stroke="#0ff"
          />
        ))}

        {graph.nodes?.map((n, i) => (
          <circle
            key={i}
            cx={50 + i * 20}
            cy={100 + (i % 5) * 20}
            r={6}
            fill="#0ff"
          />
        ))}
      </svg>
    </div>
  );
}
