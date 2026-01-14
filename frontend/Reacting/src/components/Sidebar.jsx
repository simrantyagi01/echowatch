import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EchoWatch</h2>

      <ul>
        <li>📊 Overview</li>
        <li>👥 Users</li>
        <li>📡 Sensors</li>
        <li>⚠ Alerts</li>
        <li>⚙ Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
