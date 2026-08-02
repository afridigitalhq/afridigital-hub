import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const REGISTRY =
  "src/core/afriai/nucchain/artifacts/storage/artifact-registry.json";


async function checksum(file){

  const content =
    await fs.readFile(file);

  return crypto
    .createHash("sha256")
    .update(content)
    .digest("hex");

}


const AfriNucChainArtifactManager = {

  async register(input = {}){

    const files =
      input.files || [];

    const artifactFiles = [];

    for(const file of files){

      try{

        const hash =
          await checksum(file);

        artifactFiles.push({
          path:file,
          checksum:hash,
          exists:true
        });

      }catch{

        artifactFiles.push({
          path:file,
          checksum:null,
          exists:false
        });

      }

    }


    const artifact = {

      artifactId:
        `ARTIFACT-${Date.now()}`,

      migrationId:
        input.migrationId || "UNKNOWN",

      source:
        input.source || null,

      target:
        input.target || null,

      files:
        artifactFiles,

      status:
        "REGISTERED",

      createdAt:
        Date.now()

    };


    let registry=[];

    try{

      registry =
        JSON.parse(
          await fs.readFile(REGISTRY,"utf8")
        );

    }catch{}


    registry.push(artifact);


    await fs.mkdir(
      path.dirname(REGISTRY),
      {recursive:true}
    );


    await fs.writeFile(
      REGISTRY,
      JSON.stringify(
        registry,
        null,
        2
      )
    );


    return artifact;

  },


  async all(){

    try{

      return JSON.parse(
        await fs.readFile(REGISTRY,"utf8")
      );

    }catch{

      return [];

    }

  }

};


export default AfriNucChainArtifactManager;
