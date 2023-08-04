import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="flex-container">
            <a className="navbar-brand no-underline" href="/">
              <h2 className="no-underline">RESIDUUM</h2>
            </a>
            <div className="navbar-nav flex-container">
              <a className="nav-link" href="#!">
                Home
              </a>
              <a className="nav-link" href="#!">
                Sobre
              </a>
              <a className="nav-link" href="#!">
                Projetos
              </a>
              <a
                className="nav-link no-underline"
                href="./validation.html"
                target="_blank"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
