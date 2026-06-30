import React from "react";

export default function SOCTaskbar({ activeApp, processes = [] }) {
  return (
    <div className="soc-taskbar">

      <div className="start">🧿 SOC</div>

      <div className="apps">
        {processes.map(p => (
          <div
            key={p.id}
            className={`task-icon ${activeApp === p.id ? "glow" : ""}`}
          >
            {p.id}
            <small>{Math.round(p.cpu)}%</small>
          </div>
        ))}
      </div>

      <div className="tray">
        🔊 📶 🔋 🕒
      </div>

    </div>
  );
}
