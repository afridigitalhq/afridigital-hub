import React, { useEffect, useState } from "react";
import { socDashboardAPI } from "afridigital-api/control-room/dashboard/SOCDashboardAPI.js";

export default function IncidentWall() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const snapshot = useSOCSnapshot();

      const incidents = (snapshot.recentEvents || []).map((e, i) => ({
        id: e.id || i,
        type: e.type || "UNKNOWN",
        severity: Math.random() > 0.7 ? "HIGH" : "LOW",
        timestamp: e.timestamp
      }));

      setState({
        systemStatus: snapshot.systemStatus,
        activeLoad: snapshot.activeLoad,
        incidents
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!state) return <div>Loading Incident Wall...</div>;

  return (
    <div style={{ background: "#05070a", color: "#00ffcc", padding: 20 }}>
      <h2>🧠 SOC INCIDENT WALL</h2>

      <p>Status: {state.systemStatus}</p>
      <p>Active Load: {state.activeLoad}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {state.incidents.map((inc) => (
          <div key={inc.id} style={{ border: "1px solid #00ffcc", padding: 10 }}>
            <p><b>{inc.type}</b></p>
            <p>Severity: {inc.severity}</p>
            <p>{new Date(inc.timestamp).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
