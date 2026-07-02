import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../landing_v3/index.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
