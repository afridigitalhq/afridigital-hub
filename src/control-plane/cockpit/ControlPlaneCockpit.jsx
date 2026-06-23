import React, { useEffect, useState } from "react";

/**
 * CONTROL PLANE COCKPIT
 * Read-only real-time kernel visualization shell
 */

  const [state, setState] = useState(null);

  useEffect(() => {

    ws.onmessage = (msg) => {
      try {
        setState(JSON.parse(msg.data));
      } catch (e) {}
    };

    return () => ws.close();
  }, []);

  if (!state) return <div>Loading Control Plane...</div>;

  return (
    <div style={{ padding: 20, fontFamily: "monospace" }}>
      <h2>🧭 Control Plane Cockpit</h2>

      <section>
        <h3>System</h3>
        <pre>{JSON.stringify(state.system, null, 2)}</pre>
      </section>

      <section>
        <h3>Events</h3>
        <pre>{JSON.stringify(state.events, null, 2)}</pre>
      </section>

      <section>
        <h3>Telemetry</h3>
        <pre>{JSON.stringify(state.telemetry, null, 2)}</pre>
      </section>

      <section>
        <h3>Replay</h3>
        <pre>{JSON.stringify(state.replay, null, 2)}</pre>
      </section>
    </div>
  );
}
