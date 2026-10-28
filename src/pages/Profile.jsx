import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Profile() {
  const navigate = useNavigate();

  // Read saved user info from localStorage
  const name = localStorage.getItem("savedName") || "Valued Customer";
  const email = localStorage.getItem("savedEmail") || "No email provided";

  // Gender and Birthday state (loaded from localStorage if already saved)
  const [gender, setGender] = useState(localStorage.getItem("savedGender") || "");
  const [birthday, setBirthday] = useState(localStorage.getItem("savedBirthday") || "");
  const [saveMessage, setSaveMessage] = useState("");

  // Save updated profile info to localStorage
  const handleSaveDetails = (e) => {
    e.preventDefault();
    localStorage.setItem("savedGender", gender);
    localStorage.setItem("savedBirthday", birthday);
    setSaveMessage("Profile details updated successfully!");
  };

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

        <form onSubmit={handleSaveDetails}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              padding: "20px",
              marginBottom: "20px",
              textAlign: "left"
            }}
          >
            {/* Full Name */}
            <div style={{ marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block" }}>
                Full Name
              </span>
              <span style={{ fontSize: "16px", color: "white", fontWeight: "500" }}>
                {name}
              </span>
            </div>

            {/* Email Address */}
            <div style={{ marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block" }}>
                Email Address
              </span>
              <span style={{ fontSize: "16px", color: "white", fontWeight: "500" }}>
                {email}
              </span>
            </div>

            {/* Gender Selection */}
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block", marginBottom: "8px" }}>
                Gender
              </span>
              <div style={{ display: "flex", gap: "18px", alignItems: "center", color: "white", fontSize: "14px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender == "male"}
                    onChange={(e) => setGender(e.target.value)}
                  /> Male
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender == "female"}
                    onChange={(e) => setGender(e.target.value)}
                  /> Female
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender == "other"}
                    onChange={(e) => setGender(e.target.value)}
                  /> Other
                </label>
              </div>
            </div>

            {/* Birthday Selection */}
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="profile-birthday" style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block", marginBottom: "8px" }}>
                Birthday
              </label>
              <input
                id="profile-birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  colorScheme: "dark"
                }}
              />
            </div>

            {/* Account Status */}
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", display: "block" }}>
                Account Status
              </span>
              <span style={{ fontSize: "14px", color: "#4ade80", fontWeight: "600" }}>
                ● Logged In / Active
              </span>
            </div>
          </div>

          {saveMessage && (
            <p style={{ color: "#4ade80", fontSize: "13px", marginBottom: "14px" }}>
              {saveMessage}
            </p>
          )}

          <button
            type="submit"
            className="btn-submit"
            style={{ width: "100%", marginBottom: "12px" }}
          >
            Save Profile Details
          </button>
        </form>

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
