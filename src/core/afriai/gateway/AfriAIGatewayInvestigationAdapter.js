import AfriAIKillSwitch from "./AfriAIKillSwitch.js";
import AfriAIProviderRegistry from "./AfriAIProviderRegistry.js";

const AfriAIGatewayInvestigationAdapter = {

  collect(providerId = null) {

    const killSwitch = AfriAIKillSwitch.status();

    const provider =
      providerId
        ? AfriAIProviderRegistry.get(providerId)
        : null;

    return {
      type: "AFRIAI_GATEWAY_EVIDENCE",

      target: "ExternalAIGateway",

      evidence: {
        killSwitch,
        provider,
        providerId,
        gatewayPolicy: {
          approvalRequired: true,
          executionAllowed: false
        }
      },

      timestamp: Date.now()
    };

  }

};

export default AfriAIGatewayInvestigationAdapter;
