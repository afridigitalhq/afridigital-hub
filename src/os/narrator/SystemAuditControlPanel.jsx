import React, { useState } from "react";

export default function SystemAuditControlPanel({ controller }) {
  const [mode, setMode] = useState("1h");

  return (
    <div style={{
      padding: 12,
      background: "#0a0f1c",
      color: "#fff",
      border: "1px solid #1f2937"
    }}>
      <h3>🔊 System Audit Voice Layer</h3>

      <button onClick={() => controller.toggle()}>
        Toggle Voice
      </button>

      <select
        value={mode}
        onChange={(e) => {
          setMode(e.target.value);
          controller.setMode(e.target.value);
        }}
      >
        <option value="15m">15 min</option>
        <option value="30m">30 min</option>
        <option value="1h">1 hour</option>
        <option value="1d">1 day</option>
      </select>
    </div>
  );
}
