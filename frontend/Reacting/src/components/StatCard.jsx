import "../styles/card.css";

function StatCard({ title, value, status }) {
  return (
    <div className={`card ${status.toLowerCase()}`}>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <span className="status">{status}</span>
    </div>
  );
}

export default StatCard;
