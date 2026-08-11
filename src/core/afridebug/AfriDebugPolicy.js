const POLICIES = Object.freeze({
  admin: Object.freeze({
    level: "admin",
    explain: true,
    diagnose: true,
    proposeRepair: true,
    executeRepair: true,
    requiresApproval: true
  }),

  studio: Object.freeze({
    level: "studio",
    explain: true,
    diagnose: true,
    proposeRepair: false,
    executeRepair: false,
    requiresApproval: true
  }),

  ecosystem: Object.freeze({
    level: "ecosystem",
    explain: true,
    diagnose: true,
    proposeRepair: false,
    executeRepair: false,
    requiresApproval: true
  })
});

const AfriDebugPolicy = {
  enabled: true,

  resolve(mode = "ecosystem") {
    return POLICIES[mode] || POLICIES.ecosystem;
  }
};

export default AfriDebugPolicy;
