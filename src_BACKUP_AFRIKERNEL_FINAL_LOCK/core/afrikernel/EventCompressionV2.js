export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
export class EventCompressionV2 {
  encode(event) {
    return btoa(JSON.stringify(event));
  }

  decode(packet) {
    return JSON.parse(atob(packet));
  }

  compress(event) {
    return this.encode(event);
  }

  decompress(packet) {
    return this.decode(packet);
  }
}
