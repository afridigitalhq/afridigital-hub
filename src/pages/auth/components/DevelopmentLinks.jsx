import { useNavigate } from "react-router-dom";

export default function DevelopmentLinks(){
  const navigate = useNavigate();

  const enterUser = () => {
    localStorage.setItem("role","user");
    navigate("/user");
  };

  const enterAdmin = () => {
    localStorage.setItem("role","admin");
    navigate("/admin");
  };

  return (
    <div className="development-links">
      <button onClick={()=>navigate("/")}>Home</button>
      <button onClick={enterUser}>🚀 Preview Main App</button>
      <button onClick={enterAdmin}>🛡️ Preview Admin</button>
    </div>
  );
}
