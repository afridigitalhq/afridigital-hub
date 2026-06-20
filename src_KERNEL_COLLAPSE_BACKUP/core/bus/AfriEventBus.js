// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
// AFRISYNC_CLUSTER_INGESTION_ACTIVE
class AfriKernelEventBus {
  constructor() {
    this.ws = null;
    this.listeners = new Map();
    this.history = [];
    this.maxHistory = 200;
    this.retry = 0;
    this.maxRetry = 50;
  }

  connect() {
// AFRISYNC_INGEST_ONLY     this.ws = new WebSocket("wss://afridigital-api.onrender.com");

    this.ws.onopen = () => {
      this.retry = 0;
      this.emit("system.connected", { ok: true });
    };

    this.ws.onmessage = (msg) => {
      try {
        const e = JSON.parse(msg.data);
        this._store(e);
        this._dispatch(e.type, e.payload);
      } catch {}
    };

    this.ws.onclose = () => this._reconnect();
    this.ws.onerror = () => {};
  }

  _reconnect() {
    if (this.retry >= this.maxRetry) return;
    const delay = Math.min(1000 * 2 ** this.retry, 30000);
    this.retry++;
    setTimeout(() => this.connect(), delay);
  }

  _store(e) {
    this.history.push(e);
    if (this.history.length > this.maxHistory) this.history.shift();
  }

  _dispatch(type, payload) {
    (this.listeners.get(type) || []).forEach(fn => fn(payload));
  }

  on(type, fn) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push(fn);

    this.history.filter(e => e.type === type).forEach(e => fn(e.payload));

    return () => this.off(type, fn);
  }

  off(type, fn) {
    const arr = this.listeners.get(type) || [];
    this.listeners.set(type, arr.filter(f => f !== fn));
  }

  emit(type, payload) {
    if (this.ws?.readyState === 1) {
      this.ws.send(JSON.stringify({ type, payload }));
    }
  }
}

export const AfriBus = new AfriKernelEventBus();
AfriBus.connect();
