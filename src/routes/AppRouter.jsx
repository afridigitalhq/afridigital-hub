import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/landing/LandingPage";
import AuthPage from "../pages/auth/AuthPage";
import UserHome from "../pages/user/UserHome";
import AfriCCTV from "../pages/user/modules/AfriCCTV";
import GlobalExperienceShell from "../core/layout/global-shell/GlobalExperienceShell";
import LandingFooter from "../pages/landing/footer/LandingFooter";
import AdminHome from "../pages/admin/AdminHome";
import CommerceRouter from "../pages/apps/commerce/routes/CommerceRouter";

// TEMP AUTH MOCK (we will replace with real authService later)
const getUserRole = () => {
  return localStorage.getItem("role"); // "user" | "admin" | null
};

const ProtectedRoute = ({ children, role }) => {
  const userRole = getUserRole();

  if (!userRole) return <Navigate to="/auth" />;
  if (role && userRole !== role) return <Navigate to="/user" />;

  return children;
};

export default function AppRouter() {
  return (
    <Routes>

        {/* 🌍 LANDING */}
        <Route path="/" element={<Landing />} />

        {/* 🛒 COMMERCE APP */}
        <Route path="/commerce/*" element={<CommerceRouter />} />

        {/* 🔐 AUTH */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<Navigate to="/auth" replace />} />
        <Route path="/register" element={<Navigate to="/auth?mode=signup" replace />} />

        {/* 🧑‍💻 USER SHELL */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/africctv"
          element={
            <ProtectedRoute role="user">
              <GlobalExperienceShell>
                <AfriCCTV />
                <LandingFooter />
              </GlobalExperienceShell>
            </ProtectedRoute>
          }
        />

        {/* 🛠️ ADMIN SHELL */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminHome />
            </ProtectedRoute>
          }
        />

      </Routes>
  );
}
