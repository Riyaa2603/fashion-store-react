import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

// Login & Register Page Component
// Demonstrates: useState, Controlled Components, Form Validation, localStorage Auth
function Login() {
  const navigate = useNavigate();

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

  // Field-specific validation errors
  const [errors, setErrors] = useState({});

  // Handle Login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (loginEmail === "") {
      newErrors.loginEmail = "Email field is required";
    }
    if (loginPassword === "") {
      newErrors.loginPassword = "Password field is required";
    }

    if (loginEmail !== "" && loginPassword !== "") {
      let savedEmail = localStorage.getItem("savedEmail");
      let savedPassword = localStorage.getItem("savedPassword");

      if (!savedEmail) {
        newErrors.login = "No account found. Please register first.";
      } else if (loginEmail === savedEmail && loginPassword === savedPassword) {
        localStorage.setItem("loginStatus", "true");
        navigate("/");
        return;
      } else {
        newErrors.login = "Invalid email or password";
      }
    }

    setErrors(newErrors);
  };

  // Handle Register submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (regName === "") {
      newErrors.regName = "Name field is required";
    } else if (/\d/.test(regName)) {
      newErrors.regName = "Name should not contain numbers";
    }

    if (regEmail === "") {
      newErrors.regEmail = "Email field is required";
    }

    if (regPassword === "") {
      newErrors.regPassword = "Password field is required";
    } else if (regPassword.length < 6) {
      newErrors.regPassword = "Password must be at least 6 characters";
    }

    if (regConfirmPassword === "") {
      newErrors.regConfirmPassword = "Confirm password field is required";
    } else if (regPassword !== regConfirmPassword) {
      newErrors.regConfirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage
    localStorage.setItem("savedName", regName);
    localStorage.setItem("savedEmail", regEmail);
    localStorage.setItem("savedPassword", regPassword);

    alert(`Account created successfully for ${regName}! Please sign in.`);
    setRegName("");
    setRegEmail("");
    setRegPassword("");
    setRegConfirmPassword("");
    setErrors({});
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
            onClick={() => {
              setActiveTab("login");
              setErrors({});
            }}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("register");
              setErrors({});
            }}
          >
            Register
          </button>
        </div>

        {/* Conditional Rendering: Login Form */}
        {activeTab === "login" && (
          <form className="auth-form" onSubmit={handleLoginSubmit} noValidate>
            <p className="brand-tag">Welcome back</p>
            <h2 className="form-title">Sign In</h2>

            <div className="field">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={loginEmail}
                onChange={(e) => {
                  let val = e.target.value;
                  setLoginEmail(val);
                  if (val !== "") {
                    setErrors((prev) => ({ ...prev, loginEmail: "", login: "" }));
                  }
                }}
                style={{
                  borderColor: errors.loginEmail ? "red" : ""
                }}
              />
              <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>{errors.loginEmail}</p>
            </div>

            <div className="field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => {
                  let val = e.target.value;
                  setLoginPassword(val);
                  if (val !== "") {
                    setErrors((prev) => ({ ...prev, loginPassword: "", login: "" }));
                  }
                }}
                style={{
                  borderColor: errors.loginPassword ? "red" : ""
                }}
              />
              <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>{errors.loginPassword}</p>
            </div>

            {errors.login && (
              <p style={{ color: "red", fontSize: "13px", margin: "8px 0 0" }}>{errors.login}</p>
            )}

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
          <form className="auth-form" onSubmit={handleRegisterSubmit} noValidate>
            <p className="brand-tag">Join us today</p>
            <h2 className="form-title">Create Account</h2>

            <div className="field">
              <label htmlFor="reg-name">Full Name</label>
              <input
                id="reg-name"
                type="text"
                placeholder="Your full name"
                value={regName}
                onChange={(e) => {
                  let val = e.target.value;
                  setRegName(val);
                  if (val !== "") {
                    setErrors((prev) => ({ ...prev, regName: "" }));
                  }
                }}
                onBlur={() => {
                  if (/\d/.test(regName)) {
                    setErrors((prev) => ({ ...prev, regName: "Name should not contain numbers" }));
                  }
                }}
                style={{
                  borderColor: errors.regName ? "red" : ""
                }}
              />
              <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>{errors.regName}</p>
            </div>

            <div className="field">
              <label htmlFor="reg-email">Email Address</label>
              <input
                id="reg-email"
                type="email"
                placeholder="you@example.com"
                value={regEmail}
                onChange={(e) => {
                  let val = e.target.value;
                  setRegEmail(val);
                  if (val !== "") {
                    setErrors((prev) => ({ ...prev, regEmail: "" }));
                  }
                }}
                style={{
                  borderColor: errors.regEmail ? "red" : ""
                }}
              />
              <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>{errors.regEmail}</p>
            </div>

            <div className="field">
              <label htmlFor="reg-pass">Password</label>
              <input
                id="reg-pass"
                type="password"
                placeholder="Min. 6 characters"
                value={regPassword}
                onChange={(e) => {
                  let val = e.target.value;
                  setRegPassword(val);
                  if (val !== "") {
                    setErrors((prev) => ({ ...prev, regPassword: "" }));
                  }
                }}
                style={{
                  borderColor: errors.regPassword ? "red" : ""
                }}
              />
              <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>{errors.regPassword}</p>
            </div>

            <div className="field">
              <label htmlFor="reg-confirm">Confirm Password</label>
              <input
                id="reg-confirm"
                type="password"
                placeholder="Repeat password"
                value={regConfirmPassword}
                onChange={(e) => {
                  let val = e.target.value;
                  setRegConfirmPassword(val);
                  if (val !== "") {
                    setErrors((prev) => ({ ...prev, regConfirmPassword: "" }));
                  }
                }}
                style={{
                  borderColor: errors.regConfirmPassword ? "red" : ""
                }}
              />
              <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>{errors.regConfirmPassword}</p>
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
                  setErrors({});
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
