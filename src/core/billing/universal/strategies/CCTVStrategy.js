export default class CCTVStrategy {
  process(event, policy) {
    return {
      cost: 1 * (policy?.multiplier || 1),
      type: "CCTV"
    };
  }
}
