import Runtime from "../runtime/AfriControlCenterUIRuntime.js";

const AfriControlCenterDashboardShellContract = {

  sections(){

    return [

      {
        id:"overview",
        title:"Overview",
        type:"summary"
      },

      {
        id:"modules",
        title:"Modules",
        type:"registry"
      },

      {
        id:"health",
        title:"Health",
        type:"monitoring"
      }

    ];

  },


  dashboard(){

    return {

      name:"AfriControlCenter",

      runtime:
        Runtime.dashboard(),

      sections:
        this.sections()

    };

  },


  health(){

    return {

      service:"AfriControlCenterDashboardShellContract",

      status:"healthy"

    };

  }

};

export default AfriControlCenterDashboardShellContract;
