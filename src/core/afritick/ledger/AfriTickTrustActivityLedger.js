/**
 * AfriTick Trust Activity Ledger V2
 *
 * Immutable trust event history.
 *
 * RULE:
 * Every trust decision must be auditable.
 */

const AfriTickTrustActivityLedger = {

  events:[],

  record(event){

    this.events.push({
      type:event.type,
      actor:event.actor || "SYSTEM",
      timestamp:Date.now(),
      metadata:event.metadata || {}
    });

    return {
      status:"RECORDED"
    };

  },

  history(){

    return this.events;

  }

};

export default AfriTickTrustActivityLedger;
