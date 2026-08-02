const AfriNucChainManifestLoader = {

  load(manifest = {}){

    return {
      id:
        manifest.id,

      source:
        manifest.source,

      target:
        manifest.target,

      modules:
        manifest.modules || [],

      operations:
        manifest.operations || [],

      rules:
        manifest.rules || [],

      mode:
        manifest.type || "MIGRATION"

    };

  }

};

export default AfriNucChainManifestLoader;
