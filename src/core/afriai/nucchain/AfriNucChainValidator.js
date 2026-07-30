const AfriNucChainValidator = {

  validate(batch = {}){

    const checks = {

      batchExists:
        Boolean(batch.batchId),

      snapshotLinked:
        Boolean(batch.snapshotId),

      sourceDefined:
        Boolean(batch.source),

      targetDefined:
        Boolean(batch.target),

      modulesDefined:
        Array.isArray(batch.modules)

    };

    const passed =
      Object.values(checks)
        .every(Boolean);

    return {

      batchId:
        batch.batchId || "UNKNOWN",

      status:
        passed
          ? "VALIDATED"
          : "FAILED",

      checks,

      issues:
        passed
          ? []
          : Object.entries(checks)
              .filter(([_, value]) => !value)
              .map(([key]) => key),

      validatedAt:
        Date.now()

    };

  }

};

export default AfriNucChainValidator;
