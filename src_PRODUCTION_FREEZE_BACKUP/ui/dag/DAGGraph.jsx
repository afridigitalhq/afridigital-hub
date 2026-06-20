// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
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
// AFRIDIGITAL_WS_DAG_COMPRESSION_PIPELINE_ACTIVE
// AFRIDIGITAL_EVENT_COMPRESSION_ENGINE_ACTIVE
// AFRIDIGITAL_EVENT_SOURCED_DAG_KERNEL_ACTIVE
// AFRIDIGITAL_CONTROL_PLANE_V2_ACTIVE
// AFRIDIGITAL_DAG_CONTROL_PLANE_ACTIVE
import React, { useEffect, useState } from "react";

export default function DAGGraph({ runtime }) {

  useEffect(() => {
    if (!runtime) return;

    const update = () => setGraph(runtime.graph());
    update();

    const id = setInterval(update, 500);
    return () => clearInterval(id);
  }, [runtime]);

  return (
    <div style={{ padding: 16, fontFamily: "monospace", color: "#0ff" }}>
      <h3>🧠 Live DAG Graph</h3>

      <div style={{ display: "flex", gap: 20 }}>
        <div>
          <h4>Nodes</h4>
          {graph.nodes.map((n, i) => (
            <div key={i} style={{ border: "1px solid #0ff5", margin: 5, padding: 6 }}>
              {n.type || "event"} - {n.id || i}
            </div>
          ))}
        </div>

        <div>
          <h4>Edges</h4>
          {graph.edges.map((e, i) => (
            <div key={i} style={{ border: "1px solid #f0f5", margin: 5, padding: 6 }}>
              {e.from} → {e.to}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
