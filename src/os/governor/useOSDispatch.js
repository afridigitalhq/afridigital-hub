import { OSDispatch, OSSidebarDispatch } from "./ReactGovernorBridge";

/**
 * Replace ALL dispatch, click, and UI mutations with this hook
 */
export function useOSDispatch() {
  return {
    dispatch: OSDispatch,
    sidebarDispatch: OSSidebarDispatch
  };
}
