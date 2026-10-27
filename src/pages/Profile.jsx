import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Profile() {
  const navigate = useNavigate();

  // Read saved user info from localStorage
  const name = localStorage.getItem("savedName") || "Valued Customer";
  const email = localStorage.getItem("savedEmail") || "No email provided";

  const handleLogout = () => {
    localStorage.setItem("loginStatus", "false");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="auth-card" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "56px", marginBottom: "12px" }}>👤</div>
        <p className="brand-tag">User Account</p>
        <h2 className="form-title" style={{ marginBottom: "24px" }}>My Profile</h2>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "14px",
            padding: "20px",
            marginBottom: "24px",
            textAlign: "left"
          }}
        >
          <div style={{ marginBottom: "14px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block" }}>
              Full Name
            </span>
            <span style={{ fontSize: "16px", color: "white", fontWeight: "500" }}>
              {name}
            </span>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block" }}>
              Email Address
            </span>
            <span style={{ fontSize: "16px", color: "white", fontWeight: "500" }}>
              {email}
            </span>
          </div>

          <div>
            <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block" }}>
              Account Status
            </span>
            <span style={{ fontSize: "14px", color: "#4ade80", fontWeight: "600" }}>
              ● Logged In / Active
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="button"
            className="btn-submit"
            style={{ flex: 1, margin: 0 }}
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
          <button
            type="button"
            className="btn-submit"
            style={{ flex: 1, margin: 0, background: "rgba(255, 0, 60, 0.2)", border: "1px solid #ff003c" }}
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
