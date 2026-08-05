import Runtime from "../runtime/AfriControlCenterRuntime.js";

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


  status(){

    return {

      service:"AfriControlCenterAPI",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAPI;
