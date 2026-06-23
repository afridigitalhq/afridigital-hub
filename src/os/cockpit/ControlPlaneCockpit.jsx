
import React, { useEffect, useState } from "react";

/**
 * CONTROL PLANE OS COCKPIT UI
 * Read-only real-time dashboard shell
 */

export default function ControlPlaneCockpit({ socket }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      setState(data.payload);
    };
  }, [socket]);

  if (!state) return <div>Loading Control Plane...</div>;

  return (
    <div className="cockpit">
      <h1>🧭 Control Plane OS</h1>

      <section>
        <h2>Live System</h2>
        <pre>{JSON.stringify(state.live, null, 2)}</pre>
      </section>

      <section>
        <h2>History</h2>
        <pre>{JSON.stringify(state.history?.slice(-10), null, 2)}</pre>
      </section>

      <section>
        <h2>Forecast</h2>
        <pre>{JSON.stringify(state.predictions, null, 2)}</pre>
      </section>

      <section>
        <h2>Safety Layer</h2>
        <pre>{JSON.stringify(state.safety, null, 2)}</pre>
      </section>

      <section>
        <h2>Causality Graph</h2>
        <pre>{JSON.stringify(state.causality, null, 2)}</pre>
      </section>

      <section>
        <h2>Forensic Autopsy</h2>
        <pre>{JSON.stringify(state.forensic, null, 2)}</pre>
      </section>
    </div>
  );
}
