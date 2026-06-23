import { OSEventBridge } from "./bridge/osEventBridge";
import React, { useState } from "react";
import DagWebGLCanvas from "../warroom/dag/DagWebGLCanvas";
import AttackReplayPanel from "../warroom/replay/AttackReplayPanel";
import SOCConsole from "../warroom/terminal/SOCConsole";

export default function WarRoomOS({ stream }) {
  const [panicMode, setPanicMode] = useState(false);

  return (
    <div className={`warroom-os ${panicMode ? "panic" : ""}`}>

      {/* GPU BACKGROUND LAYER */}
      <DagWebGLCanvas mode="war-room" realtime />

      {/* TOP COMMAND BAR */}
      <div className="os-topbar">
        <button onClick={() => setPanicMode(!panicMode)}>
          🔥 PANIC MODE
        </button>
      </div>

      {/* DRAGGABLE WINDOWS LAYER */}
      <div className="os-windows">

        <div className="window">
          <AttackReplayPanel stream={stream} />
        </div>

        <div className="window terminal">
          <SOCConsole />
        </div>

      </div>
    </div>
  );
}
