export class Win11GestureMask {

  interpret(event) {
    return {
      ...event,
      systemGesture: true,
      interpretedAsOSNative: true,
      confidence: 0.94
    };
  }

}
