
import BillingExecutionPipeline from "./BillingExecutionPipeline.js";

/**
 * SIMULATION ENGINE
 * Runs synthetic billing flows before production execution
 */

export default class BillingSimulationRunner {

  static run(eventSet = []) {

    const results = [];

    for (const event of eventSet) {

      const result = BillingExecutionPipeline.execute(event);

      results.push({
        event,
        result
      });
    }

    return {
      total: eventSet.length,
      results
    };
  }
}
