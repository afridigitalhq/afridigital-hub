const AfriBoostWorkerAfriTicksEngine = {

  create(worker){
    return {
      workerId:worker.workerId,
      ticks:0,
      trustLevel:"NEW",
      createdAt:Date.now()
    };
  },

  update(data){
    return {
      workerId:data.workerId,
      ticks:data.completedTasks + data.qualityScore,
      trustLevel:data.disputes > 0 ? "RESTRICTED" : "TRUSTED",
      updatedAt:Date.now()
    };
  },

  rank(worker){
    return {
      workerId:worker.workerId,
      ranking:"CALCULATED",
      ticks:worker.ticks
    };
  }

};

export default AfriBoostWorkerAfriTicksEngine;
