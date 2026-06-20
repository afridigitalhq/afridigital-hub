export function validateAccess(user, cost = 10) {
  return user.africoin >= cost;
}

export function charge(user, cost = 10) {
  if (user.africoin < cost) return user;

  return {
    ...user,
    africoin: user.africoin - cost
  };
}
