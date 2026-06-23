export class OSRuntimeGovernor {
  constructor({ loop }) {
    this.loop = loop;
  }

  dispatch(event) {
    // ALL INPUT MUST PASS THROUGH HERE
    return this.loop.handle(event);
  }

  interrupt(cmd) {
    return this.loop.interrupt(cmd);
  }

  stream(event) {
    return this.loop.stream(event);
  }
}
