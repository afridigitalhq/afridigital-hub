export class Win11InputLatencySmoother {

  smooth(input) {
    return {
      ...input,
      latency: 8 + Math.random() * 4,
      feel: "windows11_native_response"
    };
  }

}
