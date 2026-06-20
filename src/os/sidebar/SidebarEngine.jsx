import React from "react";

export default function OSShellSidebar({ registry, onSelect }) {
  const dashboards = registry.getAll();

  return (
    <div style={{
      width: 260,
      height: "100vh",
      background: "#0a0f1c",
      color: "#fff",
      padding: 10
    }}>
      <h3>🧭 AfriDigital OS</h3>

      {dashboards.map(([id]) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          style={{
            padding: 10,
            margin: 5,
            cursor: "pointer",
            background: "#111827"
          }}
        >
          ⚡ {id}
        </div>
      ))}
    </div>
  );
}
