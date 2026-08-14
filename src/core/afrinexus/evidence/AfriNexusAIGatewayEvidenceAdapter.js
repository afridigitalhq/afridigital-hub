import AfriAIGatewayExecutionAudit from "../../afriai/gateway/AfriAIGatewayExecutionAudit.js";
import AfriAIGatewaySecuritySnapshot from "../../afriai/gateway/AfriAIGatewaySecuritySnapshot.js";

const AfriNexusAIGatewayEvidenceAdapter = {

  collect(){

    const executions = AfriAIGatewayExecutionAudit.list();

    return {
      securitySnapshot:
        AfriAIGatewaySecuritySnapshot.capture(),

      killSwitch:
        executions.at(-1)?.authorization || null,

      executions,

      totalExecutions: executions.length,

      allowedExecutions:
        executions.filter(item => item.allowed).length,

      blockedExecutions:
        executions.filter(item => !item.allowed).length,

      timestamp: Date.now()
    };

  }

};

export default AfriNexusAIGatewayEvidenceAdapter;
