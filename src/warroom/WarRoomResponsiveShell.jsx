import React from "react";
import { useSocDeviceMode } from "../soc-os/core/useSocDeviceMode";

import DagWebGLCanvas from "./dag/DagWebGLCanvas";
import AttackReplayPanel from "./replay/AttackReplayPanel";
import SOCConsole from "./terminal/SOCConsole";

export default function WarRoomResponsiveShell({ stream }) {
  const mode = useSocDeviceMode();

  return (
    <div className={mode === "mobile" ? "warroom mobile" : "warroom desktop"}>

      {/* 🔥 DAG ALWAYS CORE */}
      <div className="layer dag">
        <DagWebGLCanvas mode="war-room" realtime />
      </div>

      {/* 🧠 REPLAY */}
      <div className="layer replay">
        <AttackReplayPanel stream={stream} />
      </div>

      {/* 💻 TERMINAL */}
      <div className="layer terminal">
        <SOCConsole />
      </div>

    </div>
  );
}
