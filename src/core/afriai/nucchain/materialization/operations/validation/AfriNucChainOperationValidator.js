import AfriNucChainOperationRegistry from "../registry/AfriNucChainOperationRegistry.js";

const AfriNucChainOperationValidator = {
  validate(input = {}) {
    const operations = input.operations || [];

    const results = operations.map(operation => ({
      type: operation.type,
      valid: AfriNucChainOperationRegistry.exists(operation.type)
    }));

    const passed = results.every(
      item => item.valid
    );

    return {
      status: passed ? "VALIDATED" : "FAILED",
      operations: results,
      issues: passed
        ? []
        : results
            .filter(item => !item.valid)
            .map(item => `UNKNOWN_OPERATION:${item.type}`),
      timestamp: Date.now()
    };
  }
};

export default AfriNucChainOperationValidator;
