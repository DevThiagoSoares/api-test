import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
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
      <div className="social">
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
      <p className="copyright">RESIDUUM © 2023</p>
    </footer>
  );
}

export default Footer;
