import React from "react";

export default function WarMapPhysicsOverlay({ stressMap = {} }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {Object.entries(stressMap).map(([node, value]) => (
        <div
          key={node}
          style={{
            position: "absolute",
            left: Math.random() * 80 + "%",
            top: Math.random() * 80 + "%",
            width: 20 + value * 80,
            height: 20 + value * 80,
            borderRadius: "50%",
            background: `rgba(255,0,0,${value})`,
            filter: "blur(8px)"
          }}
        />
      ))}
    </div>
  );
}
