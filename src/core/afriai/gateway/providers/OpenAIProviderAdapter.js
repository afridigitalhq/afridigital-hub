const OpenAIProviderAdapter = {

  id:"openai",

  capabilities:[
    "chat"
  ],

  async execute(payload = {}) {

    return {
      provider:"openai",
      type:"OPENAI_PROVIDER_RESPONSE",
      simulated:true,
      message:
        payload.message || null,
      timestamp:Date.now()
    };

  }

};

export default OpenAIProviderAdapter;
