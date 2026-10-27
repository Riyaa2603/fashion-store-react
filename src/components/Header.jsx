import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../css/Header.css";

function Header({ title = "The Daily Drape" }) {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [occasionOpen, setOccasionOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleToggleOccasion = () => {
    setOccasionOpen(!occasionOpen);
    setProfileOpen(false);
  };

  const handleToggleProfile = () => {
    setProfileOpen(!profileOpen);
    setOccasionOpen(false);
  };

  const handleCloseAll = () => {
    setOccasionOpen(false);
    setProfileOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem("loginStatus", "false");
    handleCloseAll();
    navigate("/login");
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={handleCloseAll}>
        <h2>{title}</h2>
      </Link>

      <div className="nav-links">
        <Link to="/" onClick={handleCloseAll}>Home</Link>
        <Link to="/men" onClick={handleCloseAll}>Men</Link>
        <Link to="/women" onClick={handleCloseAll}>Women</Link>
        <Link to="/kids" onClick={handleCloseAll}>Kids</Link>
        <Link to="/accessories" onClick={handleCloseAll}>Accessories</Link>

        <div className="dropdown">
          <button 
            type="button" 
            className="nav-dropdown-btn"
            onClick={handleToggleOccasion}
          >
            Occasion ▼
          </button>

          {/* Conditional Rendering using && */}
          {occasionOpen && (
            <div className="dropdown-content">
              <Link to="/" onClick={handleCloseAll}>Holi</Link>
              <Link to="/" onClick={handleCloseAll}>Eid</Link>
              <Link to="/" onClick={handleCloseAll}>Diwali</Link>
              <Link to="/" onClick={handleCloseAll}>New Year</Link>
              <Link to="/" onClick={handleCloseAll}>Christmas</Link>
              <Link to="/" onClick={handleCloseAll}>Wedding</Link>
            </div>
          )}
        </div>

        {/* Action Icons */}
        <div className="nav-icons">
          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <button
              type="button"
              className="nav-icon-btn"
              title="Profile"
              onClick={handleToggleProfile}
            >
              👤
            </button>

            {/* Conditional Rendering */}
            {profileOpen && (
              <div className="profile-menu">
                <div style={{ padding: "10px 16px", fontSize: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "rgba(255, 255, 255, 0.7)" }}>
                  Hello, <strong style={{ color: "#ff003c" }}>{localStorage.getItem("savedName") || "User"}</strong>
                </div>
                <Link to="/profile" onClick={handleCloseAll}>👤 My Profile</Link>
                <div className="divider"></div>
                <button 
                  type="button"
                  className="profile-menu-link logout-btn"
                  onClick={handleLogout}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="nav-icon-btn"
            title="Cart"
            onClick={handleCloseAll}
          >
            🛒
            {cart.length > 0 && (
              <span
                style={{
                  background: "#ff003c",
                  color: "#fff",
                  borderRadius: "50%",
                  fontSize: "11px",
                  fontWeight: "bold",
                  padding: "1px 6px",
                  marginLeft: "4px",
                  verticalAlign: "top",
                }}
              >
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
