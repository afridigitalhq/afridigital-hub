import useAuthMode from "./hooks/useAuthMode";
import useAuthActions from "./hooks/useAuthActions";
import GoogleAuthButton from "./components/GoogleAuthButton";
import AuthDivider from "./components/AuthDivider";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgotPasswordLink from "./components/ForgotPasswordLink";
import DevelopmentLinks from "./components/DevelopmentLinks";
import "./auth.css";

export default function AuthPage(){
  const { mode } = useAuthMode();
  const { googleLogin } = useAuthActions();

  return (
    <div className="auth-shell">

      <main className="auth-layout">
        <section className="auth-card">
          <GoogleAuthButton onGoogleAuth={googleLogin} />
          <AuthDivider />
          {mode === "login" && <LoginForm />}
          {mode === "signup" && <SignupForm />}
          <ForgotPasswordLink />
          <DevelopmentLinks />
        </section>
      </main>
    </div>
  );
}
