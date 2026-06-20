import React, { useState, useMemo } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

export default function InteractiveCinematicDAGGraph({
  nodes,
  edges,
  onInspect
}) {
  const [selected, setSelected] = useState(null);

  const interactiveEdges = useMemo(() => {
    return edges.map(e => ({
      ...e,
      animated: true,
      style: {
        ...e.style,
        cursor: "pointer"
      },
      onClick: () => {
        setSelected(e);
        onInspect?.(e);
      }
    }));
  }, [edges]);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#05070d" }}>
      <ReactFlow
        nodes={nodes}
        edges={interactiveEdges}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>

      {/* 🧠 INTELLIGENCE PANEL */}
      {selected && (
        <div style={{
          position: "absolute",
          right: 20,
          top: 20,
          width: 320,
          padding: 16,
          background: "#0b0f19",
          border: "1px solid #1f2937",
          color: "white",
          borderRadius: 12
        }}>
          <h3>🧠 Edge Intelligence</h3>
          <pre style={{ fontSize: 12 }}>
            {JSON.stringify(selected, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
