import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/store" className="nav-link">
        Store Books
      </Link>
      <Link to="/display" className="nav-link">
        Display Books
      </Link>
    </nav>
  );
}

export default Navbar;
