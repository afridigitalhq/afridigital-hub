export default class EvidenceRuntime {

  constructor(){
    this.state={
      motionDetected:false,
      zone:null,
      confidence:0,
      status:"NONE"
    };
  }

  update(evidence={}){

    this.state={
      motionDetected:evidence.motionDetected || false,
      zone:evidence.zone || null,
      confidence:evidence.confidence || 0,
      status:evidence.status || "NONE"
    };

    return this.state;
  }

  snapshot(){
    return this.state;
  }

}
