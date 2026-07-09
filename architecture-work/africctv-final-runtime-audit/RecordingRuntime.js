export default class RecordingRuntime{

  constructor(){
    this.state="IDLE";
    this.startedAt=null;
  }

  update(recording){

    if(!recording){
      this.state="IDLE";
      this.startedAt=null;
      return this.state;
    }

    this.state = recording.state || "IDLE";
    this.startedAt = recording.startedAt || null;

    return this.state;
  }

  isRecording(){
    return this.state==="ACTIVE";
  }

  snapshot(){
    return {
      state:this.state,
      startedAt:this.startedAt,
      active:this.isRecording()
    };
  }

}
