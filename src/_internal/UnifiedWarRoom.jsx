import React from "react";
import DagWebGLCanvas from "./dag/DagWebGLCanvas";
import AttackReplayPanel from "./replay/AttackReplayPanel";
import { useWarRoomHUD } from "./hud/useWarRoomHUD";
import useAfriStream from "../core/reactive/useAfriStream";

export default function UnifiedWarRoom({ stream }) {
  const hud = useWarRoomHUD({ stream });

  const lastCommand = useAfriStream("AFRIAI_COMMAND");

  return (
    <div className="warroom-root" style={{padding:20}}>
      <h2>🌐 Unified War Room (REACTIVE MODE)</h2>

      {hud.state.panicMode && (
        <div>🚨 PANIC MODE ACTIVE</div>
      )}

      {lastCommand && (
        <div style={{color:"#ffcc00"}}>
          🧠 Latest Command: {JSON.stringify(lastCommand.data)}
        </div>
      )}

      <DagWebGLCanvas />
      <AttackReplayPanel stream={stream} />

      <div style={{marginTop:20}}>
        <button onClick={hud.panic}>Panic</button>
        <button onClick={hud.scrub}>Scrub</button>
        <button onClick={hud.cinematic}>Cinematic</button>
        <button onClick={hud.archive}>Archive</button>
      </div>
    </div>
  );
}
