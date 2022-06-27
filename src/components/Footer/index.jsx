import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center">
        <p className="footer__made">
          Made with <span>♥️</span> by JM
        </p>
        <p className="footer__links">
          <Link className="footer__link" to="/">
            Home
          </Link>
          |
          <Link to="/cv" className="footer__link">
            CV
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
