const AfriNucChainTrace = {

  create(event, payload = {}){

    return {
      event,
      payload,
      timestamp:
        Date.now()
    };

  }

};

export default AfriNucChainTrace;
