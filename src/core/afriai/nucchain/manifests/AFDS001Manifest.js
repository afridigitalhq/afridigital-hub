const AFDS001 = {
  id: "AFDS-001",
  name: "AfriDesign AI Consolidation",
  type: "MIGRATION",
  source: "AfriDesign-Studio/src/platform/ai",
  target: "AfriDigital-hub/src/core/afridesign/ai",
  modules: [
    "components",
    "context",
    "runtime",
    "services"
  ],
  rules: [
    "NO_DUPLICATE_AFRIAI_RUNTIME",
    "PRESERVE_TRUST_LAYER",
    "VALIDATE_IMPORTS",
    "SNAPSHOT_BEFORE_CHANGE"
  ],
  status: "PLANNED"
};

export default AFDS001;
