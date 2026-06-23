import React, { useState } from "react";

export default function SOCDESKTOPShell({ children }) {
  const [windows, setWindows] = useState([
    { id: "warroom", x: 80, y: 60, active: true }
  ]);

  return (
    <div className="soc-desktop">
      
      {/* Desktop background */}
      <div className="desktop-grid" />

      {/* Window layer */}
      {windows.map(w => (
        <div
          key={w.id}
          className="soc-window glass"
          style={{
            transform: `translate(${w.x}px, ${w.y}px)`
          }}
        >
          {children}
        </div>
      ))}

      {/* Dock */}
      <div className="soc-dock">
        🧠 WarRoom | 📡 DAG | 🔥 Incidents | 🧬 AI | 🖥️ Terminal
      </div>
    </div>
  );
}
