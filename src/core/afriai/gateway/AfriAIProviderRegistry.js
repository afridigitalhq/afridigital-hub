const AfriAIProviderRegistry = {

  providers: new Map(),

  register(provider = {}) {
    if (!provider.id) {
      return {
        registered:false,
        reason:"provider_id_required"
      };
    }

    this.providers.set(provider.id, {
      id: provider.id,
      type: provider.type || "external",
      enabled: provider.enabled ?? false,
      capabilities: provider.capabilities || [],
      approvalRequired: true
    });

    return {
      registered:true,
      provider:this.providers.get(provider.id)
    };
  },


  get(id){
    return this.providers.get(id) || null;
  },


  list(){
    return [...this.providers.values()];
  }

};


export default AfriAIProviderRegistry;
