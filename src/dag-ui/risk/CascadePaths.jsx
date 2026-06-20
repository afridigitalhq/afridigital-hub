import React from "react";

export default function CascadePaths({ chains = [] }) {
  if (!chains.length) return null;

  return (
    <>
      {chains.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: c.fromX,
            top: c.fromY,
            width: Math.max(2, c.toX - c.fromX),
            height: 2,
            background: "linear-gradient(to right, red, orange)",
            opacity: 0.7,
            animation: "flow 1.5s infinite linear",
            pointerEvents: "none"
          }}
        />
      ))}
    </>
  );
}
