const AFDS004AfriDebugCoreManifest = {

  id: "AFDS-004",

  source:
    "AfriNucChain",

  target:
    "AfriDebug",

  change:
    "CREATE_DEBUG_CORE_REGISTRY",

  modules: [
    "registry",
    "analysis",
    "reports",
    "runtime-monitoring"
  ],

  mode:
    "PLATFORM_CORE",

  rules: [
    "SNAPSHOT_REQUIRED",
    "VALIDATE_AFTER_BATCH",
    "APPROVAL_REQUIRED",
    "AUDIT_REQUIRED"
  ],

  status:
    "PLANNED",

  createdAt:
    Date.now()

};

export default AFDS004AfriDebugCoreManifest;
