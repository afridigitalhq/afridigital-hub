import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../landing/LandingPage";
import AuthPage from "../auth/AuthPage";
import MainApp from "../app/MainApp";
import AdminHome from "../adminhomepage/AdminHome";
import GlobalNav from "../ui/GlobalNav";
import AdminGuard from "../security/AdminGuard";
import AfriAICommandDock from "../ai/AfriAICommandDock";
import SystemStream from "../dashboard/SystemStream";

function Layout({ children }) {
  return (
    <div style={{paddingBottom:60}}>
      <GlobalNav />
      {children}
      <AfriAICommandDock />
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/app" element={<MainApp />} />

          <Route path="/stream" element={<SystemStream />} />

          <Route
            path="/adminhomepage"
            element={
              <AdminGuard>
                <AdminHome />
              </AdminGuard>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
