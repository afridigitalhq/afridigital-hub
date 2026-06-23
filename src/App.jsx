import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicAppRouter from "./public/PublicAppRouter";
import { isSOCUser } from "./auth/socRoles";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const isSOC = isSOCUser(user);

  return (
    <BrowserRouter>
      {isSOC ? <SOCAppRouter /> : <PublicAppRouter />}
    </BrowserRouter>
  );
}
