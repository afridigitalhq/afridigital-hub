export class SOCKernel {
  constructor() {
    this.mode = "desktop"; // desktop | mobile
    this.activeView = "warroom";

    this.layers = {
      webgl: true,
      replay: true,
      terminal: true,
      physics: true,
      voice: true
    };

    this.listeners = [];
  }

  setMode(mode) {
    this.mode = mode;
    this.emit({ type: "MODE_CHANGE", mode });
  }

  switchView(view) {
    this.activeView = view;
    this.emit({ type: "VIEW_CHANGE", view });
  }

  toggleLayer(layer) {
    this.layers[layer] = !this.layers[layer];
    this.emit({ type: "LAYER_TOGGLE", layer, value: this.layers[layer] });
  }

  emit(event) {
    this.listeners.forEach(fn => fn(event));
  }

  subscribe(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(f => f !== fn);
    };
  }
}
