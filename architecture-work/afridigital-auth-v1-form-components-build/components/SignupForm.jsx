export default function SignupForm(){
  return (
    <form className="auth-form">
      <h3>Create Account</h3>
      <input type="text" placeholder="Full name" />
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Create password" />
      <button type="submit">🚀 Create Account</button>
    </form>
  );
}
