import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social">
          {" "}
          {/* Bloco de mídias sociais */}
          <a href="#!">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="#!">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="#!">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="#!">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Services</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Terms</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <p className="copyright">RESIDUUM © 2023</p>
    </footer>
  );
}

export default Footer;
