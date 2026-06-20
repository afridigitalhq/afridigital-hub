import React from "react";
import { generateSidebar } from "../sidebar/generateSidebar";

export default function DynamicSidebar({ active, onSelect }) {
  const items = generateSidebar();

  return (
    <div style={{
      width: 260,
      background: "#0a0f1c",
      height: "100%",
      padding: 12,
      borderRight: "1px solid #1f2937"
    }}>
      <h3 style={{ color: "#60a5fa" }}>🧠 Control Center</h3>

      {items.map(item => (
        <div
          key={item.id}
          onClick={() => onSelect(item.id)}
          style={{
            padding: 10,
            marginTop: 8,
            cursor: "pointer",
            borderRadius: 6,
            background: active === item.id ? "#1e293b" : "transparent",
            color: "#fff"
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
