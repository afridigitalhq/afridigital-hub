const modules = [];

const AfriControlCenterRegistry = {

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

      service:"AfriControlCenterRegistry",

      status:"healthy"

    };

  }

};

export default AfriControlCenterRegistry;
