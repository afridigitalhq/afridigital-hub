import Registry from "../registry/AfriControlCenterAdminModuleRegistry.js";

const AfriControlCenterAdminRuntime = {

  modules(){

    return Registry.list();

  },


  overview(){

    return {

      totalModules:this.modules().length,

      moduleNames:
        this.modules().map(
          module=>module.name
        )

    };

  },


  admin(){

    return {

      name:"AfriControlCenter Admin Runtime",

      modules:
        this.modules(),

      overview:
        this.overview()

    };

  },


  health(){

    return {

      service:"AfriControlCenterAdminRuntime",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAdminRuntime;
