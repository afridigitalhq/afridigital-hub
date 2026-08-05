import Registry from "../registry/AfriControlCenterRegistry.js";

const AfriControlCenterRuntime = {

  modules(){

    return Registry.list();

  },


  overview(){

    const modules = this.modules();

    return {

      totalModules:
        modules.length,

      moduleNames:
        modules.map(
          module=>module.name
        )

    };

  },


  health(){

    return {

      service:"AfriControlCenterRuntime",

      status:"healthy"

    };

  },


  report(){

    return {

      service:"AfriControlCenterRuntime",

      overview:
        this.overview(),

      modules:
        this.modules(),

      health:
        this.health()

    };

  }

};

export default AfriControlCenterRuntime;
