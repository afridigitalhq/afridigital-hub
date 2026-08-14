import AfriAIKillSwitch from "./AfriAIKillSwitch.js";
import AfriAIGatewayExecutionAudit from "./AfriAIGatewayExecutionAudit.js";

const AfriAIGatewaySecuritySnapshot = {

  capture(){

    const audits =
      AfriAIGatewayExecutionAudit.list();

    return {
      type:"AFRIAI_GATEWAY_SECURITY_SNAPSHOT",

      killSwitch:
        AfriAIKillSwitch.status(),

      executions:{
        total: audits.length,

        allowed:
          audits.filter(item => item.allowed).length,

        blocked:
          audits.filter(item => !item.allowed).length,

        latest:
          audits.at(-1) || null
      },

      timestamp:Date.now()
    };

  }

};

export default AfriAIGatewaySecuritySnapshot;
