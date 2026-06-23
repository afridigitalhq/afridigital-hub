import React, { useEffect, useState } from "react";

export default function ClusterHUD({ engine }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    const loop = () => {
      const snapshot = engine.tick();
      setState(snapshot);
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  if (!state) return null;

  return (
    <div className="cluster-hud">
      <h3>🧠 Distributed DAG Nodes: {state.nodes.length}</h3>
      <h3>🌐 Timeline Events: {state.time}</h3>
      <h3>⚡ Cluster Sync ACTIVE</h3>
    </div>
  );
}
