import AQICard from "../components/AQICard";
import TempCard from "../components/TempCard";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>EchoWatch Dashboard</h1>

      <div className="card-row">
        <AQICard />
        <TempCard />
      </div>
    </div>
  );
}

export default Dashboard;
