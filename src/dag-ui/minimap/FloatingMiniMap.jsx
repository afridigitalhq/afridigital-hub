import React from "react";

export default function FloatingMiniMap({ nodes = [] }) {
  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 220,
      height: 140,
      background: "#0b0f19",
      border: "1px solid #1f2937",
      borderRadius: 10,
      padding: 10,
      color: "white",
      fontSize: 10,
      opacity: 0.9
    }}>
      <div style={{ opacity: 0.6, marginBottom: 8 }}>
        🌐 DAG OVERVIEW
      </div>

      {nodes.slice(0, 6).map(n => (
        <div key={n.id}>• {n.data?.label}</div>
      ))}
    </div>
  );
}
