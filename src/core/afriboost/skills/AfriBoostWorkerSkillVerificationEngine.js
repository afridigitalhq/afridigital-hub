const AfriBoostWorkerSkillVerificationEngine = {

 verify(worker){

  return {
   workerId:worker.workerId,
   skills:worker.skills || [],
   verified:true,
   verifiedAt:Date.now()
  };

 },

 evaluate(worker){

  return {
   workerId:worker.workerId,
   level:
    worker.ticks > 500 ? "ADVANCED" :
    worker.ticks > 100 ? "INTERMEDIATE" :
    "BEGINNER",
   eligible:true
  };

 }

};

export default AfriBoostWorkerSkillVerificationEngine;
