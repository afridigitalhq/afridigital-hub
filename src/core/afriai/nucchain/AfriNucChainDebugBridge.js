import AfriDebugEngine from "../debug/AfriDebugEngine.js";

const AfriNucChainDebugBridge = {

  inspect(result = {}){

    return AfriDebugEngine.analyze({

      importTrace:
        result.trace || [],

      runtime:
        result.batch || null,

      build:
        result.validation || null

    });

  }

};

export default AfriNucChainDebugBridge;
