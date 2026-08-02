import fs from "node:fs/promises";

const AfriNucChainRuntimeVerifier = {

  async verify(files = []){

    const checks = [];

    for(const file of files){

      try{

        await fs.access(file);

        checks.push({
          file,
          exists:true,
          status:"READY"
        });

      }catch(error){

        checks.push({
          file,
          exists:false,
          status:"MISSING"
        });

      }

    }

    const verified = checks.every(
      item => item.exists === true
    );

    return {
      status: verified
        ? "RUNTIME_VERIFIED"
        : "RUNTIME_FAILED",

      verified,

      checks,

      timestamp:Date.now()
    };

  }

};

export default AfriNucChainRuntimeVerifier;
