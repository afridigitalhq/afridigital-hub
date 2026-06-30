import React, { useState } from "react";

export default function SOCActionCenter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="soc-action-center">
      <button onClick={() => setOpen(!open)}>
        🔔 SOC Alerts
      </button>

      {open && (
        <div className="panel glass">
          <h4>System Alerts</h4>
          <p>• DAG anomaly detected</p>
          <p>• Replay buffer active</p>
          <p>• SOC stream stable</p>
        </div>
      )}
    </div>
  );
}
