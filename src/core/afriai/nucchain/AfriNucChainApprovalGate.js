const AfriNucChainApprovalGate = {

  approve(input = {}){

    const validation =
      input.validation || {};

    const debug =
      input.debugReport || {};

    const safe =
      validation.status === "VALIDATED" &&
      (!debug.findings ||
       debug.findings.every(
        item =>
          item.status !== "FAILED"
       ));

    return {

      approved:
        safe,

      status:
        safe
          ? "APPROVED"
          : "BLOCKED",

      reasons:
        safe
          ? []
          : [
              "VALIDATION_FAILED",
              "DEBUG_FINDINGS_PRESENT"
            ],

      timestamp:
        Date.now()

    };

  }

};

export default AfriNucChainApprovalGate;
