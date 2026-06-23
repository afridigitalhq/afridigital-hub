import React, { useEffect, useState } from "react";
import useDAGStream from "../dag/useDAGStream";

export default function ServiceTopologyMap() {
  const events = useDAGStream();
  const [nodes, setNodes] = useState({
    frontend: { cpu: 0, latency: 0 },
    backend: { cpu: 0, latency: 0 },
    websocket: { cpu: 0, latency: 0 },
    database: { cpu: 0, latency: 0 }
  });

  useEffect(() => {
    if (!events.length) return;

    const latest = events[events.length - 1];

    setNodes(prev => ({
      frontend: {
        cpu: latest.cpu || 0,
        latency: latest.latency || 0
      },
      backend: {
        cpu: (latest.cpu || 0) * 0.9,
        latency: (latest.latency || 0) * 1.1
      },
      websocket: {
        cpu: (latest.cpu || 0) * 0.6,
        latency: (latest.latency || 0) * 0.8
      },
      database: {
        cpu: (latest.cpu || 0) * 0.7,
        latency: (latest.latency || 0) * 1.3
      }
    }));
  }, [events]);

  const nodeStyle = (label, data) => ({
    border: "1px solid #00ffcc",
    padding: 12,
    margin: 10,
    borderRadius: 6,
    background:
      data.cpu > 80 ? "#2a0000" :
      data.cpu > 50 ? "#1a1a00" : "#05070d",
    color: "#00ffcc"
  });

  return (
    <div style={{ padding: 10 }}>
      <h3>🌐 SERVICE TOPOLOGY MAP</h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }}>

        {Object.entries(nodes).map(([key, value]) => (
          <div key={key} style={nodeStyle(key, value)}>
            <h4>🧩 {key.toUpperCase()}</h4>
            <p>CPU: {value.cpu.toFixed(1)}%</p>
            <p>LATENCY: {value.latency.toFixed(0)}ms</p>
          </div>
        ))}

      </div>
    </div>
  );
}
