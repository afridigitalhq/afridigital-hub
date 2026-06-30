
/**
 * 🧠 SOC Global Control Cockpit Dashboard Engine
 * - aggregates runtime telemetry
 * - renders system-wide OS control view
 * - read-only operational intelligence layer
 */

export class SOCCockpitDashboardEngine {
  constructor(runtime) {
    this.runtime = runtime;

    this.state = {
      systemHealth: "UNKNOWN",
      cpuLoad: 0,
      renderLoad: 0,
      activeWindows: 0,
      incidents: [],
      timeline: []
    };
  }

  /**
   * 🪟 ingest telemetry stream
   */
  ingest(event) {
    this.state.timeline.push({
      ...event,
      timestamp: Date.now()
    });

    this.analyze(event);
  }

  /**
   * 🧠 system-wide analysis
   */
  analyze(event) {
    if (event.type === "RENDER") {
      this.state.renderLoad = event.load || 0;
    }

    if (event.type === "INCIDENT") {
      this.state.incidents.push(event);
    }

    this.evaluateHealth();
  }

  /**
   * 🪟 system health synthesis
   */
  evaluateHealth() {
    const load = this.state.renderLoad;

    if (load > 0.85) this.state.systemHealth = "DEGRADED";
    else if (load > 0.6) this.state.systemHealth = "STRESSED";
    else this.state.systemHealth = "STABLE";
  }

  /**
   * 📊 dashboard snapshot
   */
  getDashboardState() {
    return {
      systemHealth: this.state.systemHealth,
      renderLoad: this.state.renderLoad,
      incidentCount: this.state.incidents.length,
      timelineSize: this.state.timeline.length,
      activeWindows: this.state.activeWindows
    };
  }

  /**
   * 🧠 attach to runtime telemetry stream
   */
  attach() {
    this.runtime.observeSystemEvent = (event) => {
      this.ingest(event);
    };

    this.runtime.getCockpitDashboard = () => {
      return this.getDashboardState();
    };

    this.runtime.attachTelemetry?.({
      type: "COCKPIT_DASHBOARD",
      status: "ACTIVE"
    });

    console.log("🧠 SOC Cockpit Dashboard ACTIVE");
  }
}
