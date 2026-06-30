import React from "react";

export default function SOCTaskbar({ processes = [], onSwitch }) {
  return (
    <div className="soc-taskbar">
      <div className="start">🧿 SOC</div>

      <div className="apps">
        {processes.map(p => (
          <button key={p.id} onClick={() => onSwitch(p.id)}>
            {p.name}
          </button>
        ))}
      </div>

      <div className="system">
        🔔 | 🌐 | ⚙️
      </div>
    </div>
  );
}
