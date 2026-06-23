import React from "react";
import PhysicsDAG from "../dag/PhysicsDAG";
import useDAGStream from "../dag/useDAGStream";

export default function ControlPlaneCockpit() {
  const events = useDAGStream();

  return (
    <div style={{
      background: "#05070d",
      color: "#00ffcc",
      minHeight: "100vh",
      padding: 16,
      fontFamily: "monospace"
    }}>

      {/* HEADER */}
      <div style={{ marginBottom: 20 }}>
        <h2>🧠 AFRIDIGITAL CONTROL PLANE</h2>
        <p>Real-time system observability cockpit</p>
      </div>

      {/* GRID LAYOUT */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 16
      }}>

        {/* LEFT: DAG + PHYSICS ENGINE */}
        <div style={{
          border: "1px solid #00ffcc",
          padding: 10
        }}>
          <h3>💥 DAG Physics System</h3>
          <PhysicsDAG />
        </div>

        {/* RIGHT: LIVE EVENT STREAM */}
        <div style={{
          border: "1px solid #00ffcc",
          padding: 10,
          height: 450,
          overflow: "auto"
        }}>
          <h3>📡 Live Event Stream</h3>

          {events.slice(-20).map((e, i) => (
            <div key={i} style={{
              marginBottom: 6,
              fontSize: 12,
              color: e.cpu > 80 ? "#ff0044" : "#00ffcc"
            }}>
              {JSON.stringify(e)}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER CONTROL PANEL */}
      <div style={{
        marginTop: 16,
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #00ffcc",
        paddingTop: 10
      }}>

        <button style={{
          background: "#ff0044",
          color: "#fff",
          padding: 10,
          border: "none"
        }}>
          🔁 Rollback (Manual)
        </button>

        <div>
          📊 System: LIVE | WS: CONNECTED | DAG: ACTIVE
        </div>
      </div>

    </div>
  );
}
