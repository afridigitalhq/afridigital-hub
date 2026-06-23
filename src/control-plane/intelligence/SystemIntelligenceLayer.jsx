import React from "react";
import useDAGStream from "../dag/useDAGStream";

export default function SystemIntelligenceLayer() {
  const events = useDAGStream();
  const latest = events[events.length - 1] || {};

  const health =
    latest.cpu > 80 ? "CRITICAL" :
    latest.cpu > 50 ? "WARNING" :
    "HEALTHY";

  return (
    <div style={{
      border: "1px solid #00ffcc",
      padding: 12,
      marginTop: 10,
      color: "#00ffcc"
    }}>
      <h3>🧠 SYSTEM INTELLIGENCE</h3>

      <p>Status: {health}</p>
      <p>Global CPU: {latest.cpu?.toFixed?.(1) || 0}%</p>
      <p>Latency: {latest.latency?.toFixed?.(0) || 0}ms</p>
      <p>Memory: {latest.memory?.toFixed?.(1) || 0}%</p>
    </div>
  );
}
