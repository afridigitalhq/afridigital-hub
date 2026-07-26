const AfriBoostWorkerPerformanceEngine = {

 recordJob(job){

  return {
   workerId:job.workerId,
   completedJobs:job.completed ? 1 : 0,
   failedJobs:job.failed ? 1 : 0,
   complexity:job.complexity || "STANDARD",
   timestamp:Date.now()
  };

 },

 calculate(profile){

  const total =
   profile.completedJobs +
   profile.failedJobs;

  return {
   workerId:profile.workerId,
   completedJobs:profile.completedJobs,
   failedJobs:profile.failedJobs,
   successRate:
    total === 0 ? 0 :
    Math.round(
     (profile.completedJobs / total) * 100
    ),
   trustStatus:
    profile.failedJobs > profile.completedJobs
    ? "REVIEW"
    : "GOOD"
  };

 }

};

export default AfriBoostWorkerPerformanceEngine;
