const AfriNucChainBatchManager = {

  async run(plan = {}, snapshot = {}){

    return {
      batchId:
        plan.id || "UNKNOWN",

      snapshotId:
        snapshot.snapshotId || null,

      source:
        plan.source || null,

      target:
        plan.target || null,

      modules:
        plan.modules || [],

      operations:
        plan.operations || [],

      files:
        plan.files || [],

      artifacts:
        plan.artifacts || [],

      materialization:{
        directory:
          plan.target || null,

        files:
          plan.files || []
      },

      status:
        "READY_FOR_VALIDATION",

      execution:{
        approved:false,
        executed:false
      },

      createdAt:
        Date.now()
    };

  }

};

export default AfriNucChainBatchManager;
