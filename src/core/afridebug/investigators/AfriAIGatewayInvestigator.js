const AfriAIGatewayInvestigator = {

  inspect({
    gateway = {},
    provider = {},
    killSwitch = {}
  } = {}) {

    const findings = [];

    if (!gateway) {
      findings.push("gateway_missing");
    }

    if (!provider || !provider.id) {
      findings.push("provider_not_registered");
    }

    if (killSwitch.enabled === false) {
      findings.push("gateway_disabled_by_kill_switch");
    }

    if (provider && provider.enabled === false) {
      findings.push("provider_disabled");
    }

    return {
      type: "AFRIAI_GATEWAY_INVESTIGATION",
      findings,
      healthy: findings.length === 0,
      evidence: {
        gateway,
        provider,
        killSwitch
      },
      timestamp: Date.now()
    };

  }

};

export default AfriAIGatewayInvestigator;
