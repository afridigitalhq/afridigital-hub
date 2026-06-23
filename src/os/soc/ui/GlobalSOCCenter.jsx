import React, { useEffect, useState } from "react";
import { useOSGovernor } from "../../kernel/useOSGovernor";
import AINarratorEngine from "../../narrator/AINarratorEngine";

export default function GlobalSOCCenter() {
  const governor = useOSGovernor();
  const [stream, setStream] = useState([]);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // simulate live DAG → SOC feed
      const event = governor.loop?.getLatest?.() || {
        type: "heartbeat",
        message: "System stable"
      };

      setStream(prev => [event, ...prev].slice(0, 50));

      AINarratorEngine?.speak?.(event.message || "...");
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      height: "100vh",
      background: "#050816",
      color: "#fff"
    }}>

      {/* SIDEBAR */}
      <div style={{ borderRight: "1px solid #1f2937", padding: 10 }}>
        <h3>🧠 SOC MODULES</h3>
        <div>AfriAi</div>
        <div>DAG Live</div>
        <div>WarRoom</div>
        <div>AfriScan</div>
        <div>Incident Replay</div>
      </div>

      {/* MAIN STREAM */}
      <div style={{ padding: 12 }}>
        <h2>🌍 LIVE SOC COMMAND CENTER</h2>

        <div style={{
          marginTop: 10,
          height: "70vh",
          overflowY: "auto",
          border: "1px solid #1f2937",
          padding: 10
        }}>
          {stream.map((e, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              ⚡ {e.type}: {e.message}
            </div>
          ))}
        </div>

        {/* INTERRUPT CONSOLE */}
        <div style={{ marginTop: 10 }}>
          <input
            placeholder="Admin interrupt command..."
            style={{ width: "100%", padding: 10 }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                governor.interrupt(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
