const components = [];

const AfriControlCenterComponentRegistry = {

  register(component){

    components.push(component);

    return {

      id:component.id,

      status:"registered"

    };

  },


  list(){

    return components;

  },


  stats(){

    return {

      components:components.length

    };

  },


  health(){

    return {

      service:"AfriControlCenterComponentRegistry",

      status:"healthy"

    };

  }

};

export default AfriControlCenterComponentRegistry;
