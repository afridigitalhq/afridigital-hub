const AfriNucChainSnapshot = {

  create(plan = {}){

    return {
      snapshotId:
        `SNAPSHOT-${Date.now()}`,

      batchId:
        plan.id || "UNKNOWN",

      source:
        plan.source || null,

      target:
        plan.target || null,

      modules:
        plan.modules || [],

      rules:
        plan.rules || [],

      status:
        "SNAPSHOT_CREATED",

      createdAt:
        Date.now()
    };

  }

};

export default AfriNucChainSnapshot;
