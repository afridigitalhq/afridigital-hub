export function getRole() {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.role || "guest";
  } catch {
    return "guest";
  }
}

export function isAdmin() {
  return getRole() === "admin";
}
