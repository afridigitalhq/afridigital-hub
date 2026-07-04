import React, { useEffect, useState } from "react";
import { socDashboardAPI } from "afridigital-api/control-room/dashboard/SOCDashboardAPI.js";
import { socRBAC } from "afridigital-api/control-room/security/SOCRBAC.js";

export default function ControlRoomUI({ userId }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const raw = useSOCSnapshot();
      const filtered = socRBAC.filterDashboardData(userId, raw);
      setState(filtered);
    }, 2000);

    return () => clearInterval(interval);
  }, [userId]);

  if (!state) return <div>Loading Control Room...</div>;

  return (
    <div style={{ padding: 20, background: "#0b0f14", color: "#00ffcc" }}>
      <h2>AFRIMONITOR CONTROL ROOM</h2>

      <div>
        <h3>Status: {state.systemStatus}</h3>
        <p>Active Load: {state.activeLoad}</p>
      </div>

      <div>
        <h3>Metrics</h3>
        <pre>{JSON.stringify(state.metrics, null, 2)}</pre>
      </div>

      <div>
        <h3>Recent Events</h3>
        <pre>{JSON.stringify(state.recentEvents?.slice(-5), null, 2)}</pre>
      </div>
    </div>
  );
}
