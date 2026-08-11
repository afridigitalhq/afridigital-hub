const AfriAICapabilityContract = Object.freeze({
  required: ["id", "topic", "description", "operations", "provider"],
  authorityLevels: Object.freeze(["ecosystem", "studio", "admin"]),
  validate(capability = {}) {
    const missing = this.required.filter((field) => {
      if (field === "operations") return !Array.isArray(capability[field]);
      return !capability[field];
    });
    if (missing.length) return { valid: false, missing };
    if (!this.authorityLevels.includes(capability.authority || "ecosystem")) {
      return { valid: false, reason: "INVALID_AUTHORITY_LEVEL" };
    }
    return { valid: true, missing: [] };
  }
});
export default AfriAICapabilityContract;
