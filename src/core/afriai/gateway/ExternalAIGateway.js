import AfriAIKillSwitch from "./AfriAIKillSwitch.js";
import AfriAIProviderRegistry from "./AfriAIProviderRegistry.js";
import AfriAIGatewayAuthorization from "./AfriAIGatewayAuthorization.js";

const ExternalAIGateway = {

  request(payload = {}) {

    const switchState = AfriAIKillSwitch.status();
    const provider = AfriAIProviderRegistry.get(payload.provider);

    const authorization =
      AfriAIGatewayAuthorization.evaluate({
        approvalDecision: payload.approvalDecision,
        provider,
        killSwitch: switchState
      });

    if (!switchState.enabled) {
      return {
        type: "EXTERNAL_AI_GATEWAY_BLOCKED",
        reason: switchState.reason,
        allowed:false,
        timestamp:Date.now()
      };
    }

    return {
      type:"EXTERNAL_AI_GATEWAY_REQUEST",
      providerRegistered: !!provider,
      providerId: payload.provider || "unknown",
      provider,
      allowed: authorization.allowed,
      authorization,
      approvalRequired:true,
      killSwitch:switchState,
      timestamp:Date.now()
    };
  }

};

export default ExternalAIGateway;
