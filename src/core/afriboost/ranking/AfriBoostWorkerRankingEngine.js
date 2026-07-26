const AfriBoostWorkerRankingEngine = {

 calculate(worker){

  const score =
   (worker.afriTicks || 0) +
   ((worker.successRate || 0) * 5) +
   ((worker.completedJobs || 0) * 2) -
   ((worker.disputes || 0) * 20);

  return {
   workerId:worker.workerId,
   rankingScore:Math.max(score,0),
   level:
    score > 3000 ? "ELITE" :
    score > 1000 ? "ADVANCED" :
    score > 300 ? "VERIFIED" :
    "RISING"
  };

 },

 match(worker,campaign){

  return {
   workerId:worker.workerId,
   campaignId:campaign.campaignId,
   confidence:
    worker.skills?.includes(campaign.category)
    ? "HIGH"
    : "STANDARD",
   matchedAt:Date.now()
  };

 }

};

export default AfriBoostWorkerRankingEngine;
