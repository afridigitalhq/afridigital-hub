import fs from "fs/promises";
import crypto from "crypto";
import AfriNucChainTrace from "../AfriNucChainTrace.js";

async function checksum(file){

  const content =
    await fs.readFile(file);

  return crypto
    .createHash("sha256")
    .update(content)
    .digest("hex");

}


const AfriNucChainArtifactVerifier = {

  async verify(artifact = {}){

    const checks = [];

    for(const file of artifact.files || []){

      let exists = false;
      let checksumValid = false;

      try{

        const hash =
          await checksum(file.path);

        exists = true;

        checksumValid =
          hash === file.checksum;

      }catch{}

      checks.push({
        path:file.path,
        exists,
        checksumValid
      });

    }


    const verified =
      checks.length > 0 &&
      checks.every(
        item =>
          item.exists &&
          item.checksumValid
      );


    const result = {

      artifactId:
        artifact.artifactId || "UNKNOWN",

      status:
        verified
          ? "ARTIFACT_VERIFIED"
          : "ARTIFACT_INVALID",

      verified,

      checks,

      timestamp:
        Date.now()

    };


    return {
      ...result,
      trace:
        AfriNucChainTrace.create(
          verified
            ? "ARTIFACT_VERIFIED"
            : "ARTIFACT_VERIFICATION_FAILED",
          result
        )
    };

  }

};


export default AfriNucChainArtifactVerifier;
