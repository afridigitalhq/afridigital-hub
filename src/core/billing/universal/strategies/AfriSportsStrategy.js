export default class AfriSportsStrategy {
  process(event, policy) {
    return {
      cost: 1.2,
      type: "SPORTS"
    };
  }
}
