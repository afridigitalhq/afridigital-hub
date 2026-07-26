const AfriBoostTrustAdapter = {

  buildSignals(worker){

    return {
      workerId: worker.workerId,
      completedJobs: worker.completedJobs || 0,
      failedJobs: worker.failedJobs || 0,
      disputes: worker.disputes || 0,
      qualityScore: worker.qualityScore || 0,
      skillsVerified: worker.skillsVerified || []
    };

  }

};

export default AfriBoostTrustAdapter;
