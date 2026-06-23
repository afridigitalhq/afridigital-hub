import React from "react";

export default function SOCTaskbar({ onLaunch }) {
  return (
    <div className="soc-taskbar">
      <div className="start" onClick={() => onLaunch("launcher")}>
        🪟 SOC
      </div>

      <div className="center-icons">
        <button>📊 WarRoom</button>
        <button>🌐 DAG</button>
        <button>🔐 Incidents</button>
      </div>

      <div className="system-tray">
        🔋 🔊 🌐
      </div>
    </div>
  );
}
