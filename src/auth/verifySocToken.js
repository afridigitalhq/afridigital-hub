import { isSOCUser } from "./socRoles";

export function verifySocAccess(tokenPayload, route) {
  if (!tokenPayload) return false;

  const roleOk = isSOCUser(tokenPayload);

  const socRoutes = [
    "/war-room",
    "/soc-os",
    "/admin/soc"
  ];

  const routeOk = socRoutes.some(r => route.startsWith(r));

  return roleOk && routeOk;
}
