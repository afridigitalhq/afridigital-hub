export class AudioReactiveEngine {
  constructor(ctx) {
    this.ctx = ctx;
    this.analyser = this.ctx.createAnalyser();
    this.data = new Uint8Array(256);
  }

  connect(source) {
    const s = this.ctx.createMediaElementSource(source);
    s.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  energy() {
    this.analyser.getByteFrequencyData(this.data);
    return this.data.reduce((a,b)=>a+b,0) / this.data.length / 255;
  }
}
