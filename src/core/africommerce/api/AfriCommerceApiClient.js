class AfriCommerceApiClient {

  async request(endpoint, options = {}){

    return {
      endpoint,
      status: "READY",
      options
    };

  }

}

export default new AfriCommerceApiClient();
