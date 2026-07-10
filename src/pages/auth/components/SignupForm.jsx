export default function SignupForm(){
  return (
    <form className="auth-form">
      <h2>Create Account</h2>
      <input type="text" placeholder="Full name" />
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button type="submit">Create Account</button>
    </form>
  );
}
