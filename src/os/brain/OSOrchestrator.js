export class OSOrchestrator {
  constructor() {
    this.registry = new Map();     // all dashboards
    this.active = null;            // current dashboard
    this.listeners = new Set();    // UI subscribers
  }

  // 🧩 register dashboard plugin
  register(id, dashboard) {
    this.registry.set(id, {
      id,
      dashboard,
      status: "active"
    });
  }

  // 🔌 unregister plugin safely
  unregister(id) {
    this.registry.delete(id);
    if (this.active === id) this.active = null;
  }

  // 🧭 switch active dashboard
  activate(id) {
    if (!this.registry.has(id)) return;

    this.active = id;
    this._emit({
      type: "DASHBOARD_SWITCH",
      payload: { active: id }
    });
  }

  // ⚡ DAG → UI routing entry point
  routeEvent(event) {
    const map = {
      SECURITY_ALERT: "afriscan",
      AI_EVENT: "afriai",
      FOOTBALL_EVENT: "football",
      SYSTEM_EVENT: "soc",
      DASH_EVENT: "dashboard"
    };

    const target = map[event.type];

    if (target && this.registry.has(target)) {
      this.activate(target);
    }

    this._emit({
      type: "EVENT_ROUTED",
      payload: event
    });
  }

  // 👂 UI subscriptions
  subscribe(fn) {
    this.listeners.add(fn);

    return () => this.listeners.delete(fn);
  }

  // 📡 internal event broadcaster
  _emit(event) {
    this.listeners.forEach(fn => fn(event));
  }

  // 📊 debug snapshot
  snapshot() {
    return {
      active: this.active,
      dashboards: Array.from(this.registry.keys())
    };
  }
}
