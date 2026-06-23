export class SOCAISuggestionOverlay {

  suggest(event) {
    return {
      message: "AI suggests monitoring node cluster pressure",
      confidence: 0.78,
      type: "VISUAL_HINT",
      renderMode: "GLASS_OVERLAY"
    };
  }
}
