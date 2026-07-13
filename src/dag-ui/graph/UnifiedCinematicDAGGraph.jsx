import React, { useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

import { UnifiedPluginRegistry } from "../../core/runtime/adapters/UnifiedPluginRegistry";

export default function UnifiedCinematicDAGGraph({
  dagRuntime,
  simBridge
}) {
  const [simState, setSimState] = useState({});

  const nodes = useMemo(() => {
    const state = simState;

    return UnifiedPluginRegistry.map((d, i) => {
      const liquidity = state.liquidity?.[d.id]?.liquidity || 0;
      const stress = state.stress?.[d.id]?.stress || 0;
      const swarm = state.swarm?.find?.(s => s.id === d.id);

      const glow =
        stress > 5 ? "0 0 25px red"
        : liquidity > 150 ? "0 0 20px green"
        : swarm?.state === "active" ? "0 0 18px #3b82f6"
        : "none";

      return {
        id: d.id,
        data: { label: `${d.icon} ${d.label}` },
        position: {
          x: (i % 4) * 220,
          y: Math.floor(i / 4) * 140
        },
        style: {
          padding: 10,
          borderRadius: 12,
          background: "#0b0f19",
          border: "1px solid #2b2f3a",
          color: "#fff",
          boxShadow: glow,
          transform: `scale(${1 + (stress * 0.02)})`
        }
      };
    });
  }, [simState]);

  useEffect(() => {
    if (!simBridge) return;

    simBridge.bind();

    const interval = setInterval(() => {
      setSimState(simBridge.getState());
    }, 500);

    return () => clearInterval(interval);
  }, [simBridge]);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#05070d" }}>
      <ReactFlow nodes={nodes} edges={[]} fitView>
        <Background color="#1f2937" gap={16} />
        <MiniMap style={{ background: "#0b0f19" }} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
