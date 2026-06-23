import React from "react";
import { useDagStream } from "../hooks/useDagStream";

export default function LiveDAGHUD() {
  const events = useDagStream();

  return (
    <div style={{ padding: 20, color: "#0ff", background: "#05010a" }}>
      <h2>🧠 LIVE DAG HUD (OBSERVABILITY MODE)</h2>

      <div>
        🔥 Event Stream: {events.length}
      </div>

      <div style={{ marginTop: 20 }}>
        {events.slice(-10).map((e, i) => (
          <div key={i} style={{ opacity: 0.8 }}>
            ▸ {e.type || "event"} → {e.source || "unknown"}
          </div>
        ))}
      </div>
    </div>
  );
}
