import React from "react";

const value = (item) => item === null || item === undefined ? "—" : item;

export default function A2AAgentCard({ agent, onOpen }) {
  const m = agent.metrics || {};
  return (
    <article className="a2a-agent-card">
      <div className="a2a-agent-card-top">
        <div className="a2a-agent-icon">{agent.icon || "🤖"}</div>
        <div className="a2a-agent-identity">
          <div className="a2a-agent-name-line">
            <h3>{agent.name}</h3>
            <span className={`a2a-agent-status a2a-agent-status-${String(agent.status || "UNKNOWN").toLowerCase()}`}>{agent.status || "UNKNOWN"}</span>
          </div>
          <span>{agent.organization || "—"}</span>
        </div>
        <span className={`a2a-claim-badge ${agent.claimStatus ? "is-known" : "is-unknown"}`}>{agent.claimStatus || "CLAIM UNKNOWN"}</span>
      </div>
      <div className="a2a-agent-primary">
        <div><span>PRIMARY CAPABILITY</span><strong>{agent.capabilities?.[0] || "—"}</strong></div>
        <div><span>VERIFICATION</span><strong>{agent.verification || "—"}</strong></div>
      </div>
      <div className="a2a-agent-metrics">
        <span>Operations <b>{value(m.operations)}</b></span>
        <span>Active Jobs <b>{value(m.activeJobs)}</b></span>
        <span>Completed <b>{value(m.completedJobs)}</b></span>
        <span>A2A Calls <b>{value(m.calls)}</b></span>
        <span>Contacts <b>{value(m.contacts)}</b></span>
        <span>Wallet <b>{value(agent.resources?.wallet)}</b></span>
      </div>
      <button type="button" className="a2a-agent-view" onClick={() => onOpen?.(agent.id)}>VIEW AGENT <span>→</span></button>
    </article>
  );
}
