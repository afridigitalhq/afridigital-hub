import React from "react";

export default function SOCStartMenu({ open }) {
  if (!open) return null;

  return (
    <div className="soc-start-menu glass">
      <input placeholder="Search SOC apps..." />
      <div className="grid">
        <div>War Room</div>
        <div>DAG Engine</div>
        <div>Incidents</div>
        <div>Replay</div>
      </div>
    </div>
  );
}
