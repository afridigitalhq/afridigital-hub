import Runtime from "../runtime/AfriControlCenterRuntime.js";
import AfriAIGatewaySecuritySnapshot from "../../afriai/gateway/AfriAIGatewaySecuritySnapshot.js";
import AfriNexusSecurityPolicyEngine from "../../afrinexus/security/AfriNexusSecurityPolicyEngine.js";
import NexusSecurityAPI from "./AfriControlCenterNexusSecurityAPI.js";

const AfriControlCenterAPI = {

  modules(){

    return Runtime.modules();

  },


  overview(){

    return Runtime.overview();

  },


  health(){

    return Runtime.health();

  },


  report(){

    return Runtime.report();

  },


  security(){

    return AfriAIGatewaySecuritySnapshot.capture();

  },

  nexusSecurity(targets=[]){

    return AfriNexusSecurityPolicyEngine.evaluate(targets);

  },


  status(){

    return {

      service:"AfriControlCenterAPI",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAPI;
