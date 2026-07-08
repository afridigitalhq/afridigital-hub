export default class AfriCCTVGridEngine {
  constructor() {
    this.GRID_SIZE = 16; // 4x4 system
  }

  // =====================================================
  // 1. CLUSTER DETECTION (SPATIAL GROUPING)
  // =====================================================
  detectClusters(feeds = []) {
    const clusters = [];
    const used = new Set();

    feeds.forEach((feed) => {
      if (used.has(feed.feed)) return;

      const cluster = [feed];

      feeds.forEach((other) => {
        if (
          feed.feed !== other.feed &&
          this.isRelated(feed, other)
        ) {
          cluster.push(other);
          used.add(other.feed);
        }
      });

      used.add(feed.feed);
      clusters.push(cluster);
    });

    return clusters;
  }

  // =====================================================
  // 2. SIMPLE RELATION MODEL (CAN EVOLVE TO AI LATER)
  // =====================================================
  isRelated(a, b) {
    if (!a || !b) return false;

    // relation logic placeholder:
    // same signal type OR close intensity range
    return (
      a.signal === b.signal ||
      Math.abs((a.intensity || 0) - (b.intensity || 0)) < 20
    );
  }

  // =====================================================
  // 3. GRID POSITION GENERATOR (SPATIAL ALLOCATION)
  // =====================================================
  generateLayout(rankedFeeds = []) {
    const layout = new Array(this.GRID_SIZE).fill(null);

    let index = 0;

    for (const feed of rankedFeeds) {
      if (index >= this.GRID_SIZE) break;

      layout[index] = {
        ...feed,
        position: index,
        size: this.getTileSize(feed, index)
      };

      index++;
    }

    return layout;
  }

  // =====================================================
  // 4. DYNAMIC TILE SIZING (VISUAL PRIORITY)
  // =====================================================
  getTileSize(feed, index) {
    if (index === 0) return "LARGE"; // main focus
    if (feed.score > 80) return "MEDIUM";
    if (feed.score > 40) return "SMALL";
    return "FADED";
  }

  // =====================================================
  // 5. SMART GRID BUILD PIPELINE
  // =====================================================
  buildGrid(rankedFeeds = []) {
    const clusters = this.detectClusters(rankedFeeds);

    // flatten clusters while preserving importance
    const flattened = clusters.flat();

    return this.generateLayout(flattened);
  }
}
