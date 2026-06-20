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
import React, { useEffect, useRef, useState } from "react";

export default function GraphV2({ runtime }) {
  const positions = useRef({});
  const velocity = useRef({});

  useEffect(() => {
    if (!runtime) return;

    const update = () => setGraph(runtime.graph());
    update();

    const id = setInterval(update, 300);
    return () => clearInterval(id);
  }, [runtime]);

  // initialize physics state
  const nodes = graph.nodes.map((n) => {
    if (!positions.current[n.id]) {
      positions.current[n.id] = {
        x: 200 + Math.random() * 50,
        y: 150 + Math.random() * 50,
      };
      velocity.current[n.id] = { x: 0, y: 0 };
    }
    return n;
  });

  // FORCE SIMULATION (D3-like tick)
  for (let i = 0; i < 6; i++) {
    // repulsion (charge force)
    for (let a of nodes) {
      for (let b of nodes) {
        if (a === b) continue;

        const pa = positions.current[a.id];
        const pb = positions.current[b.id];

        let dx = pa.x - pb.x;
        let dy = pa.y - pb.y;
        let dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));

        let force = 80 / (dist * dist);

        velocity.current[a.id].x += (dx / dist) * force;
        velocity.current[a.id].y += (dy / dist) * force;
      }
    }

    // spring force (edges)
    for (let e of graph.edges) {
      const a = positions.current[e.from];
      const b = positions.current[e.to];
      if (!a || !b) continue;

      let dx = b.x - a.x;
      let dy = b.y - a.y;

      a.x += dx * 0.02;
      a.y += dy * 0.02;
      b.x -= dx * 0.02;
      b.y -= dy * 0.02;
    }

    // integrate velocity + damping
    for (let n of nodes) {
      const p = positions.current[n.id];
      const v = velocity.current[n.id];

      v.x *= 0.85;
      v.y *= 0.85;

      p.x += v.x;
      p.y += v.y;

      // boundary clamp
      p.x = Math.max(20, Math.min(380, p.x));
      p.y = Math.max(20, Math.min(280, p.y));
    }
  }

  return (
    <div style={{ padding: 16, fontFamily: "monospace" }}>
      <h3>🌐 Graph UI v2 (Force-Directed Physics Engine)</h3>

      <svg width="400" height="300" style={{ border: "1px solid #0ff3" }}>
        {graph.edges.map((e, i) => {
          const a = positions.current[e.from];
          const b = positions.current[e.to];
          if (!a || !b) return null;

          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#0ff"
              strokeOpacity="0.6"
            />
          );
        })}

        {nodes.map((n, i) => {
          const p = positions.current[n.id];
          if (!p) return null;

          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={6} fill="#0ff" />
              <text x={p.x + 8} y={p.y} fontSize="10" fill="#0ff">
                {n.type || n.id}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
