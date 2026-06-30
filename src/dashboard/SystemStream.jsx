import React, { useEffect, useState } from "react";

export default function SystemStream() {
  const [events, setEvents] = useState([]);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (!window.AfriBus) return;

    const push = (e) => {
      setEvents((prev) => [...prev.slice(-30), e]);
    };

    const updateSummary = () => {
      if (window.AfriMemory) {
        setSummary(window.AfriMemory.summarize());
      }
    };

    window.AfriBus.on("AFRIAI_COMMAND", push);
    window.AfriBus.on("SYSTEM_EVENT", push);

    const interval = setInterval(updateSummary, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      padding: 20,
      background: "#0a0f1a",
      color: "#00ffcc",
      fontFamily: "monospace",
      minHeight: "100vh"
    }}>
      <h2>🧠 AfriDigital Intelligence Stream</h2>

      {summary && (
        <div style={{
          marginBottom: 20,
          border: "1px solid #00ffcc",
          padding: 10
        }}>
          <h3>📊 System Intelligence</h3>
          <pre>{JSON.stringify(summary, null, 2)}</pre>
        </div>
      )}

      <div style={{
        border: "1px solid #00ffcc",
        padding: 10,
        height: "60vh",
        overflow: "auto"
      }}>
        {events.length === 0 && <p>Waiting for intelligence signals...</p>}

        {events.map((e, i) => (
          <div key={i}>
            • [{e.event}] {JSON.stringify(e.data)}
          </div>
        ))}
      </div>
    </div>
  );
}
