import AfriNexusCoordinator from "../AfriNexusCoordinator.js";
import AfriNexusMissionTargetAdapter from "../mission/adapters/AfriNexusMissionTargetAdapter.js";

const AfriNexusMissionEngine = {

  create(request = {}) {

    const targets =
      AfriNexusMissionTargetAdapter.resolve(request);


    return {
      type:"AFRINEXUS_MISSION",

      input:{
        humanRequest:request.humanRequest || ""
      },

      result:
        AfriNexusCoordinator.run(
          targets,
          {
            humanRequest:
              request.humanRequest || ""
          }
        )
    };

  }

};


export default AfriNexusMissionEngine;
