// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// AFRIKERNEL_DAG_AUTHORITY_LOCKED (SINGLE SOURCE OF TRUTH)
// TIME_TRAVEL_KERNEL_CONTROLLED
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
import React, { useState } from "react";

export default function ReplaySlider({ runtime }) {
  const [t, setT] = useState(Date.now());

  const data = runtime?.replaySnapshot(t) || [];

  return (
    <div style={{ padding: 10 }}>
      <h3>⏱ Replay Slider</h3>

      <input
        type="range"
        min={Date.now() - 60000}
        max={Date.now()}
        value={t}
        onChange={(e) => setT(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <div>
        {data.map((e, i) => (
          <div key={i}>{e.type || "event"} @ {new Date(e.ts).toLocaleTimeString()}</div>
        ))}
      </div>
    </div>
  );
}
