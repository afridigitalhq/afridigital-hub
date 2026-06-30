import { SoundEngine } from "./SoundEngine";

const engine = new SoundEngine();

export function useSystemSound() {
  return {
    click: () => engine.play("click"),
    notify: () => engine.play("notify"),
    error: () => engine.play("error")
  };
}
