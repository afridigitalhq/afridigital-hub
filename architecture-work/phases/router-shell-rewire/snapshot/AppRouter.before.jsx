import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/landing/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import UserHome from "../pages/user/UserHome";
import AdminHome from "../pages/admin/AdminHome";

// TEMP AUTH MOCK (we will replace with real authService later)
const getUserRole = () => {
  return localStorage.getItem("role"); // "user" | "admin" | null
};

const ProtectedRoute = ({ children, role }) => {
  const userRole = getUserRole();

  if (!userRole) return <Navigate to="/login" />;
  if (role && userRole !== role) return <Navigate to="/user" />;

  return children;
};

export default function AppRouter() {
  return (
    <BrowserRouter basename="">
      <Routes>

        {/* 🌍 LANDING */}
        <Route path="/" element={<Landing />} />

        {/* 🔐 AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🧑‍💻 USER SHELL */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserHome />
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
    </BrowserRouter>
  );
}
