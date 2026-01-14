import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    role: "citizen",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = () => {
    if (!form.name || !form.email || !form.city) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("echowatchUser", JSON.stringify(form));

    form.role === "admin"
      ? navigate("/admin-dashboard")
      : navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* LEFT INFO PANEL */}
      <div className="login-left">
        <h1>EchoWatch</h1>
        <p className="tagline">
          Smart Environmental Monitoring & Alert System
        </p>

        <ul>
          <li>🌍 Real-time AQI, Noise & Temperature monitoring</li>
          <li>🚨 Automatic alerts for risk zones</li>
          <li>🏙 Supports Smart Cities & Communities</li>
          <li>📊 Live dashboards for citizens & authorities</li>
        </ul>
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="login-right">
        <div className="login-card">
          <h2>Login</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <select name="role" onChange={handleChange}>
            <option value="citizen">Citizen</option>
            <option value="admin">City Authority</option>
          </select>

          <button onClick={handleLogin}>Enter Platform</button>
        </div>
      </div>
    </div>
  );
}
