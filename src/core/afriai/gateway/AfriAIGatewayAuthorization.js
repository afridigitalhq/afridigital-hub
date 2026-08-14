const AfriAIGatewayAuthorization = {

  evaluate({
    approvalDecision = {},
    provider = null,
    killSwitch = {}
  } = {}) {

    const approved =
      approvalDecision.status === "APPROVED" &&
      approvalDecision.executionAllowed === true &&
      approvalDecision.registry?.complete === true;

    const providerReady =
      provider?.enabled === true;

    const killSwitchReady =
      killSwitch.enabled === true;

    return {
      type: "AFRIAI_GATEWAY_AUTHORIZATION",
      approved,
      providerReady,
      killSwitchReady,
      allowed:
        approved &&
        providerReady &&
        killSwitchReady,
      reason:
        !approved
          ? "approval_not_complete"
          : !providerReady
          ? "provider_not_ready"
          : !killSwitchReady
          ? "kill_switch_disabled"
          : null,
      timestamp: Date.now()
    };
  }

};

export default AfriAIGatewayAuthorization;
