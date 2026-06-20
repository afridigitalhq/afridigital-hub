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
// AFRIDIGITAL_WS_DAG_COMPRESSION_PIPELINE_ACTIVE
// AFRIDIGITAL_EVENT_COMPRESSION_ENGINE_ACTIVE
// AFRIDIGITAL_EVENT_SOURCED_DAG_KERNEL_ACTIVE
import { useEffect, useState } from "react";

export default function GraphUI({ dag }) {

  useEffect(() => {
    const interval = setInterval(() => {
      const nodes = dag.getGraph().map((n, i) => ({
        id: n.id || i,
        x: 100 + i * 20,
        y: 100 + Math.sin(i) * 40
      }));

      const edges = dag.edges || [];

      setGraph({
        nodes: engine.step(),
        edges
      });
    }, 50);

    return () => clearInterval(interval);
  }, [dag]);

  return (
    <div style={{ padding: 16 }}>
      <h3>🌐 Live DAG (Force Simulation)</h3>

      <svg width="500" height="400" style={{ border: "1px solid #0ff3" }}>
        {graph.edges.map((e, i) => (
          <line
            key={i}
            x1={graph.nodes.find(n => n.id === e.from)?.x || 0}
            y1={graph.nodes.find(n => n.id === e.from)?.y || 0}
            x2={graph.nodes.find(n => n.id === e.to)?.x || 0}
            y2={graph.nodes.find(n => n.id === e.to)?.y || 0}
            stroke="#0ff"
          />
        ))}

        {graph.nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={6} fill="#0ff" />
        ))}
      </svg>
    </div>
  );
}
