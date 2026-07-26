const AfriBoostWorkerProfileRegistry = {

 create(worker){

  return {
   workerId:worker.workerId,

   reputation:{
    afriTicks:worker.afriTicks || 0,
    completedJobs:worker.completedJobs || 0,
    successRate:worker.successRate || 0,
    level:worker.level || "RISING"
   },

   skills:worker.skills || [],

   badges:[
    "VERIFIED_WORKER"
   ],

   createdAt:Date.now()
  };

 },

 update(workerId,data){

  return {
   workerId,
   ...data,
   updatedAt:Date.now()
  };

 }

};

export default AfriBoostWorkerProfileRegistry;
