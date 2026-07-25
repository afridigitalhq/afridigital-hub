class AfriAISpeechAdapter{

  constructor(){
    this.recognition=null;
    this.listeners=new Set();

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if(SpeechRecognition){
      this.recognition=new SpeechRecognition();

      this.recognition.continuous=false;
      this.recognition.interimResults=true;
      this.recognition.lang="en-US";

      this.recognition.onresult=(event)=>{
        const transcript=
          Array.from(event.results)
          .map(result=>result[0].transcript)
          .join("");

        this.emit({
          type:"transcript",
          value:transcript
        });
      };

      this.recognition.onerror=(error)=>{
        this.emit({
          type:"error",
          error
        });
      };

      this.recognition.onend=()=>{
        this.emit({
          type:"end"
        });
      };
    }
  }

  subscribe(listener){
    this.listeners.add(listener);
    return ()=>this.listeners.delete(listener);
  }

  emit(event){
    this.listeners.forEach(listener=>listener(event));
  }

  start(){
    if(!this.recognition){
      this.emit({
        type:"unsupported"
      });
      return;
    }

    this.recognition.start();
  }

  stop(){
    if(this.recognition){
      this.recognition.stop();
    }
  }

}

export default new AfriAISpeechAdapter();
