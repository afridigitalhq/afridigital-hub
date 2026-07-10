import { Link } from "react-router-dom";

export default function DevelopmentLinks(){
  return (
    <div className="development-links">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
}
