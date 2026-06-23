import React, { useEffect, useState } from "react";
import useDAGStream from "../dag/useDAGStream";

export default function CinematicControlRoom() {
  const events = useDAGStream();
  const latest = events[events.length - 1] || {};
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const cpu = latest.cpu || 0;
  const latency = latest.latency || 0;

  const systemState =
    cpu > 80 ? "CRITICAL LOAD" :
    cpu > 50 ? "ELEVATED ACTIVITY" :
    "STABLE OPERATIONS";

  return (
    <div style={{
      background: "#02040a",
      color: "#00ffcc",
      minHeight: "100vh",
      padding: 20,
      fontFamily: "monospace"
    }}>

      {/* 🎬 CINEMATIC HEADER */}
      <div style={{
        borderBottom: "1px solid #00ffcc",
        marginBottom: 20
      }}>
        <h1>🚀 AFRIDIGITAL CONTROL ROOM</h1>
        <p>NASA × AWS × TRADING FLOOR — LIVE INFRASTRUCTURE COMMAND CENTER</p>
        <p>STATUS: {systemState}</p>
      </div>

      {/* 🌐 PULSING CORE VISUAL */}
      <div style={{
        height: 180,
        border: "1px solid #00ffcc",
        marginBottom: 20,
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(circle, rgba(0,255,204,${pulse / 200}) 0%, transparent 70%)`
      }}>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 18
        }}>
          SYSTEM CORE PULSE
        </div>
      </div>

      {/* 📊 LIVE METRICS STRIP */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
        marginBottom: 20
      }}>
        <div style={card(cpu > 80)}>
          CPU LOAD<br />{cpu.toFixed(1)}%
        </div>

        <div style={card(latency > 200)}>
          LATENCY<br />{latency.toFixed(0)}ms
        </div>

        <div style={card(false)}>
          SYSTEM TICK<br />{pulse}
        </div>
      </div>

      {/* 🎥 CINEMATIC EVENT FEED */}
      <div style={{
        border: "1px solid #00ffcc",
        padding: 10,
        height: 200,
        overflow: "auto"
      }}>
        <h3>📡 LIVE SYSTEM STORY STREAM</h3>

        {events.slice(-10).map((e, i) => (
          <div key={i} style={{
            marginBottom: 6,
            padding: 6,
            borderLeft: "2px solid #00ffcc"
          }}>
            <div>EVENT: {e.type || "metric_update"}</div>
            <div>CPU: {e.cpu?.toFixed?.(1) || 0}%</div>
            <div>LATENCY: {e.latency?.toFixed?.(0) || 0}ms</div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>
              TIMELINE NODE ACTIVE
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

function card(alert) {
  return {
    border: "1px solid #00ffcc",
    padding: 10,
    background: alert ? "#2a0000" : "#05070d",
    color: "#00ffcc"
  };
}
