import React from "react";
import { analyzeSOC } from "./SOCAnalystAgent";

export default function SOCAnalystPanel({ latestEvent }) {
  return (
    <div style={{
      padding: 12,
      background: "#0a0f1c",
      color: "#fff",
      borderLeft: "2px solid #1f2937"
    }}>
      <h3>🤖 AI SOC Analyst</h3>
      <p>{analyzeSOC(latestEvent)}</p>
    </div>
  );
}
