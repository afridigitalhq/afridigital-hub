class AfriAIAudioAnalyzer{

  constructor(){
    this.context=null;
    this.analyser=null;
    this.source=null;
    this.listeners=new Set();
    this.running=false;
  }

  subscribe(listener){
    this.listeners.add(listener);
    return ()=>this.listeners.delete(listener);
  }

  emit(level){
    this.listeners.forEach(listener=>listener(level));
  }

  async start(){

    const stream = await navigator.mediaDevices.getUserMedia({
      audio:true
    });

    this.context =
      new AudioContext();

    this.analyser =
      this.context.createAnalyser();

    this.source =
      this.context.createMediaStreamSource(stream);

    this.source.connect(this.analyser);

    this.analyser.fftSize=256;

    this.running=true;

    this.measure();
  }

  measure(){

    if(!this.running) return;

    const data =
      new Uint8Array(
        this.analyser.frequencyBinCount
      );

    this.analyser.getByteFrequencyData(data);

    const average =
      data.reduce((a,b)=>a+b,0) / data.length;

    const level =
      Math.min(average / 128,1);

    this.emit(level);

    requestAnimationFrame(
      ()=>this.measure()
    );
  }

  stop(){

    this.running=false;

    if(this.context){
      this.context.close();
    }
  }

}

export default new AfriAIAudioAnalyzer();
