import WS from "../config/ws"
import PhysicsDAG from "./dag/PhysicsDAG";
import React, { useEffect, useState } from "react";

export default function ControlPlaneUI() {
  const [metrics, setMetrics] = useState([]);
  const [status, setStatus] = useState("LIVE");

  useEffect(() => {
    const ws = new WebSocket(WS.base);

    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data);
        setMetrics((prev) => [...prev.slice(-20), data]);
      } catch (e) {}
    };

    ws.onerror = () => setStatus("DISCONNECTED");

    return () => ws.close();
  }, []);

  return (
    <div style={{
      padding: 20,
      color: "#00ffcc",
      fontFamily: "monospace",
      background: "#0a0f1a",
      minHeight: "100vh"
    }}>
      
      <h2>🧠 AFRIDIGITAL CONTROL PLANE</h2>
      <p>Status: {status}</p>

      {/* DAG VIEW PLACEHOLDER */}
      <div style={{
        border: "1px solid #00ffcc",
        padding: 10,
        marginBottom: 20
      }}>
        🧩 DAG GRAPH (React Flow goes here)
      </div>

      {/* METRICS STREAM */}
      <div style={{
        border: "1px solid #00ffcc",
        padding: 10,
        marginBottom: 20,
        height: 200,
        overflow: "auto"
      }}>
        <h4>📊 Live Metrics Stream</h4>
        {metrics.map((m, i) => (
          <div key={i}>• {JSON.stringify(m)}</div>
        ))}
      </div>

      {/* ROLLBACK BUTTON (MANUAL ONLY) */}
      <button style={{
        padding: 10,
        background: "#ff0044",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}>
        🔁 Trigger Rollback (Manual)
      </button>

    </div>
  );
}
