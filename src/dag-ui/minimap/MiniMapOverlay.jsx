import React from "react";

export default function MiniMapOverlay({ nodes = [] }) {
  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 180,
      height: 120,
      background: "#0b0f19",
      border: "1px solid #1f2937",
      opacity: 0.8,
      padding: 8
    }}>
      <div style={{ fontSize: 10, opacity: 0.6 }}>
        DAG OVERVIEW
      </div>

      {nodes.slice(0, 5).map(n => (
        <div key={n.id} style={{ fontSize: 10 }}>
          • {n.label}
        </div>
      ))}
    </div>
  );
}
