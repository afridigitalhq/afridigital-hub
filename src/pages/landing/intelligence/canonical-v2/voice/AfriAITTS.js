class AfriAITTS{

  constructor(){
    this.engine=null;
    this.listeners=new Set();
    this.voice=null;
    this.init();
  }

  init(){

    const engine=this.getEngine();

    if(!engine) return;

    this.cacheVoice();

    engine.onvoiceschanged=()=>{
      this.cacheVoice();
    };

  }

  getEngine(){
    if(!this.engine && typeof window!=="undefined"){
      this.engine=window.speechSynthesis;
    }

    return this.engine;
  }

  cacheVoice(){

    const engine=this.getEngine();

    if(!engine) return;

    const voices=engine.getVoices();

    this.voice=
      voices.find(v=>v.lang.startsWith("en")) ||
      voices[0] ||
      null;

  }


  warmup(){
    const engine=this.getEngine();

    if(!engine) return;

    const warm=new SpeechSynthesisUtterance("");
    warm.volume=0;
    warm.rate=10;

    engine.speak(warm);

    setTimeout(()=>{
      engine.cancel();
    },50);
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

    console.log("[AfriAI Browser TTS]",text);

    const engine=this.getEngine();

    if(!engine || !text) return;

    if(engine.speaking){
      engine.cancel();
    }

    const utterance=new SpeechSynthesisUtterance(text);

    utterance.lang="en-US";
    utterance.rate=1;
    utterance.pitch=1;
    utterance.volume=1;

    if(!this.voice){
      this.cacheVoice();
    }

    if(this.voice){
      utterance.voice=this.voice;
    }

    utterance.onstart=()=>{
      this.emit({type:"start"});
    };

    utterance.onend=()=>{
      this.emit({type:"end"});

      setTimeout(()=>{
        if(engine.paused){
          engine.resume();
        }
      },100);
    };

    utterance.onerror=(error)=>{
      this.emit({type:"error",error});

      setTimeout(()=>{
        if(engine.paused){
          engine.resume();
        }
      },100);
    };

    if(engine.paused){
      engine.resume();
    }

    engine.speak(utterance);

  }

}

export default new AfriAITTS();
