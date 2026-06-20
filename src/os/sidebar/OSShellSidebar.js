import React from "react";

export default function OSShellSidebar({ registry, active, onSelect }) {
  const plugins = registry?.list?.() || [];

  return (
    <div style={{
      width: 260,
      height: "100vh",
      background: "#0b1220",
      color: "#fff",
      padding: 10
    }}>
      <h3>🧠 OS Control</h3>

      {plugins.map(p => (
        <div
          key={p}
          onClick={() => onSelect(p)}
          style={{
            padding: 10,
            margin: 6,
            cursor: "pointer",
            background: active === p ? "#1f2937" : "#111827"
          }}
        >
          ⚡ {p}
        </div>
      ))}
    </div>
  );
}
