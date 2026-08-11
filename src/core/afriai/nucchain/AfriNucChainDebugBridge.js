import AfriDebugCore from "../../afridebug/AfriDebugCore.js";

const AfriNucChainDebugBridge = {
  inspect(result = {}) {
    return AfriDebugCore.inspect({
      mode: "ecosystem",
      productId: result.productId || "nucchain",
      error: result.error || null,
      evidence: [
        ...(Array.isArray(result.trace) ? result.trace : []),
        ...(result.batch ? [{ type: "runtime", value: result.batch }] : []),
        ...(result.validation ? [{ type: "build", value: result.validation }] : [])
      ],
      context: {
        source: "AfriNucChain",
        runtime: result.batch || null,
        build: result.validation || null
      },
      source: "AfriNucChain"
    });
  }
};

export default AfriNucChainDebugBridge;
