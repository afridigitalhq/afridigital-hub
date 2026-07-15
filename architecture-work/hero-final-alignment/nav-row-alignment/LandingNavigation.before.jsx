import { useState } from "react";

export default function LandingNavigation() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="landing-navigation">
      <div className="landing-nav-brand">
        <img src="/assets/logo/afridigital-logo.png" alt="AfriDigital" />
        <span>AfriDigital</span>
      </div>

      <div className="landing-nav-actions">
        <button className="login-button">Login / Sign Up</button>

        <button className="notification-button" aria-label="Notifications">
          🔔
        </button>

        <div className="profile-container">
          <button
            className="profile-button"
            onClick={() => setProfileOpen(!profileOpen)}
            aria-label="Profile"
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

        <button className="menu-button" aria-label="Menu">
          ☰
        </button>
      </div>
    </nav>
  );
}
