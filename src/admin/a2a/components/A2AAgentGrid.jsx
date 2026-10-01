import React from "react";
import A2AAgentCard from "./A2AAgentCard";
import A2AAgentDetail from "./A2AAgentDetail";
import A2AAgentRegistry from "../registry/A2AAgentRegistry";

function mergeAgent(agent, telemetryAgent) {
  if (!telemetryAgent) return agent;

  const s = telemetryAgent.stats || {};

  return {
    ...agent,
    organization: telemetryAgent.organizationId || agent.organization,
    metrics: {
      ...(agent.metrics || {}),
      operations: s.operations,
      activeJobs: s.processing,
      completedJobs: s.completed,
      successful: s.successful,
      unsuccessful: s.failed,
      calls: s.a2aCalls,
      contacts: s.agentContacts,
      incoming: s.incoming,
      outgoing: s.outgoing,
      processing: s.processing,
      failed: s.failed,
      units: s.units,
      cost: s.cost
    }
  };
}

export default function A2AAgentGrid({ telemetry }) {
  const [selectedId, setSelectedId] = React.useState(null);

  const registryAgents = A2AAgentRegistry.list();
  const telemetryAgents = telemetry?.agents;

  const sourceAgents =
    Array.isArray(telemetryAgents) && telemetryAgents.length
      ? telemetryAgents
      : registryAgents;

  const agents = sourceAgents.map(agentSource => {
    const telemetryAgent = Array.isArray(telemetryAgents)
      ? telemetryAgents.find(agent => agent.id === agentSource.id)
      : null;

    const registryAgent =
      registryAgents.find(agent => agent.id === agentSource.id) || {};

    return mergeAgent(
      {
        ...registryAgent,
        id: agentSource.id,
        key: agentSource.key || registryAgent.key,
        name: agentSource.name || registryAgent.name,
        organization:
          agentSource.organizationId || registryAgent.organization,
      },
      telemetryAgent
    );
  });

  const selectedAgent =
    selectedId
      ? agents.find(agent => agent.id === selectedId) || null
      : null;

  if (selectedAgent) {
    return (
      <section className="a2a-section">
        <A2AAgentDetail
          agent={selectedAgent}
          onBack={() => setSelectedId(null)}
        />
      </section>
    );
  }

  return (
    <section className="a2a-section">
      <div className="a2a-section-heading">
        <div>
          <span>AGENT NETWORK</span>
          <h2>Registered Agents</h2>
        </div>
        <small>{agents.length} AGENTS REGISTERED</small>
      </div>

      <div className="a2a-agent-scroll">
        <div className="a2a-agent-list">
          {agents.map(agent => (
            <A2AAgentCard
              key={agent.id}
              agent={agent}
              onOpen={setSelectedId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
