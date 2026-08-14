import AfriNexusInboxRouter from "./AfriNexusInboxRouter.js";
import AfriNexusAdminQueue from "./AfriNexusAdminQueue.js";
import AfriNexusApprovalDecision from "../approval/AfriNexusApprovalDecision.js";

const AfriNexusReviewGateway = {

  submitArtifact(artifact = {}) {

    const inboxItem = AfriNexusInboxRouter.route({
      source: "client",
      target: artifact.scope?.targets?.[0] || "unknown",
      message: "AfriNexus mission evidence requires human review.",
      artifact
    });

    const queueItem = AfriNexusAdminQueue.submit({
      source: "AfriNexus",
      target: artifact.scope?.targets?.[0] || "unknown",
      message: "Approval required before execution.",
      artifactId: artifact.mission?.id || null,
      priority: "high"
    });

    const approvalDecision = AfriNexusApprovalDecision.create({
      target: artifact.scope?.targets?.[0] || "unknown",
      artifactId: artifact.mission?.id || null,
      risk: "standard"
    });

    return {
      type: "AFRINEXUS_REVIEW_PACKAGE",
      inbox: inboxItem,
      approvalQueue: queueItem,
      approvalDecision,
      status: "PENDING_REVIEW",
      approvalRequired: true,
      executionAllowed: false,
      timestamp: Date.now()
    };
  }

};

export default AfriNexusReviewGateway;
