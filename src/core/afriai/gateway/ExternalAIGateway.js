import AfriAIKillSwitch from "./AfriAIKillSwitch.js";
import AfriAIProviderRegistry from "./AfriAIProviderRegistry.js";

const ExternalAIGateway = {

  request(payload = {}) {

    const switchState = AfriAIKillSwitch.status();
    const provider = AfriAIProviderRegistry.get(payload.provider);

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
      allowed:false,
      approvalRequired:true,
      killSwitch:switchState,
      timestamp:Date.now()
    };
  }

};

export default ExternalAIGateway;
