import React, { useEffect, useState } from "react";
import { initWarRoomHUD } from "./AfriDigitalWarRoomHUD";

const bus = initWarRoomHUD();

export default function UnifiedWarRoomHUD({ stream }) {
  const [state, setState] = useState(bus.getState());

  useEffect(() => {
    bus.on("STATE_CHANGE", setState);
  }, []);

  return (
    <div className={`warroom ${state.mode}`}>

      {/* LEFT COMMAND RAIL */}
      <div className="command-rail">
        <button onClick={() => bus.dispatch("PANIC_MODE")}>🔥 Panic</button>
        <button onClick={() => bus.dispatch("REPLAY_MODE")}>⏪ Replay</button>
        <button onClick={() => bus.dispatch("SCRUBBER_MODE")}>🧿 Scrub</button>
        <button onClick={() => bus.dispatch("ARCHIVE_MODE")}>📦 Archive</button>
      </div>

      {/* MAIN DAG WEBGL SURFACE */}
      <div className="dag-layer">
        <h2>🌐 Live DAG Engine</h2>
      </div>

      {/* FORECAST GLASS PANEL */}
      <div className="glass-panel">
        <h3>🧠 AI Forecast</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>

      {/* PANIC OVERLAY */}
      {state.mode === "PANIC" && (
        <div className="panic-overlay">
          🚨 SOC PANIC MODE ACTIVE 🚨
        </div>
      )}

    </div>
  );
}
