import { OSSidebarDispatch } from "./ReactGovernorBridge";

/**
 * Wrap sidebar actions to prevent state mutation bypass
 */
export function withSidebarGuard(handler) {
  return (event) => {
    OSSidebarDispatch({
      source: "Sidebar",
      type: event?.type,
      payload: event
    });

    return handler?.(event);
  };
}
