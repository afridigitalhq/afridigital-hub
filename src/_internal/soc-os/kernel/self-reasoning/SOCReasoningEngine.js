export class SOCReasoningEngine {

  constructor(runtimeRegistry) {
    this.registry = runtimeRegistry;
    this.issues = [];
  }

  scan(systemMap) {
    this.issues = [];

    // detect duplicate UI systems
    const duplicates = this.findDuplicates(systemMap);

    if (duplicates.length > 0) {
      this.issues.push({
        type: "DUPLICATE_COMPONENTS",
        severity: "warning",
        data: duplicates
      });
    }

    return this.issues;
  }

  findDuplicates(map) {
    const seen = {};
    const dupes = [];

    Object.values(map).forEach(item => {
      if (!item) return;
      seen[item] = (seen[item] || 0) + 1;
    });

    Object.entries(seen).forEach(([k, v]) => {
      if (v > 1) dupes.push({ component: k, count: v });
    });

    return dupes;
  }

  suggestFixes() {
    return this.issues.map(issue => ({
      issue: issue.type,
      action: "CONSOLIDATE_TO_CANONICAL_REGISTRY",
      safe: true
    }));
  }
}
