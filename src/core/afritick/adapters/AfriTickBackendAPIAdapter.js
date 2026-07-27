const AfriTickBackendAPIAdapter = {

  services:[
    "membership",
    "subscription",
    "billing",
    "payments",
    "benefits"
  ],

  request(service, payload){

    return {
      service,
      payload,
      source:"AfriTickSDK",
      execution:"AfriDigitalAPI"
    };

  }

};

export default AfriTickBackendAPIAdapter;
