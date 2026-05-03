import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const route = window.location.pathname;

  if (route === "/login") return <Login />;
  if (route === "/app") return <Dashboard />;
  return <Landing />;
}
