import Contract from "../contracts/AfriControlCenterModuleContract.js";

const AfriControlCenterUIAdapter = {

  modules(modules){

    return Contract.list(modules);

  },


  cards(modules){

    return this.modules(modules).map(
      module=>({

        title:module.name,

        id:module.id,

        category:module.type,

        status:module.status

      })
    );

  },


  health(){

    return {

      service:"AfriControlCenterUIAdapter",

      status:"healthy"

    };

  }

};

export default AfriControlCenterUIAdapter;
