import AfriNucChainTrace from "./AfriNucChainTrace.js";

const rollbackStore = [];

const AfriNucChainRollbackManager = {

  createCheckpoint(input = {}){

    const checkpoint = {
      checkpointId:
        `ROLLBACK-${Date.now()}`,

      batchId:
        input.batch?.batchId || "UNKNOWN",

      snapshotId:
        input.snapshot?.snapshotId || null,

      operations:
        input.operations || [],

      status:
        "CHECKPOINT_CREATED",

      createdAt:
        Date.now()
    };

    rollbackStore.push(checkpoint);

    return {
      checkpoint,
      trace:
        AfriNucChainTrace.create(
          "ROLLBACK_CHECKPOINT_CREATED",
          checkpoint
        )
    };

  },


  restore(checkpointId){

    const checkpoint =
      rollbackStore.find(
        item =>
          item.checkpointId === checkpointId
      );

    if(!checkpoint){

      return {
        restored:false,
        status:"CHECKPOINT_NOT_FOUND"
      };

    }

    return {
      restored:true,
      status:"ROLLBACK_READY",
      checkpoint,
      timestamp:Date.now()
    };

  },


  all(){

    return rollbackStore;

  }

};

export default AfriNucChainRollbackManager;
