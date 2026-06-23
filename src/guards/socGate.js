export function isSOCEnabled(user, route) {
  const role = user?.role || "guest";

  const SOC_ROUTES = [
    "/war-room",
    "/soc",
    "/admin"
  ];

  const isSOCRoute = SOC_ROUTES.some(r => route.startsWith(r));

  const isAdmin = role === "admin" || role === "soc_operator";

  return isAdmin && isSOCRoute;
}
