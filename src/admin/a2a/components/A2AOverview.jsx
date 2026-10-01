import React from "react";
import A2AAgentRegistry from "../registry/A2AAgentRegistry";

export default function A2AOverview({ telemetry }) {
  const stats = telemetry?.stats || {};
  const registeredAgents =
    telemetry?.agents?.length ?? A2AAgentRegistry.list().length;

  const items = [
    ["Registered Agents", registeredAgents, "Live agent registry"],
    ["Customers", null, "Customer telemetry not yet connected"],
    ["Active Requests", stats.processing ?? 0, "Currently processing"],
    ["Completed Tasks", stats.completed ?? 0, "Completed A2A operations"],
    ["A2A Calls", stats.a2aCalls ?? 0, "Recorded A2A operations"],
    ["Agent Contacts", null, "Calculated per agent"]
  ];

  return (
    <section className="a2a-section">
      <div className="a2a-section-heading">
        <div>
          <span>PLATFORM OVERVIEW</span>
          <h2>A2A Network</h2>
        </div>
        <small>LIVE PLATFORM TOTALS</small>
      </div>

      <div className="a2a-overview-grid">
        {items.map(([label, value, description]) => (
          <article className="a2a-stat-card" key={label}>
            <span>{label}</span>
            <strong>{value === null ? "—" : value}</strong>
            <small>{description}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
