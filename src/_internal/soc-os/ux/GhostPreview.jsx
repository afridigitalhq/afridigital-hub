import React from "react";

export default function GhostPreview({ layout }) {
  return (
    <div className="ghost-layer">
      {layout.map((l, i) => (
        <div
          key={i}
          className="ghost-window"
          style={{
            left: l.x,
            top: l.y,
            opacity: 0.3,
            border: "1px dashed #00ffcc"
          }}
        />
      ))}
    </div>
  );
}
