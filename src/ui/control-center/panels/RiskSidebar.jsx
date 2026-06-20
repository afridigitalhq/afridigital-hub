import React from "react";

export default function RiskSidebar({ alerts, explanation, selectedNode }) {
  return (
    <div style={{
      padding: 12,
      background: "#0a0f1c",
      borderLeft: "1px solid #1f2937",
      overflowY: "auto"
    }}>
      <h3>⚡ Alerts</h3>
      {(alerts || []).map((a, i) => (
        <div key={i} style={{ color: "orange" }}>
          {a.message}
        </div>
      ))}

      <h3 style={{ marginTop: 16 }}>🤖 AI Explanation</h3>
      <div style={{ fontSize: 12, color: "#93c5fd" }}>
        {explanation?.summary || "No explanation"}
      </div>

      <h3 style={{ marginTop: 16 }}>🎯 Node</h3>
      <pre style={{ fontSize: 11 }}>
        {JSON.stringify(selectedNode, null, 2)}
      </pre>
    </div>
  );
}
