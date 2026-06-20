import React from "react";

export default function RedZones({ zones = [] }) {
  return (
    <>
      {zones.map((z, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: z.x,
            top: z.y,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,0,0,0.2)",
            filter: "blur(10px)",
            animation: "pulse 2s infinite"
          }}
        />
      ))}
    </>
  );
}
