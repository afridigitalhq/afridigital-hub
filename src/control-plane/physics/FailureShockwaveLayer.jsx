import React from "react";
import useDAGStream from "../dag/useDAGStream";

export default function FailureShockwaveLayer() {
  const events = useDAGStream();
  const latest = events[events.length - 1] || {};

  const severity =
    (latest.cpu || 0) + (latest.latency || 0) / 2;

  const waveIntensity = Math.min(severity / 100, 1);

  return (
    <div style={{
      border: "1px solid #ff0044",
      padding: 12,
      marginTop: 10,
      position: "relative",
      height: 200,
      overflow: "hidden",
      background: "#05070d"
    }}>
      <h3>💥 FAILURE PROPAGATION SYSTEM</h3>

      {/* SHOCKWAVE RINGS */}
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${i * 60 * waveIntensity}px`,
          height: `${i * 60 * waveIntensity}px`,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255,0,0,0.5)",
          animation: "pulse 2s infinite"
        }} />
      ))}

      <div style={{
        position: "absolute",
        bottom: 10,
        left: 10,
        color: "#ff0044"
      }}>
        FAILURE INTENSITY: {(waveIntensity * 100).toFixed(1)}%
      </div>
    </div>
  );
}
