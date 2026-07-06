
import BillingExecutionPipeline from "./BillingExecutionPipeline.js";
import DriftDetectionReport from "../guards/DriftDetectionReport.js";

/**
 * FULL SYSTEM TEST RUNNER
 * Simulates real-world billing events
 */

export default class BillingSystemTestRunner {

  static run(testEvents = []) {

    const report = {
      passed: 0,
      failed: 0,
      results: []
    };

    for (const event of testEvents) {

      const drift = DriftDetectionReport.analyze(event, {
        frequency: event.frequency || 1,
        abuseScore: event.abuseScore || 0
      });

      if (!drift.safe) {
        report.failed++;
        report.results.push({ event, status: "FAILED_DRIFT", drift });
        continue;
      }

      const result = BillingExecutionPipeline.execute(event);

      if (result?.status === "blocked") {
        report.failed++;
      } else {
        report.passed++;
      }

      report.results.push({ event, result });
    }

    return report;
  }
}
