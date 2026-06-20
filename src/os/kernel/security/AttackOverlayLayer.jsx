import React from "react";

export default function AttackOverlayLayer({ attacks = [] }) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {attacks.map((a, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: a.x,
            top: a.y,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "red",
            boxShadow: "0 0 20px red",
            animation: "pulse 1s infinite"
          }}
        />
      ))}
    </div>
  );
}
