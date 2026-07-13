export default function EnterpriseHeader(){

  return (
    <header className="africctv-enterprise-header">

      <div className="africctv-brand">

        <span className="security-icon">
          🛡️
        </span>

        <div>
          <strong>
            AfriCCTV
          </strong>

          <small>
            AI SECURITY MONITORING PLATFORM
          </small>
        </div>

      </div>


      <div className="africctv-system-panel">

        <div>
          <span>SYSTEM STATUS</span>
          <strong>PROTECTED</strong>
        </div>

        <div>
          <span>DEPLOYMENT</span>
          <strong>ONLINE</strong>
        </div>

        <div>
          <span>AI ENGINE</span>
          <strong>ACTIVE</strong>
        </div>

      </div>


      <div className="africctv-clock">

        <span>
          LIVE CLOCK
        </span>

        <strong>
          REAL TIME
        </strong>

      </div>

    </header>
  );
}
