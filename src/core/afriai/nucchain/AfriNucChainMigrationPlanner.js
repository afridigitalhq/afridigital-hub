const AfriNucChainMigrationPlanner = {

  create(request = {}){

    return {
      id:
        request.id || "AFRI-NUCCHAIN-BATCH",

      source:
        request.source || null,

      target:
        request.target || null,

      modules:
        request.modules || [],

      operations:
        request.operations || [],

      files:
        request.files || [],

      artifacts:
        request.artifacts || [],

      mode:
        request.mode || "MIGRATION",

      rules:[
        "SNAPSHOT_REQUIRED",
        "VALIDATE_AFTER_BATCH",
        "NO_DUPLICATE_RUNTIME",
        "APPROVAL_REQUIRED"
      ],

      status:
        "PLANNED",

      createdAt:
        Date.now()
    };

  }

};

export default AfriNucChainMigrationPlanner;
