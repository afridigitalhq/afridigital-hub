export const SOC_ROLES = {
  GUEST: "guest",
  USER: "user",
  ADMIN: "admin",
  SOC_OPERATOR: "soc_operator",
  SOC_SUPER: "soc_super"
};

export function isSOCUser(user) {
  return [
    SOC_ROLES.ADMIN,
    SOC_ROLES.SOC_OPERATOR,
    SOC_ROLES.SOC_SUPER
  ].includes(user?.role);
}
