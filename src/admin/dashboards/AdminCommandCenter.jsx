import React,{useEffect,useState} from "react";
import "./AdminCommandCenter.css";

const metrics = [
  ["Ecosystem Status", "OPERATIONAL", "All core surfaces available", "online"],
  ["Products", "12", "Ecosystem products", "online"],
  ["Platform Services", "6", "Shared ecosystem services", "online"],
  ["Attention Required", "04", "Items awaiting review", "warning"],
];

const attention = [
  ["Approvals", "04 pending administrative decisions", "warning"],
  ["Security", "No critical security incidents detected", "online"],
  ["Deployments", "Deployment health requires monitoring", "info"],
  ["Governance", "Runtime governance surface ready", "online"],
];

export default function AdminCommandCenter() {
  const [now,setNow]=useState(new Date());
  useEffect(()=>{
    const timer=setInterval(()=>setNow(new Date()),1000);
    return ()=>clearInterval(timer);
  },[]);

  const digitalTime=now.toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
  });

  const digitalDate=now.toLocaleDateString([],{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  });

  return (
    <section className="admin-command-center">
      <header className="command-center-heading">
        <div>
          <span className="command-kicker">AFRIDIGITAL ECOSYSTEM CONTROL</span>
          <h1>Command &amp; Control Center</h1>
          <p>Executive operational view of the entire AfriDigital ecosystem.</p>
        </div>

        <div className="command-state">
          <span className="status-dot online" />
          <strong>ECOSYSTEM OPERATIONAL</strong>
          <div key={digitalTime} className="command-digital-time">{digitalTime}</div>
          <div className="command-digital-date">{digitalDate}</div>
        </div>
      </header>

      <div className="command-metrics">
        {metrics.map(([label, value, meta, status]) => (
          <article className="command-metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{meta}</small>
            <i className={status} />
          </article>
        ))}
      </div>

      <div className="command-main-grid">
        <section className="command-panel ecosystem-command-card">
          <div className="panel-heading">
            <div>
              <span>ECOSYSTEM OVERVIEW</span>
              <h2>AfriDigital Network</h2>
            </div>
            <b>LIVE VIEW</b>
          </div>

          <div className="ecosystem-core">
            <div className="core-ring">
              <strong>AFRI</strong>
              <span>DIGITAL</span>
            </div>
            <div className="ecosystem-orbit orbit-one">AFRIAI</div>
            <div className="ecosystem-orbit orbit-two">COMMERCE</div>
            <div className="ecosystem-orbit orbit-three">TRUST</div>
            <div className="ecosystem-orbit orbit-four">BANK</div>
            <div className="ecosystem-orbit orbit-five">VISION</div>
          </div>

          <div className="ecosystem-legend">
            <span><i className="online" /> Operational</span>
            <span><i className="warning" /> Attention</span>
            <span><i className="info" /> Monitoring</span>
          </div>
        </section>

        <section className="command-panel attention-card">
          <div className="panel-heading">
            <div>
              <span>OPERATIONAL INTELLIGENCE</span>
              <h2>Attention Center</h2>
            </div>
            <b>04 ITEMS</b>
          </div>

          {attention.map(([title, text, status]) => (
            <div className="attention-row" key={title}>
              <i className={status} />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
              <span>›</span>
            </div>
          ))}
        </section>
      </div>

      <section className="command-panel command-actions">
        <div>
          <span>COMMAND ACTIONS</span>
          <h2>Administrative Control</h2>
          <p>Specialized control surfaces remain isolated from this global dashboard.</p>
        </div>

        <div className="action-buttons">
          <button type="button">Review Approvals</button>
          <button type="button">Security Center</button>
          <button type="button">Deployment Health</button>
          <button type="button">System Administration</button>
        </div>
      </section>
    </section>
  );
}
