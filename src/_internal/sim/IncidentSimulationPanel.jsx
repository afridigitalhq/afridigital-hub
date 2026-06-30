import React from "react";
import { useIncidentSimulation } from "./useIncidentSimulation";

export default function IncidentSimulationPanel({ stream }) {
  const events = useIncidentSimulation(stream);

  return (
    <div className="glass-panel red-glow">
      <h2>🧨 LIVE SOC INCIDENT SIMULATION</h2>

      <div className="event-feed">
        {events.slice(-10).map(e => (
          <div key={e.id} className={`event severity-${e.severity}`}>
            <span>{e.type}</span>
            <span>{e.node}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
