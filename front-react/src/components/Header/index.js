import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  const { brand, links } = props;

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="flex-container">
            <Link className="navbar-brand no-underline" to="/">
              <h2 className="no-underline">{brand}</h2>
            </Link>
            <div className="navbar-nav flex-container">
              {links.map((link) => (
                <Link key={link.to} className="nav-link" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
