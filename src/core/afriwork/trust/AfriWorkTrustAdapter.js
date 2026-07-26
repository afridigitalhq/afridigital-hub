const AfriWorkTrustAdapter = {

  buildSignals(worker){

    return {
      workerId: worker.workerId,
      completedJobs: worker.completedJobs || 0,
      cancelledJobs: worker.cancelledJobs || 0,
      clientApprovals: worker.clientApprovals || 0,
      disputes: worker.disputes || 0,
      responseScore: worker.responseScore || 0,
      skillsVerified: worker.skillsVerified || []
    };

  }

};

export default AfriWorkTrustAdapter;
