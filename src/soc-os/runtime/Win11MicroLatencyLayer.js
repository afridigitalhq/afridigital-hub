export class Win11MicroLatencyLayer {

  apply(action) {
    return new Promise(resolve => {
      const delay = 6 + Math.random() * 10; // human-perceived OS delay
      setTimeout(() => resolve(action()), delay);
    });
  }

}
