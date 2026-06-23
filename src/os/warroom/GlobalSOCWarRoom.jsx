import React, { useEffect, useState } from "react";

export default function GlobalSOCWarRoom({ spine }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!spine) return;

    spine.subscribe((e) => {
      setEvents(prev => [e, ...prev].slice(0, 50));
    });
  }, [spine]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "100vh", background: "#050816", color: "#fff" }}>
      <div style={{ padding: 10 }}>
        <h3>🧠 SOC STREAM</h3>
        {events.map((e, i) => (
          <div key={i}>{JSON.stringify(e)}</div>
        ))}
      </div>

      <div style={{ padding: 10 }}>
        <h3>🔴 COMMAND PANEL</h3>
        <div>Spine: ACTIVE</div>
        <div>Interrupt: ENABLED</div>
        <div>Narrator: READY</div>
        <div>DAG: CONNECTED</div>
      </div>
    </div>
  );
}
