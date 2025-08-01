import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Task<span>Master</span></div>

      <div className="menu-icon" onClick={toggleMenu}>
        &#8942; {/* ⋮ */}
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/create-task" onClick={closeMenu}>Create Task</Link></li>
        <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
        <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
