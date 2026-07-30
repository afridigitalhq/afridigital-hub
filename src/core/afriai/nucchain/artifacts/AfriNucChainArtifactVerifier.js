import AfriNucChainTrace from "../AfriNucChainTrace.js";

const AfriNucChainArtifactVerifier = {

  verify(artifact = {}){

    const checks = {

      artifactExists:
        Boolean(artifact.artifactId),

      migrationLinked:
        Boolean(artifact.migrationId),

      sourceDefined:
        Boolean(artifact.source),

      targetDefined:
        Boolean(artifact.target),

      filesDefined:
        Array.isArray(artifact.files) &&
        artifact.files.length > 0

    };

    const valid =
      Object.values(checks)
        .every(Boolean);

    const result = {

      artifactId:
        artifact.artifactId || "UNKNOWN",

      status:
        valid
          ? "ARTIFACT_VERIFIED"
          : "ARTIFACT_INVALID",

      verified:
        valid,

      checks,

      timestamp:
        Date.now()

    };

    return {

      ...result,

      trace:
        AfriNucChainTrace.create(
          valid
            ? "ARTIFACT_VERIFIED"
            : "ARTIFACT_VERIFICATION_FAILED",
          result
        )

    };

  }

};

export default AfriNucChainArtifactVerifier;
