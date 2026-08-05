import API from "../api/AfriControlCenterAdminAPI.js";

const AfriControlCenterAdminDashboardBridge = {

  dashboard(){

    return {

      title:"AfriControlCenter Admin",

      overview:
        API.overview(),

      modules:
        API.modules()

    };

  },


  report(){

    return {

      service:"AfriControlCenterAdminDashboardBridge",

      dashboard:
        this.dashboard(),

      health:
        this.health()

    };

  },


  health(){

    return {

      service:"AfriControlCenterAdminDashboardBridge",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAdminDashboardBridge;
