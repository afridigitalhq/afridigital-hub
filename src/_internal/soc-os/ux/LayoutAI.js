export class LayoutAI {
  constructor() {
    this.suggestions = [];
  }

  generate(windows) {
    this.suggestions = windows.map(w => ({
      id: w.id,
      x: w.x + 20,
      y: w.y + 20,
      confidence: 0.7
    }));
    return this.suggestions;
  }
}
