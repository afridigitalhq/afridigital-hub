import AfriNucChainMigrationPlanner from "./AfriNucChainMigrationPlanner.js";
import AfriNucChainSnapshot from "./AfriNucChainSnapshot.js";
import AfriNucChainBatchManager from "./AfriNucChainBatchManager.js";
import AfriNucChainValidator from "./AfriNucChainValidator.js";
import AfriNucChainManifestLoader from "./loaders/AfriNucChainManifestLoader.js";
import AfriNucChainTrace from "./AfriNucChainTrace.js";
import AfriNucChainApprovalGate from "./AfriNucChainApprovalGate.js";
import AfriNucChainExecutor from "./AfriNucChainExecutor.js";
import AfriNucChainRollbackManager from "./AfriNucChainRollbackManager.js";
import AfriNucChainMigrationRegistry from "./registry/AfriNucChainMigrationRegistry.js";
import AfriNucChainArtifactVerifier from "./artifacts/AfriNucChainArtifactVerifier.js";
import AfriNucChainMigrationExecutor from "./execution/AfriNucChainMigrationExecutor.js";
import AfriNucChainAuditManager from "./audit/AfriNucChainAuditManager.js";
import AfriNucChainArtifactManager from "./artifacts/AfriNucChainArtifactManager.js";
import AfriNucChainDebugBridge from "./AfriNucChainDebugBridge.js";

const AfriNucChainEngine = {

  async execute(manifest = {}){

    const trace = [];

    const request =
      AfriNucChainManifestLoader.load(manifest);

    trace.push(
      AfriNucChainTrace.create(
        "MANIFEST_LOADED",
        request
      )
    );

    const plan =
      AfriNucChainMigrationPlanner.create(request);

    trace.push(
      AfriNucChainTrace.create(
        "PLAN_CREATED",
        plan
      )
    );

    const snapshot =
      AfriNucChainSnapshot.create(plan);

    trace.push(
      AfriNucChainTrace.create(
        "SNAPSHOT_CREATED",
        snapshot
      )
    );

    const batch =
      await AfriNucChainBatchManager.run(
        plan,
        snapshot
      );

    trace.push(
      AfriNucChainTrace.create(
        "BATCH_READY",
        batch
      )
    );

    const validation =
      AfriNucChainValidator.validate(batch);

    trace.push(
      AfriNucChainTrace.create(
        "VALIDATION_COMPLETE",
        validation
      )
    );

    const debugReport =
      AfriNucChainDebugBridge.inspect({
        plan,
        snapshot,
        batch,
        validation,
        trace
      });

    trace.push(
      AfriNucChainTrace.create(
        "DEBUG_ANALYSIS_COMPLETE",
        debugReport
      )
    );

    const approval =
      AfriNucChainApprovalGate.approve({
        validation,
        debugReport
      });

    trace.push(
      AfriNucChainTrace.create(
        "APPROVAL_COMPLETE",
        approval
      )
    );

    const rollback =
      AfriNucChainRollbackManager.createCheckpoint({
        batch,
        snapshot,
        operations: [
          {
            action: "MIGRATION_PREPARE",
            source: batch.source,
            target: batch.target,
            modules: batch.modules
          }
        ]
      });

    trace.push(
      rollback.trace
    );

    const execution =
      await AfriNucChainExecutor.execute({
        approval,
        batch
      });

    trace.push(
      ...execution.trace
    );

    const registry =
      AfriNucChainMigrationRegistry.register({
        batch,
        rollback,
        approval,
        execution
      });

    trace.push({
      event: "MIGRATION_REGISTERED",
      payload: registry,
      timestamp: Date.now()
    });

    const artifact =
      AfriNucChainArtifactManager.register({
        migrationId: batch.batchId,
        source: batch.source,
        target: batch.target,
        files: batch.modules
      });

    trace.push({
      event: "ARTIFACT_REGISTERED",
      payload: artifact,
      timestamp: Date.now()
    });

    const artifactVerification =
      AfriNucChainArtifactVerifier.verify(
        artifact
      );

    trace.push(
      artifactVerification.trace
    );

    const completion = {
      migrationId:
        batch.batchId,

      status:
        artifactVerification.verified
          ? "MIGRATION_COMPLETED"
          : "MIGRATION_BLOCKED",

      completed:
        artifactVerification.verified,

      timestamp:
        Date.now()
    };

    trace.push({
      event: "MIGRATION_COMPLETED",
      payload: completion,
      timestamp: Date.now()
    });

    const audit =
      AfriNucChainAuditManager.record({
        migrationId: batch.batchId,
        status: completion.status,
        approval,
        validation,
        execution,
        artifact,
        rollback,
        trace
      });

    trace.push(
      audit.trace
    );

    return {
      plan,
      snapshot,
      batch,
      validation,
      debugReport,
      approval,
      rollback,
      execution,
      registry,
      artifact,
      artifactVerification,
      completion,
      audit,
      trace
    };

  }

};

export default AfriNucChainEngine;
