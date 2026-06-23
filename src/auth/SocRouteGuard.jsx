import React from "react";
import { Navigate } from "react-router-dom";
import { isSOCUser } from "./socRoles";

export default function SocRouteGuard({ user, children }) {
  if (!isSOCUser(user)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
