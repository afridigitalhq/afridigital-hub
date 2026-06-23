export class LayoutSuggestionEngine {
  constructor() {
    this.suggestions = [];
  }

  suggest(layout) {
    this.suggestions.push({
      id: Date.now(),
      layout,
      status: "PENDING_USER_APPROVAL"
    });
  }

  apply(id) {
    return this.suggestions.find(s => s.id === id);
  }
}
