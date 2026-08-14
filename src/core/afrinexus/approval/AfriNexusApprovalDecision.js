import AfriNexusApprovalGate from "./AfriNexusApprovalGate.js";
import AfriNexusApprovalPolicy from "./AfriNexusApprovalPolicy.js";
import AfriNexusSecurityPolicyEngine from "../security/AfriNexusSecurityPolicyEngine.js";
import AfriNexusApprovalRegistry from "./AfriNexusApprovalRegistry.js";

const AfriNexusApprovalDecision = {

  create(context = {}) {

    const policy =
      context.targets?.length
        ? AfriNexusSecurityPolicyEngine.evaluate(context.targets)
        : AfriNexusApprovalPolicy.evaluate(context);

    const approvalId =
      context.artifactId || `AFN-${Date.now()}`;

    const registry =
      AfriNexusApprovalRegistry.create(
        approvalId,
        policy.requiredApprovals
      );

    const gate =
      AfriNexusApprovalGate.create(
        "human_review",
        {
          policy,
          registry,
          target: context.target || "unknown",
          artifactId: approvalId
        }
      );

    return {
      type: "AFRINEXUS_APPROVAL_DECISION",
      approvalId,
      gate,
      policy,
      registry,
      status: "PENDING_REVIEW",
      executionAllowed: false,
      timestamp: Date.now()
    };
  },


  approve(decision, role, reviewer="human") {

    const registry =
      AfriNexusApprovalRegistry.approve(
        decision.approvalId,
        role,
        reviewer
      );

    const complete =
      registry?.complete === true;

    return {
      ...decision,
      registry,
      status: complete ? "APPROVED" : "PENDING_REVIEW",
      executionAllowed: complete,
      approvalComplete: complete,
      updatedAt: Date.now()
    };
  },


  reject(decision, reason="not approved") {

    return {
      ...decision,
      status:"REJECTED",
      executionAllowed:false,
      rejectionReason:reason,
      updatedAt:Date.now()
    };
  }

};

export default AfriNexusApprovalDecision;
