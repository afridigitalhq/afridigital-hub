export default class APIUsageStrategy {
  process(event, policy) {
    return {
      cost: 0.01,
      type: "API"
    };
  }
}
