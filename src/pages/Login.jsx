import { useState } from "react";
import "../css/Login.css";

// Login & Register Page Component
// Demonstrates: useState (Tabs & Form State), Controlled Components, Event Handling (onSubmit, onChange)
function Login() {
  // Tab state: 'login' or 'register'
  const [activeTab, setActiveTab] = useState("login");

  // Login form state (Controlled Inputs)
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form state (Controlled Inputs)
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  // Handle Login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!loginEmail || !loginPassword) {
      alert("Please enter both email and password.");
      return;
    }
    alert(`Welcome back! Logged in as: ${loginEmail}`);
    // Clear inputs
    setLoginEmail("");
    setLoginPassword("");
  };

  // Handle Register submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!regName || !regEmail || !regPassword) {
      alert("Please fill in all required fields.");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Account created successfully for ${regName}! You can now sign in.`);
    // Reset and switch to login tab
    setRegName("");
    setRegEmail("");
    setRegPassword("");
    setRegConfirmPassword("");
    setActiveTab("login");
  };

  return (
    <div className="login-page">
      <div className="auth-card">
        {/* Tab Buttons */}
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Conditional Rendering: Login Form */}
        {activeTab === "login" && (
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <p className="brand-tag">Welcome back</p>
            <h2 className="form-title">Sign In</h2>

            <div className="field">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            <div className="forgot">
              <a href="#" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email."); }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-submit">
              Login →
            </button>

            <div className="or-divider">or</div>

            <button
              type="button"
              className="btn-google"
              onClick={() => alert("Google authentication triggered.")}
            >
              Continue with Google
            </button>

            <p className="terms">
              By signing in you agree to our <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>
          </form>
        )}

        {/* Conditional Rendering: Register Form */}
        {activeTab === "register" && (
          <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <p className="brand-tag">Join us today</p>
            <h2 className="form-title">Create Account</h2>

            <div className="field">
              <label htmlFor="reg-name">Full Name</label>
              <input
                id="reg-name"
                type="text"
                placeholder="Your full name"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="reg-email">Email Address</label>
              <input
                id="reg-email"
                type="email"
                placeholder="you@example.com"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="reg-pass">Password</label>
              <input
                id="reg-pass"
                type="password"
                placeholder="Min. 6 characters"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="reg-confirm">Confirm Password</label>
              <input
                id="reg-confirm"
                type="password"
                placeholder="Repeat password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Create Account →
            </button>

            <p className="terms" style={{ marginTop: "16px" }}>
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("login");
                }}
              >
                Sign in
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
