class AfriNucChainExecutionTrace {

  static create({
    batchId,
    executor,
    modules
  }) {

    const executionId =
      `EXEC-${Date.now()}`;

    const trace = {
      executionId,
      batchId,
      executor,
      modules,
      status: "EXECUTION_STARTED",
      createdAt: Date.now()
    };

    return {
      executionId,
      trace
    };
  }

}

export default AfriNucChainExecutionTrace;
