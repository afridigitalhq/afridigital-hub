const executions = [];

const AfriAIGatewayExecutionAudit = {

  record({
    authorization = {},
    provider = null,
    approvalDecision = null
  } = {}) {

    const evidence = {
      type: "AFRIAI_GATEWAY_EXECUTION_AUDIT",
      allowed: authorization.allowed === true,
      provider: provider?.id || null,
      approvalStatus: approvalDecision?.status || null,
      approvalId: approvalDecision?.approvalId || null,
      authorization,
      timestamp: Date.now()
    };

    executions.push(evidence);

    return evidence;
  },

  list() {
    return executions;
  }

};

export default AfriAIGatewayExecutionAudit;
