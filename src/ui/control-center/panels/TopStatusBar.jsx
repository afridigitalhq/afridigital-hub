import React from "react";

export default function TopStatusBar({ prediction, alerts }) {
  return (
    <div style={{
      height: 60,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
      background: "#0b1220",
      borderBottom: "1px solid #1f2937"
    }}>
      <div>🧠 AfriScan Control Plane</div>
      <div>Stress: {prediction?.stress || 0}%</div>
      <div>Alerts: {alerts?.length || 0}</div>
    </div>
  );
}
