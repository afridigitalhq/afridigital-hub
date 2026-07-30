import AfriNucChainTrace from "./AfriNucChainTrace.js";

const AfriNucChainExecutor = {

  async execute(input = {}){

    const {
      approval = {},
      batch = {}
    } = input;

    const trace = [];

    if(!approval.approved){

      const blocked = {
        status: "BLOCKED",
        reason: "APPROVAL_REQUIRED",
        executed: false,
        timestamp: Date.now()
      };

      trace.push(
        AfriNucChainTrace.create(
          "EXECUTION_BLOCKED",
          blocked
        )
      );

      return {
        ...blocked,
        trace
      };

    }

    const result = {

      batchId:
        batch.batchId || "UNKNOWN",

      status:
        "EXECUTED",

      executed:
        true,

      modules:
        batch.modules || [],

      timestamp:
        Date.now()

    };

    trace.push(
      AfriNucChainTrace.create(
        "EXECUTION_COMPLETE",
        result
      )
    );

    return {
      ...result,
      trace
    };

  }

};

export default AfriNucChainExecutor;
