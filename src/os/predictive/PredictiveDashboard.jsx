import React from "react";

export default function PredictiveDashboard({ forecast }) {
  return (
    <div style={{
      padding: 20,
      background: "#050816",
      color: "#fff",
      height: "100%"
    }}>
      <h2>🔮 PREDICTIVE CASCADE ENGINE</h2>

      <div style={{
        marginTop: 20,
        padding: 20,
        border: "1px solid #1f2937",
        borderRadius: 10
      }}>
        ⚠️ Risk Index: {forecast?.riskIndex?.toFixed?.(2) || 0}<br/>
        🌍 Status: {forecast?.status || "UNKNOWN"}<br/>
      </div>

      <div style={{ marginTop: 20, opacity: 0.8 }}>
        This layer simulates future system collapse before execution.
      </div>
    </div>
  );
}
