import AfriAIKillSwitch from "../gateway/AfriAIKillSwitch.js";
import AfriAIProviderRegistry from "../gateway/AfriAIProviderRegistry.js";
import AfriAIProviderExecutor from "../gateway/AfriAIProviderExecutor.js";
import ExternalAIGateway from "../gateway/ExternalAIGateway.js";
import AfriAIGatewayExecutionAudit from "../gateway/AfriAIGatewayExecutionAudit.js";

const AfriAIGatewayLifecycleManager = {

  async execute({
    provider,
    payload = {},
    approvalDecision = {}
  } = {}) {

    const kill =
      AfriAIKillSwitch.enable(approvalDecision);

    const gateway =
      ExternalAIGateway.request({
        provider,
        approvalDecision
      });

    if (!gateway.allowed) {

      const audit =
        AfriAIProviderAudit(gateway, approvalDecision);

      return {
        gateway,
        audit,
        executed:false
      };
    }

    const execution =
      await AfriAIProviderExecutor.execute(
        provider,
        payload
      );

    const audit =
      AfriAIGatewayExecutionAudit.record({
        authorization: gateway.authorization,
        provider: gateway.provider,
        approvalDecision
      });

    return {
      gateway,
      execution,
      audit,
      executed: execution.executed === true,
      timestamp: Date.now()
    };
  }

};

function AfriAIProviderAudit(gateway, approvalDecision){

  return AfriAIGatewayExecutionAudit.record({
    authorization:{
      allowed:false,
      reason:gateway.reason
    },
    provider:gateway.provider,
    approvalDecision
  });

}

export default AfriAIGatewayLifecycleManager;
