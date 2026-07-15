import { useState } from "react";

export default function LandingNavigation() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="landing-navigation">

      <div className="landing-nav-brand-row">
        <div className="landing-nav-brand">
          <span className="brand-shield">🛡️</span>
          <span className="brand-name">AfriDigital</span>
        </div>
      </div>

      <div className="landing-nav-utility-row">

        <button className="menu-button" aria-label="Menu">
          ☰
        </button>

        <div className="landing-nav-actions">

          <button className="login-button">
            Login / Sign Up
          </button>

          <button className="notification-button" aria-label="Notifications">
            🔔
          </button>

          <div className="profile-container">
            <button
              className="profile-button"
              aria-label="Profile"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              👤
            </button>

            {profileOpen && (
              <div className="profile-menu">
                <div>My AfriDigital Account</div>
                <div>My Ecosystem</div>
                <div>Settings</div>
                <div>Logout</div>
              </div>
            )}
          </div>

        </div>

      </div>

    </nav>
  );
}
