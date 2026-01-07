import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


import "../styles/adminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("echowatchUser"));
  if (!user || user.role !== "admin") {
    navigate("/");
  }
}, []);


  return (
    <div className="admin-dashboard">

      {/* Header */}
      <header className="admin-header">
        <h2>EchoWatch – Admin Control Panel</h2>
        <span className="admin-role">City Authority</span>
      </header>

      {/* Stats */}
      <section className="admin-stats">

        <div className="admin-card danger">
          <h4>Critical AQI Zones</h4>
          <p>3 Areas</p>
        </div>

        <div className="admin-card warning">
          <h4>Noise Violations</h4>
          <p>12 Reports</p>
        </div>

        <div className="admin-card info">
          <h4>Active Alerts</h4>
          <p>5 Ongoing</p>
        </div>

        <div className="admin-card success">
          <h4>Sensors Online</h4>
          <p>98%</p>
        </div>

      </section>

      {/* Alerts Table */}
      <section className="admin-table">
        <h3>Live Environmental Alerts</h3>

        <table>
          <thead>
            <tr>
              <th>Zone</th>
              <th>Type</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Sector 21</td>
              <td>Noise</td>
              <td>High</td>
              <td className="danger-text">Action Needed</td>
            </tr>

            <tr>
              <td>Industrial Area</td>
              <td>AQI</td>
              <td>Severe</td>
              <td className="danger-text">Emergency</td>
            </tr>

            <tr>
              <td>School Zone</td>
              <td>Heat</td>
              <td>Moderate</td>
              <td className="warning-text">Monitor</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}
