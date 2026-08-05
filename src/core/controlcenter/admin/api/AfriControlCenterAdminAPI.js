import Runtime from "../runtime/AfriControlCenterAdminRuntime.js";

const AfriControlCenterAdminAPI = {

  overview(){

    return Runtime.overview();

  },


  modules(){

    return Runtime.modules();

  },


  report(){

    return {

      service:"AfriControlCenterAdminAPI",

      admin:
        Runtime.admin(),

      health:
        this.health()

    };

  },


  health(){

    return {

      service:"AfriControlCenterAdminAPI",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAdminAPI;
