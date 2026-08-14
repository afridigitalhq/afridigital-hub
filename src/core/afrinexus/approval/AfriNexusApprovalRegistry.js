const approvals = new Map();

const AfriNexusApprovalRegistry = {

  create(id, required = []) {
    const record = {
      id,
      required,
      received: [],
      complete: false,
      timestamp: Date.now()
    };

    approvals.set(id, record);

    return record;
  },

  approve(id, role, reviewer = "unknown") {

    const record = approvals.get(id);

    if (!record) return null;

    record.received.push({
      role,
      reviewer,
      approved:true,
      timestamp:Date.now()
    });

    record.complete =
      record.required.every(role =>
        record.received.some(
          approval => approval.role === role
        )
      );

    return record;
  },

  status(id){
    return approvals.get(id);
  }

};

export default AfriNexusApprovalRegistry;
