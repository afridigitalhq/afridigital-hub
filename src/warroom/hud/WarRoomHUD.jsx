import React, { useEffect, useState } from "react";
import { WarRoomStateEngine } from "../state/WarRoomStateEngine";
import AttackReplayPanel from "../replay/AttackReplayPanel";
import DagWebGLCanvas from "../../warroom/dag/DagWebGLCanvas";

const engine = new WarRoomStateEngine();

export default function WarRoomHUD({ stream }) {
  const [state, setState] = useState(engine.getState());

  useEffect(() => {
    const unsub = engine.subscribe(setState);
    return () => unsub();
  }, []);

  useEffect(() => {
    if (stream) {
      engine.dispatch({ type: "REPLAY_PUSH", payload: stream });
    }
  }, [stream]);

  return (
    <div className={state.panic ? "warroom panic" : "warroom"}>

      {/* LEFT: COMMAND RAIL */}
      <div className="rail">
        <h3>🧭 COMMAND LAYER</h3>
        <button onClick={() =>
          engine.dispatch({ type: "PANIC_MODE", payload: { active: !state.panic } })
        }>
          🔥 Panic Mode
        </button>

        <button onClick={() =>
          engine.dispatch({ type: "SCRUB", payload: { index: state.scrub + 1 } })
        }>
          ⏩ Scrub
        </button>
      </div>

      {/* CENTER: WEBGL DAG */}
      <div className="dag">
        <DagWebGLCanvas mode="war-room" realtime />
      </div>

      {/* RIGHT: FORECAST + REPLAY */}
      <div className="side">
        <h3>📡 LIVE SOC STATE</h3>

        <pre>{JSON.stringify(state.forecast, null, 2)}</pre>

        <AttackReplayPanel stream={state.replay} />
      </div>

    </div>
  );
}
