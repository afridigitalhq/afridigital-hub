import React, { useEffect, useState } from "react";
import { socDashboardBrain } from "afridigital-api/control-room/dashboard-brain/SOCDashboardBrain.js";

export default function SOCWarRoom() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const snapshot = socDashboardBrain.snapshot();
      setState(snapshot);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!state) return <div style={{ color: "#00ffcc", background: "#0b0f14", padding: 20 }}>Loading SOC War Room...</div>;

  return (
    <div style={{ background: "#05070a", color: "#00ffcc", minHeight: "100vh", padding: 20 }}>
      <h1>🧠 SOC LIVE COMMAND WAR ROOM</h1>

      <div>
        <h2>System Overview</h2>
        <p>Threat Level: {state.systemOverview.threatLevel}</p>
        <p>Mode: {state.systemOverview.mode}</p>
        <p>Stability: {state.systemOverview.stability}</p>
      </div>

      <div>
        <h2>Live Decisions</h2>
        <pre>{JSON.stringify(state.liveDecision, null, 2)}</pre>
      </div>

      <div>
        <h2>Reasoning Flow</h2>
        <pre>{JSON.stringify(state.reasoningFlow, null, 2)}</pre>
      </div>

      <div>
        <h2>Causal Summary</h2>
        <pre>{JSON.stringify(state.causalSummary, null, 2)}</pre>
      </div>

      <div>
        <h2>Memory Snapshot</h2>
        <pre>{JSON.stringify(state.memorySnapshot, null, 2)}</pre>
      </div>

      <div>
        <h2>Health Indicators</h2>
        <pre>{JSON.stringify(state.healthIndicators, null, 2)}</pre>
      </div>
    </div>
  );
}
