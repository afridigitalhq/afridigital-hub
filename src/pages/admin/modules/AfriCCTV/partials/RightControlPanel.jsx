import React from "react";


export default function RightControlPanel({cameras=[]}) {
  return (
    <aside style={{ padding: "16px", borderLeft: "1px solid #2b2b2b" }}>
      <h3>🎮 PTZ Control</h3>

      <div style={{ marginBottom: "18px" }}>
        Pan • Tilt • Zoom
      </div>

      <h4>📌 Presets</h4>

      <select style={{ width: "100%", marginBottom: "18px" }}>
        <option>Select Preset</option>
      </select>

      <h4>📹 Camera List</h4>

      <ul style={{ paddingLeft: "18px" }}>
        {cameras.map(name => (
          <li key={name}>{name} ● Online</li>
        ))}
      </ul>
    </aside>
  );
}
