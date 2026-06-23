import { OS_FEATURES } from "./OSFeatureFlags";

export function loadOSModule(flag, factory) {
  if (!OS_FEATURES[flag]) return null;
  try {
    return factory();
  } catch (e) {
    console.warn("OS module failed safely:", flag);
    return null;
  }
}
