import React, { useState } from "react";
import PhysicsDAG from "../dag/PhysicsDAG";
import useDAGStream from "../dag/useDAGStream";

export default function DevOpsTradingFloor() {
  const events = useDAGStream();
  const [layout, setLayout] = useState("grid");

  return (
    <div style={{
      background: "#02040a",
      color: "#00ffcc",
      minHeight: "100vh",
      fontFamily: "monospace"
    }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 12,
        borderBottom: "1px solid #00ffcc"
      }}>
        <h2>📊 DEVOPS TRADING FLOOR</h2>

        <div>
          <button onClick={() => setLayout("grid")}>Grid</button>
          <button onClick={() => setLayout("focus")}>Focus</button>
        </div>
      </div>

      {/* MAIN FLOOR */}
      <div style={{
        display: layout === "grid" ? "grid" : "block",
        gridTemplateColumns: "2fr 1fr",
        gap: 12,
        padding: 12
      }}>

        {/* PANEL 1: DAG SYSTEM */}
        <div style={{
          border: "1px solid #00ffcc",
          padding: 10,
          height: 420
        }}>
          <h3>🧠 System DAG (Live Physics)</h3>
          <PhysicsDAG />
        </div>

        {/* PANEL 2: LIVE METRICS TICKER */}
        <div style={{
          border: "1px solid #00ffcc",
          padding: 10,
          height: 420,
          overflow: "auto"
        }}>
          <h3>📡 Metrics Feed</h3>

          {events.slice(-30).map((e, i) => (
            <div key={i} style={{
              fontSize: 11,
              marginBottom: 4,
              color: e.cpu > 80 ? "#ff0044" : "#00ffcc"
            }}>
              CPU:{e.cpu?.toFixed(1)}% |
              LAT:{e.latency?.toFixed(0)}ms |
              MEM:{e.memory?.toFixed(1)}%
            </div>
          ))}
        </div>

        {/* PANEL 3: ALERT TERMINAL */}
        <div style={{
          border: "1px solid #ff0044",
          padding: 10,
          marginTop: 12
        }}>
          <h3>🔴 Alert System</h3>

          {events.filter(e => e.cpu > 75).slice(-10).map((e, i) => (
            <div key={i} style={{ color: "#ff0044", fontSize: 12 }}>
              ⚠ High CPU detected: {e.cpu.toFixed(1)}%
            </div>
          ))}
        </div>

        {/* PANEL 4: CONTROL PANEL */}
        <div style={{
          border: "1px solid #00ffcc",
          padding: 10,
          marginTop: 12,
          display: "flex",
          justifyContent: "space-between"
        }}>
          <button style={{
            background: "#ff0044",
            color: "#fff",
            padding: 10
          }}>
            🔁 Trigger Rollback
          </button>

          <button style={{
            background: "#00ffcc",
            color: "#000",
            padding: 10
          }}>
            🚀 Deploy Latest
          </button>

          <span>STATUS: LIVE</span>
        </div>

      </div>
    </div>
  );
}
