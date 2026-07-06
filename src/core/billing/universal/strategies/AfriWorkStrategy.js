export default class AfriWorkStrategy {
  process(event, policy) {
    return {
      cost: 0.5,
      type: "WORK"
    };
  }
}
