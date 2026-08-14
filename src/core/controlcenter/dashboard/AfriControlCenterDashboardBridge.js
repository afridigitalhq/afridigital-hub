import API from "../api/AfriControlCenterAPI.js";

const AfriControlCenterDashboardBridge = {

  overview(){

    return API.overview();

  },


  modules(){

    return API.modules();

  },


  health(){

    return API.health();

  },


  security(){

    return API.security();

  },


  dashboard(){

    return {

      title:"AfriControlCenter",

      overview:
        this.overview(),

      modules:
        this.modules(),

      health:
        this.health(),

      security:
        this.security(),

      nexusSecurity:
        this.nexusSecurity([{name:"ExternalAIGateway"}])

    };

  },


  nexusSecurity(targets=[]){

    return API.nexusSecurity(targets);

  },


  status(){

    return {

      service:"AfriControlCenterDashboardBridge",

      status:"healthy"

    };

  }

};

export default AfriControlCenterDashboardBridge;
