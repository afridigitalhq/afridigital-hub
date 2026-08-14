import AfriNexusCoordinator from "../AfriNexusCoordinator.js";

const AfriNexusMissionEngine = {

  create(request = {}) {

    const targets = request.targets || [
      {
        name: request.target || "unknown",
        source: request.source || "afriai"
      }
    ];


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
