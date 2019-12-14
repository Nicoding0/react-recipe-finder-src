import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <header>
      <nav>
        <ul className="navbar">
          <Link className="links" exact="true" style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link className="links" style={navStyle} to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
