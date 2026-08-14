import AfriDebugInvestigationBatch from "./AfriDebugInvestigationBatch.js";

const AfriDebugBatchRunner = {
  run(targets = []) {
    return {
      type: "AFRIDEBUG_BATCH_REPORT",
      total: targets.length,
      reports: targets.map(target =>
        AfriDebugInvestigationBatch.run(target)
      ),
      execution: {
        allowed: false,
        approvalRequired: true
      }
    };
  }
};

export default AfriDebugBatchRunner;
