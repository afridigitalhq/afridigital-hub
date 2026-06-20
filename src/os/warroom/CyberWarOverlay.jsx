import React from "react";

export default function CyberWarOverlay({ simulation = [] }) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {simulation.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: Math.random() * 800,
            top: Math.random() * 500,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background:
              s.side === "ATTACKER" ? "red" : "lime",
            boxShadow:
              s.side === "ATTACKER"
                ? "0 0 20px red"
                : "0 0 20px lime",
            opacity: s.pressure
          }}
        />
      ))}
    </div>
  );
}
