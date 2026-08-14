import AfriAIGatewayExecutionAudit from "./AfriAIGatewayExecutionAudit.js";

const AfriAIGatewayAuditDashboardBridge = {

  summary(){

    const records =
      AfriAIGatewayExecutionAudit.list();

    return {
      type: "AFRIAI_GATEWAY_ADMIN_AUDIT",
      total: records.length,
      allowed:
        records.filter(
          item => item.allowed === true
        ),
      blocked:
        records.filter(
          item => item.allowed === false
        ),
      latest:
        records.at(-1) || null,
      timestamp: Date.now()
    };
  }

};

export default AfriAIGatewayAuditDashboardBridge;
