import ExternalAIGateway from "./ExternalAIGateway.js";
import AfriAIProviderExecutor from "./AfriAIProviderExecutor.js";
import AfriAIGatewayExecutionAudit from "./AfriAIGatewayExecutionAudit.js";

const AfriAIGatewayRuntime = {

  async request({
    provider,
    payload = {},
    approvalDecision = null
  } = {}) {

    const gatewayRequest =
      ExternalAIGateway.request({
        provider,
        approvalDecision
      });

    const audit =
      AfriAIGatewayExecutionAudit.record({
        authorization:
          gatewayRequest.authorization || {
            allowed:false
          },
        provider:
          gatewayRequest.provider,
        approvalDecision
      });

    if (!gatewayRequest.allowed) {
      return {
        gateway: gatewayRequest,
        audit,
        executed:false
      };
    }

    const execution =
      await AfriAIProviderExecutor.execute(
        provider,
        payload
      );

    return {
      gateway: gatewayRequest,
      execution,
      audit,
      executed: execution.executed === true,
      timestamp: Date.now()
    };
  }

};

export default AfriAIGatewayRuntime;
