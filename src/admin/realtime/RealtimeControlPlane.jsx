import React, { useEffect, useState } from "react";
import DevOpsWSClient from "../ws/DevOpsWSClient";
import { getSystemSnapshot } from "../metrics/RealtimeMetrics";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    DevOpsWSClient.connect();

    DevOpsWSClient.subscribe((data) => {
      setEvents((prev) => [data, ...prev.slice(0, 30)]);
    });

    const interval = setInterval(() => {
      setEvents((prev) => [getSystemSnapshot(), ...prev.slice(0, 30)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      padding: 20,
      fontFamily: "monospace",
      background: "#0a0a0a",
      color: "#00ffcc",
      minHeight: "100vh"
    }}>
      <h2>🔴 REAL-TIME DEVOPS CONTROL PLANE</h2>
      <p>Live System Stream:</p>

      <div style={{ marginTop: 20 }}>
        {events.map((e, i) => (
          <pre key={i} style={{ fontSize: 12 }}>
            {JSON.stringify(e, null, 2)}
          </pre>
        ))}
      </div>
    </div>
  );
}
