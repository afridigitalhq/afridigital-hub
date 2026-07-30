const migrationStore = [];

const AfriNucChainMigrationRegistry = {

  register(input = {}){

    const record = {

      migrationId:
        input.batch?.batchId || "UNKNOWN",

      status:
        input.execution?.status || "UNKNOWN",

      source:
        input.batch?.source || null,

      target:
        input.batch?.target || null,

      modules:
        input.batch?.modules || [],

      checkpoint:
        input.rollback?.checkpoint?.checkpointId || null,

      approval:
        input.approval?.status || null,

      executedAt:
        input.execution?.timestamp || Date.now(),

      createdAt:
        Date.now()

    };

    migrationStore.push(record);

    return record;

  },


  all(){

    return migrationStore;

  },


  find(id){

    return migrationStore.find(
      item =>
        item.migrationId === id
    );

  }

};

export default AfriNucChainMigrationRegistry;
