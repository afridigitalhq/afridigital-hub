
class LiveEngine {
  constructor() {
    this.subscribers = {
      vision: [],
      sports: [],
      metaworld: []
    };

    this.running = false;
  }

  subscribe(channel, cb) {
    if (this.subscribers[channel]) {
      this.subscribers[channel].push(cb);
    }
  }

  emit(channel, data) {
    if (this.subscribers[channel]) {
      this.subscribers[channel].forEach(cb => cb(data));
    }
  }

  start() {
    if (this.running) return;
    this.running = true;

    // AfriVision mock stream (CCTV-like frames)
    setInterval(() => {
      this.emit("vision", {
        type: "FRAME",
        feed: "AfriVision-MOCK",
        timestamp: Date.now(),
        motion: Math.random() > 0.7
      });
    }, 2000);

    // AfriSports mock ticker
    setInterval(() => {
      const teams = ["Lagos FC", "Abuja United", "Kano Pillars", "Port Harcourt Stars"];
      const score = () => Math.floor(Math.random() * 4);

      this.emit("sports", {
        type: "MATCH_UPDATE",
        home: teams[Math.floor(Math.random() * teams.length)],
        away: teams[Math.floor(Math.random() * teams.length)],
        score: `${score()} - ${score()}`,
        minute: Math.floor(Math.random() * 90),
        timestamp: Date.now()
      });
    }, 4000);

    // MetaWorld heartbeat (world simulation pulse)
    setInterval(() => {
      this.emit("metaworld", {
        type: "WORLD_PULSE",
        usersOnline: Math.floor(Math.random() * 50000),
        events: Math.floor(Math.random() * 20),
        timestamp: Date.now()
      });
    }, 5000);
  }

  stop() {
    this.running = false;
  }
}

export const liveEngine = new LiveEngine();
