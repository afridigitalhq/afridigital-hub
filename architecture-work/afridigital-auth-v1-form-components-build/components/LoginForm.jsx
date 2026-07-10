export default function LoginForm(){
  return (
    <form className="auth-form">
      <h3>Sign In</h3>
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button type="submit">🔐 Sign In</button>
    </form>
  );
}
