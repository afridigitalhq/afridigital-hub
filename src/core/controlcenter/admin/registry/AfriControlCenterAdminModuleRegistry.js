const modules = [];

const AfriControlCenterAdminModuleRegistry = {

  register(module){

    modules.push(module);

    return {

      id:module.id,

      status:"registered"

    };

  },


  list(){

    return modules;

  },


  stats(){

    return {

      modules:modules.length

    };

  },


  health(){

    return {

      service:"AfriControlCenterAdminModuleRegistry",

      status:"healthy"

    };

  }

};

export default AfriControlCenterAdminModuleRegistry;
