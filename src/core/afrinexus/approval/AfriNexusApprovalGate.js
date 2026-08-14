const AfriNexusApprovalGate = {
  create(stage = "human_review", payload = {}) {
    return {
      type: "AFRINEXUS_APPROVAL_GATE",
      stage,
      approved: false,
      reviewer: null,
      payload,
      timestamp: Date.now()
    };
  },

  approve(record, reviewer = "human") {
    return {
      ...record,
      approved: true,
      reviewer,
      approvedAt: Date.now()
    };
  },

  reject(record, reason = "not approved") {
    return {
      ...record,
      approved: false,
      rejectionReason: reason,
      rejectedAt: Date.now()
    };
  }
};

export default AfriNexusApprovalGate;
