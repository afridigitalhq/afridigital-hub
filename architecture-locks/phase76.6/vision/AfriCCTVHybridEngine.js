export default class AfriCCTVHybridEngine {
  constructor() {
    // Short-term session memory only (safe + resettable)
    this.memory = {
      interactions: new Map(), // feedId -> { pin, focus, expand }
      lastScores: new Map()
    };
  }

  // =====================================================
  // 1. RULE-BASED SCORING (SYSTEM SIGNAL INTELLIGENCE)
  // =====================================================
  calculateBaseScore(event) {
    let score = 0;

    if (!event) return 0;

    // motion detection weight
    if (event.motion) score += 10;

    // intensity contribution
    if (typeof event.intensity === "number") {
      score += Math.floor(event.intensity / 10);
    }

    // active signal boost
    if (event.signal === "ACTIVE") {
      score += 20;
    }

    return score;
  }

  // =====================================================
  // 2. SHORT-TERM INTERACTION TRACKING
  // =====================================================
  trackInteraction(feedId, type) {
    if (!feedId) return;

    const current = this.memory.interactions.get(feedId) || {
      pin: 0,
      focus: 0,
      expand: 0
    };

    if (type === "pin") current.pin += 1;
    if (type === "focus") current.focus += 1;
    if (type === "expand") current.expand += 1;

    this.memory.interactions.set(feedId, current);
  }

  // =====================================================
  // 3. MEMORY BIAS ENGINE (SHORT-TERM ADAPTATION)
  // =====================================================
  getMemoryBias(feedId) {
    const data = this.memory.interactions.get(feedId);

    if (!data) return 0;

    return (
      data.pin * 25 +
      data.focus * 10 +
      data.expand * 40
    );
  }

  // =====================================================
  // 4. FINAL HYBRID SCORE (RULES + MEMORY)
  // =====================================================
  computeScore(event) {
    if (!event?.feed) return 0;

    const base = this.calculateBaseScore(event);
    const memory = this.getMemoryBias(event.feed);

    const finalScore = base + memory;

    this.memory.lastScores.set(event.feed, finalScore);

    return finalScore;
  }

  // =====================================================
  // 5. FEED RANKING ENGINE (FOR 16-GRID SYSTEM)
  // =====================================================
  rankFeeds(events = []) {
    return events
      .map((event) => ({
        ...event,
        score: this.computeScore(event)
      }))
      .sort((a, b) => b.score - a.score);
  }

  // =====================================================
  // 6. UI INTERACTION HOOKS
  // =====================================================
  onPin(feedId) {
    this.trackInteraction(feedId, "pin");
  }

  onFocus(feedId) {
    this.trackInteraction(feedId, "focus");
  }

  onExpand(feedId) {
    this.trackInteraction(feedId, "expand");
  }

  // =====================================================
  // 7. RESET SESSION MEMORY (SAFE MODE)
  // =====================================================
  resetSession() {
    this.memory.interactions.clear();
    this.memory.lastScores.clear();
  }
}
