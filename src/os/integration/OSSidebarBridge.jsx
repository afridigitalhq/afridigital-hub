import React, { useEffect, useState } from "react";

export default function OSShellSidebar({ os }) {
  const [dashboards, setDashboards] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!os) return;

    // initial snapshot
    setDashboards(os.snapshot().dashboards);
    setActive(os.snapshot().active);

    // subscribe to OS updates
    const unsubscribe = os.subscribe((event) => {
      const snap = os.snapshot();
      setDashboards(snap.dashboards);
      setActive(snap.active);
    });

    return () => unsubscribe();
  }, [os]);

  return (
    <div style={{
      width: 260,
      height: "100vh",
      background: "#0a0f1c",
      color: "#fff",
      padding: 10,
      borderRight: "1px solid #1f2937"
    }}>
      <h3>🧠 AfriDigital OS</h3>

      {dashboards.map((id) => (
        <div
          key={id}
          onClick={() => os.activate(id)}
          style={{
            padding: 10,
            margin: 6,
            cursor: "pointer",
            background: active === id ? "#1f2937" : "#111827",
            borderLeft: active === id ? "3px solid #38bdf8" : "none"
          }}
        >
          ⚡ {id}
        </div>
      ))}
    </div>
  );
}
