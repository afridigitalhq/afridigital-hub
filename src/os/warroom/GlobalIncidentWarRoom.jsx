import React, { useEffect, useState } from "react";

export default function GlobalIncidentWarRoom({ os, dag, events = [] }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!os) return;

    const unsub = os.subscribe((e) => {
      setActive(e);
    });

    return () => unsub();
  }, [os]);

  const snapshot = os?.snapshot?.() || { dashboards: [], active: null };

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "#050816",
      color: "#fff",
      display: "grid",
      gridTemplateColumns: "280px 1fr 320px"
    }}>

      {/* LEFT PANEL — SYSTEM STATUS */}
      <div style={{ padding: 10, borderRight: "1px solid #1f2937" }}>
        <h3>🌍 SYSTEM NODES</h3>

        {snapshot.dashboards.map((d) => (
          <div key={d} style={{
            padding: 8,
            margin: 6,
            background: snapshot.active === d ? "#1f2937" : "#0f172a",
            borderLeft: snapshot.active === d ? "3px solid #38bdf8" : "none"
          }}>
            ⚡ {d}
          </div>
        ))}
      </div>

      {/* CENTER — LIVE INCIDENT MAP */}
      <div style={{
        padding: 10,
        position: "relative"
      }}>
        <h2>🔥 GLOBAL INCIDENT MAP</h2>

        <div style={{
          marginTop: 20,
          padding: 20,
          border: "1px solid #1f2937",
          minHeight: "70vh",
          position: "relative",
          overflow: "hidden"
        }}>

          {/* INCIDENT STREAM VISUALIZATION */}
          {events.slice(-20).map((e, i) => (
            <div key={i} style={{
              padding: 6,
              margin: 4,
              background:
                e.type === "SECURITY_ALERT" ? "#7f1d1d" :
                e.type === "AI_EVENT" ? "#1e3a8a" :
                e.type === "SYSTEM_EVENT" ? "#14532d" :
                "#111827",
              borderRadius: 6,
              opacity: 0.9
            }}>
              {e.type} → {JSON.stringify(e.payload || {}).slice(0, 80)}
            </div>
          ))}

        </div>
      </div>

      {/* RIGHT PANEL — INCIDENT INTELLIGENCE */}
      <div style={{ padding: 10, borderLeft: "1px solid #1f2937" }}>
        <h3>🧠 INCIDENT INTELLIGENCE</h3>

        <div style={{
          padding: 10,
          background: "#0f172a",
          borderRadius: 6
        }}>
          <p><b>Active Dashboard:</b> {snapshot.active || "none"}</p>
          <p><b>Event Type:</b> {active?.type || "idle"}</p>
        </div>

        <div style={{ marginTop: 20, fontSize: 12, opacity: 0.7 }}>
          System is monitoring cross-layer dependencies in real time.
        </div>
      </div>

    </div>
  );
}
