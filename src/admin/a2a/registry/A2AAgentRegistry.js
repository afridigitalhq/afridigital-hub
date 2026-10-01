const A2AAgentRegistry = {
  agents: [
    {
      id: "AGENT-AFRIDEBUG-001",
      key: "afridebug",
      name: "AfriDebug",
      icon: "🐛",
      organization: "AfriDigital",
      status: "ACTIVE",
      claimStatus: "CLAIMED",
      verification: "GITHUB VERIFIED",
      capabilities: ["debug.analyze"],
      description: "AfriDigital software investigation agent for structured repository and runtime root-cause analysis.",
      metrics: { operations: null, activeJobs: null, completedJobs: null, successful: null, unsuccessful: null, calls: null, contacts: null },
      resources: { wallet: null }
    },
    {
      id: "AGENT-BETA-001",
      key: "afriai",
      name: "AfriAI",
      icon: "🧠",
      organization: "AfriDigital",
      status: "ACTIVE",
      claimStatus: null,
      verification: null,
      capabilities: ["afriai.ask"],
      description: "AfriDigital AI agent providing authenticated AI-agent assistance.",
      metrics: { operations: null, activeJobs: null, completedJobs: null, successful: null, unsuccessful: null, calls: null, contacts: null },
      resources: { wallet: null }
    },
    {
      id: "AGENT-AFRIFOREX-001",
      key: "afriforex",
      name: "AfriForex",
      icon: "📈",
      organization: "AfriDigital",
      status: "ACTIVE",
      claimStatus: null,
      verification: null,
      capabilities: ["market.analyze"],
      description: "AfriDigital multi-asset market intelligence agent providing structured multi-timeframe analysis across forex, crypto, commodities and stocks.",
      metrics: { operations: null, activeJobs: null, completedJobs: null, successful: null, unsuccessful: null, calls: null, contacts: null },
      resources: { wallet: null }
    }
  ],
  get(id) { return this.agents.find((agent) => agent.id === id) || null; },
  list() { return [...this.agents]; },
  register(agent) { if (!agent?.id) return; const i = this.agents.findIndex((x) => x.id === agent.id); if (i === -1) this.agents.push(agent); else this.agents[i] = { ...this.agents[i], ...agent }; }
}; export default A2AAgentRegistry;
