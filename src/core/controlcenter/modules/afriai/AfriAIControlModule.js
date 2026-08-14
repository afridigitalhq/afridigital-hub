import API from "../../../controlcenter/api/AfriControlCenterAPI.js";

const AfriAIControlModule = {

  name:"AfriAI Gateway Security",

  id:"afriai_gateway_security",

  type:"security",

  dashboard(){

    return API.security();

  },

  nexus(){

    return API.nexusSecurity([
      {
        name:"ExternalAIGateway"
      }
    ]);

  }

};

export default AfriAIControlModule;
