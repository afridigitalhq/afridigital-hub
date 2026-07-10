export default function LoginForm(){
  return (
    <form className="auth-form">
      <h2>Welcome Back</h2>
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
