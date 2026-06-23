import React from "react";
import { useDeployRequests } from "./useDeployRequests";
import { useCIGate } from "../useCIGate";

export default function CIDashboard() {
  const gate = useCIGate();
  const requests = useDeployRequests();

  return (
    <div style={{ padding: 20, color: "#0ff", fontFamily: "monospace" }}>
      <h2>🧠 CI CONTROL PLANE</h2>

      <h3>🚦 Deploy Status</h3>
      <pre>{JSON.stringify(gate, null, 2)}</pre>

      <h3>📡 Deploy Requests</h3>
      {requests.map(r => (
        <div key={r.id} style={{ marginBottom: 10 }}>
          <div>ID: {r.id}</div>
          <div>Source: {r.source}</div>
          <div>Reason: {r.reason}</div>
          <div>Status: {r.status}</div>
        </div>
      ))}
    </div>
  );
}
