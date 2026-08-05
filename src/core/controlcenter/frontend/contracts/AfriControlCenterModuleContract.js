const AfriControlCenterModuleContract = {

  normalize(module){

    return {

      id:module.id,

      name:module.name,

      type:module.type,

      status:
        module.status || "available"

    };

  },


  list(modules){

    return modules.map(
      module=>this.normalize(module)
    );

  },


  health(){

    return {

      service:"AfriControlCenterModuleContract",

      status:"healthy"

    };

  }

};

export default AfriControlCenterModuleContract;
