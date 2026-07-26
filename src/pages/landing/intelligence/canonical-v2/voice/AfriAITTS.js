class AfriAITTS{

  constructor(){
    this.engine=window.speechSynthesis;
    this.listeners=new Set();
  }

  subscribe(listener){
    this.listeners.add(listener);
    return ()=>this.listeners.delete(listener);
  }

  emit(event){
    this.listeners.forEach(listener=>listener(event));
  }

  stop(){
    this.engine.cancel();
    this.emit({type:"end"});
  }

  speak(text){

    if(!this.engine || !text) return;

    this.engine.cancel();

    const utterance=new SpeechSynthesisUtterance(text);

    utterance.lang="en-US";
    utterance.rate=1;
    utterance.pitch=1;
    utterance.volume=1;

    const voices=this.engine.getVoices();

    const preferred=
      voices.find(v=>v.lang.startsWith("en")) || voices[0];

    if(preferred){
      utterance.voice=preferred;
    }

    utterance.onstart=()=>{
      this.emit({type:"start"});
    };

    utterance.onend=()=>{
      this.emit({type:"end"});
    };

    utterance.onerror=(error)=>{
      this.emit({type:"error",error});
    };

    this.engine.speak(utterance);

  }

}

export default new AfriAITTS();
