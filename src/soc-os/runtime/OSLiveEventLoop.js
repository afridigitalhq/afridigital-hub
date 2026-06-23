export class OSLiveEventLoop {
  constructor(kernel) {
    this.kernel = kernel;
  }

  dispatch(event) {
    return this.kernel.tick(event);
  }
}
