import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

// Header Component
// Demonstrates: Props (with default value), useState hook, Conditional Rendering, Link from react-router-dom
function Header({ title = "The Daily Drape" }) {
  // State variables to control dropdown visibility
  const [occasionOpen, setOccasionOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Toggle Occasion dropdown
  const handleToggleOccasion = () => {
    setOccasionOpen(!occasionOpen);
    setProfileOpen(false);
  };

  // Toggle Profile dropdown
  const handleToggleProfile = () => {
    setProfileOpen(!profileOpen);
    setOccasionOpen(false);
  };

  // Close all open dropdowns
  const handleCloseAll = () => {
    setOccasionOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav className="nav">
      {/* Brand Title / Logo */}
      <Link to="/" className="nav-logo" onClick={handleCloseAll}>
        <h2>{title}</h2>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" onClick={handleCloseAll}>Home</Link>
        <Link to="/men" onClick={handleCloseAll}>Men</Link>
        <Link to="/" onClick={handleCloseAll}>Women</Link>
        <Link to="/" onClick={handleCloseAll}>Kids</Link>
        <Link to="/" onClick={handleCloseAll}>Accessories</Link>

        {/* Occasion Dropdown */}
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
                <Link to="/login" onClick={handleCloseAll}>🔑 Login</Link>
                <Link to="/login" onClick={handleCloseAll}>📝 Register</Link>
                <div className="divider"></div>
                <Link to="/login" onClick={handleCloseAll}>👤 My Profile</Link>
                <button 
                  type="button"
                  className="profile-menu-link logout-btn"
                  onClick={() => {
                    alert("Logged out successfully!");
                    handleCloseAll();
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button
            type="button"
            className="nav-icon-btn"
            title="Cart"
            onClick={() => alert("Cart is empty")}
          >
            🛒
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
