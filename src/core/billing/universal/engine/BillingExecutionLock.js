
/**
 * EXECUTION LOCK
 * Prevents bypass of BillingExecutionPipeline
 */

export default class BillingExecutionLock {

  static validate(entryPoint) {

    const allowed = [
      "BillingExecutionPipeline"
    ];

    if (!allowed.includes(entryPoint)) {
      throw new Error("BILLING_BYPASS_DETECTED");
    }

    return true;
  }
}
