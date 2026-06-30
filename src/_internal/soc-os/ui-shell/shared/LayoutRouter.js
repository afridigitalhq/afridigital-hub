export function LayoutRouter(device) {
  return {
    isMobile: device === "mobile",
    isDesktop: device !== "mobile"
  };
}
