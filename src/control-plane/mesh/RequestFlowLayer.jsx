import React from "react";
import useDAGStream from "../dag/useDAGStream";

export default function RequestFlowLayer() {
  const events = useDAGStream();

  const flowIntensity = events.length % 10;

  return (
    <div style={{
      border: "1px solid #00ffcc",
      padding: 12,
      marginTop: 10
    }}>
      <h3>🔁 REQUEST FLOW INTELLIGENCE</h3>

      <div style={{
        height: 10,
        background: "#111",
        marginTop: 10,
        position: "relative"
      }}>
        <div style={{
          width: `${flowIntensity * 10}%`,
          height: "100%",
          background: flowIntensity > 7 ? "red" : "#00ffcc",
          transition: "0.3s"
        }} />
      </div>

      <p style={{ fontSize: 12 }}>
        Flow Pressure: {flowIntensity}/10
      </p>
    </div>
  );
}
