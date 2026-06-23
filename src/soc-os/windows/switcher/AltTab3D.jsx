import React from "react";

export default function AltTab3D({ windows = [], active, onSelect }) {
  return (
    <div className="alt-tab-3d">

      <div className="alt-tab-title">🪟 Switch Apps</div>

      <div className="alt-grid">

        {windows.map((w, i) => (
          <div
            key={i}
            className={`alt-card ${active === w.id ? "active" : ""}`}
            onClick={() => onSelect(w.id)}
          >
            <div className="alt-preview" />
            <span>{w.title}</span>
          </div>
        ))}

      </div>

    </div>
  );
}
