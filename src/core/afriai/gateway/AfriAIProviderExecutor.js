import AfriAIProviderRegistry from "./AfriAIProviderRegistry.js";

const adapters = new Map();

const AfriAIProviderExecutor = {

  register(adapter){

    if(!adapter?.id){
      return {
        registered:false,
        reason:"adapter_id_required"
      };
    }

    adapters.set(adapter.id, adapter);

    return {
      registered:true,
      provider:adapter.id
    };
  },


  async execute(providerId,payload={}){

    const adapter = adapters.get(providerId);

    if(!adapter){

      return {
        executed:false,
        reason:"adapter_not_registered"
      };

    }


    const result =
      await adapter.execute(payload);


    return {
      executed:true,
      provider:providerId,
      result,
      timestamp:Date.now()
    };

  },


  list(){

    return [...adapters.keys()];

  }

};


export default AfriAIProviderExecutor;
