const artifactStore = [];

const AfriNucChainArtifactManager = {

  register(input = {}){

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
        input.files || [],

      checksum:
        input.checksum || null,

      status:
        "REGISTERED",

      createdAt:
        Date.now()

    };

    artifactStore.push(artifact);

    return artifact;

  },


  verify(artifactId){

    const artifact =
      artifactStore.find(
        item =>
          item.artifactId === artifactId
      );

    if(!artifact){

      return {
        verified:false,
        status:"ARTIFACT_NOT_FOUND"
      };

    }

    return {
      verified:true,
      status:"ARTIFACT_VALID",
      artifact
    };

  },


  all(){

    return artifactStore;

  }

};

export default AfriNucChainArtifactManager;
