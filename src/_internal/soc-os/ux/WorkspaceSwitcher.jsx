import React, { useState } from "react";

export default function WorkspaceSwitcher({ onSwitch }) {
  const [open, setOpen] = useState(false);

  const spaces = ["warroom", "admin", "dag", "security"];

  return (
    <div className="win-tab-layer">

      <button
        className="win-tab-btn"
        onClick={() => setOpen(!open)}
      >
        ⊞ SOC SPACES
      </button>

      {open && (
        <div className="win-tab-grid">
          {spaces.map(s => (
            <div
              key={s}
              className="space-card"
              onClick={() => {
                onSwitch?.(s);
                setOpen(false);
              }}
            >
              {s.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
