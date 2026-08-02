import { afriEventBus } from "./AfriEventBus.js";

export function dispatchRuntimeEvent(event = {}) {
  if (!event?.type) return false;

  afriEventBus.emit(event.type, event.payload);

  return true;
}

export default dispatchRuntimeEvent;
