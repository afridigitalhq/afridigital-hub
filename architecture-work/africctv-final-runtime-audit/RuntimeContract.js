export default class RuntimeContract {
  static create(){
    return {
      connection:"DISCONNECTED",
      cameras:[],
      aiObservation:null,
      recording:null,
      evidence:[],
      playback:null,
      wall:[],
      timestamp:null
    };
  }
}
