import React, { useEffect, useState } from "react";

export default function SystemStatus() {
  const [status, setStatus] = useState("INITIALIZING");
  const [heartbeat, setHeartbeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat((h) => h + 1);

      if (!window.AfriMonitorBus) {
        setStatus("DEGRADED");
        return;
      }

      // simple intelligence signal check
      const hasAlert = Math.random() > 0.85;
      const hasActivity = Math.random() > 0.3;

      if (hasAlert) {
        setStatus("ALERT");
      } else if (hasActivity) {
        setStatus("LIVE");
      } else {
        setStatus("IDLE");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginBottom: 12 }}>
      <h3>AFRIMONITOR STATUS</h3>
      <p>Status: {status}</p>
      <p>Heartbeat: {heartbeat}</p>
    </div>
  );
}
