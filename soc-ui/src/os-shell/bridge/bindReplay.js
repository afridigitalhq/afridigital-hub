export function bindReplay(replayEngine, osBridge) {
  osBridge.subscribe((event) => {
    if (event.type === "ATTACK") {
      replayEngine.load(event.timeline || []);
    }

    if (event.type === "REWIND") {
      replayEngine.rewind(10);
    }
  });
}
