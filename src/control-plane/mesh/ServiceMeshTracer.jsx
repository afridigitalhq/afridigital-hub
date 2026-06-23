import React, { useEffect, useState } from "react";
import useDAGStream from "../dag/useDAGStream";

export default function ServiceMeshTracer() {
  const events = useDAGStream();
  const [traces, setTraces] = useState([]);

  useEffect(() => {
    if (!events.length) return;

    const latest = events[events.length - 1];

    const trace = {
      id: Math.random().toString(36).slice(2),
      path: [
        "frontend → gateway",
        "gateway → backend",
        "backend → websocket",
        "websocket → client"
      ],
      latency: latest.latency || 0,
      status: latest.cpu > 80 ? "DEGRADED" : "OK",
      timestamp: Date.now()
    };

    setTraces(prev => [...prev.slice(-30), trace]);
  }, [events]);

  return (
    <div style={{
      border: "1px solid #00ffcc",
      padding: 12,
      marginTop: 10,
      fontFamily: "monospace"
    }}>
      <h3>🌐 SERVICE MESH TRACE VISUALIZER</h3>

      {traces.slice(-10).map((t) => (
        <div key={t.id} style={{
          marginBottom: 8,
          padding: 6,
          borderLeft: t.status === "DEGRADED"
            ? "3px solid red"
            : "3px solid #00ffcc"
        }}>
          <div>TRACE ID: {t.id}</div>
          <div>LATENCY: {t.latency.toFixed(0)}ms</div>
          <div>STATUS: {t.status}</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>
            {t.path.join(" → ")}
          </div>
        </div>
      ))}
    </div>
  );
}
