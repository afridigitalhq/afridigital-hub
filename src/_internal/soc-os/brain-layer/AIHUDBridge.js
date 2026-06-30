import { AfriAIDesktopBrain } from "../final/ai/AfriAIDesktopBrain";

export class AIHUDBridge {

  constructor() {
    this.brain = new AfriAIDesktopBrain();
  }

  getSuggestions(state) {
    return this.brain.suggestLayout(state);
  }

  getInsights(state) {
    return this.brain.analyze(state);
  }
}
