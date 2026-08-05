import Registry from "../components/registry/AfriControlCenterComponentRegistry.js";

const AfriControlCenterUIRuntime = {

  components(){

    return Registry.list();

  },


  dashboard(){

    return {

      name:"AfriControlCenter Dashboard",

      components:
        this.components()

    };

  },


  health(){

    return {

      service:"AfriControlCenterUIRuntime",

      status:"healthy"

    };

  },


  report(){

    return {

      dashboard:
        this.dashboard(),

      health:
        this.health()

    };

  }

};

export default AfriControlCenterUIRuntime;
