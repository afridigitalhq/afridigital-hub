import AfriNexusInboxRouter from "./AfriNexusInboxRouter.js";
import AfriNexusAdminQueue from "./AfriNexusAdminQueue.js";

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

    return {
      type: "AFRINEXUS_REVIEW_PACKAGE",
      inbox: inboxItem,
      approvalQueue: queueItem,
      status: "PENDING_REVIEW",
      approvalRequired: true,
      executionAllowed: false,
      timestamp: Date.now()
    };
  }

};

export default AfriNexusReviewGateway;
