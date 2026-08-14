const AfriAIConnectionMissionAdapter = {

  resolve(){

    return [
      {
        name:"AfriDigitalAppAfriAI",
        source:"src",
        capabilities:[
          "ai",
          "runtime",
          "gateway"
        ],
        evidence:[]
      },

      {
        name:"AfriAIWeb",
        source:"src",
        capabilities:[
          "ai",
          "frontend"
        ],
        evidence:[]
      },

      {
        name:"AfriWhatsAppAI",
        source:"src/core/afriwhatsapp",
        capabilities:[
          "ai",
          "gateway",
          "runtime"
        ],
        evidence:[]
      }
    ];

  }

};

export default AfriAIConnectionMissionAdapter;
