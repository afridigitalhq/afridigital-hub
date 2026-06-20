// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// LEGACY_RENDER_LAYER (WRAPPED_BY_V2)
// DEPRECATED_RENDERER_LAYER (DO_NOT_USE_DIRECTLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
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
import React from "react";
import { useAfriKernel } from "../hooks/useAfriKernel";

export default function GraphRenderer({ stream = [] }) {
  const { graph } = useAfriKernel(stream);

  const nodes = graph.nodes || [];
  const edges = graph.edges || [];

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <h3>🧠 AfriKernel Live DAG</h3>

      <svg width="500" height="350" style={{ border: "1px solid #0ff3" }}>
        {/* EDGES */}
        {edges.map((e, i) => (
          <line
            key={i}
            x1={50 + i * 10}
            y1={50}
            x2={200}
            y2={200}
            stroke="#0ff"
            opacity="0.6"
          />
        ))}

        {/* NODES */}
        {nodes.map((n, i) => (
          <circle
            key={n.id || i}
            cx={80 + i * 25}
            cy={150}
            r={6}
            fill="#00ffff"
          />
        ))}
      </svg>

      <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
        nodes: {nodes.length} | edges: {edges.length}
      </div>
    </div>
  );
}
