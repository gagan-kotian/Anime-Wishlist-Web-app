import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store">Store Books</Link>
      <Link to="/display">Display Books</Link>
    </div>
  );
}

export default Navbar;
