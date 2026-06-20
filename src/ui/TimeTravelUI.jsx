// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// REPLAY_IS_SINGLE_SOURCE_OF_TRUTH
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
import { useState, useEffect } from "react";

export default function TimeTravelUI({ debuggerEngine, onChange }) {
  const [index, setIndex] = useState(0);

  const snapshots = debuggerEngine.snapshots;

  useEffect(() => {
    if (snapshots.length === 0) return;
    const snap = debuggerEngine.rollback(index);
    if (onChange) onChange(snap);
  }, [index]);

  return (
    <div style={{ padding: 12, borderTop: "1px solid #0ff3" }}>
      <h3>⏪ Time Travel Debugger</h3>

      <input
        type="range"
        min="0"
        max={Math.max(0, snapshots.length - 1)}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <div style={{ marginTop: 8, fontSize: 12 }}>
        Snapshot: {index} / {snapshots.length - 1}
      </div>

      {snapshots[index] && (
        <div style={{ fontSize: 11, opacity: 0.8 }}>
          {snapshots[index].label || "unnamed state"}
        </div>
      )}
    </div>
  );
}
