const AfriDebugIntelligence = {
  explain(diagnostic = {}) {
    const {
      error = null,
      evidence = [],
      context = {},
      source = "unknown"
    } = diagnostic;

    const hasEvidence = Array.isArray(evidence) && evidence.length > 0;

    return {
      type: "AFRIDEBUG_INTELLIGENCE",
      source,
      explanation: error
        ? `AfriDebug detected an error condition: ${error}`
        : hasEvidence
          ? "AfriDebug has diagnostic evidence available for analysis."
          : "There is not enough diagnostic evidence to determine the problem.",
      likelyCause: hasEvidence
        ? "Requires correlation of the supplied evidence with the runtime context."
        : null,
      recommendations: hasEvidence
        ? [
            "Inspect the supplied runtime evidence.",
            "Correlate the error with the provided context.",
            "Validate the suspected root cause before proposing a repair."
          ]
        : [
            "Collect the relevant error, runtime state, logs, or reproduction details."
          ],
      evidence,
      context,
      repair: {
        proposed: false,
        executable: false,
        approvalRequired: true
      },
      timestamp: Date.now()
    };
  }
};

export default AfriDebugIntelligence;
