/**
 * AfriTick Trust Activity Ledger
 *
 * OWNER:
 * AfriTickCore audit history.
 *
 * RULE:
 * Every trust-related action creates a traceable event.
 */

const AfriTickTrustActivityLedger = {

  events:[],

  record(event){

    this.events.push({
      ...event,
      timestamp:Date.now()
    });

    return event;

  },

  history(entityId){

    return this.events.filter(
      event => event.entityId === entityId
    );

  }

};

export default AfriTickTrustActivityLedger;
