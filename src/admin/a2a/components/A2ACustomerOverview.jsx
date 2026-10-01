import React from "react";

export default function A2ACustomerOverview({ telemetry }) {
  return (
    <section className="a2a-panel">
      <div className="a2a-section-heading">
        <div>
          <span>CUSTOMER / TENANT ACCOUNTS</span>
          <h2>Customers</h2>
        </div>
      </div>

      <div className="a2a-empty-state">
        <strong>Customer telemetry not connected</strong>
        <p>
          A2A runtime telemetry is live. Customer and tenant attribution
          will be connected separately.
        </p>
      </div>
    </section>
  );
}
