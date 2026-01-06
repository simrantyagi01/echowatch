import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>EchoWatch</h1>
      <p>Real-Time Environmental Monitoring</p>

      <input type="text" placeholder="Enter your name" />
      <select>
        <option>Citizen</option>
        <option>City Admin</option>
      </select>

      <button onClick={() => navigate("/dashboard")}>
        Enter Dashboard
      </button>
    </div>
  );
}

export default Login;
