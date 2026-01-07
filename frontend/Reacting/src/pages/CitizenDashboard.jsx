import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


import "../styles/dashboard.css";

export default function CitizenDashboard() {

  const navigate = useNavigate();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("echowatchUser"));
  if (!user || user.role !== "citizen") {
    navigate("/");
  }
}, []);

  const user = JSON.parse(localStorage.getItem("echowatchUser"));

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h2>EchoWatch – Citizen Dashboard</h2>
        <div className="city-badge">{user?.city || "City"}</div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-content">

        <div className="dashboard-card" style={{ gridColumn: "span 4" }}>
          <div className="card-title">Air Quality Index</div>
          <div className="aqi-number">42</div>
          <div className="aqi-status">Good Air Quality</div>
        </div>

        <div className="dashboard-card" style={{ gridColumn: "span 4" }}>
          <div className="card-title">Temperature</div>
          <div className="metric-number">
            28 <span className="metric-unit">°C</span>
          </div>
        </div>

        <div className="dashboard-card" style={{ gridColumn: "span 4" }}>
          <div className="card-title">Humidity</div>
          <div className="metric-number">
            55 <span className="metric-unit">%</span>
          </div>
        </div>

        <div className="dashboard-card" style={{ gridColumn: "span 8" }}>
          <div className="card-title">Noise Level Hotspots</div>
          <div className="noise-heat">Moderate Noise Zones</div>
        </div>

        <div className="dashboard-card" style={{ gridColumn: "span 4" }}>
          <div className="card-title">Active Alerts</div>
          <div className="alert-item">🔴 High noise near main road</div>
          <div className="alert-item">⚠️ Heat levels increasing</div>
        </div>

      </div>
    </div>
  );
}
