import AfriDebugRuntime from "./runtime/AfriDebugRuntime.js";
import AfriDebugIntelligence from "./intelligence/AfriDebugIntelligence.js";
import AfriDebugPolicy from "./AfriDebugPolicy.js";

const AfriDebugCore = {
  name: "AfriDebug",
  version: "1.0.0",
  enabled: true,

  inspect(input = {}) {
    if (!this.enabled || !AfriDebugPolicy.enabled) {
      return {
        type: "AFRIDEBUG",
        status: "disabled",
        execution: { allowed: false }
      };
    }

    const mode = input.mode || "ecosystem";
    const policy = AfriDebugPolicy.resolve(mode);

    const diagnostic = AfriDebugRuntime.analyze({
      ...input,
      authority: mode,
      trustedAuthority: input.trustedAuthority === true && mode === "admin"
    });

    const intelligence = AfriDebugIntelligence.explain(diagnostic);

    return {
      type: "AFRIDEBUG",
      version: this.version,
      status: diagnostic.status,
      mode,
      policy,
      diagnostic,
      intelligence,
      execution: {
        allowed: false,
        approvalRequired: true
      }
    };
  }
};

export default AfriDebugCore;
