import { useLocation } from "react-router-dom";

export default function useAuthMode(){
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return {
    mode: params.get("mode") === "signup" ? "signup" : "login",
  };
}
