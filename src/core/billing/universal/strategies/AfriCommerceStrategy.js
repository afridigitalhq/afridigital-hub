export default class AfriCommerceStrategy {
  process(event, policy) {
    return {
      cost: 2,
      type: "COMMERCE"
    };
  }
}
