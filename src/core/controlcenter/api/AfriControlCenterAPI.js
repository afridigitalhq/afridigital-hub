import Runtime from "../runtime/AfriControlCenterRuntime.js";
import AfriAIGatewaySecuritySnapshot from "../../afriai/gateway/AfriAIGatewaySecuritySnapshot.js";

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


  status(){

    return {

      service:"AfriControlCenterAPI",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAPI;
