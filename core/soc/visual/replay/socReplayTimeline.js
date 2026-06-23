export class SOCReplayTimeline {

  constructor(stream = []) {
    this.stream = stream;
    this.index = 0;
  }

  scrub(step) {
    this.index = Math.max(0, this.index + step);
    return this.stream.slice(0, this.index);
  }

  rewind() {
    this.index = Math.max(0, this.index - 5);
    return this.stream.slice(0, this.index);
  }

  play() {
    return this.stream.slice(0, this.index++);
  }
}
