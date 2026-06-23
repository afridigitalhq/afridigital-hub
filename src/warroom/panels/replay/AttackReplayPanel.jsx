import React from "react";
import { useReplayEngine } from "./useReplayEngine";

export default function AttackReplayPanel({ stream }) {
  const { state, rewind, forward } = useReplayEngine(stream);

  return (
    <div className="glass-panel">
      <h3>🧠 SOC ATTACK REPLAY</h3>

      <div className="controls">
        <button onClick={() => rewind(5)}>⏪ Rewind</button>
        <button onClick={() => forward(5)}>⏩ Forward</button>
      </div>

      <pre className="timeline">
        {JSON.stringify(state.slice(-5), null, 2)}
      </pre>
    </div>
  );
}
