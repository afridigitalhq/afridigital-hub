class SOCEventSpine {
  constructor() {
    this.subs = [];
  }

  publish(event) {
    this.subs.forEach(fn => fn(event));
  }

  subscribe(fn) {
    this.subs.push(fn);
  }
}

export const spine = new SOCEventSpine();
export default spine;
