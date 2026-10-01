import React from "react";

const value = (item) => item === null || item === undefined ? "—" : item;

export default function A2AAgentDetail({ agent, onBack }) {
  const m = agent.metrics || {};
  return (
    <section className="a2a-agent-detail">
      <button type="button" className="a2a-agent-back" onClick={onBack}>← AGENT NETWORK</button>
      <div className="a2a-detail-hero">
        <div className="a2a-agent-icon a2a-detail-icon">{agent.icon || "🤖"}</div>
        <div>
          <span className="a2a-kicker">A2A AGENT</span>
          <h2>{agent.name}</h2>
          <p>{agent.description || "—"}</p>
        </div>
        <div className="a2a-detail-badges">
          <strong>{agent.claimStatus || "CLAIM UNKNOWN"}</strong>
          <span>{agent.verification || "VERIFICATION —"}</span>
          <span>{agent.status || "STATUS —"}</span>
        </div>
      </div>
      <div className="a2a-detail-grid">
        <article className="a2a-detail-panel">
          <span>IDENTITY</span>
          <h3>Agent Identity</h3>
          <p>Agent ID: {agent.id}</p>
          <p>Key: {agent.key || "—"}</p>
          <p>Organization: {agent.organization || "—"}</p>
          <p>Status: {agent.status || "—"}</p>
          <p>Claim: {agent.claimStatus || "—"}</p>
          <p>Verification: {agent.verification || "—"}</p>
        </article>
        <article className="a2a-detail-panel">
          <span>CAPABILITIES</span>
          <h3>Registered Capabilities</h3>
          <div className="a2a-detail-capabilities">{(agent.capabilities || []).map((c) => <span key={c}>{c}</span>)}</div>
        </article>
        <article className="a2a-detail-panel">
          <span>ACTIVITY</span>
          <h3>Runtime Behavior</h3>
          <div className="a2a-detail-activity-grid">
            <span>Operations <b>{value(m.operations)}</b></span>
            <span>Active Jobs <b>{value(m.activeJobs)}</b></span>
            <span>Completed <b>{value(m.completedJobs)}</b></span>
            <span>Successful <b>{value(m.successful)}</b></span>
            <span>Unsuccessful <b>{value(m.unsuccessful)}</b></span>
            <span>A2A Calls <b>{value(m.calls)}</b></span>
            <span>Agent Contacts <b>{value(m.contacts)}</b></span>
            <span>Wallet <b>{value(agent.resources?.wallet)}</b></span>
          </div>
        </article>
      </div>
    </section>
  );
}
