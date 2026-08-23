import useAuthMode from "./hooks/useAuthMode";
import useAuthActions from "./hooks/useAuthActions";
import GoogleAuthButton from "./components/GoogleAuthButton";
import AuthDivider from "./components/AuthDivider";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgotPasswordLink from "./components/ForgotPasswordLink";
import LandingNavigation from "../landing/navigation/LandingNavigation";
import LandingBackground from "../landing/background/LandingBackground";
import LandingWorldLayer from "../landing/world/LandingWorldLayer";
import LandingHero from "../landing/hero/LandingHero";
import EcosystemMarquee from "../landing/marquee/EcosystemMarquee";
import LandingFooter from "../landing/footer/LandingFooter";
import "../landing/hero/hero-v2.css";
import "../landing/landing.css";
import "./auth.css";
import LandingExperienceShell from "../landing/shell/LandingExperienceShell";

export default function AuthPage(){
  const { mode } = useAuthMode();
  const { googleLogin } = useAuthActions();
  const go = role => {
    localStorage.setItem("role",role);
    window.location.href = role==="admin" ? "/admin" : "/user";
  };
  return (
    <div className="landing-shell auth-shell">
      <LandingExperienceShell>

      <div className="landing-container">
        <main className="auth-layout">
          <section className="auth-card">
            <GoogleAuthButton onGoogleAuth={googleLogin} />
            <AuthDivider />
            {mode==="login" && <LoginForm />}
            {mode==="signup" && <SignupForm />}
            <ForgotPasswordLink />

            <div
              className="auth-temp-gates"
              style={{
                display:"flex",
                justifyContent:"center",
                gap:"16px",
                flexWrap:"wrap",
                marginTop:"24px"
              }}
            >
              <button type="button" onClick={()=>go("user")}>
                🧑‍💻 Continue to User Home
              </button>
              <button type="button" onClick={()=>go("admin")}>
                🛠️ Continue to Admin Home
              </button>
            </div>
          </section>
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}
