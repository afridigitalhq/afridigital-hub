import React from "react";
import DagWebGLCanvas from "./dag/DagWebGLCanvas";
import AttackReplayPanel from "./replay/AttackReplayPanel";
import { useWarRoomHUD } from "./hud/useWarRoomHUD";

export default function UnifiedWarRoom({ stream }) {

  const hud = useWarRoomHUD({
    dag: window.dagEngine,
    replay: window.replayEngine,
    stream,
    ui: window.uiBridge
  });

  return (
    <div className="warroom-root">

      {/* 🌐 WEBGL DAG LAYER */}
      <DagWebGLCanvas mode="war" />

      {/* 🧠 FORECAST + REPLAY LAYER */}
      <div className="hud-layer">

        {/* 🧠 PANIC MODE OVERLAY */}
        {hud.state.panicMode && (
          <div className="panic-overlay">🚨 PANIC MODE ACTIVE</div>
        )}

        {/* 🔁 ATTACK REPLAY */}
        <AttackReplayPanel stream={stream} />

        {/* 🧿 CONTROL DOCK */}
        <div className="control-dock">
          <button onClick={hud.panic}>Panic</button>
          <button onClick={hud.scrub}>Scrub</button>
          <button onClick={hud.cinematic}>Cinematic</button>
          <button onClick={hud.archive}>Archive</button>
        </div>

      </div>

    </div>
  );
}
