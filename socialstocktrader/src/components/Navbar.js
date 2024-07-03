// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will create this CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Dashboard</Link>
        </li>
        <li className="navbar-item">
          <Link to="./OrderHistory" className="navbar-link">Order History</Link>
        </li>
        <li className="navbar-item">
          <Link to="/PortfolioPie" className="navbar-link">Portfolio Pie</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Rules" className="navbar-link">Rules</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
